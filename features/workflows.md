---
title: Workflows
description: Automate your processes with visual workflows and conditional actions.
---

# Workflows

Workflows allow you to automate actions based on events or conditions on your responses.

## Concept

A workflow consists of:

1. **Trigger**: The event that starts the workflow
2. **Conditions** (optional): Filters to target specific responses
3. **Actions**: What happens when the workflow executes

## Access Workflows

1. Open your campaign
2. Click on the **Workflow** tab
3. The visual editor displays

## Visual Editor

### Interface

The editor presents a canvas where you visually build:

- **Nodes**: Represent triggers, conditions and actions
- **Connections**: Links between nodes
- **Side panel**: Configuration of selected node

### Navigation

- **Zoom**: Mouse wheel or +/- buttons
- **Pan**: Right-click + drag
- **Selection**: Click on a node
- **Connection**: Drag from one port to another

## Triggers

### New Response

Executes when a response is submitted.

```
Trigger: New response
→ Action: Send notification
```

### Status Change

Executes when a response status changes.

```
Trigger: Status changes to "Validated"
→ Action: Generate PDF document
```

### Step Completed

Executes when a specific step is finalized.

```
Trigger: "Information" step completed
→ Action: Send confirmation email
```

### Scheduled

Executes at regular intervals.

```
Trigger: Every day at 9am
Condition: Responses pending for > 7 days
→ Action: Send reminder
```

## Conditions

### Simple Condition

Filter by field value:

```
IF [Amount] > 10000
THEN → Enterprise accounts action
ELSE → Standard action
```

### Multiple Conditions

Combine with AND/OR:

```
IF [Type] = "Company"
AND [Revenue] > 100000
THEN → Premium action
```

### Status Condition

```
IF [Status] = "Pending"
AND [Created] > 3 days ago
THEN → Automatic reminder
```

## Available Actions

### Notifications

| Action | Description |
|--------|-------------|
| **Email** | Send personalized email |
| **In-app notification** | Alert in admin interface |
| **Webhook** | Call external URL |

### Documents

| Action | Description |
|--------|-------------|
| **Generate PDF** | Create document from template |
| **Electronic signature** | Send for signature via Yousign |

### Management

| Action | Description |
|--------|-------------|
| **Change status** | Modify response status |
| **Assign** | Assign to team member |
| **Add tag** | Tag the response |

### Integrations

| Action | Description |
|--------|-------------|
| **Webhook** | POST to URL |
| **Zapier** | Trigger a Zap |

## Workflow Examples

### 2-Step Validation

```
[New response]
    ↓
[Send email to manager]
    ↓
[Wait for validation]
    ↓
[If validated] → [Generate contract] → [Send for signature]
[If rejected] → [Notify requester]
```

### Automatic Reminder

```
[Every day at 9am]
    ↓
[Incomplete responses > 3 days]
    ↓
[Send reminder email]
    ↓
[Increment reminder counter]
```

### Sales Process

```
[New response]
    ↓
[If amount > 50000]
    ↓ Yes
[Assign to Sales Management]
[Send priority alert]
    ↓ No
[Assign to regional sales rep]
```

## Action Configuration

### Personalized Email

1. Select the email template
2. Define the recipient:
   - Respondent's email
   - Fixed email
   - Response field
3. Customize subject and content with variables

### Webhook

1. Enter the destination URL
2. Configure headers (authentication)
3. Define the JSON payload
4. Test with an existing response

## History and Logs

### Execution Tracking

For each response, view:

- Executed workflows
- Timestamp
- Result (success/failure)
- Error details

### Debugging

In case of failure:

1. Check the error log
2. Verify conditions
3. Manually test the action
4. Fix and re-execute

## Best Practices

### 1. Start Simple

- One workflow = one objective
- Avoid overly complex workflows
- Split into multiple workflows if necessary

### 2. Test Before Publishing

- Use the test environment
- Verify with different scenarios
- Simulate edge cases

### 3. Document Your Workflows

- Name each workflow clearly
- Add descriptions
- Maintain documentation

### 4. Monitor Executions

- Regularly check logs
- Configure alerts for failures
- Analyze performance

## Limitations

- Maximum 20 workflows per campaign
- Maximum 50 nodes per workflow
- Minimum delay between executions: 1 minute

## Next Steps

- [Notifications](/features/notifications) - Email configuration
- [Reminders](/features/reminders) - Automate reminders
- [API & Webhooks](/features/api-webhooks) - External integrations
