---
name: SEO Plombier
description: Spécialiste SEO pour artisans plombiers. Optimisation locale, mots-clés urgence/dépannage, schema LocalBusiness, Google Business Profile, stratégie de contenu métier. Utiliser pour les sites de plombiers, chauffagistes, sanitaristes.
---

# SEO Plombier

Guide SEO spécialisé pour les artisans plombiers, chauffagistes et sanitaristes. Axé sur le référencement local, les intentions d'urgence, et la conversion des visiteurs en appels téléphoniques.

## Quand utiliser ce skill

- Créer ou optimiser le site d'un plombier
- Rédiger des pages de services (débouchage, fuite, chauffe-eau...)
- Définir une stratégie de mots-clés par zone géographique
- Configurer le schema markup d'un artisan
- Optimiser la fiche Google Business Profile
- Créer des pages de zones de chalandise

---

## 1. Intentions de recherche prioritaires

Les internautes qui cherchent un plombier ont deux intentions dominantes :

| Intention | Exemple de requête | Action visée |
|---|---|---|
| **Urgence** | "plombier urgence nuit Paris 15" | Appel immédiat |
| **Devis** | "installation chauffe-eau à gaz tarif" | Formulaire ou appel |
| **Informationnelle** | "comment déboucher un évier" | Notoriété + contact |

Prioriser dans cet ordre : urgence > devis > informationnelle.

---

## 2. Mots-clés par service

### Débouchage / Canalisation
```
- débouchage canalisation [ville]
- plombier débouchage urgence
- déboucher évier/WC/douche
- canalisation bouchée [ville]
- curage canalisation [ville]
- nettoyage canalisation haute pression
```

### Fuite d'eau / Dégât des eaux
```
- plombier fuite d'eau [ville]
- réparation fuite urgence
- fuite robinet/chasse d'eau/tuyau
- recherche fuite non destructive
- dégât des eaux plombier
```

### Chauffe-eau / Chaudière
```
- installation chauffe-eau [ville]
- remplacement chauffe-eau électrique/thermodynamique
- réparation chaudière gaz [ville]
- chaudière en panne urgence
- entretien chaudière [ville]
- dépannage chaudière [marque : Vaillant, Saunier Duval, Viessmann...]
```

### Sanitaires / Rénovation
```
- installation salle de bain [ville]
- pose douche à l'italienne
- remplacement WC suspendu
- rénovation salle de bain [ville]
- plombier cuisine installation
```

### Long tail à fort taux de conversion
```
- plombier disponible aujourd'hui [ville]
- plombier weekend [ville]
- plombier pas cher [ville]
- devis plombier gratuit [ville]
- plombier RGE [ville]
```

---

## 3. Structure des pages

### Page d'accueil

```markdown
# Plombier [Ville] — Urgence 24h/7j | [Nom Entreprise]

[Numéro de téléphone bien visible dès le haut de page]

Plombier professionnel à [Ville] et [communes proches].
Intervention rapide en 30 min pour toute urgence plomberie.

## Nos services
- Débouchage canalisation
- Réparation fuite d'eau
- Installation et dépannage chauffe-eau
- Rénovation salle de bain
- Entretien chaudière

## Zone d'intervention
[Liste des villes/quartiers]

## Pourquoi nous choisir ?
- Devis gratuit
- Disponible 24h/24, 7j/7
- Artisan certifié RGE / Qualibat
- Paiement en fin de chantier
```

### Page service (exemple : débouchage)

```markdown
# Débouchage Canalisation [Ville] — Intervention Rapide

Meta description : Plombier spécialisé débouchage canalisation à [Ville].
Intervention d'urgence en moins d'1h. Devis gratuit. ☎ 06 XX XX XX XX

## Débouchage rapide à [Ville]
[2-3 phrases avec le mot-clé principal naturellement intégré]

## Nos techniques de débouchage
- Furet électrique
- Pompe à haute pression
- Caméra d'inspection

## Tarifs débouchage [Ville]
[Fourchette de prix ou mention "devis gratuit sur place"]

## Signes d'une canalisation bouchée
[Section FAQ-friendly → chances de featured snippet]

## Zone d'intervention
[Ville principale + communes]

## Contactez-nous
[Bouton d'appel + formulaire court]
```

---

## 4. Schema markup plombier

### LocalBusiness (obligatoire)

```json
{
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "Plomberie Dupont",
  "image": "https://exemple.fr/logo.jpg",
  "telephone": "+33612345678",
  "email": "contact@plomberie-dupont.fr",
  "url": "https://plomberie-dupont.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12 rue de la Paix",
    "addressLocality": "Lyon",
    "postalCode": "69001",
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
      "opens": "07:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday","Sunday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "€€",
  "areaServed": [
    {"@type": "City", "name": "Lyon"},
    {"@type": "City", "name": "Villeurbanne"},
    {"@type": "City", "name": "Bron"}
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
}
```

