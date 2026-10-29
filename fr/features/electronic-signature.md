---
title: Signature électronique
description: Faites signer vos documents directement dans vos formulaires grâce au module Signature électronique.
---

# Signature électronique

Le module **Signature électronique** permet de faire signer un document (contrat, mandat, attestation...) directement dans le parcours de votre formulaire. Le document signé est ensuite rattaché à la réponse.

La signature est assurée par [Formulr Trust](./formulr-trust), la solution de signature de Formulr, utilisée par défaut. [Yousign](./yousign) reste disponible sur demande.


## Fonctionnement

1. Le répondant remplit le formulaire.
2. Arrivé au module de signature, il consulte le document, prérempli avec ses réponses.
3. Il signe directement dans le formulaire, sans quitter la page.
4. Le document signé est enregistré dans la réponse et le champ passe en **Validé**.

## Ajouter une signature à un formulaire

1. Dans l'éditeur, ajoutez un module **Signature électronique**. Il doit être seul dans sa section.
2. Ouvrez ses réglages et choisissez le **Type** :
   - **Document générique** : c'est le répondant connecté qui signe ;
   - **Document personnalisé** : vous choisissez les **Signataires** (le répondant, ou une personne dont les coordonnées sont saisies dans un autre module du formulaire). Ce type n'est pas disponible à la première étape.
3. Choisissez le **Document à signer** :
   - **Ajouter un PDF** : un document fixe, envoyé avec **Parcourir** ;
   - **Utiliser un template** : un [template PDF](./pdf-templates) rempli avec les réponses. Ce choix apparaît quand la campagne a au moins un template (onglet **Documents**).
4. Dans **Positionner la signature**, cliquez sur **Positionner** et glissez le nom de chaque signataire à l'endroit voulu du document. Avec un template, les signatures peuvent aussi être placées par des ancres (voir ci-dessous).
5. Vous pouvez ajouter plusieurs documents avec **Ajouter un autre document**.
6. Option : **Le signataire peut être une personne externe** permet au répondant de faire signer quelqu'un d'autre (voir [Quand le signataire n'est pas le répondant](#quand-le-signataire-n-est-pas-le-repondant)).
7. Cliquez sur **Valider**, puis publiez la campagne.

![Réglages du module Signature électronique](/screenshots/esignature-module-fr.png)

## Zones de signature dans un template PDF

Dans un template, placez une ancre à l'endroit où la signature doit apparaître :

```text
{{s1|signature|210|130}}
```

| Élément | Rôle |
|---------|------|
| `s1` | Numéro du signataire : `s1`, `s2`, `s3`... dans l'ordre, sans trou |
| `210` | Largeur de la zone |
| `130` | Hauteur de la zone |

Exemple avec deux signataires :

```text
<p>Le client :</p>
{{s1|signature|210|130}}

<p>Le conseiller :</p>
{{s2|signature|210|130}}
```

L'éditeur de template vous alerte si la numérotation est incomplète. L'ancre est invisible dans le document final : seule la signature apparaît.

## Quand le signataire n'est pas le répondant

Celui qui remplit le formulaire n'est pas toujours celui qui doit signer : un collaborateur complète le dossier, mais c'est le représentant légal qui signe.

### Activer l'option

Dans les réglages du module, activez **Le signataire peut être une personne externe (demande de signature envoyée par email)**, puis cliquez sur **Valider** et publiez la campagne.

### Ce que voit le répondant

Au moment de signer, le répondant voit qui est prévu comme **Signataire** et peut, au choix :

- **Signer maintenant**, lui-même, comme d'habitude ;
- désigner une autre personne :
  - si c'est lui qui est prévu comme signataire, il clique sur **Quelqu'un d'autre doit signer** et saisit le **Prénom**, le **Nom** et l'**Email** du signataire, puis **Envoyer la demande de signature par email** ;
  - si le signataire prévu est une personne saisie dans le formulaire, il clique sur **Cette personne n'est pas moi : lui envoyer la demande de signature par email**.

Le message **Demande de signature envoyée** confirme l'envoi. Le répondant peut toujours **Voir le document** et quitter la page : il est prévenu par email dès que le document est signé.

### Ce que reçoit le signataire

Le signataire reçoit la demande de signature **par email**. Une fois le document signé, il est rattaché à la réponse comme pour une signature classique.

## Plusieurs signataires

- Un seul signataire, le répondant : il signe **dans le formulaire**.
- Plusieurs signataires : chacun reçoit **un email d'invitation à signer**. Le répondant voit un message lui indiquant que les demandes ont été envoyées.

## Suivi dans la réponse

| Affichage | Signification |
|-----------|---------------|
| **En attente de la signature** | Le document n'a pas encore été signé. |
| **Document en cours de signature** | Au moins une signature est en cours. |
| **Statut des signataires** | Avec plusieurs signataires, chacun s'affiche avec son état (signé ou en attente). |
| **Voir le document signé** | Toutes les signatures sont faites : ouvrez le PDF signé. |

![Document signé dans la réponse](/screenshots/esignature-response-fr.png)

Un administrateur peut **Relancer la signature** : le document signé ou en cours est alors perdu et le répondant doit signer à nouveau.

## Bon à savoir

- **Mode test** : tant que votre compte n'est pas passé en production, les signatures sont des signatures de test, sans valeur légale. Faites la demande via votre accès **Support** pour activer la production.
- Le répondant peut **télécharger** son document signé à la fin de la signature.
- Les champs des étapes précédentes sont verrouillés au moment de la signature, pour que le document signé corresponde aux réponses.

## Voir aussi

- [Formulr Trust](./formulr-trust) : la solution de signature par défaut
- [Yousign](./yousign) : sur demande
- [Templates PDF](./pdf-templates)
