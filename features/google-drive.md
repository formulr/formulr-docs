---
title: Google Drive connector
description: Connect your Google Drive to create and fill working documents straight from your responses.
---

# Google Drive connector

The Google Drive connector lets you create working documents (spreadsheets, text documents) **straight from a response**, from your own templates, and fill them in Google. The files stay in **your** Google Drive: Formulr only creates them and keeps the link with the response.

Handy whenever your team must produce, for each response received, one or more internal documents from a standard template (tracking sheet, calculation table, report...).

::: info Feature on request
The connector is enabled by the Formulr team, company by company. If it does not show in your settings, request it through your **Support** access.
:::

## Before you start

- A **Google Workspace** account (personal Gmail accounts work, but without shared drives).
- A **shared drive** to store the documents: the files then belong to your organization, not to a person. If the employee who connected the account leaves, the documents stay.
- The **Google account to connect**. We recommend a **dedicated company account** (for example `formulr@your-company.com`) rather than a staff member's personal account.

::: warning Role of the connected account
The role of the connected account on the shared drive decides what Formulr can do:

| Google role | Create and edit | Delete a document |
|-------------|-----------------|-------------------|
| **Manager** | yes | **permanently deleted** |
| **Content manager** | yes | **moved to the trash** (emptied by Google after 30 days) |
| Contributor or less | no | no |

For an immediate permanent deletion, the connected account must be a **Manager** of the shared drive.
:::

## 1. Connect your Google Drive

1. **Settings** > **Google Drive**.
2. Click **Connect Google Drive** and authorize Formulr with the chosen account.
3. Click **Choose a folder** to set the **destination folder**.
   - This is the connector's root folder. For **each response**, Formulr automatically creates a dedicated subfolder inside it, where the documents created for that response are stored. So you only pick this folder **once**.
   - The Google window only shows **folders**, this is expected. Click **once** on the folder you want, then **Select** (do not open it).
   - The **Shared drives** tab lists your shared drives; the **My Drive** tab your personal space.

Once connected, the screen shows the account, the destination folder, and your template library below.

![Google Drive settings: connection and template library](/screenshots/google-drive-settings.png)

## 2. Prepare your templates

Templates are files **living in your Google Drive** (Google Docs, Google Sheets, Word or Excel). Formulr keeps a reference and makes a copy of it on each document creation.

In **Settings** > **Google Drive**, **Document templates** section:

1. Click **Add a template**.
2. Give it a **name** (the one your teams will see).
3. Click **Choose from Google Drive** and select the template file.
4. Save.

You can rename, remove or reorder templates. **Removing a template** removes it from every campaign but **does not delete** the file in your Drive.

::: tip A fixed template applies to the next documents
Since each document is a copy of the template, if you fix the template in your Drive, the documents created afterwards start from the updated version.
:::

## 3. Set up a campaign

In a **campaign's settings**, **Google Drive** section:

- **Enable** Google Drive for the campaign.
- **Folder names**: choose how to name the subfolder created for each response. The easiest way is to click the **Variables** button to insert the available fields (name, first name, campaign name, date...) and add free text between them. A preview shows the result. Variables are written in Liquid; here are examples you can copy and paste:

  | To enter in the field | Resulting folder |
  |-----------------------|------------------|
  | <code v-pre>{{ campaignResponse.user.lastName }} {{ campaignResponse.user.firstName }}</code> | `Dupont Jean` |
  | <code v-pre>{{ campaignResponse.user.lastName }} - {{ campaignResponse.campaign.name }}</code> | `Dupont - 2026 campaign` |
  | <code v-pre>{{ date.now }} / {{ campaignResponse.user.lastName }}</code> | `2026-09-11 / Dupont` |

  The `/` character creates a subfolder level: in the last example, one folder per date, then one folder per client inside. If you leave the field empty, the response reference is used.
- **Offered templates**: **All templates** of the company, or **a selection** from your library.

![A campaign's Google Drive settings: enable, folder names and offered templates](/screenshots/google-drive-campaign.png)

## 4. Day to day, on a response

On a response, a **Google Drive** block (visible to administrators only) lets you:

- **Create a document**: from a campaign template, or blank (spreadsheet or text document). You name it, it is created in the response folder.
- **Open in Drive**: the document opens in the Google editor (new tab). You fill it, saving is automatic.
- **Rename** or **Delete** a document.

Each response has its own folder in your Drive, named according to the campaign setting.

## Good to know

- **Only documents created by Formulr** appear in the list. A file you add by hand in the Drive folder will not show there (it stays visible in Drive, via **Open the folder**).
- **Editing happens in Google**, in a new tab: Google does not allow its editor inside another application.
- **Access rights to the files** are managed in your Drive (shared drive members), not in Formulr.
- **Privacy**: the files stay in your Google Drive. Formulr only accesses the documents it created itself.
