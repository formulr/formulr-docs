---
title: Créer une campagne
description: Apprenez à créer une nouvelle campagne dans Formulr.
---

# Créer une campagne

Une campagne est le conteneur principal de votre formulaire. Elle regroupe toutes les étapes, sections et modules qui composent votre processus de collecte.

## Nouvelle campagne

1. Depuis le tableau de bord, cliquez sur **"Nouvelle campagne"**
2. Saisissez le nom de votre campagne
   - Ce nom est visible uniquement par votre équipe
   - Choisissez un nom explicite (ex: "Onboarding Client 2024")
3. Vous êtes redirigé vers l'éditeur

## Écran d'accueil

L'écran d'accueil est la première chose que vos utilisateurs verront :

| Champ | Description |
|-------|-------------|
| **Titre** | Titre affiché aux utilisateurs |
| **Sous-titre** | Texte secondaire (optionnel) |
| **Description** | Texte explicatif plus long |

::: tip Conseil
Un bon écran d'accueil explique clairement ce qui est attendu et rassure l'utilisateur sur le temps nécessaire.
:::

## Paramètres rapides

En haut de l'éditeur, vous avez accès aux paramètres rapides :

### Responsable

Assignez un collaborateur responsable de cette campagne :
- Il recevra les notifications
- Il sera le contact par défaut
- Par défaut, le créateur est assigné

### Date butoir

Configurez l'échéance pour les réponses :

- **Pas de date butoir** : aucune limite
- **Date fixe** : une date précise pour tous
- **Date calculée** : X jours après le début de la réponse

## Structure de la campagne

Une campagne est organisée en 3 niveaux :

```
Campagne
├── Étape 1
│   ├── Section A
│   │   ├── Module 1
│   │   └── Module 2
│   └── Section B
│       └── Module 3
└── Étape 2
    └── Section C
        └── Module 4
```

### Étapes

Les étapes divisent votre formulaire en pages distinctes :
- L'utilisateur progresse d'étape en étape
- Chaque étape peut avoir sa propre logique de validation
- Utile pour les formulaires longs

### Sections

Les sections regroupent les champs par thème :
- Organisation visuelle claire
- Peuvent être collapsibles
- Facilitent la compréhension

### Modules

Les modules sont les champs de saisie :
- Plus de 15 types disponibles
- Configurables individuellement
- [Voir tous les types de modules →](/fonctionnalites/modules)

## Sommaire

Le panneau de droite affiche le sommaire de votre campagne :

- Vue d'ensemble des sections et modules
- Réorganisation par glisser-déposer
- Accès rapide à n'importe quelle section

## Enregistrement

Vos modifications sont enregistrées automatiquement. Le statut s'affiche en haut :
- **Brouillon** : non publié, modifications en cours
- **Publié** : accessible aux utilisateurs
- **Modifications non publiées** : des changements attendent d'être publiés

## Prochaines étapes

- [Sections et modules](/guide/sections-modules) - Structurer votre formulaire
- [Configuration](/guide/configuration) - Paramètres avancés
- [Publication](/guide/publication) - Rendre la campagne accessible
