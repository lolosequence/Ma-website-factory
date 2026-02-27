Lance une vérification complète de la qualité du code : lint, types TypeScript, et tests unitaires.

## Workflow

Lance les étapes dans l'ordre. **Arrête-toi et corrige les erreurs avant de passer à l'étape suivante.**

### Étape 1 — ESLint

```bash
npm run lint
```

Si des erreurs sont détectées :
- Corrige-les automatiquement si elles sont simples (imports inutilisés, ordre d'imports, style)
- Pour les erreurs complexes (logique métier), présente-les à l'utilisateur et demande comment procéder
- Relance le lint pour confirmer la correction

### Étape 2 — Vérification TypeScript

```bash
npx tsc --noEmit
```

Si des erreurs de types sont détectées :
- Analyse la cause (types manquants, payload-types.ts à régénérer, erreurs de logique)
- Si `payload-types.ts` est obsolète, régénère-le d'abord : `npm run generate:types`
- Corrige les erreurs et relance `tsc --noEmit` pour confirmer

### Étape 3 — Tests unitaires (Vitest)

```bash
npm run test:int
```

Si des tests échouent :
- Analyse les erreurs de test
- Détermine si c'est un problème de code ou un problème de test
- Propose un plan de correction à l'utilisateur

### Étape 4 — Rapport final

Présente un résumé clair :
```
✓ ESLint        — OK (ou N erreurs corrigées)
✓ TypeScript    — OK (ou N erreurs)
✓ Tests vitest  — OK (N tests passés)
```

Si tout est vert : propose de commiter les changements avec `/commit` ou de déployer un preview avec `/deploy-preview`.

## Notes
- Ne lance PAS les tests e2e (Playwright) sauf demande explicite — ils nécessitent un environnement complet
- Si `npm run test:int` échoue à cause de la DB, vérifie que `docker-compose up -d` est lancé
- Les tests e2e se lancent avec `npm run test:e2e` (nécessite `npm run dev` en parallèle)
