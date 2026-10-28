---
title: Connecteur Google Drive
description: Connectez votre Google Drive pour créer et compléter vos documents de travail directement depuis vos réponses.
---

# Connecteur Google Drive

Le connecteur Google Drive vous permet de créer des documents de travail (tableurs, documents texte) **directement depuis une réponse**, à partir de vos propres modèles, et de les compléter dans Google. Les fichiers restent dans **votre** Google Drive : Formulr ne fait que les créer et garder le lien avec la réponse.

Pratique dès que votre équipe doit produire, pour chaque réponse reçue, un ou plusieurs documents internes à partir d'une trame type (fiche de suivi, tableau de calcul, compte rendu...).

::: info Fonctionnalité sur demande
Le connecteur est activé par l'équipe Formulr, société par société. S'il n'apparaît pas dans vos paramètres, faites-en la demande via votre accès **Support**.
:::

## Avant de commencer

- Un compte **Google Workspace** (les comptes Gmail personnels fonctionnent, mais sans Drive partagé).
- Un **Drive partagé** où ranger les documents : les fichiers appartiennent alors à votre organisation, et non à une personne. Si le salarié qui a connecté le compte quitte l'entreprise, les documents restent.
- Le **compte Google à connecter**. Nous conseillons un **compte dédié** de la société (par exemple `formulr@votre-societe.com`) plutôt que le compte personnel d'un collaborateur.

::: warning Rôle du compte connecté
Le rôle du compte connecté sur le Drive partagé détermine ce que Formulr peut faire :

| Rôle Google | Créer et modifier | Supprimer un document |
|-------------|-------------------|-----------------------|
| **Gestionnaire** | oui | **supprimé définitivement** |
| **Gestionnaire de contenu** | oui | **mis à la corbeille** (vidée par Google au bout de 30 jours) |
| Contributeur ou moins | non | non |

Pour une suppression définitive immédiate, le compte connecté doit être **Gestionnaire** du Drive partagé.
:::

## 1. Connecter votre Google Drive

1. **Paramètres** > **Google Drive**.
2. Cliquez sur **Connecter Google Drive** et autorisez Formulr avec le compte choisi.
3. Cliquez sur **Choisir un dossier** pour désigner le **dossier de destination**.
   - C'est le dossier racine du connecteur. Pour **chaque réponse**, Formulr y crée automatiquement un sous-dossier dédié, dans lequel sont rangés les documents créés pour cette réponse. Vous n'avez donc à choisir ce dossier qu'**une seule fois**.
   - La fenêtre Google n'affiche **que des dossiers**, c'est normal. Cliquez **une fois** sur le dossier voulu, puis sur **Sélectionner** (sans l'ouvrir).
   - L'onglet **Drive partagés** liste vos Drives partagés ; l'onglet **Mon Drive** votre espace personnel.

Une fois connecté, l'écran affiche le compte, le dossier de destination, et plus bas votre bibliothèque de modèles.

![Paramètres Google Drive : connexion et bibliothèque de modèles](/screenshots/google-drive-parametres.png)

## 2. Préparer vos modèles

Les modèles sont des fichiers **qui vivent dans votre Google Drive** (Google Docs, Google Sheets, Word ou Excel). Formulr en garde une référence et en fait une copie à chaque création de document.

Dans **Paramètres** > **Google Drive**, partie **Modèles de documents** :

1. Cliquez sur **Ajouter un modèle**.
2. Donnez-lui un **nom** (celui que verront vos équipes).
3. Cliquez sur **Choisir dans Google Drive** et sélectionnez le fichier modèle.
4. Enregistrez.

Vous pouvez renommer, retirer ou réordonner les modèles. **Retirer un modèle** le retire de toutes les campagnes, mais **ne supprime pas** le fichier dans votre Drive.

::: tip Un modèle corrigé profite aux prochains documents
Comme chaque document est une copie du modèle, si vous corrigez le modèle dans votre Drive, les documents créés ensuite partent de la version à jour.
:::

## 3. Configurer une campagne

Dans les **paramètres d'une campagne**, partie **Google Drive** :

- **Activez** Google Drive pour la campagne.
- **Nom des dossiers** : choisissez comment nommer le sous-dossier créé pour chaque réponse. Le plus simple est de cliquer sur le bouton **Variables** pour insérer les champs disponibles (nom, prénom, nom de la campagne, date...) et d'ajouter du texte libre entre eux. Un aperçu montre le résultat. Les variables s'écrivent en Liquid ; voici des exemples que vous pouvez copier-coller :

  | À saisir dans le champ | Dossier obtenu |
  |------------------------|----------------|
  | <code v-pre>{{ campaignResponse.user.lastName }} {{ campaignResponse.user.firstName }}</code> | `Dupont Jean` |
  | <code v-pre>{{ campaignResponse.user.lastName }} - {{ campaignResponse.campaign.name }}</code> | `Dupont - Dossier de candidature` |
  | <code v-pre>{{ date.now }} / {{ campaignResponse.user.lastName }}</code> | `2026-09-11 / Dupont` |

  Le caractère `/` crée un niveau de sous-dossier : dans le dernier exemple, un dossier par date, puis un dossier par client à l'intérieur. Si vous laissez le champ vide, la référence de la réponse est utilisée.

- **Modèles proposés** : **Tous les modèles** de la société, ou **une sélection** parmi votre bibliothèque.

![Réglages Google Drive d'une campagne : activation, nom des dossiers et modèles proposés](/screenshots/google-drive-campagne.png)

## 4. Au quotidien, sur une réponse

Sur la fiche d'une réponse, un bloc **Google Drive** (visible des administrateurs uniquement) permet de :

- **Créer un document** : à partir d'un modèle de la campagne, ou vierge (tableur ou document texte). Vous le nommez, il est créé dans le dossier de la réponse.
- **Ouvrir dans Drive** : le document s'ouvre dans l'éditeur Google (nouvel onglet). Vous le complétez, l'enregistrement est automatique.
- **Renommer** ou **Supprimer** un document.

Chaque réponse a son propre dossier dans votre Drive, nommé selon le réglage de la campagne.

## Bon à savoir

- **Seuls les documents créés par Formulr** apparaissent dans la liste. Un fichier que vous ajoutez à la main dans le dossier Drive n'y figurera pas (il reste visible dans Drive, via **Ouvrir le dossier**).
- **L'édition se fait dans Google**, dans un nouvel onglet : Google n'autorise pas son éditeur à l'intérieur d'une autre application.
- **Les droits d'accès aux fichiers** se gèrent dans votre Drive (membres du Drive partagé), pas dans Formulr.
- **La confidentialité** : les fichiers restent dans votre Google Drive. Formulr n'y accède qu'aux documents qu'il a lui-même créés.
