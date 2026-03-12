---
name: SEO Coiffeur
description: Spécialiste SEO pour salons de coiffure. Optimisation locale, prise de RDV en ligne (Planity, Treatwell), schema HairSalon, mots-clés par prestation, gestion des avis. Utiliser pour tout salon de coiffure, barbier ou coiffeur à domicile.
---

# SEO Coiffeur

Guide SEO spécialisé pour les salons de coiffure, barbiers et coiffeurs à domicile. Axé sur le référencement local, la prise de RDV en ligne, et la conversion de visiteurs en clients réguliers.

## 1. Intentions de recherche prioritaires

| Intention | Exemple | Action |
|---|---|---|
| Proximité | "coiffeur [quartier] [ville]" | RDV |
| Spécialité | "coiffeur couleur balayage [ville]" | RDV |
| Urgence | "coiffeur ouvert samedi [ville]" | Appel / RDV |
| Prix | "coiffeur pas cher [ville]" | RDV |
| Tendance | "coiffeur cheveux bouclés [ville]" | RDV |

---

## 2. Mots-clés par prestation

### Coupes et soins
```
- coiffeur [ville/quartier]
- salon de coiffure [ville]
- coupe femme/homme [ville]
- coiffeur enfant [ville]
- coiffeur cheveux bouclés/crépus [ville]
- soin kératine [ville]
- coiffeur à domicile [ville]
```

### Couleur et technique
```
- coloriste [ville]
- balayage [ville]
- mèches [ville]
- ombré hair [ville]
- teinture cheveux [ville]
- coiffeur kératine lissage [ville]
- coiffeur spécialiste couleur [ville]
```

### Barbier / Homme
```
- barbier [ville]
- barber shop [ville]
- coupe homme barbe [ville]
- taille barbe [ville]
- barbier traditionnel [ville]
```

### Événementiel
```
- coiffure mariage [ville]
- coiffure bal/soirée [ville]
- chignon mariage [ville]
- coiffeur à domicile mariage [ville]
```

### Long tail
```
- coiffeur ouvert dimanche [ville]
- coiffeur sans rdv [ville]
- coiffeur prix abordable [ville]
- avis salon coiffure [nom] [ville]
```

---

## 3. Structure des pages

### Page d'accueil
```markdown
# Salon de Coiffure [Nom] — [Ville]

[Photo ambiance salon + before/after coiffures]

[Spécialité ou positionnement en 1 ligne]

## Réserver en ligne
[Widget Planity / Treatwell / formulaire]

## Nos prestations
[Grille tarifaire claire par prestation]

## Notre galerie
[Photos avant/après — optimisées WebP]

## Avis clients
[Google Reviews widget]

## Horaires & Adresse
```

### Page prestation (exemple : balayage)
```markdown
# Balayage [Ville] — Salon [Nom]

Meta : Spécialiste balayage à [Ville]. Résultats naturels, technique personnalisée.
Réservez en ligne. À partir de XX €.

## Notre technique de balayage
[Description technique + photos résultats]

## Tarifs balayage
[Tableau par longueur de cheveux]

## Réserver votre séance balayage
[CTA Planity / formulaire]
```

---

## 4. Schema markup

```json
{
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "name": "Salon Éclat & Style",
  "image": "https://eclat-style.fr/images/salon.jpg",
  "telephone": "+33456789012",
  "url": "https://eclat-style.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "42 rue de la Paix",
    "addressLocality": "Nantes",
    "postalCode": "44000",
    "addressCountry": "FR"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "€€",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "213"
  }
}
```

---

## 5. Plateformes de réservation

| Plateforme | Points forts | Action |
|---|---|---|
| **Planity** | Leader France coiffure | Profil complet + photos |
| **Treatwell** | International, fort trafic | Profil optimisé |
| **Google Réservation** | Directement dans GBP | Activer via Planity |
| **Instagram** | Avant/après, tendances | Actif obligatoire |

---

## 6. Stratégie Instagram / Pinterest

Pour un salon de coiffure, Instagram est souvent plus important que le SEO classique :
- Photos **avant/après** systématiques avec géolocalisation
- Hashtags : #coiffeur[ville] #balayage[ville] #coiffeuse[ville]
- Stories : coulisses salon, nouveaux produits
- Reels : transformation rapide (fort reach organique)
- Lien Instagram → site → réservation en ligne

---

## 7. Signaux de conversion

- [ ] Bouton "Réserver" visible dès la page d'accueil
- [ ] Grille tarifaire accessible (lève le frein prix)
- [ ] Galerie photos de qualité (avant/après)
- [ ] Avis Google récents affichés
- [ ] Horaires à jour (surtout les jours de fermeture exceptionnels)
- [ ] Numéro de téléphone cliquable

---

## 8. Checklist avant mise en ligne

- [ ] Schema HairSalon validé
- [ ] GBP complet (catégorie : Salon de coiffure ou Barbier)
- [ ] Planity / Treatwell lié au site
- [ ] Galerie photos optimisées (WebP)
- [ ] Instagram actif et lié
- [ ] NAP cohérent site + GBP + plateformes
- [ ] Tarifs à jour
