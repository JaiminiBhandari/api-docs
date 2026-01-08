---
title: Platform Overview
---

ARP Digital is a payment platform that enables businesses to send money globally with built-in compliance, security, and real-time processing. Our API-first approach provides developers with the tools to integrate international transfers, cryptocurrency payments, and financial services.

## Prerequisites

Before you begin, ensure you have:

- A verified ARP Digital individual or business account
- API credentials (API Key and Secret) from your dashboard
- Basic understanding of REST APIs and HMAC authentication
- A development environment capable of making HTTPS requests
<!-- - Valid business documents for account verification -->

ARP Digital uses **HMAC SHA256 signature authentication** for maximum security. Every API request must include:

- `X-API-Key`: Your unique API key
- `X-Timestamp`: Current Unix timestamp (in seconds)
- `X-Signature`: HMAC SHA256 signature
- `X-Environment`: `sandbox` | `production`

## Environment Setup

### How X-Environment Works

The `X-Environment` header determines which environment your API requests are routed to:

- **`sandbox`**: Routes requests to the testing environment where you can safely test integrations without affecting real accounts or processing actual payments. All transactions are simulated, and test data is used.
- **`production`**: Routes requests to the live environment for processing real transactions. Requires production API credentials and verified accounts.

**Important Notes:**

- Sandbox and production environments are completely isolated - data, transactions, and balances do not sync between them.
- Use `sandbox` for all development and testing to avoid accidental real money transfers.
- Switch to `production` only after thorough testing in sandbox and obtaining production credentials.
- API credentials are environment-specific - sandbox keys won't work in production <!--and vice versa-->.

<!-- ### Quick Authentication Test

Before building your integration, test your authentication setup:

```bash
# Test your credentials with our authentication endpoint
curl -X POST "https://platform.arpdigital.io/services/test-auth" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_api_key" \
  -H "X-Timestamp: $(date +%s)" \
  -H "X-Signature: generated_signature" \
  -H "X-Environment: sandbox | production" \
  -d '{"message": "Hello World"}' -->


**Need help generating signatures?** Check our [Authentication Guide](/authentication) with code examples and an interactive signature generator.


### 2. Get Your API Credentials

1. Log into your ARP Digital dashboard
2. Navigate to the API Keys section from the sidebar.
3. Generate new API credentials for your environment
4. Store your `API Key` and `API Secret` securely

**Security Note**: Never expose your API secret in client-side code or public repositories.

## Quick Start Integration

### Step 1: Install Dependencies

Choose your preferred programming language:

**JavaScript/Node.js:**

```bash
npm install crypto axios
```

**Python:**

```bash
pip install requests
```

<!-- **PHP:**

```bash
# No additional dependencies required
``` -->

### Step 2: Authentication Helper

Create a signature generation function:

**JavaScript:**

```javascript
const crypto = require("crypto");
const axios = require("axios");

class ARPDigitalGPS {
  constructor(
    apiKey,
    apiSecret,
    baseURL = "https://platform.arpdigital.io/services",
    environment = "<environment>" // sandbox | production
  ) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.baseURL = baseURL;
    this.environment = environment;
  }

  generateSignature(requestBody, timestamp) {
    const message = this.apiKey + requestBody + timestamp;
    return crypto
      .createHmac("sha256", this.apiSecret)
      .update(message)
      .digest("hex");
  }

  async request(method, endpoint, data = {}) {
    const timestamp = Math.floor(Date.now() / 1000);
    const requestBody = Object.keys(data).length ? JSON.stringify(data) : "";
    const signature = this.generateSignature(requestBody, timestamp);

    const config = {
      method,
      url: `${this.baseURL}${endpoint}`,
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": this.apiKey,
        "X-Timestamp": timestamp.toString(),
        "X-Signature": signature,
        "X-Environment": this.environment,
      },
    };

    if (requestBody) {
      config.data = requestBody;
    }

    return axios(config);
  }
}

