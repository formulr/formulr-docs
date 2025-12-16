---
title: Analyse IA
description: Exploitez l'intelligence artificielle pour analyser vos réponses et extraire des insights.
---

# Analyse IA

Formulr intègre des fonctionnalités d'intelligence artificielle pour vous aider à analyser et exploiter vos données collectées.

## Fonctionnalités

### Résumé automatique

L'IA génère un résumé concis de chaque réponse :

- Points clés extraits
- Informations importantes mises en avant
- Synthèse des données saisies

### Analyse de sentiment

Pour les champs texte libre :

- Détection du ton (positif, neutre, négatif)
- Identification des points de satisfaction
- Alertes sur les commentaires négatifs

### Extraction d'entités

Identification automatique :

- Noms de personnes
- Entreprises mentionnées
- Dates et montants
- Lieux géographiques

### Catégorisation

Classification automatique des réponses :

- Par thématique
- Par urgence
- Par type de demande

## Utilisation

### Sur une réponse

1. Ouvrez le détail d'une réponse
2. Cliquez sur **Analyser avec l'IA**
3. L'analyse s'affiche dans le panneau latéral

### En masse

Pour analyser plusieurs réponses :

1. Sélectionnez les réponses dans la liste
2. **Actions** > **Analyse IA**
3. Un rapport consolidé est généré

## Résumé intelligent

### Ce qui est analysé

L'IA parcourt tous les champs de la réponse et extrait :

- Les informations d'identification
- Les demandes exprimées
- Les points d'attention
- Les données chiffrées importantes

### Format du résumé

```
📋 Résumé de la réponse #REF-2024-001

Demandeur : Jean Dupont, Entreprise ABC
Type : Demande de devis
Montant estimé : 15 000 €

Points clés :
• Projet de refonte du site web
• Délai souhaité : 3 mois
• Budget validé par la direction

⚠️ Attention :
• Demande urgente mentionnée
• Client existant (historique détecté)
```

## Analyse de fichiers

### Documents PDF

L'IA peut analyser les PDF uploadés :

- Extraction du texte
- Résumé du contenu
- Vérification de conformité

### Images

Pour les photos et scans :

- OCR (reconnaissance de texte)
- Détection du type de document
- Extraction des informations clés

## Suggestions d'actions

Basées sur l'analyse, l'IA peut suggérer :

| Situation détectée | Suggestion |
|-------------------|------------|
| Demande urgente | Priorité haute recommandée |
| Montant élevé | Escalade vers direction |
| Information manquante | Demande de compléments |
| Client mécontent | Appel téléphonique suggéré |

## Configuration

### Activer l'analyse IA

1. **Paramètres** > **Intelligence artificielle**
2. Activez les fonctionnalités souhaitées

### Options disponibles

| Option | Description |
|--------|-------------|
| **Résumé automatique** | Génère un résumé à chaque nouvelle réponse |
| **Analyse de sentiment** | Active la détection de sentiment |
| **Extraction d'entités** | Identifie automatiquement les entités |
| **Suggestions** | Propose des actions recommandées |

### Analyse automatique vs manuelle

- **Automatique** : Analyse déclenchée à chaque soumission
- **Manuelle** : Analyse à la demande uniquement

## Intégration workflows

Utilisez l'analyse IA dans vos workflows :

```
[Nouvelle réponse]
    ↓
[Analyse IA]
    ↓
[Si sentiment = négatif]
    → [Alerte équipe support]
    → [Priorité haute]
[Si montant > 50000]
    → [Notification direction]
```

## Confidentialité

### Traitement des données

- Analyse effectuée de manière sécurisée
- Données non utilisées pour entraîner des modèles
- Conformité RGPD

### Limitations

Pour protéger la vie privée :

- Pas d'analyse des données sensibles (santé, religion...)
- Option de désactivation par champ
- Anonymisation possible

## Limites actuelles

- Analyse textuelle principalement
- Langues supportées : français, anglais
- Maximum 100 analyses automatiques/jour par campagne

## Cas d'usage

### Service client

- Priorisation automatique des demandes
- Détection des clients insatisfaits
- Routage intelligent

### Ressources humaines

- Analyse des candidatures
- Extraction des compétences
- Scoring automatique

### Commercial

- Qualification des leads
- Estimation du potentiel
- Détection des opportunités

## Prochaines étapes

- [Workflows](/fonctionnalites/workflows) - Automatiser avec l'IA
- [Export](/guide/export) - Exporter les analyses
- [API & Webhooks](/fonctionnalites/api-webhooks) - Intégrer l'IA
