# Send Money (GPS Remittance)

## Overview

The **Send Money** feature allows you to create a new **GPS remittance transaction** by transferring funds from your wallet balance to a recipient in a supported country.

This flow supports **multiple countries and currencies** in a single unified interface and provides real-time quotes based on the selected corridor.

---

## How to Send Money (Remittance Process)

The remittance process involves three main steps:

### 1. Create a Recipient

Creating a recipient is the first step in sending money internationally. Recipients must be verified before they can receive funds, and the verification process varies by destination country.

To create a recipient, use the **[Create Recipient](/remittance-api/recipients#create-recipient)** API endpoint.

### 2. Get a Quote

Before executing a transaction, obtain a real-time exchange rate quote for the desired currency pair.

Use the **[Get Exchange Rate Quote](/remittance-api/quotes#get-exchange-rate-quote)** API endpoint to get a quote.

### 3. Execute Transaction

Once you have a quote and a verified recipient, execute the remittance transaction.

Use the **[Execute Transaction](/remittance-api/transactions#execute-transaction)** API endpoint to complete the transfer.

## Supported Countries

The Send Money feature currently supports the following destination countries:

- India
- Philippines
- Hong Kong
- United Arab Emirates
- Saudi Arabia

> Available countries may vary by environment and configuration.

## Field Descriptions

### Recipient Section

| Field Name | Description                                                |
| ---------- | ---------------------------------------------------------- |
| Country    | Destination country where the recipient will receive funds |
| Recipient  | The person or entity receiving the money                   |

### Transfer Details Section

| Field Name         | Description                               |
| ------------------ | ----------------------------------------- |
| You Send           | Amount deducted from your wallet balance  |
| Sending Currency   | Currency of your wallet balance           |
| They Receive       | Amount the recipient receives             |
| Receiving Currency | Local currency of the destination country |

---

## Currency Behavior

- Exchange rates are applied automatically based on the selected country and currencies.
- The **Receive** amount updates in real time when the send amount changes.
- Currency pairs are restricted to supported corridors only.

---

## Transfer Limits

Transfer limits are enforced **per destination country and receiving currency**.

### Supported Receiving Currencies

- USD
- AED
- BHD
- SAR
- USDT
- USDC

> Available currencies depend on the selected destination country and corridor configuration.

#### Country-Specific Currency Support

- **United Arab Emirates (UAE)**: Supports only **USDT** and **USDC**.
- **Saudi Arabia (SAR)**: Supports only **USDT** and **USDC**.

### Limit Rules

- Each country–currency pair has its own **minimum** and **maximum** transfer amount.
- Limits are applied to the **receiving amount** (They Receive).
- Transactions outside configured limits are blocked.

### Country-Specific Minimum Limits

The following minimum receiving amount limits are currently configured:

#### Business

| Country              | Minimum Transfer Amount | Maximum Transfer Amount |
| -------------------- | ----------------------- | ----------------------- |
| India                | 500.0000                | 2,000,000.0000          |
| Philippines          | 500.0000                | 1,000,000.0000          |
| Hong Kong            | 100.0000                | 5,000,000.0000          |
| Saudi Arabia         | N/A                     | N/A                     |
| United Arab Emirates | N/A                     | N/A                     |

#### Individual

| Country              | Minimum Transfer Amount | Maximum Transfer Amount |
| -------------------- | ----------------------- | ----------------------- |
| India                | 500.0000                | 1,000,000.0000          |
| Philippines          | 100.0000                | 500,000.0000            |
| Hong Kong            | 100.0000                | 1,000,000.0000          |
| Saudi Arabia         | N/A                     | N/A                     |
| United Arab Emirates | N/A                     | N/A                     |

Limits are updated automatically when the destination country or receiving currency changes.

---

## Validation Rules

- You must have sufficient wallet balance to initiate a transfer.
- The selected country must be supported.
- A valid recipient must be selected.
- Currency and country combinations must be supported.
- Transfer amount must be within configured limits for the selected country and currency.

---