---
title: Compte et collaborateurs
description: Paramétrer votre compte, gérer vos collaborateurs et leurs rôles, personnaliser les e-mails automatiques.
---

# Compte et collaborateurs

Cette page présente les **paramètres du compte** (informations, abonnement, consommation), la **gestion des collaborateurs** et de leurs rôles, ainsi que la personnalisation des **e-mails automatiques** envoyés à vos clients.

::: warning Prérequis
Connectez-vous avec un compte disposant des droits d'administration. Les accès dépendent du rôle de chaque collaborateur (voir [Rôles et permissions](#roles-et-permissions)).
:::

## Accéder aux paramètres du compte

1. **Se connecter :** ouvrez la plateforme avec un compte administrateur.
2. **Ouvrir les paramètres :** cliquez sur la roue crantée en bas du menu de gauche.

![Accès aux paramètres du compte depuis le menu de gauche](/screenshots/account/open-settings.png)

Le menu de gauche des paramètres regroupe notamment « Général », « Collaborateurs », « Templates d'emails », « Webhooks » ou encore « Signature électronique ».

## Paramètres généraux

L'onglet « Général » rassemble :

- **Informations de l'entreprise :** nom de l'organisation, adresse de facturation, numéro de TVA.
- **Votre plan :** l'abonnement en cours et son état. Le bouton « Gérer la facturation » donne accès à vos factures.
- **Consommation mensuelle :** nombre de réponses clients par rapport à la limite mensuelle, et signatures électroniques utilisées.
- **Limites du plan :** nombre de collaborateurs et espace disque utilisé.

![Onglet Général des paramètres du compte](/screenshots/account/settings-general.png)

::: tip Limite de collaborateurs atteinte
Dans « Limites du plan », cliquez sur « Ajouter des sièges » à côté du compteur de collaborateurs pour augmenter leur nombre.
:::

## Gérer les collaborateurs

Ouvrez « Collaborateurs » dans le menu de gauche. L'écran comporte deux onglets, « Membres » et « Rôles ».

![Liste des membres](/screenshots/account/collaborators-members.png)

- **Membres :** la liste des collaborateurs, avec leur rôle et les entreprises auxquelles ils ont accès. Le menu ⋮ de chaque ligne donne accès aux actions sur le membre.
- **Rôles :** la gestion et la consultation des rôles.
- **Recherche et filtres :** retrouvez un collaborateur par son nom, ou filtrez la liste par rôle avec le sélecteur « Tous les rôles ».
- **Créer un compte :** le bouton en haut à droite ajoute un nouveau collaborateur.

## Rôles et permissions

