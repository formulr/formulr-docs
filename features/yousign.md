---
title: Yousign Integration
description: Advanced configuration of Yousign integration for electronic signature.
---

# Yousign Integration

Complete guide to configure and use Yousign integration in Formulr.

## Overview

[Yousign](https://yousign.com) is a French electronic signature solution certified eIDAS. Integration with Formulr allows you to have documents signed directly from your processes.

## Configuration

Yousign integration is native in Formulr. You don't need to create your own Yousign account, everything is managed by Formulr.

### Enable Electronic Signature

1. **Settings** > **Electronic Signature**
2. Enable the feature
3. Select the environment:
   - **Sandbox**: For testing (signatures without legal value)
   - **Production**: For real signatures
4. Save

## Environments

### Sandbox (Test)

- Free and unlimited signatures
- No legal value
- For development and testing
- Documents marked "TEST"

### Production

- Paid signatures (according to your Yousign plan)
- Full legal value
- For official documents

::: warning Important
Switch to Production only when your tests are validated.
:::

## Creating Templates with Signature

### Signature Zones

In your PDF templates, insert signature zones:

```liquid
<div style="margin-top: 50px;">
  <p>Read and approved:</p>
  {% raw %}{{s1|signature|200|100}}{% endraw %}
  <p>{{ campaignResponse.user.fullName }}</p>
  <p>On {{ "now" | date: "%m/%d/%Y" }}</p>
</div>
```

### Detailed Syntax

```
{{s[N]|signature|[width]|[height]}}
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `s[N]` | string | Signer identifier (s1, s2, s3...) |
| `width` | number | Width in pixels (min: 100, max: 400) |
| `height` | number | Height in pixels (min: 50, max: 200) |

### Multiple Signers

For a document with multiple signers:

```liquid
<table style="width: 100%; margin-top: 50px;">
  <tr>
    <td style="width: 50%; text-align: center;">
      <p>The client:</p>
      {% raw %}{{s1|signature|180|80}}{% endraw %}
      <p>{{ campaignResponse.user.fullName }}</p>
    </td>
    <td style="width: 50%; text-align: center;">
      <p>The advisor:</p>
      {% raw %}{{s2|signature|180|80}}{% endraw %}
      <p>Advisor name</p>
    </td>
  </tr>
</table>
```

### Signing Order

Signers are solicited in numerical order:

1. `s1` receives the signature request
2. Once `s1` signed, `s2` receives the request
3. And so on...

For simultaneous signing, contact support.

## Signature Process

### Trigger a Signature

#### Manually

1. Open the response details
2. Click **Generate document**
3. Check the generated PDF
4. Click **Send for signature**
5. Enter signer information:
   - Email (required)
   - First and last name
   - Phone (optional, for SMS)
6. Validate

#### Via Workflow

Automate signature sending:

```
[Status changes to "Validated"]
    ↓
[Generate "Contract" document]
    ↓
[Send for signature]
    - s1: respondent email
    - s2: advisor@company.com
```

### Signer Experience

1. The signer receives an email from Yousign
2. They click on the secure link
3. They view the document
4. They apply their signature (drawing, text or upload)
5. They confirm
6. The document is timestamped

### Tracking

In Formulr, track signature status:

| Status | Meaning |
|--------|---------|
| **Sent** | Awaiting first signer |
| **In progress** | At least one signer has signed |
| **Signed** | All signers have signed |
| **Declined** | A signer declined |
| **Expired** | Signature deadline passed |

## Advanced Options

### Enhanced Authentication

For sensitive documents, enable SMS verification:

1. In the signature request
2. Check "SMS authentication"
3. Enter phone number

### Expiration Delay

By default, requests expire after 30 days.

Customize in campaign settings:
- Minimum: 1 day
- Maximum: 90 days

### Automatic Reminders

Yousign sends automatic reminders:

- D+3: First reminder
- D+7: Second reminder
- D+14: Urgent reminder

### Custom Message

Customize the email sent to signers:

```
Subject: Your contract to sign - {{ campaign.title }}

Hello {{ signer.firstName }},

Please sign the "{{ document.name }}" document
by clicking the button below.

This document concerns: {{ campaignResponse.reference }}

Best regards,
{{ company.name }}
```

## Signed Document

### Retrieval

Once signed, the document is:

1. Automatically downloaded into Formulr
2. Attached to the response
3. Available in the "Documents" tab

### Signature Certificate

Yousign provides a certificate containing:

- Signer identities
- Timestamp of each signature
- Document hash
- Proof of integrity

### Archiving

Signed documents are archived:

- In Formulr (according to your retention)
- At Yousign (10 years minimum)

## Yousign Webhooks

Formulr receives Yousign webhooks for:

- Real-time status updates
- Automatic retrieval of signed PDF
- Workflow triggering

## Troubleshooting

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| "API key invalid" | Incorrect key | Check key in settings |
| "No signature field" | No signature zone in template | Add zones with signature syntax |
| "Invalid email" | Invalid signer email | Check email format |
| "Quota exceeded" | Yousign plan exhausted | Contact Yousign |

### Check Connection

1. **Settings** > **Integrations** > **Yousign**
2. Click **Test connection**
3. Check the result

### Logs

View signature logs:

1. Response details
2. **Activity** tab
3. Filter by "Signature"

## Compliance

### Legal Value

Yousign signatures are:

- Compliant with eIDAS regulation
- Recognized in France and Europe
- Equivalent to handwritten signature
- Admissible in court

### GDPR

- Data processed in France/EU
- Yousign is ISO 27001 certified
- Compliant deletion policy

## Next Steps

- [Electronic Signature](/en/features/electronic-signature) - General guide
- [PDF Templates](/en/features/pdf-templates) - Create documents
- [Workflows](/en/features/workflows) - Automate signatures
