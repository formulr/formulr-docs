---
title: PDF Templates
description: Create custom PDF document templates with the visual editor or Liquid code.
---

# PDF Templates

Automatically generate personalized PDF documents from data collected in your forms.

## Two Editing Modes

### Visual Editor (WYSIWYG)

The visual editor allows you to create templates without technical knowledge:

- **Formatting**: bold, italic, underline, lists
- **Headings**: H1, H2, H3
- **Alignment**: left, center, right
- **Text sizes**: small, normal, large, extra large
- **Page break**: to control PDF pagination

### Code Editor (Liquid)

For more complex templates, use the Liquid editor with:

- HTML/Liquid syntax highlighting
- Highlighting of known variables
- Automatic detection of signature zones

## Inserting Variables

Click the **"Variables"** button to see all available data:

- Campaign information
- Response data
- Module fields (text, email, dates...)
- Company logo

Variables are inserted using Liquid syntax:

```liquid
{{ campaignResponse.responses.module_name.value[0] }}
```

## Signature Zones

To integrate an electronic signature into your document:

```liquid
{% raw %}{{s1|signature|210|130}}{% endraw %}
```

- `s1`: signature identifier (s1, s2, s3... for multiple signers)
- `210`: width in pixels
- `130`: height in pixels

::: tip Multiple Signatures
For multiple signers, use sequential identifiers: s1, s2, s3...
The editor alerts you if the sequence is not respected.
:::

## Preview

1. Select an existing response from the dropdown
2. Click **"Save and preview"**
3. The generated PDF displays in the right panel

## Multi-language

Each template can have translations:

1. Create the template in the default language
2. Use the language selector to add a translation
3. Adapt the content for each language

The correct template will be automatically used based on the response language.

## Template Example

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; }
    .header { text-align: center; margin-bottom: 2rem; }
    .signature-zone { margin-top: 3rem; }
  </style>
</head>
<body>
  <div class="header">
    <img src="{{ company_logo }}" alt="Logo" style="max-height: 50px;">
    <h1>Certificate</h1>
  </div>

  <p>I, the undersigned <strong>{{ campaignResponse.responses.name.value[0] }}</strong>,</p>

  <p>residing at {{ campaignResponse.responses.address.value[0] }},</p>

  <p>hereby certify the accuracy of the information provided.</p>

  <div class="signature-zone">
    <p>Done at _____________, on {{ "now" | date: "%m/%d/%Y" }}</p>
    <p>Signature:</p>
    {% raw %}{{s1|signature|210|130}}{% endraw %}
  </div>
</body>
</html>
```

## Best Practices

1. **Test with multiple responses** to verify the template handles all cases
2. **Use inline styles** for better PDF compatibility
3. **Plan for empty fields** with Liquid conditions
4. **Number signatures** sequentially

## Next Steps

- [Electronic Signature](/en/features/electronic-signature) - Integrate Yousign
- [Automatic Generation](/en/features/document-generation) - Automate document creation
