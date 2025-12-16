---
title: Stripe Integration
description: Accept payments in your forms with Stripe integration.
---

# Stripe Integration

Formulr integrates with Stripe to allow you to collect payments directly in your forms.

## Use Cases

- **Paid registrations**: Events, training, subscriptions
- **Orders**: Products, services
- **Accepted quotes**: Payment after validation
- **Donations**: Fundraising

## Configuration

Stripe integration is native in Formulr. You don't need to create your own Stripe account, everything is managed by Formulr.

### Enable Payments

1. **Settings** > **Payments**
2. Enable the feature
3. Select the environment:
   - **Test**: For development (fictitious payments)
   - **Production**: For real payments
4. Save

## Add Payment to Form

### Payment Module

1. In the campaign editor, add the **Payment** module
2. Configure options:

| Option | Description |
|--------|-------------|
| **Amount** | Fixed or calculated |
| **Currency** | EUR, USD, GBP... |
| **Description** | Displayed label |
| **Payment methods** | Card, SEPA, etc. |

### Fixed Amount

For a single price:

```
Amount: 49.00 €
Description: Training registration
```

### Variable Amount

For an amount based on responses:

```
Amount: {{ responses.quantity.value[0] * 25 }}
Description: {{ responses.quantity.value[0] }} items at 25€
```

### Free Amount

Let the user choose:

```
Type: Free amount
Minimum: 5 €
Suggestion: 20 €
Maximum: 500 €
```

## Payment Methods

### Credit Card

Accepts:
- Visa
- Mastercard
- American Express
- French bank cards

### SEPA Direct Debit

For recurring or deferred payments:

1. User enters their IBAN
2. A SEPA mandate is created
3. The debit is processed

### Apple Pay / Google Pay

One-click payment on mobile:

1. Enable in Stripe settings
2. Buttons appear automatically

## Payment Process

### Standard Flow

1. User fills out the form
2. At payment step, they enter their information
3. Stripe secures the transaction (3D Secure if necessary)
4. Payment is confirmed
5. Response is saved

### Deferred Payment

To pay after validation:

1. Form is submitted without payment
2. You validate the request
3. A payment link is sent
4. User pays
5. Status is updated

### Installment Payment

With Stripe:

- 3x or 4x without fees (depending on your plan)
- Configuration in Stripe Dashboard
- Automatically offered if enabled

## Payment Tracking

### In Formulr

Each response displays:

| Information | Description |
|-------------|-------------|
| **Status** | Pending, Paid, Failed, Refunded |
| **Amount** | Sum paid |
| **Date** | Payment date |
| **Reference** | Stripe transaction ID |

### In Stripe

Find all details:

1. Stripe Dashboard > **Payments**
2. Search by reference or email
3. View complete history

## Receipts and Invoices

### Automatic Receipt

Stripe automatically sends a receipt to the payer's email.

### Custom Invoice

Generate an invoice from Formulr:

1. Create a PDF invoice template
2. Include payment variables:

```liquid
Invoice no. {{ payment.reference }}
Date: {{ payment.date | date: "%m/%d/%Y" }}

{{ payment.description }}
Amount: {{ payment.amount }} {{ payment.currency }}

Paid by card on {{ payment.date | date: "%m/%d/%Y" }}
```

## Workflows with Payment

### Payment Notification

```
[Payment received]
    ↓
[Send confirmation email]
[Notify team]
```

### Conditional Processing

```
[Payment received]
    ↓
[If amount > 1000]
    → [Assign to VIP]
    → [Generate premium invoice]
[Else]
    → [Standard processing]
```

### Failed Payment

```
[Payment failed]
    ↓
[Send alternative payment link]
[Notify support]
```

## Refunds

### From Formulr

1. Open the relevant response
2. **Payment** tab
3. Click **Refund**
4. Choose: Total or Partial
5. Confirm

### From Stripe

Refunds made in Stripe are automatically synchronized.

## Test Environment

### Test Cards

Use these numbers in test mode:

| Number | Result |
|--------|--------|
| `4242 4242 4242 4242` | Successful payment |
| `4000 0000 0000 0002` | Declined payment |
| `4000 0000 0000 3220` | 3D Secure required |

### Dates and Codes

- **Date**: Any future date
- **CVC**: Any 3 digits
- **Postal code**: Any 5 digits

## Security

### PCI DSS

- Formulr never stores card data
- Everything goes through Stripe's secure servers
- Automatic PCI DSS compliance

### 3D Secure

- Automatically enabled according to the bank
- Reduces fraud and disputes
- Transfers liability to the bank

### Webhooks

Formulr uses Stripe webhooks for:

- Real-time payment confirmation
- Management of pending payments (SEPA, etc.)
- Refund notifications

## Pricing

Payment fees are included in your Formulr subscription. See our [pricing page](https://formulr.fr/pricing) for more details.

## Troubleshooting

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| "Card declined" | Card declined | Request another card from customer |
| "Insufficient funds" | Insufficient provision | Customer must fund account |
| "3D Secure failed" | Authentication failed | Retry or another card |

### Check Configuration

1. **Settings** > **Payments**
2. Verify environment is correctly selected
3. Test with test card in Test mode

## Next Steps

- [Workflows](/features/workflows) - Automate after payment
- [PDF Templates](/features/pdf-templates) - Custom invoices
- [Notifications](/features/notifications) - Confirmation emails
