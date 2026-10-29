---
title: Agents IA sur les documents
description: Faites vérifier automatiquement par l'IA chaque document déposé par vos clients (pièce d'identité, KBIS, justificatif de domicile).
---

# Agents IA sur les documents

Un **agent IA** se branche sur un module **Document** de votre formulaire. Dès que le client dépose son fichier, l'agent le lit et vérifie qu'il correspond bien à ce qui est attendu : bon type de document, informations présentes, cohérence avec les réponses du formulaire. Le résultat s'affiche directement sur le champ, dans la fiche de la réponse.

Pour analyser le **dossier complet** (toutes les réponses et tous les documents ensemble), voir [Analyse du dossier par l'IA](./ai-dossier-analysis).

## Agents disponibles

| Agent | Ce qu'il vérifie |
|-------|------------------|
| **Carte d'identité** | Pièce d'identité officielle (carte d'identité, passeport, permis) : nom, prénom, numéro du document, date de naissance, date d'expiration, pays émetteur. Le nom et le prénom doivent correspondre à ceux saisis dans le formulaire (sans tenir compte des majuscules, de l'ordre ni des accents). |
| **KBIS** | Extrait Kbis d'une société. |
| **Justificatif de domicile** | Justificatif de domicile. |

::: info Un autre type de document ?
Les agents sont fournis par Formulr. Pour vérifier un nouveau type de document, faites la demande via votre accès **Support**.
:::

## Ajouter un agent à un module Document

1. Ouvrez la campagne dans l'**éditeur** (onglet **Modifier**).
2. Cliquez sur le module **Document** concerné : ses réglages s'ouvrent dans le panneau de droite.
3. Dans la partie **Agents IA**, choisissez l'agent à utiliser.
4. Activez **Peut mettre à jour le statut** si vous voulez que le verdict de l'IA valide ou refuse le champ automatiquement (voir ci-dessous).
5. Publiez la mise à jour de la campagne.

![Agent IA sur un module Document](/screenshots/ai-agent-module-fr.png)

## Le résultat sur la réponse

Sur la fiche de la réponse, le champ affiche un badge **IA** avec le verdict de l'agent :

| Verdict | Signification |
|---------|---------------|
| **En cours de vérification** | Le document vient d'être déposé, l'analyse est en cours. |
| **Vérifié** | Le document correspond à ce qui est attendu. |
| **Incorrect** | Un élément manque ou ne correspond pas (mauvais document, nom différent, information absente...). |

Avec l'option **Peut mettre à jour le statut** :
- un document **Vérifié** passe le champ en **Validé** ;
- un document **Incorrect** passe le champ en **Rejeté**.

Sans cette option, le verdict reste une simple indication : c'est vous qui validez ou refusez le champ.

![Verdict de l'agent IA sur un champ de la réponse](/screenshots/ai-agent-result-fr.png)

## Bon à savoir

- **Vous gardez la main** : même quand l'IA a mis à jour le statut, un administrateur peut toujours le modifier.
- **La vérification se lance à chaque dépôt** : si le client remplace son document, l'agent le revérifie.
- **Les formats acceptés** sont ceux du module Document (par défaut PDF, PNG, JPG).
- L'IA est une **aide à la vérification** : en cas de doute, ouvrez le document pour le contrôler vous-même.
