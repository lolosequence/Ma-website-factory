#!/usr/bin/env node
/**
 * new-site.mjs — Crée un nouveau site client à partir du template Ma-website-factory
 *
 * Usage:
 *   node scripts/new-site.mjs --name site-boulangerie-dupont [--description "Site de la boulangerie Dupont"]
 *
 * Options:
 *   --dry-run          Simuler sans créer
 *   --skip-clone       Ne pas cloner en local
 *   --skip-install     Cloner sans lancer npm install (plus rapide sur Windows FS)
 *   --skip-dokploy     Ne pas configurer Dokploy
 *   --server-url URL   URL publique prod (ex: https://yellov.mawebsitefactory.fr)
 *                      Défaut : https://{slug}.mawebsitefactory.fr
 *   --server-id ID     ID du serveur Dokploy cible (pour héberger chez le client)
 *   --pg-port PORT     Port PostgreSQL local (défaut: auto-détecté à partir de 5432)
 *
 * Prérequis (variables d'environnement ou ~/.new-site.env) :
 *   GITHUB_TOKEN       — token GitHub avec scopes: repo, workflow
 *   GITHUB_USERNAME    — ton username GitHub (ex: lolosequence)
 *   GITHUB_TEMPLATE    — nom du repo template (défaut: Ma-website-factory)
 *   LOCAL_PROJECTS_DIR — chemin local pour cloner (défaut: /mnt/c/Users/laure/Mes projets/Mes clients)
 *   DOKPLOY_URL        — URL de l'instance Dokploy (ex: https://admin.workflowlolo.fr)
 *   DOKPLOY_TOKEN      — token API Dokploy
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
  LOCAL_PROJECTS_DIR: '/mnt/c/Users/laure/Mes projets/Mes clients',
}

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
  config.GITHUB_TOKEN = process.env.GITHUB_TOKEN || null
  config.DOKPLOY_TOKEN = process.env.DOKPLOY_TOKEN || null
  config.DOKPLOY_URL = (process.env.DOKPLOY_URL || '').replace(/\/$/, '') || null
  return config
}

// ─── CLI args ───────────────────────────────────────────────────────────────

function parseArgs() {
  const args = process.argv.slice(2)
  const result = {}
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--name') result.name = args[++i]
    else if (args[i] === '--description') result.description = args[++i]
    else if (args[i] === '--server-url') result.serverUrl = args[++i]
    else if (args[i] === '--skip-clone') result.skipClone = true
    else if (args[i] === '--skip-install') result.skipInstall = true
    else if (args[i] === '--skip-dokploy') result.skipDokploy = true
    else if (args[i] === '--server-id') result.serverId = args[++i]
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

## Variables d'environnement (Dev local)

\`\`\`
DATABASE_URL=postgresql://payload:payload@localhost:${data.pgPort}/${name.replace(/^site-/, '')}
PAYLOAD_SECRET=${data.payloadSecret}
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
POSTGRES_DB=${name.replace(/^site-/, '')}
POSTGRES_PORT=${data.pgPort}
\`\`\`

(.env pré-rempli automatiquement dans le repo cloné)

## Prochaines étapes

- [ ] Vérifier le déploiement sur Dokploy
- [ ] Dokploy → Application → Domains → Ajouter le domaine prod
- [ ] Lancer \`/scaffold-collection\` pour ajouter les collections client
- [ ] Supprimer ce fichier avant de commit
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

  console.log(`\n${'═'.repeat(60)}`)
  console.log(`  Création du site : ${name}`)
  if (args.dryRun) console.log(`  MODE DRY-RUN — aucune action réelle`)
  console.log(`${'═'.repeat(60)}\n`)

  const slug = name.replace(/^site-/, '')
  const serverUrl = args.serverUrl || `https://${slug}.mawebsitefactory.fr`

  // Vérification des tokens requis
  const missing = []
  if (!config.GITHUB_TOKEN) missing.push('GITHUB_TOKEN')
  if (!config.DOKPLOY_TOKEN && !args.skipDokploy) missing.push('DOKPLOY_TOKEN')
  if (!config.DOKPLOY_URL && !args.skipDokploy) missing.push('DOKPLOY_URL')

  if (missing.length) {
    console.log('\n⚠️  Variables manquantes. Crée le fichier ~/.new-site.env avec :')
    for (const key of missing) console.log(`  ${key}=...`)
    console.log('\nVoir scripts/new-site.env.example pour le template.\n')
    process.exit(1)
  }

  // Déterminer le port PostgreSQL local
  const pgPort = args.pgPort || await findAvailablePort(5432)

  if (args.dryRun) {
    info(`[dry-run] Créerait le repo ${config.GITHUB_USERNAME}/${name}`)
    info(`[dry-run] Clonerait dans : ${join(config.LOCAL_PROJECTS_DIR, name)}`)
    info(`[dry-run] Port PostgreSQL local : ${pgPort}`)
    if (!args.skipDokploy) info(`[dry-run] Configurerait Dokploy : ${serverUrl}`)
    return
  }

  const report = { repoUrl: '', payloadSecret: generateSecret(), pgPort }

  // 1. Repo GitHub
  const repo = await createGithubRepo(name, args.description, config)
  report.repoUrl = repo.html_url

  // Attendre que le repo soit prêt (délai GitHub)
  await new Promise(r => setTimeout(r, 3000))

  // 2. Clone local
  if (!args.skipClone) {
    await cloneLocally(repo.clone_url, name, pgPort, args.skipInstall, config)
  }

  // 3. Rapport
  saveSetupReport(name, report, config)

  // 4. Dokploy
  if (!args.skipDokploy && !args.skipClone) {
    log('🚀', 'Configuration Dokploy...')
    const dokployScript = join(decodeURIComponent(new URL('.', import.meta.url).pathname), 'dokploy-setup.mjs')
    const serverIdFlag = args.serverId ? ` --server-id "${args.serverId}"` : ''
    run(
      `node "${dokployScript}" --name "${name}" --server-url "${serverUrl}" --payload-secret "${report.payloadSecret}"${serverIdFlag}`,
      { shell: true }
    )
  } else if (args.skipDokploy) {
    info('Dokploy ignoré (--skip-dokploy) — lancer manuellement :')
    info(`  node scripts/dokploy-setup.mjs --name ${name} --server-url ${serverUrl}`)
  }

  // ─── Résumé ───────────────────────────────────────────────────────────────
  console.log(`\n${'═'.repeat(60)}`)
  console.log('  ✅ Site configuré avec succès !')
  console.log(`${'═'.repeat(60)}`)
  console.log(`
  📂 Local      : ${join(config.LOCAL_PROJECTS_DIR, name)}
  🐙 GitHub     : ${report.repoUrl}
  🐘 PG local   : port ${report.pgPort}
  🌐 Prod       : ${args.skipDokploy ? '(skipped)' : serverUrl}

  Prochaines étapes :
  1. cd "${join(config.LOCAL_PROJECTS_DIR, name)}"
  2. .env pré-rempli — vérifier les valeurs si besoin
  3. docker-compose up -d  →  démarrer PostgreSQL local (port ${report.pgPort})
  4. npm run payload migrate
  5. npm run dev
  6. Dokploy → Application → Domains → Ajouter ${serverUrl.replace(/^https?:\/\//, '')}
  `)
}

main().catch(err => {
  console.error('\n❌ Erreur fatale :', err.message)
  process.exit(1)
})
