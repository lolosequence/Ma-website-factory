---
name: SEO Comptable
description: Spécialiste SEO pour experts-comptables et cabinets comptables. Contraintes OEC, mots-clés par taille client (TPE/PME) et mission (bilan, paie, fiscal), schema AccountingService, stratégie de contenu. Utiliser pour tout cabinet d'expertise comptable.
---

# SEO Comptable

Guide SEO spécialisé pour les experts-comptables et cabinets d'expertise comptable. Axé sur la crédibilité, le B2B local, les missions comptables par cible, et la conversion en rendez-vous.

## 1. Contraintes ordinales — IMPORTANT

- **Titre "expert-comptable"** : protégé, nécessite le DEC + inscription à l'Ordre des Experts-Comptables (OEC)
- **Numéro d'inscription à l'Ordre** : doit figurer sur le site
- **Règles publicitaires** : la publicité est autorisée mais doit rester sobre et non mensongère
- **Tarifs** : pas d'affichage obligatoire mais recommandé pour les TPE/créateurs
- **Mention "Membre de l'OEC"** appréciée pour la crédibilité

---

## 2. Intentions de recherche prioritaires

| Intention | Exemple | Action |
|---|---|---|
| Local TPE | "expert-comptable TPE [ville]" | RDV |
| Création | "comptable création entreprise [ville]" | Contact |
| Spécialité | "expert-comptable e-commerce [ville]" | Contact |
| Prix | "tarif expert-comptable auto-entrepreneur" | Contact |
| Info | "bilan comptable SARL obligatoire ?" | Nurturing |

---

## 3. Mots-clés par cible et mission

### Par taille de client
```
- expert-comptable TPE [ville]
- comptable auto-entrepreneur [ville]
- expert-comptable PME [ville]
- cabinet comptable start-up [ville]
- expert-comptable profession libérale [ville]
- comptable association [ville]
```

### Par mission
```
- expert-comptable bilan comptable [ville]
- comptable paie [ville]
- externalisation comptabilité [ville]
- expert-comptable fiscal [ville]
- conseil fiscal [ville]
- déclaration TVA [ville]
- expert-comptable création SASU SARL [ville]
```

### Par secteur (niche puissante)
```
- expert-comptable restauration [ville]
- comptable immobilier [ville]
- expert-comptable profession médicale [ville]
- expert-comptable e-commerce [ville]
- comptable artisan [ville]
- expert-comptable agricole [ville]
```

### Long tail
```
- expert-comptable en ligne [ville]
- comptable pas cher TPE [ville]
- premier bilan SARL prix
- comptable création micro-entreprise [ville]
```

---

## 4. Structure des pages

### Page d'accueil
```markdown
# Cabinet [Nom] — Expert-Comptable à [Ville]

[Numéro OEC affiché]

Cabinet d'expertise comptable à [Ville], spécialisé dans l'accompagnement des TPE/PME.
[Secteurs spécifiques si niche]

## Nos missions
- Tenue de comptabilité
- Bilan et comptes annuels
- Déclarations fiscales (TVA, IS, IR)
- Paie et social
- Conseil et stratégie

## Pour qui
[TPE, PME, auto-entrepreneurs, professions libérales...]

## Prendre rendez-vous
[Formulaire ou Calendly — premier RDV gratuit si applicable]
```

### Page par mission
```markdown
# Externalisation de la Paie — [Nom Cabinet] [Ville]

Meta : Externalisez la gestion de votre paie avec [Nom Cabinet] à [Ville].
TPE et PME. Expert-comptable membre OEC.

## Pourquoi externaliser la paie ?
[Gain de temps, conformité, expertise]

## Ce qui est inclus
[Bulletins de paie, DSN, charges sociales, solde tout compte...]

## Pour quelle taille d'entreprise ?
[1 à 50 salariés]

## Tarifs indicatifs
[Grille ou "devis gratuit selon volume"]

## Demander un devis
[Formulaire]
```

---

## 5. Schema markup

```json
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "Cabinet Leblanc & Associés",
  "description": "Cabinet d'expertise comptable spécialisé TPE/PME — Membre OEC",
  "telephone": "+33467891234",
  "url": "https://cabinet-leblanc.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "14 avenue des Entrepreneurs",
    "addressLocality": "Strasbourg",
    "postalCode": "67000",
    "addressCountry": "FR"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:30",
      "closes": "18:30"
    }
  ],
  "memberOf": {
    "@type": "Organization",
    "name": "Ordre des Experts-Comptables"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "52"
  }
}
```

---

## 6. Niche sectorielle — levier de différenciation

Le marché de l'expertise comptable est très concurrentiel en généraliste. La niche sectorielle est le meilleur levier :

- **Restaurateurs** : spécificités TVA restauration, caisse enregistreuse, charges
- **Médecins/Kiné/Dentistes** : BNC, SCM, SEL, Carmf
- **E-commerce** : TVA intracommunautaire, dropshipping, comptabilité Amazon/Shopify
- **Immobilier** : SCI, LMNP, Pinel, comptabilité marchands de biens

Créer une page dédiée par niche + contenu spécialisé.

---

## 7. Stratégie de contenu

| Article | Intention |
|---|---|
| "SASU ou SARL : que choisir en 2025 ?" | Très cherché |
| "Charges d'une auto-entreprise : guide complet" | Fort trafic |
| "Comment lire son bilan comptable ?" | Notoriété |
| "TVA : quand devient-on assujetti ?" | Info |
| "Créer une SCI familiale : guide complet" | Fort |

---

## 8. Signaux de conversion B2B

- [ ] Numéro OEC visible
- [ ] Premier RDV gratuit proposé (lève le frein)
- [ ] Outils de comptabilité en ligne cités (Pennylane, Sage, QuadraCompta...)
- [ ] Accès client dématérialisé mentionné
- [ ] Témoignages clients avec secteur + taille
- [ ] Formulaire qualification : statut, CA, effectif, besoins

---

## 9. Checklist avant mise en ligne

- [ ] Numéro OEC affiché (obligatoire)
- [ ] Schema AccountingService validé
- [ ] GBP complet (catégorie : Expert-comptable)
- [ ] Page par mission principale (6+ pages)
- [ ] Page niche sectorielle si applicable
- [ ] Blog avec 3 articles au lancement
- [ ] Mentions légales + RCS
