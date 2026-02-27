Génère un fichier de migration Payload CMS pour les changements de schéma en cours.

## Workflow

### 1. Vérifier les changements en attente

Avant de créer la migration, vérifie que des modifications ont bien été apportées au schéma :
- Nouvelles collections ou champs ajoutés/modifiés dans `src/collections/`
- Modifications dans `src/payload.config.ts`

Si aucun changement détecté, informe l'utilisateur.

### 2. Choisir un nom de migration

Demande à l'utilisateur un nom descriptif pour la migration (snake_case, ex: `add_articles_collection`, `add_slug_to_posts`).
Si l'utilisateur ne fournit pas de nom, génère un nom logique basé sur les changements détectés.

### 3. Créer la migration

Exécute :
```bash
npm run payload -- migrate:create --name <nom_descriptif>
```

Ou équivalent :
```bash
npx payload migrate:create --name <nom_descriptif>
```

### 4. Vérifier le fichier généré

- Affiche le contenu du fichier de migration créé dans `src/migrations/`
- Vérifie que les fonctions `up()` et `down()` sont complètes et cohérentes
- Signale tout problème potentiel

### 5. Régénérer les types

Si ce n'est pas déjà fait :
```bash
npm run generate:types
```

### 6. Résumé

Informe l'utilisateur :
- Nom du fichier de migration créé
- Ce que la migration va faire
- Rappel : la migration s'appliquera automatiquement au prochain démarrage en prod (via `payload migrate` dans le CMD Docker)

## Notes importantes
- Les migrations sont idempotentes et sûres à rejouer
- Ne modifie JAMAIS un fichier de migration déjà commité — crée-en un nouveau
- Le fichier est dans `src/migrations/` et doit être commité dans git
- En local, applique la migration avec `npm run payload migrate` pour tester
