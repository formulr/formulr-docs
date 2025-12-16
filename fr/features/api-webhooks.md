---
title: API & Webhooks
description: Intégrez Formulr avec vos outils grâce à l'API REST et aux webhooks.
---

# API & Webhooks

Formulr propose une API REST complète et des webhooks pour intégrer vos formulaires avec vos systèmes existants.

## API REST

### Authentification

L'API utilise des clés API pour l'authentification :

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
     https://api.formulr.fr/v1/campaigns
```

### Obtenir une clé API

1. **Paramètres** > **API**
2. Cliquez sur **Générer une clé**
3. Nommez votre clé (ex: "CRM Integration")
4. Copiez la clé (affichée une seule fois)

### Permissions

Définissez les permissions par clé :

| Permission | Accès |
|------------|-------|
| `campaigns:read` | Lecture des campagnes |
| `campaigns:write` | Création/modification de campagnes |
| `responses:read` | Lecture des réponses |
| `responses:write` | Création/modification de réponses |
| `files:read` | Téléchargement des fichiers |

## Endpoints principaux

### Campagnes

```bash
# Liste des campagnes
GET /v1/campaigns

# Détail d'une campagne
GET /v1/campaigns/{uuid}

# Créer une campagne
POST /v1/campaigns

# Modifier une campagne
PUT /v1/campaigns/{uuid}
```

### Réponses

```bash
# Liste des réponses d'une campagne
GET /v1/campaigns/{uuid}/responses

# Détail d'une réponse
GET /v1/campaigns/{uuid}/responses/{response_uuid}

# Créer une réponse
POST /v1/campaigns/{uuid}/responses

# Modifier le statut
PATCH /v1/campaigns/{uuid}/responses/{response_uuid}
```

### Fichiers

```bash
# Télécharger un fichier
GET /v1/files/{file_uuid}

# Uploader un fichier
POST /v1/campaigns/{uuid}/responses/{response_uuid}/files
```

## Exemples

### Récupérer les réponses

```javascript
const response = await fetch('https://api.formulr.fr/v1/campaigns/xxx/responses', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data.items); // Liste des réponses
```

### Créer une réponse programmatiquement

```javascript
const response = await fetch('https://api.formulr.fr/v1/campaigns/xxx/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      email: 'jean@exemple.fr',
      firstName: 'Jean',
      lastName: 'Dupont'
    },
    responses: {
      nom_module: {
        value: ['Valeur saisie']
      }
    }
  })
});
```

### Mettre à jour le statut

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

### Principe

Les webhooks notifient vos systèmes en temps réel quand des événements se produisent dans Formulr.

### Événements disponibles

| Événement | Déclencheur |
|-----------|-------------|
| `response.created` | Nouvelle réponse soumise |
| `response.updated` | Réponse modifiée |
| `response.status_changed` | Changement de statut |
| `response.completed` | Réponse finalisée |
| `signature.completed` | Document signé |
| `file.uploaded` | Fichier uploadé |

### Configurer un webhook

1. **Paramètres** > **Webhooks**
2. Cliquez sur **Ajouter un webhook**
3. Configurez :
   - **URL** : Endpoint de réception
   - **Événements** : Types à écouter
   - **Secret** : Pour vérifier les signatures

### Format du payload

```json
{
  "event": "response.created",
  "timestamp": "2024-12-14T10:30:00Z",
  "data": {
    "campaign": {
      "uuid": "xxx",
      "title": "Mon formulaire"
    },
    "response": {
      "uuid": "yyy",
      "reference": "REF-2024-001",
      "status": "pending",
      "user": {
        "email": "jean@exemple.fr",
        "firstName": "Jean",
        "lastName": "Dupont"
      },
      "responses": {
        "nom_module": {
          "value": ["Valeur"]
        }
      },
      "createdAt": "2024-12-14T10:30:00Z"
    }
  }
}
```

### Vérification de signature

Chaque webhook est signé avec votre secret :

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

// Dans votre endpoint
app.post('/webhook', (req, res) => {
  const signature = req.headers['x-formulr-signature'];

  if (!verifyWebhook(req.rawBody, signature, WEBHOOK_SECRET)) {
    return res.status(401).send('Invalid signature');
  }

  // Traiter l'événement
  const event = req.body;
  console.log('Événement reçu:', event.event);

  res.status(200).send('OK');
});
```

### Retry policy

En cas d'échec (timeout ou code != 2xx) :

- 3 tentatives automatiques
- Délais : 1min, 5min, 30min
- Notification après échec final

## Intégrations natives

### Zapier

Connectez Formulr à 5000+ applications :

1. Recherchez "Formulr" dans Zapier
2. Connectez votre compte
3. Créez vos Zaps

**Triggers disponibles** :
- Nouvelle réponse
- Changement de statut
- Document signé

**Actions disponibles** :
- Créer une réponse
- Mettre à jour le statut
- Ajouter un commentaire

### Make (Integromat)

Module Formulr disponible :

- Triggers pour tous les événements
- Actions CRUD sur les réponses
- Gestion des fichiers

### n8n

Nœud Formulr pour n8n :

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

## Limites et quotas

| Ressource | Limite |
|-----------|--------|
| Requêtes API | 1000/heure |
| Webhooks par compte | 50 |
| Taille payload webhook | 1 Mo |
| Timeout webhook | 30 secondes |

## Bonnes pratiques

### API

1. **Cachez les réponses** : Utilisez les headers de cache
2. **Pagination** : Utilisez `limit` et `offset` pour les listes
3. **Gestion d'erreurs** : Implémentez des retries exponentiels
4. **Rate limiting** : Respectez les quotas

### Webhooks

1. **Répondez vite** : Retournez 200 immédiatement
2. **Traitement async** : Queue les traitements longs
3. **Idempotence** : Gérez les doublons possibles
4. **Logs** : Conservez un historique

## Documentation API

La documentation complète de l'API est disponible :

- **Swagger UI** : `https://api.formulr.fr/docs`
- **OpenAPI spec** : `https://api.formulr.fr/openapi.json`

## Prochaines étapes

- [Workflows](/fr/features/workflows) - Automatisation sans code
- [Export](/fr/guide/export) - Export des données
- [Yousign](/fr/features/yousign) - Intégration signature
