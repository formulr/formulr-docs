---
title: Génération de documents
description: Générez automatiquement des documents PDF personnalisés à partir des réponses.
---

# Génération de documents

Formulr permet de générer automatiquement des documents PDF à partir des données collectées.

## Principe

1. Créez un **template** avec des variables
2. Les variables sont remplacées par les **données réelles**
3. Un **PDF** est généré instantanément

## Créer un template

### Accéder aux templates

1. Ouvrez votre campagne
2. Allez dans l'onglet **Documents**
3. Cliquez sur **Nouveau template**

### Choisir le mode d'édition

| Mode | Pour qui | Avantages |
|------|----------|-----------|
| **WYSIWYG** | Tous | Visuel, simple |
| **Liquid** | Développeurs | Flexible, puissant |

[En savoir plus sur les templates →](/fonctionnalites/templates-pdf)

## Variables disponibles

### Données de la réponse

Toutes les valeurs saisies dans le formulaire :

```liquid
{{ campaignResponse.responses.nom_module.value[0] }}
```

### Informations campagne

```liquid
{{ campaign.title }}
{{ campaign.description }}
```

### Informations utilisateur

```liquid
{{ campaignResponse.user.firstName }}
{{ campaignResponse.user.lastName }}
{{ campaignResponse.user.email }}
```

### Dates

```liquid
{{ "now" | date: "%d/%m/%Y" }}
{{ campaignResponse.createdAt | date: "%d %B %Y" }}
```

### Logo entreprise

```liquid
<img src="{{ company_logo }}" alt="Logo" style="max-height: 50px;">
```

## Générer un document

### Manuellement

1. Ouvrez le détail d'une réponse
2. Cliquez sur **Générer un document**
3. Sélectionnez le template
4. Le PDF s'affiche / se télécharge

### Automatiquement

Via les workflows, déclenchez la génération :

- À la complétion d'une étape
- Au changement de statut
- Selon une condition

## Multi-langue

### Templates localisés

Créez une version du template par langue :

1. Créez le template en français
2. Changez la langue dans le sélecteur
3. Adaptez le contenu

### Sélection automatique

Le template dans la langue de la réponse est utilisé automatiquement.

## Prévisualisation

Avant de finaliser :

1. Sélectionnez une réponse existante
2. Cliquez sur **Prévisualiser**
3. Vérifiez le rendu

::: tip Conseil
Testez avec plusieurs réponses pour valider tous les cas (champs vides, textes longs...).
:::

## Bonnes pratiques

### Mise en page

- Utilisez des styles inline pour la compatibilité
- Prévoyez les marges pour l'impression
- Testez le rendu sur différentes tailles de données

### Gestion des vides

```liquid
{% if campaignResponse.responses.telephone.value[0] %}
  Tél : {{ campaignResponse.responses.telephone.value[0] }}
{% endif %}
```

### Tableaux de données

Pour les modules tableau :

```liquid
{% for ligne in campaignResponse.responses.produits.value %}
  <tr>
    <td>{{ ligne.nom }}</td>
    <td>{{ ligne.quantite }}</td>
  </tr>
{% endfor %}
```

## Stockage et archivage

Les documents générés sont :

- Stockés de manière sécurisée
- Associés à la réponse
- Téléchargeables à tout moment
- Archivés selon votre politique de rétention

## Prochaines étapes

- [Templates PDF](/fonctionnalites/templates-pdf) - Syntaxe détaillée
- [Signature électronique](/fonctionnalites/signature-electronique) - Signer les documents
- [Workflows](/fonctionnalites/workflows) - Automatiser la génération
