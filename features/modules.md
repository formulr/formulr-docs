---
title: Module Types
description: Discover all the module types available in Formulr to create your forms.
---

# Module Types

Formulr offers over 15 module types to create forms adapted to all needs.

## Text Input

### Short Text

Single-line input field.

**Usage**: First name, last name, city, company...

**Options**:
- Minimum/maximum length
- Regular expression (custom validation)
- Input mask

---

### Long Text (Textarea)

Multi-line text area.

**Usage**: Comments, descriptions, messages...

**Options**:
- Number of displayed lines
- Maximum length
- Character counter

---

### Email

Field with email address validation.

**Usage**: Contact email collection

**Automatic validation**:
- Email format verified
- Blocked domains (optional)

---

### Phone

Field with automatic formatting.

**Usage**: Phone numbers

**Options**:
- International format
- Default country code
- Format validation

---

### Number

Numeric field.

**Usage**: Quantities, amounts, age...

**Options**:
- Minimum/maximum value
- Number of decimals
- Increment step
- Prefix/suffix (€, %, etc.)

## Dates

### Date

Date picker with calendar.

**Usage**: Date of birth, deadlines...

**Options**:
- Display format
- Minimum/maximum date
- Disabled days (weekends, holidays)

---

### Date and Time

Date with time selection.

**Usage**: Appointments, events...

**Options**:
- 12h/24h format
- Interval (15min, 30min, 1h)
- Available time slots

---

### Date Range

Period selection (from/to).

**Usage**: Vacation, reservations, contracts...

**Options**:
- Minimum/maximum duration
- Overlaps allowed

## Choice

### Dropdown (Select)

Dropdown menu with single choice.

**Usage**: Selection from a predefined list

**Options**:
- List of options
- Search in list
- Default option
- "Other" choice with free input

---

### Radio Buttons

Single choice with visible options.

**Usage**: Few options (2-5), important choices

**Options**:
- Vertical/horizontal display
- Images for options
- Default option

---

### Checkboxes

Multiple choice.

**Usage**: Multiple selection, acceptances

**Options**:
- Min/max number of selections
- Exclusive options
- "Select all"

---

### Yes/No (Toggle)

Binary question.

**Usage**: Acceptances, simple confirmations

**Options**:
- Custom labels (Yes/No, Accept/Decline)
- Default value

## Files

### File Upload

Single document upload.

**Usage**: ID, proof of address...

**Options**:
- Accepted types (PDF, images, etc.)
- Maximum size
- Automatic preview

---

### Multiple Upload

Multiple file upload.

**Usage**: Complete folder, multiple photos

**Options**:
- Min/max number of files
- Maximum total size
- Types per file

---

### Photo / Camera

Image capture or upload.

**Usage**: Selfie, document photo

**Options**:
- Camera only / gallery allowed
- Minimum resolution
- Cropping

## Special Modules

### Signature

Handwritten signature area.

**Usage**: Validation, legal commitment

**Options**:
- Area dimensions
- Stroke color
- Signature required

::: tip
The signature can be integrated into PDF templates for electronically signed documents.
:::

---

### Table

Tabular data with dynamic rows.

**Usage**: Product list, participants, details

**Options**:
- Columns (name, type, width)
- Min/max number of rows
- Default row

---

### Contact Information

Complete contact details block.

**Usage**: Contact form, complete coordinates

**Includes**:
- Title
- First name / Last name
- Email
- Phone
- Address

---

### Address

Address field with autocomplete.

**Usage**: Postal address

**Options**:
- Autocomplete (Google Places)
- Separate or unified fields
- Allowed countries

---

### IBAN

Bank account details input.

**Usage**: Direct debits, transfers

**Validation**:
- IBAN format verified
- Check key
- Allowed countries

---

### HTML Block

Custom content (text, images).

**Usage**: Instructions, information, separators

**Options**:
- WYSIWYG editor
- Raw HTML
- Dynamic variables

## Common Parameters

All modules share these options:

| Parameter | Description |
|-----------|-------------|
| **Label** | Displayed question |
| **Placeholder** | Example text |
| **Help text** | Additional indication |
| **Required** | Must be filled |
| **Identifier** | Unique technical name |
| **Width** | Half-width or full-width |

## Next Steps

- [Field Validation](/features/validation)
- [Conditional Logic](/features/conditional-logic)
- [Sections and Modules](/guide/sections-modules)
