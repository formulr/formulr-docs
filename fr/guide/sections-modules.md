---
title: Sections et modules
description: Structurez votre campagne en étapes, pages et modules, puis configurez chaque module.
---

# Sections et modules

Une campagne se structure en **étapes**, **pages** (aussi appelées sections) et **modules** (les champs de saisie).

![Éditeur de campagne : écran d'accueil, pages, étapes et bibliothèque de modules](/screenshots/campaign/editor-overview.png)

## Structurer la campagne

### Titre interne

Le nom de la campagne est un **titre interne** : il est visible uniquement par les utilisateurs de votre espace Formulr, pas par vos clients.

### Écran d'accueil

Dans le panneau de droite (onglet « Contenu »), la rubrique « Écran d'accueil » permet de personnaliser le **titre**, le **sous-titre** et la **description** visibles par vos clients.

### Pages (sections)

Chaque page constitue une section du formulaire. Elles sont listées dans le panneau « Pages » à gauche de l'éditeur.

- **Ajouter une page :** cliquez sur le « + » du panneau « Pages ».
- **Ajouter, déplacer ou renommer :** utilisez les trois points en haut à droite d'une page.

### Étapes

Cliquez sur le bouton « + » de la barre « Étapes » pour ajouter des étapes et structurer votre campagne en plusieurs étapes. Dans les paramètres d'une étape, l'option « Validation automatique » fait passer automatiquement à l'étape suivante quand l'utilisateur soumet.

::: tip Quand utiliser plusieurs étapes ?
Utilisez plusieurs étapes lorsqu'une validation par votre équipe est nécessaire entre deux phases. Voir le suivi côté dossier dans [Gérer les réponses](/fr/guide/responses#suivre-la-progression-d-un-dossier-a-plusieurs-etapes).
:::

### Publier

Une fois la campagne configurée, cliquez sur « Publier » pour la rendre accessible via le lien de partage. Après chaque modification, pensez à **republier** la campagne (voir [Publication](/fr/guide/publishing)).

## Modules

Les modules sont les éléments de votre formulaire : champs de saisie, contenus informatifs, documents, choix...

### Ajouter un module

1. Sur la page voulue, cliquez sur **« Ajouter un module »**
2. La bibliothèque de modules s'ouvre
3. Cliquez sur le type de module souhaité
4. Le module est ajouté à la page

![Bibliothèque de modules](/screenshots/campaign/module-library.png)

### Types de modules disponibles

| Catégorie | Modules |
|-----------|---------|
| **Texte** | Numéro, Texte court, Texte long |
| **Contenus informatifs** | Image, Liquid, WYSIWYG |
| **Infos perso** | Informations de contact |
| **Structure** | Consentement RGPD, Séparateur |
| **Module document** | Document, Documents à télécharger, Signature électronique |
| **Choix** | Case à cocher, Liste choix Multiple, Oui / Non |
| **Date** | Date |
| **Autre** | iFrame, Paiement |

[Détail de chaque type de module →](/fr/features/modules)

### Configurer un module

Cliquez sur un module pour afficher ses paramètres dans le panneau de droite. Chaque module dispose de ses propres options de configuration.

![Paramètres d'un module](/screenshots/campaign/module-settings.png)

Pour un texte court, par exemple :

- **Validation :** rendre le module **obligatoire** (« Requis ») ou **répétable** (« Répétable »), et définir ses règles de saisie (nombre minimum et maximum de caractères).
- **Avancé :** l'« Identifiant du module » est un nom technique utilisé pour les intégrations et l'API.
- **Conditions d'affichage :** « Ajouter une condition » permet d'afficher ou de masquer le module en fonction des réponses du client (voir [Logique conditionnelle](/fr/features/conditional-logic)).
- **Supprimer le module :** le bouton en bas du panneau retire le module.

### Réorganiser et dupliquer

- Glissez-déposez les modules dans une page : l'ordre affiché est l'ordre de saisie.
- Les icônes à droite du module sélectionné permettent de le dupliquer ou de le supprimer.

::: tip Astuce
Dupliquez un module configuré pour gagner du temps, puis modifiez juste le libellé.
:::

## Bonnes pratiques

1. **Groupez logiquement** - Une page = un thème
2. **Limitez les champs** - Ne demandez que l'essentiel
3. **Pensez mobile** - Testez sur petit écran
4. **Ordonnez intelligemment** - Du plus simple au plus complexe
5. **Republiez** - Après chaque modification, publiez à nouveau pour que le lien de partage affiche la dernière version

## Prochaines étapes

- [Types de modules détaillés](/fr/features/modules)
- [Validation des champs](/fr/features/validation)
- [Logique conditionnelle](/fr/features/conditional-logic)
- [Publication](/fr/guide/publishing)
