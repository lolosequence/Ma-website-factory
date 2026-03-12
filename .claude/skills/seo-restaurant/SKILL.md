---
name: SEO Restaurant
description: Spécialiste SEO pour restaurants, cafés, brasseries et food & beverage. Optimisation locale, Google Business Profile, schema Restaurant, mots-clés réservation/livraison, stratégie de contenu. Utiliser pour tout établissement de restauration.
---

# SEO Restaurant

Guide SEO spécialisé pour les restaurants, brasseries, cafés, food trucks et dark kitchens. Axé sur le référencement local, Google Business Profile, la gestion des avis, et la conversion en réservations.

## Quand utiliser ce skill

- Créer ou optimiser le site d'un restaurant
- Rédiger les pages menu, chef, réservation
- Définir une stratégie de mots-clés (cuisine, quartier, occasion)
- Configurer le schema markup d'un restaurant
- Optimiser la fiche Google Business Profile
- Stratégie avis clients

---

## 1. Intentions de recherche prioritaires

| Intention | Exemple de requête | Action visée |
|---|---|---|
| **Proximité** | "restaurant japonais Lyon 2" | Visite / Réservation |
| **Occasion** | "restaurant romantique anniversaire Paris" | Réservation |
| **Livraison** | "sushi livraison [quartier]" | Commande en ligne |
| **Comparaison** | "meilleur burger Bordeaux" | Visite |
| **Informationnelle** | "restaurant gastronomique avec menu végétarien" | Réservation |

---

## 2. Mots-clés par type d'établissement

### Restaurant généraliste
```
- restaurant [cuisine] [ville/quartier]
- restaurant [ville] menu midi
- déjeuner affaires [ville]
- restaurant en famille [ville]
- restaurant terrasse [ville]
- restaurant ouvert dimanche [ville]
```

### Occasions spéciales
```
- restaurant anniversaire [ville]
- restaurant romantique [ville]
- restaurant événement privatisable [ville]
- dîner Saint-Valentin [ville]
- restaurant groupe [ville]
- restaurant séminaire [ville]
```

### Livraison / Click & Collect
```
- livraison [cuisine] [ville/quartier]
- [cuisine] à domicile [ville]
- commande en ligne [restaurant]
- click and collect [ville]
```

### Par type de cuisine (adapter selon le restaurant)
```
- restaurant italien/japonais/libanais/mexicain... [ville]
- pizzeria [ville]
- sushi [ville]
- restaurant végétarien/vegan [ville]
- restaurant halal/casher [ville]
- gastronomique [ville]
- bistronomie [ville]
- brunch [ville]
```

### Long tail à fort taux de conversion
```
- réserver table [restaurant] [ville]
- restaurant [ville] prix moyen
- restaurant [vue/terrasse/rooftop] [ville]
- restaurant [cuisine] pas cher [ville]
- restaurant [cuisine] ouvert maintenant [ville]
```

---

## 3. Structure des pages

### Page d'accueil

```markdown
# Restaurant [Nom] — [Type de cuisine] à [Ville]

[Photo hero appétissante — optimisée WebP]

[Accroche courte : ambiance + spécialité + quartier]

## Notre carte
[Aperçu des plats signatures avec photos]

## Réserver une table
[Widget de réservation ou bouton vers TheFork/formulaire]

## Horaires & Accès
Lundi–Vendredi : 12h–14h30 / 19h–23h
Samedi–Dimanche : 12h–23h

[Adresse + Google Maps embed]

## Avis de nos clients
[Widget Google Reviews ou captures d'écran]
```

### Page Menu

```markdown
# Menu [Nom Restaurant] — [Saison/Année]

Meta description : Découvrez la carte du restaurant [Nom] à [Ville].
[Type de cuisine], produits frais, menu à [prix] €. Réservez en ligne.

## Entrées
[Liste des plats avec description courte et prix]

## Plats
[...]

## Desserts
[...]

## Formules
- Formule déjeuner : entrée + plat ou plat + dessert — XX €
- Menu dégustation : XX €

[Note sur les allergènes]
```

### Page Réservation

```markdown
# Réserver une table — [Nom Restaurant] [Ville]

[Widget TheFork / Zenchef / formulaire direct]

Disponible pour :
- Déjeuner en semaine
- Dîner du mardi au samedi
- Groupes et événements privatisés (sur demande)

Pour une réservation de plus de 8 personnes : ☎ XX XX XX XX
```

---

## 4. Schema markup restaurant

