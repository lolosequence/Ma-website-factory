# /new-site-brief — Créer le brief d'un nouveau site client

Génère un fichier de brief structuré pour un nouveau client, prêt à être consommé par `/new-site`.

## Workflow

### 1. Poser les questions clés

Collecte les informations suivantes (une par une, de façon conversationnelle) :

**Identité du client**
- Nom du client / de l'entreprise ?
- Secteur d'activité ?
- Description en 1-2 phrases ?

**Le site web**
- Objectif principal du site ? (vitrine, e-commerce, portfolio, blog...)
- Pages principales souhaitées ? (Accueil, À propos, Services, Contact, Blog...)
- Fonctionnalités spécifiques ? (formulaire de contact, galerie photo, réservation...)

**Contenu**
- Types de contenu à gérer dans le CMS ? (articles, produits, témoignages, équipe...)
- Fréquence de mise à jour du contenu ?

**Design / Identité**
- Couleurs principales ? (codes hex ou description)
- Typographie / style ? (moderne, classique, minimaliste...)
- Sites de référence / inspiration ?
- Logo disponible ? (oui/non)

**Technique**
- Besoin de multilingue ? (oui/non)
- Besoin d'authentification utilisateur ? (espace membre...)
- Intégrations tierces ? (Stripe, Calendly, Google Maps...)

### 2. Générer le fichier brief

Créer le fichier `brief-NOM-DU-CLIENT.md` dans le dossier du projet Ma-website-factory (ou là où l'utilisateur indique) avec la structure suivante :

```markdown
# Brief — [Nom du client]

Généré le [date]

## Identité

- **Nom** : [nom]
- **Slug** : site-[slug-kebab-case]
- **Secteur** : [secteur]
- **Description** : [description courte]

## Objectif du site

[description de l'objectif]

## Structure des pages

- [ ] Accueil
- [ ] [autres pages...]

## Collections Payload CMS

| Collection | Slug | Champs principaux | Usage |
|-----------|------|-------------------|-------|
| [Nom] | [slug] | [champs] | [description] |

## Design

- **Couleurs** : [couleurs]
- **Style** : [style]
- **Typographie** : [typo]
- **Références** : [URLs si fournies]

## Fonctionnalités spéciales

- [feature 1]
- [feature 2]

## Intégrations

- [intégration 1 si applicable]

## Notes

[notes supplémentaires]
```

### 3. Proposer de lancer /new-site

Après avoir créé le brief, afficher :

```
✅ Brief créé : brief-NOM-DU-CLIENT.md

Pour créer le site maintenant :
→ Tape /new-site et je lirai ce brief automatiquement

Ou pour relire le brief d'abord :
→ Tape "lis le brief brief-NOM-DU-CLIENT.md"
```

## Règles

- Adapter les questions au secteur (une boulangerie n'a pas besoin des mêmes questions qu'une agence digitale)
- Proposer des Collections Payload sensées pour le secteur (ex: boulangerie → Produits, Actualités)
- Le slug doit être en kebab-case minuscule sans accents : "Boulangerie Dupont" → `site-boulangerie-dupont`
- Sauvegarder le brief dans le dossier courant ou demander où
