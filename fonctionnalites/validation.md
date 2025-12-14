---
title: Validation des champs
description: Configurez des règles de validation pour garantir la qualité des données collectées.
---

# Validation des champs

La validation garantit que les données saisies respectent vos critères avant soumission.

## Validation automatique

Certains modules ont une validation intégrée :

| Module | Validation automatique |
|--------|----------------------|
| **Email** | Format email valide |
| **Téléphone** | Format téléphone valide |
| **IBAN** | Clé de contrôle IBAN |
| **Date** | Date valide |
| **Nombre** | Valeur numérique |

## Champ obligatoire

Le paramètre le plus courant :

1. Ouvrez les paramètres du module
2. Activez **"Obligatoire"**
3. L'utilisateur ne peut pas continuer sans remplir

::: tip Indicateur visuel
Les champs obligatoires sont marqués d'un astérisque rouge (*).
:::

## Règles de validation

### Longueur du texte

Pour les champs texte :

| Paramètre | Description |
|-----------|-------------|
| **Minimum** | Nombre minimum de caractères |
| **Maximum** | Nombre maximum de caractères |

**Exemple** : Code postal français
- Minimum : 5
- Maximum : 5

### Valeurs numériques

Pour les champs nombre :

| Paramètre | Description |
|-----------|-------------|
| **Minimum** | Valeur minimale acceptée |
| **Maximum** | Valeur maximale acceptée |
| **Décimales** | Nombre de chiffres après la virgule |

**Exemple** : Pourcentage
- Minimum : 0
- Maximum : 100
- Décimales : 2

### Dates

Pour les champs date :

| Paramètre | Description |
|-----------|-------------|
| **Date minimum** | Ne peut pas être avant |
| **Date maximum** | Ne peut pas être après |
| **Jours autorisés** | Exclure week-ends, fériés |

**Exemple** : Date de rendez-vous
- Minimum : aujourd'hui
- Maximum : +30 jours
- Exclure : samedis, dimanches

### Fichiers

Pour les uploads :

| Paramètre | Description |
|-----------|-------------|
| **Types acceptés** | Extensions autorisées |
| **Taille maximum** | En Mo |
| **Nombre de fichiers** | Min/max pour upload multiple |

**Exemple** : Pièce d'identité
- Types : PDF, JPG, PNG
- Taille max : 10 Mo

## Expression régulière (Regex)

Pour des validations personnalisées avancées :

### Exemples courants

**Code postal français** :
```regex
^[0-9]{5}$
```

**Numéro SIRET** :
```regex
^[0-9]{14}$
```

**Plaque d'immatriculation** :
```regex
^[A-Z]{2}-[0-9]{3}-[A-Z]{2}$
```

### Configuration

1. Ouvrez les paramètres du module texte
2. Dans "Validation avancée", ajoutez l'expression
3. Définissez le message d'erreur personnalisé

## Messages d'erreur

### Messages par défaut

Formulr affiche des messages adaptés :
- "Ce champ est obligatoire"
- "L'adresse email n'est pas valide"
- "La valeur doit être entre X et Y"

### Messages personnalisés

Pour chaque règle, vous pouvez personnaliser le message :

1. Dans les paramètres de validation
2. Champ "Message d'erreur"
3. Saisissez votre texte

**Exemple** :
> "Veuillez saisir un code postal français à 5 chiffres"

## Validation côté serveur

En plus de la validation côté navigateur, Formulr vérifie :

- Toutes les règles à la soumission
- L'intégrité des fichiers uploadés
- La cohérence des données

::: warning Sécurité
Ne comptez pas uniquement sur la validation côté client. La validation serveur est toujours appliquée.
:::

## Bonnes pratiques

### 1. Soyez explicite

- Indiquez le format attendu dans le placeholder
- Utilisez le texte d'aide pour les cas complexes

### 2. Messages clairs

- Expliquez comment corriger l'erreur
- Évitez le jargon technique

### 3. Ne sur-validez pas

- Acceptez les formats courants
- Évitez les règles trop restrictives

### 4. Testez

- Essayez des valeurs limites
- Vérifiez les cas d'erreur

## Prochaines étapes

- [Types de modules](/fonctionnalites/modules) - Tous les modules disponibles
- [Logique conditionnelle](/fonctionnalites/logique-conditionnelle) - Affichage dynamique
