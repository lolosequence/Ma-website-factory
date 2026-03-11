import { spawn } from 'child_process'
import { join } from 'path'

export const POST = async (request: Request) => {
  // Vérification du secret partagé
  const secret = request.headers.get('x-webhook-secret')
  if (!process.env.WEBHOOK_SECRET || secret !== process.env.WEBHOOK_SECRET) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: { name?: string; description?: string }
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { name, description } = body

  if (!name || typeof name !== 'string' || !/^[a-z0-9-]+$/.test(name)) {
    return Response.json(
      { error: 'Paramètre "name" requis (lettres minuscules, chiffres, tirets)' },
      { status: 400 },
    )
  }

  const siteName = name.startsWith('site-') ? name : `site-${name}`
  const scriptPath = join(process.cwd(), 'scripts', 'new-site.mjs')

  const args = ['--name', siteName, '--skip-clone']
  if (description) args.push('--description', description)

  // Lancer le script en arrière-plan (sans bloquer la réponse)
  const child = spawn('node', [scriptPath, ...args], {
    detached: true,
    stdio: 'ignore',
    env: process.env,
  })
  child.unref()

  console.log(`[webhook] Lancement new-site pour : ${siteName}`)

  return Response.json(
    { message: `Création de ${siteName} lancée`, site: siteName },
    { status: 202 },
  )
}
