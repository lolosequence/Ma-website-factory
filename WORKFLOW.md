# Guide — Créer un site web avec Ma Factory

## Concept général

**Ma-website-factory** est ton template de base. Tu ne travailles **jamais** directement dedans pour un client. À chaque nouveau site, tu crées un **nouveau dépôt GitHub** à partir de ce template.

```
Ma-website-factory/          ← template de base (ce repo)
├── Mes clients/site-yellov/ ← repo séparé pour le site A
├── Mes clients/site-client/ ← repo séparé pour le site B
└── ...
```

Chaque site a sa propre stack isolée :
- Son propre repo GitHub
- Sa propre app Dokploy (production)
- Sa propre base de données PostgreSQL (gérée par Dokploy)

---

## Étape 1 — Créer le repo et l'infrastructure

### Option A — Automatique (recommandé)

Utilise le skill `/new-site` dans Claude Code :

```
/new-site --name site-nom-du-client --description "Description du site"
```

Le script enchaîne automatiquement :
- Création du repo GitHub depuis le template
- Clone local avec `.env` pré-rempli
- Provisionnement Dokploy : PostgreSQL + Application + premier déploiement

### Option B — Manuelle

#### 1.1 Créer le repo GitHub

1. Sur GitHub, clique **"Use this template"** → **"Create a new repository"**
2. Nom du repo : `site-nom-du-client`
3. Visibilité : **Private**

#### 1.2 Cloner en local

```bash
git clone https://github.com/lolosequence/site-nom-du-client.git
cd site-nom-du-client
```

---

## Étape 2 — Configurer l'environnement local

### 2.1 Créer le fichier .env

```bash
cp .env.example .env
```

Remplis `.env` :

```env
DATABASE_URL=postgresql://payload:payload@localhost:5432/nom_du_site
POSTGRES_DB=nom_du_site
PAYLOAD_SECRET=   # générer avec : openssl rand -hex 32
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

> Si tu as utilisé `/new-site`, le `.env` est pré-rempli automatiquement.

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

## Étape 3 — Configurer Dokploy (production)

> Si tu as utilisé `/new-site`, cette étape est faite automatiquement.

1. **Dokploy** → **New Application**
   - Source : GitHub → repo `site-nom-du-client`
   - Build type : **Dockerfile**
   - Auto deploy sur push `main` : **activé**

2. **Build Arguments** (requis au build) :
   - `DATABASE_URL` → connection string PostgreSQL interne Dokploy
   - `PAYLOAD_SECRET` → valeur générée

3. **Environment Variables** :
   - `DATABASE_URL`
   - `PAYLOAD_SECRET`
   - `NEXT_PUBLIC_SERVER_URL` → ton domaine (ex: `https://client.mawebsitefactory.fr`)

4. **Volume** : `nom-client-media` → `/app/public/media`

5. **Déployer** → le container lance `payload migrate && npm start`

6. **Domains** → Ajouter le domaine prod + configurer le DNS chez le registrar

---

## Étape 4 — Workflow quotidien

### Démarrer une nouvelle fonctionnalité

```bash
git checkout -b feat/nom-de-la-fonctionnalite
```

### Créer une collection Payload (ex: Blog)

```
/scaffold-collection
```

Claude crée le fichier TypeScript, l'enregistre dans la config, et régénère les types.

### Créer la migration DB

```
/create-migration
```

### Vérifier la qualité du code

```
/quality-check
```

Lint + TypeScript + tests — Claude corrige les erreurs trouvées.

### Déployer en production

```bash
git add .
git commit -m "feat: ajouter section blog"
git push origin main
```

→ Dokploy détecte le push sur `main` et déploie automatiquement

---

## Organisation des dossiers en local

```
/mnt/c/Users/laure/Mes projets/
├── Ma factory/                        ← template de base (ne pas modifier pour les clients)
└── Mes clients/
    ├── site-yellov/                   ← client 1
    └── site-boulangerie-dupont/       ← client 2
```

Convention de nommage :
- Repo GitHub : `site-nom-du-client`
- App Dokploy : `site-nom-du-client`
- PostgreSQL Dokploy : `nom-du-client-postgres`

---

## Checklist nouveau site

```
□ /new-site lancé (ou repo + clone faits manuellement)
□ .env configuré + docker-compose up + payload migrate
□ npm run dev → vérifier http://localhost:3000/admin
□ /scaffold-collection → collections métier créées
□ /create-migration → migration générée et commitée
□ /quality-check → lint + tsc OK
□ git push origin main → Dokploy déploie automatiquement
□ Dokploy → Domains → domaine prod configuré + DNS
□ Supprimer SETUP-REPORT.md avant le commit final
```
