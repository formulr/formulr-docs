---
title: Data Export
description: Export your campaign data in CSV, Excel, or PDF format.
---

# Data Export

Formulr allows you to export your data in different formats for analysis or archiving.

## Export from Response List

### Selecting Responses

1. Go to the **Responses** tab of your campaign
2. Check the responses to export
   - Or click "Select all"
3. Click the **Export** button

### Available Formats

| Format | Usage |
|--------|-------|
| **CSV** | Import into Excel, Google Sheets, databases |
| **Excel (.xlsx)** | Native Excel file with formatting |
| **PDF** | Printable summary per response |

## Export Content

### Included Data

- Respondent information (name, email)
- Creation and modification date
- Response status
- All values entered by module
- Metadata (IP, browser, etc.)

### CSV/Excel Structure

Each row = one response
Each column = one form field

```csv
ID,Email,Name,FirstName,Date,Status,Question1,Question2,...
abc123,marie@example.com,Dupont,Marie,2024-12-01,Validated,Answer1,Answer2,...
```

## File Export

Uploaded files are not directly included in the CSV/Excel export.

### Downloading Files

1. Open the response detail
2. Click on each file to download it
3. Or use the "Download all files" button

### Bulk File Export

For a large number of responses:
1. Contact support
2. A ZIP export can be prepared

## Export via API

For automated exports, use the API:

```bash
GET /api/v1/campaigns/{id}/responses?format=csv
```

[API Documentation →](/en/features/api-webhooks)

## Scheduled Exports

::: info Coming Soon
Scheduled exports (daily, weekly) will be available soon.
:::

## Best Practices

1. **Export regularly** - To back up your data
2. **Use filters** - Export by period or status
3. **Archive exports** - Keep a history
4. **Respect GDPR** - Secure personal data

## Next Steps

- [API & Webhooks](/en/features/api-webhooks) - Automate exports
- [PDF Templates](/en/features/pdf-templates) - Personalized documents
