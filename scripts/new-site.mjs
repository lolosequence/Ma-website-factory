#!/usr/bin/env node
/**
 * new-site.mjs — Crée un nouveau site client à partir du template Ma-website-factory
 *
 * Usage:
 *   node scripts/new-site.mjs --name site-boulangerie-dupont [--description "Site de la boulangerie Dupont"]
 *
 * Options:
 *   --dry-run        Simuler sans créer
 *   --skip-neon      Ne pas créer la DB Neon
 *   --skip-vercel    Ne pas créer le projet Vercel
 *   --skip-clone     Ne pas cloner en local
 *   --skip-install   Cloner sans lancer npm install (plus rapide sur Windows FS)
 *   --pg-port PORT   Port PostgreSQL local (défaut: auto-détecté à partir de 5432)
 *
 * Prérequis (variables d'environnement ou ~/.new-site.env) :
 *   GITHUB_TOKEN       — token GitHub avec scopes: repo, workflow
 *   GITHUB_USERNAME    — ton username GitHub (ex: lolosequence)
 *   GITHUB_TEMPLATE    — nom du repo template (défaut: Ma-website-factory)
 *   VERCEL_TOKEN       — token Vercel (Account Settings → Tokens)
 *   VERCEL_TEAM_ID     — team ID Vercel (optionnel, si tu travailles en équipe)
 *   NEON_API_KEY       — token API Neon (Account → API Keys)
 *   NEON_REGION        — région Neon (défaut: aws-eu-central-1)
 *   LOCAL_PROJECTS_DIR — chemin local pour cloner (défaut: /mnt/c/Users/laure/Mes projets/Mes clients)
 */

