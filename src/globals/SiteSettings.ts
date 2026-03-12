import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Paramètres du site',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      label: 'Nom du site',
      defaultValue: 'Mon Entreprise',
      required: true,
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Accroche courte (sous le logo)',
      defaultValue: 'Votre partenaire de confiance',
    },
    {
      name: 'primaryColor',
      type: 'text',
      label: 'Couleur principale (hex)',
      defaultValue: '#2563eb',
      admin: {
        description: 'Exemple : #2563eb (bleu), #16a34a (vert), #dc2626 (rouge)',
      },
    },
    {
      label: 'Section Héro',
      type: 'collapsible',
      fields: [
        {
          name: 'heroTitle',
          type: 'text',
          label: 'Titre principal',
          defaultValue: 'Bienvenue sur notre site',
        },
        {
          name: 'heroSubtitle',
          type: 'textarea',
          label: 'Sous-titre',
          defaultValue:
            'Nous vous accompagnons dans tous vos projets avec expertise et passion. Contactez-nous pour en savoir plus.',
        },
        {
          name: 'heroCTA',
          type: 'text',
          label: "Texte du bouton d'action",
          defaultValue: 'Nous contacter',
        },
      ],
    },
    {
      name: 'services',
      type: 'array',
      label: 'Services',
      minRows: 1,
      maxRows: 6,
      defaultValue: [
        {
          icon: '⚡',
          title: 'Service 1',
          description: 'Décrivez ici votre premier service principal.',
        },
        {
          icon: '🎯',
          title: 'Service 2',
          description: 'Décrivez ici votre deuxième service principal.',
        },
        {
          icon: '💡',
          title: 'Service 3',
          description: 'Décrivez ici votre troisième service principal.',
        },
      ],
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icône (emoji)',
          defaultValue: '✨',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Titre du service',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
        },
      ],
    },
    {
      label: 'Section À propos',
      type: 'collapsible',
      fields: [
        {
          name: 'aboutTitle',
          type: 'text',
          label: 'Titre',
          defaultValue: 'À propos de nous',
        },
        {
          name: 'aboutText',
          type: 'textarea',
          label: 'Texte de présentation',
          defaultValue:
            "Nous sommes une entreprise passionnée par notre métier. Notre équipe dédiée met tout en œuvre pour vous offrir un service de qualité et vous accompagner dans la réalisation de vos projets. Forts de notre expérience, nous avons su bâtir une relation de confiance avec nos clients.",
        },
      ],
    },
    {
      label: 'Contact',
      type: 'collapsible',
      fields: [
        {
          name: 'contactEmail',
          type: 'email',
          label: 'Email',
        },
        {
          name: 'contactPhone',
          type: 'text',
          label: 'Téléphone',
        },
        {
          name: 'contactAddress',
          type: 'text',
          label: 'Adresse',
        },
      ],
    },
  ],
}
