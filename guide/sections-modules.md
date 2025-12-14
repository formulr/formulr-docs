---
title: Sections et modules
description: Organisez votre formulaire avec des sections et ajoutez des champs avec les modules.
---

# Sections et modules

## Sections

Les sections permettent d'organiser visuellement votre formulaire en regroupant les champs par thème.

### Ajouter une section

1. Cliquez sur **"Ajouter une section"** en bas de l'éditeur
2. La section apparaît avec un nom par défaut
3. Cliquez sur le nom pour le modifier

### Actions sur une section

Survolez une section pour voir les actions disponibles :

| Action | Description |
|--------|-------------|
| ✏️ **Renommer** | Modifier le titre de la section |
| ⚙️ **Paramètres** | Configuration avancée |
| 📋 **Dupliquer** | Copier la section avec ses modules |
| 🗑️ **Supprimer** | Retirer la section |

### Paramètres de section

- **Titre** : affiché aux utilisateurs
- **Description** : texte explicatif (optionnel)
- **Collapsible** : permet de replier la section

### Réorganiser les sections

- Glissez-déposez depuis le sommaire (panneau droit)
- Ou utilisez les flèches de réorganisation

## Modules

Les modules sont les champs de saisie de votre formulaire.

### Ajouter un module

1. Cliquez sur **"Ajouter un module"** dans une section
2. La bibliothèque de modules s'ouvre
3. Cliquez sur le type de module souhaité
4. Le module est ajouté à la section

### Types de modules disponibles

#### Saisie de texte

| Module | Usage |
|--------|-------|
| **Texte court** | Nom, prénom, ville... |
| **Texte long** | Commentaires, descriptions |
| **Email** | Avec validation automatique |
| **Téléphone** | Avec formatage |
| **Nombre** | Valeurs numériques |

#### Dates et heures

| Module | Usage |
|--------|-------|
| **Date** | Sélecteur de date |
| **Date et heure** | Date avec horaire |
| **Plage de dates** | Période du/au |

#### Choix

| Module | Usage |
|--------|-------|
| **Liste déroulante** | Choix unique dans une liste |
| **Boutons radio** | Choix unique visible |
| **Cases à cocher** | Choix multiples |
| **Oui/Non** | Question binaire |

#### Fichiers

| Module | Usage |
|--------|-------|
| **Upload de fichier** | Document unique |
| **Upload multiple** | Plusieurs documents |
| **Photo** | Capture ou upload d'image |

#### Spéciaux

| Module | Usage |
|--------|-------|
| **Signature** | Zone de signature manuscrite |
| **Tableau** | Données tabulaires |
| **Informations de contact** | Bloc coordonnées complet |
| **Adresse** | Avec autocomplétion |
| **IBAN** | Avec validation |

### Configurer un module

Cliquez sur l'icône ⚙️ d'un module pour accéder à ses paramètres :

#### Paramètres communs

- **Libellé** : question ou instruction affichée
- **Placeholder** : texte d'exemple dans le champ
- **Texte d'aide** : indication supplémentaire
- **Obligatoire** : le champ doit être rempli
- **Identifiant** : nom technique pour les templates

#### Paramètres spécifiques

Chaque type de module a ses propres options :
- **Texte** : longueur min/max, expression régulière
- **Nombre** : valeur min/max, décimales
- **Fichier** : types acceptés, taille max
- **Liste** : options disponibles

### Réorganiser les modules

- Glissez-déposez les modules dans une section
- Déplacez entre sections via le sommaire
- L'ordre affiché est l'ordre de saisie

### Dupliquer un module

1. Survolez le module
2. Cliquez sur **Dupliquer**
3. Le module est copié avec sa configuration

::: tip Astuce
Dupliquez un module configuré pour gagner du temps, puis modifiez juste le libellé.
:::

## Bonnes pratiques

1. **Groupez logiquement** - Une section = un thème
2. **Limitez les champs** - Ne demandez que l'essentiel
3. **Utilisez les placeholders** - Donnez des exemples
4. **Pensez mobile** - Testez sur petit écran
5. **Ordonnez intelligemment** - Du plus simple au plus complexe

## Prochaines étapes

- [Types de modules détaillés](/fonctionnalites/modules)
- [Validation des champs](/fonctionnalites/validation)
- [Logique conditionnelle](/fonctionnalites/logique-conditionnelle)
