---
title: Analyse du dossier par l'IA
description: Faites vérifier chaque dossier complet par l'IA selon vos propres règles, et obtenez un score, des points d'attention et une recommandation.
---

# Analyse du dossier par l'IA

L'**analyse du dossier** fait relire par l'IA l'ensemble d'une réponse : **le formulaire, les métachamps et tous les documents fournis**. Elle les croise selon **vos règles métier**, écrites en langage naturel, et vous rend :

- un **score** sur 100 ;
- une **recommandation** (Approuver, À compléter, Rejeter) ;
- une **synthèse** et des **points d'attention** classés par gravité ;
- la liste des **documents manquants**.

C'est une aide à la décision pour vos équipes : l'IA prépare la revue, la décision reste humaine.

Pour vérifier un document précis dès son dépôt (pièce d'identité, KBIS...), voir aussi les [Agents IA sur les documents](./ai-analysis).

::: info Plans
L'analyse du dossier est disponible avec les plans **Business** et **Enterprise**.
:::

## Configurer l'analyse d'une campagne

Dans la campagne, onglet **Paramètres**, partie **Configuration de l'analyse IA** :

- **Prompt d'analyse du dossier** : vos règles, en langage naturel (voir l'exemple ci-dessous). Laissez vide pour désactiver l'analyse.
- **Schéma de sortie JSON (optionnel)** : pour imposer un format de résultat précis, utile si vous exploitez le résultat par code (webhook). Laissez vide pour le format Formulr par défaut (score, recommandation, alertes...).
- **Analyser automatiquement** : l'analyse se lance dès qu'un client soumet son dossier. Sinon, vous la lancez à la main depuis la réponse.

![Configuration de l'analyse IA d'une campagne](/screenshots/ai-dossier-settings-fr.png)

## Écrire un bon prompt

- **Donnez le contexte** : quel type de dossier, pour quel usage.
- **Listez les points à vérifier**, du plus important au moins important, avec vos seuils (montants, délais, pièces obligatoires...).
- **Demandez de citer** pour chaque point le champ ou le document concerné : la revue est plus rapide.
- **Fixez les recommandations possibles** et ce qui mène à chacune.
- **Interdisez les conclusions hâtives** : l'IA ne doit pas déduire ce qui n'est pas dans le dossier, et doit dire quand un élément ne peut pas être vérifié.

### Exemple : dossier TRACFIN (lutte anti-blanchiment)

Ce prompt est utilisé en production pour la revue de conformité de dossiers clients particuliers. Vous pouvez le copier et l'adapter à vos propres règles :

```text
Analyse l'ensemble du dossier TRACFIN d'un client particulier à partir des informations renseignées dans le formulaire, des métachamps et des documents fournis.

Ton objectif est d'identifier les éventuelles incohérences, informations manquantes et points nécessitant une vigilance particulière, afin d'aider l'équipe conformité dans sa revue. Tu ne prends jamais la décision finale.

Vérifie notamment :
- la cohérence entre l'identité du client et les pièces justificatives fournies (nom, prénom, date de naissance) ;
- la cohérence des coordonnées, de l'adresse et de la situation déclarée ;
- la complétude et la validité apparente des documents ;
- la cohérence entre la situation professionnelle, les revenus ou ressources déclarés et l'opération concernée ;
- la présence d'informations contradictoires ou inhabituelles dans le dossier ;
- tout élément pouvant nécessiter une vérification complémentaire au regard des informations disponibles.

Points à vérifier en priorité :
1. Pièce d'identité : présente, lisible, non expirée à la date de l'analyse. Pour un ressortissant hors Union européenne, la pièce doit être un passeport.
2. Personne politiquement exposée : si le client se déclare PPE, le signaler comme point majeur.
3. Origine des fonds : cohérence entre l'origine déclarée (Salaires, Epargne, Héritage, Autre), la tranche de revenus mensuels, la profession et le secteur d'activité. Si "Autre" est choisi, la précision doit être explicite et plausible.
4. Opération supérieure à 150 000 € : des justificatifs d'origine des fonds doivent être présents, lisibles, au nom du client ou expliqués, et cohérents avec l'origine déclarée.
5. Géographie : signaler si la nationalité, le pays de résidence ou le pays de la banque figure sur la liste GAFI des pays à haut risque ou sous surveillance renforcée, ou sur la liste UE des pays tiers à haut risque. Signaler aussi une banque située dans un autre pays que la résidence sans explication apparente.
6. Formalités : attestation d'exactitude cochée et document signé présent.

Explique clairement les éléments ayant influencé le score et liste les points à vérifier, en citant pour chacun le champ ou le document concerné.

Termine par une recommandation concise parmi :
« Aucun point d'attention majeur identifié »
« Vérifications complémentaires recommandées » (pièce manquante, illisible ou expirée, incohérence mineure à clarifier avec le client)
« Revue humaine approfondie recommandée » (client PPE, pays à haut risque, opération de plus de 150 000 € sans justificatif cohérent, incohérence majeure sur l'origine des fonds, suspicion de document falsifié)

Ne conclus jamais qu'un client est conforme ou non conforme et ne déduis aucune information qui n'est pas présente dans le dossier. Si un élément ne peut pas être vérifié, indique-le.
```

## Le résultat sur la réponse

En haut de la fiche de la réponse, un bandeau **Analyse du dossier** affiche le score, la recommandation et le niveau de confiance de l'IA.

![Bandeau d'analyse du dossier sur une réponse](/screenshots/ai-dossier-summary-fr.png)

Cliquez sur **Voir l'analyse** pour le détail :

- **Score global** et **recommandation** : Approuver, À compléter ou Rejeter ;
- **Synthèse** rédigée par l'IA ;
- **Détail par critère** ;
- **Points d'attention**, classés en Information, Attention ou Critique ;
- **Documents manquants** ;
- **Historique** des analyses précédentes, manuelles ou automatiques.

![Détail de l'analyse du dossier](/screenshots/ai-dossier-result-fr.png)

Si l'analyse n'a pas été lancée automatiquement, cliquez sur **Analyser le dossier**. Après une modification du dossier, utilisez **Relancer l'analyse**. L'analyse prend quelques instants : vous pouvez quitter la page, le résultat s'affichera tout seul.

## Bon à savoir

- **L'IA ne décide pas** : elle prépare la revue. Validez ou refusez le dossier vous-même.
- **Le résultat dépend du prompt** : plus vos règles sont précises, plus l'analyse est utile.
- **Documents illisibles** : l'IA le signale quand une pièce ne peut pas être lue. Demandez alors un document de meilleure qualité au client.