### Restaurant (obligatoire)

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Le Bistrot du Port",
  "image": [
    "https://bistrotduport.fr/images/salle.jpg",
    "https://bistrotduport.fr/images/plat-signature.jpg"
  ],
  "telephone": "+33491234567",
  "email": "reservation@bistrotduport.fr",
  "url": "https://bistrotduport.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3 quai du Port",
    "addressLocality": "Marseille",
    "postalCode": "13002",
    "addressRegion": "Provence-Alpes-Côte d'Azur",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.2965,
    "longitude": 5.3698
  },
  "servesCuisine": ["Méditerranéenne", "Poissons et fruits de mer"],
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Cash, Credit Card",
  "menu": "https://bistrotduport.fr/menu",
  "hasMap": "https://maps.google.com/...",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "12:00",
      "closes": "14:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "19:00",
      "closes": "23:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "342"
  },
  "acceptsReservations": "True"
}
```

### Menu Schema (optionnel mais très utile)

```json
{
  "@context": "https://schema.org",
  "@type": "Menu",
  "name": "Carte du Bistrot du Port",
  "hasMenuSection": [
    {
      "@type": "MenuSection",
      "name": "Entrées",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Soupe de poisson maison",
          "description": "Avec rouille et croûtons",
          "offers": {
            "@type": "Offer",
            "price": "12",
            "priceCurrency": "EUR"
          }
        }
      ]
    }
  ]
}
```

---

## 5. Google Business Profile — priorité absolue

Le GBP est le premier résultat visible pour un restaurant local. C'est souvent plus important que le site.

**Éléments indispensables :**
- **Catégorie principale** : Restaurant (+ type de cuisine)
- **Attributs** : Réservation en ligne, Livraison, À emporter, Terrasse, WiFi, Accessible PMR...
- **Photos** : salle, terrasse, plats, chef, menu — minimum 20 photos, renouveler régulièrement
- **Menu** : uploader la carte directement dans GBP
- **Horaires** : toujours à jour (y compris jours fériés)
- **Réponses aux avis** : répondre à 100% des avis sous 24h (ton chaleureux, personnalisé)
- **Posts hebdomadaires** : plat du jour, événement, promotion

**Gestion des avis négatifs :**
```
Réponse type : "Merci [Prénom] pour votre retour. Nous sommes navrés que votre expérience
n'ait pas été à la hauteur de vos attentes. Nous prenons note de vos remarques sur [point précis]
et faisons le nécessaire pour nous améliorer. N'hésitez pas à nous recontacter directement
au [téléphone] — nous serons ravis de vous recevoir à nouveau."
```

---

## 6. Présence sur les plateformes

Ne pas négliger ces plateformes qui alimentent aussi le SEO :

| Plateforme | Priorité | Action |
|---|---|---|
| Google Business Profile | Indispensable | Optimisation complète |
| TheFork (LaFourchette) | Haute | Profil complet + photos |
| Tripadvisor | Haute | Répondre aux avis |
| Yelp | Moyenne | Profil à jour |
| Michelin Guide | Haute (si applicable) | Fiche gratuite |
| Instagram | Haute | Photos plats, stories |
| Facebook | Moyenne | Horaires, événements |

---

## 7. Stratégie de contenu

### Blog / Actualités

| Article | Intention | Timing |
|---|---|---|
| "Notre menu de fêtes" | Réservation | Novembre-Décembre |
| "Le chef vous présente son plat signature" | Notoriété | Toujours |
| "D'où viennent nos produits ?" | Confiance | Toujours |
| "Saint-Valentin : réservez votre table" | Réservation | Janvier |
| "Brunch dominical : notre nouveau menu" | Info | Lancement |

### Open Graph pour les réseaux sociaux
```html
<meta property="og:title" content="Le Bistrot du Port — Restaurant Méditerranéen Marseille">
<meta property="og:description" content="Cuisine méditerranéenne au cœur du Vieux-Port. Réservez votre table en ligne.">
<meta property="og:image" content="https://bistrotduport.fr/images/og-image.jpg">
<meta property="og:type" content="restaurant">
```

---

## 8. Signaux de conversion

- [ ] Bouton "Réserver" en haut de page et sticky sur mobile
- [ ] Numéro de téléphone cliquable
- [ ] Horaires visibles sans scroller
- [ ] Adresse avec lien Google Maps
- [ ] Menu consultable (PDF ou page HTML — HTML préférable pour le SEO)
- [ ] Prix moyens visibles (rassure le visiteur)
- [ ] Photos de qualité (mobile-first)
- [ ] Avis récents visibles
- [ ] Temps de chargement < 2s (LCP critique pour mobile)

---

## 9. Checklist avant mise en ligne

**Technique :**
- [ ] Schema Restaurant validé (Rich Results Test)
- [ ] GBP vérifié et entièrement complété
- [ ] Sitemap soumis à Google Search Console
- [ ] NAP cohérent sur toutes les plateformes
- [ ] Open Graph tags configurés
- [ ] Images WebP, alt text descriptif (noms des plats)

**Contenu :**
- [ ] Page d'accueil avec H1 "[Type] à [Ville]"
- [ ] Page Menu (HTML, pas uniquement PDF)
- [ ] Page Réservation
- [ ] Page À propos / Chef
- [ ] Page Événements/Privatisation si applicable

**Plateformes :**
- [ ] TheFork profil complet
- [ ] Tripadvisor profil complet
- [ ] Instagram actif
- [ ] Google Posts configuré
