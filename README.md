# Formulr Documentation

Official Formulr documentation, powered by [VitePress](https://vitepress.dev/).

## Languages

- English (default): `/`
- Français: `/fr/`

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview build
pnpm preview
```

## Structure

```
├── .vitepress/
│   └── config.ts       # VitePress configuration + i18n
├── guide/              # User guide (EN)
├── features/           # Features (EN)
├── changelog/          # Changelog (EN)
├── fr/                 # French documentation
│   ├── guide/
│   ├── features/
│   └── changelog/
└── public/             # Static assets
```

## Deployment

Documentation is automatically deployed to Vercel on every push to `main`.

URL: https://docs.formulr.io
