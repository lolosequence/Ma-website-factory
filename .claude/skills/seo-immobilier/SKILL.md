---
name: SEO Immobilier
description: Spécialiste SEO pour agences immobilières, agents indépendants, promoteurs et mandataires. Optimisation locale, mots-clés achat/vente/location, schema RealEstateAgent, stratégie de contenu marché local. Utiliser pour tout site immobilier.
---

# SEO Immobilier

Guide SEO spécialisé pour les agences immobilières, agents indépendants, mandataires et promoteurs. Axé sur le référencement local, les pages de quartiers, l'estimation en ligne, et la conversion en mandats et acheteurs.

## Quand utiliser ce skill

- Créer ou optimiser le site d'une agence immobilière
- Rédiger des pages de services (vente, location, gestion)
- Définir une stratégie de mots-clés par secteur géographique
- Configurer le schema markup d'une agence
- Créer des pages "marché immobilier" par ville ou quartier
- Optimiser les annonces pour le SEO

---

## 1. Intentions de recherche prioritaires

| Intention | Exemple de requête | Action visée |
|---|---|---|
| **Vendre** | "agence immobilière vente appartement [ville]" | Mandat vendeur |
| **Acheter** | "appartement 3 pièces [quartier] [ville]" | Visite / Contact |
| **Estimer** | "estimation appartement [ville] gratuite" | Formulaire estimation |
| **Louer** | "agence location meublée [ville]" | Mandat locataire |
| **Informationnelle** | "prix immobilier [ville] 2025" | Notoriété + contact |
| **Investissement** | "investissement locatif [ville] rentabilité" | Formulaire |

---

## 2. Mots-clés par service

### Vente (côté vendeur — mandats)
```
- agence immobilière [ville]
- vendre appartement/maison [ville]
- estimation immobilière gratuite [ville]
- estimation appartement en ligne [ville]
- agence vente immobilier [quartier] [ville]
- mandat exclusif immobilier [ville]
- combien vaut mon appartement [ville]
```

### Achat (côté acheteur)
```
- appartement à vendre [ville] [nb pièces]
- maison à vendre [ville/quartier]
- achat appartement [surface] [ville]
- appartement neuf [ville]
- programme neuf [ville]
- acheter appartement [ville] pas cher
```

### Location
```
- appartement à louer [ville]
- location meublée [ville]
- agence location [ville]
- gestion locative [ville]
- location courte durée [ville]
- chasseur immobilier [ville]
```

### Investissement / Gestion
```
- investissement locatif [ville]
- gestion locative [ville]
- rentabilité locative [ville]
- défiscalisation immobilière [ville]
- LMNP [ville]
- colocation [ville] investissement
```

### Long tail à fort taux de conversion
```
- agence immobilière [quartier précis] [ville]
- vendre rapidement appartement [ville]
- estimation gratuite sans engagement [ville]
- prix m2 [quartier] [ville] 2025
- acheter appartement [ville] premier achat
```

---

## 3. Structure des pages

### Page d'accueil

```markdown
# Agence Immobilière [Ville] — [Nom Agence]

[Barre de recherche d'annonces bien visible]

Votre agence immobilière de référence à [Ville] et [quartiers/communes].
Vente, achat, location et gestion locative depuis [année].

## Estimation gratuite
[Widget d'estimation en ligne ou formulaire court]
"Recevez l'estimation de votre bien en 48h"

## Nos annonces récentes
[3-6 annonces mises en avant avec photo, prix, surface]

## Pourquoi nous choisir
- [X] ventes réalisées en [année]
- Connaissance du marché local depuis [X] ans
- [X] avis clients

## Notre zone d'intervention
[Carte ou liste des villes/quartiers]
```

### Page "Vendre avec nous"

```markdown
# Vendre votre bien à [Ville] — [Nom Agence]

Meta description : Confiez la vente de votre appartement ou maison à [Nom Agence]
à [Ville]. Estimation gratuite, mandat simple ou exclusif. Réseau local depuis [X] ans.

## Pourquoi vendre avec [Nom Agence] ?
[Arguments différenciants — sans superlatifsabusifs]

## Notre processus de vente
1. Estimation gratuite et sans engagement
2. Mise en valeur du bien (photos pro, visite virtuelle)
3. Diffusion sur tous les portails (SeLoger, Leboncoin, PAP...)
4. Sélection et accompagnement des acheteurs
5. Suivi jusqu'à la signature chez le notaire

## Estimation en ligne
[Formulaire : adresse, type, surface, étage, état]

## Nos résultats
[Statistiques sobres : délai moyen de vente, nb ventes/an]
```

### Page marché local par ville/quartier (très puissant)

```markdown
# Marché Immobilier [Quartier] [Ville] — Prix & Tendances 2025

Meta description : Prix immobilier au m² dans [Quartier], [Ville] en 2025.
Données du marché local, tendances, estimation gratuite.

## Prix au m² à [Quartier] en 2025

| Type | Prix moyen | Fourchette |
|---|---|---|
| Appartement T1 | XXX €/m² | XXX – XXX €/m² |
| Appartement T2 | XXX €/m² | XXX – XXX €/m² |
| Appartement T3+ | XXX €/m² | XXX – XXX €/m² |
| Maison | XXX €/m² | XXX – XXX €/m² |

## Pourquoi investir à [Quartier] ?
[Atouts : transports, écoles, commerces, projets urbains]

## Évolution des prix sur 5 ans
[Graphique ou tableau]

## Estimer votre bien à [Quartier]
[CTA estimation]
```

---

## 4. Schema markup agence immobilière

### RealEstateAgent (obligatoire)

