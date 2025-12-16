---
title: AI Analysis
description: Leverage artificial intelligence to analyze your responses and extract insights.
---

# AI Analysis

Formulr integrates artificial intelligence features to help you analyze and leverage your collected data.

## Features

### Automatic Summary

AI generates a concise summary of each response:

- Extracted key points
- Highlighted important information
- Synthesis of entered data

### Sentiment Analysis

For free text fields:

- Tone detection (positive, neutral, negative)
- Identification of satisfaction points
- Alerts on negative comments

### Entity Extraction

Automatic identification:

- People's names
- Mentioned companies
- Dates and amounts
- Geographic locations

### Categorization

Automatic response classification:

- By theme
- By urgency
- By request type

## Usage

### On a Response

1. Open the response details
2. Click **Analyze with AI**
3. The analysis displays in the side panel

### Bulk

To analyze multiple responses:

1. Select responses in the list
2. **Actions** > **AI Analysis**
3. A consolidated report is generated

## Smart Summary

### What is Analyzed

AI reviews all response fields and extracts:

- Identification information
- Expressed requests
- Points of attention
- Important numerical data

### Summary Format

```
Response Summary #REF-2024-001

Requester: John Doe, ABC Company
Type: Quote request
Estimated amount: $15,000

Key points:
• Website redesign project
• Desired timeline: 3 months
• Budget validated by management

Attention:
• Urgent request mentioned
• Existing client (history detected)
```

## File Analysis

### PDF Documents

AI can analyze uploaded PDFs:

- Text extraction
- Content summary
- Compliance verification

### Images

For photos and scans:

- OCR (text recognition)
- Document type detection
- Key information extraction

## Action Suggestions

Based on analysis, AI can suggest:

| Detected Situation | Suggestion |
|-------------------|-----------|
| Urgent request | High priority recommended |
| High amount | Escalation to management |
| Missing information | Request additional information |
| Unhappy customer | Phone call suggested |

## Configuration

### Enable AI Analysis

1. **Settings** > **Artificial Intelligence**
2. Enable desired features

### Available Options

| Option | Description |
|--------|-------------|
| **Automatic summary** | Generates summary for each new response |
| **Sentiment analysis** | Enables sentiment detection |
| **Entity extraction** | Automatically identifies entities |
| **Suggestions** | Proposes recommended actions |

### Automatic vs Manual Analysis

- **Automatic**: Analysis triggered on each submission
- **Manual**: Analysis on demand only

## Workflow Integration

Use AI analysis in your workflows:

```
[New response]
    ↓
[AI Analysis]
    ↓
[If sentiment = negative]
    → [Alert support team]
    → [High priority]
[If amount > 50000]
    → [Notify management]
```

## Privacy

### Data Processing

- Analysis performed securely
- Data not used to train models
- GDPR compliant

### Limitations

To protect privacy:

- No analysis of sensitive data (health, religion...)
- Option to disable per field
- Anonymization possible

## Current Limitations

- Primarily text analysis
- Supported languages: French, English
- Maximum 100 automatic analyses/day per campaign

## Use Cases

### Customer Service

- Automatic request prioritization
- Detection of dissatisfied customers
- Smart routing

### Human Resources

- Application analysis
- Skills extraction
- Automatic scoring

### Sales

- Lead qualification
- Potential estimation
- Opportunity detection

## Next Steps

- [Workflows](/features/workflows) - Automate with AI
- [Export](/guide/export) - Export analyses
- [API & Webhooks](/features/api-webhooks) - Integrate AI
