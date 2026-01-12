E # Bank Account Verification

## Overview

The **Testing Accounts** documentation provides standardized mock bank account details that enable developers to fully test payment workflows in the **Sandbox environment** without using real bank accounts or funds. <!-- This follows the same principle as PSP test cards (for example, `4242 4242 4242 4242`) and ensures deterministic, repeatable test outcomes.-->

Testing accounts support end-to-end validation of **deposits, withdrawals, payouts, and bank account validations** across all supported corridors and for both **INDIVIDUAL** and **BUSINESS** entities.

---

## How to Use Testing Accounts

Testing accounts allow you to simulate bank account creation and verification in the sandbox environment without real banking credentials. Follow these steps to integrate and test bank account workflows:

**Select a Testing Account**: Choose a testing account from the tables below based on the currency and entity type (INDIVIDUAL or BUSINESS) you want to test. Each table provides standardized mock details for testing.

**Create the Bank Account**: Use the **[Create Bank Account](/wallet-api/bank-accounts#create-bank-account)** API endpoint to add the testing account to your sandbox wallet. Include the following fields from the selected testing account:

- `Entity Type`
- Currency
- Country Code
- Beneficiary Name
- Bank Name
- Account Number
- SWIFT / BIC Code
- IBAN

**Verify Account Creation**: In the sandbox environment, the API will accept the exact values from the testing tables and create the account successfully. Any deviations may result in errors, simulating real-world validation.

> Note: Testing accounts work only in the Sandbox environment. Do not use these details in Production.

---

## Supported Test Scenarios

Testing accounts are configured to return predictable outcomes:

| Scenario | Description                                         | Typical Use Case           |
| -------- | --------------------------------------------------- | -------------------------- |
| Success  | Transaction completes successfully                  | Happy-path testing         |
| Failure  | Transaction is rejected with a fixed error code     | Error handling and retries |
| Pending  | Transaction remains pending before final resolution | Async processing           |

---

## SWIFT/BIC and IBAN – Quick Reference

#### SWIFT / BIC Code

A **SWIFT** (Society for Worldwide Interbank Financial Telecommunication) or **BIC** (Bank Identifier Code) is used to identify a specific bank in international transactions.

- Length: **8 or 11 characters**
- Example: `DEUTDEFF` or `DEUTDEFF500`

> SWIFT and BIC refer to the same code and can be used interchangeably.

---

#### IBAN (International Bank Account Number)

An **IBAN** uniquely identifies an individual bank account across national borders.

- Length: **Up to 34 alphanumeric characters**
- The structure of an IBAN consists of a two-letter country code, which must be in uppercase.
- Example: `AE89 3704 0044 0532 0130 00`

> The IBAN helps reduce errors and ensures faster, more accurate payment processing.

---

### Testing Account Table for AED (UAE Dirham)

> Use these values to create **sample bank accounts** and validate your integration without using real banking information.

| Entity Type | Currency | Country Code | Beneficiary Name    | Bank Name    | Account Number | SWIFT / BIC | IBAN                 |
| ----------- | -------- | ------------ | ------------------- | ------------ | -------------- | ----------- | -------------------- |
| INDIVIDUAL  | AED      | ARE          | Test UAE Individual | Emirates NBD | 1000000001     | TESTAEAD    | AE00TEST000000000001 |
| BUSINESS    | AED      | ARE          | Test UAE Business   | Emirates NBD | 1000000003     | TESTAEAD    | AE00TEST000000000003 |

### Testing Account Table for BHD (Bahraini Dinar)

> Use these values to create **sample bank accounts** and validate your integration without using real banking information.

| Entity Type | Currency | Country Code | Beneficiary Name        | Bank Name              | Account Number | SWIFT / BIC | IBAN                 | Expected Result |
| ----------- | -------- | ------------ | ----------------------- | ---------------------- | -------------- | ----------- | -------------------- | --------------- |
| INDIVIDUAL  | BHD      | BHR          | Test Bahrain Individual | Bank of Bahrain Kuwait | 3000000001     | TESTBHBM    | BH00TEST000000000001 | Success         |
| BUSINESS    | BHD      | BHR          | Test Bahrain Business   | Bank of Bahrain Kuwait | 3000000002     | TESTBHBM    | BH00TEST000000000002 | Success         |

### Testing Account Table for SAR (Saudi Riyal)

> Use these values to create **sample bank accounts** and validate your integration without using real banking information.

| Entity Type | Currency | Country Code | Beneficiary Name    | Bank Name     | Account Number | SWIFT / BIC | IBAN                 | Expected Result |
| ----------- | -------- | ------------ | ------------------- | ------------- | -------------- | ----------- | -------------------- | --------------- |
| INDIVIDUAL  | SAR      | SAU          | Test KSA Individual | Al Rajhi Bank | 2000000001     | TESTSARI    | SA00TEST000000000001 | Success         |
| BUSINESS    | SAR      | SAU          | Test KSA Business   | Al Rajhi Bank | 2000000002     | TESTSARI    | SA00TEST000000000002 | Success         |

### Testing Account Table for USD (US Dollar)

> Use these values to create **sample bank accounts** and validate your integration without using real banking information.

| Entity Type | Currency | Country Code | Beneficiary Name   | Bank Name      | Account Number | SWIFT / BIC | IBAN             | Expected Result |
| ----------- | -------- | ------------ | ------------------ | -------------- | -------------- | ----------- | ---------------- | --------------- |
| INDIVIDUAL  | USD      | USA          | Test US Individual | JPMorgan Chase | 5000000001     | TESTUS33    | US00TEST00000001 | Success         |
| BUSINESS    | USD      | USA          | Test US Business   | JPMorgan Chase | 5000000002     | TESTUS99    | US00TEST00000002 | Success         |

---

### Notes

- All validations apply **only in Production**.
- Field values must match the **Testing Account Table exactly**.

---

## Entity Coverage

Testing accounts are provided for:

- **Individuals**: Personal bank accounts
- **Businesses**: Corporate or merchant accounts

Ensure the entity type in your API request matches the entity type defined for the testing account.

---

## Important Notes

- Testing accounts function **only in Sandbox**.
- Do not use these values in production.

---
