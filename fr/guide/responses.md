---
title: Gérer les réponses
description: Retrouvez, validez et traitez les dossiers de vos clients.
---

# Gérer les réponses

Chaque soumission d'un client constitue un **dossier**. Cette page explique où les retrouver, comment les valider ou les refuser, suivre leur progression et intervenir à la place du client.

## Où retrouver les dossiers clients

Trois emplacements donnent accès aux dossiers :

1. **Onglet « Accueil » :** uniquement les dossiers qui vous sont assignés. Des compteurs résument votre activité (dossiers assignés, messages non lus, en cours, en attente, en retard). « Voir tout » ouvre la liste complète.

   ![Accueil : dossiers assignés](/screenshots/responses/home-assigned.png)

2. **Onglet « Réponses » :** l'ensemble des dossiers de toutes vos campagnes. Des onglets de vues (par exemple « Tous », « À valider », « Création », « Mes réponses ») filtrent rapidement la liste.

   ![Réponses : tous les dossiers](/screenshots/responses/all-responses.png)

3. **Depuis une campagne :** sélectionnez une campagne, puis cliquez sur son onglet « Réponses » pour n'afficher que les dossiers associés.

   ![Réponses d'une campagne](/screenshots/responses/campaign-responses.png)

La liste affiche pour chaque dossier :

| Colonne | Description |
|---------|-------------|
| **Nom client** | Nom du client et date de dernière modification |
| **Campagnes** | Campagne concernée (liste globale uniquement) |
| **Progression** | Avancement du dossier, avec une coche lorsqu'une étape est validée |
| **Date butoir** | Échéance du dossier, si elle est définie |
| **Dernière connexion** | Date de la dernière activité du client |
| **Statut** | État du dossier (voir [Les statuts d'un dossier](/fr/guide/workflow#les-statuts-d-un-dossier)) |

## Filtres et recherche

Dans l'onglet « Réponses » d'une campagne :

- **Recherche par nom :** retrouvez un client par son nom.
- **Statut :** filtrez selon l'état du dossier.
- **Balises :** filtrez selon les balises posées sur les dossiers.
- **Assigné à moi :** n'affichez que vos dossiers.
- **Exporter / Importer / Créer :** exportez la liste, importez des dossiers ou créez-en un.

## Détail d'un dossier

Cliquez sur un dossier pour l'ouvrir.

- **En-tête :** nom du client, statut du dossier et boutons d'action (« Valider la réponse », ou « Valider l'étape » sur un dossier à plusieurs étapes). Le menu ⋮ regroupe les liens, l'envoi d'un rappel et le téléchargement.
- **Contenu :** les sections du dossier, avec leur statut et une barre de progression. Utilisez « Tout déplier » et le filtre « Statut » pour naviguer. Les fichiers déposés et les signatures capturées y sont visibles.
- **Panneau de droite :** informations du client et bouton « Messages », informations de campagne (relances), organisation du dossier (assignation, référence interne, balises).
- **Sous le contenu :** « Ajouter une annexe » (voir [Les annexes](/fr/guide/annexes)), « Documents », « Champs personnalisés » et « Historique » avec les commentaires internes.
- **Résumé IA :** disponible si l'analyse IA est configurée.

## Valider ou refuser un dossier

La décision peut être prise à trois niveaux, du plus fin au plus global.

::: warning Notification du client
La validation ou le refus individuel des modules ou des sections ne déclenche aucune notification. Le client reçoit un e-mail uniquement lorsque le statut de l'ensemble du dossier change (validé, refusé ou remis en « Création »). Voir le tableau des statuts dans [Workflow et statuts](/fr/guide/workflow#les-statuts-d-un-dossier).
:::

1. **Au niveau du module :** en haut à droite de chaque module, modifiez son statut individuellement. Les statuts proposés sont « Rejeté », « En attente » et « À valider » (modifiables par le client), ainsi que « Validé » et « À valider (verrouillé) » (verrouillés).

   ![Changer le statut d'un module](/screenshots/responses/action-module-level.png)

2. **Au niveau de la section :** en haut à droite de chaque section, le menu « Actions » permet de valider ou de refuser l'ensemble de son contenu.

   ![Actions sur une section](/screenshots/responses/action-section-level.png)

3. **Au niveau du dossier :** en haut à droite du dossier, cliquez sur la petite flèche à côté de « Valider la réponse » pour valider ou refuser l'intégralité du dossier.

   ![Actions globales sur le dossier](/screenshots/responses/action-dossier-level.png)

Pour savoir quelle action choisir selon le statut du dossier (valider, refuser, rouvrir), voir [Les actions à faire selon la situation](/fr/guide/workflow#les-actions-a-faire-selon-la-situation). Pour redemander un document, voir [Les annexes](/fr/guide/annexes).

## Suivre la progression d'un dossier à plusieurs étapes

Lorsque la campagne comporte plusieurs étapes, la liste des étapes s'affiche en haut du dossier. Trois icônes indiquent l'avancement de chacune :

| Icône | Signification |
|-------|---------------|
| Coche | Étape validée |
| Crayon | Étape en cours |
| Sablier | Étape à compléter |

L'étape que vous consultez est soulignée. Si elle diffère de l'étape en cours, un bandeau l'indique et propose « Aller à l'étape en cours ».

![Suivi des étapes d'un dossier](/screenshots/responses/multi-step-progress.png)

## Formulaires en plusieurs étapes : faire avancer le client d'une étape à l'autre

Une étape est un point de contrôle humain : le client remplit une étape, l'admin la valide, l'étape suivante s'ouvre alors au client.

1. **Étape 1, le client remplit** (Création) : il saisit et soumet.
2. **Étape 1, l'admin contrôle** (À valider) : le client voit l'écran de fin.
3. **Étape 2** : l'admin clique sur « Valider l'étape », le dossier repasse en Création sur l'étape 2.
4. **Dernière étape, clôture** : l'admin clique sur « Valider la réponse », le dossier est Validé.

| Situation | Action admin | Effet | Ce que voit le client |
|-----------|--------------|-------|-----------------------|
| Étape N soumise et correcte, ce n'est pas la dernière | « Valider l'étape » | Passage à l'étape N+1, statut remis en Création | L'étape suivante s'ouvre. E-mail « Étape mise à jour » avec le lien du dossier |
| Étape N soumise, des modules sont encore à valider | « Valider l'étape » et cocher « Valider également les N module(s) en attente » | Les modules refusés ne sont pas modifiés par cette action | Idem |
| Étape N soumise mais à corriger | Refuser les champs, puis « Réviser la réponse » | On reste sur l'étape N, en Création | Correction de l'étape N, avec le bandeau rouge |
| Une étape a été validée trop vite, l'étape précédente doit être corrigée | « Annuler la validation de l'étape » | Retour à l'étape N-1, en Création | Le client revient sur l'étape précédente, ses réponses sont conservées |
| Dernière étape soumise et correcte | « Valider la réponse » | Dossier validé | Dossier clôturé |
| L'admin consulte une étape passée | « Charger l'étape en cours » | Aucune action de statut n'est possible sur une étape passée | Rien ne change |

Le menu à côté du bouton de validation sépare deux familles d'actions.

![Actions de l'étape et actions globales](/screenshots/responses/step-and-global-actions.png)

**Actions de l'étape**

Elles valident l'étape en cours ou annulent sa validation pour revenir à l'étape précédente. Par exemple, pour revenir à l'étape 2 d'un dossier de 3 étapes, annulez la validation de l'étape 3.

**Actions globales**

Elles concernent l'ensemble du dossier, et non une étape en particulier :

- **Réviser la réponse :** rouvrir un dossier pour permettre sa modification (voir [Les annexes](/fr/guide/annexes)).
- **Valider ou refuser la réponse :** approuver ou rejeter l'ensemble du dossier.
- **Archiver ou supprimer :** retirer le dossier des réponses actives, ou le supprimer.

Pour la règle générale (le client ne peut modifier son dossier qu'en statut Création), voir [La règle à retenir](/fr/guide/workflow#la-regle-a-retenir).

## Assigner un dossier à un collaborateur

Accédez au dossier concerné, puis sélectionnez le collaborateur auquel vous souhaitez l'assigner (champ « Assigné à », colonne de droite, rubrique « Organisation réponse client »). Une fois le dossier assigné, le collaborateur et le responsable de la campagne recevront les notifications liées à son suivi, notamment lors de sa création, de sa soumission, de la réception de messages envoyés par le client, etc.

![Assigner un dossier à un collaborateur](/screenshots/responses/assign-dossier.png)

## Reprendre la main sur un dossier client

Vous pouvez compléter ou modifier les informations à la place du client. Cliquez sur l'icône en forme de crayon à côté du contenu à modifier : une fenêtre s'ouvre avec les champs de la section, puis cliquez sur « Soumettre ».

![Dossier soumis par le client, avec les crayons de modification](/screenshots/responses/edit-on-behalf-list.png)

![Modification d'une section à la place du client](/screenshots/responses/edit-on-behalf-modal.png)

## Statuts et workflow

Un dossier est modifiable par le client tant qu'il est en « Création », puis en lecture seule (« À valider », « Validé » ou « Rejeté »). Pour le détail de chaque statut et ce que voit le client, voir [Workflow et statuts](/fr/guide/workflow).

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

[En savoir plus sur les templates →](/fr/features/pdf-templates)

## Signature électronique

Si votre template contient des zones de signature :

1. Générez le document
2. Lancez la procédure de signature
3. Suivez l'avancement dans le panneau

[En savoir plus sur la signature →](/fr/features/electronic-signature)

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

[En savoir plus sur l'export →](/fr/guide/export)

## Prochaines étapes

- [Workflow et statuts](/fr/guide/workflow) - Comprendre le cycle de vie d'un dossier
- [Les annexes](/fr/guide/annexes) - Demander des compléments au client
- [Relances](/fr/guide/reminders) - Relancer les clients
- [Messagerie intégrée](/fr/guide/messaging) - Échanger dans le dossier
- [Export des données](/fr/guide/export) - Récupérer vos données
- [Templates PDF](/fr/features/pdf-templates) - Générer des documents
