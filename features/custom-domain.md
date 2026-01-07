---
title: Custom Domain
description: Configure a custom domain for your Formulr forms (Enterprise).
lang: en-US
---

# Custom Domain

::: info Enterprise
This feature is only available for **Enterprise** accounts.
:::

Customize the URL of your forms with your own domain. Instead of `https://formulr.app/...`, your users will see your custom domain like `https://forms.yourcompany.com/...`.

## Prerequisites

- A Formulr **Enterprise** account
- A domain name that you own
- Access to your domain's DNS management

## Configuration in Formulr

1. Log in to your **Admin** dashboard
2. Go to [**Settings** → **Theme**](https://dashboard.formulr.io/settings/theme)
3. In the **Custom Domain** section, enter your domain (e.g., `forms.yourcompany.com`)
4. Click **Save**

Formulr then generates two DNS records that you need to configure with your domain host.

## DNS Configuration

You need to create **two DNS records** with your domain host:

### 1. CNAME Record

This record points your domain to Formulr's servers.

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | `forms` | `dns.formulr.app.` | 10800 |

::: tip Note
- The **Name** corresponds to your chosen subdomain (here `forms` for `forms.yourcompany.com`)
- Don't forget the **trailing dot** after `dns.formulr.app.`
:::

### 2. TXT Verification Record

This record allows Formulr to verify that you own the domain.

| Type | Name | Value | TTL |
|------|------|-------|-----|
| TXT | `_formulr-verify.forms` | `formulr-verify=xxxxxxxxxxxxxxxx` | 300 |

::: warning Important
- The **Name** must be `_formulr-verify.` followed by your subdomain
- The **Value** is provided in your Formulr interface (unique for each domain)
- Keep the quotes around the value if your host requires them
:::

## Examples by Host

### Gandi

For a subdomain `forms.yourcompany.com`:

**CNAME Record:**
```
forms    CNAME    10800    dns.formulr.app.
```

**TXT Record:**
```
_formulr-verify.forms    TXT    300    "formulr-verify=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

For a root domain `forms-yourcompany.com`:

**CNAME Record:**
```
forms-yourcompany.com    CNAME    10800    dns.formulr.app.
```

**TXT Record:**
```
_formulr-verify.forms-yourcompany.com    TXT    300    "formulr-verify=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

### OVH

1. Log in to your [OVH customer area](https://www.ovh.com/manager/)
2. Go to **Domains** → Your domain → **DNS Zone**
3. Click **Add an entry**

**For CNAME:**
- Type: `CNAME`
- Subdomain: `forms` (or your chosen subdomain)
- Target: `dns.formulr.app.`

**For TXT:**
- Type: `TXT`
- Subdomain: `_formulr-verify.forms`
- Value: `formulr-verify=xxxxxxxx` (value provided by Formulr)

### Cloudflare

1. Log in to your [Cloudflare dashboard](https://dash.cloudflare.com/)
2. Select your domain
3. Go to **DNS** → **Records**
4. Click **Add record**

**For CNAME:**
- Type: `CNAME`
- Name: `forms`
- Target: `dns.formulr.app`
- Proxy status: **DNS only** (gray icon, not orange)

**For TXT:**
- Type: `TXT`
- Name: `_formulr-verify.forms`
- Content: `formulr-verify=xxxxxxxx`

::: danger Cloudflare - Proxy Disabled
Make sure the Cloudflare proxy is **disabled** (gray icon) for the CNAME record, otherwise verification will fail.
:::

### Google Domains / Squarespace

1. Log in to [Google Domains](https://domains.google.com/)
2. Select your domain
3. Go to **DNS** → **Custom records**

Add both records as shown above.

## Verification

After configuring your DNS records:

1. Return to **Settings** → **Theme** in Formulr
2. The status will change from "Awaiting DNS verification" to "Verified"
3. DNS propagation can take **up to 48 hours** (usually a few minutes to a few hours)

::: tip Check Propagation
You can check the propagation of your DNS records with tools like:
- [DNS Checker](https://dnschecker.org/)
- [WhatsMyDNS](https://www.whatsmydns.net/)
:::

## SSL Certificate

Once DNS verification succeeds, Formulr automatically generates an SSL certificate for your domain. Your forms will be accessible via HTTPS.

## Usage

Once configured, your forms will be accessible via your custom domain:

- Before: `https://formulr.app/c/abc123`
- After: `https://forms.yourcompany.com/c/abc123`

Old links continue to work and automatically redirect to your new domain.

## Troubleshooting

### Verification Fails

- Check that DNS records are correctly configured
- Wait for DNS propagation (can take up to 48h)
- Check for typos in the values
- If using Cloudflare, make sure the proxy is disabled

### Domain Doesn't Load

- Check that the SSL certificate was generated (may take a few minutes after verification)
- Clear your browser cache
- Try in private/incognito mode

## Support

For any questions about configuring your custom domain, contact our support at [support@formulr.io](mailto:support@formulr.io).
