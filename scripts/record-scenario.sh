#!/bin/bash

# Script pour enregistrer un scénario de navigation avec Playwright
# Usage: ./record-scenario.sh

echo "🎥 Enregistrement d'un scénario Playwright"
echo ""
echo "Instructions:"
echo "1. Une fenêtre de navigateur va s'ouvrir"
echo "2. Naviguez manuellement dans Formulr"
echo "3. Le code sera généré automatiquement dans le terminal"
echo "4. Copiez le code généré pour l'intégrer dans capture-screenshots.js"
echo ""
echo "Appuyez sur Entrée pour démarrer..."
read

# Charger les variables d'environnement
source .env 2>/dev/null || true

# Lancer le code generator
npx playwright codegen https://dashboard.formulr.io/login
