import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Formulr',
  description: 'Documentation officielle de Formulr - Créez des formulaires intelligents pour collecter, valider et automatiser vos processus métier.',

  markdown: {
    breaks: false,
  },

  vue: {
    template: {
      compilerOptions: {
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
    hostname: 'https://docs.formulr.io',
  },

  locales: {
    root: {
      label: 'Français',
      lang: 'fr-FR',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/' },
          { text: 'Fonctionnalités', link: '/fonctionnalites/' },
          { text: 'Changelog', link: '/changelog/' },
          {
            text: 'Liens',
            items: [
              { text: 'Site web', link: 'https://formulr.io' },
              { text: 'Application', link: 'https://dashboard.formulr.io' },
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
        footer: {
          message: 'Créez des formulaires intelligents.',
          copyright: '© 2024 Formulr. Tous droits réservés.',
        },
        search: {
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
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/guide/' },
          { text: 'Features', link: '/en/features/' },
          { text: 'Changelog', link: '/en/changelog/' },
          {
            text: 'Links',
            items: [
              { text: 'Website', link: 'https://formulr.io' },
              { text: 'Application', link: 'https://dashboard.formulr.io' },
            ],
          },
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Introduction',
              items: [
                { text: 'What is Formulr?', link: '/en/guide/' },
                { text: 'Quick Start', link: '/en/guide/quick-start' },
              ],
            },
            {
              text: 'Create a Campaign',
              items: [
                { text: 'New Campaign', link: '/en/guide/create-campaign' },
                { text: 'Sections and Modules', link: '/en/guide/sections-modules' },
                { text: 'Configuration', link: '/en/guide/configuration' },
                { text: 'Publishing', link: '/en/guide/publishing' },
              ],
            },
            {
              text: 'Manage Responses',
              items: [
                { text: 'Overview', link: '/en/guide/responses' },
                { text: 'Workflow and Statuses', link: '/en/guide/workflow' },
                { text: 'Data Export', link: '/en/guide/export' },
              ],
            },
          ],
          '/en/features/': [
            {
              text: 'Form Editor',
              items: [
                { text: 'Overview', link: '/en/features/' },
                { text: 'Module Types', link: '/en/features/modules' },
                { text: 'Conditional Logic', link: '/en/features/conditional-logic' },
                { text: 'Field Validation', link: '/en/features/validation' },
              ],
            },
            {
              text: 'Documents',
              items: [
                { text: 'PDF Templates', link: '/en/features/pdf-templates' },
                { text: 'Electronic Signature', link: '/en/features/electronic-signature' },
                { text: 'Automatic Generation', link: '/en/features/document-generation' },
              ],
            },
            {
              text: 'Multi-language',
              items: [
                { text: 'Translations', link: '/en/features/translations' },
                { text: 'AI Translation', link: '/en/features/ai-translation' },
              ],
            },
            {
              text: 'Automation',
              items: [
                { text: 'Workflows', link: '/en/features/workflows' },
                { text: 'Notifications', link: '/en/features/notifications' },
                { text: 'Automatic Reminders', link: '/en/features/reminders' },
                { text: 'AI Analysis', link: '/en/features/ai-analysis' },
              ],
            },
            {
              text: 'Integrations',
              items: [
                { text: 'API & Webhooks', link: '/en/features/api-webhooks' },
                { text: 'Yousign', link: '/en/features/yousign' },
                { text: 'Stripe', link: '/en/features/stripe' },
              ],
            },
          ],
          '/en/changelog/': [
            {
              text: 'What\'s New',
              items: [
                { text: 'Overview', link: '/en/changelog/' },
                { text: 'December 2024', link: '/en/changelog/2024-12' },
              ],
            },
          ],
        },
        footer: {
          message: 'Create intelligent forms.',
          copyright: '© 2024 Formulr. All rights reserved.',
        },
        outline: {
          label: 'On this page',
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page',
        },
        lastUpdated: {
          text: 'Last updated',
          formatOptions: {
            dateStyle: 'long',
          },
        },
        returnToTopLabel: 'Back to top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Theme',
      },
    },
  },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Formulr Docs',

    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/formulr-io/' },
    ],

    search: {
      provider: 'local',
    },
  },
})
