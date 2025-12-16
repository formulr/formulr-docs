---
title: Email Notifications
description: Configure automatic emails sent to users and your team.
---

# Email Notifications

Formulr sends automatic emails to keep your users and team informed at each step of the process.

## Types of Notifications

### For Respondents

| Notification | Trigger |
|--------------|---------|
| **Submission confirmation** | Response sent |
| **Acknowledgment of receipt** | Response received by team |
| **Request for additional information** | Missing information |
| **Reminder** | Incomplete form |
| **Validation** | Response accepted |
| **Rejection** | Response declined |
| **Signature requested** | Document to sign |
| **Signature complete** | Document signed |

### For the Team

| Notification | Trigger |
|--------------|---------|
| **New response** | Submission received |
| **Assignment** | Response assigned |
| **Processing reminder** | Pending response |
| **Daily summary** | Activity summary |

## Global Configuration

### Access Settings

1. Go to **Settings** > **Emails**
2. Configure global options

### Sender

| Parameter | Description |
|-----------|-------------|
| **Sender name** | Displayed name (e.g., "Formulr Team") |
| **Reply email** | Address for replies |

### Design

- **Logo**: Displayed in email header
- **Primary color**: Buttons and accents
- **Footer**: Legal notices, links

## Customize Emails

### Available Templates

Each email type can be customized:

1. **Settings** > **Emails** > **Templates**
2. Select the template to modify
3. Edit the content

### Available Variables

Use these variables in your templates:

#### Response

```liquid
{{ response.reference }}        // Unique reference
{{ response.status }}           // Current status
{{ response.createdAt }}        // Creation date
{{ response.completedAt }}      // Completion date
```

#### Respondent

```liquid
{{ user.firstName }}            // First name
{{ user.lastName }}             // Last name
{{ user.email }}                // Email
{{ user.fullName }}             // Full name
```

#### Campaign

```liquid
{{ campaign.title }}            // Title
{{ campaign.description }}      // Description
```

#### Links

```liquid
{{ link.continue }}             // Resume the form
{{ link.view }}                 // View the response
{{ link.download }}             // Download the PDF
```

### Template Example

```html
Hello {{ user.firstName }},

Your request {{ response.reference }} has been received.

Our team will review it as soon as possible.

<a href="{{ link.view }}">Track my request</a>

Best regards,
The {{ campaign.title }} team
```

## Campaign Notifications

### Specific Configuration

Each campaign can have its own rules:

1. Open the campaign
2. **Settings** > **Notifications**
3. Enable/disable each type

### Internal Recipients

Define who receives notifications:

- **Owner**: Campaign creator
- **Team**: Assigned members
- **Specific email**: Fixed address

### Conditions

Send conditional notifications:

```
IF [Amount] > 10000
THEN Notify management@company.com
```

## Workflow Notifications

For advanced scenarios, use workflows:

1. Create a workflow
2. Add "Send email" action
3. Configure custom template
4. Define conditions

[Learn more about workflows →](/en/features/workflows)

## Sending History

### View History

For each response:

1. Open the response details
2. **Activity** tab
3. View all sent emails

### Available Information

- Date and time sent
- Recipient
- Notification type
- Status (sent, opened, clicked)

## Deliverability

### Best Practices

To ensure email delivery:

1. **SPF/DKIM**: Automatically configured
2. **Custom domain**: Recommended for high volumes
3. **Whitelist**: Communicate the sending address

### In Case of Problems

If emails don't arrive:

1. Check spam folder
2. Check sending history
3. Test with another address
4. Contact support

## Unsubscribe

### Unsubscribe Link

All emails include a GDPR-compliant unsubscribe link.

### Manage Preferences

Users can:

- Unsubscribe from reminders
- Keep important notifications
- Manage their preferences

## Limitations

- Maximum 1000 emails/day per campaign
- Maximum attachment size: 10 MB
- No sending to mailing lists

## Next Steps

- [Reminders](/en/features/reminders) - Automate reminders
- [Workflows](/en/features/workflows) - Advanced notifications
- [PDF Templates](/en/features/pdf-templates) - Documents to attach
