Déploie un environnement de preview sur Vercel pour tester les changements en cours.

## Prérequis

Vérifie que :
1. La Vercel CLI est installée : `vercel --version` (sinon : `npm i -g vercel`)
2. L'utilisateur est connecté : `vercel whoami` (sinon : `vercel login`)
3. Le projet est lié à Vercel : un fichier `.vercel/project.json` existe (sinon : `vercel link`)

## Workflow

### 1. Vérification qualité préalable

Avant de déployer, s'assurer que le code est propre.
Si `/quality-check` n'a pas été lancé dans cette session, propose-le à l'utilisateur :
"Veux-tu lancer un quality-check avant le déploiement ?"

### 2. Déploiement preview

```bash
vercel --yes
```

L'option `--yes` confirme automatiquement les prompts par défaut.

### 3. Afficher l'URL

Une fois le déploiement terminé, affiche clairement :
- L'URL de preview générée (ex: `https://ma-factory-xyz.vercel.app`)
- Un lien vers le dashboard Vercel du déploiement

### 4. Récapitulatif

Informe l'utilisateur :
- URL de preview pour tester
- Les variables d'environnement nécessaires sur Vercel (si manquantes) :
  - `DATABASE_URL` — connexion Neon/PostgreSQL pour les previews
  - `PAYLOAD_SECRET` — clé secrète Payload
  - `NEXT_PUBLIC_SERVER_URL` — URL publique (l'URL de preview elle-même)
  - `BLOB_READ_WRITE_TOKEN` — token Vercel Blob pour les médias

## Configuration Vercel (première fois)

Si c'est la première fois, guide l'utilisateur :

1. **Base de données preview** : crée un projet sur [neon.tech](https://neon.tech) (gratuit)
   - Copie la connection string dans Vercel > Settings > Environment Variables > Preview
   - Variable : `DATABASE_URL`

2. **Vercel Blob** : active dans Vercel > Storage > Blob
   - Copie le token `BLOB_READ_WRITE_TOKEN` dans les variables d'environnement

3. **Build command** : normalement géré par `vercel.json` à la racine du projet

## Notes
- Les previews utilisent Vercel Blob pour les médias (pas le filesystem local)
- La DB de preview est séparée de la DB de production Dokploy
- Pour la production, le déploiement se fait via push sur `main` → Dokploy auto-deploy