### FAQ Schema (pour pages service)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel est le prix d'un débouchage de canalisation ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le prix d'un débouchage varie entre 80€ et 250€ selon la complexité. Nous proposons un devis gratuit sur place avant toute intervention."
      }
    },
    {
      "@type": "Question",
      "name": "Intervenez-vous en urgence la nuit ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, notre équipe est disponible 24h/24 et 7j/7 pour toute urgence plomberie à [Ville] et ses environs."
      }
    }
  ]
}
```

---

## 5. Pages de zones de chalandise

Créer une page par ville/quartier ciblé. Structure type :

**URL :** `/plombier-[ville]/` ou `/plombier-[arrondissement]-[ville]/`

**Contenu minimal par page :**
- H1 : "Plombier [Ville] — [Service principal]"
- Paragraphe avec la ville citée naturellement 2-3 fois
- Liste des services disponibles dans la zone
- Temps d'intervention moyen
- Avis clients locaux si possible
- LocalBusiness schema adapté avec la ville

**Exemple d'arborescence pour un plombier parisien :**
```
/plombier-paris-15/
/plombier-paris-16/
/plombier-boulogne-billancourt/
/plombier-issy-les-moulineaux/
/plombier-vanves/
```

**Attention :** Chaque page doit avoir un contenu distinct (ne pas dupliquer le même texte avec juste la ville changée).

---

## 6. Google Business Profile

Éléments indispensables :
- **Catégorie principale** : Plombier
- **Catégories secondaires** : Chauffagiste, Installateur sanitaire, Service d'urgence plomberie
- **Description** : 750 caractères max — inclure les services principaux + zone + disponibilité 24h
- **Photos** : logo, équipe, chantiers avant/après, véhicule (min 10 photos)
- **Questions/Réponses** : Pré-remplir les Q&A fréquentes
- **Posts réguliers** : Promotions saisonnières (entretien chaudière en septembre)
- **Avis** : Répondre à tous (positifs et négatifs) sous 48h

**Requêtes Google Maps ciblées :**
```
plombier près de moi
plombier ouvert maintenant
urgence plomberie [ville]
```

---

## 7. Stratégie de contenu blog

Articles à fort potentiel pour un plombier :

| Article | Intention | Conversion |
|---|---|---|
| "Que faire en cas de fuite d'eau ?" | Urgence | Appel immédiat |
| "Prix chauffe-eau thermodynamique 2025" | Devis | Formulaire |
| "Entretien chaudière : pourquoi c'est obligatoire" | Info | Email |
| "Comment déboucher des WC sans plombier" | Info | Notoriété |
| "Aide MaPrimeRénov' pour chauffe-eau" | Devis | Formulaire |

Fréquence recommandée : 1 article/mois minimum.

---

## 8. Signaux de conversion

Le site d'un plombier doit convertir en appel téléphonique. Checklist :

- [ ] Numéro de téléphone cliquable (tel:) en haut de chaque page
- [ ] Bouton "Appel d'urgence" sticky sur mobile
- [ ] Formulaire court (prénom, téléphone, ville, problème) — max 5 champs
- [ ] Mention des certifications (RGE, Qualibat, QualiPAC)
- [ ] Avis Google intégrés (widget ou captures)
- [ ] Temps d'intervention affiché ("30 min en moyenne")
- [ ] Zone d'intervention visible sans scroller
- [ ] Paiement acceptés (CB, chèque, virement)

---

## 9. Checklist avant mise en ligne

**Technique :**
- [ ] Schema LocalBusiness validé (Rich Results Test)
- [ ] Fiche Google Business Profile vérifiée et complète
- [ ] Sitemap soumis à Google Search Console
- [ ] Page de confidentialité + mentions légales
- [ ] Numéro de téléphone identique sur site, GBP et annuaires (NAP cohérent)
- [ ] Balises title uniques par page (60 chars max)
- [ ] Meta descriptions (160 chars max, avec CTA)
- [ ] Images WebP compressées, alt text descriptif

**Contenu :**
- [ ] Page d'accueil avec H1 "Plombier [Ville]"
- [ ] Au moins une page par service principal
- [ ] Pages zones de chalandise (5 minimum)
- [ ] FAQ structurée avec schema

**Local :**
- [ ] Inscrit sur les annuaires : PagesJaunes, Houzz, Habitissimo, Allovoisins
- [ ] Profil Trustpilot ou Avis Vérifiés créé
- [ ] Mentions sur les réseaux sociaux cohérentes avec le site
