# Captures d'écran à réaliser pour la documentation Formulr

## 🔴 PRIORITÉ HAUTE - Interfaces complexes (à faire en premier)

### 1. Éditeur de workflow visuel
**Fichier:** `guide/workflow.md`
**Captures nécessaires:**
- Interface complète avec panneau actions (gauche) + canvas (centre) + propriétés
- Workflow simple avec 2-3 nœuds connectés (Start → État → Condition → End)

**Importance:** Le concept de workflow visuel est difficile à comprendre sans voir l'interface. Les utilisateurs doivent visualiser comment glisser-déposer les nœuds et créer des connexions.

---

### 2. Workflow avec branches conditionnelles
**Fichier:** `features/workflows.md`
**Capture nécessaire:**
- Workflow complet dans l'éditeur avec branches IF/THEN/ELSE
- Montrer comment les conditions se divisent en plusieurs chemins

**Importance:** Les workflows conditionnels sont un concept avancé. Une capture d'écran aide à comprendre comment les données circulent et comment les décisions sont prises.

---

### 3. Configuration logique conditionnelle
**Fichier:** `features/conditional-logic.md`
**Capture nécessaire:**
- Panneau de paramètres d'une section avec "Affichage conditionnel" activé
- Constructeur de conditions avec les champs, opérateurs et valeurs

**Importance:** La logique conditionnelle est un concept abstrait. Les utilisateurs ont besoin de voir l'interface pour comprendre où et comment configurer les conditions.

---

### 4. Éditeur de template PDF avec Liquid
**Fichier:** `features/pdf-templates.md`
**Captures nécessaires:**
- Éditeur de code avec coloration syntaxique Liquid
- Panneau "Variables" ouvert pour montrer les variables disponibles
- Aperçu du PDF généré dans le panneau de droite (vue split)

**Importance:** Les utilisateurs doivent comprendre comment insérer des variables, positionner les zones de signature, et prévisualiser le résultat.

---

## 🟠 PRIORITÉ MOYENNE - Processus étape par étape

### 5. Création de campagne
**Fichier:** `guide/create-campaign.md`
**Capture nécessaire:**
- Écran d'accueil de la campagne dans l'éditeur
- Champs Titre, Sous-titre, Description
- Paramètres rapides en haut (Owner, Deadline)

**Importance:** C'est la première expérience de création. Une capture aide les nouveaux utilisateurs à s'orienter rapidement.

---

### 6. Bibliothèque de modules
**Fichier:** `guide/sections-modules.md`
**Capture nécessaire:**
- Liste complète des types de modules avec leurs icônes
- Catégories visibles (Texte, Dates, Choix, Fichiers, Spéciaux)

**Importance:** Les utilisateurs doivent voir la variété des modules disponibles pour choisir le bon type pour leurs besoins.

---

