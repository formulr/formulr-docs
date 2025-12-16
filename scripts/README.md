# Script de capture de screenshots Formulr

Ce script utilise Playwright pour capturer automatiquement les screenshots de l'application Formulr pour la documentation.

## Installation

```bash
cd scripts
pnpm install
```

## Configuration

Créez un fichier `.env` dans le dossier `scripts` :

```bash
FORMULR_URL=https://dashboard.formulr.io
FORMULR_EMAIL=votre-email@exemple.com
FORMULR_PASSWORD=votre-mot-de-passe
```

**Important:** Ne commitez jamais le fichier `.env` avec vos credentials !

## Utilisation

```bash
cd scripts
pnpm run capture
```

Le script va :
1. Se connecter à Formulr avec vos credentials
2. Naviguer vers les différentes pages
3. Capturer les screenshots
4. Les sauvegarder dans `/public/images/screenshots/`

## Screenshots capturés (test avec 3)

1. **workflow-editor-interface.png** - Éditeur de workflow visuel
2. **conditional-logic-config.png** - Configuration logique conditionnelle
3. **campaign-creation.png** - Création de campagne

## Personnalisation

Pour ajouter de nouveaux screenshots, modifiez le tableau `SCREENSHOTS` dans `capture-screenshots.js`.

Chaque screenshot nécessite :
- `name`: Nom du fichier (sans extension)
- `description`: Description de la capture
- `priority`: Priorité (high, medium, low)
- `actions`: Fonction async qui navigue et prépare la page

## Notes

- Le script s'exécute en mode **non-headless** par défaut pour permettre le debug
- Une pause manuelle est incluse après la connexion pour vérifier l'état
- Les sélecteurs CSS sont à adapter selon l'interface réelle de Formulr
- Résolution: 1920x1080 (modifiable dans CONFIG)
