---
title: Document Generation
description: Automatically generate personalized PDF documents from responses.
---

# Document Generation

Formulr allows you to automatically generate PDF documents from collected data.

## Principle

1. Create a **template** with variables
2. Variables are replaced with **actual data**
3. A **PDF** is generated instantly

## Create a Template

### Access Templates

1. Open your campaign
2. Go to the **Documents** tab
3. Click **New template**

### Choose Editing Mode

| Mode | For Whom | Advantages |
|------|----------|-----------|
| **WYSIWYG** | Everyone | Visual, simple |
| **Liquid** | Developers | Flexible, powerful |

[Learn more about templates →](/en/features/pdf-templates)

## Available Variables

### Response Data

All values entered in the form:

```liquid
{{ campaignResponse.responses.module_name.value[0] }}
```

### Campaign Information

```liquid
{{ campaign.title }}
{{ campaign.description }}
```

### User Information

```liquid
{{ campaignResponse.user.firstName }}
{{ campaignResponse.user.lastName }}
{{ campaignResponse.user.email }}
```

### Dates

```liquid
{{ "now" | date: "%m/%d/%Y" }}
{{ campaignResponse.createdAt | date: "%B %d, %Y" }}
```

### Company Logo

```liquid
<img src="{{ company_logo }}" alt="Logo" style="max-height: 50px;">
```

## Generate a Document

### Manually

1. Open the response details
2. Click **Generate a document**
3. Select the template
4. The PDF displays / downloads

### Automatically

Via workflows, trigger generation:

- At step completion
- On status change
- Based on a condition

## Multi-language

### Localized Templates

Create one template version per language:

1. Create the template in French
2. Change the language in the selector
3. Adapt the content

### Automatic Selection

The template in the response language is used automatically.

## Preview

Before finalizing:

1. Select an existing response
2. Click **Preview**
3. Check the rendering

::: tip Advice
Test with multiple responses to validate all cases (empty fields, long texts...).
:::

## Best Practices

### Layout

- Use inline styles for compatibility
- Plan margins for printing
- Test rendering with different data sizes

### Handling Empty Values

```liquid
{% if campaignResponse.responses.phone.value[0] %}
  Tel: {{ campaignResponse.responses.phone.value[0] }}
{% endif %}
```

### Data Tables

For table modules:

```liquid
{% for row in campaignResponse.responses.products.value %}
  <tr>
    <td>{{ row.name }}</td>
    <td>{{ row.quantity }}</td>
  </tr>
{% endfor %}
```

## Storage and Archiving

Generated documents are:

- Securely stored
- Associated with the response
- Downloadable at any time
- Archived according to your retention policy

## Next Steps

- [PDF Templates](/en/features/pdf-templates) - Detailed syntax
- [Electronic Signature](/en/features/electronic-signature) - Sign documents
- [Workflows](/en/features/workflows) - Automate generation
