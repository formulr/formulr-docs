---
title: Intégration Stripe
description: Acceptez des paiements dans vos formulaires grâce à l'intégration Stripe.
---

# Intégration Stripe

Formulr s'intègre avec Stripe pour vous permettre de collecter des paiements directement dans vos formulaires.

## Cas d'usage

- **Inscriptions payantes** : Événements, formations, abonnements
- **Commandes** : Produits, services
- **Devis acceptés** : Paiement après validation
- **Dons** : Collecte de fonds

## Configuration

L'intégration Stripe est native dans Formulr. Vous n'avez pas besoin de créer votre propre compte Stripe, tout est géré par Formulr.

### Activer les paiements

1. **Paramètres** > **Paiements**
2. Activez la fonctionnalité
3. Sélectionnez l'environnement :
   - **Test** : Pour développer (paiements fictifs)
   - **Production** : Pour les vrais paiements
4. Enregistrez

## Ajouter un paiement au formulaire

### Module Paiement

1. Dans l'éditeur de campagne, ajoutez le module **Paiement**
2. Configurez les options :

| Option | Description |
|--------|-------------|
| **Montant** | Fixe ou calculé |
| **Devise** | EUR, USD, GBP... |
| **Description** | Libellé affiché |
| **Modes de paiement** | Carte, SEPA, etc. |

### Montant fixe

Pour un prix unique :

```
Montant : 49.00 €
Description : Inscription formation
```

### Montant variable

Pour un montant basé sur les réponses :

```
Montant : {{ responses.quantite.value[0] * 25 }}
Description : {{ responses.quantite.value[0] }} articles à 25€
```

### Montant libre

Laissez l'utilisateur choisir :

```
Type : Montant libre
Minimum : 5 €
Suggestion : 20 €
Maximum : 500 €
```

## Modes de paiement

### Carte bancaire

Accepte :
- Visa
- Mastercard
- American Express
- Cartes bancaires françaises

### Prélèvement SEPA

Pour les paiements récurrents ou différés :

1. L'utilisateur saisit son IBAN
2. Un mandat SEPA est créé
3. Le prélèvement est effectué

### Apple Pay / Google Pay

Paiement en un clic sur mobile :

1. Activez dans les paramètres Stripe
2. Les boutons apparaissent automatiquement

## Processus de paiement

### Flux standard

1. L'utilisateur remplit le formulaire
2. À l'étape paiement, il entre ses informations
3. Stripe sécurise la transaction (3D Secure si nécessaire)
4. Le paiement est confirmé
5. La réponse est enregistrée

### Paiement différé

Pour payer après validation :

1. Le formulaire est soumis sans paiement
2. Vous validez la demande
3. Un lien de paiement est envoyé
4. L'utilisateur paie
5. Le statut est mis à jour

### Paiement en plusieurs fois

Avec Stripe :

- 3x ou 4x sans frais (selon votre forfait)
- Configuration dans Stripe Dashboard
- Automatiquement proposé si activé

## Suivi des paiements

### Dans Formulr

Chaque réponse affiche :

| Information | Description |
|-------------|-------------|
| **Statut** | En attente, Payé, Échoué, Remboursé |
| **Montant** | Somme payée |
| **Date** | Date du paiement |
| **Référence** | ID de transaction Stripe |

### Dans Stripe

Retrouvez tous les détails :

1. Dashboard Stripe > **Paiements**
2. Recherchez par référence ou email
3. Consultez l'historique complet

## Reçus et factures

### Reçu automatique

Stripe envoie automatiquement un reçu à l'email du payeur.

### Facture personnalisée

Générez une facture depuis Formulr :

1. Créez un template PDF de facture
2. Incluez les variables de paiement :

```liquid
Facture n° {{ payment.reference }}
Date : {{ payment.date | date: "%d/%m/%Y" }}

{{ payment.description }}
Montant : {{ payment.amount }} {{ payment.currency }}

Payé par carte le {{ payment.date | date: "%d/%m/%Y" }}
```

## Workflows avec paiement

### Notification de paiement

```
[Paiement reçu]
    ↓
[Envoyer email de confirmation]
[Notifier l'équipe]
```

### Traitement conditionnel

```
[Paiement reçu]
    ↓
[Si montant > 1000]
    → [Assigner à VIP]
    → [Générer facture premium]
[Sinon]
    → [Traitement standard]
```

### Paiement échoué

```
[Paiement échoué]
    ↓
[Envoyer lien de paiement alternatif]
[Notifier support]
```

## Remboursements

### Depuis Formulr

1. Ouvrez la réponse concernée
2. Onglet **Paiement**
3. Cliquez sur **Rembourser**
4. Choisissez : Total ou Partiel
5. Confirmez

### Depuis Stripe

Les remboursements effectués dans Stripe sont synchronisés automatiquement.

## Environnement de test

### Cartes de test

Utilisez ces numéros en mode test :

| Numéro | Résultat |
|--------|----------|
| `4242 4242 4242 4242` | Paiement réussi |
| `4000 0000 0000 0002` | Paiement refusé |
| `4000 0000 0000 3220` | 3D Secure requis |

### Dates et codes

- **Date** : Toute date future
- **CVC** : 3 chiffres quelconques
- **Code postal** : 5 chiffres quelconques

## Sécurité

### PCI DSS

- Formulr ne stocke jamais les données de carte
- Tout passe par les serveurs sécurisés de Stripe
- Conformité PCI DSS automatique

### 3D Secure

- Activé automatiquement selon la banque
- Réduit la fraude et les contestations
- Transfert de responsabilité vers la banque

### Webhooks

Formulr utilise les webhooks Stripe pour :

- Confirmation des paiements en temps réel
- Gestion des paiements en attente (SEPA, etc.)
- Notification des remboursements

## Tarification

Les frais de paiement sont inclus dans votre abonnement Formulr. Consultez notre [page tarifs](https://formulr.fr/pricing) pour plus de détails.

## Dépannage

### Erreurs courantes

| Erreur | Cause | Solution |
|--------|-------|----------|
| "Card declined" | Carte refusée | Demandez une autre carte au client |
| "Insufficient funds" | Provision insuffisante | Le client doit approvisionner |
| "3D Secure failed" | Authentification échouée | Réessayer ou autre carte |

### Vérifier la configuration

1. **Paramètres** > **Paiements**
2. Vérifiez que l'environnement est correctement sélectionné
3. Testez avec une carte de test en mode Test

## Prochaines étapes

- [Workflows](/fr/features/workflows) - Automatiser après paiement
- [Templates PDF](/fr/features/pdf-templates) - Factures personnalisées
- [Notifications](/fr/features/notifications) - Emails de confirmation
