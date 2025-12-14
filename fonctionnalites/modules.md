---
title: Types de modules
description: Découvrez tous les types de modules disponibles dans Formulr pour créer vos formulaires.
---

# Types de modules

Formulr propose plus de 15 types de modules pour créer des formulaires adaptés à tous les besoins.

## Saisie de texte

### Texte court

Champ de saisie sur une ligne.

**Usage** : Nom, prénom, ville, entreprise...

**Options** :
- Longueur minimum/maximum
- Expression régulière (validation personnalisée)
- Masque de saisie

---

### Texte long (Textarea)

Zone de texte multiligne.

**Usage** : Commentaires, descriptions, messages...

**Options** :
- Nombre de lignes affichées
- Longueur maximum
- Compteur de caractères

---

### Email

Champ avec validation d'adresse email.

**Usage** : Collecte d'emails de contact

**Validation automatique** :
- Format email vérifié
- Domaines bloqués (optionnel)

---

### Téléphone

Champ avec formatage automatique.

**Usage** : Numéros de téléphone

**Options** :
- Format international
- Indicatif pays par défaut
- Validation du format

---

### Nombre

Champ numérique.

**Usage** : Quantités, montants, âge...

**Options** :
- Valeur minimum/maximum
- Nombre de décimales
- Pas d'incrémentation
- Préfixe/suffixe (€, %, etc.)

## Dates

### Date

Sélecteur de date avec calendrier.

**Usage** : Date de naissance, échéances...

**Options** :
- Format d'affichage
- Date minimum/maximum
- Jours désactivés (week-ends, fériés)

---

### Date et heure

Date avec sélection de l'heure.

**Usage** : Rendez-vous, événements...

**Options** :
- Format 12h/24h
- Intervalle (15min, 30min, 1h)
- Plages horaires disponibles

---

### Plage de dates

Sélection d'une période (du/au).

**Usage** : Congés, réservations, contrats...

**Options** :
- Durée minimum/maximum
- Chevauchements autorisés

## Choix

### Liste déroulante (Select)

Menu déroulant avec choix unique.

**Usage** : Sélection parmi une liste prédéfinie

**Options** :
- Liste des options
- Recherche dans la liste
- Option par défaut
- Choix "Autre" avec saisie libre

---

### Boutons radio

Choix unique avec options visibles.

**Usage** : Peu d'options (2-5), choix importants

**Options** :
- Affichage vertical/horizontal
- Images pour les options
- Option par défaut

---

### Cases à cocher (Checkbox)

Choix multiples.

**Usage** : Sélection multiple, acceptations

**Options** :
- Nombre min/max de sélections
- Options exclusives
- "Tout sélectionner"

---

### Oui/Non (Toggle)

Question binaire.

**Usage** : Acceptations, confirmations simples

**Options** :
- Libellés personnalisés (Oui/Non, Accepte/Refuse)
- Valeur par défaut

## Fichiers

### Upload de fichier

Upload d'un document unique.

**Usage** : Pièce d'identité, justificatif...

**Options** :
- Types acceptés (PDF, images, etc.)
- Taille maximum
- Aperçu automatique

---

### Upload multiple

Upload de plusieurs fichiers.

**Usage** : Dossier complet, photos multiples

**Options** :
- Nombre min/max de fichiers
- Taille totale maximum
- Types par fichier

---

### Photo / Caméra

Capture ou upload d'image.

**Usage** : Selfie, photo de document

**Options** :
- Caméra uniquement / galerie autorisée
- Résolution minimum
- Recadrage

## Modules spéciaux

### Signature

Zone de signature manuscrite.

**Usage** : Validation, engagement légal

**Options** :
- Dimensions de la zone
- Couleur du trait
- Signature obligatoire

::: tip
La signature peut être intégrée dans les templates PDF pour les documents à signer électroniquement.
:::

---

### Tableau

Données tabulaires avec lignes dynamiques.

**Usage** : Liste de produits, participants, détails

**Options** :
- Colonnes (nom, type, largeur)
- Nombre min/max de lignes
- Ligne par défaut

---

### Informations de contact

Bloc complet de coordonnées.

**Usage** : Fiche contact, coordonnées complètes

**Inclut** :
- Civilité
- Nom / Prénom
- Email
- Téléphone
- Adresse

---

### Adresse

Champ d'adresse avec autocomplétion.

**Usage** : Adresse postale

**Options** :
- Autocomplétion (Google Places)
- Champs séparés ou unifié
- Pays autorisés

---

### IBAN

Saisie de coordonnées bancaires.

**Usage** : Prélèvements, virements

**Validation** :
- Format IBAN vérifié
- Clé de contrôle
- Pays autorisés

---

### Bloc HTML

Contenu personnalisé (texte, images).

**Usage** : Instructions, informations, séparateurs

**Options** :
- Éditeur WYSIWYG
- HTML brut
- Variables dynamiques

## Paramètres communs

Tous les modules partagent ces options :

| Paramètre | Description |
|-----------|-------------|
| **Libellé** | Question affichée |
| **Placeholder** | Texte d'exemple |
| **Texte d'aide** | Indication supplémentaire |
| **Obligatoire** | Doit être rempli |
| **Identifiant** | Nom technique unique |
| **Largeur** | Demi-largeur ou pleine largeur |

## Prochaines étapes

- [Validation des champs](/fonctionnalites/validation)
- [Logique conditionnelle](/fonctionnalites/logique-conditionnelle)
- [Sections et modules](/guide/sections-modules)
