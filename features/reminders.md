---
title: Automatic Reminders
description: Configure automatic reminders for incomplete or pending forms.
---

# Automatic Reminders

Reminders allow you to recover abandoned responses and speed up processing of pending cases.

## Principle

Formulr automatically sends reminders to users who:

- Haven't completed their form
- Have a response awaiting action
- Need to provide additional information

## Types of Reminders

### Incomplete Forms

For users who started but didn't finalize:

| Parameter | Description |
|-----------|-------------|
| **Delay** | Time before first reminder |
| **Frequency** | Interval between reminders |
| **Maximum** | Max number of reminders |

**Example**:
- First reminder: 24h after abandonment
- Following reminders: every 3 days
- Maximum: 3 reminders

### Additional Information Requested

When information is missing:

1. You request additional information (via response details)
2. The user receives a notification
3. Automatic reminders are sent if no response

### Pending Signatures

For unsigned documents:

- Automatic reminder after X days
- Configurable per document template
- Integrated with Yousign

## Configuration

### Enable Reminders

1. Open your campaign
2. **Settings** > **Reminders**
3. Enable the desired reminder type

### Available Parameters

| Option | Description |
|--------|-------------|
| **Enable** | On/Off |
| **Initial delay** | Hours/days before first reminder |
| **Interval** | Time between each reminder |
| **Maximum number** | Reminder limit |
| **Hours** | Allowed sending times |
| **Days** | Exclude weekends/holidays |

### Sending Hours

Avoid sending at inappropriate times:

- **Allowed hours**: 9am-7pm by default
- **Allowed days**: Monday-Friday
- **Time zone**: Based on user or fixed

## Customize Messages

### Reminder Template

Each reminder type has its template:

```liquid
Hello {{ user.firstName }},

You started filling out the "{{ campaign.title }}" form
but haven't finished it yet.

Click below to resume where you left off:

<a href="{{ link.continue }}">Resume my form</a>

{{ remaining_fields }} fields remaining to complete.

Best regards,
The team
```

### Specific Variables

```liquid
{{ remaining_fields }}      // Number of remaining fields
{{ progress_percent }}      // Completion percentage
{{ last_activity }}         // Last activity
{{ relance_number }}        // Reminder number (1, 2, 3...)
{{ days_since_start }}      // Days since start
```

### Advanced Customization

Adapt the message based on context:

```liquid
{% if relance_number == 1 %}
  Quick reminder: your form is waiting for you!
{% elsif relance_number == 2 %}
  Don't forget to finalize your request.
{% else %}
  Last chance to complete your form.
{% endif %}
```

## Reminder Strategies

### Progressive

Increasing intensity:

1. **D+1**: Friendly reminder
2. **D+4**: Reminder with help
3. **D+7**: Urgent reminder
4. **D+14**: Last reminder

### Contextual

Adapted to the journey:

- Early abandonment: "Need help getting started?"
- Mid-journey abandonment: "You only have X fields left"
- Late abandonment: "You're almost there!"

### Incentive

With motivation:

- Remind of benefits
- Deadline if applicable
- Offer assistance

## Tracking and Statistics

### Available Metrics

| Metric | Description |
|--------|-------------|
| **Recovery rate** | % of forms completed after reminder |
| **Reminders sent** | Total number sent |
| **Average delay** | Time between reminder and completion |
| **Unsubscribes** | Users who unsubscribed |

### Dashboard

In **Statistics** > **Reminders**:

- Recovery trends
- Performance by reminder type
- Best sending times

## Exclusions

### Automatic Exclusion

Some users are automatically excluded:

- Unsubscribed from reminders
- Invalid email
- Response already completed
- Maximum number reached

### Manual Exclusion

For a specific response:

1. Open the response details
2. **Actions** > **Disable reminders**

## Best Practices

### 1. Manage Frequency

- No more than one reminder per week
- Maximum 3-4 reminders total
- Respect user preferences

### 2. Provide Value

Each reminder should:
- Remind of the benefit
- Offer help
- Facilitate resuming

### 3. Personalize

- Use first name
- Mention the context
- Adapt the tone

### 4. Test and Optimize

- A/B test messages
- Analyze performance
- Adjust delays

### 5. Respect GDPR

- Unsubscribe link required
- Privacy policy accessible
- Deletion after expiration

## Workflow Integration

For advanced scenarios, combine with workflows:

```
[Every day at 10am]
    ↓
[Incomplete responses > 48h]
    ↓
[If VIP = Yes]
    → [Phone call by sales rep]
[Else]
    → [Standard reminder email]
```

[Learn more about workflows →](/features/workflows)

## Next Steps

- [Notifications](/features/notifications) - Email configuration
- [Workflows](/features/workflows) - Advanced automation
- [Responses](/guide/responses) - Manage responses
