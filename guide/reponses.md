---
title: Gérer les réponses
description: Visualisez, validez et traitez les réponses de vos campagnes.
---

# Gérer les réponses

L'onglet **Réponses** de votre campagne centralise toutes les soumissions reçues.

## Vue d'ensemble

La liste des réponses affiche :

| Colonne | Description |
|---------|-------------|
| **Répondant** | Nom ou email de l'utilisateur |
| **Statut** | État actuel de la réponse |
| **Date** | Date de création ou dernière activité |
| **Progression** | Étapes complétées |
| **Responsable** | Collaborateur assigné |

## Filtres et recherche

### Recherche

Utilisez la barre de recherche pour trouver une réponse :
- Par nom
- Par email
- Par contenu

### Filtres par statut

Filtrez les réponses selon leur état :
- **En cours** : l'utilisateur n'a pas terminé
- **Complété** : toutes les étapes sont remplies
- **Validé** : approuvé par votre équipe
- **Refusé** : non conforme, à corriger

## Détail d'une réponse

Cliquez sur une réponse pour voir le détail :

### En-tête

- Informations du répondant
- Statut actuel avec actions rapides
- Date de création et dernière modification

### Contenu

Vue complète des données saisies :
- Organisées par section
- Fichiers uploadés avec aperçu
- Signatures capturées

### Actions

- **Valider l'étape** : approuver l'étape en cours
- **Refuser** : demander des corrections
- **Archiver** : classer la réponse

### Panneau latéral

Informations complémentaires :
- Historique des actions
- Notes internes
- Documents générés
- Résumé IA (si configuré)

## Statuts et workflow

### Cycle de vie d'une réponse

```
Créée → En cours → Complétée → Validée
                       ↓
                   Refusée → En cours (corrections)
```

### Changer le statut

1. Ouvrez le détail de la réponse
2. Cliquez sur le bouton d'action correspondant
3. Ajoutez un commentaire si nécessaire

::: tip Notifications
L'utilisateur est notifié automatiquement des changements de statut.
:::

## Actions en masse

Depuis la liste des réponses :

1. Sélectionnez plusieurs réponses (cases à cocher)
2. Choisissez une action dans le menu
3. Confirmez

Actions disponibles :
- Exporter en CSV/Excel
- Archiver
- Assigner un responsable

## Génération de documents

Pour chaque réponse, vous pouvez générer des documents PDF :

1. Ouvrez le détail de la réponse
2. Cliquez sur **Générer un document**
3. Sélectionnez le template
4. Le PDF est créé avec les données de la réponse

[En savoir plus sur les templates →](/fonctionnalites/templates-pdf)

## Signature électronique

Si votre template contient des zones de signature :

1. Générez le document
2. Lancez la procédure de signature
3. Suivez l'avancement dans le panneau

[En savoir plus sur la signature →](/fonctionnalites/signature-electronique)

## Export des données

### Export individuel

Dans le détail d'une réponse :
- Téléchargez les fichiers joints
- Générez un PDF récapitulatif

### Export en masse

Depuis la liste des réponses :
1. Sélectionnez les réponses ou "Tout sélectionner"
2. Cliquez sur **Exporter**
3. Choisissez le format (CSV, Excel)

[En savoir plus sur l'export →](/guide/export)

## Prochaines étapes

- [Workflow et statuts](/guide/workflow) - Personnaliser le cycle de vie
- [Export des données](/guide/export) - Récupérer vos données
- [Templates PDF](/fonctionnalites/templates-pdf) - Générer des documents
