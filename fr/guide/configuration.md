---
title: Configuration
description: Configurez les paramètres avancés de votre campagne Formulr.
---

# Configuration

L'onglet **Paramètres** de votre campagne donne accès à toutes les options de configuration.

## Responsable

Le responsable de campagne est le collaborateur principal :

- Reçoit les notifications par défaut
- Contact affiché pour les utilisateurs
- Peut être modifié à tout moment

Pour assigner un responsable :
1. Cliquez sur le champ **Responsable**
2. Sélectionnez un collaborateur dans la liste
3. Le changement est enregistré automatiquement

## Date butoir

La date butoir définit l'échéance pour compléter le formulaire.

### Pas de date butoir

Aucune limite de temps. Les utilisateurs peuvent répondre quand ils le souhaitent.

### Date fixe

Une date précise identique pour tous :
- Utile pour les campagnes saisonnières
- Tous les utilisateurs ont la même échéance

### Date calculée

L'échéance est calculée individuellement :
- Définissez un nombre de jours
- Le compte à rebours démarre quand l'utilisateur commence
- Ex: "30 jours après le début"

::: tip Exemple
Pour une collecte de documents avec date calculée de 15 jours :
- Marie commence le 1er décembre → échéance le 16 décembre
- Pierre commence le 5 décembre → échéance le 20 décembre
:::

## Relances automatiques

Activez les rappels pour les formulaires non complétés.

### Configuration

1. Cochez **"Activer les rappels automatiques"**
2. Choisissez la fréquence :
   - Une fois par jour
   - Tous les 2 jours
   - Une fois par semaine
   - Toutes les 2 semaines
3. Définissez le nombre maximum de relances

### Fonctionnement

- Les relances sont envoyées automatiquement par email
- Uniquement aux utilisateurs avec des étapes en cours
- S'arrêtent quand le formulaire est complété
- Respectent le nombre maximum défini

## Partage

### Lien de partage

Une fois la campagne publiée, copiez le lien pour le partager :
- Via email
- Sur votre site web
- Dans vos communications

### Invitation par email

Envoyez des invitations directement depuis Formulr :
1. Saisissez les adresses email
2. Appuyez sur Entrée pour valider chaque adresse
3. Cliquez sur Envoyer

Les destinataires reçoivent un email avec le lien direct.

::: warning Attention
Le partage n'est disponible qu'après publication de la campagne.
:::

## Analyse IA

Configurez l'intelligence artificielle pour analyser les réponses.

### Prompt d'analyse

Définissez les instructions pour l'IA :

```
Analyse les documents soumis et fournis :
- Les points clés identifiés
- Des recommandations
- Des alertes si des anomalies sont détectées
```

L'IA utilisera ces instructions pour générer un résumé automatique de chaque réponse.

### Utilisation

- Le résumé IA apparaît dans le détail de chaque réponse
- Aide à traiter rapidement un grand nombre de soumissions
- Ne remplace pas la vérification humaine

## Onglets de la campagne

Depuis l'en-tête de la campagne, accédez aux différentes sections :

| Onglet | Fonction |
|--------|----------|
| **Modifier** | Éditeur de formulaire |
| **Paramètres** | Configuration (cette page) |
| **Réponses** | Liste des soumissions |
| **Documents** | Templates PDF |
| **Traductions** | Versions multilingues |

## Prochaines étapes

- [Publication](/fr/guide/publishing) - Rendre la campagne accessible
- [Gérer les réponses](/fr/guide/responses) - Traiter les soumissions
- [Workflows](/fr/features/workflows) - Automatiser les processus
