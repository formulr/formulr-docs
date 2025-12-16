---
title: Logique conditionnelle
description: Affichez ou masquez des sections selon les réponses de l'utilisateur.
---

# Logique conditionnelle

La logique conditionnelle permet d'adapter votre formulaire dynamiquement selon les réponses de l'utilisateur.

## Principe

Affichez ou masquez des sections entières selon :
- La valeur d'un champ précédent
- Une combinaison de conditions
- Le profil de l'utilisateur

## Configurer une condition

### Sur une section

1. Ouvrez les paramètres de la section (⚙️)
2. Activez **"Affichage conditionnel"**
3. Définissez la condition

### Exemple simple

> Afficher la section "Détails entreprise" uniquement si le type est "Professionnel"

```
SI [Type de client] = "Professionnel"
ALORS Afficher [Détails entreprise]
```

## Types de conditions

### Égalité

```
[Champ] = "Valeur"
[Champ] ≠ "Valeur"
```

### Comparaison numérique

```
[Montant] > 1000
[Âge] >= 18
[Quantité] < 10
```

### Présence

```
[Champ] est rempli
[Champ] est vide
[Fichier] est uploadé
```

### Liste

```
[Champ] contient "Valeur"
[Champ] est dans ["Option1", "Option2"]
```

## Conditions combinées

### ET (toutes les conditions)

```
SI [Type] = "Entreprise"
ET [CA] > 100000
ALORS Afficher [Section grands comptes]
```

### OU (au moins une condition)

```
SI [Pays] = "France"
OU [Pays] = "Belgique"
ALORS Afficher [Options francophones]
```

### Combinaisons complexes

```
SI ([Type] = "Entreprise" ET [CA] > 100000)
OU [Partenaire] = "Oui"
ALORS Afficher [Offre premium]
```

## Cas d'usage courants

### Formulaire adaptatif

**Scénario** : Particulier vs Professionnel

```
Section "Informations personnelles" → Toujours visible

Section "Informations entreprise"
  SI [Vous êtes] = "Un professionnel"

Section "Pièces justificatives particulier"
  SI [Vous êtes] = "Un particulier"

Section "Pièces justificatives entreprise"
  SI [Vous êtes] = "Un professionnel"
```

### Approfondissement

**Scénario** : Détails si réponse positive

```
[Avez-vous un véhicule ?] Oui/Non

Section "Détails du véhicule"
  SI [Avez-vous un véhicule ?] = "Oui"
```

### Qualification

**Scénario** : Questions selon le budget

```
[Budget] Liste déroulante

Section "Offre Starter"
  SI [Budget] < 1000

Section "Offre Business"
  SI [Budget] >= 1000 ET [Budget] < 5000

Section "Offre Enterprise"
  SI [Budget] >= 5000
```

## Bonnes pratiques

### 1. Gardez la simplicité

- Évitez les conditions trop imbriquées
- Préférez plusieurs sections simples

### 2. Testez tous les chemins

- Vérifiez chaque combinaison
- Assurez-vous qu'aucun cas n'est oublié

### 3. Informez l'utilisateur

- Expliquez pourquoi certaines sections apparaissent
- Utilisez des titres de section explicites

### 4. Attention aux champs obligatoires

- Un champ obligatoire dans une section masquée ne bloquera pas
- Vérifiez la cohérence de vos validations

## Limites

- Les conditions s'appliquent aux **sections**, pas aux modules individuels
- Maximum 10 conditions par section
- Pas de boucles (une section ne peut pas dépendre d'elle-même)

## Prochaines étapes

- [Validation des champs](/fr/features/validation) - Règles de validation
- [Workflows](/fr/features/workflows) - Automatisation avancée