// Initialize client
const client = new ARPDigitalGPS("your_api_key", "your_api_secret");
```

**Python:**

```python
import hmac
import hashlib
import json
import time
import requests

class ARPDigitalGPS:
    def __init__(self, api_key, api_secret, base_url='https://platform.arpdigital.io/services'):
        self.api_key = api_key
        self.api_secret = api_secret
        self.base_url = base_url

    def generate_signature(self, request_body, timestamp):
        message = self.api_key + request_body + str(timestamp)
        return hmac.new(
            self.api_secret.encode('utf-8'),
            message.encode('utf-8'),
            hashlib.sha256
        ).hexdigest()

    def request(self, method, endpoint, data=None):
        timestamp = int(time.time())
        request_body = json.dumps(data) if data else ''
        signature = self.generate_signature(request_body, timestamp)

        headers = {
            'Content-Type': 'application/json',
            'X-API-Key': self.api_key,
            'X-Timestamp': str(timestamp),
            'X-Signature': signature,
            'X-Environment': self.environment
        }

        url = f"{self.base_url}{endpoint}"

        if method.upper() == 'GET':
            return requests.get(url, headers=headers)
        elif method.upper() == 'POST':
            return requests.post(url, headers=headers, data=request_body)
        elif method.upper() == 'PUT':
            return requests.put(url, headers=headers, data=request_body)

# Initialize client
client = ARPDigitalGPS('your_api_key', 'your_api_secret')
```

<!-- ### Step 3: Test Your Connection

```javascript
// Test authentication
async function testConnection() {
  try {
    const response = await client.request("POST", "/test-auth", {
      message: "Hello ARP Digital GPS!",
    });
    console.log("Authentication successful:", response.data);
  } catch (error) {
    console.error("Authentication failed:", error.response.data);
  }
}

