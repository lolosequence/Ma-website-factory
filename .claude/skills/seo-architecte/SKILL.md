---
name: SEO Architecte
description: Spécialiste SEO pour architectes et agences d'architecture. Contraintes ordinales, mots-clés par type de projet (extension, rénovation, neuf), schema ProfessionalService, portfolio. Utiliser pour tout cabinet d'architecture.
---

# SEO Architecte

Guide SEO spécialisé pour les architectes DPLG/HMONP et agences d'architecture. Axé sur la crédibilité, le portfolio de réalisations, le référencement local et la conversion en consultations.

## 1. Contraintes ordinales

- **Titre "architecte"** : protégé par la loi (loi sur l'architecture de 1977), nécessite inscription à l'Ordre des Architectes
- **Numéro d'inscription à l'Ordre** : doit figurer sur le site
- **Publicité** : autorisée mais sobre, pas de promesses sur les délais ou économies
- **Mention obligatoire** : DPLG, DE HMONP, ou Architecte (selon diplôme)

---

## 2. Intentions de recherche prioritaires

| Intention | Exemple | Action |
|---|---|---|
| Projet | "architecte extension maison [ville]" | Consultation |
| Neuf | "architecte maison individuelle [ville]" | RDV |
| Rénovation | "architecte rénovation appartement [ville]" | RDV |
| Intérieur | "architecte d'intérieur [ville]" | RDV |
| Info | "honoraires architecte extension" | Contact |

---

## 3. Mots-clés par type de projet

### Construction neuve
```
- architecte maison neuve [ville]
- architecte maison individuelle [ville]
- architecte construction [ville]
- maison architecte [ville]
- architecte maison contemporaine [ville]
- architecte maison bois [ville]
```

### Extension / Surélévation
```
- architecte extension maison [ville]
- architecte surélévation [ville]
- extension maison architecte devis [ville]
- agrandissement maison [ville]
- permis de construire architecte [ville]
```

### Rénovation
```
- architecte rénovation [ville]
- architecte rénovation appartement [ville]
- maîtrise d'œuvre rénovation [ville]
- architecte transformation grange [ville]
- architecte patrimoine [ville]
```

### Architecture d'intérieur
```
- architecte d'intérieur [ville]
- décoration intérieure architecte [ville]
- architecte intérieur appartement [ville]
- aménagement intérieur [ville]
```

### Tertiaire / Commercial
```
- architecte bureaux [ville]
- architecte commerce restaurant [ville]
- maîtrise d'œuvre commerciale [ville]
- architecte ERP [ville]
```

---

## 4. Structure des pages

### Page d'accueil
```markdown
# Cabinet [Nom] — Architecte à [Ville]

[Photo d'une réalisation emblématique — haute qualité]

Cabinet d'architecture inscrit à l'Ordre des Architectes.
[Spécialités] — [Ville et région]

## Nos réalisations
[Galerie portfolio — photos professionnelles]

## Types de projets
- Maisons individuelles
- Extensions et surélévations
- Rénovations

## Prendre rendez-vous
[Formulaire ou Calendly]
```

### Page portfolio / réalisation
```markdown
# [Nom projet] — [Type] à [Ville] | Cabinet [Nom]

[Photos professionnelles extérieur + intérieur]

**Programme :** [type] — [surface] m²
**Lieu :** [ville]
**Année :** [année livraison]
**Mission :** [complète / partielle / MOE]

[Description du projet — contexte, parti architectural, matériaux]

[Autres réalisations du même type]
```

---

## 5. Schema markup

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Atelier [Nom] Architecture",
  "description": "Cabinet d'architecture spécialisé en rénovation et extension, inscrit à l'Ordre des Architectes",
  "telephone": "+33467891234",
  "url": "https://atelier-nom-archi.fr",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toulouse",
    "postalCode": "31000",
    "addressCountry": "FR"
  },
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Architecte HMONP",
    "recognizedBy": {
      "@type": "Organization",
      "name": "Ordre des Architectes de Midi-Pyrénées"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "34"
  }
}
```

---

## 6. Portfolio — cœur du SEO

Le portfolio est l'actif SEO principal d'un architecte :
- Une page par réalisation (contenu unique, indexable)
- Titre SEO : "[Type projet] — [Lieu] — Cabinet [Nom]"
- Alt text des photos : "[type] [matériau] [ville] — Cabinet [Nom]"
- Partage sur Archdaily, Dezeen (backlinks de qualité), Houzz, Pinterest
- Photos professionnelles — les visuels font la réputation et la conversion

---

## 7. Stratégie de contenu

| Article | Intention |
|---|---|
| "Combien coûte une extension de maison ?" | Forte |
| "Quand faut-il obligatoirement un architecte ?" | Forte |
| "Permis de construire : guide complet 2025" | Forte |
| "Rénovation énergétique : le rôle de l'architecte" | Info |
| "Maison passive : comment la concevoir ?" | Tendance |

---

## 8. Signaux de conversion

- [ ] Portfolio de réalisations (min 10 projets)
- [ ] Numéro d'inscription à l'Ordre visible
- [ ] Formulaire consultation avec champs : type de projet, surface, budget
- [ ] Témoignages clients (avec autorisation)
- [ ] Approche et valeurs expliquées (différenciation)
- [ ] Processus de travail expliqué étape par étape

---

## 9. Checklist avant mise en ligne

- [ ] Numéro Ordre des Architectes affiché
- [ ] Schema ProfessionalService validé
- [ ] GBP complet (catégorie : Cabinet d'architecture)
- [ ] Portfolio : 10+ réalisations avec pages dédiées
- [ ] Profil Houzz optimisé
- [ ] Mentions légales + RCS + assurance RCP
- [ ] Photos haute résolution WebP