### 7. Configuration d'un module
**Fichier:** `guide/sections-modules.md`
**Capture nécessaire:**
- Panneau de configuration d'un module
- Paramètres communs (Label, Placeholder, Texte d'aide, Requis, Identifiant)
- Options spécifiques selon le type de module

**Importance:** Les utilisateurs doivent comprendre comment personnaliser chaque module avec ses nombreuses options.

---

### 8. Liste des réponses avec filtres
**Fichier:** `guide/responses.md`
**Capture nécessaire:**
- Vue tableau avec colonnes (Répondant, Statut, Date, Progression, Owner)
- Filtres par statut actifs
- Badges de couleur pour chaque statut

**Importance:** C'est l'interface principale de gestion. Les utilisateurs doivent voir comment organiser et filtrer les nombreuses réponses.

---

### 9. Vue détaillée d'une réponse
**Fichier:** `guide/responses.md`
**Capture nécessaire:**
- En-tête avec les informations du répondant et le statut
- Contenu organisé par sections
- Panneau latéral avec historique et notes

**Importance:** Les utilisateurs passent beaucoup de temps dans cette vue pour traiter les réponses. Ils doivent comprendre l'organisation des informations.

---

### 10. Interface de traduction
**Fichier:** `features/translations.md`
**Capture nécessaire:**
- Vue côte à côte (texte original à gauche, traduction à droite)
- Indicateurs de progression (champs traduits / total)
- Bouton "Traduire avec IA" visible

**Importance:** L'interface de traduction est spécifique et les utilisateurs doivent comprendre le workflow de traduction.

---

## 🟡 PRIORITÉ BASSE - Configurations spécifiques

### 11. Options de deadline
**Fichier:** `guide/configuration.md`
**Capture nécessaire:**
- Onglet Paramètres avec les trois options de deadline
- Options visibles : Aucune deadline, Date fixe, Date calculée
- Champs de configuration pour chaque type

**Importance:** Les utilisateurs ont besoin de visualiser les différents types de deadline pour choisir le bon.

---

### 12. Zone de signature dans template PDF
**Fichier:** `features/electronic-signature.md`
**Capture nécessaire:**
- Code Liquid de la zone de signature
- Rendu visuel de la zone dans le PDF généré

**Importance:** La syntaxe de signature est technique. Une capture montre à quoi ressemble le code et le résultat.

---

### 13. Configuration des règles de validation
**Fichier:** `features/validation.md`
**Capture nécessaire:**
- Options de validation pour un champ texte (longueur min/max, regex)
- Champ de message d'erreur personnalisé

**Importance:** Les règles de validation ont de nombreuses options. Une capture aide à comprendre où les configurer.

---

### 14. Configuration d'un webhook
**Fichier:** `features/api-webhooks.md`
**Capture nécessaire:**
- Champs URL, Événements à écouter, Secret
- Liste des événements disponibles avec cases à cocher

**Importance:** La configuration des webhooks est technique. Une capture rassure les développeurs sur la simplicité de l'interface.

---

### 15. Module de paiement Stripe
**Fichier:** `features/stripe.md`
**Capture nécessaire:**
- Module de paiement dans l'éditeur
- Options de configuration (montant fixe/variable, devise, méthodes de paiement)

**Importance:** L'intégration de paiement est une fonctionnalité importante. Les utilisateurs doivent voir comment l'ajouter facilement.

---

## ❌ Captures NON recommandées

Ne pas créer de captures pour:
- Dashboard principal (trop simple, pas de valeur ajoutée)
- Onglets de navigation (évident et intuitif)
- Boutons simples comme "Publier", "Nouveau"
- Messages d'erreur standards
- Exports CSV/Excel (format standard)

---

## 📋 Recommandations techniques

### Cohérence visuelle
- Utiliser le même compte/campagne pour toutes les captures
- Maintenir une cohérence dans les données de test

### Annotations
- Ajouter des flèches ou des encadrés pour mettre en évidence les éléments importants
- Utiliser des couleurs cohérentes avec la charte Formulr (#0E245D, #71E1C3, #A089CA)

### Format et qualité
- Résolution : Haute résolution mais optimisée pour le web
- Format : WebP ou PNG optimisé
- Ratio : Utiliser le ratio natif de l'interface, ne pas déformer

### Langue
- Toutes les captures en **français** pour correspondre à la documentation principale
- Créer des versions anglaises ultérieurement si nécessaire

### Données de test
- Utiliser des données réalistes mais anonymisées
- Exemples : "Entreprise Demo", "Jean Dupont", dates cohérentes
- Éviter les données sensibles ou personnelles

### Nommage des fichiers
Suivre cette convention:
```
/public/images/screenshots/[section]-[feature]-[numero].png
```

Exemples:
- `/public/images/screenshots/workflow-editor-interface.png`
- `/public/images/screenshots/workflow-conditional-branches.png`
- `/public/images/screenshots/pdf-template-editor.png`
- `/public/images/screenshots/conditional-logic-config.png`

---

## 📝 Checklist de progression

### Priorité Haute (4 captures)
- [ ] 1. Éditeur de workflow visuel
- [ ] 2. Workflow avec branches conditionnelles
- [ ] 3. Configuration logique conditionnelle
- [ ] 4. Éditeur de template PDF

### Priorité Moyenne (6 captures)
- [ ] 5. Création de campagne
- [ ] 6. Bibliothèque de modules
- [ ] 7. Configuration d'un module
- [ ] 8. Liste des réponses avec filtres
- [ ] 9. Vue détaillée d'une réponse
- [ ] 10. Interface de traduction

### Priorité Basse (5 captures)
- [ ] 11. Options de deadline
- [ ] 12. Zone de signature dans template PDF
- [ ] 13. Configuration des règles de validation
- [ ] 14. Configuration d'un webhook
- [ ] 15. Module de paiement Stripe

---

## 🎯 Ordre de réalisation recommandé

1. **Session 1 - Workflows** (captures 1-2)
   - Éditeur de workflow
   - Workflow avec conditions

2. **Session 2 - Éditeur et logique** (captures 3-4, 6-7)
   - Logique conditionnelle
   - Template PDF
   - Bibliothèque de modules
   - Configuration module

3. **Session 3 - Gestion des réponses** (captures 5, 8-9)
   - Création campagne
   - Liste des réponses
   - Détail réponse

4. **Session 4 - Fonctionnalités avancées** (captures 10-15)
   - Traduction
   - Configurations spécifiques

---

**Date de création:** 16 décembre 2024
**Dernière mise à jour:** 16 décembre 2024
