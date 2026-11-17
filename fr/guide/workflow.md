---
title: Workflow et statuts
description: Personnalisez le cycle de vie de vos réponses avec les workflows.
---

# Workflow et statuts

Les workflows vous permettent de définir le parcours de validation de vos réponses.

## Les statuts d'un dossier

Chaque dossier porte un statut. Il détermine si le client peut encore modifier ses réponses et quel écran il voit lorsqu'il revient sur son lien.

| Statut (admin) | Comment on y arrive | Ce que voit le client | E-mail au client* |
|----------------|---------------------|-----------------------|-------------------|
| **Création** | Le client a démarré le formulaire, ou l'admin a cliqué « Réviser la réponse », « Réouvrir » ou « Valider l'étape ». | Le formulaire est modifiable. Si des champs ont été refusés, un bandeau rouge en haut liste les sections à corriger. | « Votre dossier nécessite des modifications » (quand l'admin le remet dans ce statut). |
| **À valider** | Le client a soumis l'étape en cours. | Écran de fin « Merci, votre réponse a été enregistrée » (ou l'écran personnalisé), avec le bouton de contact et la messagerie. Dossier en lecture seule. | Aucun. Ce sont les admins qui sont notifiés. |
| **Validé** | L'admin a cliqué « Valider la réponse ». | Écran de fin. Le dossier est clôturé, aucune modification possible. | « Votre dossier a été validé ». |
| **Rejeté** | L'admin a cliqué « Refuser la réponse ». | Écran « Dossier refusé ». Aucune modification possible. | « Votre dossier a été refusé ». |

\* Il s'agit des e-mails automatiques, qui se personnalisent dans les modèles d'e-mail (voir [Compte et collaborateurs](/fr/guide/account)).

![Les quatre statuts dans la liste des réponses](/screenshots/responses/statuses.png)

Le statut **Archivé** existe aussi (action « Archiver », réservée aux utilisateurs ayant le droit de suppression).

Sur un dossier fermé, un bandeau rappelle la situation, par exemple « Le client a soumis son dossier et est en attente de votre décision » ou « Ce dossier a été validé. Le client ne peut plus y accéder ».

![Dossier validé : bandeau et bouton Rouvrir](/screenshots/responses/validated-dossier.png)

### Les actions à faire selon la situation

Toutes les actions se trouvent dans le bouton principal du détail d'un dossier et dans son menu déroulant (droit « modifier les réponses » requis).

| Situation | Objectif | Action admin | Résultat côté client |
|-----------|----------|--------------|----------------------|
| **À valider** : tout est correct (dernière étape ou formulaire à une étape) | Clôturer | « Valider la réponse » puis confirmer | Dossier validé et clôturé |
| **À valider** : il manque une information ou un document est incorrect | Redonner la main au client | 1. Refuser les champs concernés<br>2. « Réviser la réponse » (pour une pièce complémentaire, voir [Les annexes](/fr/guide/annexes)) | Le formulaire redevient modifiable. Le client reçoit un e-mail « Votre dossier nécessite des modifications », contenant un lien pour accéder à son dossier. Un bandeau rouge lui indique les éléments à corriger. |
| **À valider** : la demande est irrecevable | Refuser | « Refuser la réponse » | Écran « Dossier refusé » |
| **Rejeté** : vous souhaitez finalement permettre au client de corriger son dossier | Rouvrir | 1. Refuser le ou les modules à corriger<br>2. « Réviser la réponse » | Le formulaire redevient modifiable. Le client reçoit un e-mail « Votre dossier nécessite des modifications », contenant un lien pour accéder à son dossier. Un bandeau rouge lui indique les éléments à corriger. |
| **Validé** : une modification est nécessaire après validation | Rouvrir | 1. Refuser le ou les modules à corriger<br>2. « Réouvrir » | Le formulaire redevient modifiable. Le client reçoit un e-mail « Votre dossier nécessite des modifications », contenant un lien pour accéder à son dossier. Un bandeau rouge lui indique les éléments à corriger. |
| **Création** : l'admin a déjà tout ce qu'il faut | Valider sans attendre | « Valider la réponse » (possible même si le client n'a pas soumis) | Dossier validé |

Pour un formulaire en plusieurs étapes, voir [Formulaires en plusieurs étapes](/fr/guide/responses#formulaires-en-plusieurs-etapes-faire-avancer-le-client-d-une-etape-a-l-autre).

### La règle à retenir

::: warning À retenir
Le client ne peut modifier son dossier que lorsqu'il est en statut **Création**. Pour lui redonner la main : refuser d'abord le ou les modules à corriger, puis « Réviser la réponse » (ou « Réouvrir » si le dossier est validé).

Refuser un champ ne suffit pas : cela signale l'erreur, mais le dossier reste en lecture seule pour le client tant qu'il n'est pas repassé en Création. Refuser le dossier entier, lui, met fin au parcours.
:::

### Passer d'un statut à l'autre

- **Valider ou refuser :** depuis un dossier « À valider », utilisez les actions du dossier (voir [Valider ou refuser un dossier](/fr/guide/responses#valider-ou-refuser-un-dossier)).
- **Rouvrir un dossier :** « Réviser la réponse » ou « Réouvrir » remet le dossier en « Création » (voir le tableau ci-dessus). Le parcours complet, avec la demande de pièces complémentaires, est décrit dans [Les annexes](/fr/guide/annexes).
- **Faire avancer un dossier à plusieurs étapes :** « Valider l'étape » (voir [Formulaires en plusieurs étapes](/fr/guide/responses#formulaires-en-plusieurs-etapes-faire-avancer-le-client-d-une-etape-a-l-autre)).
- **Archiver :** action « Archiver » du dossier, réservée aux utilisateurs ayant le droit de suppression.

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