import { execSync } from 'child_process'
import { existsSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { homedir } from 'os'
import { createServer } from 'net'

// ─── Config ────────────────────────────────────────────────────────────────

const DEFAULTS = {
  GITHUB_USERNAME: 'lolosequence',
  GITHUB_TEMPLATE: 'Ma-website-factory',
  NEON_REGION: 'aws-eu-central-1',
  LOCAL_PROJECTS_DIR: '/mnt/c/Users/laure/Mes projets/Mes clients',
}

// Chemin vers libsodium-wrappers (installé dans Ma factory/node_modules)
const SODIUM_PATH = new URL('../node_modules/libsodium-wrappers/dist/modules/libsodium-wrappers.js', import.meta.url).pathname

function loadEnv() {
  const envFile = join(homedir(), '.new-site.env')
  if (existsSync(envFile)) {
    const lines = readFileSync(envFile, 'utf8').split('\n')
    for (const line of lines) {
      const [key, ...rest] = line.split('=')
      if (key && rest.length) process.env[key.trim()] = rest.join('=').trim()
    }
  }
}

function getConfig() {
  loadEnv()
  const config = {}
  for (const [key, defaultVal] of Object.entries(DEFAULTS)) {
    config[key] = process.env[key] || defaultVal
  }
  for (const key of ['GITHUB_TOKEN', 'VERCEL_TOKEN', 'NEON_API_KEY']) {
    config[key] = process.env[key] || null
  }
  config.VERCEL_TEAM_ID = process.env.VERCEL_TEAM_ID || null
  return config
}

// ─── CLI args ───────────────────────────────────────────────────────────────

function parseArgs() {
  const args = process.argv.slice(2)
  const result = {}
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--name') result.name = args[++i]
    else if (args[i] === '--description') result.description = args[++i]
    else if (args[i] === '--skip-clone') result.skipClone = true
    else if (args[i] === '--skip-install') result.skipInstall = true
    else if (args[i] === '--skip-neon') result.skipNeon = true
    else if (args[i] === '--skip-vercel') result.skipVercel = true
    else if (args[i] === '--dry-run') result.dryRun = true
    else if (args[i] === '--pg-port') result.pgPort = parseInt(args[++i], 10)
  }
  return result
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function log(emoji, msg) { console.log(`${emoji}  ${msg}`) }
function ok(msg) { log('✅', msg) }
function info(msg) { log('ℹ️ ', msg) }
function warn(msg) { log('⚠️ ', msg) }
function fail(msg) { log('❌', msg); process.exit(1) }

function run(cmd, opts = {}) {
  try {
    return execSync(cmd, { stdio: opts.silent ? 'pipe' : 'inherit', encoding: 'utf8', ...opts })
  } catch (err) {
    if (opts.optional) return null
    throw err
  }
}

async function githubApi(path, method = 'GET', body = null, token) {
  const res = await fetch(`https://api.github.com${path}`, {
    method,
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  const data = await res.json()
  if (!res.ok) throw new Error(`GitHub API ${method} ${path} → ${res.status}: ${data.message}`)
  return data
}

async function neonApi(path, method = 'GET', body = null, apiKey) {
  const res = await fetch(`https://console.neon.tech/api/v2${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  const data = await res.json()
  if (!res.ok) throw new Error(`Neon API ${method} ${path} → ${res.status}: ${JSON.stringify(data)}`)
  return data
}

async function vercelApi(path, method = 'GET', body = null, token, teamId) {
  const url = teamId
    ? `https://api.vercel.com${path}?teamId=${teamId}`
    : `https://api.vercel.com${path}`
  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  const data = await res.json()
  if (!res.ok) throw new Error(`Vercel API ${method} ${path} → ${res.status}: ${JSON.stringify(data)}`)
  return data
}

// ─── Étapes ─────────────────────────────────────────────────────────────────

async function createGithubRepo(name, description, config) {
  log('🐙', `Création du repo GitHub ${name}...`)

  const existing = await githubApi(
    `/repos/${config.GITHUB_USERNAME}/${name}`,
    'GET', null, config.GITHUB_TOKEN
  ).catch(() => null)

  if (existing) {
    warn(`Repo ${name} déjà existant → on continue avec celui-ci`)
    return existing
  }

  const repo = await githubApi(
    `/repos/${config.GITHUB_USERNAME}/${config.GITHUB_TEMPLATE}/generate`,
    'POST',
    {
      owner: config.GITHUB_USERNAME,
      name,
      description: description || `Site généré depuis ${config.GITHUB_TEMPLATE}`,
      private: true,
      include_all_branches: false,
    },
    config.GITHUB_TOKEN
  )

  ok(`Repo créé : ${repo.html_url}`)
  return repo
}

async function createNeonProject(name, config) {
  log('🌿', `Création du projet Neon ${name}...`)

  const project = await neonApi(
    '/projects',
    'POST',
    {
      project: {
        name,
        region_id: config.NEON_REGION,
        pg_version: 16,
      },
    },
    config.NEON_API_KEY
  )

  const connectionString = project.connection_uris?.[0]?.connection_uri
    || project.project?.connection_uri

  ok(`Projet Neon créé : ${project.project?.name} (${project.project?.id})`)
  return { project: project.project, connectionString }
}

async function createVercelProject(name, repoFullName, config) {
  log('▲ ', `Création du projet Vercel ${name}...`)

  const existing = await vercelApi(
    `/v9/projects/${name}`,
    'GET', null, config.VERCEL_TOKEN, config.VERCEL_TEAM_ID
  ).catch(() => null)

  if (existing) {
    warn(`Projet Vercel ${name} déjà existant → on continue`)
    return existing
  }

  const project = await vercelApi(
    '/v10/projects',
    'POST',
    {
      name,
      framework: 'nextjs',
      gitRepository: {
        type: 'github',
        repo: repoFullName,
      },
    },
    config.VERCEL_TOKEN,
    config.VERCEL_TEAM_ID
  )

  ok(`Projet Vercel créé : ${project.name}`)
  return project
}

async function setVercelEnvVars(projectId, envVars, config) {
  log('🔧', `Configuration des variables d'environnement Vercel...`)

  for (const { key, value, targets } of envVars) {
    await vercelApi(
      `/v10/projects/${projectId}/env`,
      'POST',
      {
        key,
        value,
        type: 'encrypted',
        target: targets || ['preview'],
      },
      config.VERCEL_TOKEN,
      config.VERCEL_TEAM_ID
    ).catch(err => {
      warn(`Env var ${key} : ${err.message} (peut-être déjà existante)`)
    })
  }

  ok(`Variables d'environnement configurées`)
}

async function setGithubSecrets(repoName, secrets, config) {
  log('🔐', `Configuration des secrets GitHub...`)

  // Récupérer la clé publique du repo pour chiffrer les secrets
  const { key: repoPublicKey, key_id } = await githubApi(
    `/repos/${config.GITHUB_USERNAME}/${repoName}/actions/secrets/public-key`,
    'GET', null, config.GITHUB_TOKEN
  )

  // Chiffrement via libsodium-wrappers (crypto_box_seal)
  const sodium = (await import(SODIUM_PATH)).default
  await sodium.ready

  for (const { name: secretName, value } of secrets) {
    if (!value) {
      warn(`Secret ${secretName} ignoré (valeur vide)`)
      continue
    }
    const keyBytes = Buffer.from(repoPublicKey, 'base64')
    const msgBytes = Buffer.from(value)
    const encrypted = sodium.crypto_box_seal(msgBytes, keyBytes)
    const encryptedB64 = Buffer.from(encrypted).toString('base64')

    await githubApi(
      `/repos/${config.GITHUB_USERNAME}/${repoName}/actions/secrets/${secretName}`,
      'PUT',
      { encrypted_value: encryptedB64, key_id },
      config.GITHUB_TOKEN
    )
    ok(`Secret ${secretName} configuré`)
  }
}

function isPortAvailable(port) {
  return new Promise(resolve => {
    const server = createServer()
    server.once('error', () => resolve(false))
    server.once('listening', () => { server.close(); resolve(true) })
    server.listen(port, '127.0.0.1')
  })
}

async function findAvailablePort(startPort = 5432) {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) return port
  }
  throw new Error(`Aucun port disponible à partir de ${startPort}`)
}

async function cloneLocally(repoUrl, name, pgPort, skipInstall, config) {
  const targetDir = join(config.LOCAL_PROJECTS_DIR, name)

  if (existsSync(targetDir)) {
    warn(`Dossier ${targetDir} déjà existant → clone ignoré`)
    return targetDir
  }

  log('📂', `Clonage en local dans ${targetDir}...`)
  run(`git clone "${repoUrl}" "${targetDir}"`)

  if (skipInstall) {
    info(`npm install ignoré (--skip-install) — lancer manuellement : cd "${targetDir}" && npm install`)
  } else {
    run(`cd "${targetDir}" && npm install`, { shell: true })
    ok(`Dépendances installées`)
  }

  // Pré-remplir .env avec DATABASE_URL et POSTGRES_PORT corrects
  const envExamplePath = join(targetDir, '.env.example')
  const envPath = join(targetDir, '.env')
  if (existsSync(envExamplePath) && !existsSync(envPath)) {
    const dbName = name.replace(/^site-/, '')
    let envContent = readFileSync(envExamplePath, 'utf8')
    envContent = envContent
      .replace(/DATABASE_URL=postgresql:\/\/payload:payload@localhost:\d+\/payload/, `DATABASE_URL=postgresql://payload:payload@localhost:${pgPort}/${dbName}`)
      .replace(/POSTGRES_DB=payload/, `POSTGRES_DB=${dbName}`)
      .replace(/POSTGRES_PORT=\d+/, `POSTGRES_PORT=${pgPort}`)
    writeFileSync(envPath, envContent)
    ok(`.env créé (DB: ${dbName}, port: ${pgPort})`)
  }

  ok(`Repo cloné dans ${targetDir}`)
  return targetDir
}

function generateSecret() {
  try {
    return run('openssl rand -hex 32', { silent: true }).trim()
  } catch {
    // Fallback JS
    return [...Array(64)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')
  }
}

function saveSetupReport(name, data, config) {
  const reportPath = join(config.LOCAL_PROJECTS_DIR, name, 'SETUP-REPORT.md')
  const content = `# Setup Report — ${name}

Généré le ${new Date().toISOString()}

## Ressources créées

| Ressource | URL / Valeur |
|-----------|-------------|
| Repo GitHub | ${data.repoUrl} |
| Projet Vercel | ${data.vercelUrl || 'https://vercel.com/dashboard'} |
| Projet Neon | ${data.neonProjectId || 'voir neon.tech'} |

## Variables d'environnement (Vercel / Production)

\`\`\`
DATABASE_URL=${data.neonConnectionString || '← à copier depuis neon.tech'}
PAYLOAD_SECRET=${data.payloadSecret}
NEXT_PUBLIC_SERVER_URL=https://${name}.vercel.app
\`\`\`

## Variables d'environnement (Dev local)

\`\`\`
DATABASE_URL=postgresql://payload:payload@localhost:${data.pgPort}/${name.replace(/^site-/, '')}
PAYLOAD_SECRET=${data.payloadSecret}
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
POSTGRES_DB=${name.replace(/^site-/, '')}
POSTGRES_PORT=${data.pgPort}
\`\`\`

(.env pré-rempli automatiquement si --skip-install non utilisé)

## Prochaines étapes

- [ ] Vérifier le déploiement preview sur Vercel
- [ ] Configurer Dokploy (production)
- [ ] Lancer \`/scaffold-collection\` pour ajouter les collections client
- [ ] Supprimer ce fichier avant de commit

## Checklist Dokploy

\`\`\`
□ New Application → Source GitHub → ${name}
□ Build type : Dockerfile
□ Auto deploy sur push main : activé
□ Build Args : DATABASE_URL (Postgres Dokploy) + PAYLOAD_SECRET
□ Environment : DATABASE_URL + PAYLOAD_SECRET + NEXT_PUBLIC_SERVER_URL
□ Volume : ${name}-media → /app/public/media
\`\`\`
`
  try {
    writeFileSync(reportPath, content)
    ok(`Rapport de setup sauvegardé : SETUP-REPORT.md`)
  } catch {
    warn(`Impossible de sauvegarder le rapport (clone peut-être non effectué)`)
    console.log('\n' + content)
  }
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const args = parseArgs()
  const config = getConfig()

  if (!args.name) {
    fail('Argument --name requis. Ex: node scripts/new-site.mjs --name site-boulangerie-dupont')
  }

  const name = args.name
  const slug = name.replace(/^site-/, '')  // "boulangerie-dupont"

  console.log(`\n${'═'.repeat(60)}`)
  console.log(`  Création du site : ${name}`)
  if (args.dryRun) console.log(`  MODE DRY-RUN — aucune action réelle`)
  console.log(`${'═'.repeat(60)}\n`)

  // Vérification des tokens requis
  const missing = []
  if (!config.GITHUB_TOKEN) missing.push('GITHUB_TOKEN')
  if (!config.VERCEL_TOKEN && !args.skipVercel) missing.push('VERCEL_TOKEN')
  if (!config.NEON_API_KEY && !args.skipNeon) missing.push('NEON_API_KEY')

  if (missing.length) {
    console.log('\n⚠️  Variables manquantes. Crée le fichier ~/.new-site.env avec :')
    for (const key of missing) console.log(`  ${key}=...`)
    console.log('\nVoir le README pour les instructions complètes.\n')
    process.exit(1)
  }

  // Déterminer le port PostgreSQL local
  const pgPort = args.pgPort || await findAvailablePort(5432)

  if (args.dryRun) {
    info(`[dry-run] Créerait le repo ${config.GITHUB_USERNAME}/${name}`)
    info(`[dry-run] Créerait le projet Neon : ${name}`)
    info(`[dry-run] Créerait le projet Vercel : ${name}`)
    info(`[dry-run] Clonerait dans : ${join(config.LOCAL_PROJECTS_DIR, name)}`)
    info(`[dry-run] Port PostgreSQL local : ${pgPort}`)
    return
  }

  const report = { repoUrl: '', payloadSecret: generateSecret(), pgPort }

  // 1. Repo GitHub
  const repo = await createGithubRepo(name, args.description, config)
  report.repoUrl = repo.html_url

  // Attendre que le repo soit prêt (délai GitHub)
  await new Promise(r => setTimeout(r, 3000))

  // 2. Neon DB
  if (!args.skipNeon) {
    const { project: neonProject, connectionString } = await createNeonProject(name, config)
    report.neonProjectId = neonProject?.id
    report.neonConnectionString = connectionString
  }

  // 3. Vercel projet
  if (!args.skipVercel) {
    const vercelProject = await createVercelProject(
      name,
      `${config.GITHUB_USERNAME}/${name}`,
      config
    )
    report.vercelUrl = `https://vercel.com/${config.GITHUB_USERNAME}/${name}`

    // Variables Vercel (Preview)
    await setVercelEnvVars(vercelProject.id, [
      {
        key: 'DATABASE_URL',
        value: report.neonConnectionString || 'CONFIGURE_ME',
        targets: ['preview'],
      },
      {
        key: 'PAYLOAD_SECRET',
        value: report.payloadSecret,
        targets: ['preview', 'production'],
      },
      {
        key: 'NEXT_PUBLIC_SERVER_URL',
        value: `https://${name}.vercel.app`,
        targets: ['preview'],
      },
    ], config)

    // Secrets GitHub pour CI/CD
    const vercelOrgId = config.VERCEL_TEAM_ID || ''
    await setGithubSecrets(name, [
      { name: 'VERCEL_TOKEN', value: config.VERCEL_TOKEN },
      { name: 'VERCEL_ORG_ID', value: vercelOrgId },
      { name: 'VERCEL_PROJECT_ID', value: vercelProject.id },
    ], config)
  }

  // 4. Clone local
  const localDir = await cloneLocally(repo.clone_url, name, pgPort, args.skipInstall, config)

  // 5. Rapport
  saveSetupReport(name, report, config)

  // ─── Résumé ───────────────────────────────────────────────────────────────
  console.log(`\n${'═'.repeat(60)}`)
  console.log('  ✅ Site configuré avec succès !')
  console.log(`${'═'.repeat(60)}`)
  console.log(`
  📂 Local      : ${join(config.LOCAL_PROJECTS_DIR, name)}
  🐙 GitHub     : ${report.repoUrl}
  ▲  Vercel     : ${report.vercelUrl || '(skipped)'}
  🌿 Neon       : ${report.neonProjectId || '(skipped)'}
  🐘 PG local   : port ${report.pgPort}

  Prochaines étapes :
  1. cd "${join(config.LOCAL_PROJECTS_DIR, name)}"
  2. .env pré-rempli — vérifier les valeurs si besoin
  3. docker-compose up -d  →  démarrer PostgreSQL local (port ${report.pgPort})
  4. npm run payload migrate
  5. npm run dev
  6. Configurer Dokploy (voir SETUP-REPORT.md)
  `)
}

main().catch(err => {
  console.error('\n❌ Erreur fatale :', err.message)
  process.exit(1)
})
