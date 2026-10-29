---
title: AI agents on documents
description: Have AI automatically check each document uploaded by your clients (identity document, company registration, proof of address).
---

# AI agents on documents

An **AI agent** plugs into a **Document** module of your form. As soon as the client uploads a file, the agent reads it and checks that it matches what is expected: the right type of document, the required information, consistency with the form answers. The result shows directly on the field, in the response.

To analyze the **whole file** (all answers and all documents together), see [Dossier analysis by AI](./ai-dossier-analysis).

## Available agents

| Agent | What it checks |
|-------|----------------|
| **Identity document** | Official identity document (ID card, passport, driving licence): last name, first name, document number, date of birth, expiry date, issuing country. The last name and first name must match the ones entered in the form (regardless of case, order and accents). |
| **KBIS** | French company registration extract (Kbis). |
| **Proof of address** | Proof of address. |

::: info Another type of document?
Agents are provided by Formulr. To check a new type of document, request it through your **Support** access.
:::

## Add an agent to a Document module

1. Open the campaign in the **editor** (**Edit** tab).
2. Click the **Document** module: its settings open in the right panel.
3. In the **AI Agents** section, choose the agent to use.
4. Turn on **Can update status** if you want the AI verdict to approve or reject the field automatically (see below).
5. Publish the campaign update.

![AI agent on a Document module](/screenshots/ai-agent-module-en.png)

## The result on the response

In the response, the field shows an **AI** badge with the agent's verdict:

| Verdict | Meaning |
|---------|---------|
| **Processing** | The document has just been uploaded, the check is running. |
| **Verified** | The document matches what is expected. |
| **Incorrect** | Something is missing or does not match (wrong document, different name, missing information...). |

With the **Can update status** option:
- a **Verified** document sets the field to **Approved**;
- an **Incorrect** document sets the field to **Rejected**.

Without this option, the verdict is only an indication: you approve or reject the field yourself.

![AI agent verdict on a response field](/screenshots/ai-agent-result-en.png)

## Good to know

- **You stay in control**: even when the AI has updated the status, an administrator can always change it.
- **The check runs on each upload**: if the client replaces their document, the agent checks it again.
- **Accepted formats** are the ones of the Document module (PDF, PNG, JPG by default).
- AI is a **verification aid**: when in doubt, open the document and check it yourself.
