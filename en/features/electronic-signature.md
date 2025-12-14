---
title: Electronic Signature
description: Integrate Yousign electronic signature into your Formulr forms.
---

# Electronic Signature

Formulr integrates with Yousign to offer certified electronic signatures directly in your processes.

## How It Works

1. The user fills out the form
2. A PDF document is generated with their data
3. The document is sent to Yousign for signature
4. The user signs electronically
5. The signed document is archived

## Prerequisites

Electronic signature is natively integrated into Formulr via Yousign, a French eIDAS-certified solution. No additional configuration is required.

### Enable Signature

1. Go to **Settings** > **Signature**
2. Enable electronic signature
3. Choose the environment (Test/Production)

## Create a Template with Signature

### 1. PDF Template

Create a document template including signature zones:

```liquid
<div class="signature-zone">
  <p>Client signature:</p>
  {% raw %}{{s1|signature|210|130}}{% endraw %}
</div>

<div class="signature-zone">
  <p>Advisor signature:</p>
  {% raw %}{{s2|signature|210|130}}{% endraw %}
</div>
```

### 2. Signature Syntax

```
{{s[N]|signature|[width]|[height]}}
```

| Parameter | Description |
|-----------|-------------|
| `s[N]` | Signer identifier (s1, s2, s3...) |
| `width` | Zone width in pixels |
| `height` | Zone height in pixels |

### 3. Multiple Signers

For multiple signers, number sequentially:

- `s1`: First signer (e.g., client)
- `s2`: Second signer (e.g., advisor)
- `s3`: Third signer (e.g., witness)

::: warning Important
Numbers must be sequential (s1, s2, s3...). The editor alerts you if the sequence is incomplete.
:::

## Trigger Signature

### From a Response

1. Open the response details
2. Generate the PDF document
3. Click **"Send for signature"**
4. Enter the signers' emails
5. Validate

### Automatically via Workflow

Configure the workflow to trigger automatically:

1. Add a "Electronic signature" action
2. Associate the template
3. Map the signers

## Signature Tracking

### Possible States

| State | Description |
|------|-------------|
| **Pending** | Sent, awaiting signature |
| **Partially Signed** | Some signers have signed |
| **Signed** | All have signed |
| **Declined** | A signer declined |
| **Expired** | Deadline passed |

### Notifications

- Email to each signer
- Automatic reminders
- Completion notification

## Signed Document

Once signed:

- The PDF is timestamped and certified
- A signature certificate is attached
- The document is archived in Formulr
- Downloadable from the response

## Legal Value

Yousign signatures are:

- Compliant with eIDAS (European regulation)
- Legally recognized in France and Europe
- Timestamped and traceable
- Securely archived

## Use Cases

### Contracts

- Engagement letters
- Mandates
- Terms and conditions

### HR

- Employment contracts
- Amendments
- Internship agreements

### Real Estate

- Leases
- Condition reports
- Management mandates

### Finance

- Account openings
- Subscriptions
- Powers of attorney

## Best Practices

1. **Clearly position** signature zones
2. **Identify** each signer (name, role)
3. **Test** with Yousign sandbox environment
4. **Inform** signers of the process

## Next Steps

- [PDF Templates](/en/features/pdf-templates) - Create documents
- [Yousign](/en/features/yousign) - Advanced configuration
- [Workflows](/en/features/workflows) - Automation
