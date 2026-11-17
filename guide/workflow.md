---
title: Workflow and Statuses
description: Customize the lifecycle of your responses with workflows.
---

# Workflow and Statuses

Workflows allow you to define the validation path of your responses.

## Dossier Statuses

Each dossier has a status. It determines whether the client can still edit their answers and which screen they see when they come back to their link.

::: info Screenshots
The screenshots on this page show the interface in French. Status and action names are given as they appear in the interface, with their English meaning.
:::

| Status (admin) | How it is reached | What the client sees | Email to the client* |
|----------------|-------------------|----------------------|----------------------|
| **Création** (Creation) | The client started the form, or the admin clicked "Réviser la réponse" (Revise the response), "Réouvrir" (Reopen) or "Valider l'étape" (Validate the step). | The form is editable. If fields were rejected, a red banner at the top lists the sections to fix. | "Your dossier needs changes" (when the admin puts it back in this status). |
| **À valider** (To validate) | The client submitted the current step. | End screen "Thank you, your response has been recorded" (or the custom screen), with the contact button and messaging. The dossier is read-only. | None. The admins are notified. |
| **Validé** (Validated) | The admin clicked "Valider la réponse" (Validate the response). | End screen. The dossier is closed, no changes possible. | "Your dossier has been validated". |
| **Rejeté** (Rejected) | The admin clicked "Refuser la réponse" (Reject the response). | "Dossier refused" screen. No changes possible. | "Your dossier has been rejected". |

\* These are the automatic emails, which can be customized in the email templates (see [Account and collaborators](/guide/account)).

![The four statuses in the responses list](/screenshots/responses/statuses.png)

The **Archived** status also exists ("Archiver" action, reserved for users with the delete right).

On a closed dossier, a banner recalls the situation, for example "The client has submitted their dossier and is awaiting your decision" or "This dossier has been validated. The client can no longer access it".

![Validated dossier: banner and Reopen button](/screenshots/responses/validated-dossier.png)

### Which action to take depending on the situation

All actions are in the main button of the dossier detail and in its dropdown menu ("edit responses" right required).

| Situation | Goal | Admin action | Result for the client |
|-----------|------|--------------|-----------------------|
| **To validate**: everything is correct (last step or single-step form) | Close | "Valider la réponse" then confirm | Dossier validated and closed |
| **To validate**: information is missing or a document is incorrect | Give control back to the client | 1. Reject the relevant fields<br>2. "Réviser la réponse" (for an additional document, see [Annexes](/guide/annexes)) | The form becomes editable again. The client receives a "Your dossier needs changes" email with a link to their dossier. A red banner shows what to fix. |
| **To validate**: the request is inadmissible | Reject | "Refuser la réponse" | "Dossier refused" screen |
| **Rejected**: you finally want to let the client fix their dossier | Reopen | 1. Reject the module(s) to fix<br>2. "Réviser la réponse" | The form becomes editable again. The client receives a "Your dossier needs changes" email with a link to their dossier. A red banner shows what to fix. |
| **Validated**: a change is needed after validation | Reopen | 1. Reject the module(s) to fix<br>2. "Réouvrir" | The form becomes editable again. The client receives a "Your dossier needs changes" email with a link to their dossier. A red banner shows what to fix. |
| **Creation**: the admin already has everything needed | Validate without waiting | "Valider la réponse" (possible even if the client has not submitted) | Dossier validated |

For a multi-step form, see [Multi-step forms](/guide/responses#multi-step-forms-moving-the-client-from-one-step-to-the-next).

### The rule to remember

::: warning Remember
The client can only edit their dossier when it is in the **Creation** status. To give control back: first reject the module(s) to fix, then "Réviser la réponse" (or "Réouvrir" if the dossier is validated).

Rejecting a field is not enough: it flags the error, but the dossier stays read-only for the client until it is back in Creation. Rejecting the whole dossier ends the journey.
:::

### Moving between statuses

- **Validate or reject:** from a "To validate" dossier, use the dossier actions (see [Validate or reject a dossier](/guide/responses#validate-or-reject-a-dossier)).
- **Reopen a dossier:** "Réviser la réponse" or "Réouvrir" puts the dossier back to "Creation" (see the table above). The full process, including requesting additional documents, is described in [Annexes](/guide/annexes).
- **Move a multi-step dossier forward:** "Valider l'étape" (see [Multi-step forms](/guide/responses#multi-step-forms-moving-the-client-from-one-step-to-the-next)).
- **Archive:** "Archiver" action on the dossier, reserved for users with the delete right.

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
