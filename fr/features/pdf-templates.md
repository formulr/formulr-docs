---
title: Templates PDF
description: Créez des templates de documents PDF personnalisés avec l'éditeur visuel ou le code Liquid.
---

# Templates PDF

Générez automatiquement des documents PDF personnalisés à partir des données collectées dans vos formulaires.

## Deux modes d'édition

### Éditeur visuel (WYSIWYG)

L'éditeur visuel permet de créer des templates sans connaissances techniques :

- **Mise en forme** : gras, italique, souligné, listes
- **Titres** : H1, H2, H3
- **Alignement** : gauche, centré, droite
- **Tailles de texte** : petit, normal, grand, très grand
- **Saut de page** : pour contrôler la pagination du PDF

### Éditeur code (Liquid)

Pour des templates plus complexes, utilisez l'éditeur Liquid avec :

- Coloration syntaxique HTML/Liquid
- Mise en surbrillance des variables connues
- Détection automatique des zones de signature

## Insérer des variables

Cliquez sur le bouton **"Variables"** pour voir toutes les données disponibles :

- Informations de la campagne
- Données de la réponse
- Champs des modules (texte, email, dates...)
- Logo de l'entreprise

Les variables sont insérées avec la syntaxe Liquid :

```liquid
{{ campaignResponse.responses.nom_module.value[0] }}
```

## Zones de signature

Pour intégrer une signature électronique dans votre document :

```liquid
{% raw %}{{s1|signature|210|130}}{% endraw %}
```

- `s1` : identifiant de la signature (s1, s2, s3... pour plusieurs signataires)
- `210` : largeur en pixels
- `130` : hauteur en pixels

::: tip Signatures multiples
Pour plusieurs signataires, utilisez des identifiants séquentiels : s1, s2, s3...
L'éditeur vous alerte si la séquence n'est pas respectée.
:::

## Prévisualisation

1. Sélectionnez une réponse existante dans la liste déroulante
2. Cliquez sur **"Enregistrer et prévisualiser"**
3. Le PDF généré s'affiche dans le panneau de droite

## Multi-langue

Chaque template peut avoir des traductions :

1. Créez le template dans la langue par défaut
2. Utilisez le sélecteur de langue pour ajouter une traduction
3. Adaptez le contenu pour chaque langue

Le bon template sera automatiquement utilisé selon la langue de la réponse.

## Exemple de template

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; }
    .header { text-align: center; margin-bottom: 2rem; }
    .signature-zone { margin-top: 3rem; }
  </style>
</head>
<body>
  <div class="header">
    <img src="{{ company_logo }}" alt="Logo" style="max-height: 50px;">
    <h1>Attestation</h1>
  </div>

  <p>Je soussigné(e) <strong>{{ campaignResponse.responses.nom.value[0] }}</strong>,</p>

  <p>demeurant au {{ campaignResponse.responses.adresse.value[0] }},</p>

  <p>atteste sur l'honneur l'exactitude des informations fournies.</p>

  <div class="signature-zone">
    <p>Fait à _____________, le {{ "now" | date: "%d/%m/%Y" }}</p>
    <p>Signature :</p>
    {% raw %}{{s1|signature|210|130}}{% endraw %}
  </div>
</body>
</html>
```

## Bonnes pratiques

1. **Testez avec plusieurs réponses** pour vérifier que le template gère tous les cas
2. **Utilisez des styles inline** pour une meilleure compatibilité PDF
3. **Prévoyez les champs vides** avec des conditions Liquid
4. **Numérotez les signatures** de manière séquentielle

## Prochaines étapes

- [Signature électronique](/fr/features/electronic-signature) - Intégrer Yousign
- [Génération automatique](/fr/features/document-generation) - Automatiser la création de documents
