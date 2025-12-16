---
title: Managing Responses
description: View, validate, and process your campaign responses.
---

# Managing Responses

The **Responses** tab of your campaign centralizes all received submissions.

## Overview

The response list displays:

| Column | Description |
|---------|-------------|
| **Respondent** | Name or email of the user |
| **Status** | Current state of the response |
| **Date** | Creation date or last activity |
| **Progress** | Completed steps |
| **Owner** | Assigned team member |

## Filters and Search

### Search

Use the search bar to find a response:
- By name
- By email
- By content

### Status Filters

Filter responses by their state:
- **In progress**: user hasn't finished
- **Completed**: all steps are filled
- **Validated**: approved by your team
- **Rejected**: non-compliant, needs correction

## Response Detail

Click on a response to see the detail:

### Header

- Respondent information
- Current status with quick actions
- Creation date and last modification

### Content

Complete view of entered data:
- Organized by section
- Uploaded files with preview
- Captured signatures

### Actions

- **Validate step**: approve the current step
- **Reject**: request corrections
- **Archive**: file the response

### Side Panel

Additional information:
- Action history
- Internal notes
- Generated documents
- AI summary (if configured)

## Statuses and Workflow

### Response Lifecycle

```
Created → In Progress → Completed → Validated
                       ↓
                   Rejected → In Progress (corrections)
```

### Changing Status

1. Open the response detail
2. Click on the corresponding action button
3. Add a comment if necessary

::: tip Notifications
The user is automatically notified of status changes.
:::

## Bulk Actions

From the response list:

1. Select multiple responses (checkboxes)
2. Choose an action from the menu
3. Confirm

Available actions:
- Export to CSV/Excel
- Archive
- Assign an owner

## Document Generation

For each response, you can generate PDF documents:

1. Open the response detail
2. Click **Generate a document**
3. Select the template
4. The PDF is created with the response data

[Learn more about templates →](/features/pdf-templates)

## Electronic Signature

If your template contains signature areas:

1. Generate the document
2. Launch the signature procedure
3. Track progress in the panel

[Learn more about signature →](/features/electronic-signature)

## Data Export

### Individual Export

In the response detail:
- Download attached files
- Generate a summary PDF

### Bulk Export

From the response list:
1. Select responses or "Select all"
2. Click **Export**
3. Choose the format (CSV, Excel)

[Learn more about export →](/guide/export)

## Next Steps

- [Workflow and statuses](/guide/workflow) - Customize the lifecycle
- [Data export](/guide/export) - Retrieve your data
- [PDF templates](/features/pdf-templates) - Generate documents
