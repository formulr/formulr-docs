---
title: Field Validation
description: Configure validation rules to ensure the quality of collected data.
---

# Field Validation

Validation ensures that entered data meets your criteria before submission.

## Automatic Validation

Some modules have built-in validation:

| Module | Automatic Validation |
|--------|---------------------|
| **Email** | Valid email format |
| **Phone** | Valid phone format |
| **IBAN** | IBAN check key |
| **Date** | Valid date |
| **Number** | Numeric value |

## Required Field

The most common parameter:

1. Open the module settings
2. Enable **"Required"**
3. The user cannot continue without filling it

::: tip Visual Indicator
Required fields are marked with a red asterisk (*).
:::

## Validation Rules

### Text Length

For text fields:

| Parameter | Description |
|-----------|-------------|
| **Minimum** | Minimum number of characters |
| **Maximum** | Maximum number of characters |

**Example**: French postal code
- Minimum: 5
- Maximum: 5

### Numeric Values

For number fields:

| Parameter | Description |
|-----------|-------------|
| **Minimum** | Minimum accepted value |
| **Maximum** | Maximum accepted value |
| **Decimals** | Number of digits after decimal point |

**Example**: Percentage
- Minimum: 0
- Maximum: 100
- Decimals: 2

### Dates

For date fields:

| Parameter | Description |
|-----------|-------------|
| **Minimum date** | Cannot be before |
| **Maximum date** | Cannot be after |
| **Allowed days** | Exclude weekends, holidays |

**Example**: Appointment date
- Minimum: today
- Maximum: +30 days
- Exclude: Saturdays, Sundays

### Files

For uploads:

| Parameter | Description |
|-----------|-------------|
| **Accepted types** | Allowed extensions |
| **Maximum size** | In MB |
| **Number of files** | Min/max for multiple upload |

**Example**: ID document
- Types: PDF, JPG, PNG
- Max size: 10 MB

## Regular Expression (Regex)

For advanced custom validations:

### Common Examples

**French postal code**:
```regex
^[0-9]{5}$
```

**SIRET number**:
```regex
^[0-9]{14}$
```

**License plate**:
```regex
^[A-Z]{2}-[0-9]{3}-[A-Z]{2}$
```

### Configuration

1. Open the text module settings
2. In "Advanced validation", add the expression
3. Define the custom error message

## Error Messages

### Default Messages

Formulr displays appropriate messages:
- "This field is required"
- "The email address is not valid"
- "The value must be between X and Y"

### Custom Messages

For each rule, you can customize the message:

1. In validation settings
2. "Error message" field
3. Enter your text

**Example**:
> "Please enter a French postal code with 5 digits"

## Server-side Validation

In addition to browser-side validation, Formulr verifies:

- All rules at submission
- Integrity of uploaded files
- Data consistency

::: warning Security
Don't rely solely on client-side validation. Server validation is always enforced.
:::

## Best Practices

### 1. Be Explicit

- Indicate the expected format in the placeholder
- Use help text for complex cases

### 2. Clear Messages

- Explain how to correct the error
- Avoid technical jargon

### 3. Don't Over-validate

- Accept common formats
- Avoid overly restrictive rules

### 4. Test

- Try boundary values
- Verify error cases

## Next Steps

- [Module Types](/features/modules) - All available modules
- [Conditional Logic](/features/conditional-logic) - Dynamic display
