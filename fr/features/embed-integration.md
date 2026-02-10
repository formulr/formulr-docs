---
title: Intégration & Embed
description: Intégrez les formulaires Formulr dans votre application grâce au mode embed et aux URLs signées.
---

# Intégration & Embed

Intégrez les formulaires Formulr directement dans votre application. Deux mécanismes indépendants sont disponibles :

- **Mode embed** (`?embed=true`) : masquer l'en-tête, le pied de page et le logo Formulr pour l'affichage en iframe
- **SSO client** : auto-login sur une réponse existante via URL signée HMAC

::: tip Plan Enterprise
Le mode embed et le SSO client sont disponibles exclusivement sur le [plan Enterprise](/fr/features/custom-domain).
:::

## Méthodes d'intégration

### Démarrer un nouveau formulaire

Utilisez l'URL `/to/{campaignUuid}` pour permettre aux utilisateurs de démarrer une nouvelle réponse. Ajoutez `?embed=true` pour masquer le chrome Formulr en iframe.

```html
<!-- Iframe : nouveau formulaire en mode embed -->
<iframe
  src="https://app.formulr.io/to/{campaignUuid}?embed=true"
  width="100%"
  height="800"
  frameborder="0">
</iframe>

<!-- Redirect : nouveau formulaire avec interface Formulr complète -->
<a href="https://app.formulr.io/to/{campaignUuid}">
  Accéder au formulaire
</a>
```

L'utilisateur s'inscrira ou se connectera via le flow standard de Formulr.

### Accéder à une réponse existante (SSO client)

Utilisez une URL signée pour donner à un utilisateur un accès direct à sa réponse existante, sans qu'il ait besoin de se connecter. C'est utile quand votre backend gère déjà la relation utilisateur-réponse.

```html
<!-- Iframe : réponse existante en mode embed -->
<iframe
  src="https://app.formulr.io/response/{responseUuid}?user_email=...&expires=...&embed=true&sig=..."
  width="100%"
  height="800"
  frameborder="0">
</iframe>

<!-- Redirect : réponse existante -->
<a href="https://app.formulr.io/response/{responseUuid}?user_email=...&expires=...&sig=...">
  Continuer le formulaire
</a>
```

## Générer une URL SSO client

Les URLs SSO client s'appliquent uniquement à l'endpoint `/response/{responseUuid}`.

### Paramètres

| Paramètre    | Requis | Description                                              |
|-------------|--------|----------------------------------------------------------|
| `user_email` | Oui    | Adresse email de l'utilisateur accédant à la réponse     |
| `expires`    | Oui    | Timestamp Unix — date d'expiration de l'URL              |
| `embed`      | Non    | Mettre à `true` pour masquer l'en-tête/pied de page (mode iframe) |

### Processus de signature

1. Construisez un dictionnaire clé-valeur avec vos paramètres
2. **Triez les paramètres par ordre alphabétique** des clés
3. Construisez la query string
4. Calculez le HMAC-SHA256 de la query string avec votre secret d'intégration
5. Ajoutez `&sig=` à l'URL finale

::: warning Important
Les paramètres **doivent être triés par ordre alphabétique** avant la signature. La signature ne correspondra pas sinon.
:::

### PHP

```php
$secret = 'votre_secret_integration';
$responseUuid = 'uuid-de-la-reponse';

$params = [
    'embed'      => 'true', // optionnel, pour iframe
    'expires'    => time() + 3600,
    'user_email' => 'jean@exemple.fr',
];

ksort($params);
$query = http_build_query($params);
$sig   = hash_hmac('sha256', $query, $secret);

$url = "https://app.formulr.io/response/{$responseUuid}?{$query}&sig={$sig}";
```

### Node.js

```javascript
const crypto = require('crypto');

const secret = 'votre_secret_integration';
const responseUuid = 'uuid-de-la-reponse';

const params = {
  embed: 'true', // optionnel, pour iframe
  expires: Math.floor(Date.now() / 1000) + 3600,
  user_email: 'jean@exemple.fr',
};

const sorted = Object.keys(params).sort().reduce((acc, key) => {
  acc.append(key, params[key]);
  return acc;
}, new URLSearchParams());

const query = sorted.toString();
const sig   = crypto.createHmac('sha256', secret).update(query).digest('hex');

const url = `https://app.formulr.io/response/${responseUuid}?${query}&sig=${sig}`;
```

### Python

```python
import hashlib, hmac, time
from urllib.parse import urlencode

secret = 'votre_secret_integration'
response_uuid = 'uuid-de-la-reponse'

params = {
    'embed': 'true',  # optionnel, pour iframe
    'expires': int(time.time()) + 3600,
    'user_email': 'jean@exemple.fr',
}

query = urlencode(sorted(params.items()))
sig   = hmac.new(secret.encode(), query.encode(), hashlib.sha256).hexdigest()

url = f"https://app.formulr.io/response/{response_uuid}?{query}&sig={sig}"
```

## Gérer votre secret d'intégration

1. Allez dans **Paramètres** > **Intégration**
2. Cliquez sur **Générer un secret d'intégration**
3. Copiez le secret — il est affiché **une seule fois**
4. Stockez-le en sécurité sur votre serveur (ex : variable d'environnement)

Pour révoquer l'accès, cliquez sur **Révoquer** pour supprimer le secret. Toutes les URLs signées existantes cesseront de fonctionner immédiatement.

## Sécurité

- **Définissez toujours `expires`** — recommandé : 1 heure (`time() + 3600`)
- **N'exposez jamais le secret** dans le code frontend, les URLs ou les logs
- La signature est vérifiée côté serveur ; les URLs invalides ou expirées retournent `401 Unauthorized`
- Chaque URL signée donne accès en tant que **répondant uniquement** — pas d'accès administrateur
- Révoquer le secret invalide instantanément toutes les URLs signées

## Prochaines étapes

- [API & Webhooks](/fr/features/api-webhooks) — Utilisez l'API REST pour un accès programmatique
- [Domaine personnalisé](/fr/features/custom-domain) — Servez les formulaires sur votre propre domaine