```json
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Immo Prestige Lyon",
  "image": "https://immo-prestige-lyon.fr/logo.jpg",
  "telephone": "+33478123456",
  "email": "contact@immo-prestige-lyon.fr",
  "url": "https://immo-prestige-lyon.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "15 rue de la République",
    "addressLocality": "Lyon",
    "postalCode": "69002",
    "addressRegion": "Auvergne-Rhône-Alpes",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.7640,
    "longitude": 4.8357
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "10:00",
      "closes": "17:00"
    }
  ],
  "areaServed": [
    {"@type": "City", "name": "Lyon"},
    {"@type": "City", "name": "Villeurbanne"},
    {"@type": "City", "name": "Caluire-et-Cuire"}
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "156"
  }
}
```

### Annonce immobilière (RealEstateListing)

```json
{
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "name": "Appartement 3 pièces 65m² — Lyon 6e",
  "description": "Bel appartement lumineux de 65m² au 3e étage avec balcon, proche métro.",
  "url": "https://immo-prestige-lyon.fr/vente/appartement-lyon-6-65m2",
  "image": "https://immo-prestige-lyon.fr/images/annonce-123.jpg",
  "offers": {
    "@type": "Offer",
    "price": "350000",
    "priceCurrency": "EUR"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lyon",
    "postalCode": "69006",
    "addressCountry": "FR"
  }
}
```

---

## 5. Pages de quartiers — arborescence SEO

Créer des pages dédiées pour chaque quartier/commune cible. Ce sont parmi les pages les plus performantes pour une agence.

**Structure d'URL :**
```
/immobilier-[ville]/                     → page ville principale
/immobilier-[ville]/[quartier]/          → page quartier
/vendre-[ville]-[quartier]/              → page vendeur par zone
/louer-[ville]-[quartier]/               → page location par zone
/prix-immobilier-[ville]-[quartier]/     → page marché local
```

**Exemple pour Lyon :**
```
/immobilier-lyon/
/immobilier-lyon/6eme-arrondissement/
/immobilier-lyon/croix-rousse/
/vendre-lyon-6eme/
/prix-immobilier-lyon-6eme/
```

**Contenu minimal par page quartier :**
- Prix au m² actualisés (source : DVF, Meilleurs Agents)
- Description du quartier (vie de quartier, transports, écoles)
- Annonces filtrées sur ce quartier
- CTA estimation ou contact

---

## 6. Portails et backlinks

Le SEO immobilier passe aussi par la présence sur les portails qui redirigent vers le site :

| Portail | Type | Action SEO |
|---|---|---|
| SeLoger | Annonces | Profil agence complet + lien |
| Leboncoin Immobilier | Annonces | Profil agence |
| PAP | Annonces | Présence pro |
| Logic-immo | Annonces | Profil agence |
| MeilleursAgents | Estimation | Fiche agence |
| Bien'ici | Annonces | Profil |
| Google Business Profile | Local | Priorité absolue |

---

## 7. Stratégie de contenu

### Blog / Guides

| Article | Intention | Valeur SEO |
|---|---|---|
| "Prix immobilier [ville] : bilan [année]" | Info + estimation | Forte, actualisable |
| "Guide premier achat immobilier [ville]" | Info | Long terme |
| "Investir dans l'immobilier locatif à [ville]" | Investissement | Forte |
| "Les meilleurs quartiers où vivre à [ville]" | Info | Forte |
| "Vendre son bien : les étapes clés" | Info vendeur | Forte |
| "Frais de notaire : calcul et simulation" | Info | Forte |
| "LMNP : tout savoir sur la location meublée" | Investissement | Forte |

### Pages de données de marché (à actualiser chaque trimestre)

```markdown
# Prix Immobilier [Ville] — [Trimestre] [Année]

[Données DVF + commentaire de l'agence]
[Tableau par type de bien et quartier]
[Tendance : hausse/baisse/stabilité]
[Estimation gratuite CTA]
```

---

## 8. Google Business Profile

- **Catégorie principale** : Agence immobilière
- **Catégories secondaires** : Gestionnaire immobilier, Promoteur immobilier
- **Photos** : Devanture agence, équipe, biens vendus (avec accord), bureau
- **Posts** : Annonces coup de coeur, bilans de marché, témoignages clients
- **Avis** : Solliciter un avis après chaque vente/location signée
- **Q&A** : Pré-remplir les questions sur les honoraires, délais, zones

---

## 9. Signaux de conversion

- [ ] Formulaire d'estimation en ligne visible dès la home (fort générateur de leads vendeurs)
- [ ] Barre de recherche d'annonces fonctionnelle
- [ ] Numéro de téléphone cliquable
- [ ] Alerte mail / sauvegarde de recherche pour acheteurs
- [ ] Avis clients récents (Google, Immodvisor)
- [ ] Stats agence affichées (nb ventes, délai moyen, satisfaction)
- [ ] Mention des honoraires (transparence obligatoire — loi ALUR)
- [ ] Carte interactive de la zone d'intervention

---

## 10. Checklist avant mise en ligne

**Réglementaire (loi ALUR) :**
- [ ] Honoraires affichés et barème accessible
- [ ] Numéro de carte professionnelle (T, G, ou CJI) affiché
- [ ] Nom de la caisse de garantie financière
- [ ] Assurance RCP mentionnée
- [ ] Mentions légales complètes

**Technique :**
- [ ] Schema RealEstateAgent validé
- [ ] GBP complet et vérifié
- [ ] Sitemap soumis à Search Console
- [ ] NAP cohérent sur tous les portails
- [ ] Annonces avec photos optimisées WebP

**Contenu :**
- [ ] Page d'accueil avec estimation en ligne
- [ ] Pages "Vendre", "Acheter", "Louer", "Gestion"
- [ ] Pages marché local par quartier (5 minimum)
- [ ] Page "L'équipe" avec photos et parcours
- [ ] Au moins 3 articles de blog au lancement
