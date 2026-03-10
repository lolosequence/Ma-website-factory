# /new-site — Créer un nouveau site client

Orchestre la création complète d'un site client depuis le template Ma-website-factory.

## Rôle de l'agent

Tu es l'**agent PM/Orchestrateur**. Tu coordonnes 3 phases :
1. **DevOps** — infrastructure (repo GitHub, Vercel, Neon, secrets)
2. **Scaffold** — adaptation du code au client (collections, contenu de base)
3. **QA** — vérification qualité avant le premier push

---

## Phase 0 — Collecte d'informations

Si l'utilisateur n'a pas fourni les infos, demande :

1. **Nom du client** (ex: "Boulangerie Dupont") → slug: `site-boulangerie-dupont`
2. **Description courte** du site (pour GitHub/Vercel)
3. **Collections Payload** à créer (ex: "Articles de blog, Galerie photo, Menu")
4. **Contenu de base** : sections de la page d'accueil ?
5. **Skip infra ?** (`--skip-neon --skip-vercel`) si déjà configuré

---

## Phase 1 — Agent DevOps (infrastructure)

### 1.1 Vérifier la configuration tokens

Vérifie que `~/.new-site.env` existe avec les tokens requis :
```bash
test -f ~/.new-site.env && echo "✅ Config trouvée" || echo "❌ Créer ~/.new-site.env depuis scripts/new-site.env.example"
```

Si le fichier n'existe pas, guide l'utilisateur :
- Copier `scripts/new-site.env.example` vers `~/.new-site.env`
- Remplir GITHUB_TOKEN, VERCEL_TOKEN, NEON_API_KEY
- Revenir pour continuer

### 1.2 Lancer le script de setup

```bash
node "/mnt/c/Users/laure/Mes projets/Ma factory/scripts/new-site.mjs" \
  --name site-NOM-DU-CLIENT \
  --description "Description du site"
```

Options disponibles :
- `--dry-run` : simuler sans créer (pour tester)
- `--skip-neon` : ne pas créer la DB Neon
- `--skip-vercel` : ne pas créer le projet Vercel
- `--skip-clone` : ne pas cloner en local

### 1.3 Vérifier les résultats

Après le script, vérifier :
- Le repo GitHub est accessible
- Le rapport `SETUP-REPORT.md` est présent dans le nouveau repo
- Les variables Vercel sont configurées

---

## Phase 2 — Agent Scaffold (adaptation au client)

### 2.1 Se placer dans le nouveau repo

```bash
cd "/mnt/c/Users/laure/Mes projets/site-NOM-DU-CLIENT"
```

### 2.2 Configurer l'environnement local

```bash
cp .env.example .env
```

Renseigner dans `.env` :
- `DATABASE_URL` : connection string locale (docker-compose)
- `PAYLOAD_SECRET` : valeur du rapport SETUP-REPORT.md
- `NEXT_PUBLIC_SERVER_URL=http://localhost:3000`
- `POSTGRES_DB=nom_du_site`

### 2.3 Démarrer la DB locale et appliquer les migrations

```bash
docker-compose up -d
npm run payload migrate
```

### 2.4 Créer les collections Payload

Pour chaque collection demandée par l'utilisateur, utiliser `/scaffold-collection` dans le contexte du nouveau repo.

Exemple pour un blog :
- Collection "Article" avec champs : titre (text), contenu (richText), slug (text), date (date), image (upload)
- Collection "Categorie" avec champs : nom (text), description (text)

### 2.5 Créer la migration

```
/create-migration
```

### 2.6 Personnaliser les métadonnées du projet

Mettre à jour dans le nouveau repo :
- `package.json` → champ `name` avec le slug du site
- `README.md` → titre et description du client (si existant)

---

## Phase 3 — Agent QA (vérification)

```
/quality-check
```

Vérifier :
- ✅ TypeScript sans erreurs
- ✅ Lint sans erreurs
- ✅ Types Payload régénérés

### 3.2 Premier commit

```bash
git add .
git commit -m "feat: initial scaffold pour [Nom Client]

- Collections : [liste]
- Migration initiale appliquée
- Variables d'environnement configurées"
git push origin main
```

### 3.3 Vérifier le déploiement

Après le push sur `main` :
- Vérifier que Dokploy démarre le build (si configuré)
- Créer une branche test et une PR pour vérifier le CI + preview Vercel

---

## Récapitulatif final

Une fois les 3 phases terminées, afficher le récapitulatif :

```
✅ Site [Nom Client] créé et configuré !

📂 Local  : /mnt/c/Users/laure/Mes projets/site-NOM-DU-CLIENT
🐙 GitHub : https://github.com/lolosequence/site-NOM-DU-CLIENT
▲  Vercel : https://vercel.com/lolosequence/site-NOM-DU-CLIENT
🌿 Neon   : voir SETUP-REPORT.md

Prochaines étapes :
□ Configurer Dokploy (voir SETUP-REPORT.md → Checklist Dokploy)
□ Connecter le Vercel Blob store au projet
□ Valider sur le preview Vercel
□ Supprimer SETUP-REPORT.md avant le premier vrai commit
```

---

## Contraintes importantes

- Ne jamais modifier le repo `Ma-website-factory` (template)
- Toujours travailler dans le repo cloné du client
- SETUP-REPORT.md contient des secrets → ne jamais commiter, supprimer avant le vrai push
- Le `.env` local ne se commite jamais (déjà dans `.gitignore`)
- Utiliser les mêmes conventions de nommage : `site-nom-du-client` partout
