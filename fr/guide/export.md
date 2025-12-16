---
title: Export des données
description: Exportez les données de vos campagnes en CSV, Excel ou PDF.
---

# Export des données

Formulr permet d'exporter vos données dans différents formats pour analyse ou archivage.

## Export depuis la liste des réponses

### Sélection des réponses

1. Allez dans l'onglet **Réponses** de votre campagne
2. Cochez les réponses à exporter
   - Ou cliquez sur "Tout sélectionner"
3. Cliquez sur le bouton **Exporter**

### Formats disponibles

| Format | Usage |
|--------|-------|
| **CSV** | Import dans Excel, Google Sheets, bases de données |
| **Excel (.xlsx)** | Fichier Excel natif avec mise en forme |
| **PDF** | Récapitulatif imprimable par réponse |

## Contenu de l'export

### Données incluses

- Informations du répondant (nom, email)
- Date de création et modification
- Statut de la réponse
- Toutes les valeurs saisies par module
- Métadonnées (IP, navigateur, etc.)

### Structure CSV/Excel

Chaque ligne = une réponse
Chaque colonne = un champ du formulaire

```csv
ID,Email,Nom,Prénom,Date,Statut,Question1,Question2,...
abc123,marie@example.com,Dupont,Marie,2024-12-01,Validé,Réponse1,Réponse2,...
```

## Export des fichiers

Les fichiers uploadés ne sont pas inclus directement dans l'export CSV/Excel.

### Télécharger les fichiers

1. Ouvrez le détail d'une réponse
2. Cliquez sur chaque fichier pour le télécharger
3. Ou utilisez le bouton "Télécharger tous les fichiers"

### Export en masse des fichiers

Pour un grand nombre de réponses :
1. Contactez le support
2. Un export ZIP peut être préparé

## Export via API

Pour des exports automatisés, utilisez l'API :

```bash
GET /api/v1/campaigns/{id}/responses?format=csv
```

[Documentation API →](/fr/features/api-webhooks)

## Planification d'exports

::: info Bientôt disponible
Les exports planifiés (quotidien, hebdomadaire) seront disponibles prochainement.
:::

## Bonnes pratiques

1. **Exportez régulièrement** - Pour sauvegarder vos données
2. **Utilisez les filtres** - Exportez par période ou statut
3. **Archivez les exports** - Conservez un historique
4. **Respectez le RGPD** - Sécurisez les données personnelles

## Prochaines étapes

- [API & Webhooks](/fr/features/api-webhooks) - Automatiser les exports
- [Templates PDF](/fr/features/pdf-templates) - Documents personnalisés
