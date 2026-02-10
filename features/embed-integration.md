---
title: Embed & Integration
description: Embed Formulr forms into your application using signed URLs for seamless integration.
---

# Embed & Integration

Integrate Formulr forms directly into your application. Your users can access and fill out forms without leaving your platform, with no separate login required.

## How It Works

1. **Generate an integration secret** from your Formulr admin panel (Settings > Integration)
2. **Your backend signs a URL** using HMAC-SHA256 with this secret
3. **Embed the form** via an iframe or redirect your users to it

The signed URL grants access to a specific campaign as a respondent. The integration secret never leaves your server.

## Integration Methods

### Iframe (Embedded)

Display the form directly inside your application. Use the `embed=true` parameter to hide Formulr's header and footer.

```html
<iframe
  src="https://app.formulr.io/c/{campaignUuid}?...&embed=true&sig=xxx"
  width="100%"
  height="800"
  frameborder="0">
</iframe>
```

### Redirect (Button)

Redirect users to the form on Formulr. They will see the full Formulr interface.

```html
<a href="https://app.formulr.io/c/{campaignUuid}?...&sig=xxx">
  Open form
</a>
```

## Generating a Signed URL

### Parameters

| Parameter    | Required | Description                                        |
|-------------|----------|----------------------------------------------------|
| `user_email` | Yes      | Email address of the user accessing the form       |
| `user_name`  | No       | Display name of the user                           |
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

$params = [
    'expires'    => time() + 3600,
    'user_email' => 'john@example.com',
    'user_name'  => 'John Doe',
];

ksort($params);
$query = http_build_query($params);
$sig   = hash_hmac('sha256', $query, $secret);

$url = "https://app.formulr.io/c/{campaignUuid}?{$query}&sig={$sig}";
```

### Node.js

```javascript
const crypto = require('crypto');

const secret = 'your_integration_secret';

const params = {
  expires: Math.floor(Date.now() / 1000) + 3600,
  user_email: 'john@example.com',
  user_name: 'John Doe',
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

secret = 'your_integration_secret'

params = {
    'expires': int(time.time()) + 3600,
    'user_email': 'john@example.com',
    'user_name': 'John Doe',
}

query = urlencode(sorted(params.items()))
sig   = hmac.new(secret.encode(), query.encode(), hashlib.sha256).hexdigest()

url = f"https://app.formulr.io/c/{campaign_uuid}?{query}&sig={sig}"
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
