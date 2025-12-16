---
title: Configuration
description: Configure the advanced settings of your Formulr campaign.
---

# Configuration

The **Settings** tab of your campaign provides access to all configuration options.

## Owner

The campaign owner is the primary team member:

- Receives notifications by default
- Contact displayed to users
- Can be changed at any time

To assign an owner:
1. Click on the **Owner** field
2. Select a team member from the list
3. The change is saved automatically

## Deadline

The deadline defines the time limit to complete the form.

### No Deadline

No time limit. Users can respond whenever they wish.

### Fixed Date

A specific date identical for everyone:
- Useful for seasonal campaigns
- All users have the same deadline

### Calculated Date

The deadline is calculated individually:
- Define a number of days
- The countdown starts when the user begins
- E.g., "30 days after start"

::: tip Example
For a document collection with a calculated date of 15 days:
- Marie starts on December 1st → deadline December 16th
- Pierre starts on December 5th → deadline December 20th
:::

## Automatic Reminders

Enable reminders for incomplete forms.

### Configuration

1. Check **"Enable automatic reminders"**
2. Choose the frequency:
   - Once per day
   - Every 2 days
   - Once per week
   - Every 2 weeks
3. Define the maximum number of reminders

### How It Works

- Reminders are sent automatically by email
- Only to users with steps in progress
- Stop when the form is completed
- Respect the maximum number defined

## Sharing

### Sharing Link

Once the campaign is published, copy the link to share it:
- Via email
- On your website
- In your communications

### Email Invitation

Send invitations directly from Formulr:
1. Enter email addresses
2. Press Enter to validate each address
3. Click Send

Recipients receive an email with the direct link.

::: warning Warning
Sharing is only available after the campaign is published.
:::

## AI Analysis

Configure artificial intelligence to analyze responses.

### Analysis Prompt

Define the instructions for the AI:

```
Analyze the submitted documents and provide:
- Key points identified
- Recommendations
- Alerts if anomalies are detected
```

The AI will use these instructions to generate an automatic summary of each response.

### Usage

- The AI summary appears in the detail of each response
- Helps process a large number of submissions quickly
- Does not replace human verification

## Campaign Tabs

From the campaign header, access different sections:

| Tab | Function |
|--------|----------|
| **Edit** | Form editor |
| **Settings** | Configuration (this page) |
| **Responses** | List of submissions |
| **Documents** | PDF templates |
| **Translations** | Multilingual versions |

## Next Steps

- [Publishing](/en/guide/publishing) - Make the campaign accessible
- [Managing responses](/en/guide/responses) - Process submissions
- [Workflows](/en/features/workflows) - Automate processes
