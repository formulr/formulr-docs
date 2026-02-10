---
title: Module Types
description: Discover all the module types available in Formulr to create your forms.
---

# Module Types

Formulr offers 17 module types to build forms adapted to all needs: text input, choices, file upload, display content, and more.

## Text Input

### Short Text

Single-line text input field.

**Usage**: First name, last name, city, company...

**Options**:
- Minimum/maximum character count
- Placeholder text
- Repeatable (allow multiple entries)

---

### Long Text (Textarea)

Multi-line text area.

**Usage**: Comments, descriptions, messages...

**Options**:
- Maximum character count
- Placeholder text
- Repeatable (allow multiple entries)

---

### Number

Numeric input field.

**Usage**: Quantities, amounts, age...

**Options**:
- Minimum/maximum value
- Minimum/maximum number of digits
- Placeholder text
- Repeatable (allow multiple entries)

## Date

### Date

Date input field with configurable format.

**Usage**: Date of birth, deadlines, events...

**Options**:
- Date structure: `DD/MM/YYYY`, `MM/DD/YYYY`, or `YYYY/MM/DD`
- Date separator: `/`, `-`, or `.`
- Repeatable (allow multiple entries)

## Choice

### Multiple Choice

Versatile choice module supporting several display modes and data sources.

**Usage**: Surveys, product selection, category filtering...

**Display modes**:
- **Buttons** — Radio buttons (single) or checkboxes (multiple), vertical or horizontal layout
- **Dropdown** — Select menu with search

**Data source**:
- **Static** — Predefined list of options
- **API** — Dynamically loaded from an external endpoint (URL, method, headers, data path)

**Options**:
- Single or multiple selection
- Selection constraints (exact count, min/max range)
- "Other" option with free text input

---

### Yes/No

Binary choice displayed as radio buttons.

**Usage**: Consents, simple confirmations...

## Files

### Document

Single file upload with validation.

**Usage**: ID document, proof of address, resume...

**Options**:
- Accepted file types (PDF, images, etc.)
- Maximum file size (1–20 MB)
- Source file (pre-loaded document available for download)
- AI processing (if configured)

---

### Document Collection

Dynamic document gallery with configurable display rules.

**Usage**: Document library, conditional file access...

**Two sections**:
- **Generic files** — Pre-uploaded documents displayed for reference
- **Specific files** — Documents matching configurable rules or manual uploads

**Rule-based filtering**:
- Match by tag, type, filename, or creation date
- Match strategy: any rule or all rules
- Sort by creation date, label, or filename

**Options**:
- Display limit (1–20 documents)
- Allowed file types
- Maximum file size

## Display & Content

### WYSIWYG

Rich text content block (display only, no user input).

**Usage**: Instructions, terms & conditions, formatted information...

**Features**:
- Full rich text editor
- HTML formatting support
- Dynamic content display

---

### Image

Display an image in the form (no user input).

**Usage**: Branding, instructional diagrams, visual content...

**Options**:
- Width (1–100% of container)
- Center alignment toggle
- Accepted formats: PNG, JPG, JPEG, GIF (max 2 MB)

---

### Separator

Visual divider between form sections (no user input).

**Usage**: Organize sections, visual grouping...

**Options**:
- Optional text label

---

### Liquid

Dynamic content block using Liquid template language (display only).

**Usage**: Personalized messages, conditional content, variable substitution...

**Features**:
- Full Liquid template syntax
- Code editor with syntax highlighting
- Variable interpolation from form data

## Special Modules

### Contact Information

Pre-built contact form with toggleable fields.

**Usage**: User registration, lead capture, attendee forms...

**Available fields** (each can be shown/hidden and set as required):
- Company
- Civility
- First name / Last name
- Date of birth (with configurable date format)
- Place of birth
- Phone
- Email
- Address / Zip code / City
- Country
- Nationality

**Options**:
- Repeatable (allow multiple contact entries)

---

### Signature

Digital signature collection with document signing workflow.

**Usage**: Contract signing, approval workflows, legal documents...

**Signature types**:
- **Generic** — Current form user signs
- **Client-specific** — Designated signers (from contact info module or manual entry)

**Features**:
- Upload PDF documents to sign
- Visual signature placement editor (position per page)
- Multi-signer support
- Per-signer status tracking
- Custom button text

::: tip
Signatures are integrated with external e-signature services for legally binding documents.
:::

---

### RGPD Consent

GDPR/RGPD compliance checkbox.

**Usage**: Data privacy consent, newsletter opt-in, terms acceptance...

**Options**:
- Consent description text
- Required toggle

---

### Checkout

Shopping cart and payment integration.

**Usage**: Product ordering, subscriptions, donations, event tickets...

**Cart modes**:
- **Compact** — Minimal cart display
- **Full** — Detailed cart interface

**Options**:
- Auto-add products with quantities
- Required billing fields (address, zip, city, company, VAT, name, email, country)
- Prefill from authenticated user or contact info module
- Custom button text

---

### Iframe

Embed external content or services.

**Usage**: Third-party tools, calendar scheduling, external forms...

**Options**:
- URL to embed
- Completion tracking (pending/completed status)

## Common Parameters

All input modules share these options:

| Parameter | Description |
|-----------|-------------|
| **Label** | Displayed question |
| **Description** | Additional help text |
| **Required** | Must be filled |
| **Identifier** | Unique technical name |
| **Width** | Half-width or full-width |

## Next Steps

- [Field Validation](/features/validation)
- [Conditional Logic](/features/conditional-logic)
- [Sections and Modules](/guide/sections-modules)
