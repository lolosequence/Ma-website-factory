---
name: SEO Avocat
description: Spécialiste SEO pour cabinets d'avocats. Optimisation locale et nationale, mots-clés par domaine juridique, schema LegalService, contraintes déontologiques (publicité avocat), stratégie de contenu. Utiliser pour les sites de cabinets d'avocats et juristes.
---

# SEO Avocat

Guide SEO spécialisé pour les cabinets d'avocats et avocats indépendants. Axé sur le référencement local et national, le respect des règles déontologiques en matière de publicité, et la conversion en prises de contact qualifiées.

## Quand utiliser ce skill

- Créer ou optimiser le site d'un cabinet d'avocats
- Rédiger des pages de domaines d'intervention
- Définir une stratégie de mots-clés par spécialité juridique
- Configurer le schema markup d'un cabinet
- Respecter les contraintes déontologiques de la profession

---

## 1. Contraintes déontologiques — PRIORITÉ ABSOLUE

La publicité des avocats est régie par le **Règlement Intérieur National (RIN)** et les règles du barreau.

**Ce qui est autorisé :**
- Site internet informatif présentant le cabinet et ses domaines
- Contenu juridique éducatif (articles de blog, guides)
- Mentions des certifications, formations, langues parlées
- Coordonnées et formulaire de contact
- Référencement naturel (SEO)

**Ce qui est interdit :**
- Publicité comparative ("meilleur avocat de Paris")
- Promesse de résultats ("nous gagnons 90% de nos affaires")
- Toute mention trompeuse ou racolage
- Démarchage actif (cold calling, email non sollicité)
- Publicité sur les honoraires à titre accrocheur

**Formulations à éviter :**
```
❌ "Avocat le moins cher de [ville]"
❌ "Nous obtenons toujours gain de cause"
❌ "Résultats garantis"
❌ "Leader en droit du travail"
✅ "Cabinet spécialisé en droit du travail"
✅ "Accompagnement juridique en droit de la famille"
✅ "Consultation juridique — Prise en charge ALJB possible"
```

---

## 2. Intentions de recherche prioritaires

| Intention | Exemple de requête | Action visée |
|---|---|---|
| **Urgence juridique** | "avocat garde à vue urgence Paris" | Appel immédiat |
| **Spécialité** | "avocat droit du travail licenciement [ville]" | Consultation |
| **Informationnelle** | "comment contester un licenciement abusif" | Contact différé |
| **Comparaison** | "avocat divorce [ville] avis" | Prise de RDV |
| **Aide juridictionnelle** | "avocat aide juridictionnelle [ville]" | Contact |

---

## 3. Mots-clés par domaine juridique

### Droit de la famille
```
- avocat divorce [ville]
- avocat divorce à l'amiable [ville]
- avocat garde enfant [ville]
- avocat pension alimentaire [ville]
- avocat adoption [ville]
- avocat succession héritage [ville]
- avocat droit de la famille [ville]
```

### Droit du travail
```
- avocat droit du travail [ville]
- avocat licenciement abusif [ville]
- avocat rupture conventionnelle [ville]
- avocat prud'hommes [ville]
- avocat harcèlement moral travail [ville]
- avocat droit du travail salarié [ville]
```

### Droit pénal
```
- avocat pénal [ville]
- avocat défense pénale [ville]
- avocat garde à vue [ville]
- avocat comparution immédiate [ville]
- avocat assises [ville]
- avocat droit pénal des affaires [ville]
```

### Droit immobilier
```
- avocat droit immobilier [ville]
- avocat litige locataire propriétaire [ville]
- avocat vice caché immobilier [ville]
- avocat construction [ville]
- avocat copropriété [ville]
```

### Droit des affaires
```
- avocat droit des affaires [ville]
- avocat création entreprise [ville]
- avocat contrat commercial [ville]
- avocat redressement judiciaire [ville]
- avocat contentieux commercial [ville]
```

### Droit des étrangers
```
- avocat droit des étrangers [ville]
- avocat titre de séjour [ville]
- avocat OQTF [ville]
- avocat naturalisation [ville]
- avocat visa [ville]
```

### Long tail informationnelle (attire des clients potentiels)
```
- que faire après un licenciement abusif
- comment contester une garde à vue
- délai divorce consentement mutuel 2025
- indemnités rupture conventionnelle calcul
- que faire en cas de vice caché maison
```

---

## 4. Structure des pages

### Page d'accueil

```markdown
# Cabinet [Nom] — Avocat [Spécialité(s)] à [Ville/Barreau]

[Photo professionnelle de l'avocat ou de l'équipe]

Cabinet d'avocats inscrit au Barreau de [Ville], spécialisé en [domaines principaux].
Nous accompagnons particuliers et entreprises dans leurs démarches juridiques.

## Nos domaines d'intervention
- Droit de la famille
- Droit du travail
- Droit pénal
[...]

## Prendre rendez-vous
[Formulaire de contact ou lien Calendly/consultation]
Consultation possible en présentiel, par téléphone ou visioconférence.

## Le cabinet
[2-3 phrases : ancienneté, approche, valeurs — sans superlatifsinterdit]
```

### Page domaine (exemple : droit du travail)

