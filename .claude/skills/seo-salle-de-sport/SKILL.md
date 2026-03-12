---
name: SEO Salle de Sport
description: Spécialiste SEO pour salles de sport, clubs de fitness et studios de yoga/pilates. Optimisation locale, abonnements, cours collectifs, schema SportsActivityLocation, Google Business Profile. Utiliser pour tout établissement sportif.
---

# SEO Salle de Sport

Guide SEO spécialisé pour les salles de sport, clubs de fitness, studios de yoga/pilates/crossfit. Axé sur le référencement local, la conversion en essais gratuits, et la fidélisation des membres.

## 1. Intentions de recherche prioritaires

| Intention | Exemple | Action |
|---|---|---|
| Proximité | "salle de sport [quartier] [ville]" | Visite / Essai |
| Discipline | "studio yoga [ville]" | Cours d'essai |
| Abonnement | "salle de sport pas cher [ville]" | Comparaison |
| Sans engagement | "salle de sport sans abonnement [ville]" | Inscription |
| Horaires | "salle de sport ouverte tôt matin [ville]" | Visite |

---

## 2. Mots-clés par type d'établissement

### Salle de fitness / musculation
```
- salle de sport [ville/quartier]
- salle de musculation [ville]
- fitness [ville]
- salle de sport pas cher [ville]
- salle de sport sans engagement [ville]
- salle de sport ouverte 24h [ville]
- coach sportif salle [ville]
```

### Studio yoga / pilates
```
- studio yoga [ville]
- cours yoga débutant [ville]
- pilates [ville]
- yoga en ligne [ville]
- hot yoga [ville]
- yoga prénatal [ville]
- cours yoga tarif [ville]
```

### Crossfit / Fonctionnel
```
- crossfit [ville]
- box crossfit [ville]
- HIIT [ville]
- functional fitness [ville]
- entraînement crossfit débutant [ville]
```

### Boxe / Arts martiaux
```
- cours de boxe [ville]
- club boxe anglaise/thaï [ville]
- MMA [ville]
- arts martiaux [ville]
- boxe débutant [ville]
```

### Long tail
```
- salle de sport essai gratuit [ville]
- abonnement salle de sport [ville] prix
- meilleure salle de sport [ville]
- salle de sport femme uniquement [ville]
- salle sport proche moi ouverte maintenant
```

---

## 3. Structure des pages

### Page d'accueil
```markdown
# [Nom] — Salle de Sport à [Ville]

[Photo ambiance dynamique — salle, cours collectif, équipements]

[Accroche : ambiance + spécialité]

## Essayez gratuitement
[CTA essai gratuit — 1 semaine ou 1 séance]

## Nos espaces
[Zones musculation, cardio, cours collectifs, bien-être]

## Planning des cours
[Tableau ou lien vers planning interactif]

## Tarifs
[Formules d'abonnement claires]

## Avis membres
[Google Reviews]

## Horaires & Accès
```

### Page planning / cours collectifs
```markdown
# Planning Cours Collectifs — [Nom Salle] [Ville]

[Planning interactif ou tableau hebdomadaire]

## Nos cours
- Yoga (tous niveaux)
- HIIT
- Body Pump
- Pilates
[...]

## Réserver un cours
[Lien appli ou formulaire]
```

---

## 4. Schema markup

```json
{
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "FitZone Bordeaux",
  "image": "https://fitzone-bordeaux.fr/images/salle.jpg",
  "telephone": "+33556789012",
  "url": "https://fitzone-bordeaux.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "25 cours de l'Intendance",
    "addressLocality": "Bordeaux",
    "postalCode": "33000",
    "addressCountry": "FR"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "06:00",
      "closes": "22:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday","Sunday"],
      "opens": "08:00",
      "closes": "20:00"
    }
  ],
  "priceRange": "€€",
  "amenityFeature": [
    {"@type": "LocationFeatureSpecification", "name": "Parking", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Vestiaires", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Coach personnel", "value": true}
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "reviewCount": "289"
  }
}
```

---

## 5. Stratégie essai gratuit (levier de conversion clé)

L'essai gratuit est le principal générateur de leads :
```
Mots-clés :
- salle de sport essai gratuit [ville]
- [nom salle] essai
- cours yoga gratuit [ville]
- séance découverte [discipline] [ville]
```

**Page dédiée "Essai Gratuit" :**
- CTA dès le header
- Formulaire ultra-court (prénom + email + téléphone)
- Ce qui est inclus dans l'essai
- Aucune CB demandée

---

## 6. Application mobile et réservation

- Lier l'app mobile au site (deep links)
- Planning cours réservable en ligne (Glofox, Mindbody, Gymmaster)
- Widget planning intégré au site

---

## 7. Signaux de conversion

- [ ] Essai gratuit bien mis en avant
- [ ] Tarifs clairs (comparatif formules)
- [ ] Planning des cours accessible
- [ ] Visite virtuelle ou photos de qualité
- [ ] Horaires d'ouverture visibles
- [ ] Parking et accès mentionnés
- [ ] Avis Google récents

---

## 8. Checklist avant mise en ligne

- [ ] Schema SportsActivityLocation validé
- [ ] GBP complet (catégorie : Salle de sport / Studio de fitness)
- [ ] Planning cours en ligne
- [ ] Page "Essai gratuit" dédiée
- [ ] Tarifs et formules clairs
- [ ] Instagram actif (ambiance, cours, membres)
- [ ] NAP cohérent
