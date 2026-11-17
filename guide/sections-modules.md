---
title: Sections and Modules
description: Structure your campaign into steps, pages and modules, then configure each module.
---

# Sections and Modules

A campaign is structured into **steps**, **pages** (also called sections) and **modules** (the input fields).

::: info Screenshots
The screenshots below show the interface in French.
:::

![Campaign editor: welcome screen, pages, steps and module library](/screenshots/campaign/editor-overview.png)

## Structure the campaign

### Internal title

The campaign name is an **internal title**: it is visible only to the users of your Formulr workspace, not to your clients.

### Welcome screen

In the right panel ("Content" tab), the "Welcome screen" section lets you customize the **title**, the **subtitle** and the **description** your clients see.

### Pages (sections)

Each page is a section of the form. They are listed in the "Pages" panel on the left of the editor.

- **Add a page:** click the "+" of the "Pages" panel.
- **Add, move or rename:** use the three dots at the top right of a page.

### Steps

Click the "+" button in the "Steps" bar to add steps and structure your campaign into several steps. In a step's settings, the "Automatic validation" option moves automatically to the next step when the user submits.

::: tip When to use several steps?
Use several steps when your team needs to validate between two phases. See the dossier-side tracking in [Managing responses](/guide/responses#follow-the-progress-of-a-multi-step-dossier).
:::

### Publish

Once the campaign is configured, click "Publish" to make it accessible through the sharing link. After each change, remember to **republish** the campaign (see [Publishing](/guide/publishing)).

## Modules

Modules are the elements of your form: input fields, informational content, documents, choices...

### Add a Module

1. On the desired page, click **"Add a module"**
2. The module library opens
3. Click on the desired module type
4. The module is added to the page

![Module library](/screenshots/campaign/module-library.png)

### Available Module Types

| Category | Modules |
|----------|---------|
| **Text** | Number, Short text, Long text |
| **Informational content** | Image, Liquid, WYSIWYG |
| **Personal info** | Contact information |
| **Structure** | GDPR consent, Separator |
| **Document module** | Document, Downloadable documents, Electronic signature |
| **Choice** | Checkbox, Multiple choice list, Yes / No |
| **Date** | Date |
| **Other** | iFrame, Payment |

[Detail of each module type →](/features/modules)

### Configure a Module

Click a module to display its settings in the right panel. Each module has its own configuration options.

![Module settings](/screenshots/campaign/module-settings.png)

For a short text, for example:

- **Validation:** make the module **required** ("Required") or **repeatable** ("Repeatable"), and define its input rules (minimum and maximum number of characters).
- **Advanced:** the "Module identifier" is a technical name used for integrations and the API.
- **Display conditions:** "Add a condition" shows or hides the module depending on the client's answers (see [Conditional logic](/features/conditional-logic)).
- **Delete the module:** the button at the bottom of the panel removes the module.

### Reorganize and duplicate

- Drag and drop modules within a page: the displayed order is the input order.
- The icons to the right of the selected module let you duplicate or delete it.

::: tip Tip
Duplicate a configured module to save time, then just modify the label.
:::

## Best Practices

1. **Group logically** - One page = one theme
2. **Limit fields** - Only ask for essentials
3. **Think mobile** - Test on small screens
4. **Order intelligently** - From simplest to most complex
5. **Republish** - After each change, publish again so the sharing link shows the latest version

## Next Steps

- [Detailed module types](/features/modules)
- [Field validation](/features/validation)
- [Conditional logic](/features/conditional-logic)
- [Publishing](/guide/publishing)