```markdown
# Avocat Droit du Travail à [Ville] — Cabinet [Nom]

Meta description : Cabinet [Nom], avocat spécialisé en droit du travail à [Ville].
Licenciement, rupture conventionnelle, prud'hommes. Consultation sur rendez-vous.

## Droit du travail : notre accompagnement

[Présentation factuelle du domaine et de l'approche du cabinet]

## Nos interventions en droit du travail

### Pour les salariés
- Contestation d'un licenciement
- Négociation d'une rupture conventionnelle
- Défense devant le Conseil de Prud'hommes
- Harcèlement moral ou sexuel
- Discrimination au travail

### Pour les employeurs
- Rédaction de contrats de travail
- Procédures disciplinaires
- Plans de sauvegarde de l'emploi (PSE)
- Négociation d'accords collectifs

## Questions fréquentes en droit du travail
[Section FAQ → featured snippet]

## Prendre rendez-vous
[CTA sobre et conforme à la déontologie]
```

---

## 5. Schema markup cabinet d'avocats

### LegalService (obligatoire)

```json
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Cabinet Durand & Associés",
  "image": "https://cabinet-durand.fr/logo.jpg",
  "telephone": "+33142345678",
  "email": "contact@cabinet-durand.fr",
  "url": "https://cabinet-durand.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "28 avenue de l'Opéra",
    "addressLocality": "Paris",
    "postalCode": "75002",
    "addressRegion": "Île-de-France",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.8698,
    "longitude": 2.3329
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  ],
  "areaServed": "Paris",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Domaines d'intervention",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Droit du travail"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Droit de la famille"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Droit pénal"}}
    ]
  }
}
```

### Person Schema (pour avocat indépendant)

```json
{
  "@context": "https://schema.org",
  "@type": "Attorney",
  "name": "Maître Sophie Durand",
  "jobTitle": "Avocate au Barreau de Paris",
  "knowsAbout": ["Droit du travail", "Droit de la famille"],
  "alumniOf": "Université Paris I Panthéon-Sorbonne",
  "memberOf": {
    "@type": "Organization",
    "name": "Barreau de Paris"
  }
}
```

### FAQ Schema (très efficace en droit)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Combien coûte une consultation avec un avocat ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le coût d'une consultation varie selon les cabinets et la complexité du dossier. La première consultation est souvent facturée entre 100€ et 300€ HT. L'aide juridictionnelle peut couvrir tout ou partie des honoraires selon vos revenus."
      }
    },
    {
      "@type": "Question",
      "name": "Qu'est-ce que l'aide juridictionnelle ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'aide juridictionnelle (AJ) est une aide de l'État permettant aux personnes aux revenus modestes de bénéficier de l'assistance d'un avocat gratuitement ou avec une participation partielle."
      }
    }
  ]
}
```

---

## 6. Stratégie de contenu juridique

Le contenu éducatif est le levier SEO le plus puissant pour un avocat (pas de publicité directe possible → le contenu fait le travail).

### Types d'articles performants

| Article | Domaine | Intention |
|---|---|---|
| "Licenciement abusif : comment le contester ?" | Travail | Forte |
| "Divorce par consentement mutuel : étapes et délais" | Famille | Forte |
| "Que faire en cas de vice caché lors d'un achat immobilier ?" | Immo | Forte |
| "Rupture conventionnelle : indemnités et procédure" | Travail | Forte |
| "Garde à vue : vos droits expliqués" | Pénal | Urgence |
| "Testament olographe : comment le rédiger ?" | Famille | Informationnelle |

### Structure d'un article juridique SEO

```markdown
# [Question juridique pratique] — [Domaine]

[Introduction : résumé de la réponse en 2-3 phrases]

## Ce que dit la loi
[Base légale accessible, sans jargon excessif]

## Dans quels cas êtes-vous concerné ?
[Exemples concrets]

## Les étapes à suivre
[Guide pratique numéroté]

## Délais et prescription
[Points clés]

## Ce qu'un avocat peut faire pour vous
[Valeur ajoutée — sobre, sans promesse de résultats]

## Besoin d'un accompagnement ?
[CTA sobre vers formulaire de contact]
```

---

## 7. Signaux de confiance (E-E-A-T critique pour le droit)

Google accorde une importance maximale à l'E-E-A-T pour les sites juridiques (YMYL — Your Money Your Life).

- [ ] Nom complet de l'avocat sur chaque article
- [ ] Numéro de barreau mentionné
- [ ] Date de publication et de mise à jour des articles
- [ ] Sources légales citées (Légifrance, Code du travail...)
- [ ] Page "À propos" détaillée avec parcours et formations
- [ ] Certifications et spécialisations affichées
- [ ] Aucune promesse de résultats

---

## 8. Signaux de conversion

- [ ] Formulaire de contact court (nom, email, téléphone, domaine juridique, message)
- [ ] Lien vers agenda en ligne (Calendly, Doctolib Avocat...)
- [ ] Numéro de téléphone cliquable
- [ ] Mention de la confidentialité des échanges
- [ ] Mention de l'aide juridictionnelle si applicable
- [ ] Consultation par téléphone ou visio proposée
- [ ] Délai de réponse indiqué ("réponse sous 24h ouvrées")

---

## 9. Checklist avant mise en ligne

**Déontologie :**
- [ ] Aucune promesse de résultats
- [ ] Aucune publicité comparative
- [ ] Mention du barreau d'inscription
- [ ] Mentions légales complètes (avocat = professionnel réglementé)

**Technique :**
- [ ] Schema LegalService validé
- [ ] Google Business Profile créé (catégorie : Cabinet d'avocats)
- [ ] Sitemap soumis à Search Console
- [ ] Pages HTTPS, pas de contenu dupliqué

**Contenu :**
- [ ] Page d'accueil avec domaines clairement listés
- [ ] Une page par domaine d'intervention
- [ ] Page "L'équipe" ou "À propos" complète
- [ ] Page "Honoraires" (transparence sans accroche tarifaire)
- [ ] Blog juridique avec au moins 3 articles au lancement
- [ ] FAQ avec schema markup
