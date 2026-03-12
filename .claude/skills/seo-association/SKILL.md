---
name: SEO Association
description: Spécialiste SEO pour associations loi 1901. Mots-clés recrutement bénévoles/adhérents, collecte de dons, schema NGO/NonProfit, transparence financière, stratégie de contenu. Utiliser pour toute association ou structure à but non lucratif en France.
---

# SEO Association

Guide SEO spécialisé pour les associations loi 1901 (culturelles, sportives, humanitaires, éducatives, de quartier). Axé sur la visibilité locale/nationale, le recrutement de bénévoles et d'adhérents, et la collecte de dons.

## 1. Spécificités SEO d'une association

- **But non lucratif** → pas de vente directe mais des conversions : adhésion, don, bénévolat
- **Trois types d'audience** : bénéficiaires, donateurs, bénévoles
- **Financement public** (subventions) → site = vitrine pour les financeurs institutionnels
- **Confiance et transparence** sont les premières valeurs à incarner sur le site

---

## 2. Intentions de recherche prioritaires

| Intention | Exemple | Action |
|---|---|---|
| Bénéficiaire | "aide alimentaire [ville]" | Contact / Visite |
| Adhésion | "association [loisir] [ville]" | Adhésion |
| Don | "association aide enfants malades don" | Don en ligne |
| Bénévolat | "devenir bénévole [cause] [ville]" | Formulaire bénévolat |
| Info | "association [cause] comment aider" | Engagement |

---

## 3. Mots-clés par type d'association

### Associations humanitaires / sociales
```
- association aide [cause] [ville]
- association solidarité [ville]
- aide alimentaire [ville]
- banque alimentaire [ville]
- association personnes âgées [ville]
- association handicap [ville]
```

### Associations culturelles / éducatives
```
- association [activité] [ville]
- cours [activité] association [ville]
- atelier [activité] association [ville]
- activités culturelles [ville] association
```

### Associations sportives
```
- club [sport] [ville]
- association sportive [ville]
- cours [sport] débutant [ville]
- équipe [sport] [ville]
```

### Recrutement bénévoles
```
- devenir bénévole [ville]
- bénévolat [cause] [ville]
- mission bénévole [ville]
- volontariat [cause] [ville]
- rejoindre association [ville]
```

### Dons
```
- faire un don [cause]
- soutenir association [nom]
- don déductible impôts [cause]
- association agréée don [ville]
```

---

## 4. Structure des pages

### Page d'accueil
```markdown
# [Nom Association] — [Mission en 1 ligne] | [Ville/Territoire]

[Photo impactante — bénéficiaires ou action terrain]

[Mission claire et sobre]

## Ce que nous faisons
[Actions concrètes avec chiffres clés]

## Comment nous aider
- Faire un don
- Devenir bénévole
- Adhérer

## Notre impact en chiffres
[Personnes aidées, actions menées, bénévoles actifs]

## Actualités
[Dernières nouvelles, événements]
```

### Page "Faire un don"
```markdown
# Faire un Don — [Nom Association]

[Impact concret du don]
Ex : "10 € = 3 repas pour une famille en difficulté"

## Pourquoi nous soutenir ?
[Transparence : où va l'argent]

## Faire un don en ligne
[Widget HelloAsso / Stripe / PayPlug]

## Don et déduction fiscale
[66% de réduction d'impôt pour les particuliers — si éligible]

## Reçu fiscal
[Envoi automatique — préciser]
```

### Page "Devenir bénévole"
```markdown
# Devenir Bénévole — [Nom Association] [Ville]

[Témoignage bénévole existant]

## Nos missions bénévoles
[Liste des missions disponibles avec profils recherchés]

## Ce que vous apportez, ce que vous recevez
[Formation, expérience, réseau, sens]

## Postuler
[Formulaire court : nom, email, disponibilités, intérêts]
```

---

## 5. Schema markup

```json
{
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "Les Restos du Cœur de [Ville]",
  "url": "https://restosducœur-[ville].fr",
  "telephone": "+33456781234",
  "email": "contact@restosducœur-[ville].fr",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "[Ville]",
    "addressCountry": "FR"
  },
  "foundingDate": "1985",
  "nonprofitStatus": "Association loi 1901",
  "description": "Association d'aide alimentaire et d'accompagnement social",
  "areaServed": {"@type": "City", "name": "[Ville]"},
  "sameAs": [
    "https://www.facebook.com/...",
    "https://www.instagram.com/..."
  ]
}
```

---

## 6. HelloAsso — plateforme clé

[HelloAsso](https://www.helloasso.com) est la plateforme de référence pour les associations françaises :
- Collectes de dons, adhésions, billetterie événements
- Zéro commission (modèle contribution volontaire des donateurs)
- Reçus fiscaux automatiques
- Profil HelloAsso = backlink + visibilité supplémentaire

**Profil HelloAsso :**
- Description complète avec mots-clés
- Photos de terrain
- Lien vers le site officiel

---

## 7. Transparence financière (E-E-A-T association)

Les donateurs et financeurs vérifient la transparence avant de soutenir :
- **Rapport d'activité annuel** accessible sur le site (PDF + résumé HTML)
- **Comptes financiers** (obligatoire au-delà de 153 000 € de ressources)
- Membres du bureau/CA identifiés
- Label **Don en Confiance** ou **IDEAS** si applicable
- Mention des agréments (utilité publique, jeunesse et sport, etc.)

---

## 8. Stratégie de contenu

| Contenu | Objectif |
|---|---|
| Stories de bénéficiaires (avec accord) | Don + engagement |
| Bilan annuel d'impact | Confiance |
| Témoignages bénévoles | Recrutement bénévoles |
| Actualités terrain | Engagement communauté |
| "Comment aider [cause] à [ville] ?" | Trafic organique |

---

## 9. Réseaux sociaux pour associations

- **Facebook** : toujours pertinent pour 40-60 ans (gros des donateurs)
- **Instagram** : photos terrain, stories humaines
- **LinkedIn** : partenariats entreprises, mécénat

---

## 10. Checklist avant mise en ligne

- [ ] Schema NGO validé
- [ ] Page "Faire un don" avec HelloAsso ou système similaire
- [ ] Mention déductibilité fiscale si applicable (66% particuliers, 60% entreprises)
- [ ] Rapport d'activité accessible
- [ ] Page "Devenir bénévole" avec formulaire
- [ ] Numéro de déclaration en préfecture visible
- [ ] Statuts disponibles en téléchargement
- [ ] GBP si ancrage local
