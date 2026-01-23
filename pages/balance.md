---
title: Account Balance
---

## Overview

Your account balance represents the total balance available in your ARP Digital wallet. This includes fiat currencies and crypto currencies that you can use for transactions, trading, and withdrawals.

## Viewing Your Balance

### Using the API

To retrieve your balance information, use the **[Get Balances](/wallet-api/balances#get-balances)** API endpoint. This endpoint returns all balance information for your organization, including fiat and cryptocurrency holdings.

## Balance Details

### Fiat Currency Balances

| Asset | Price     | Holdings   | Value  |
| ----- | --------- | ---------- | ------ |
| AED   | $0.272264 | 115.67 AED | $31.49 |
| SAR   | $0.266542 | 111 SAR    | $29.59 |
| BHD   | $2.652731 | 5 BHD      | $13.26 |
| USD   | $1.000000 | 7 USD      | $7     |

### Cryptocurrency Balances

| Asset | Price     | Holdings   | Value  |
| ----- | --------- | ---------- | ------ |
| USDT  | $1.000000 | 8.64 USDT  | $31.49 |
| USDC  | $1.000000 | 13.25 USDC | $13.25 |

### Recent Transactions 

| Currency | Type       | Date       | Time        | Amount |
| -------- | ---------- | ---------- | ----------- | ------ |
| SAR      | Deposite   | 12/30/2025 | 3:30:20 PM  | 1.00   |
| USDC     | Trade      | 12/24/2025 | 4:30:40 PM  | 13. 27 |
| BHD      | Withdrawal | 1/4/2026   | 10:44:39 AM | -5.00  |
| USDT     | Deposite   | 12/30/2025 | 11:54:52 AM | 3.00   |
| USDT     | Trade      | 10/16/2025 | 9:30:20 PM  | 14.60  |

## Send Funds

Send funds from your wallet to another user or account within the ARP Digital platform.

### Transfer to Another User

1. **Initiate Transfer**

   - Log in to your dashboard
   - Navigate to **Balance** > **Send**
   - Select **Send**

2. **Enter Recipient Details**

   - Recipient's Country  or name 
   - Add Transfer amount and currency
   - Confirm & Send 

<!-- 3. **Confirm and Send**
   - Review transfer details
   - 2FA verification required
   - Instant processing for internal transfers -->



## Withdraw Funds

Withdraw funds from your account <!--to external bank accounts--> or cryptocurrency wallets.

### Withdraw to Bank Account

- **Supported Banks**: International wire transfers and local bank networks
- **Processing Time**: 1-5 business days
- **Fees**: $5 - $35 depending on amount
- **Limits**: Based on verification level ($1,000 - $50,000 daily)

### Withdraw to Crypto Wallet

- **Supported Cryptos**: BTC, ETH, USDT, USDC, and 50+ others
- **Processing Time**: 10-60 minutes
- **Fees**: 0.1% platform fee + network fees
- **Limits**: Network-dependent, up to unlimited for verified users

<!-- For complete withdrawal options and requirements, see [Withdraw Funds](withdraw.md). -->

## Convert Assets

Exchange between your currencies instantly within the platform.

### Supported Conversions

- **From Currencies**: BHD, SAR, AED, USD
- **To Currencies**: USDT, USDC
- **Exchange Rate**: Real-time market rates with competitive spreads
- **Processing Time**: Instant

### How to Convert

1. **Access Converter**

   - Go to "Balance" > "Convert Assets"
   - Select source and target currencies

2. **Enter Amount**

   - Input conversion amount
   - Preview exchange rate and fees

3. **Execute Conversion**
   - Confirm transaction
   - Funds converted instantly

### Conversion Fees

- **Spread**: 0.5% - 2% depending on pair
- **Platform Fee**: 0.1% of converted amount

For advanced trading and conversion options, explore our [Pro Trading](pro-trading.md) platform with professional tools and analytics.

## Receive Funds

Add funds to your wallet through deposits or generate payment orders.

### Deposit Funds

- **Bank Transfer**: Wire transfers from your bank account
- **Credit/Debit Card**: Instant deposits with 3D Secure
- **Cryptocurrency**: Direct crypto transfers to your wallet
- **Processing Time**: Instant to 3 business days
- **Fees**: 0.1% - $35 depending on method

### Create Checkout

Generate a payment order to receive funds from customers or partners.

1. **Create Payment Order**

   - Select "Receive Funds" > "Create Checkout"
   - Enter payment details (amount, currency, description)

2. **Generate Payment Link**

   - Receive unique payment URL
   - Share with payer via email or messaging

3. **Track Payment**
   - Real-time status updates
   - Automatic notifications
   - Funds credited upon completion

For detailed deposit methods and limits, see [Deposit Funds](deposit.md).

<!--## Balance Conversion

### Currency Exchange
Convert between supported currencies:

```javascript
// Example API call for balance conversion
const conversion = await api.convertBalance({
  fromCurrency: 'USD',
  toCurrency: 'EUR',
  amount: 1000,
  rate: 'market'
});-->

```

<!-- ### Auto-Conversion
- Set up automatic conversion rules
- Convert incoming payments to preferred currency -->


<!-- ## Balance Reports

### Daily Balance Reports
- Email summary of daily balance changes
- Transaction summaries and analytics -->

<!-- ### Monthly Statements
- Comprehensive monthly balance reports
- Tax-ready transaction history
- Performance analytics -->

<!-- ## Support

If you have questions about your balance:

- **Email**: support@arpdigital.io
- **Live Chat**: Available 24/7 in dashboard
- **Phone**: +1 (555) 123-4567 (business hours) -->

```
