import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Formulr',
  description: 'Documentation officielle de Formulr - Créez des formulaires intelligents pour collecter, valider et automatiser vos processus métier.',
  lang: 'fr-FR',

  markdown: {
    // Désactive l'interprétation Vue dans les blocs de code
    breaks: false,
  },

  vue: {
    template: {
      compilerOptions: {
        // Ignore les {{ }} qui ne sont pas des expressions Vue valides
        isCustomElement: (tag) => tag.includes('{{'),
      },
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#0E245D' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Formulr Documentation' }],
    ['meta', { property: 'og:image', content: '/og-image.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],

  sitemap: {
    hostname: 'https://docs.formulr.fr',
  },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Formulr Docs',

    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Fonctionnalités', link: '/fonctionnalites/' },
      { text: 'Changelog', link: '/changelog/' },
      {
        text: 'Liens',
        items: [
          { text: 'Site web', link: 'https://formulr.fr' },
          { text: 'App Admin', link: 'https://app.formulr.fr' },
        ],
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Qu\'est-ce que Formulr ?', link: '/guide/' },
            { text: 'Démarrage rapide', link: '/guide/demarrage-rapide' },
          ],
        },
        {
          text: 'Créer une campagne',
          items: [
            { text: 'Nouvelle campagne', link: '/guide/creer-campagne' },
            { text: 'Sections et modules', link: '/guide/sections-modules' },
            { text: 'Configuration', link: '/guide/configuration' },
            { text: 'Publication', link: '/guide/publication' },
          ],
        },
        {
          text: 'Gérer les réponses',
          items: [
            { text: 'Vue d\'ensemble', link: '/guide/reponses' },
            { text: 'Workflow et statuts', link: '/guide/workflow' },
            { text: 'Export des données', link: '/guide/export' },
          ],
        },
      ],
      '/fonctionnalites/': [
        {
          text: 'Éditeur de formulaires',
          items: [
            { text: 'Vue d\'ensemble', link: '/fonctionnalites/' },
            { text: 'Types de modules', link: '/fonctionnalites/modules' },
            { text: 'Logique conditionnelle', link: '/fonctionnalites/logique-conditionnelle' },
            { text: 'Validation des champs', link: '/fonctionnalites/validation' },
          ],
        },
        {
          text: 'Documents',
          items: [
            { text: 'Templates PDF', link: '/fonctionnalites/templates-pdf' },
            { text: 'Signature électronique', link: '/fonctionnalites/signature-electronique' },
            { text: 'Génération automatique', link: '/fonctionnalites/generation-documents' },
          ],
        },
        {
          text: 'Multi-langue',
          items: [
            { text: 'Traductions', link: '/fonctionnalites/traductions' },
            { text: 'Traduction IA', link: '/fonctionnalites/traduction-ia' },
          ],
        },
        {
          text: 'Automatisation',
          items: [
            { text: 'Workflows', link: '/fonctionnalites/workflows' },
            { text: 'Notifications', link: '/fonctionnalites/notifications' },
            { text: 'Relances automatiques', link: '/fonctionnalites/relances' },
            { text: 'Analyse IA', link: '/fonctionnalites/analyse-ia' },
          ],
        },
        {
          text: 'Intégrations',
          items: [
            { text: 'API & Webhooks', link: '/fonctionnalites/api-webhooks' },
            { text: 'Yousign', link: '/fonctionnalites/yousign' },
            { text: 'Stripe', link: '/fonctionnalites/stripe' },
          ],
        },
      ],
      '/changelog/': [
        {
          text: 'Nouveautés',
          items: [
            { text: 'Vue d\'ensemble', link: '/changelog/' },
            { text: 'Décembre 2024', link: '/changelog/2024-12' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/formulr/' },
    ],

    footer: {
      message: 'Créez des formulaires intelligents.',
      copyright: '© 2024 Formulr. Tous droits réservés.',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Rechercher',
            buttonAriaLabel: 'Rechercher',
          },
          modal: {
            noResultsText: 'Aucun résultat pour',
            resetButtonTitle: 'Effacer la recherche',
            footer: {
              selectText: 'pour sélectionner',
              navigateText: 'pour naviguer',
              closeText: 'pour fermer',
            },
          },
        },
      },
    },

    outline: {
      label: 'Sur cette page',
    },

    docFooter: {
      prev: 'Page précédente',
      next: 'Page suivante',
    },

    lastUpdated: {
      text: 'Mis à jour le',
      formatOptions: {
        dateStyle: 'long',
      },
    },

    returnToTopLabel: 'Retour en haut',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Thème',
  },
})
