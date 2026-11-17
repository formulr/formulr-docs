---
title: Managing Responses
description: Find, validate and process your clients' dossiers.
---

# Managing Responses

Each client submission is a **dossier**. This page explains where to find them, how to validate or reject them, how to follow their progress and how to step in on the client's behalf.

::: info Screenshots
The screenshots below show the interface in French.
:::

## Where to find client dossiers

Three places give access to dossiers:

1. **"Home" tab:** only the dossiers assigned to you. Counters summarize your activity (assigned dossiers, unread messages, in progress, pending, late). "See all" opens the full list.

   ![Home: assigned dossiers](/screenshots/responses/home-assigned.png)

2. **"Responses" tab:** all the dossiers of all your campaigns. View tabs (for example "All", "To validate", "In progress", "My responses") quickly filter the list.

   ![Responses: all dossiers](/screenshots/responses/all-responses.png)

3. **From a campaign:** select a campaign, then click its "Responses" tab to show only the related dossiers.

   ![Responses of a campaign](/screenshots/responses/campaign-responses.png)

The list shows, for each dossier:

| Column | Description |
|--------|-------------|
| **Client name** | Client name and last modification date |
| **Campaigns** | Campaign concerned (global list only) |
| **Progress** | Dossier progress, with a check mark when a step is validated |
| **Deadline** | Dossier deadline, if one is set |
| **Last login** | Date of the client's last activity |
| **Status** | Dossier state (see [Dossier statuses](/guide/workflow#dossier-statuses)) |

## Filters and Search

In the "Responses" tab of a campaign:

- **Search by name:** find a client by name.
- **Status:** filter by dossier state.
- **Tags:** filter by the tags set on dossiers.
- **Assigned to me:** show only your dossiers.
- **Export / Import / Create:** export the list, import dossiers or create one.

## Dossier Detail

Click a dossier to open it.

- **Header:** client name, dossier status and action buttons ("Validate the response", or "Validate the step" on a multi-step dossier). The ⋮ menu groups the links, sending a reminder and downloading.
- **Content:** the dossier sections, with their status and a progress bar. Use "Expand all" and the "Status" filter to navigate. Uploaded files and captured signatures are visible there.
- **Right panel:** client information and the "Messages" button, campaign information (reminders), dossier organization (assignment, internal reference, tags).
- **Below the content:** "Add an annex" (see [Annexes](/guide/annexes)), "Documents", "Custom fields" and "History" with internal comments.
- **AI summary:** available if AI analysis is configured.

## Validate or reject a dossier

The decision can be made at three levels, from the finest to the broadest.

::: warning Client notification
Validating or rejecting individual modules or sections triggers no notification. The client receives an email only when the status of the whole dossier changes (validated, rejected or put back to "Création"). See the status table in [Workflow and statuses](/guide/workflow#dossier-statuses).
:::

1. **Module level:** at the top right of each module, change its status individually. The statuses offered are "Rejected", "Pending" and "To validate" (editable by the client), as well as "Validated" and "To validate (locked)" (locked).

   ![Changing a module's status](/screenshots/responses/action-module-level.png)

2. **Section level:** at the top right of each section, the "Actions" menu lets you validate or reject all of its content.

   ![Actions on a section](/screenshots/responses/action-section-level.png)

3. **Dossier level:** at the top right of the dossier, click the small arrow next to "Validate the response" to validate or reject the entire dossier.

   ![Global actions on the dossier](/screenshots/responses/action-dossier-level.png)

To know which action to choose depending on the dossier status (validate, reject, reopen), see [Which action to take depending on the situation](/guide/workflow#which-action-to-take-depending-on-the-situation). To ask again for a document, see [Annexes](/guide/annexes).

## Follow the progress of a multi-step dossier

When the campaign has several steps, the list of steps appears at the top of the dossier. Three icons show the progress of each one:

| Icon | Meaning |
|------|---------|
| Check mark | Step validated |
| Pencil | Step in progress |
| Hourglass | Step to complete |

The step you are viewing is underlined. If it differs from the current step, a banner says so and offers "Go to the current step".

![Step tracking of a dossier](/screenshots/responses/multi-step-progress.png)

## Multi-step forms: moving the client from one step to the next

A step is a human checkpoint: the client fills in a step, the admin validates it, and the next step then opens for the client.

1. **Step 1, the client fills in** (Création): they enter data and submit.
2. **Step 1, the admin checks** (À valider): the client sees the end screen.
3. **Step 2**: the admin clicks "Valider l'étape" (Validate the step), and the dossier goes back to Création on step 2.
4. **Last step, closing**: the admin clicks "Valider la réponse" (Validate the response), and the dossier is Validé.

| Situation | Admin action | Effect | What the client sees |
|-----------|--------------|--------|----------------------|
| Step N submitted and correct, not the last one | "Valider l'étape" | Moves to step N+1, status put back to Création | The next step opens. "Step updated" email with the dossier link |
| Step N submitted, some modules are still to validate | "Valider l'étape" and tick "Valider également les N module(s) en attente" (also validate the N pending module(s)) | Rejected modules are not changed by this action | Same |
| Step N submitted but needs fixing | Reject the fields, then "Réviser la réponse" | Stays on step N, in Création | Fixing step N, with the red banner |
| A step was validated too quickly, the previous step must be fixed | "Annuler la validation de l'étape" (Cancel the step validation) | Back to step N-1, in Création | The client returns to the previous step, their answers are kept |
| Last step submitted and correct | "Valider la réponse" | Dossier validated | Dossier closed |
| The admin views a past step | "Charger l'étape en cours" (Load the current step) | No status action is possible on a past step | Nothing changes |

The menu next to the validation button separates two families of actions.

![Step actions and global actions](/screenshots/responses/step-and-global-actions.png)

**Step actions**

They validate the current step or cancel its validation to go back to the previous step. For example, to go back to step 2 of a 3-step dossier, cancel the validation of step 3.

**Global actions**

They apply to the whole dossier, not to a particular step:

- **Revise the response:** reopen a dossier so it can be edited (see [Annexes](/guide/annexes)).
- **Validate or reject the response:** approve or reject the whole dossier.
- **Archive or delete:** remove the dossier from active responses, or delete it.

For the general rule (the client can only edit their dossier in the Creation status), see [The rule to remember](/guide/workflow#the-rule-to-remember).

## Assign a dossier to a collaborator

Open the dossier, then select the collaborator you want to assign it to ("Assigné à" field, right column, "Organisation réponse client" section). Once the dossier is assigned, the collaborator and the campaign owner receive the notifications related to its follow-up, notably when it is created, when it is submitted, when messages sent by the client are received, and so on.

![Assign a dossier to a collaborator](/screenshots/responses/assign-dossier.png)

## Take over a client dossier

You can complete or edit the information on the client's behalf. Click the pencil icon next to the content to edit: a window opens with the section's fields, then click "Submit".

![Dossier submitted by the client, with the edit pencils](/screenshots/responses/edit-on-behalf-list.png)

![Editing a section on the client's behalf](/screenshots/responses/edit-on-behalf-modal.png)

## Statuses and Workflow

A dossier is editable by the client while it is in "Création", then read-only ("To validate", "Validated" or "Rejected"). For the detail of each status and what the client sees, see [Workflow and statuses](/guide/workflow).

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

- [Workflow and statuses](/guide/workflow) - Understand a dossier's lifecycle
- [Annexes](/guide/annexes) - Ask the client for additional information
- [Reminders](/guide/reminders) - Remind clients
- [Integrated messaging](/guide/messaging) - Talk inside the dossier
- [Data export](/guide/export) - Retrieve your data
- [PDF templates](/features/pdf-templates) - Generate documents
