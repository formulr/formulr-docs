---
title: Workflow et statuts
description: Personnalisez le cycle de vie de vos réponses avec les workflows.
---

# Workflow et statuts

Les workflows vous permettent de définir le parcours de validation de vos réponses.

## Les statuts d'un dossier

Un dossier est soit **ouvert**, soit **fermé**. Quatre statuts existent :

| Statut | Dossier | Description | Couleur |
|--------|---------|-------------|---------|
| **En création** | Ouvert | Le client peut compléter, modifier et signer son dossier | Bleu |
| **À valider** | Fermé | Le client a soumis son dossier et attend votre décision. Il ne peut plus le modifier | Orange |
| **Validé** | Fermé | Le dossier a été approuvé. Le client ne peut plus le modifier | Vert |
| **Refusé** | Fermé | Le dossier a été refusé. Le client ne peut plus le modifier | Rouge |

![Les quatre statuts dans la liste des réponses](/screenshots/responses/statuses.png)

::: info Libellés dans l'interface
Dans les listes, le statut « En création » s'affiche « Création » et le statut « Refusé » s'affiche « Rejeté ».
:::

::: warning À retenir
Pour tous les dossiers fermés, le client ne peut plus modifier ses réponses et accède uniquement à l'écran de fin.
:::

Sur un dossier fermé, un bandeau rappelle la situation, par exemple « Le client a soumis son dossier et est en attente de votre décision » ou « Ce dossier a été validé. Le client ne peut plus y accéder ».

![Dossier validé : bandeau et bouton Rouvrir](/screenshots/responses/validated-dossier.png)

### Passer d'un statut à l'autre

- **Valider ou refuser :** depuis un dossier « À valider », utilisez les actions globales (voir [Valider ou refuser un dossier](/fr/guide/responses#valider-ou-refuser-un-dossier)).
- **Rouvrir un dossier fermé :** « Réviser la réponse » (action globale) remet le dossier « En création » pour que le client puisse le modifier. Le parcours complet, avec la demande de pièces complémentaires, est décrit dans [Les annexes](/fr/guide/annexes).
- **Archiver :** l'archivage est une action sur le dossier, pas un statut.

Le client est notifié par e-mail lorsque l'ensemble du dossier est validé. Les e-mails se personnalisent dans [Compte et collaborateurs](/fr/guide/account).

## Éditeur de workflow

L'éditeur visuel permet de personnaliser le parcours :

### Accéder à l'éditeur

1. Ouvrez votre campagne
2. Cliquez sur **"Modifier workflow"**
3. L'éditeur s'ouvre en plein écran

### Interface

- **Nœuds** : représentent les états/actions
- **Connexions** : liens entre les nœuds
- **Panneau gauche** : bibliothèque d'actions
- **Canvas central** : zone de construction

### Types de nœuds

#### États

- **Début** : point d'entrée du workflow
- **Fin** : fin du parcours
- **État personnalisé** : statut intermédiaire

#### Actions

- **Envoyer un email** : notification automatique
- **Assigner** : changer le responsable
- **Attendre** : délai avant l'action suivante
- **Condition** : branchement selon critères

## Créer un workflow

### Exemple : Validation en deux étapes

```
Début
  ↓
Vérification initiale (État)
  ↓
[Condition: documents complets ?]
  ├── Oui → Validation manager (État)
  │           ↓
  │         [Approuvé ?]
  │           ├── Oui → Validé (Fin)
  │           └── Non → Refusé → Retour utilisateur
  └── Non → Demande de compléments
              ↓
            Retour à l'utilisateur
```

### Construire le workflow

1. Glissez les nœuds depuis le panneau gauche
2. Connectez-les en tirant des lignes
3. Configurez chaque nœud (double-clic)
4. Enregistrez

## Conditions

Les conditions permettent des branchements logiques :

### Types de conditions

- **Valeur d'un champ** : selon la réponse à une question
- **Fichiers joints** : présence/absence de documents
- **Date** : avant/après une échéance
- **Rôle** : selon le responsable actuel

### Configuration

1. Ajoutez un nœud Condition
2. Définissez les critères
3. Créez les branches (Oui/Non ou multiples)

## Actions automatiques

### Envoyer un email

Configurez des notifications automatiques :
- **Destinataire** : utilisateur, responsable, email fixe
- **Template** : choisissez un modèle d'email
- **Délai** : immédiat ou différé

### Assigner

Changez automatiquement le responsable :
- Selon l'étape atteinte
- Selon le type de dossier
- En rotation (équilibrage de charge)

### Webhook

Déclenchez une action externe :
- Appel à votre système
- Intégration CRM
- Notification Slack/Teams

## Bonnes pratiques

1. **Gardez la simplicité** - Un workflow complexe est difficile à maintenir
2. **Documentez** - Nommez clairement vos nœuds
3. **Testez** - Vérifiez chaque chemin possible
4. **Itérez** - Commencez simple, enrichissez progressivement

## Prochaines étapes

- [Notifications](/fr/features/notifications) - Configurer les emails
- [API & Webhooks](/fr/features/api-webhooks) - Intégrations externes
- [Relances automatiques](/fr/features/reminders) - Rappels programmés
