#!/usr/bin/env node
/**
 * dokploy-setup.mjs — Configure un site client sur Dokploy
 *
 * Usage:
 *   node scripts/dokploy-setup.mjs --name site-yellov --server-url https://yellov.mawebsitefactory.fr
 *
 * Options:
 *   --name NAME          Slug du site (ex: site-yellov)
 *   --server-url URL     URL publique du site sur Dokploy (ex: https://yellov.mawebsitefactory.fr)
 *   --project NAME       Nom du projet Dokploy (défaut: "Clients")
 *   --payload-secret S   Surcharger le PAYLOAD_SECRET (sinon lu depuis SETUP-REPORT.md)
 *   --dry-run            Simuler sans créer
 *
 * Prérequis dans ~/.new-site.env :
 *   DOKPLOY_URL          URL de ton instance Dokploy (ex: https://mawebsitefactory.fr)
 *   DOKPLOY_TOKEN        Token API Dokploy (Settings → Profile → Generate API Token)
 *   GITHUB_USERNAME      Ton username GitHub
 */

import { existsSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { homedir } from 'os'

// ─── Config ─────────────────────────────────────────────────────────────────

const DEFAULTS = {
  GITHUB_USERNAME: 'lolosequence',
  LOCAL_PROJECTS_DIR: '/mnt/c/Users/laure/Mes projets/Mes clients',
  DOKPLOY_PROJECT_NAME: 'Clients',
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
  const config = { ...DEFAULTS }
  for (const key of ['GITHUB_USERNAME', 'LOCAL_PROJECTS_DIR']) {
    if (process.env[key]) config[key] = process.env[key]
  }
  config.DOKPLOY_URL = (process.env.DOKPLOY_URL || '').replace(/\/$/, '')
  config.DOKPLOY_TOKEN = process.env.DOKPLOY_TOKEN || null
  config.GITHUB_TOKEN = process.env.GITHUB_TOKEN || null
  return config
}

// ─── CLI args ────────────────────────────────────────────────────────────────

function parseArgs() {
  const args = process.argv.slice(2)
  const result = {}
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--name') result.name = args[++i]
    else if (args[i] === '--server-url') result.serverUrl = args[++i]
    else if (args[i] === '--project') result.project = args[++i]
    else if (args[i] === '--payload-secret') result.payloadSecret = args[++i]
    else if (args[i] === '--dry-run') result.dryRun = true
  }
  return result
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function log(emoji, msg) { console.log(`${emoji}  ${msg}`) }
function ok(msg) { log('✅', msg) }
function info(msg) { log('ℹ️ ', msg) }
function warn(msg) { log('⚠️ ', msg) }
function fail(msg) { log('❌', msg); process.exit(1) }

async function dokployApi(path, method = 'GET', body = null, config) {
  const url = `${config.DOKPLOY_URL}/api/${path}`
  const res = await fetch(url, {
    method,
    headers: {
      'x-api-key': config.DOKPLOY_TOKEN,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  const text = await res.text()
  let data
  try { data = text ? JSON.parse(text) : { status: res.status } } catch { data = text }
  if (!res.ok) throw new Error(`Dokploy ${method} /${path} → ${res.status}: ${JSON.stringify(data)}`)
  return data
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

function generatePassword(length = 24) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}

function readSetupReport(name, config) {
  const reportPath = join(config.LOCAL_PROJECTS_DIR, name, 'SETUP-REPORT.md')
  if (!existsSync(reportPath)) return null
  const content = readFileSync(reportPath, 'utf8')
  const match = content.match(/PAYLOAD_SECRET=([^\n]+)/)
  return match ? match[1].trim() : null
}

function appendToSetupReport(name, dokployInfo, config) {
  const reportPath = join(config.LOCAL_PROJECTS_DIR, name, 'SETUP-REPORT.md')
  if (!existsSync(reportPath)) return
  const addition = `
## Dokploy (Production)

| Ressource | Valeur |
|-----------|--------|
| Application | ${dokployInfo.appUrl} |
| PostgreSQL | ${dokployInfo.pgAppName} (interne) |
| DATABASE_URL prod | \`${dokployInfo.databaseUrl}\` |

### Prochaines étapes Dokploy
- [ ] Vérifier le déploiement sur ${dokployInfo.serverUrl}
- [ ] Configurer le domaine dans Dokploy → Application → Domains
- [ ] Vérifier les logs du premier déploiement
`
  writeFileSync(reportPath, readFileSync(reportPath, 'utf8') + addition)
  ok('SETUP-REPORT.md mis à jour avec les infos Dokploy')
}

// ─── Étapes ──────────────────────────────────────────────────────────────────

async function getOrCreateProject(projectName, config) {
  log('📁', `Recherche du projet "${projectName}"...`)
  const projects = await dokployApi('project.all', 'GET', null, config)
  const existing = projects.find(p => p.name === projectName)
  if (existing) {
    const environmentId = existing.environments?.[0]?.environmentId
    if (!environmentId) throw new Error(`Aucun environment trouvé dans le projet "${projectName}"`)
    info(`Projet "${projectName}" trouvé (${existing.projectId})`)
    return { projectId: existing.projectId, environmentId }
  }
  log('📁', `Création du projet "${projectName}"...`)
  // project.create retourne { project: { projectId, ... }, environment: { environmentId, ... } }
  const data = await dokployApi('project.create', 'POST', { name: projectName, description: 'Sites clients' }, config)
  const projectId = data.project?.projectId || data.projectId
  const environmentId = data.environment?.environmentId
  if (!projectId || !environmentId) throw new Error(`Réponse inattendue de project.create : ${JSON.stringify(data)}`)
  ok(`Projet créé : ${projectId}`)
  return { projectId, environmentId }
}

async function createPostgres(name, environmentId, config) {
  const slug = name.replace(/^site-/, '')
  const dbName = slug.replace(/-/g, '_')
  const dbUser = `${dbName}_user`
  const dbPassword = generatePassword()
  const appName = `${slug}-postgres`

  // Vérifier si Postgres existe déjà
  const projects = await dokployApi('project.all', 'GET', null, config)
  for (const project of projects) {
    for (const env of project.environments || []) {
      const existing = (env.postgres || []).find(p => p.appName === appName)
      if (existing) {
        warn(`PostgreSQL "${appName}" déjà existant (${existing.postgresId}) → on continue`)
        return {
          postgresId: existing.postgresId,
          appName,
          databaseName: existing.databaseName,
          databaseUser: existing.databaseUser,
          databasePassword: existing.databasePassword,
          internalUrl: `postgresql://${existing.databaseUser}:${existing.databasePassword}@${appName}:5432/${existing.databaseName}`,
        }
      }
    }
  }

  log('🐘', `Création PostgreSQL "${appName}"...`)
  const pg = await dokployApi('postgres.create', 'POST', {
    name: `${name}-db`,
    appName,
    databaseName: dbName,
    databaseUser: dbUser,
    databasePassword: dbPassword,
    dockerImage: 'postgres:16-alpine',
    environmentId,
  }, config)

  ok(`PostgreSQL créé : ${pg.postgresId}`)
  return {
    postgresId: pg.postgresId,
    appName,
    databaseName: dbName,
    databaseUser: dbUser,
    databasePassword: dbPassword,
    // URL interne Docker (accessible depuis les autres containers du même réseau)
    internalUrl: `postgresql://${dbUser}:${dbPassword}@${appName}:5432/${dbName}`,
  }
}

async function deployAndWaitPostgres(postgresId, config) {
  log('🐘', 'Déploiement PostgreSQL...')
  await dokployApi('postgres.deploy', 'POST', { postgresId }, config)

  // Attendre que la DB soit prête (max 2 min)
  for (let i = 0; i < 24; i++) {
    await sleep(5000)
    const pg = await dokployApi(`postgres.one?postgresId=${postgresId}`, 'GET', null, config)
    if (pg.applicationStatus === 'done') {
      ok('PostgreSQL prêt')
      return
    }
    info(`PostgreSQL status: ${pg.applicationStatus} (${(i + 1) * 5}s)...`)
  }
  warn('PostgreSQL pas encore prêt après 2min — continuer quand même')
}

async function getGithubProviderId(config) {
  const providers = await dokployApi('github.githubProviders', 'GET', null, config)
  if (!providers?.length) throw new Error('Aucun GitHub provider configuré dans Dokploy. Aller dans Settings → Git Providers → GitHub.')
  // Chercher le provider dont le nom correspond au GITHUB_USERNAME
  const match = providers.find(p => p.gitProvider?.name?.toLowerCase() === config.GITHUB_USERNAME.toLowerCase())
  if (match) {
    info(`GitHub provider sélectionné : "${match.gitProvider.name}" (${match.githubId})`)
    return match.githubId
  }
  // Fallback : premier provider dispo
  warn(`Aucun provider nommé "${config.GITHUB_USERNAME}" — utilisation de "${providers[0].gitProvider?.name}"`)
  return providers[0].githubId
}

async function createApplication(name, environmentId, config) {
  // Vérifier si l'application existe déjà dans cet environment
  const projects = await dokployApi('project.all', 'GET', null, config)
  for (const project of projects) {
    for (const env of project.environments || []) {
      const existing = (env.applications || []).find(a => a.name === name)
      if (existing) {
        warn(`Application "${name}" déjà existante (${existing.applicationId}) → on continue`)
        return existing
      }
    }
  }
  log('🚀', `Création de l'application "${name}"...`)
  const app = await dokployApi('application.create', 'POST', { name, environmentId }, config)
  ok(`Application créée : ${app.applicationId}`)
  return app
}

async function configureGithub(applicationId, name, githubId, config) {
  log('🐙', 'Configuration GitHub...')
  await dokployApi('application.saveGithubProvider', 'POST', {
    applicationId,
    owner: config.GITHUB_USERNAME,
    repository: name,
    branch: 'main',
    githubId,
    buildPath: '/',
  }, config)
  ok('Source GitHub configurée')
}

async function configureBuild(applicationId, config) {
  log('🔧', 'Configuration build (Dockerfile)...')
  await dokployApi('application.saveBuildType', 'POST', {
    applicationId,
    buildType: 'dockerfile',
    dockerfile: '/Dockerfile',
    buildPath: '/',
    dockerContextPath: '.',
    dockerBuildStage: '',
  }, config)
  ok('Build type : Dockerfile')
}

async function configureEnvVars(applicationId, databaseUrl, payloadSecret, serverUrl, config) {
  log('🔑', 'Configuration des variables d\'environnement...')
  const env = [
    `DATABASE_URL=${databaseUrl}`,
    `PAYLOAD_SECRET=${payloadSecret}`,
    `NEXT_PUBLIC_SERVER_URL=${serverUrl}`,
  ].join('\n')

  await dokployApi('application.saveEnvironment', 'POST', {
    applicationId,
    env,
    buildArgs: '',
  }, config)
  ok('Variables d\'environnement configurées')
}

async function addMediaVolume(applicationId, config) {
  log('💾', 'Ajout du volume média...')
  await dokployApi('mounts.create', 'POST', {
    serviceId: applicationId,
    serviceType: 'application',
    type: 'volume',
    volumeName: `${applicationId}-media`,
    mountPath: '/app/public/media',
  }, config)
  ok('Volume média configuré')
}

async function deployApplication(applicationId, config) {
  log('🚀', 'Lancement du premier déploiement...')
  await dokployApi('application.deploy', 'POST', {
    applicationId,
    titleLog: 'Initial deployment',
    descriptionLog: 'Setup automatique via dokploy-setup.mjs',
  }, config)
  ok('Déploiement lancé — suivre les logs dans Dokploy')
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const args = parseArgs()
  const config = getConfig()

  if (!args.name) fail('--name requis. Ex: node scripts/dokploy-setup.mjs --name site-yellov --server-url https://yellov.mawebsitefactory.fr')
  if (!args.serverUrl) fail('--server-url requis. Ex: --server-url https://yellov.mawebsitefactory.fr')
  if (!config.DOKPLOY_TOKEN) fail('DOKPLOY_TOKEN manquant dans ~/.new-site.env')
  if (!config.DOKPLOY_URL) fail('DOKPLOY_URL manquant dans ~/.new-site.env')

  const name = args.name
  const projectName = args.project || DEFAULTS.DOKPLOY_PROJECT_NAME

  // Lire PAYLOAD_SECRET depuis SETUP-REPORT.md ou --payload-secret
  const payloadSecret = args.payloadSecret || readSetupReport(name, config)
  if (!payloadSecret) fail(`PAYLOAD_SECRET introuvable. Passe --payload-secret ou vérifie SETUP-REPORT.md dans ${join(config.LOCAL_PROJECTS_DIR, name)}`)

  console.log(`\n${'═'.repeat(60)}`)
  console.log(`  Dokploy setup : ${name}`)
  console.log(`  URL cible     : ${args.serverUrl}`)
  if (args.dryRun) console.log(`  MODE DRY-RUN — aucune action réelle`)
  console.log(`${'═'.repeat(60)}\n`)

  if (args.dryRun) {
    info(`[dry-run] Projet Dokploy : "${projectName}"`)
    info(`[dry-run] PostgreSQL : ${name}-db (interne Docker)`)
    info(`[dry-run] Application : ${name}`)
    info(`[dry-run] GitHub : ${config.GITHUB_USERNAME}/${name} → main`)
    info(`[dry-run] URL : ${args.serverUrl}`)
    return
  }

  // 1. Projet
  const { projectId, environmentId } = await getOrCreateProject(projectName, config)

  // 2. PostgreSQL
  const pg = await createPostgres(name, environmentId, config)
  await deployAndWaitPostgres(pg.postgresId, config)

  // 3. GitHub provider ID
  const githubId = await getGithubProviderId(config)

  // 4. Application
  const app = await createApplication(name, environmentId, config)
  await configureGithub(app.applicationId, name, githubId, config)
  await configureBuild(app.applicationId, config)
  await configureEnvVars(app.applicationId, pg.internalUrl, payloadSecret, args.serverUrl, config)
  await addMediaVolume(app.applicationId, config)

  // 5. Premier déploiement
  await deployApplication(app.applicationId, config)

  // 6. Rapport
  appendToSetupReport(name, {
    appUrl: `${config.DOKPLOY_URL}/dashboard/project/${projectId}/application/${app.applicationId}`,
    pgAppName: pg.appName,
    databaseUrl: pg.internalUrl,
    serverUrl: args.serverUrl,
  }, config)

  console.log(`\n${'═'.repeat(60)}`)
  console.log('  ✅ Dokploy configuré avec succès !')
  console.log(`${'═'.repeat(60)}`)
  console.log(`
  🚀 Application  : ${name}
  🐘 PostgreSQL   : ${pg.appName} (Docker interne)
  🌐 URL cible    : ${args.serverUrl}
  📋 Dokploy UI   : ${config.DOKPLOY_URL}

  Prochaines étapes :
  1. Dokploy → Application → Domains → Ajouter ${args.serverUrl.replace(/^https?:\/\//, '')}
  2. Suivre les logs du premier build
  3. Supprimer SETUP-REPORT.md après vérification
  `)
}

main().catch(err => {
  console.error('\n❌ Erreur fatale :', err.message)
  process.exit(1)
})
