---
title: Intégration Yousign
description: Configuration avancée de l'intégration Yousign pour la signature électronique.
---

# Intégration Yousign

Guide complet pour configurer et utiliser l'intégration Yousign dans Formulr.

## Présentation

[Yousign](https://yousign.com) est une solution française de signature électronique certifiée eIDAS. L'intégration avec Formulr permet de faire signer des documents directement depuis vos processus.

## Configuration

L'intégration Yousign est native dans Formulr. Vous n'avez pas besoin de créer votre propre compte Yousign, tout est géré par Formulr.

### Activer la signature électronique

1. **Paramètres** > **Signature électronique**
2. Activez la fonctionnalité
3. Sélectionnez l'environnement :
   - **Sandbox** : Pour les tests (signatures sans valeur légale)
   - **Production** : Pour les signatures réelles
4. Enregistrez

## Environnements

### Sandbox (Test)

- Signatures gratuites et illimitées
- Pas de valeur légale
- Pour développer et tester
- Documents marqués "TEST"

### Production

- Signatures payantes (selon votre forfait Yousign)
- Valeur légale complète
- Pour les documents officiels

::: warning Important
Basculez en Production uniquement quand vos tests sont validés.
:::

## Création de templates avec signature

### Zones de signature

Dans vos templates PDF, insérez des zones de signature :

```liquid
<div style="margin-top: 50px;">
  <p>Lu et approuvé :</p>
  {% raw %}{{s1|signature|200|100}}{% endraw %}
  <p>{{ campaignResponse.user.fullName }}</p>
  <p>Le {{ "now" | date: "%d/%m/%Y" }}</p>
</div>
```

### Syntaxe détaillée

```
{{s[N]|signature|[largeur]|[hauteur]}}
```

| Paramètre | Type | Description |
|-----------|------|-------------|
| `s[N]` | string | Identifiant du signataire (s1, s2, s3...) |
| `largeur` | number | Largeur en pixels (min: 100, max: 400) |
| `hauteur` | number | Hauteur en pixels (min: 50, max: 200) |

### Signataires multiples

Pour un document avec plusieurs signataires :

```liquid
<table style="width: 100%; margin-top: 50px;">
  <tr>
    <td style="width: 50%; text-align: center;">
      <p>Le client :</p>
      {% raw %}{{s1|signature|180|80}}{% endraw %}
      <p>{{ campaignResponse.user.fullName }}</p>
    </td>
    <td style="width: 50%; text-align: center;">
      <p>Le conseiller :</p>
      {% raw %}{{s2|signature|180|80}}{% endraw %}
      <p>Nom du conseiller</p>
    </td>
  </tr>
</table>
```

### Ordre de signature

Les signataires sont sollicités dans l'ordre numérique :

1. `s1` reçoit la demande de signature
2. Une fois `s1` signé, `s2` reçoit la demande
3. Et ainsi de suite...

Pour une signature simultanée, contactez le support.

## Processus de signature

### Déclencher une signature

#### Manuellement

1. Ouvrez le détail d'une réponse
2. Cliquez sur **Générer le document**
3. Vérifiez le PDF généré
4. Cliquez sur **Envoyer pour signature**
5. Renseignez les informations des signataires :
   - Email (obligatoire)
   - Prénom et nom
   - Téléphone (optionnel, pour SMS)
6. Validez

#### Via workflow

Automatisez l'envoi en signature :

```
[Statut change vers "Validé"]
    ↓
[Générer document "Contrat"]
    ↓
[Envoyer pour signature]
    - s1: email du répondant
    - s2: conseiller@entreprise.fr
```

### Expérience signataire

1. Le signataire reçoit un email de Yousign
2. Il clique sur le lien sécurisé
3. Il visualise le document
4. Il appose sa signature (dessin, texte ou upload)
5. Il confirme
6. Le document est horodaté

### Suivi

Dans Formulr, suivez l'état des signatures :

| État | Signification |
|------|---------------|
| **Envoyé** | En attente du premier signataire |
| **En cours** | Au moins un signataire a signé |
| **Signé** | Tous les signataires ont signé |
| **Refusé** | Un signataire a refusé |
| **Expiré** | Délai de signature dépassé |

## Options avancées

### Authentification renforcée

Pour les documents sensibles, activez la vérification par SMS :

1. Dans la demande de signature
2. Cochez "Authentification SMS"
3. Renseignez le numéro de téléphone

### Délai d'expiration

Par défaut, les demandes expirent après 30 jours.

Personnalisez dans les paramètres de campagne :
- Minimum : 1 jour
- Maximum : 90 jours

### Rappels automatiques

Yousign envoie des rappels automatiques :

- J+3 : Premier rappel
- J+7 : Deuxième rappel
- J+14 : Rappel urgent

### Message personnalisé

Personnalisez l'email envoyé aux signataires :

```
Objet: Votre contrat à signer - {{ campaign.title }}

Bonjour {{ signer.firstName }},

Merci de signer le document "{{ document.name }}"
en cliquant sur le bouton ci-dessous.

Ce document concerne : {{ campaignResponse.reference }}

Cordialement,
{{ company.name }}
```

## Document signé

### Récupération

Une fois signé, le document est :

1. Automatiquement téléchargé dans Formulr
2. Attaché à la réponse
3. Disponible dans l'onglet "Documents"

### Certificat de signature

Yousign fournit un certificat contenant :

- Identité des signataires
- Horodatage de chaque signature
- Hash du document
- Preuve d'intégrité

### Archivage

Les documents signés sont archivés :

- Dans Formulr (selon votre rétention)
- Chez Yousign (10 ans minimum)

## Webhooks Yousign

Formulr reçoit les webhooks Yousign pour :

- Mise à jour des statuts en temps réel
- Récupération automatique du PDF signé
- Déclenchement des workflows

## Dépannage

### Erreurs courantes

| Erreur | Cause | Solution |
|--------|-------|----------|
| "API key invalid" | Clé incorrecte | Vérifiez la clé dans les paramètres |
| "No signature field" | Pas de zone `{{sX|signature}}` | Ajoutez les zones dans le template |
| "Invalid email" | Email signataire invalide | Vérifiez le format de l'email |
| "Quota exceeded" | Forfait Yousign épuisé | Contactez Yousign |

### Vérifier la connexion

1. **Paramètres** > **Intégrations** > **Yousign**
2. Cliquez sur **Tester la connexion**
3. Vérifiez le résultat

### Logs

Consultez les logs des signatures :

1. Détail de la réponse
2. Onglet **Activité**
3. Filtrez par "Signature"

## Conformité

### Valeur légale

Les signatures Yousign sont :

- ✅ Conformes au règlement eIDAS
- ✅ Reconnues en France et en Europe
- ✅ Équivalentes à une signature manuscrite
- ✅ Recevables en justice

### RGPD

- Les données sont traitées en France/UE
- Yousign est certifié ISO 27001
- Politique de suppression conforme

## Prochaines étapes

- [Signature électronique](/fonctionnalites/signature-electronique) - Guide général
- [Templates PDF](/fonctionnalites/templates-pdf) - Créer des documents
- [Workflows](/fonctionnalites/workflows) - Automatiser les signatures
