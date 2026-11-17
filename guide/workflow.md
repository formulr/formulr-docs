---
title: Workflow and Statuses
description: Customize the lifecycle of your responses with workflows.
---

# Workflow and Statuses

Workflows allow you to define the validation path of your responses.

## Dossier Statuses

A dossier is either **open** or **closed**. There are four statuses:

| Status | Dossier | Description | Color |
|--------|---------|-------------|-------|
| **In progress** | Open | The client can complete, edit and sign their dossier | Blue |
| **To validate** | Closed | The client has submitted their dossier and awaits your decision. They can no longer edit it | Orange |
| **Validated** | Closed | The dossier has been approved. The client can no longer edit it | Green |
| **Rejected** | Closed | The dossier has been rejected. The client can no longer edit it | Red |

::: info Screenshots
The screenshots on this page show the interface in French.
:::

![The four statuses in the responses list](/screenshots/responses/statuses.png)

::: info Labels in the interface
In the French interface, "In progress" is labeled "En création" (shown as "Création" in lists).
:::

::: warning Remember
For all closed dossiers, the client can no longer edit their answers and only reaches the end screen.
:::

On a closed dossier, a banner recalls the situation, for example "The client has submitted their dossier and is awaiting your decision" or "This dossier has been validated. The client can no longer access it".

![Validated dossier: banner and Reopen button](/screenshots/responses/validated-dossier.png)

### Moving between statuses

- **Validate or reject:** from a "To validate" dossier, use the global actions (see [Validate or reject a dossier](/guide/responses#validate-or-reject-a-dossier)).
- **Reopen a closed dossier:** "Revise the response" (global action) puts the dossier back to "In progress" so the client can edit it. The full process, including requesting additional documents, is described in [Annexes](/guide/annexes).
- **Archive:** archiving is an action on the dossier, not a status.

The client is notified by email when the whole dossier is validated. Emails can be customized in [Account and collaborators](/guide/account).

## Workflow Editor

The visual editor allows you to customize the path:

### Accessing the Editor

1. Open your campaign
2. Click **"Edit workflow"**
3. The editor opens in full screen

### Interface

- **Nodes**: represent states/actions
- **Connections**: links between nodes
- **Left panel**: action library
- **Central canvas**: construction area

### Node Types

#### States

- **Start**: workflow entry point
- **End**: end of the path
- **Custom state**: intermediate status

#### Actions

- **Send email**: automatic notification
- **Assign**: change the owner
- **Wait**: delay before next action
- **Condition**: branching based on criteria

## Creating a Workflow

### Example: Two-Step Validation

```
Start
  ↓
Initial verification (State)
  ↓
[Condition: documents complete?]
  ├── Yes → Manager validation (State)
  │           ↓
  │         [Approved?]
  │           ├── Yes → Validated (End)
  │           └── No → Rejected → Return to user
  └── No → Request additional information
              ↓
            Return to user
```

### Building the Workflow

1. Drag nodes from the left panel
2. Connect them by drawing lines
3. Configure each node (double-click)
4. Save

## Conditions

Conditions allow logical branching:

### Condition Types

- **Field value**: based on answer to a question
- **Attached files**: presence/absence of documents
- **Date**: before/after a deadline
- **Role**: based on current owner

### Configuration

1. Add a Condition node
2. Define the criteria
3. Create branches (Yes/No or multiple)

## Automatic Actions

### Send Email

Configure automatic notifications:
- **Recipient**: user, owner, fixed email
- **Template**: choose an email template
- **Delay**: immediate or delayed

### Assign

Automatically change the owner:
- Based on step reached
- Based on file type
- In rotation (load balancing)

### Webhook

Trigger an external action:
- Call to your system
- CRM integration
- Slack/Teams notification

## Best Practices

1. **Keep it simple** - A complex workflow is difficult to maintain
2. **Document** - Clearly name your nodes
3. **Test** - Verify every possible path
4. **Iterate** - Start simple, progressively enrich

## Next Steps

- [Notifications](/features/notifications) - Configure emails
- [API & Webhooks](/features/api-webhooks) - External integrations
- [Automatic reminders](/features/reminders) - Scheduled reminders
