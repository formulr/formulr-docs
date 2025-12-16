---
title: Create a Campaign
description: Learn how to create a new campaign in Formulr.
---

# Create a Campaign

A campaign is the main container for your form. It groups all the steps, sections, and modules that make up your collection process.

## New Campaign

1. From the dashboard, click **"New Campaign"**
2. Enter your campaign name
   - This name is visible only to your team
   - Choose an explicit name (e.g., "Client Onboarding 2024")
3. You'll be redirected to the editor

## Welcome Screen

The welcome screen is the first thing your users will see:

| Field | Description |
|-------|-------------|
| **Title** | Title displayed to users |
| **Subtitle** | Secondary text (optional) |
| **Description** | Longer explanatory text |

::: tip Advice
A good welcome screen clearly explains what is expected and reassures users about the time required.
:::

## Quick Settings

At the top of the editor, you have access to quick settings:

### Owner

Assign a team member responsible for this campaign:
- They will receive notifications
- They will be the default contact
- By default, the creator is assigned

### Deadline

Configure the deadline for responses:

- **No deadline**: no time limit
- **Fixed date**: a specific date for everyone
- **Calculated date**: X days after the response starts

## Campaign Structure

A campaign is organized in 3 levels:

```
Campaign
├── Step 1
│   ├── Section A
│   │   ├── Module 1
│   │   └── Module 2
│   └── Section B
│       └── Module 3
└── Step 2
    └── Section C
        └── Module 4
```

### Steps

Steps divide your form into distinct pages:
- Users progress from step to step
- Each step can have its own validation logic
- Useful for long forms

### Sections

Sections group fields by theme:
- Clear visual organization
- Can be collapsible
- Facilitate understanding

### Modules

Modules are the input fields:
- Over 15 types available
- Individually configurable
- [See all module types →](/features/modules)

## Summary

The right panel displays your campaign summary:

- Overview of sections and modules
- Reorganization by drag-and-drop
- Quick access to any section

## Saving

Your changes are saved automatically. The status displays at the top:
- **Draft**: not published, changes in progress
- **Published**: accessible to users
- **Unpublished changes**: changes waiting to be published

## Next Steps

- [Sections and modules](/guide/sections-modules) - Structure your form
- [Configuration](/guide/configuration) - Advanced settings
- [Publishing](/guide/publishing) - Make the campaign accessible
