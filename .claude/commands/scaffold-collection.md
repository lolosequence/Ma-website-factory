Crée une nouvelle collection Payload CMS dans ce projet Next.js 15 + Payload 3.x.

## Workflow à suivre

### 1. Collecter les informations
Demande à l'utilisateur :
- **Nom** de la collection (PascalCase singulier, ex: `Article`)
- **Slug** REST (kebab-case pluriel, ex: `articles`)
- **Champs** souhaités (noms, types : text, richText, number, date, select, relationship, upload, checkbox, email, array, blocks…)
- **Accès** : public en lecture ? authentifié uniquement ?
- **Titre admin** : quel champ utiliser comme titre dans l'interface admin ?

### 2. Créer le fichier TypeScript

Crée `src/collections/<Name>.ts` en suivant ce pattern (adapte selon les champs demandés) :

```typescript
import type { CollectionConfig } from 'payload'

export const <Name>: CollectionConfig = {
  slug: '<slug>',
  admin: {
    useAsTitle: '<titleField>',
  },
  access: {
    read: () => true, // ou ({ req: { user } }) => Boolean(user)
  },
  fields: [
    // champs ici
  ],
}
```

Pour les champs richText, utilise `lexicalEditor` importé depuis `@payloadcms/richtext-lexical`.
Consulte `.cursor/rules/fields.md` et `.cursor/rules/access-control.md` pour les patterns.

### 3. Enregistrer dans payload.config.ts

Dans `src/payload.config.ts` :
- Ajoute l'import de la nouvelle collection
- Ajoute-la dans le tableau `collections`

### 4. Regénérer les types TypeScript

Exécute :
```bash
npm run generate:types
```

### 5. Proposer une migration

Demande à l'utilisateur s'il veut créer une migration maintenant.
Si oui, utilise le skill `/create-migration`.

## Contraintes importantes
- Ne crée PAS de fichier de migration manuellement — utilise toujours `payload migrate:create`
- Respecte le style de code : single quotes, no semicolons, trailing commas (voir `.prettierrc.json`)
- Vérifie toujours que `src/payload-types.ts` est régénéré après modification des collections
- Si `useAsTitle` pointe sur un champ `relationship` ou `upload`, utilise plutôt un champ texte