1. **Ouvrir l'onglet « Rôles » :** dans « Collaborateurs », cliquez sur « Rôles ».
2. **Sélectionner un profil :** la liste des rôles s'affiche avec le nombre de membres de chacun. Cliquez sur un rôle pour voir ses autorisations et ses restrictions d'accès, regroupées par domaine (campagnes, réponses, balises, dossiers, paramètres de l'entreprise).

![Détail d'un rôle : autorisations et restrictions](/screenshots/account/roles-detail.png)

Les rôles disponibles sont : « Super Admin », « Admin », « Gestionnaire de campagnes », « Éditeur », « Opérateur », « Lecteur » et « Finance ». Le « Super Admin » dispose d'un accès complet, y compris la facturation et la gestion des membres.

3. **Comparer les rôles :** cliquez sur « Comparer tous les rôles » pour afficher un tableau comparatif des permissions de chaque profil.

![Tableau comparatif des rôles et permissions](/screenshots/account/roles-compare.png)

Extrait des permissions sur les campagnes et les réponses :

| Permission | Super Admin | Admin | Gestionnaire de campagnes | Éditeur | Opérateur | Lecteur | Finance |
|------------|:-----------:|:-----:|:-------------------------:|:-------:|:---------:|:-------:|:-------:|
| Voir les campagnes | Oui | Oui | Oui | Oui | Oui | Oui | Non |
| Créer et dupliquer des campagnes | Oui | Oui | Oui | Non | Non | Non | Non |
| Modifier la configuration et le formulaire | Oui | Oui | Oui | Oui | Non | Non | Non |
| Publier / archiver | Oui | Oui | Oui | Non | Non | Non | Non |
| Supprimer des campagnes | Oui | Oui | Oui | Non | Non | Non | Non |
| Voir les réponses | Oui | Oui | Oui | Oui | Oui | Oui | Non |
| Créer, éditer, valider et rejeter des réponses | Oui | Oui | Oui | Non | Oui | Non | Non |
| Exporter et télécharger les fichiers | Oui | Oui | Oui | Non | Oui | Non | Non |
| Générer et envoyer des documents | Oui | Oui | Oui | Non | Oui | Non | Non |
| Supprimer / archiver des réponses | Oui | Oui | Oui | Non | Non | Non | Non |

::: info
Le tableau complet, avec les autres domaines (balises, dossiers, paramètres de l'entreprise), est disponible dans la fenêtre « Rôles et permissions ». Les rôles s'attribuent par entreprise, depuis la fiche d'un collaborateur.
:::

## Créer un compte collaborateur

1. **Ouvrir le formulaire :** dans « Collaborateurs », cliquez sur « Créer un compte ».
2. **Renseigner les informations :** saisissez le prénom, le nom et l'adresse e-mail du collaborateur.
3. **Choisir un rôle :** sélectionnez dans la liste le rôle correspondant aux droits d'accès souhaités.
4. **Enregistrer :** cliquez sur « Enregistrer » pour créer le compte.

![Formulaire de création d'un compte collaborateur](/screenshots/account/create-account.png)

## Templates d'e-mails du compte

Dans l'onglet « Templates d'emails », retrouvez les e-mails automatiques envoyés à vos clients. Ces modèles sont configurés **au niveau du compte** et s'appliquent par défaut à l'ensemble des dossiers.

Les modèles personnalisables sont : « Réponse approuvée », « Réponse créée », « Modifications nécessaires », « Lien de réponse », « Réponse rejetée », « Rappel de réponse », « Mise à jour de l'étape », « Nouveau commentaire » et « Invitation utilisateur ». Chacun est marqué « Par défaut » tant qu'il n'a pas été personnalisé.

![Liste des templates d'e-mails personnalisables](/screenshots/account/email-templates-list.png)

::: info Adresse d'expédition
L'adresse d'expédition est fixe pour des raisons de délivrabilité : elle n'est pas modifiable.
:::

### Personnaliser un e-mail

1. **Sélectionner l'e-mail :** cliquez sur l'e-mail à modifier, par exemple « Réponse approuvée », puis sur « Personnalisé » (réglage « Layout ») pour remplacer le modèle par défaut.
2. **Modifier le message :** changez l'objet et le contenu de l'e-mail. Les variables disponibles (prénom du client, nom du client, nom de la campagne, lien vers le dossier...) se copient en un clic et permettent de personnaliser le message. Le contenu utilise la syntaxe Liquid.
3. **Vérifier :** contrôlez le résultat dans l'aperçu.
4. **Enregistrer :** cliquez sur « Enregistrer ». Le basculement FR / EN permet de rédiger chaque version linguistique.

![Éditeur d'un template d'e-mail avec variables et aperçu](/screenshots/account/email-template-editor.png)

::: warning Layout « Personnalisé »
Avec le layout « Personnalisé », vous devez fournir un e-mail HTML complet (en-tête, corps, pied de page et styles).
:::

## E-mails automatiques d'une campagne

Chaque campagne peut aussi adapter ses propres e-mails.

1. **Ouvrir les paramètres :** dans la campagne, cliquez sur l'onglet « Paramètres ».
2. **Accéder aux e-mails :** descendez jusqu'à la section « E-mails automatiques », puis cliquez sur « E-mails envoyés aux répondants ».
3. **Ajuster chaque e-mail :** activez ou désactivez chaque e-mail selon vos besoins, ou sélectionnez un modèle pour en personnaliser le contenu. Les changements sont enregistrés immédiatement.

![E-mails automatiques envoyés aux répondants dans les paramètres de la campagne](/screenshots/account/campaign-automatic-emails.png)

Les e-mails proposés sont : « Invitation à la campagne », « Confirmation de création de dossier », « Demande de modifications », « Dossier validé », « Dossier refusé », « Changement d'étape », « Relance automatique », « Nouveau commentaire » et « Récupération du lien de dossier ».

::: info La relance automatique
L'e-mail « Relance automatique » n'a pas d'interrupteur propre : il est piloté par le réglage des relances de la campagne. Voir [Relances](/fr/guide/reminders).
:::

## Prochaines étapes

- [Configuration d'une campagne](/fr/guide/configuration)
- [Relances](/fr/guide/reminders)
- [Messagerie intégrée](/fr/guide/messaging)
