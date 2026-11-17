---
title: Account and Collaborators
description: Configure your account, manage your collaborators and their roles, customize automatic emails.
---

# Account and collaborators

This page covers the **account settings** (information, subscription, usage), **collaborator management** and roles, and the customization of the **automatic emails** sent to your clients.

::: info Screenshots
The screenshots below show the interface in French.
:::

::: warning Prerequisites
Sign in with an account that has administration rights. Access depends on each collaborator's role (see [Roles and permissions](#roles-and-permissions)).
:::

## Open the account settings

1. **Sign in:** open the platform with an administrator account.
2. **Open the settings:** click the gear icon at the bottom of the left menu.

![Opening the account settings from the left menu](/screenshots/account/open-settings.png)

The settings menu on the left includes "General", "Collaborators", "Email templates", "Webhooks" and "Electronic signature", among others.

## General settings

The "General" tab gathers:

- **Company information:** organization name, billing address, VAT number.
- **Your plan:** the current subscription and its state. The "Manage billing" button gives access to your invoices.
- **Monthly usage:** number of client responses against the monthly limit, and electronic signatures used.
- **Plan limits:** number of collaborators and disk space used.

![General tab of the account settings](/screenshots/account/settings-general.png)

::: tip Collaborator limit reached
In "Plan limits", click "Add seats" next to the collaborator counter to increase the number of collaborators.
:::

## Manage collaborators

Open "Collaborators" in the left menu. The screen has two tabs, "Members" and "Roles".

![Members list](/screenshots/account/collaborators-members.png)

- **Members:** the list of collaborators, with their role and the companies they can access. The ⋮ menu on each row gives access to actions on the member.
- **Roles:** role management and consultation.
- **Search and filters:** find a collaborator by name, or filter the list by role with the "All roles" selector.
- **Create an account:** the button at the top right adds a new collaborator.

## Roles and permissions

1. **Open the "Roles" tab:** in "Collaborators", click "Roles".
2. **Select a profile:** the list of roles is displayed with the number of members in each. Click a role to see its permissions and access restrictions, grouped by area (campaigns, responses, tags, folders, company settings).

![Role detail: permissions and restrictions](/screenshots/account/roles-detail.png)

The available roles are: "Super Admin", "Admin", "Campaign manager", "Editor", "Operator", "Reader" and "Finance". "Super Admin" has full access, including billing and member management.

3. **Compare roles:** click "Compare all roles" to display a comparison table of each profile's permissions.

![Roles and permissions comparison table](/screenshots/account/roles-compare.png)

Excerpt of the campaign and response permissions:

| Permission | Super Admin | Admin | Campaign manager | Editor | Operator | Reader | Finance |
|------------|:-----------:|:-----:|:----------------:|:------:|:--------:|:------:|:-------:|
| View campaigns | Yes | Yes | Yes | Yes | Yes | Yes | No |
| Create and duplicate campaigns | Yes | Yes | Yes | No | No | No | No |
| Edit the configuration and the form | Yes | Yes | Yes | Yes | No | No | No |
| Publish / archive | Yes | Yes | Yes | No | No | No | No |
| Delete campaigns | Yes | Yes | Yes | No | No | No | No |
| View responses | Yes | Yes | Yes | Yes | Yes | Yes | No |
| Create, edit, validate and reject responses | Yes | Yes | Yes | No | Yes | No | No |
| Export and download files | Yes | Yes | Yes | No | Yes | No | No |
| Generate and send documents | Yes | Yes | Yes | No | Yes | No | No |
| Delete / archive responses | Yes | Yes | Yes | No | No | No | No |

::: info
The full table, with the other areas (tags, folders, company settings), is available in the "Roles and permissions" window. Roles are assigned per company, from a collaborator's profile.
:::

## Create a collaborator account

1. **Open the form:** in "Collaborators", click "Create an account".
2. **Fill in the details:** enter the collaborator's first name, last name and email address.
3. **Choose a role:** select from the list the role matching the access rights you want to grant.
4. **Save:** click "Save" to create the account.

![Collaborator account creation form](/screenshots/account/create-account.png)

## Account email templates

In the "Email templates" tab, find the automatic emails sent to your clients. These templates are configured **at the account level** and apply by default to all dossiers.

The customizable templates are: "Response approved", "Response created", "Changes required", "Response link", "Response rejected", "Response reminder", "Step update", "New comment" and "User invitation". Each one is marked "Default" until it is customized.

![List of customizable email templates](/screenshots/account/email-templates-list.png)

::: info Sender address
The sender address is fixed for deliverability reasons: it cannot be changed.
:::

### Customize an email

1. **Select the email:** click the email to edit, for example "Response approved", then click "Custom" (the "Layout" setting) to replace the default template.
2. **Edit the message:** change the subject and the content of the email. The available variables (client first name, client last name, campaign name, link to the dossier...) can be copied in one click and let you personalize the message. The content uses Liquid syntax.
3. **Check:** review the result in the preview.
4. **Save:** click "Save". The FR / EN switch lets you write each language version.

![Email template editor with variables and preview](/screenshots/account/email-template-editor.png)

::: warning "Custom" layout
With the "Custom" layout, you must provide a complete HTML email (header, body, footer and styles).
:::

## Automatic emails of a campaign

Each campaign can also adapt its own emails.

1. **Open the settings:** in the campaign, click the "Settings" tab.
2. **Reach the emails:** scroll down to the "Automatic emails" section, then click "Emails sent to respondents".
3. **Adjust each email:** enable or disable each email as needed, or select a template to customize its content. Changes are saved immediately.

![Automatic emails sent to respondents in the campaign settings](/screenshots/account/campaign-automatic-emails.png)

The emails offered are: "Campaign invitation", "Dossier creation confirmation", "Change request", "Dossier validated", "Dossier rejected", "Step change", "Automatic reminder", "New comment" and "Dossier link recovery".

::: info The automatic reminder
The "Automatic reminder" email has no switch of its own: it is driven by the campaign's reminder setting. See [Reminders](/guide/reminders).
:::

## Next steps

- [Campaign configuration](/guide/configuration)
- [Reminders](/guide/reminders)
- [Integrated messaging](/guide/messaging)
