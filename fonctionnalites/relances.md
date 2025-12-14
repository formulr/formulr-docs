---
title: Relances automatiques
description: Configurez des rappels automatiques pour les formulaires incomplets ou en attente.
---

# Relances automatiques

Les relances permettent de récupérer les réponses abandonnées et d'accélérer le traitement des dossiers en attente.

## Principe

Formulr envoie automatiquement des rappels aux utilisateurs qui :

- N'ont pas terminé leur formulaire
- Ont une réponse en attente d'action
- Doivent fournir des compléments

## Types de relances

### Formulaires incomplets

Pour les utilisateurs ayant commencé mais non finalisé :

| Paramètre | Description |
|-----------|-------------|
| **Délai** | Temps avant la première relance |
| **Fréquence** | Intervalle entre les relances |
| **Maximum** | Nombre max de relances |

**Exemple** :
- Première relance : 24h après abandon
- Relances suivantes : tous les 3 jours
- Maximum : 3 relances

### Compléments demandés

Quand des informations manquent :

1. Vous demandez des compléments (via le détail de la réponse)
2. L'utilisateur reçoit une notification
3. Des relances automatiques sont envoyées si pas de réponse

### Signatures en attente

Pour les documents non signés :

- Relance automatique après X jours
- Configurable par template de document
- Intégré avec Yousign

## Configuration

### Activer les relances

1. Ouvrez votre campagne
2. **Paramètres** > **Relances**
3. Activez le type de relance souhaité

### Paramètres disponibles

| Option | Description |
|--------|-------------|
| **Activer** | On/Off |
| **Délai initial** | Heures/jours avant première relance |
| **Intervalle** | Temps entre chaque relance |
| **Nombre maximum** | Limite de relances |
| **Horaires** | Plages d'envoi autorisées |
| **Jours** | Exclure week-ends/fériés |

### Horaires d'envoi

Évitez les envois à des heures inappropriées :

- **Heures autorisées** : 9h-19h par défaut
- **Jours autorisés** : Lundi-Vendredi
- **Fuseau horaire** : Basé sur l'utilisateur ou fixe

## Personnaliser les messages

### Template de relance

Chaque type de relance a son template :

```liquid
Bonjour {{ user.firstName }},

Vous avez commencé à remplir le formulaire "{{ campaign.title }}"
mais ne l'avez pas encore finalisé.

Cliquez ci-dessous pour reprendre là où vous en étiez :

<a href="{{ link.continue }}">Reprendre mon formulaire</a>

{{ remaining_fields }} champs restants à compléter.

Cordialement,
L'équipe
```

### Variables spécifiques

```liquid
{{ remaining_fields }}      // Nombre de champs restants
{{ progress_percent }}      // Pourcentage de complétion
{{ last_activity }}         // Dernière activité
{{ relance_number }}        // Numéro de la relance (1, 2, 3...)
{{ days_since_start }}      // Jours depuis le début
```

### Personnalisation avancée

Adaptez le message selon le contexte :

```liquid
{% if relance_number == 1 %}
  Petit rappel : votre formulaire vous attend !
{% elsif relance_number == 2 %}
  N'oubliez pas de finaliser votre demande.
{% else %}
  Dernière chance de compléter votre formulaire.
{% endif %}
```

## Stratégies de relance

### Progressive

Intensité croissante :

1. **J+1** : Rappel amical
2. **J+4** : Rappel avec aide
3. **J+7** : Rappel d'urgence
4. **J+14** : Dernière relance

### Contextuelle

Adaptée au parcours :

- Abandon en début : "Besoin d'aide pour commencer ?"
- Abandon en milieu : "Il ne vous reste que X champs"
- Abandon à la fin : "Vous y êtes presque !"

### Incitative

Avec motivation :

- Rappel des bénéfices
- Date limite si applicable
- Offre d'assistance

## Suivi et statistiques

### Métriques disponibles

| Métrique | Description |
|----------|-------------|
| **Taux de récupération** | % de formulaires complétés après relance |
| **Relances envoyées** | Nombre total d'envois |
| **Délai moyen** | Temps entre relance et complétion |
| **Désabonnements** | Utilisateurs qui se sont désinscrits |

### Tableau de bord

Dans **Statistiques** > **Relances** :

- Évolution des récupérations
- Performance par type de relance
- Meilleurs horaires d'envoi

## Exclusions

### Exclure automatiquement

Certains utilisateurs sont automatiquement exclus :

- Désabonnés des relances
- Email invalide
- Réponse déjà complétée
- Nombre max atteint

### Exclure manuellement

Pour une réponse spécifique :

1. Ouvrez le détail de la réponse
2. **Actions** > **Désactiver les relances**

## Bonnes pratiques

### 1. Dosez la fréquence

- Pas plus d'une relance par semaine
- Maximum 3-4 relances au total
- Respectez les préférences utilisateur

### 2. Apportez de la valeur

Chaque relance doit :
- Rappeler le bénéfice
- Offrir de l'aide
- Faciliter la reprise

### 3. Personnalisez

- Utilisez le prénom
- Mentionnez le contexte
- Adaptez le ton

### 4. Testez et optimisez

- A/B testez les messages
- Analysez les performances
- Ajustez les délais

### 5. Respectez le RGPD

- Lien de désabonnement obligatoire
- Politique de confidentialité accessible
- Suppression après expiration

## Intégration workflows

Pour des scénarios avancés, combinez avec les workflows :

```
[Chaque jour à 10h]
    ↓
[Réponses incomplètes > 48h]
    ↓
[Si VIP = Oui]
    → [Appel téléphonique par commercial]
[Sinon]
    → [Email de relance standard]
```

[En savoir plus sur les workflows →](/fonctionnalites/workflows)

## Prochaines étapes

- [Notifications](/fonctionnalites/notifications) - Configuration des emails
- [Workflows](/fonctionnalites/workflows) - Automatisation avancée
- [Réponses](/guide/reponses) - Gérer les réponses
