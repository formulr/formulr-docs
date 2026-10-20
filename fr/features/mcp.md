---
title: Connecteur Claude & MCP
description: Connectez Claude ou tout client MCP à Formulr pour créer des formulaires, générer des documents et traiter les réponses.
---

# Connecteur Claude & MCP

Le connecteur Formulr permet à Claude (et à tout client compatible avec le Model Context Protocol) de travailler avec votre compte Formulr : créer des formulaires, rédiger des templates PDF, consulter et traiter les réponses.

| | |
|---|---|
| **URL du serveur** | `https://mcp.formulr.io/mcp` |
| **Transport** | Streamable HTTP (serveur MCP distant) |
| **Authentification** | OAuth 2.0 avec enregistrement dynamique des clients et PKCE |
| **Clé API** | Non requise |

## Configuration

### Claude

1. Ouvrez **Customize** > **Connectors**
2. Cliquez sur **Add custom connector**
3. Collez `https://mcp.formulr.io/mcp`
4. Cliquez sur **Connect** et connectez-vous avec votre compte Formulr

**Offres Team et Enterprise** : un administrateur de l'organisation ajoute d'abord le connecteur dans **Organization settings** > **Connectors**. Chaque membre se connecte ensuite avec son propre compte Formulr.

Le connecteur sera également disponible dans l'annuaire des connecteurs Claude.

### Autres clients MCP

**Claude Code**

```bash
claude mcp add --transport http formulr https://mcp.formulr.io/mcp
```

Lancez ensuite `/mcp` dans Claude Code et authentifiez-vous.

**ChatGPT (mode développeur)**

1. **Settings** > **Connectors** > **Advanced** > activez **Developer mode**
2. Cliquez sur **Create** et collez `https://mcp.formulr.io/mcp`
3. Connectez-vous avec votre compte Formulr

## Permissions et sécurité

- Le connecteur agit **au nom de l'utilisateur connecté** : il n'accède qu'aux entreprises et campagnes auxquelles cet utilisateur a accès dans le dashboard Formulr, avec les mêmes permissions.
- L'accès est accordé via OAuth. Vous pouvez **déconnecter** le connecteur à tout moment depuis votre client MCP pour lui retirer l'accès.
- Les outils qui modifient ou suppriment des données sont annotés comme tels : le client vous demande une confirmation avant de les exécuter.
- Formulr ne stocke pas vos conversations. Seuls les paramètres de chaque appel d'outil sont envoyés à l'API Formulr.

## Outils disponibles

Le connecteur expose les 42 outils ci-dessous. Les outils **Lecture** ne modifient jamais les données, les outils **Création** en ajoutent, les outils **Modification** remplacent des données existantes et les outils **Suppression** en suppriment. Les outils Modification et Suppression sont annotés comme destructifs : votre client MCP peut ainsi demander une confirmation avant de les exécuter.

### Campagnes

| Outil | Type | Description |
|-------|------|-------------|
| `list_campaigns` | Lecture | Liste les campagnes avec pagination et filtres |
| `get_campaign` | Lecture | Affiche le détail d'une campagne |
| `create_campaign` | Création | Crée une campagne |
| `update_campaign` | Modification | Modifie le nom, le sous-titre, la description ou le nom interne |
| `update_campaign_status` | Modification | Passe une campagne en brouillon, publiée ou dépubliée |
| `duplicate_campaign` | Création | Duplique une campagne existante |

### Schéma du formulaire

| Outil | Type | Description |
|-------|------|-------------|
| `list_module_types` | Lecture | Liste les types de champs avec des exemples JSON |
| `get_step_schema` | Lecture | Affiche le schéma complet d'une étape |
| `create_step` | Création | Ajoute une étape vide à une campagne |
| `update_step_schema` | Modification | Remplace le schéma d'une étape (sections, modules, logique, écrans de remerciement) |
| `delete_step` | Suppression | Supprime une étape |
| `get_liquid_module_guide` | Lecture | Guide pour écrire des modules Liquid interactifs |

### Documents et signature électronique

