# Recipient Verification

## Overview

The **Recipient Verification** process ensures that all recipients added to the system comply with regulatory, and corridor-specific requirements before they can receive funds through GPS remittance transfers.

This process is tightly integrated with the **Create Recipient** flow and varies based on the selected **destination country**.

## How to Create a Recipient

Creating a recipient is the first step in sending money internationally. Recipients must be verified before they can receive funds, and the verification process varies by destination country.

### Using the API

To create a recipient, use the **[Create Recipient](/remittance-api/recipients#create-recipient)** API endpoint. This endpoint allows you to add recipients to your sandbox environment.

---

## Recipient Creation Flow

Recipient creation is completed in **three sequential steps**:

1. **Basic Info**
2. **Personal Details**
3. **Payment Method**

> Each step must be completed successfully before proceeding to the next.

---
<!-- 
## Step 1: Basic Info

### Fields

| Field Name     | Required | Description                                |
| -------------- | -------- | ------------------------------------------ |
| Recipient Type | Yes      | Type of recipient (INDIVIDUAL or BUSINESS) |
| Country        | Yes      | Destination country of the recipient       |

### Rules

- Only **supported countries** are selectable.

---

## Step 2: Personal Details depend on the destination country and corridor configuration.

Personal details are collected to identify the recipient and ensure compliance with local regulations. The required fields vary by country and may include name, contact information, and address details.

---

## Step 3: Payment Method

Payment method requirements depend on the destination country and corridor configuration.

Examples include:

- Bank Account/ Wallet-based payouts

> Payment method details are validated against the selected country and currency. -->

## Add a new recipient for **India**

### Tesing Recipient Record

The following Sample data is used for testing purposes only and does not represent a real individual.

#### Basic Info

| Field          | Value                  |
| -------------- | ---------------------- |
| Recipient Type | INDIVIDUAL or BUSINESS |
| Country        | India                  |

#### Personal Details (Individual)

| Field      | Sample Value                                                  |
| ---------- | ------------------------------------------------------------- |
| First Name | Rohan                                                         |
| Last Name  | Sharma                                                        |
| Email      | [rohan.sharma@testmail.com](mailto:rohan.sharma@testmail.com) |
| Phone      | 9876543210                                                    |
| City       | Mumbai                                                        |
| State      | Maharashtra                                                   |
| Post Code  | 400001                                                        |
| Address    | Flat 12B, Andheri East, Mumbai                                |

#### Personal Details (Business)

| Field         | Sample Value                                          |
| ------------- | ----------------------------------------------------- |
| Business Name | ABC Corporation                                       |
| Email         | [business@testmail.com](mailto:business@testmail.com) |
| Phone         | 9876543210                                            |

### Country-Specific Validation Example

- **India**: Post code must be a valid **6-digit PIN code** and must not start with `0`.

#### Payment Method

| Field Name          | Sample Value        |
| ------------------- | ------------------- |
| Account Number      | 1234567890          |
| IFSC Code           | SBIN0001234         |
| Bank Name           | State Bank of India |
| Account Holder Name | Rohan Sharma        |
| Branch              | Andheri             |
| Account Type        | Savings / Current   |

---

## Validation Rules

#### Basic Info Validation

| Test Case         | Input      | Expected Result                                        |
| ----------------- | ---------- | ------------------------------------------------------ |
| Country selection | India      | Personal Details fields load with India-specific rules |
| Recipient type    | Individual | Individual flow enabled                                |
| Recipient type    | Business   | Business flow enabled                                  |

#### Personal Details Validation (Individual)

| Field      | Test Input                    | Expected Result |
| ---------- | ----------------------------- | --------------- |
| First Name | Alphabetic (1–35 chars)       | Accepted        |
| Last Name  | Alphabetic (1–35 chars)       | Accepted        |
| Email      | Valid email format            | Accepted        |
| Phone      | 10-digit number               | Accepted        |
| City       | 1–50 characters               | Accepted        |
| State      | 1–50 characters               | Accepted        |
| Post Code  | 6 digits, not starting with 0 | Accepted        |
| Address    | 1–200 characters              | Accepted        |

#### Personal Details Validation (Business)

| Field         | Test Input                                            | Expected Result |
| ------------- | ----------------------------------------------------- | --------------- |
| Business Name | Please enter a valid business name (1-100 characters) | Accepted        |
| Email         | Please enter a valid email address                    | Accepted        |
| Business Name | Please enter a valid phone number (7-15 digits)       | Accepted        |

#### Payment Method Validation

| Field               | Test Input                         | Expected Result |
| ------------------- | ---------------------------------- | --------------- |
| Account Number      | Numeric (6–18 digits)              | Accepted        |
| IFSC Code           | Valid IFSC (11 characters)         | Accepted        |
| Bank Name           | 2–100 alphabetic characters        | Accepted        |
| Account Holder Name | Alphabetic, matches recipient name | Accepted        |
| Branch              | Alphabetic (2–100 characters)      | Accepted        |
| Account Type        | Savings / Current                  | Accepted        |

## Add a new recipient for Philippines

### Testing Recipient Record

The following Sample data is used for testing purposes only and does not represent a real individual.

#### Basic Info

| Field          | Value                 |
| -------------- | --------------------- |
| Recipient Type | Individual & Business |
| Country        | Philippines           |

### Personal Details (Individual)

> Note: Philippines recipient creation collects only First Name and Last Name in the Personal Details step.

| Field      | Sample Value |
| ---------- | ------------ |
| First Name | Juan         |
| Last Name  | Dela Cruz    |

### Personal Details (Business)

| Field         | Sample Value    |
| ------------- | --------------- |
| Business Name | XYZ Enterprises |

### Payment Method

> Philippines have two Payment Method Type:

1.INSTAPAY

> Service Level Agreement: Real-time transfers up to PHP 50,000 per transaction. Available 24/7 including weekends and holidays.

2.PESONET

> Service Level Agreement: No transaction limit. Same-day settlement for transfers submitted during clearing windows (9:00 AM, 12:00 PM, 3:00 PM). Transfers outside these times will be processed the next business day. Available Monday to Friday excluding holidays.

| Field Name                  | Sample Value   |
| --------------------------- | -------------- |
| Destination Bank / E-wallet | BDO Bank       |
| Name                        | Juan Dela Cruz |
| Account Number              | 123456789012   |

## Validation Rules

#### Basic Info Validation

| Test Case         | Input       | Expected Result                                              |
| ----------------- | ----------- | ------------------------------------------------------------ |
| Country selection | Philippines | Personal Details fields load with Philippines-specific rules |
| Recipient type    | Individual  | Individual flow enabled                                      |
| Recipient type    | Business    | Business flow enabled                                        |

#### Personal Details Validation (Individual)

| Field      | Test Input              | Expected Result |
| ---------- | ----------------------- | --------------- |
| First Name | Alphabetic (1–35 chars) | Accepted        |
| Last Name  | Alphabetic (1–35 chars) | Accepted        |

#### Personal Details Validation (Business)

| Field         | Test Input                                            | Expected Result |
| ------------- | ----------------------------------------------------- | --------------- |
| Business Name | Please enter a valid business name (1-100 characters) | Accepted        |

#### Payment Method Validation

| Field                     | Test Input                   | Expected Result |
| ------------------------- | ---------------------------- | --------------- |
| Payment Method Type       | INSTAPAY & PESONET           | Accepted        |
| Destination Bank/E-wallet | Supported bank or e-wallet   | Accepted        |
| First Name                | Matches recipient first name | Accepted        |
| Last Name                 | Matches recipient last name  | Accepted        |
| Account Number            | Numeric (10–17 digits)       | Accepted        |

## Add a new recipient for Hong Kong

### Testing Recipient Record

The following Sample data is used for testing purposes only and does not represent a real individual.

#### Basic Info

| Field          | Value                 |
| -------------- | --------------------- |
| Recipient Type | Individual & Business |
| Country        | Hong Kong             |

#### Personal Details (Individual)

| Field           | Value            |
| --------------- | ---------------- |
| First Name      | Michael          |
| Middle Name     | Wei              |
| Last Name       | Chan             |
| Legal Full Name | Michael Wei Chan |

#### Personal Details (Business)

| Field         | Sample Value          |
| ------------- | --------------------- |
| Business Name | Hong Kong Trading Co. |

#### Payment Method

| Field          | Sample Value        |
| -------------- | ------------------- |
| Account Number | 123456789           |
| Bank Name      | HSBC Hong Kong      |
| Clearing Code  | 004                 |
| Street         | Queens Road Central |
| City           | Central             |
| State          | Hong Kong Island    |
| Country        | Hong Kong           |
| Postal Code    | 999077              |

## Validation Rules

#### Basic Info Validation

| Test Case         | Input      | Expected Result                                            |
| ----------------- | ---------- | ---------------------------------------------------------- |
| Country selection | Hong Kong  | Personal Details fields load with Hong Kong-specific rules |
| Recipient type    | Individual | Individual flow enabled                                    |
| Recipient type    | Business   | Business flow enabled                                      |

#### Personal Details Validation (Individual)

| Field           | Test Input                   | Expected Result |
| --------------- | ---------------------------- | --------------- |
| First Name      | Alphabetic (1–35 letters)    | Accepted        |
| Middle Name     | Alphabetic (1–35 letters)    | Accepted        |
| Middle Name     | Empty (optional, if allowed) | Accepted        |
| Last Name       | Alphabetic (1–35 letters)    | Accepted        |
| Legal Full Name | 1–100 characters             | Accepted        |

#### Personal Details Validation (Business)

| Field         | Test Input                                            | Expected Result |
| ------------- | ----------------------------------------------------- | --------------- |
| Business Name | Please enter a valid business name (1-100 characters) | Accepted        |

#### Payment Method Validation

| Field          | Sample Value           | Test Input / Validation Rule | Expected Result |
| -------------- | ---------------------- | ---------------------------- | --------------- |
| Account Number | 123456789              | Numeric (9–12 digits)        | Accepted        |
| Bank Name      | HSBC Hong Kong         | Valid alphabetic bank name   | Accepted        |
| Clearing Code  | 004                    | Numeric (3 digits)           | Accepted        |
| Street         | 1 Queen’s Road Central | 5–100 characters             | Accepted        |
| City           | Central                | Alphabetic (2–50 letters)    | Accepted        |
| State          | Hong Kong Island       | Alphabetic (2–50 letters)    | Accepted        |
| Country        | Hong Kong              | Valid selection              | Accepted        |
| Postal Code    | 999077                 | Numeric (6 digits)           | Accepted        |

## Add a new recipient for United Arab Emirates

### Testing Recipient Record

The following Sample data is used for testing purposes only and does not represent a real individual.

#### Basic Info

| Field          | Value                 |
| -------------- | --------------------- |
| Recipient Type | Individual & Business |
| Country        | UAE                   |

#### Personal Details (Individual)

| Field     | Sample Value      |
| --------- | ----------------- |
| Full Name | Ahmed Al-Mansoori |

#### Personal Details (Business)

| Field         | Sample Value      |
| ------------- | ----------------- |
| Business Name | UAE Business Corp |

#### Payment Method

| Field                 | Sample Value            |
| --------------------- | ----------------------- |
| Full Name             | Ahmed Al-Mansoori       |
| Account Number (IBAN) | AE070331234567890123456 |
| Bank Name             | EmiratesNBD             |
| Bank Code             | EBILAEADXXX             |

---

## Validation Rules

#### Basic Info Validation

| Test Case         | Input      | Expected Result                                      |
| ----------------- | ---------- | ---------------------------------------------------- |
| Country selection | UAE        | Personal Details fields load with UAE-specific rules |
| Recipient type    | Individual | Individual flow enabled                              |

#### Personal Details Validation (Individual)

| Field     | Test Input                   | Expected Result |
| --------- | ---------------------------- | --------------- |
| Full Name | Valid full name (1-70 chars) | Accepted        |

#### Personal Details Validation (Business)

| Field         | Test Input                                            | Expected Result |
| ------------- | ----------------------------------------------------- | --------------- |
| Business Name | Please enter a valid business name (1-100 characters) | Accepted        |

#### Payment Method Validation

| Field                 | Test Input                              | Expected Result |
| --------------------- | --------------------------------------- | --------------- |
| Full Name             | Valid full name (2-35 chars, 2 words)   | Accepted        |
| Account Number (IBAN) | Valid 23-char UAE IBAN starting with AE | Accepted        |

## Add a new recipient for Saudi Arabia

### Testing Recipient Record

The following Sample data is used for testing purposes only and does not represent a real individual.

#### Basic Info

| Field          | Value                 |
| -------------- | --------------------- |
| Recipient Type | Individual & Business |
| Country        | Saudi Arabia          |

#### Personal Details (Individual)

| Field     | Sample Value     |
| --------- | ---------------- |
| Full Name | Mohammed Al-Saud |

#### Personal Details (Business)

| Field         | Sample Value       |
| ------------- | ------------------ |
| Business Name | Saudi Business LLC |

#### Payment Method

| Field                 | Sample Value             |
| --------------------- | ------------------------ |
| Full Name             | Mohammed Al-Saud         |
| Account Number (IBAN) | SA0380000000608010167519 |
| Bank Name             | Al-Inma Bank             |
| Bank Code             | INMA                     |

---

## Validation Rules

#### Basic Info Validation

| Test Case         | Input        | Expected Result                                               |
| ----------------- | ------------ | ------------------------------------------------------------- |
| Country selection | Saudi Arabia | Personal Details fields load with Saudi Arabia-specific rules |
| Recipient type    | Individual   | Individual flow enabled                                       |

#### Personal Details Validation (Individual)

| Field     | Test Input                   | Expected Result |
| --------- | ---------------------------- | --------------- |
| Full Name | Valid full name (1-70 chars) | Accepted        |

#### Personal Details Validation (Business)

| Field         | Test Input                                            | Expected Result |
| ------------- | ----------------------------------------------------- | --------------- |
| Business Name | Please enter a valid business name (1-100 characters) | Accepted        |

#### 3. Payment Method Validation

| Field                 | Test Input                                       | Expected Result |
| --------------------- | ------------------------------------------------ | --------------- |
| Full Name             | Valid full name (2-35 chars, 2 words)            | Accepted        |
| Account Number (IBAN) | Valid 24-char Saudi Arabia IBAN starting with SA | Accepted        |

---

## Important Notes

- Sample recipient records work **only in Sandbox**.
- Do not use these values in Production.

---

## Summary

This document provides comprehensive documentation for the Recipient Verification process across multiple international corridors. Key highlights include:

- **5 Countries Covered**: India, Philippines, Hong Kong, UAE, and Saudi Arabia
- **Complete Test Coverage**: Basic Info, Personal Details, and Payment Method validations for each country
- **Sample Data**: Sandbox-ready test data with proper formatting and validation rules
- **Country-Specific Requirements**: Tailored fields and validation logic for each destination country
- **Structured Format**: Consistent table-based documentation for easy reference and testing
