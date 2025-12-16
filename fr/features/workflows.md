---
title: Workflows
description: Automatisez vos processus avec des workflows visuels et des actions conditionnelles.
---

# Workflows

Les workflows permettent d'automatiser des actions en fonction d'événements ou de conditions sur vos réponses.

## Concept

Un workflow est composé de :

1. **Déclencheur** : L'événement qui lance le workflow
2. **Conditions** (optionnel) : Filtres pour cibler certaines réponses
3. **Actions** : Ce qui se passe quand le workflow s'exécute

## Accéder aux workflows

1. Ouvrez votre campagne
2. Cliquez sur l'onglet **Workflow**
3. L'éditeur visuel s'affiche

## Éditeur visuel

### Interface

L'éditeur présente un canvas où vous construisez visuellement :

- **Nœuds** : Représentent déclencheurs, conditions et actions
- **Connexions** : Liens entre les nœuds
- **Panneau latéral** : Configuration du nœud sélectionné

### Navigation

- **Zoom** : Molette ou boutons +/-
- **Déplacement** : Clic droit + glisser
- **Sélection** : Clic sur un nœud
- **Connexion** : Glisser depuis un port vers un autre

## Déclencheurs

### Nouvelle réponse

S'exécute quand une réponse est soumise.

```
Déclencheur : Nouvelle réponse
→ Action : Envoyer notification
```

### Changement de statut

S'exécute quand le statut d'une réponse change.

```
Déclencheur : Statut change vers "Validé"
→ Action : Générer document PDF
```

### Étape complétée

S'exécute quand une étape spécifique est finalisée.

```
Déclencheur : Étape "Informations" complétée
→ Action : Envoyer email de confirmation
```

### Programmé

S'exécute à intervalle régulier.

```
Déclencheur : Tous les jours à 9h
Condition : Réponses en attente depuis > 7 jours
→ Action : Envoyer relance
```

## Conditions

### Condition simple

Filtrez selon une valeur de champ :

```
SI [Montant] > 10000
ALORS → Action grands comptes
SINON → Action standard
```

### Conditions multiples

Combinez avec ET/OU :

```
SI [Type] = "Entreprise"
ET [CA] > 100000
ALORS → Action premium
```

### Condition sur statut

```
SI [Statut] = "En attente"
ET [Créé il y a] > 3 jours
ALORS → Relance automatique
```

## Actions disponibles

### Notifications

| Action | Description |
|--------|-------------|
| **Email** | Envoyer un email personnalisé |
| **Notification in-app** | Alerte dans l'interface admin |
| **Webhook** | Appeler une URL externe |

### Documents

| Action | Description |
|--------|-------------|
| **Générer PDF** | Créer un document depuis un template |
| **Signature électronique** | Envoyer pour signature via Yousign |

### Gestion

| Action | Description |
|--------|-------------|
| **Changer statut** | Modifier le statut de la réponse |
| **Assigner** | Attribuer à un membre de l'équipe |
| **Ajouter tag** | Étiqueter la réponse |

### Intégrations

| Action | Description |
|--------|-------------|
| **Webhook** | POST vers une URL |
| **Zapier** | Déclencher un Zap |

## Exemples de workflows

### Validation en 2 étapes

```
[Nouvelle réponse]
    ↓
[Envoyer email au manager]
    ↓
[Attendre validation]
    ↓
[Si validé] → [Générer contrat] → [Envoyer pour signature]
[Si refusé] → [Notifier le demandeur]
```

### Relance automatique

```
[Chaque jour à 9h]
    ↓
[Réponses incomplètes > 3 jours]
    ↓
[Envoyer email de relance]
    ↓
[Incrémenter compteur de relances]
```

### Processus commercial

```
[Nouvelle réponse]
    ↓
[Si montant > 50000]
    ↓ Oui
[Assigner à Direction commerciale]
[Envoyer alerte prioritaire]
    ↓ Non
[Assigner au commercial de zone]
```

## Configuration des actions

### Email personnalisé

1. Sélectionnez le template d'email
2. Définissez le destinataire :
   - Email du répondant
   - Email fixe
   - Champ de la réponse
3. Personnalisez l'objet et le contenu avec des variables

### Webhook

1. Entrez l'URL de destination
2. Configurez les headers (authentification)
3. Définissez le payload JSON
4. Testez avec une réponse existante

## Historique et logs

### Suivi des exécutions

Pour chaque réponse, consultez :

- Workflows exécutés
- Horodatage
- Résultat (succès/échec)
- Détails des erreurs

### Debugging

En cas d'échec :

1. Consultez le log d'erreur
2. Vérifiez les conditions
3. Testez manuellement l'action
4. Corrigez et réexécutez

## Bonnes pratiques

### 1. Commencez simple

- Un workflow = un objectif
- Évitez les workflows trop complexes
- Divisez en plusieurs workflows si nécessaire

### 2. Testez avant publication

- Utilisez l'environnement de test
- Vérifiez avec différents scénarios
- Simulez les cas limites

### 3. Documentez vos workflows

- Nommez clairement chaque workflow
- Ajoutez des descriptions
- Maintenez une documentation

### 4. Surveillez les exécutions

- Vérifiez régulièrement les logs
- Configurez des alertes en cas d'échec
- Analysez les performances

## Limites

- Maximum 20 workflows par campagne
- Maximum 50 nœuds par workflow
- Délai minimum entre exécutions : 1 minute

## Prochaines étapes

- [Notifications](/fr/features/notifications) - Configuration des emails
- [Relances](/fr/features/reminders) - Automatiser les rappels
- [API & Webhooks](/fr/features/api-webhooks) - Intégrations externes
