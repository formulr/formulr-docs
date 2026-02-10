---
title: Intégration & Embed
description: Intégrez les formulaires Formulr dans votre application grâce aux URLs signées.
---

# Intégration & Embed

Intégrez les formulaires Formulr directement dans votre application. Vos utilisateurs peuvent accéder aux formulaires et y répondre sans quitter votre plateforme, sans connexion séparée.

## Fonctionnement

1. **Générez un secret d'intégration** depuis votre panneau d'administration Formulr (Paramètres > Intégration)
2. **Votre backend signe une URL** avec ce secret via HMAC-SHA256
3. **Intégrez le formulaire** via une iframe ou redirigez vos utilisateurs

L'URL signée donne accès à une campagne spécifique en tant que répondant. Le secret d'intégration ne quitte jamais votre serveur.

## Méthodes d'intégration

### Iframe (intégré)

Affichez le formulaire directement dans votre application. Utilisez le paramètre `embed=true` pour masquer l'en-tête et le pied de page Formulr.

```html
<iframe
  src="https://app.formulr.io/c/{campaignUuid}?...&embed=true&sig=xxx"
  width="100%"
  height="800"
  frameborder="0">
</iframe>
```

### Redirect (bouton)

Redirigez vos utilisateurs vers le formulaire sur Formulr. Ils verront l'interface complète de Formulr.

```html
<a href="https://app.formulr.io/c/{campaignUuid}?...&sig=xxx">
  Accéder au formulaire
</a>
```

## Générer une URL signée

### Paramètres

| Paramètre    | Requis | Description                                              |
|-------------|--------|----------------------------------------------------------|
| `user_email` | Oui    | Adresse email de l'utilisateur accédant au formulaire    |
| `user_name`  | Non    | Nom affiché de l'utilisateur                             |
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

$params = [
    'expires'    => time() + 3600,
    'user_email' => 'jean@exemple.fr',
    'user_name'  => 'Jean Dupont',
];

ksort($params);
$query = http_build_query($params);
$sig   = hash_hmac('sha256', $query, $secret);

$url = "https://app.formulr.io/c/{campaignUuid}?{$query}&sig={$sig}";
```

### Node.js

```javascript
const crypto = require('crypto');

const secret = 'votre_secret_integration';

const params = {
  expires: Math.floor(Date.now() / 1000) + 3600,
  user_email: 'jean@exemple.fr',
  user_name: 'Jean Dupont',
};

const sorted = Object.keys(params).sort().reduce((acc, key) => {
  acc.append(key, params[key]);
  return acc;
}, new URLSearchParams());

const query = sorted.toString();
const sig   = crypto.createHmac('sha256', secret).update(query).digest('hex');

const url = `https://app.formulr.io/c/${campaignUuid}?${query}&sig=${sig}`;
```

### Python

```python
import hashlib, hmac, time
from urllib.parse import urlencode

secret = 'votre_secret_integration'

params = {
    'expires': int(time.time()) + 3600,
    'user_email': 'jean@exemple.fr',
    'user_name': 'Jean Dupont',
}

query = urlencode(sorted(params.items()))
sig   = hmac.new(secret.encode(), query.encode(), hashlib.sha256).hexdigest()

url = f"https://app.formulr.io/c/{campaign_uuid}?{query}&sig={sig}"
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
