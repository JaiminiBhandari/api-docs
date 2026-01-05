# Bank Account Verification for USD (US Dollar)

## Overview

The **Testing Accounts** documentation provides standardized mock bank account details that enable developers to fully test payment workflows in the **Sandbox environment** without using real bank accounts or funds. This follows the same principle as PSP test cards (for example, `4242 4242 4242 4242`) and ensures deterministic, repeatable test outcomes.

Testing accounts support end-to-end validation of **deposits, withdrawals, payouts, and bank account validations** across all supported corridors and for both **individual** and **business** entities, specifically tailored for USD transactions.

---
## How to Use Testing Accounts

1. Switch your environment to **Sandbox**.
2. Go to Bank Accounts section from Sidebar.
3. Choose the currency for the bank account.
4. Select the country code that matches the chosen currency.
5. Enter the beneficiary name  provided in the testing account table.
6. Enter the bank name provided in the testing account table.
7. Enter account number provided in the testing account table.
8. Enter the SWIFT / BIC code exactly as shown in the testing account table.
9. Enter the IBAN from the testing account details.
10. Save and submit the bank account details.
<!-- 5. Initiate a deposit, withdrawal, payout, or validation request. -->
<!-- 6. Verify API responses and webhook events against the expected scenario. -->

> Note : Click here to show Testing Account Table : 👉 **[Testing Account Table](#testing-account-table)**



---

## Supported Test Scenarios

Testing accounts are configured to return predictable outcomes:

| Scenario | Description                                         | Typical Use Case             |
| -------- | --------------------------------------------------- | ---------------------------- |
| Success  | Transaction completes successfully                  | Happy-path testing           |
| Failure  | Transaction is rejected with a fixed error code     | Error handling and retries   |
| Pending  | Transaction remains pending before final resolution | Async processing and polling |

---

## Accepted Testing Accounts for USD

The following testing accounts are **always accepted in Sandbox** for SAR-related transactions. These values can be reused across test runs and automated test suites.

## SWIFT/BIC and IBAN – Quick Reference

### SWIFT / BIC Code
A **SWIFT** (Society for Worldwide Interbank Financial Telecommunication) or **BIC** (Bank Identifier Code) is used to identify a specific bank in international transactions.

- Length: **8 or 11 characters**
- Example: `DEUTDEFF` or `DEUTDEFF500`

> SWIFT and BIC refer to the same code and can be used interchangeably.

---

### IBAN (International Bank Account Number)
An **IBAN** uniquely identifies an individual bank account across national borders.

- Length: **Up to 34 alphanumeric characters**
- Example: `DE89 3704 0044 0532 0130 00`

> The IBAN helps reduce errors and ensures faster, more accurate payment processing.

---


### Testing Account Table
> Use these values to create **dummy bank accounts** and validate your integration without using real banking information.

| Entity Type | Currency | Country Code | Beneficiary Name   | Bank Name      | Account Number | SWIFT / BIC | IBAN             | Expected Result |
| ----------- | -------- | ------------ | ------------------ | -------------- | -------------- | ----------- | ---------------- | --------------- |
| Individual  | USD      | USA          | Test US Individual | JPMorgan Chase | 5000000001     | TESTUS33    | US00TEST00000001 | Success         |
| Business    | USD      | USA          | Test US Business   | JPMorgan Chase | 5000000002     | TESTUS99    | US00TEST00000002 | Success         |

---

<!-- ## API Examples -->

<!-- ### Example: Payout (Success)

```
POST /v1/payouts
{
  "entity_type": "individual",
  "amount": 1000,
  "currency": "SAR",
  "bank_account": {
    "account_number": "9876543210",
    "iban": "SA00TEST0000000001",
    "recipient_name": "Test SAR Individual"
  }
}
```

**Expected Response**

```
{
  "status": "success",
  "payout_id": "po_test_12345"
}
```

--- -->

<!-- ## Error Code Mapping

In the **Sandbox environment**, validation errors are returned based on specific bank account input fields. The table below explains which field causes which error and under what condition.

| Field Name        | Error Code             | Description                                                                 |
|-------------------|------------------------|-----------------------------------------------------------------------------|
| Currency          | CORRIDOR_NOT_SUPPORTED | The selected currency is not supported for the chosen country in Sandbox  |
| Country Code      | CORRIDOR_NOT_SUPPORTED | The country code does not match the selected currency                      |
| Beneficiary Name  | BENEFICIARY_BLOCKED    | The beneficiary name is configured as blocked in Sandbox testing data      |
| Bank Name         | BANK_ACCOUNT_INVALID   | The bank name does not match the testing account table                     |
| Account Number    | BANK_ACCOUNT_INVALID   | The account number is invalid or does not match testing data               |
| SWIFT / BIC       | BANK_ACCOUNT_INVALID   | The SWIFT/BIC code is incorrect, incomplete, or not listed in test data    |
| IBAN              | BANK_ACCOUNT_INVALID   | The IBAN is invalid or does not match the testing account details           |
| Account Balance   | INSUFFICIENT_FUNDS     | The testing account is configured to simulate insufficient funds           | -->

### Notes
- All validations apply **only in Sandbox**.
- Field values must match the **Testing Account Table exactly**.
- Any mismatch results in a deterministic error code suitable for automated testing.

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
- Real bank accounts are not supported in Sandbox.

---

## Summary

The Testing Accounts documentation enables safe, comprehensive testing of all payment flows using corridor-specific mock accounts. By providing predictable outcomes and stable error codes, developers can confidently validate integrations before moving to production, specifically for USD transactions.
