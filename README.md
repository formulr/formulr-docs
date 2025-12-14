# Formulr Documentation

Documentation officielle de Formulr, propulsée par [VitePress](https://vitepress.dev/).

## Langues

- Français (par défaut) : `/`
- English : `/en/`

## Développement

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm run docs:dev

# Build pour la production
pnpm run docs:build

# Prévisualiser le build
pnpm run docs:preview
```

## Structure

```
├── .vitepress/
│   └── config.ts       # Configuration VitePress + i18n
├── guide/              # Guide utilisateur (FR)
├── fonctionnalites/    # Fonctionnalités (FR)
├── changelog/          # Changelog (FR)
├── en/                 # Documentation anglaise
│   ├── guide/
│   ├── features/
│   └── changelog/
└── public/             # Assets statiques
```

## Déploiement

La documentation est automatiquement déployée sur Vercel à chaque push sur `main`.

URL : https://docs.formulr.io
