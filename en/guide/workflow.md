---
title: Workflow and Statuses
description: Customize the lifecycle of your responses with workflows.
---

# Workflow and Statuses

Workflows allow you to define the validation path of your responses.

## Default Statuses

Each response goes through different statuses:

| Status | Description | Color |
|--------|-------------|---------|
| **In Progress** | User is filling the form | Blue |
| **Completed** | All steps are filled | Yellow |
| **Validated** | Approved by your team | Green |
| **Rejected** | Non-compliant, corrections requested | Red |
| **Archived** | Processing finished | Gray |

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

- [Notifications](/en/features/notifications) - Configure emails
- [API & Webhooks](/en/features/api-webhooks) - External integrations
- [Automatic reminders](/en/features/reminders) - Scheduled reminders
