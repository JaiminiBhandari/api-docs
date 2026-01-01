# Send Money (GPS Remittance)

## Overview

The **Send Money** feature allows you to create a new **GPS remittance transaction** by transferring funds from your wallet balance to a recipient in a supported country.

This flow supports **multiple countries and currencies** in a single unified interface and provides real-time quotes based on the selected corridor.

---

## Supported Countries

The Send Money feature currently supports the following destination countries:

* India
* Philippines
* Hong Kong
* United Arab Emirates
* Saudi Arabia

> Available countries may vary by environment and configuration.

---

## How to Send Money

Follow the steps below to create a remittance transaction. The same flow applies to **all supported countries**.

### Step-by-Step Instructions

1. Go to **Balance** from the sidebar.
2. Click the **Send** button.
3. In the **Send Money** screen, locate the **Recipient** section.
4. Select the **destination country** from the Country dropdown.
5. Select an existing **recipient** or create a new one if required.
6. In the **Transfer Details** section, enter the amount you want to send.
7. Select the **sending currency** (wallet currency).
8. Review the **receiving amount and currency**, calculated automatically.
9. Verify all details and confirm the transaction.

---

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

* Exchange rates are applied automatically based on the selected country and currencies.
* The **They Receive** amount updates in real time when the send amount changes.
* Currency pairs are restricted to supported corridors only.

---

## Transfer Limits

Transfer limits are enforced **per destination country and receiving currency**. These limits are evaluated in real time and displayed to the user in the **Limits** section of the Send Money screen.

### Supported Receiving Currencies

* USD
* AED
* BHD
* SAR
* USDT
* USDC

> Available currencies depend on the selected destination country and corridor configuration.

### Limit Rules

* Each country–currency pair has its own **minimum** and **maximum** transfer amount.
* Limits are applied to the **receiving amount** (They Receive).
* Transactions outside configured limits are blocked.

### Country-Specific Minimum Limits

The following minimum receiving amount limits are currently configured:

* **India**: Minimum transfer amount is **500.0000 INR**
* **Philippines**: Minimum transfer amount is **100.0000 PHP**

### Example Limit Messages

* **Minimum limit violation (India)**
  `Minimum transfer amount for India is 500.0000 INR.`

* **Minimum limit violation (Philippines)**
  `Minimum transfer amount for Philippines is 100.0000 PHP.`

Limits are updated automatically when the destination country or receiving currency changes.

---

## Validation Rules

* You must have sufficient wallet balance to initiate a transfer.
* The selected country must be supported.
* A valid recipient must be selected.
* Currency and country combinations must be supported.
* Transfer amount must be within configured limits for the selected country and currency.

---

## Error Scenarios

| Error Code              | Description                                              |
| ----------------------- | -------------------------------------------------------- |
| INSUFFICIENT_FUNDS      | Wallet balance is not enough to complete the transfer    |
| CORRIDOR_NOT_SUPPORTED  | Selected country or currency pair is not supported       |
| RECIPIENT_INVALID       | Selected recipient is invalid or inactive                |
| TRANSFER_LIMIT_EXCEEDED | Transaction exceeds configured minimum or maximum limits |

---

## Environment Notes

* This feature is available in both **Sandbox** and **Production**, depending on configuration.
* Sandbox transactions return predictable responses for testing purposes.
* No real funds are moved in Sandbox.

---

## Summary

The **Send Money** page provides a single, consistent flow for creating GPS remittance transactions across multiple countries. By selecting a destination country, recipient, and amount, users can quickly send funds while the system automatically handles currency conversion, limit enforcement, and validation.
