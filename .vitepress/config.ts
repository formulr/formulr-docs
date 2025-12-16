import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Formulr',
  description: 'Official Formulr documentation - Create intelligent forms to collect, validate and automate your business processes.',

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
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/' },
          { text: 'Features', link: '/features/' },
          { text: 'Changelog', link: '/changelog/' },
          {
            text: 'Links',
            items: [
              { text: 'Website', link: 'https://formulr.io' },
              { text: 'Application', link: 'https://dashboard.formulr.io' },
            ],
          },
        ],
        sidebar: {
          '/guide/': [
            {
              text: 'Introduction',
              items: [
                { text: 'What is Formulr?', link: '/guide/' },
                { text: 'Quick Start', link: '/guide/quick-start' },
              ],
            },
            {
              text: 'Create a Campaign',
              items: [
                { text: 'New Campaign', link: '/guide/create-campaign' },
                { text: 'Sections and Modules', link: '/guide/sections-modules' },
                { text: 'Configuration', link: '/guide/configuration' },
                { text: 'Publishing', link: '/guide/publishing' },
              ],
            },
            {
              text: 'Manage Responses',
              items: [
                { text: 'Overview', link: '/guide/responses' },
                { text: 'Workflow and Statuses', link: '/guide/workflow' },
                { text: 'Data Export', link: '/guide/export' },
              ],
            },
          ],
          '/features/': [
            {
              text: 'Form Editor',
              items: [
                { text: 'Overview', link: '/features/' },
                { text: 'Module Types', link: '/features/modules' },
                { text: 'Conditional Logic', link: '/features/conditional-logic' },
                { text: 'Field Validation', link: '/features/validation' },
              ],
            },
            {
              text: 'Documents',
              items: [
                { text: 'PDF Templates', link: '/features/pdf-templates' },
                { text: 'Electronic Signature', link: '/features/electronic-signature' },
                { text: 'Automatic Generation', link: '/features/document-generation' },
              ],
            },
            {
              text: 'Multi-language',
              items: [
                { text: 'Translations', link: '/features/translations' },
                { text: 'AI Translation', link: '/features/ai-translation' },
              ],
            },
            {
              text: 'Automation',
              items: [
                { text: 'Workflows', link: '/features/workflows' },
                { text: 'Notifications', link: '/features/notifications' },
                { text: 'Automatic Reminders', link: '/features/reminders' },
                { text: 'AI Analysis', link: '/features/ai-analysis' },
              ],
            },
            {
              text: 'Integrations',
              items: [
                { text: 'API & Webhooks', link: '/features/api-webhooks' },
                { text: 'Yousign', link: '/features/yousign' },
                { text: 'Stripe', link: '/features/stripe' },
              ],
            },
          ],
          '/changelog/': [
            {
              text: 'What\'s New',
              items: [
                { text: 'Overview', link: '/changelog/' },
                { text: 'December 2024', link: '/changelog/2024-12' },
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
    fr: {
      label: 'Français',
      lang: 'fr-FR',
      link: '/fr/',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/fr/guide/' },
          { text: 'Fonctionnalités', link: '/fr/features/' },
          { text: 'Changelog', link: '/fr/changelog/' },
          {
            text: 'Liens',
            items: [
              { text: 'Site web', link: 'https://formulr.io' },
              { text: 'Application', link: 'https://dashboard.formulr.io' },
            ],
          },
        ],
        sidebar: {
          '/fr/guide/': [
            {
              text: 'Introduction',
              items: [
                { text: 'Qu\'est-ce que Formulr ?', link: '/fr/guide/' },
                { text: 'Démarrage rapide', link: '/fr/guide/quick-start' },
              ],
            },
            {
              text: 'Créer une campagne',
              items: [
                { text: 'Nouvelle campagne', link: '/fr/guide/create-campaign' },
                { text: 'Sections et modules', link: '/fr/guide/sections-modules' },
                { text: 'Configuration', link: '/fr/guide/configuration' },
                { text: 'Publication', link: '/fr/guide/publishing' },
              ],
            },
            {
              text: 'Gérer les réponses',
              items: [
                { text: 'Vue d\'ensemble', link: '/fr/guide/responses' },
                { text: 'Workflow et statuts', link: '/fr/guide/workflow' },
                { text: 'Export des données', link: '/fr/guide/export' },
              ],
            },
          ],
          '/fr/features/': [
            {
              text: 'Éditeur de formulaires',
              items: [
                { text: 'Vue d\'ensemble', link: '/fr/features/' },
                { text: 'Types de modules', link: '/fr/features/modules' },
                { text: 'Logique conditionnelle', link: '/fr/features/conditional-logic' },
                { text: 'Validation des champs', link: '/fr/features/validation' },
              ],
            },
            {
              text: 'Documents',
              items: [
                { text: 'Templates PDF', link: '/fr/features/pdf-templates' },
                { text: 'Signature électronique', link: '/fr/features/electronic-signature' },
                { text: 'Génération automatique', link: '/fr/features/document-generation' },
              ],
            },
            {
              text: 'Multi-langue',
              items: [
                { text: 'Traductions', link: '/fr/features/translations' },
                { text: 'Traduction IA', link: '/fr/features/ai-translation' },
              ],
            },
            {
              text: 'Automatisation',
              items: [
                { text: 'Workflows', link: '/fr/features/workflows' },
                { text: 'Notifications', link: '/fr/features/notifications' },
                { text: 'Relances automatiques', link: '/fr/features/reminders' },
                { text: 'Analyse IA', link: '/fr/features/ai-analysis' },
              ],
            },
            {
              text: 'Intégrations',
              items: [
                { text: 'API & Webhooks', link: '/fr/features/api-webhooks' },
                { text: 'Yousign', link: '/fr/features/yousign' },
                { text: 'Stripe', link: '/fr/features/stripe' },
              ],
            },
          ],
          '/fr/changelog/': [
            {
              text: 'Nouveautés',
              items: [
                { text: 'Vue d\'ensemble', link: '/fr/changelog/' },
                { text: 'Décembre 2024', link: '/fr/changelog/2024-12' },
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
