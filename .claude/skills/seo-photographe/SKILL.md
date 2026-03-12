---
name: SEO Photographe
description: Spécialiste SEO pour photographes professionnels. Portfolio visuel optimisé, mots-clés par spécialité (mariage, portrait, corporate, immobilier), schema Photographer, Instagram/Pinterest. Utiliser pour tout photographe professionnel.
---

# SEO Photographe

Guide SEO spécialisé pour les photographes professionnels (mariage, portrait, corporate, immobilier, événementiel, mode). Axé sur le portfolio visuel, les mots-clés de spécialité, et la conversion en réservations.

## 1. Intentions de recherche prioritaires

| Intention | Exemple | Action |
|---|---|---|
| Spécialité | "photographe mariage [ville]" | Réservation |
| Corporate | "photographe entreprise [ville]" | Devis |
| Immobilier | "photographe immobilier [ville]" | Devis |
| Comparaison | "photographe mariage tarif [ville]" | Contact |
| Info | "combien coûte un photographe mariage ?" | Contact |

---

## 2. Mots-clés par spécialité

### Mariage (spécialité la plus cherchée)
```
- photographe mariage [ville/région]
- photographe mariage naturel [ville]
- photographe mariage reportage [ville]
- photographe mariage pas cher [ville]
- photographe mariage tarif [ville]
- photographe PACS [ville]
- vidéaste mariage [ville]
```

### Portrait
```
- photographe portrait [ville]
- séance photo portrait [ville]
- photographe famille [ville]
- photographe bébé naissance [ville]
- photographe grossesse [ville]
- photographe enfants [ville]
```

### Corporate / Entreprise
```
- photographe corporate [ville]
- photographe entreprise [ville]
- photo d'équipe entreprise [ville]
- photographe événementiel [ville]
- photographe conférence [ville]
- photographe produit [ville]
```

### Immobilier
```
- photographe immobilier [ville]
- photo bien immobilier [ville]
- reportage photo appartement [ville]
- visite virtuelle immobilier [ville]
```

### Mode / Publicité
```
- photographe mode [ville]
- lookbook photographe [ville]
- photographe e-commerce [ville]
- photo produit studio [ville]
```

---

## 3. Structure des pages

### Page d'accueil
```markdown
# Photographe [Spécialité principale] — [Nom] | [Ville]

[Photo hero emblématique — meilleure réalisation]

[Signature artistique en 1 phrase]

## Mes univers
[3-4 spécialités avec photo représentative de chaque]

## Réserver une séance
[Formulaire ou Calendly]

## Derniers reportages
[Galerie récente]

## Ils m'ont fait confiance
[Logos clients corporate ou témoignages mariés]
```

### Page spécialité mariage
```markdown
# Photographe Mariage [Ville] — [Nom]

Meta : Photographe mariage à [Ville], style [reportage/posé/naturel].
Disponibilités [année]. Tarifs à partir de XX €.

## Mon approche du reportage mariage
[Style, valeurs, promesse artistique]

## Ce qui est inclus
[Nombre de photos, délai livraison, formats, galerie en ligne]

## Tarifs
[Formules claires]

## Dates disponibles
[Calendrier ou "contactez-moi pour vérifier"]

## Galerie mariage
[Portfolio de plusieurs mariages]

## Témoignages mariés
```

---

## 4. Schema markup

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Julie Martin Photographie",
  "@id": "https://juliemartinphoto.fr",
  "url": "https://juliemartinphoto.fr",
  "telephone": "+33623456789",
  "image": "https://juliemartinphoto.fr/portfolio/mariage-hero.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rennes",
    "postalCode": "35000",
    "addressCountry": "FR"
  },
  "areaServed": ["Bretagne", "Pays de la Loire", "France entière"],
  "priceRange": "€€€",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "48"
  }
}
```

---

## 5. Optimisation des images (critique pour un photographe)

Paradoxe : un photographe a des milliers d'images sur son site, ce qui peut le ralentir catastrophiquement.

**Bonnes pratiques :**
- Format **WebP** systématiquement (50-70% plus léger que JPEG)
- Dimensions adaptées au conteneur (ne pas charger du 4000px pour afficher en 800px)
- **Lazy loading** sur toutes les images hors écran
- **LCP < 2,5s** — image hero préchargée avec `<link rel="preload">`
- Alt text descriptif : "mariage-domaine-des-pins-rennes-2024" (pas "IMG_4523")
- Sitemap images pour l'indexation Google Images

---

## 6. Instagram / Pinterest — acquisition principale

Pour la photo mariage/portrait, Instagram et Pinterest génèrent plus de leads que Google :

**Instagram :**
- Bio : "📍[Ville] | Photographe mariage [style] | Réservations → lien"
- Posts : reportages, coulisses, before/after retouche
- Hashtags : #photographemariage[ville] #weddingphotographer[ville]
- Stories : dates disponibles, making-of, témoignages

**Pinterest :**
- Épingles systématiques de chaque photo de mariage
- Tableaux par thème : "Mariage champêtre", "Mariage urbain"...
- Fort trafic longue traîne vers le site

---

## 7. Signaux de conversion

- [ ] Portfolio de qualité (30+ photos par spécialité)
- [ ] Tarifs visibles ou fourchette (filtre les prospects non qualifiés)
- [ ] Formulaire avec champs : type de prestation, date, lieu, budget
- [ ] Délai de réponse indiqué
- [ ] Témoignages clients avec photo du projet
- [ ] Calendrier de disponibilités visible

---

## 8. Checklist avant mise en ligne

- [ ] Schema LocalBusiness validé
- [ ] GBP créé (catégorie : Photographe)
- [ ] Images WebP, lazy loading, alt text
- [ ] Page vitesse < 3s (PageSpeed Insights)
- [ ] Instagram actif et lié
- [ ] Pinterest profil créé si mariage/portrait
- [ ] Portfolio organisé par spécialité
