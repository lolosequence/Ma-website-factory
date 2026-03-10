# /new-site — Créer un nouveau site client

Orchestre la création complète d'un site client depuis le template Ma-website-factory.

## Rôle de l'agent

Tu es l'**agent PM/Orchestrateur**. Tu coordonnes 3 phases :
1. **DevOps** — infrastructure (repo GitHub + Dokploy)
2. **Scaffold** — adaptation du code au client (collections, contenu de base)
3. **QA** — vérification qualité avant le premier push

---

## Phase 0 — Collecte d'informations

Si l'utilisateur n'a pas fourni les infos, demande :

1. **Nom du client** (ex: "Boulangerie Dupont") → slug: `site-boulangerie-dupont`
2. **Description courte** du site (pour GitHub)
3. **Collections Payload** à créer (ex: "Articles de blog, Galerie photo, Menu")
4. **Contenu de base** : sections de la page d'accueil ?
5. **URL de prod** (ex: `https://client.mawebsitefactory.fr`) — défaut auto: `https://{slug}.mawebsitefactory.fr`
6. **Serveur cible** : sur ton serveur (`--skip-dokploy` pour configurer manuellement) ou serveur client (`--server-id ID`)

---

## Phase 1 — Agent DevOps (infrastructure)

### 1.1 Vérifier la configuration tokens

Vérifie que `~/.new-site.env` existe avec les tokens requis :
```bash
test -f ~/.new-site.env && echo "✅ Config trouvée" || echo "❌ Créer ~/.new-site.env depuis scripts/new-site.env.example"
```

Si le fichier n'existe pas, guide l'utilisateur :
- Copier `scripts/new-site.env.example` vers `~/.new-site.env`
- Remplir GITHUB_TOKEN, DOKPLOY_URL, DOKPLOY_TOKEN
- Revenir pour continuer

### 1.2 Lancer le script de setup

```bash
node "/mnt/c/Users/laure/Mes projets/Ma factory/scripts/new-site.mjs" \
  --name site-NOM-DU-CLIENT \
  --description "Description du site" \
  --server-url https://NOM-DU-CLIENT.mawebsitefactory.fr
```

Options disponibles :
- `--dry-run` : simuler sans créer (pour tester)
- `--skip-clone` : ne pas cloner en local
- `--skip-install` : ne pas lancer npm install (recommandé sur Windows/WSL)
- `--skip-dokploy` : ne pas configurer Dokploy (le faire manuellement après)
- `--server-url URL` : URL publique prod (défaut: `https://{slug}.mawebsitefactory.fr`)
- `--server-id ID` : déployer sur le serveur Dokploy du client (voir `node scripts/dokploy-setup.mjs --list-servers`)

### 1.3 Vérifier les résultats

Le script enchaîne automatiquement :
- Repo GitHub créé et cloné
- `.env` pré-rempli avec la bonne DB et port
- **Dokploy** : PostgreSQL + Application configurés, premier déploiement lancé

Après le script, vérifier dans [admin.workflowlolo.fr](https://admin.workflowlolo.fr) que le build tourne.

**Étape manuelle restante :** Dokploy → Application → **Domains** → Ajouter le domaine prod + DNS chez le registrar.

---

## Phase 2 — Agent Scaffold (adaptation au client)

### 2.1 Se placer dans le nouveau repo

```bash
cd "/mnt/c/Users/laure/Mes projets/Mes clients/site-NOM-DU-CLIENT"
```

### 2.2 Vérifier l'environnement local

Le `.env` est pré-rempli automatiquement. Vérifier :
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
- Vérifier que Dokploy démarre le build automatiquement
- Vérifier les logs dans admin.workflowlolo.fr

---

## Récapitulatif final

Une fois les 3 phases terminées, afficher le récapitulatif :

```
✅ Site [Nom Client] créé et configuré !

📂 Local  : /mnt/c/Users/laure/Mes projets/Mes clients/site-NOM-DU-CLIENT
🐙 GitHub : https://github.com/lolosequence/site-NOM-DU-CLIENT
🌐 Prod   : https://NOM-DU-CLIENT.mawebsitefactory.fr (Dokploy)

Prochaines étapes :
□ Dokploy → Domains → Ajouter le domaine + configurer le DNS
□ Valider sur https://NOM-DU-CLIENT.mawebsitefactory.fr
□ Supprimer SETUP-REPORT.md avant le premier vrai commit
```

---

## Contraintes importantes

- Ne jamais modifier le repo `Ma-website-factory` (template)
- Toujours travailler dans le repo cloné du client
- SETUP-REPORT.md contient des secrets → ne jamais commiter, supprimer avant le vrai push
- Le `.env` local ne se commite jamais (déjà dans `.gitignore`)
- Utiliser les mêmes conventions de nommage : `site-nom-du-client` partout
