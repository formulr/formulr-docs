---
title: Types de modules
description: Découvrez tous les types de modules disponibles dans Formulr pour créer vos formulaires.
---

# Types de modules

Formulr propose 17 types de modules pour construire des formulaires adaptés à tous les besoins : saisie de texte, choix, upload de fichiers, contenu d'affichage, et plus encore.

## Saisie de texte

### Texte court

Champ de saisie sur une ligne.

**Usage** : Nom, prénom, ville, entreprise...

**Options** :
- Nombre minimum/maximum de caractères
- Texte indicatif (placeholder)
- Répétable (permettre plusieurs entrées)

---

### Texte long (Textarea)

Zone de texte multiligne.

**Usage** : Commentaires, descriptions, messages...

**Options** :
- Nombre maximum de caractères
- Texte indicatif (placeholder)
- Répétable (permettre plusieurs entrées)

---

### Nombre

Champ de saisie numérique.

**Usage** : Quantités, montants, âge...

**Options** :
- Valeur minimum/maximum
- Nombre minimum/maximum de chiffres
- Texte indicatif (placeholder)
- Répétable (permettre plusieurs entrées)

## Date

### Date

Champ de saisie de date avec format configurable.

**Usage** : Date de naissance, échéances, événements...

**Options** :
- Structure de la date : `JJ/MM/AAAA`, `MM/JJ/AAAA` ou `AAAA/MM/JJ`
- Séparateur de date : `/`, `-` ou `.`
- Répétable (permettre plusieurs entrées)

## Choix

### Choix multiple

Module de choix polyvalent supportant plusieurs modes d'affichage et sources de données.

**Usage** : Sondages, sélection de produits, filtrage par catégorie...

**Modes d'affichage** :
- **Boutons** — Boutons radio (choix unique) ou cases à cocher (choix multiples), disposition verticale ou horizontale
- **Liste déroulante** — Menu select avec recherche

**Source de données** :
- **Statique** — Liste d'options prédéfinies
- **API** — Chargement dynamique depuis un endpoint externe (URL, méthode, headers, chemin des données)

**Options** :
- Sélection unique ou multiple
- Contraintes de sélection (nombre exact, plage min/max)
- Option "Autre" avec saisie libre

---

### Oui/Non

Choix binaire affiché sous forme de boutons radio.

**Usage** : Consentements, confirmations simples...

## Fichiers

### Document

Upload d'un fichier unique avec validation.

**Usage** : Pièce d'identité, justificatif de domicile, CV...

**Options** :
- Types de fichiers acceptés (PDF, images, etc.)
- Taille maximum (1–20 Mo)
- Fichier source (document pré-chargé disponible au téléchargement)
- Traitement par IA (si configuré)

---

### Collection de documents

Galerie dynamique de documents avec règles d'affichage configurables.

**Usage** : Bibliothèque de documents, accès conditionnel aux fichiers...

**Deux sections** :
- **Fichiers génériques** — Documents pré-uploadés affichés en référence
- **Fichiers spécifiques** — Documents correspondant à des règles configurables ou uploads manuels

**Filtrage par règles** :
- Correspondance par tag, type, nom de fichier ou date de création
- Stratégie de correspondance : au moins une règle ou toutes les règles
- Tri par date de création, libellé ou nom de fichier

**Options** :
- Limite d'affichage (1–20 documents)
- Types de fichiers autorisés
- Taille maximum

## Affichage & Contenu

### WYSIWYG

Bloc de contenu texte riche (affichage uniquement, pas de saisie utilisateur).

**Usage** : Instructions, conditions générales, informations formatées...

**Fonctionnalités** :
- Éditeur de texte riche complet
- Support du formatage HTML
- Affichage de contenu dynamique

---

### Image

Affichage d'une image dans le formulaire (pas de saisie utilisateur).

**Usage** : Branding, schémas explicatifs, contenu visuel...

**Options** :
- Largeur (1–100% du conteneur)
- Alignement centré
- Formats acceptés : PNG, JPG, JPEG, GIF (max 2 Mo)

---

### Séparateur

Séparateur visuel entre les sections du formulaire (pas de saisie utilisateur).

**Usage** : Organisation des sections, regroupement visuel...

**Options** :
- Libellé optionnel

---

### Liquid

Bloc de contenu dynamique utilisant le langage de template Liquid (affichage uniquement).

**Usage** : Messages personnalisés, contenu conditionnel, substitution de variables...

**Fonctionnalités** :
- Syntaxe complète des templates Liquid
- Éditeur de code avec coloration syntaxique
- Interpolation de variables depuis les données du formulaire

## Modules spéciaux

### Informations de contact

Formulaire de contact pré-construit avec des champs activables individuellement.

**Usage** : Inscription, capture de leads, fiches participants...

**Champs disponibles** (chacun peut être affiché/masqué et rendu obligatoire) :
- Entreprise
- Civilité
- Prénom / Nom
- Date de naissance (avec format de date configurable)
- Lieu de naissance
- Téléphone
- Email
- Adresse / Code postal / Ville
- Pays
- Nationalité

**Options** :
- Répétable (permettre plusieurs entrées de contact)

---

### Signature

Collecte de signature numérique avec workflow de signature de documents.

**Usage** : Signature de contrats, workflows de validation, documents légaux...

**Types de signature** :
- **Générique** — L'utilisateur actuel du formulaire signe
- **Spécifique au client** — Signataires désignés (depuis un module contact ou saisie manuelle)

**Fonctionnalités** :
- Upload de documents PDF à signer
- Éditeur visuel de placement de signature (position par page)
- Support multi-signataires
- Suivi du statut par signataire
- Texte du bouton personnalisable

::: tip
Les signatures sont intégrées avec des services de signature électronique externes pour les documents juridiquement contraignants.
:::

---

### Consentement RGPD

Case à cocher de conformité RGPD.

**Usage** : Consentement au traitement des données, inscription newsletter, acceptation des CGU...

**Options** :
- Texte descriptif du consentement
- Obligatoire ou facultatif

---

### Checkout

Panier d'achat et intégration de paiement.

**Usage** : Commande de produits, abonnements, dons, billetterie...

**Modes du panier** :
- **Compact** — Affichage minimaliste du panier
- **Complet** — Interface détaillée du panier

**Options** :
- Ajout automatique de produits avec quantités
- Champs de facturation requis (adresse, code postal, ville, entreprise, TVA, nom, email, pays)
- Pré-remplissage depuis l'utilisateur connecté ou un module contact
- Texte du bouton personnalisable

---

### Iframe

Intégration de contenu ou services externes.

**Usage** : Outils tiers, planification de rendez-vous, formulaires externes...

**Options** :
- URL à intégrer
- Suivi de complétion (statut en attente/terminé)

## Paramètres communs

Tous les modules de saisie partagent ces options :

| Paramètre | Description |
|-----------|-------------|
| **Libellé** | Question affichée |
| **Description** | Texte d'aide supplémentaire |
| **Obligatoire** | Doit être rempli |
| **Identifiant** | Nom technique unique |
| **Largeur** | Demi-largeur ou pleine largeur |

## Prochaines étapes

- [Validation des champs](/fr/features/validation)
- [Logique conditionnelle](/fr/features/conditional-logic)
- [Sections et modules](/fr/guide/sections-modules)
