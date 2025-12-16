---
title: API & Webhooks
description: Integrate Formulr with your tools using the REST API and webhooks.
---

# API & Webhooks

Formulr offers a complete REST API and webhooks to integrate your forms with your existing systems.

## REST API

### Authentication

The API uses API keys for authentication:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
     https://api.formulr.fr/v1/campaigns
```

### Get an API Key

1. **Settings** > **API**
2. Click **Generate a key**
3. Name your key (e.g., "CRM Integration")
4. Copy the key (displayed only once)

### Permissions

Define permissions per key:

| Permission | Access |
|------------|--------|
| `campaigns:read` | Read campaigns |
| `campaigns:write` | Create/modify campaigns |
| `responses:read` | Read responses |
| `responses:write` | Create/modify responses |
| `files:read` | Download files |

## Main Endpoints

### Campaigns

```bash
# List campaigns
GET /v1/campaigns

# Campaign details
GET /v1/campaigns/{uuid}

# Create campaign
POST /v1/campaigns

# Modify campaign
PUT /v1/campaigns/{uuid}
```

### Responses

```bash
# List campaign responses
GET /v1/campaigns/{uuid}/responses

# Response details
GET /v1/campaigns/{uuid}/responses/{response_uuid}

# Create response
POST /v1/campaigns/{uuid}/responses

# Modify status
PATCH /v1/campaigns/{uuid}/responses/{response_uuid}
```

### Files

```bash
# Download file
GET /v1/files/{file_uuid}

# Upload file
POST /v1/campaigns/{uuid}/responses/{response_uuid}/files
```

## Examples

### Retrieve Responses

```javascript
const response = await fetch('https://api.formulr.fr/v1/campaigns/xxx/responses', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data.items); // List of responses
```

### Create a Response Programmatically

```javascript
const response = await fetch('https://api.formulr.fr/v1/campaigns/xxx/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      email: 'john@example.com',
      firstName: 'John',
      lastName: 'Doe'
    },
    responses: {
      module_name: {
        value: ['Entered value']
      }
    }
  })
});
```

### Update Status

```javascript
await fetch('https://api.formulr.fr/v1/campaigns/xxx/responses/yyy', {
  method: 'PATCH',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    status: 'validated'
  })
});
```

## Webhooks

### Principle

Webhooks notify your systems in real-time when events occur in Formulr.

### Available Events

| Event | Trigger |
|-------|---------|
| `response.created` | New response submitted |
| `response.updated` | Response modified |
| `response.status_changed` | Status change |
| `response.completed` | Response finalized |
| `signature.completed` | Document signed |
| `file.uploaded` | File uploaded |

### Configure a Webhook

1. **Settings** > **Webhooks**
2. Click **Add a webhook**
3. Configure:
   - **URL**: Receiving endpoint
   - **Events**: Types to listen to
   - **Secret**: To verify signatures

### Payload Format

```json
{
  "event": "response.created",
  "timestamp": "2024-12-14T10:30:00Z",
  "data": {
    "campaign": {
      "uuid": "xxx",
      "title": "My form"
    },
    "response": {
      "uuid": "yyy",
      "reference": "REF-2024-001",
      "status": "pending",
      "user": {
        "email": "john@example.com",
        "firstName": "John",
        "lastName": "Doe"
      },
      "responses": {
        "module_name": {
          "value": ["Value"]
        }
      },
      "createdAt": "2024-12-14T10:30:00Z"
    }
  }
}
```

### Signature Verification

Each webhook is signed with your secret:

```javascript
const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const computed = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(computed)
  );
}

// In your endpoint
app.post('/webhook', (req, res) => {
  const signature = req.headers['x-formulr-signature'];

  if (!verifyWebhook(req.rawBody, signature, WEBHOOK_SECRET)) {
    return res.status(401).send('Invalid signature');
  }

  // Process event
  const event = req.body;
  console.log('Event received:', event.event);

  res.status(200).send('OK');
});
```

### Retry Policy

In case of failure (timeout or code != 2xx):

- 3 automatic retries
- Delays: 1min, 5min, 30min
- Notification after final failure

## Native Integrations

### Zapier

Connect Formulr to 5000+ apps:

1. Search for "Formulr" in Zapier
2. Connect your account
3. Create your Zaps

**Available triggers**:
- New response
- Status change
- Document signed

**Available actions**:
- Create response
- Update status
- Add comment

### Make (Integromat)

Formulr module available:

- Triggers for all events
- CRUD actions on responses
- File management

### n8n

Formulr node for n8n:

```json
{
  "nodes": [
    {
      "type": "formulr",
      "operation": "getResponses",
      "parameters": {
        "campaignId": "xxx"
      }
    }
  ]
}
```

## Limits and Quotas

| Resource | Limit |
|----------|-------|
| API requests | 1000/hour |
| Webhooks per account | 50 |
| Webhook payload size | 1 MB |
| Webhook timeout | 30 seconds |

## Best Practices

### API

1. **Cache responses**: Use cache headers
2. **Pagination**: Use `limit` and `offset` for lists
3. **Error handling**: Implement exponential retries
4. **Rate limiting**: Respect quotas

### Webhooks

1. **Respond quickly**: Return 200 immediately
2. **Async processing**: Queue long-running tasks
3. **Idempotence**: Handle possible duplicates
4. **Logs**: Keep a history

## API Documentation

Complete API documentation is available:

- **Swagger UI**: `https://api.formulr.fr/docs`
- **OpenAPI spec**: `https://api.formulr.fr/openapi.json`

## Next Steps

- [Workflows](/en/features/workflows) - No-code automation
- [Export](/en/guide/export) - Data export
- [Yousign](/en/features/yousign) - Signature integration
