---
name: SEO Électricien
description: Spécialiste SEO pour artisans électriciens. Optimisation locale, mots-clés urgence/dépannage/installation, schema LocalBusiness, Google Business Profile, stratégie de contenu métier. Utiliser pour les sites d'électriciens, installateurs électriques, domoticiens.
---

# SEO Électricien

Guide SEO spécialisé pour les artisans électriciens, installateurs et domoticiens. Axé sur le référencement local, les intentions d'urgence, la mise en conformité, et la conversion en appels ou devis.

## Quand utiliser ce skill

- Créer ou optimiser le site d'un électricien
- Rédiger des pages de services (dépannage, installation, tableau électrique...)
- Définir une stratégie de mots-clés par zone géographique
- Configurer le schema markup d'un artisan
- Optimiser la fiche Google Business Profile
- Créer des pages de zones de chalandise

---

## 1. Intentions de recherche prioritaires

| Intention | Exemple de requête | Action visée |
|---|---|---|
| **Urgence** | "électricien urgence panne nuit Paris" | Appel immédiat |
| **Devis** | "installation tableau électrique prix" | Formulaire ou appel |
| **Conformité** | "mise en conformité électrique vente maison" | Formulaire |
| **Informationnelle** | "différence disjoncteur fusible" | Notoriété + contact |

Prioriser : urgence > devis/conformité > informationnelle.

---

## 2. Mots-clés par service

### Dépannage / Urgence
```
- électricien urgence [ville]
- panne électrique urgence [ville]
- disjoncteur qui saute
- coupure électrique maison [ville]
- électricien disponible nuit weekend [ville]
- dépannage électrique rapide [ville]
```

### Tableau électrique
```
- installation tableau électrique [ville]
- remplacement tableau électrique [ville]
- mise aux normes tableau électrique
- tableau électrique prix [ville]
- disjoncteur différentiel installation
- remplacer fusibles par disjoncteurs
```

### Mise en conformité
```
- mise en conformité électrique [ville]
- diagnostic électrique vente appartement
- certificat conformité électrique [ville]
- mise aux normes électriques NF C 15-100
- bilan électrique avant vente
```

### Installation / Rénovation
```
- électricien installation [ville]
- rénovation installation électrique [ville]
- pose prises courant [ville]
- installation éclairage LED [ville]
- câblage maison neuve [ville]
- électricien neuf et rénovation [ville]
```

### Borne de recharge / Domotique
```
- installation borne recharge voiture électrique [ville]
- pose IRVE [ville]
- électricien borne IRVE certifié [ville]
- installation domotique [ville]
- interrupteur connecté pose [ville]
- électricien certifié IRVE [ville]
```

### Long tail à fort taux de conversion
```
- électricien RGE [ville]
- électricien qualifié [ville]
- devis électricien gratuit [ville]
- électricien pas cher [ville]
- électricien certifié Qualifelec [ville]
```

---

## 3. Structure des pages

### Page d'accueil

```markdown
# Électricien [Ville] — Dépannage & Installation | [Nom Entreprise]

[Numéro de téléphone cliquable bien visible]

Électricien professionnel à [Ville] et [communes proches].
Intervention rapide pour toute urgence électrique, installation et mise en conformité.

## Nos services
- Dépannage électrique urgence
- Installation et remplacement tableau électrique
- Mise en conformité NF C 15-100
- Installation borne de recharge IRVE
- Rénovation électrique complète

## Zone d'intervention
[Liste des villes/quartiers]

## Nos certifications
- Qualifié Qualifelec / RGE
- Habilitation électrique BR/BC
- Certifié IRVE (bornes de recharge)
```

### Page service (exemple : tableau électrique)

```markdown
# Installation Tableau Électrique [Ville] — Devis Gratuit

Meta description : Électricien certifié pour installation et remplacement tableau électrique
à [Ville]. Mise aux normes NF C 15-100. Devis gratuit. ☎ 06 XX XX XX XX

## Remplacement tableau électrique à [Ville]
[Introduction avec mot-clé principal]

## Quand changer son tableau électrique ?
- Disjoncteurs qui sautent fréquemment
- Tableau à fusibles (obsolète)
- Vente du bien immobilier
- Extension du logement

## Nos prestations
- Remplacement tableau ancien par tableau modern
- Ajout de circuits
- Pose de protection différentielle
- Mise en conformité complète

## Tarifs
[Fourchette de prix ou "devis gratuit sur place"]

## FAQ tableau électrique
[Section Q&A → featured snippet]

## Zone d'intervention
[Ville principale + communes]
```

---

## 4. Schema markup électricien

### LocalBusiness (obligatoire)

