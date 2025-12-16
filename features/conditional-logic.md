---
title: Conditional Logic
description: Show or hide sections based on user responses.
---

# Conditional Logic

Conditional logic allows you to dynamically adapt your form based on user responses.

## Principle

Show or hide entire sections based on:
- The value of a previous field
- A combination of conditions
- The user's profile

## Configuring a Condition

### On a Section

1. Open the section settings (⚙️)
2. Enable **"Conditional display"**
3. Define the condition

### Simple Example

> Display the "Company Details" section only if the type is "Professional"

```
IF [Client Type] = "Professional"
THEN Display [Company Details]
```

## Types of Conditions

### Equality

```
[Field] = "Value"
[Field] ≠ "Value"
```

### Numeric Comparison

```
[Amount] > 1000
[Age] >= 18
[Quantity] < 10
```

### Presence

```
[Field] is filled
[Field] is empty
[File] is uploaded
```

### List

```
[Field] contains "Value"
[Field] is in ["Option1", "Option2"]
```

## Combined Conditions

### AND (all conditions)

```
IF [Type] = "Company"
AND [Revenue] > 100000
THEN Display [Enterprise Accounts section]
```

### OR (at least one condition)

```
IF [Country] = "France"
OR [Country] = "Belgium"
THEN Display [French-speaking options]
```

### Complex Combinations

```
IF ([Type] = "Company" AND [Revenue] > 100000)
OR [Partner] = "Yes"
THEN Display [Premium offer]
```

## Common Use Cases

### Adaptive Form

**Scenario**: Individual vs Professional

```
Section "Personal Information" → Always visible

Section "Company Information"
  IF [You are] = "A professional"

Section "Individual supporting documents"
  IF [You are] = "An individual"

Section "Company supporting documents"
  IF [You are] = "A professional"
```

### Deep Dive

**Scenario**: Details if positive response

```
[Do you have a vehicle?] Yes/No

Section "Vehicle Details"
  IF [Do you have a vehicle?] = "Yes"
```

### Qualification

**Scenario**: Questions based on budget

```
[Budget] Dropdown

Section "Starter Offer"
  IF [Budget] < 1000

Section "Business Offer"
  IF [Budget] >= 1000 AND [Budget] < 5000

Section "Enterprise Offer"
  IF [Budget] >= 5000
```

## Best Practices

### 1. Keep it Simple

- Avoid overly nested conditions
- Prefer multiple simple sections

### 2. Test All Paths

- Verify each combination
- Make sure no case is forgotten

### 3. Inform the User

- Explain why certain sections appear
- Use explicit section titles

### 4. Watch Out for Required Fields

- A required field in a hidden section won't block submission
- Check the consistency of your validations

## Limitations

- Conditions apply to **sections**, not individual modules
- Maximum 10 conditions per section
- No loops (a section cannot depend on itself)

## Next Steps

- [Field Validation](/features/validation) - Validation rules
- [Workflows](/features/workflows) - Advanced automation
