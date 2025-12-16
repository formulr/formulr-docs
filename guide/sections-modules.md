---
title: Sections and Modules
description: Organize your form with sections and add fields with modules.
---

# Sections and Modules

## Sections

Sections help visually organize your form by grouping fields by theme.

### Add a Section

1. Click **"Add a section"** at the bottom of the editor
2. The section appears with a default name
3. Click on the name to modify it

### Actions on a Section

Hover over a section to see available actions:

| Action | Description |
|--------|-------------|
| ✏️ **Rename** | Modify the section title |
| ⚙️ **Settings** | Advanced configuration |
| 📋 **Duplicate** | Copy the section with its modules |
| 🗑️ **Delete** | Remove the section |

### Section Settings

- **Title**: displayed to users
- **Description**: explanatory text (optional)
- **Collapsible**: allows folding the section

### Reorganize Sections

- Drag-and-drop from the summary (right panel)
- Or use the reorganization arrows

## Modules

Modules are the input fields of your form.

### Add a Module

1. Click **"Add a module"** within a section
2. The module library opens
3. Click on the desired module type
4. The module is added to the section

### Available Module Types

#### Text Input

| Module | Usage |
|--------|-------|
| **Short text** | Name, first name, city... |
| **Long text** | Comments, descriptions |
| **Email** | With automatic validation |
| **Phone** | With formatting |
| **Number** | Numeric values |

#### Dates and Times

| Module | Usage |
|--------|-------|
| **Date** | Date picker |
| **Date and time** | Date with time |
| **Date range** | Period from/to |

#### Choices

| Module | Usage |
|--------|-------|
| **Dropdown** | Single choice from a list |
| **Radio buttons** | Visible single choice |
| **Checkboxes** | Multiple choices |
| **Yes/No** | Binary question |

#### Files

| Module | Usage |
|--------|-------|
| **File upload** | Single document |
| **Multiple upload** | Multiple documents |
| **Photo** | Capture or upload image |

#### Special

| Module | Usage |
|--------|-------|
| **Signature** | Handwritten signature area |
| **Table** | Tabular data |
| **Contact information** | Complete contact block |
| **Address** | With autocomplete |
| **IBAN** | With validation |

### Configure a Module

Click on a module's ⚙️ icon to access its settings:

#### Common Settings

- **Label**: question or instruction displayed
- **Placeholder**: example text in the field
- **Help text**: additional indication
- **Required**: field must be filled
- **Identifier**: technical name for templates

#### Specific Settings

Each module type has its own options:
- **Text**: min/max length, regular expression
- **Number**: min/max value, decimals
- **File**: accepted types, max size
- **List**: available options

### Reorganize Modules

- Drag-and-drop modules within a section
- Move between sections via the summary
- The displayed order is the input order

### Duplicate a Module

1. Hover over the module
2. Click **Duplicate**
3. The module is copied with its configuration

::: tip Tip
Duplicate a configured module to save time, then just modify the label.
:::

## Best Practices

1. **Group logically** - One section = one theme
2. **Limit fields** - Only ask for essentials
3. **Use placeholders** - Provide examples
4. **Think mobile** - Test on small screens
5. **Order intelligently** - From simplest to most complex

## Next Steps

- [Detailed module types](/features/modules)
- [Field validation](/features/validation)
- [Conditional logic](/features/conditional-logic)