```json
{
  "@context": "https://schema.org",
  "@type": "Electrician",
  "name": "Électricité Martin",
  "image": "https://exemple.fr/logo.jpg",
  "telephone": "+33612345678",
  "email": "contact@electricite-martin.fr",
  "url": "https://electricite-martin.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "5 avenue du Général de Gaulle",
    "addressLocality": "Bordeaux",
    "postalCode": "33000",
    "addressRegion": "Nouvelle-Aquitaine",
    "addressCountry": "FR"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "07:30",
      "closes": "19:00"
    }
  ],
  "priceRange": "€€",
  "areaServed": [
    {"@type": "City", "name": "Bordeaux"},
    {"@type": "City", "name": "Mérignac"},
    {"@type": "City", "name": "Pessac"}
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "84"
  }
}
```

### FAQ Schema

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel est le prix de remplacement d'un tableau électrique ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le remplacement d'un tableau électrique coûte entre 600€ et 1 500€ selon le nombre de circuits. Nous réalisons un devis gratuit sur place."
      }
    },
    {
      "@type": "Question",
      "name": "Intervenez-vous en urgence électrique ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, nous intervenons en urgence 24h/24 à [Ville] et dans un rayon de 30 km. Appelez directement pour une intervention rapide."
      }
    },
    {
      "@type": "Question",
      "name": "Êtes-vous certifié RGE ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, notre entreprise est certifiée RGE Qualifelec, ce qui vous permet de bénéficier des aides MaPrimeRénov' pour vos travaux d'économies d'énergie."
      }
    }
  ]
}
```

---

## 5. Pages de zones de chalandise

**URL :** `/electricien-[ville]/`

**Contenu par page :**
- H1 : "Électricien [Ville] — Dépannage & Installation"
- Services disponibles dans la zone
- Temps d'intervention moyen
- Avis clients locaux
- Schema LocalBusiness adapté

**Exemple d'arborescence :**
```
/electricien-lyon/
/electricien-villeurbanne/
/electricien-caluire-et-cuire/
/electricien-bron/
/electricien-venissieux/
```

---

## 6. Google Business Profile

- **Catégorie principale** : Électricien
- **Catégories secondaires** : Service d'installation électrique, Installateur de bornes de recharge, Domotique
- **Description** : Inclure services principaux + certifications RGE/Qualifelec + zone + urgence 24h
- **Photos** : Logo, équipe, chantiers avant/après, tableau électrique posé, borne IRVE installée
- **Posts** : Promotions saisonnières (audit électrique avant hiver), actualités réglementation
- **Q&A** : Pré-remplir les questions fréquentes sur les prix et délais

---

## 7. Stratégie de contenu blog

| Article | Intention | Conversion |
|---|---|---|
| "Que faire en cas de panne électrique ?" | Urgence | Appel |
| "Prix installation tableau électrique 2025" | Devis | Formulaire |
| "MaPrimeRénov' et travaux électriques" | Info/Devis | Formulaire |
| "IRVE : tout savoir sur les bornes de recharge" | Info | Formulaire |
| "Mise en conformité électrique : est-ce obligatoire ?" | Info/Devis | Formulaire |
| "Diagnostic électrique avant vente : guide complet" | Info | Contact |

---

## 8. Signaux de conversion

- [ ] Numéro cliquable (tel:) en haut de chaque page
- [ ] Bouton d'urgence sticky sur mobile
- [ ] Formulaire devis court (prénom, téléphone, ville, type de travaux)
- [ ] Certifications affichées : RGE, Qualifelec, IRVE, habilitations
- [ ] Avis Google intégrés
- [ ] Mention des aides disponibles (MaPrimeRénov', CEE)
- [ ] Zone d'intervention visible
- [ ] Délai d'intervention affiché

---

## 9. Checklist avant mise en ligne

**Technique :**
- [ ] Schema Electrician validé (Rich Results Test)
- [ ] Fiche Google Business Profile vérifiée et complète
- [ ] Sitemap soumis à Google Search Console
- [ ] NAP cohérent (Nom / Adresse / Téléphone identique partout)
- [ ] Balises title uniques (60 chars max)
- [ ] Meta descriptions (160 chars max, CTA inclus)

**Contenu :**
- [ ] Page d'accueil H1 "Électricien [Ville]"
- [ ] Page par service principal (tableau, dépannage, conformité, borne IRVE)
- [ ] Pages zones de chalandise (5 minimum)
- [ ] FAQ structurée avec schema

**Local :**
- [ ] Annuaires : PagesJaunes, Houzz, Habitissimo, Kompass
- [ ] Profil Trustpilot ou Avis Vérifiés
- [ ] Réseaux sociaux cohérents avec le site
