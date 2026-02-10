---
title: Embed & Integration
description: Embed Formulr forms into your application using embed mode and signed URLs.
---

# Embed & Integration

Integrate Formulr forms directly into your application. Two independent mechanisms are available:

- **Embed mode** (`?embed=true`): hide Formulr's header, footer and logo for iframe display
- **Client SSO**: auto-login to an existing response via HMAC-signed URL

::: tip Enterprise plan
Embed mode and Client SSO are available exclusively on the [Enterprise plan](/features/custom-domain).
:::

## Integration Methods

### Start a New Form

Use the `/to/{campaignUuid}` URL to let users start a new response. Add `?embed=true` to hide the Formulr chrome in an iframe.

```html
<!-- Iframe: new form in embed mode -->
<iframe
  src="https://app.formulr.io/to/{campaignUuid}?embed=true"
  width="100%"
  height="800"
  frameborder="0">
</iframe>

<!-- Redirect: new form with full Formulr interface -->
<a href="https://app.formulr.io/to/{campaignUuid}">
  Open form
</a>
```

The user will register or log in through the standard Formulr flow.

### Access an Existing Response (Client SSO)

Use a signed URL to give a user direct access to their existing response, without requiring them to log in. This is useful when your backend already manages the user-response relationship.

```html
<!-- Iframe: existing response in embed mode -->
<iframe
  src="https://app.formulr.io/response/{responseUuid}?user_email=...&expires=...&embed=true&sig=..."
  width="100%"
  height="800"
  frameborder="0">
</iframe>

<!-- Redirect: existing response -->
<a href="https://app.formulr.io/response/{responseUuid}?user_email=...&expires=...&sig=...">
  Continue form
</a>
```

## Generating a Client SSO URL

Client SSO URLs apply to the `/response/{responseUuid}` endpoint only.

### Parameters

| Parameter    | Required | Description                                        |
|-------------|----------|----------------------------------------------------|
| `user_email` | Yes      | Email address of the user accessing the response   |
| `expires`    | Yes      | Unix timestamp — URL expiration time               |
| `embed`      | No       | Set to `true` to hide header/footer (iframe mode)  |

### Signature Process

1. Build a key-value map with your parameters
2. **Sort parameters alphabetically** by key
3. Build the query string
4. Compute the HMAC-SHA256 of the query string using your integration secret
5. Append `&sig=` to the final URL

::: warning Important
Parameters **must be sorted alphabetically** before signing. The signature will not match otherwise.
:::

### PHP

```php
$secret = 'your_integration_secret';
$responseUuid = 'response-uuid-here';

$params = [
    'embed'      => 'true', // optional, for iframe
    'expires'    => time() + 3600,
    'user_email' => 'john@example.com',
];

ksort($params);
$query = http_build_query($params);
$sig   = hash_hmac('sha256', $query, $secret);

$url = "https://app.formulr.io/response/{$responseUuid}?{$query}&sig={$sig}";
```

### Node.js

```javascript
const crypto = require('crypto');

const secret = 'your_integration_secret';
const responseUuid = 'response-uuid-here';

const params = {
  embed: 'true', // optional, for iframe
  expires: Math.floor(Date.now() / 1000) + 3600,
  user_email: 'john@example.com',
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

secret = 'your_integration_secret'
response_uuid = 'response-uuid-here'

params = {
    'embed': 'true',  # optional, for iframe
    'expires': int(time.time()) + 3600,
    'user_email': 'john@example.com',
}

query = urlencode(sorted(params.items()))
sig   = hmac.new(secret.encode(), query.encode(), hashlib.sha256).hexdigest()

url = f"https://app.formulr.io/response/{response_uuid}?{query}&sig={sig}"
```

## Managing Your Integration Secret

1. Go to **Settings** > **Integration**
2. Click **Generate integration secret**
3. Copy the secret — it is displayed **only once**
4. Store it securely on your server (e.g. environment variable)

To revoke access, click **Revoke** to delete the secret. All existing signed URLs will stop working immediately.

## Security

- **Always set `expires`** — recommended: 1 hour (`time() + 3600`)
- **Never expose the secret** in frontend code, URLs, or logs
- The signature is verified server-side; invalid or expired URLs return `401 Unauthorized`
- Each signed URL grants access as a **respondent only** — no admin access
- Revoking the secret invalidates all signed URLs instantly

## Next Steps

- [API & Webhooks](/features/api-webhooks) — Use the REST API for programmatic access
- [Custom Domain](/features/custom-domain) — Serve forms on your own domain