| Outil | Type | Description |
|-------|------|-------------|
| `get_liquid_guide` | Lecture | Guide pour écrire des templates de documents Liquid |
| `list_campaign_variables` | Lecture | Liste les variables disponibles dans les templates d'une campagne |
| `list_document_templates` | Lecture | Liste les templates d'une campagne |
| `list_company_document_templates` | Lecture | Liste les templates de toutes les campagnes de l'entreprise, pour reprendre un style existant |
| `get_document_template` | Lecture | Affiche un template avec son contenu Liquid |
| `preview_document_template` | Lecture | Génère un rendu du template et signale erreurs et avertissements |
| `create_document_template` | Création | Crée un template |
| `update_document_template` | Modification | Modifie le titre, le contenu ou la langue |
| `delete_document_template` | Suppression | Supprime un template |
| `get_esignature_config` | Lecture | Affiche la configuration du module de signature d'une campagne |
| `configure_esignature` | Modification | Associe un template de document au module de signature |

### Réponses

| Outil | Type | Description |
|-------|------|-------------|
| `list_responses` | Lecture | Liste les réponses de toutes les campagnes avec filtres |
| `list_campaign_responses` | Lecture | Liste les réponses d'une campagne |
| `get_response` | Lecture | Affiche une réponse et ses données |
| `get_response_activity` | Lecture | Affiche l'historique d'activité d'une réponse |
| `update_response_status` | Modification | Change le statut d'une ou plusieurs réponses |
| `assign_response` | Modification | Assigne une réponse à des administrateurs |
| `export_responses` | Lecture | Demande un export XLSX des réponses d'une campagne |

### Charte graphique et storefront

| Outil | Type | Description |
|-------|------|-------------|
| `get_company_theme` | Lecture | Affiche la charte graphique (logo, polices, couleurs) |
| `update_company_theme` | Modification | Modifie la charte graphique |
| `get_storefront_liquid_guide` | Lecture | Référence des templates Liquid du storefront |
| `get_storefront_defaults` | Lecture | Affiche le thème storefront par défaut |
| `list_storefront_templates` | Lecture | Liste les templates storefront de l'entreprise |
| `get_storefront_template` | Lecture | Affiche le brouillon d'un template et son état de publication |
| `list_storefront_template_versions` | Lecture | Liste l'historique des versions d'un template |
| `create_storefront_template` | Création | Crée un template storefront |
| `update_storefront_template` | Modification | Modifie le brouillon d'un template (pas en ligne tant qu'il n'est pas publié) |
| `publish_storefront_template` | Modification | Publie le brouillon sur le storefront en ligne |
| `rollback_storefront_template` | Modification | Restaure une ancienne version comme nouveau brouillon |
| `delete_storefront_template` | Suppression | Supprime un template storefront |

## Exemples de prompts

- « Crée un formulaire d'onboarding client avec raison sociale, coordonnées et un champ numéro de TVA qui n'apparaît que pour les entreprises de l'UE. »
- « Résume les réponses de la semaine sur la campagne "Référencement fournisseurs", puis approuve celles qui sont complètes. »
- « Crée un template PDF de contrat de prestation à partir de ma campagne "Onboarding client" et montre-moi un aperçu. »

## Limitations

- `export_responses` est asynchrone : l'export est généré en arrière-plan et un lien de téléchargement est **envoyé par email**.
- L'envoi de fichiers (images, PDF à signer) se fait dans le dashboard.
- La signature électronique d'un PDF importé et les réglages de signature par réponse se gèrent dans le dashboard.

## Dépannage

| Symptôme | Solution |
|----------|----------|
| Erreur « Unknown client » à la connexion | Supprimez le connecteur puis ajoutez-le à nouveau pour enregistrer un nouveau client |
| Erreur `401` en cours de conversation | Votre session a expiré : déconnectez puis reconnectez le connecteur |

## Prochaines étapes

- [Types de modules](/fr/features/modules) - Les champs disponibles
- [Templates PDF](/fr/features/pdf-templates) - Templates de documents
- [API & Webhooks](/fr/features/api-webhooks) - Intégrer Formulr
