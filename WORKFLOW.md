# Guide — Créer un site web avec Ma Factory

## Concept général

**Ma-website-factory** est ton template de base. Tu ne travailles **jamais** directement dedans pour un client. À chaque nouveau site, tu crées un **nouveau dépôt GitHub** à partir de ce template.

```
Ma-website-factory/          ← template de base (ce repo)
├── site-client-alpha/       ← repo séparé pour le site A
├── site-client-beta/        ← repo séparé pour le site B
└── site-portfolio/          ← repo séparé pour ton portfolio
```

Chaque site a sa propre stack isolée :
- Son propre repo GitHub
- Sa propre app Dokploy (production)
- Son propre projet Vercel (preview)
- Sa propre base de données Neon (preview) + PostgreSQL Dokploy (prod)
- Son propre Vercel Blob (médias preview)

---

## Étape 1 — Créer le repo du nouveau site

### 1.1 Transformer Ma-factory en template GitHub

> À faire une seule fois.

1. Va sur **github.com/lolosequence/Ma-website-factory**
2. **Settings** → cocher **Template repository**

### 1.2 Créer le repo du nouveau site

1. Sur GitHub, clique **"Use this template"** → **"Create a new repository"**
2. Nom du repo : `site-nom-du-client` (ex: `site-portfolio`, `site-boulangerie-dupont`)
3. Visibilité : **Private**
4. Clique **Create repository**

### 1.3 Cloner en local

```bash
cd "/mnt/c/Users/laure/Mes projets"
git clone https://github.com/lolosequence/site-nom-du-client.git
cd site-nom-du-client
npm install
```

---

## Étape 2 — Configurer l'environnement local

### 2.1 Créer le fichier .env

```bash
cp .env.example .env
```

Ouvre `.env` et remplis :

```env
DATABASE_URL=postgresql://payload:payload@localhost:5432/nom_du_site
POSTGRES_DB=nom_du_site
PAYLOAD_SECRET=   # générer avec : openssl rand -hex 32
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

### 2.2 Démarrer la base de données locale

```bash
docker-compose up -d
```

### 2.3 Appliquer les migrations initiales

```bash
npm run payload migrate
```

### 2.4 Lancer le serveur de dev

```bash
npm run dev
```

L'admin Payload est accessible sur **http://localhost:3000/admin**

---

## Étape 3 — Configurer Vercel (preview)

### 3.1 Créer le projet sur Vercel

1. **vercel.com** → **Add New Project** → importer le repo GitHub
2. Framework : **Next.js** (auto-détecté)
3. Clique **Deploy** (le premier build va échouer, c'est normal — les variables manquent)

### 3.2 Créer la base de données Neon (preview)

1. **neon.tech** → **New Project**
   - Nom : `site-nom-du-client`
   - Région : **AWS EU Central 1 (Frankfurt)**
   - Postgres version : **16**
   - Enable Neon Auth : **désactivé**
2. Copie la **connection string** (avec Connection pooling activé)

### 3.3 Créer le Vercel Blob Store (médias preview)

1. **Vercel** → **Storage** → **Create Database** → **Blob**
   - Nom : `nom-du-client-blob`
   - Région : **Paris CDG1**
   - Access : **Public**
2. Connecte le store au projet : dans le store → **Connect to Project**

### 3.4 Ajouter les variables d'environnement Vercel

**Vercel → projet → Settings → Environment Variables**
(cocher **Preview** uniquement pour chaque variable)

| Variable | Valeur |
|---|---|
| `DATABASE_URL` | connection string Neon |
| `PAYLOAD_SECRET` | `openssl rand -hex 32` |
| `NEXT_PUBLIC_SERVER_URL` | URL de ton projet Vercel (ex: `https://site-client.vercel.app`) |

> `BLOB_READ_WRITE_TOKEN` est ajouté automatiquement lors de la connexion du store.

### 3.5 Lier le projet en local

```bash
cd "/mnt/c/Users/laure/Mes projets/site-nom-du-client"
npx vercel link
cat .vercel/project.json
# Note les valeurs de orgId et projectId
```

### 3.6 Ajouter les secrets GitHub Actions

**GitHub → repo → Settings → Secrets and variables → Actions**

| Secret | Valeur |
|---|---|
| `VERCEL_TOKEN` | token Vercel (Account Settings → Tokens) |
| `VERCEL_ORG_ID` | `orgId` du fichier `.vercel/project.json` |
| `VERCEL_PROJECT_ID` | `projectId` du fichier `.vercel/project.json` |

---

## Étape 4 — Configurer Dokploy (production)

1. **Dokploy** → **New Application**
   - Source : GitHub → repo `site-nom-du-client`
   - Build type : **Dockerfile**
   - Auto deploy sur push `main` : **activé**

2. **Build Arguments** (requis au build) :
   - `DATABASE_URL` → connection string PostgreSQL interne Dokploy
   - `PAYLOAD_SECRET` → même valeur que celle générée

3. **Environment Variables** :
   - `DATABASE_URL`
   - `PAYLOAD_SECRET`
   - `NEXT_PUBLIC_SERVER_URL` → ton domaine (ex: `https://client.mawebsitefactory.fr`)

4. **Volume** : `nom-client-media` → `/app/public/media`

5. **Déployer** → le container lance `payload migrate && npm start`

---

## Étape 5 — Workflow quotidien

### Démarrer une nouvelle fonctionnalité

```bash
git checkout -b feat/nom-de-la-fonctionnalite
```

### Créer une collection Payload (ex: Blog)

Dans Claude Code, tape :
```
/scaffold-collection
```
Claude va créer le fichier TypeScript, l'enregistrer dans la config, et régénérer les types.

### Créer la migration DB

```
/create-migration
```
Claude génère le fichier de migration et t'explique ce qu'il fait.

### Vérifier la qualité du code

```
/quality-check
```
Lint + TypeScript + tests — Claude corrige les erreurs trouvées.

### Déployer un preview pour validation

```bash
git add .
git commit -m "feat: ajouter section blog"
git push origin feat/nom-de-la-fonctionnalite
```

→ Ouvre une **Pull Request** sur GitHub
→ GitHub Actions lance le CI + déploie un preview Vercel
→ Un commentaire avec l'URL de preview apparaît sur la PR
→ Tu valides sur l'URL
→ Tu merges → Dokploy déploie automatiquement en production

---

## Organisation des dossiers en local

```
/mnt/c/Users/laure/Mes projets/
├── Ma factory/                  ← template de base (ne pas modifier pour les clients)
├── site-portfolio/              ← ton portfolio perso
├── site-boulangerie-dupont/     ← client 1
└── site-agence-xyz/             ← client 2
```

Convention de nommage recommandée :
- Repo GitHub : `site-nom-du-client`
- Projet Vercel : `site-nom-du-client`
- Neon database : `site-nom-du-client`
- Vercel Blob : `nom-du-client-blob`
- App Dokploy : `site-nom-du-client`

---

## Checklist nouveau site

```
□ Repo GitHub créé depuis le template
□ Cloné en local + npm install
□ .env configuré + docker-compose up + payload migrate
□ Projet Vercel créé + variables configurées
□ Neon DB créée + DATABASE_URL ajoutée dans Vercel (Preview)
□ Vercel Blob créé + connecté au projet
□ vercel link exécuté en local
□ Secrets GitHub ajoutés (VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID)
□ App Dokploy créée + variables + volume configurés
□ Premier push sur main → vérifier que Dokploy déploie correctement
□ Créer une branche test → ouvrir une PR → vérifier CI + preview Vercel
```
