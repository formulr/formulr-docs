---
title: Notifications email
description: Configurez les emails automatiques envoyés aux utilisateurs et à votre équipe.
---

# Notifications email

Formulr envoie des emails automatiques pour tenir informés vos utilisateurs et votre équipe à chaque étape du processus.

## Types de notifications

### Pour les répondants

| Notification | Déclencheur |
|--------------|-------------|
| **Confirmation de soumission** | Réponse envoyée |
| **Accusé de réception** | Réponse reçue par l'équipe |
| **Demande de compléments** | Informations manquantes |
| **Relance** | Formulaire non terminé |
| **Validation** | Réponse acceptée |
| **Refus** | Réponse refusée |
| **Signature demandée** | Document à signer |
| **Signature complète** | Document signé |

### Pour l'équipe

| Notification | Déclencheur |
|--------------|-------------|
| **Nouvelle réponse** | Soumission reçue |
| **Assignation** | Réponse assignée |
| **Rappel de traitement** | Réponse en attente |
| **Résumé quotidien** | Synthèse des activités |

## Configuration globale

### Accéder aux paramètres

1. Allez dans **Paramètres** > **Emails**
2. Configurez les options globales

### Expéditeur

| Paramètre | Description |
|-----------|-------------|
| **Nom d'expéditeur** | Nom affiché (ex: "Équipe Formulr") |
| **Email de réponse** | Adresse pour les réponses |

### Design

- **Logo** : Affiché dans l'en-tête des emails
- **Couleur principale** : Boutons et accents
- **Pied de page** : Mentions légales, liens

## Personnaliser les emails

### Templates disponibles

Chaque type d'email peut être personnalisé :

1. **Paramètres** > **Emails** > **Templates**
2. Sélectionnez le template à modifier
3. Éditez le contenu

### Variables disponibles

Utilisez ces variables dans vos templates :

#### Réponse

```liquid
{{ response.reference }}        // Référence unique
{{ response.status }}           // Statut actuel
{{ response.createdAt }}        // Date de création
{{ response.completedAt }}      // Date de complétion
```

#### Répondant

```liquid
{{ user.firstName }}            // Prénom
{{ user.lastName }}             // Nom
{{ user.email }}                // Email
{{ user.fullName }}             // Nom complet
```

#### Campagne

```liquid
{{ campaign.title }}            // Titre
{{ campaign.description }}      // Description
```

#### Liens

```liquid
{{ link.continue }}             // Reprendre le formulaire
{{ link.view }}                 // Voir la réponse
{{ link.download }}             // Télécharger le PDF
```

### Exemple de template

```html
Bonjour {{ user.firstName }},

Votre demande {{ response.reference }} a bien été reçue.

Notre équipe va l'examiner dans les plus brefs délais.

<a href="{{ link.view }}">Suivre ma demande</a>

Cordialement,
L'équipe {{ campaign.title }}
```

## Notifications par campagne

### Configuration spécifique

Chaque campagne peut avoir ses propres règles :

1. Ouvrez la campagne
2. **Paramètres** > **Notifications**
3. Activez/désactivez chaque type

### Destinataires internes

Définissez qui reçoit les notifications :

- **Propriétaire** : Créateur de la campagne
- **Équipe** : Membres assignés
- **Email spécifique** : Adresse fixe

### Conditions

Envoyez des notifications conditionnelles :

```
SI [Montant] > 10000
ALORS Notifier direction@entreprise.com
```

## Notifications via workflow

Pour des scénarios avancés, utilisez les workflows :

1. Créez un workflow
2. Ajoutez l'action "Envoyer email"
3. Configurez le template personnalisé
4. Définissez les conditions

[En savoir plus sur les workflows →](/fr/features/workflows)

## Historique des envois

### Consulter l'historique

Pour chaque réponse :

1. Ouvrez le détail de la réponse
2. Onglet **Activité**
3. Visualisez tous les emails envoyés

### Informations disponibles

- Date et heure d'envoi
- Destinataire
- Type de notification
- Statut (envoyé, ouvert, cliqué)

## Délivrabilité

### Bonnes pratiques

Pour assurer la réception des emails :

1. **SPF/DKIM** : Configurés automatiquement
2. **Domaine personnalisé** : Recommandé pour les volumes importants
3. **Liste blanche** : Communiquez l'adresse d'expédition

### En cas de problème

Si les emails n'arrivent pas :

1. Vérifiez les spams
2. Consultez l'historique d'envoi
3. Testez avec une autre adresse
4. Contactez le support

## Désabonnement

### Lien de désabonnement

Tous les emails incluent un lien de désabonnement conforme RGPD.

### Gérer les préférences

Les utilisateurs peuvent :

- Se désabonner des relances
- Conserver les notifications importantes
- Gérer leurs préférences

## Limites

- Maximum 1000 emails/jour par campagne
- Taille maximum des pièces jointes : 10 Mo
- Pas d'envoi à des listes de diffusion

## Prochaines étapes

- [Relances](/fr/features/reminders) - Automatiser les rappels
- [Workflows](/fr/features/workflows) - Notifications avancées
- [Templates PDF](/fr/features/pdf-templates) - Documents à joindre
