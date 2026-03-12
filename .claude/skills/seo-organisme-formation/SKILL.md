---
name: SEO Organisme de Formation
description: Spécialiste SEO pour organismes de formation professionnelle. Certification Qualiopi, éligibilité CPF/OPCO, mots-clés par domaine de formation, schema Course/EducationalOrganization. Utiliser pour tout organisme de formation professionnelle.
---

# SEO Organisme de Formation

Guide SEO spécialisé pour les organismes de formation professionnelle continue. Axé sur la certification Qualiopi, l'éligibilité CPF/OPCO, le référencement par thématique de formation, et la conversion en inscriptions.

## 1. Contexte réglementaire — IMPORTANT

- **Qualiopi** : certification obligatoire depuis 2022 pour accéder aux financements publics/mutualisés (CPF, OPCO, Pôle emploi). À afficher obligatoirement sur le site.
- **CPF (Compte Personnel de Formation)** : les formations référencées sur Mon Compte Formation génèrent un fort trafic organique
- **OPCO** : financement via les opérateurs de compétences (ATLAS, OPCO EP, CONSTRUCTYS...)
- **RNCP / RS** : certifications enregistrées au RNCP → valeur SEO et confiance

---

## 2. Intentions de recherche prioritaires

| Intention | Exemple | Action |
|---|---|---|
| Financement | "formation Excel CPF [ville]" | Inscription |
| Domaine | "formation management [ville]" | Devis / Inscription |
| Reconversion | "formation reconversion développeur [ville]" | Info + inscription |
| Entreprise | "formation équipe [compétence] [ville]" | Devis |
| Info | "formation comptable éligible CPF" | Contact |

---

## 3. Mots-clés par domaine

### Bureautique / Digital
```
- formation Excel [ville]
- formation Excel CPF
- formation PowerPoint [ville]
- formation marketing digital [ville]
- formation réseaux sociaux [ville]
- formation Google Ads [ville]
- formation SEO [ville]
```

### Management / RH
```
- formation management [ville]
- formation manager [ville]
- formation leadership [ville]
- formation prise de parole [ville]
- formation RH [ville]
- formation recrutement [ville]
```

### Développement personnel / Soft skills
```
- formation gestion du temps [ville]
- formation communication [ville]
- formation gestion du stress [ville]
- formation assertivité [ville]
```

### Langues
```
- formation anglais professionnel [ville]
- cours anglais CPF [ville]
- TOEIC préparation [ville]
- formation espagnol [ville]
```

### Technique / Métier
```
- formation comptabilité [ville]
- formation paie [ville]
- formation électricité habilitation [ville]
- formation CACES [ville]
- formation sécurité [ville]
```

### Long tail CPF (très fort)
```
- formation [domaine] éligible CPF
- formation [domaine] financement CPF
- formation [domaine] prise en charge OPCO
- formation [domaine] en ligne certifiante
```

---

## 4. Structure des pages

### Page d'accueil
```markdown
# [Nom Organisme] — Formation Professionnelle | Certifié Qualiopi

[Logo Qualiopi bien visible]

[Positionnement : domaines + public cible]

## Nos formations
[Catalogue par domaine avec 3-4 formations phares]

## Financements disponibles
[CPF | OPCO | Plan de développement des compétences | Pôle emploi]

## Pourquoi nous choisir
- Certifié Qualiopi
- [X] stagiaires formés
- Taux de satisfaction : [XX]%

## Prochaines sessions
[Calendrier ou formulaire de demande]
```

### Page formation (très importante — une page par formation)
```markdown
# Formation [Intitulé] — [Ville] | [Nom Organisme]

Meta : Formation [intitulé] à [ville]. Éligible CPF. Durée : [X]h.
Prochaine session : [date]. Certifié Qualiopi.

## Objectifs de la formation
[Ce que le stagiaire saura faire]

## Programme
[Détail des modules — important pour le SEO]

## Public visé / Prérequis

## Modalités
- Durée : [X] heures
- Format : présentiel / distanciel / mixte
- Groupe : [X] personnes maximum

## Financement
- Éligible CPF : [Oui/Non + code formation]
- Prise en charge OPCO possible
- Intra-entreprise sur devis

## Prochaines sessions
[Dates + lieu + bouton inscription]

## Intervenants
[Présentation des formateurs]

## Avis stagiaires
[Témoignages + taux de satisfaction]
```

---

## 5. Schema markup

```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Forma Plus",
  "url": "https://formaplus.fr",
  "telephone": "+33456781234",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lyon",
    "postalCode": "69003",
    "addressCountry": "FR"
  },
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Qualiopi",
    "recognizedBy": {
      "@type": "Organization",
      "name": "Ministère du Travail"
    }
  }
}
```

### Course Schema (par formation)
```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Formation Excel Perfectionnement",
  "description": "Maîtrisez les fonctions avancées d'Excel. Formation éligible CPF.",
  "provider": {
    "@type": "Organization",
    "name": "Forma Plus",
    "url": "https://formaplus.fr"
  },
  "educationalLevel": "Intermédiaire",
  "teaches": "Tableaux croisés dynamiques, macros VBA, formules avancées",
  "timeRequired": "PT14H",
  "offers": {
    "@type": "Offer",
    "price": "890",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock"
  }
}
```

---

## 6. CPF — stratégie SEO spécifique

Les recherches incluant "CPF" ont un fort taux de conversion :
- Page dédiée "Formations éligibles CPF" avec liste complète
- Intégrer le code CPF de chaque formation dans le contenu
- FAQ : "Comment utiliser mon CPF ?", "Reste-t-il du CPF après la réforme ?"
- Lien vers Mon Compte Formation (credibilité)

---

## 7. Stratégie de contenu

| Article | Intention |
|---|---|
| "Comment financer sa formation professionnelle ?" | Forte |
| "CPF : mode d'emploi 2025" | Forte |
| "Formations les plus demandées par les entreprises" | Info |
| "Qualiopi : ce que ça change pour les stagiaires" | Confiance |
| "Bilan de compétences vs formation" | Info |

---

## 8. Signaux de conversion

- [ ] Logo Qualiopi visible dès l'accueil
- [ ] Taux de satisfaction affiché (NPS ou pourcentage)
- [ ] Financement CPF/OPCO clairement expliqué
- [ ] Formulaire de demande simple (nom, formation souhaitée, financement envisagé)
- [ ] Calendrier des prochaines sessions visible
- [ ] Témoignages stagiaires avec métier

---

## 9. Checklist avant mise en ligne

- [ ] Logo et numéro Qualiopi affichés (obligatoire)
- [ ] Schema EducationalOrganization + Course validés
- [ ] Une page par formation (min 500 mots par page)
- [ ] Codes CPF mentionnés pour les formations éligibles
- [ ] Taux de satisfaction issu d'enquêtes QUALIOPI
- [ ] Mentions légales + NDA formations + CGV
- [ ] GBP si ancrage local