testConnection(); -->
```

### Step 4: Your First Transaction Flow

Here's a complete example of sending money internationally:

```javascript
async function sendMoney() {
  try {
    // 1. Create a recipient
    const recipient = await client.request("POST", "/gps/api/v1/recipients", {
      type: "INDIVIDUAL",
      country: "PHL",
      verificationInfo: {
        firstName: "Juan",
        lastName: "Dela Cruz",
      },
      paymentMethods: [
        {
          type: "INSTAPAY",
          metadata: {
            channel: "BPI",
            name: "Juan Dela Cruz",
            accountNumber: "1234567890",
          },
        },
      ],
    });

    console.log("Recipient created successfully:", recipient.data);

    // 2. Get a quote
    const quote = await client.request("POST", "/gps/api/v1/quote", {
      recipientId: recipient.data.data.id,
      fromAmount: 1000,
      fromCurrency: "USD",
      toCurrency: "PHP",
    });

    console.log("Quote updated:", quote.data);

    // 3. Execute the transaction
    const transaction = await client.request(
      "POST",
      "/gps/api/v1/transaction",
      {
        quoteId: quote.data.data.id,
        recipientId: recipient.data.data.id,
      }
    );

    console.log("Transaction created:", transaction.data);

    return transaction.data;
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
}

sendMoney();
```

## Core API Endpoints

### Recipients

| Method | Endpoint                                     | Description               |
| ------ | -------------------------------------------- | ------------------------- |
| `GET`  | `/gps/api/v1/recipients`                     | List all recipients       |
| `POST` | `/gps/api/v1/recipients`                     | Create new recipient      |
| `GET`  | `/gps/api/v1/recipients/{id}`                | Get recipient details     |
| `GET`  | `/gps/api/v1/recipients/verificationFields`  | Get required KYC fields   |
| `GET`  | `/gps/api/v1/recipients/paymentMethodFields` | Get payment method fields |

### Quote

| Method | Endpoint            | Description             |
| ------ | ------------------- | ----------------------- |
| `POST` | `/gps/api/v1/quote` | Get exchange rate quote |

### Transactions

| Method | Endpoint                   | Description             |
| ------ | -------------------------- | ----------------------- |
| `POST` | `/gps/api/v1/transaction`  | Execute transaction     |
| `GET`  | `/gps/api/v1/transactions` | List transactions       |
| `GET`  | `/transactions/{id}`       | Get transaction details |

<!--### Senders

| Method | Endpoint   | Description      |
| ------ | ---------- | ---------------- |
| `GET`  | `/senders` | List all senders |

### Testing

| Method | Endpoint     | Description               |
| ------ | ------------ | ------------------------- |
| `POST` | `/test-auth` | Test authentication setup | -->

## Error Handling

The API uses standard HTTP status codes with detailed error information:

```json
{
  "success": false,
  "error": {
    "type": "UNAUTHORIZED",
    "code": "AUTH_001",
    "message": "Invalid email or password."
  }
}
```

### Common Error Codes

<!-- #### 400 Bad Request -->

| Status | Type                   | Code     | Description                                          |
| ------ | ---------------------- | -------- | ---------------------------------------------------- |
| 400    | UNAUTHORIZED           | AUTH_001 | Invalid email or password                            |
|        | INVALID_TOKEN          | AUTH_009 | Invalid token                                        |
|        | INVALID_INVITATION     | ORG_001  | Invalid invitation                                   |
|        | INVALID_CURRENCY       | CUR_001  | The provided currency is invalid or not supported    |
|        | VALIDATION_ERROR       | VAL_001  | Request validation failed                            |
|        | INVALID_FORMAT         | VAL_002  | Invalid data format                                  |
|        | MISSING_REQUIRED_FIELD | VAL_003  | Required field missing                               |
|        | BAD_REQUEST            | RES_002  | Bad request                                          |
|        | INVALID_CURRENCY_PAIR  | TXN_001  | Invalid currency pair                                |
|        | INVALID_AMOUNT         | TXN_002  | Invalid transaction amount                           |
|        | QUOTE_EXPIRED          | TXN_005  | Quote has expired                                    |
|        | INSUFFICIENT_BALANCE   | TXN_006  | Insufficient balance                                 |
|        | SLA_BELOW_MINIMUM      | TXN_012  | Transfer amount is below the minimum SLA requirement |
|        | SLA_ABOVE_MAXIMUM      | TXN_013  | Transfer amount exceeds the maximum SLA limit        |
|        | INVALID_COIN_NETWORK   | ACC_003  | Invalid coin or network combination                  |
|        | INVALID_AMOUNT         | ACC_008  | Invalid deposit amount                               |

<!-- #### 401 Unauthorized -->

| Status | Type               | Code     | Description                                   |
| ------ | ------------------ | -------- | --------------------------------------------- |
| 401    | UNAUTHORIZED       | AUTH_001 | Authentication credentials missing or invalid |
|        | INCORRECT_PASSWORD | AUTH_006 | Current password is incorrect                 |

<!-- #### 403 Forbidden -->

| Status | Type                | Code     | Description                                                                           |
| ------ | ------------------- | -------- | ------------------------------------------------------------------------------------- |
| 403    | INVALID_API_KEY     | AUTH_002 | Invalid API key provided                                                              |
|        | INVALID_SIGNATURE   | AUTH_003 | Invalid request signature                                                             |
|        | TIMESTAMP_ERROR     | AUTH_004 | Request timestamp is invalid or too old                                               |
|        | BLOCK_MFA_DISABLE   | AUTH_007 | Cannot disable this auth method; at least one other authenticator must remain enabled |
|        | FORBIDDEN           | AUTH_010 | Forbidden                                                                             |
|        | KYC_NOT_STARTED     | KYC_001  | KYC verification not started                                                          |
|        | KYC_IN_PROGRESS     | KYC_002  | KYC verification is in progress                                                       |
|        | KYC_UNDER_REVIEW    | KYC_003  | KYC verification is under review                                                      |
|        | KYC_UPDATE_REQUIRED | KYC_004  | KYC verification requires updates                                                     |
|        | KYC_REJECTED        | KYC_005  | KYC verification rejected                                                             |
|        | KYC_FAILED          | KYC_006  | KYC verification failed                                                               |

<!-- #### 404 Not Found -->

| Status | Type                  | Code     | Description                  |
| ------ | --------------------- | -------- | ---------------------------- |
| 404    | NOT_FOUND             | AUTH_008 | Authenticator not found      |
|        | RESOURCE_NOT_FOUND    | RES_001  | Requested resource not found |
|        | QUOTE_NOT_FOUND       | TXN_007  | Quote not found              |
|        | TRANSACTION_NOT_FOUND | TXN_009  | Transaction not found        |
|        | VAULT_NOT_FOUND       | ACC_004  | Vault not found for user     |

<!-- #### 409 Conflict -->

| Status | Type                         | Code    | Description                  |
| ------ | ---------------------------- | ------- | ---------------------------- |
| 409    | DUPLICATE_REQUEST            | ACC_009 | Duplicate request            |
|        | TRANSACTION_ALREADY_EXECUTED | TXN_008 | Transaction already executed |

<!-- #### 422 Unprocessable Entity -->

| Status | Type                 | Code    | Description             |
| ------ | -------------------- | ------- | ----------------------- |
| 422    | UNPROCESSABLE_ENTITY | VAL_004 | Request data is invalid |

<!-- #### 429 Too Many Requests -->

| Status | Type                | Code     | Description             |
| ------ | ------------------- | -------- | ----------------------- |
| 429    | RATE_LIMIT_EXCEEDED | AUTH_005 | API rate limit exceeded |

<!-- #### 500 Internal Server Error -->

| Status | Type                  | Code    | Description                    |
| ------ | --------------------- | ------- | ------------------------------ |
| 500    | INTERNAL_SERVER_ERROR | SRV_001 | Internal server error occurred |

<!-- #### 502 Bad Gateway -->

| Status | Type                | Code    | Description                         |
| ------ | ------------------- | ------- | ----------------------------------- |
| 502    | QUOTE_FAILED        | TXN_010 | Failed to fetch quote from provider |
|        | EXECUTION_FAILED    | TXN_011 | Failed to execute transaction       |
|        | BAD_GATEWAY         | SRV_004 | Bad gateway error                   |
|        | VAULT_SERVICE_ERROR | ACC_005 | Vault service error                 |

<!-- #### 503 Service Unavailable -->

| Status | Type                | Code    | Description                     |
| ------ | ------------------- | ------- | ------------------------------- |
| 503    | SERVICE_UNAVAILABLE | SRV_002 | Service temporarily unavailable |

<!-- #### 504 Gateway Timeout -->

| Status | Type            | Code    | Description              |
| ------ | --------------- | ------- | ------------------------ |
| 504    | GATEWAY_TIMEOUT | SRV_003 | Gateway timeout occurred |

<!-- ### Handling Authentication Errors

```javascript
try {
  const response = await client.request("GET", "/gps/api/v1/transactions");
} catch (error) {
  if (error.response?.status === 401) {
    console.log("Authentication failed. Check your signature generation.");
    console.log("Debug info:", error.response.data);
  }
}
``` -->

## Rate Limits

<!-- | Environment    | Limit         | Window         |
| -------------- | ------------- | -------------- |
| **Sandbox**    | 500 requests  | Per 15 minutes |
| **Production** | 5000 requests | Per 15 minutes | -->


| Limit         | Window         |
| ------------- | -------------- |
| 450 requests  | Per 15 minutes |

Rate limit headers are included in responses:

```
X-RateLimit-Limit: 450
X-RateLimit-Remaining: 445
X-RateLimit-Reset: 1641658800
```

## Webhooks

The GPS API sends webhook notifications to configured endpoints for transaction status updates. Webhooks are sent to partner services automatically when transactions change status.

### Webhook Events

Your webhook endpoint will receive events for:

### OTC 

- `otc.trade.created`  - New trade created 
- `otc.trade.rejected` -  Trade rejected
- `otc.trade.completed` - Trade successfully completed
- `otc.trade.updated` -   Trade status changes 

### PAY 

- `pay.checkout.created` - New payment created
- `"pay.checkout.updated"` - Payment status changes 

### REMITTANCE 

- `gps.transaction.completed` - Transaction successfully completed
- `gps.transaction.created` - New transaction initiated
- `gps.transaction.failed` - Transaction failed

### WALLET 

- `wallet.deposit.completed` - Deposite successfully completed 
- `wallet.deposit.created` - New deposite initiated
- `wallet.deposit.failed` - Deposite failed
- `wallet.created` - New wallet created
- `wallet.withdraw.completed` - Withdraw successfully completed
- `wallet.withdraw.created` - New withdrawal initiated 
- `wallet.withdraw.failed` - Withdrawal failed

### Webhook Payload Structure

```
{
url:"https://platform.stage.arpdigital.io"
description: "Webhook URL for receiving v2 OTC, payment, GPS, and wallet events."
events:["otc.trade.created", "otc.trade.rejected", "otc.trade.completed", 
otc.trade.updated","pay.checkout.created","pay.checkout.updated",
"gps.transaction.completed","gps.transaction.created","gps.transaction.failed",
"wallet.deposit.completed","wallet.deposit.created",
"wallet.deposit.failed","wallet.created","wallet.withdraw.completed",
"wallet.withdraw.created","wallet.withdraw.failed"]
version:2
}
```

### Webhook Security

Webhook signatures are verified by the receiving partner services. Contact our support team to configure webhook endpoints for your integration.

<!-- ## Testing & Sandbox

### Sandbox Features

- All API endpoints available
- Simulated transaction processing
- Test KYC verification
- Webhook testing
- No real money movement

### Test Scenarios

| Amount    | Result  | Processing Time |
| --------- | ------- | --------------- |
| `$100.00` | Success | Instant         |
| `$500.00` | Pending | 5 minutes       |
| `$999.99` | Failed  | Instant         |

### Test Data

Use these test recipient details in sandbox:

```json
{
  "firstName": "Test",
  "lastName": "Recipient",
  "email": "test@example.com",
  "phone": "+1234567890",
  "country": "PHL",
  "paymentMethod": {
    "type": "BANK_TRANSFER",
    "accountNumber": "1234567890",
    "bankName": "Test Bank"
  }
}
``` -->

## Security Best Practices

### API Security

- Store API credentials in environment variables
- Use HTTPS for all requests
- Implement proper signature generation
- Rotate API keys regularly
- Validate webhook signatures

### Development Tips

- Use sandbox for all development and testing
- Implement proper error handling
- Add request/response logging
- Handle rate limits gracefully
<!-- - Test authentication with `/test-auth` endpoint -->

## Next Steps

Now that you're set up, explore these resources:

### Essential Guides

- **[Authentication Guide](/authentication)** - Detailed auth setup with code examples
- **[API Reference](/api-reference)** - Complete endpoint documentation

### Integration Examples

- **[Recipient Management](/remittance-api/recipients)** - KYC verification workflows & Recipient management
- **[Transaction Processing](/remittance-api/transactions)** - End-to-end transfer flows
- **[Webhook Integration](/webhooks)** - Real-time status updates
<!-- - **Error Handling** - Robust error management -->

### Advanced Features

- **Reporting** - Transaction analytics and reports

## Support & Resources

### Get Help

- **Email**: support@arpdigital.io
- **Documentation**: Complete **[API Reference](/api-reference)**

<!--**Ready to go live?** Contact our team to upgrade to production credentials and start processing real transactions.-->
