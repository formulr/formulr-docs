---
title: Signature électronique
description: Intégrez la signature électronique Yousign dans vos formulaires Formulr.
---

# Signature électronique

Formulr s'intègre avec Yousign pour proposer la signature électronique certifiée directement dans vos processus.

## Fonctionnement

1. L'utilisateur remplit le formulaire
2. Un document PDF est généré avec ses données
3. Le document est envoyé à Yousign pour signature
4. L'utilisateur signe électroniquement
5. Le document signé est archivé

## Prérequis

La signature électronique est intégrée nativement dans Formulr via Yousign, solution française certifiée eIDAS. Aucune configuration supplémentaire n'est nécessaire.

### Activer la signature

1. Allez dans **Paramètres** > **Signature**
2. Activez la signature électronique
3. Choisissez l'environnement (Test/Production)

## Créer un template avec signature

### 1. Template PDF

Créez un template de document incluant des zones de signature :

```liquid
<div class="signature-zone">
  <p>Signature du client :</p>
  {% raw %}{{s1|signature|210|130}}{% endraw %}
</div>

<div class="signature-zone">
  <p>Signature du conseiller :</p>
  {% raw %}{{s2|signature|210|130}}{% endraw %}
</div>
```

### 2. Syntaxe de signature

```
{{s[N]|signature|[largeur]|[hauteur]}}
```

| Paramètre | Description |
|-----------|-------------|
| `s[N]` | Identifiant du signataire (s1, s2, s3...) |
| `largeur` | Largeur de la zone en pixels |
| `hauteur` | Hauteur de la zone en pixels |

### 3. Signataires multiples

Pour plusieurs signataires, numérotez séquentiellement :

- `s1` : Premier signataire (ex: client)
- `s2` : Deuxième signataire (ex: conseiller)
- `s3` : Troisième signataire (ex: témoin)

::: warning Important
Les numéros doivent être séquentiels (s1, s2, s3...). L'éditeur vous alerte si la séquence est incomplète.
:::

## Déclencher la signature

### Depuis une réponse

1. Ouvrez le détail d'une réponse
2. Générez le document PDF
3. Cliquez sur **"Envoyer pour signature"**
4. Renseignez les emails des signataires
5. Validez

### Automatiquement via workflow

Configurez le workflow pour déclencher automatiquement :

1. Ajoutez une action "Signature électronique"
2. Associez le template
3. Mappez les signataires

## Suivi des signatures

### États possibles

| État | Description |
|------|-------------|
| **En attente** | Envoyé, en attente de signature |
| **Signé partiellement** | Certains signataires ont signé |
| **Signé** | Tous ont signé |
| **Refusé** | Un signataire a refusé |
| **Expiré** | Délai dépassé |

### Notifications

- Email à chaque signataire
- Rappels automatiques
- Notification à la complétion

## Document signé

Une fois signé :

- Le PDF est horodaté et certifié
- Un certificat de signature est joint
- Le document est archivé dans Formulr
- Téléchargeable depuis la réponse

## Valeur légale

Les signatures Yousign sont :

- ✅ Conformes eIDAS (règlement européen)
- ✅ Reconnues légalement en France et en Europe
- ✅ Horodatées et traçables
- ✅ Archivées de manière sécurisée

## Cas d'usage

### Contrats

- Lettres de mission
- Mandats
- CGV/CGU

### RH

- Contrats de travail
- Avenants
- Conventions de stage

### Immobilier

- Baux
- États des lieux
- Mandats de gestion

### Finance

- Ouvertures de compte
- Souscriptions
- Procurations

## Bonnes pratiques

1. **Positionnez clairement** les zones de signature
2. **Identifiez** chaque signataire (nom, fonction)
3. **Testez** avec l'environnement sandbox Yousign
4. **Informez** les signataires du processus

## Prochaines étapes

- [Templates PDF](/fonctionnalites/templates-pdf) - Créer des documents
- [Yousign](/fonctionnalites/yousign) - Configuration avancée
- [Workflows](/fonctionnalites/workflows) - Automatisation
