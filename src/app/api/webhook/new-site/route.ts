import { after } from 'next/server'
import { execFile } from 'child_process'
import { join } from 'path'

export const POST = async (request: Request) => {
  // Vérification du secret partagé
  const secret = request.headers.get('x-webhook-secret')
  if (!process.env.WEBHOOK_SECRET || secret !== process.env.WEBHOOK_SECRET) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: { name?: string; description?: string; template?: string }
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { name, description, template } = body

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
  if (template === 'static') args.push('--template', 'static')

  console.log(`[webhook] Lancement new-site pour : ${siteName} (script: ${scriptPath})`)
  console.log(`[webhook] Args : ${args.join(' ')}`)

  // after() exécute après la réponse HTTP — fiable dans Next.js 15, erreurs visibles dans les logs
  after(async () => {
    await new Promise<void>((resolve) => {
      execFile('node', [scriptPath, ...args], { env: process.env }, (error, stdout, stderr) => {
        if (error) {
          console.error(`[webhook] Erreur new-site pour ${siteName} :`, error.message)
          if (stderr) console.error(`[webhook] stderr:`, stderr)
        } else {
          console.log(`[webhook] new-site terminé pour ${siteName}`)
          if (stdout) console.log(`[webhook] stdout:`, stdout)
        }
        resolve()
      })
    })
  })

  return Response.json(
    { message: `Création de ${siteName} lancée`, site: siteName },
    { status: 202 },
  )
}
