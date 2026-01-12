# Webhook Implementation Guide

This document provides details about the webhook system implementation in ARP Digital GPS.

## Overview

The webhook system sends real-time notifications to user-configured endpoints when specific events occur in the platform. This allows clients to stay updated on transaction status changes and other important events without polling the API.

## Supported Events

## OTC

| Event                 | Description                  | Trigger                             |
| --------------------- | ---------------------------- | ----------------------------------- |
| `otc.trade.created`   | Trade initiated              | When trade status becomes INITIATED |
| `otc.trade.rejected`  | Trade rejected               | When trade status becomes REJECTED  |
| `otc.trade.completed` | Trade successfully completed | When trade status becomes COMPLETED |
| `otc.trade.updated`   | Trade status change          | When trade status becomes UPDATED   |

## PAY

| Event                  | Description           | Trigger                               |
| ---------------------- | --------------------- | ------------------------------------- |
| `pay.checkout.created` | Payment initiated     | When payment status becomes INITIATED |
| `pay.checkout.updated` | Payment status change | When payment status becomes UPDATED   |

## REMITTANCE

| Event                       | Description                        | Trigger                                   |
| --------------------------- | ---------------------------------- | ----------------------------------------- |
| `gps.transaction.completed` | Transaction successfully completed | When transaction status becomes COMPLETED |
| `gps.transaction.failed`    | Transaction failed                 | When transaction status becomes FAILED    |
| `gps.transaction.created`   | Transaction initiated              | When transaction status becomes INITIATED |

## WALLET

| Event                       | Description                    | Trigger                                |
| --------------------------- | ------------------------------ | -------------------------------------- |
| `wallet.deposit.completed`  | Deposit successfully completed | When deposit status becomes COMPLETED  |
| `wallet.deposit.created`    | Deposit initiated              | When deposit status becomes INITIATED  |
| `wallet.deposit.failed`     | Deposit failed                 | When deposit status becomes FAILED     |
| `wallet.created`            | Wallet initiated               | When wallet status becomes INITIATED   |
| `wallet.withdraw.completed` | Withdraw initiated             | When withdraw status becomes INITIATED |
| `wallet.withdraw.created`   | Wallet initiated               | When withdraw status becomes INITIATED |
| `wallet.withdraw.failed`    | Withdraw failed                | When withdraw status becomes FAILED    |

## API Endpoints

| Method | Endpoint        | Description                              | Response                                  |
| ------ | --------------- | ---------------------------------------- | ----------------------------------------- |
| GET    | `/webhooks`     | List all webhooks for authenticated user | Array of webhook objects without secrets  |
| POST   | `/webhooks`     | Create a new webhook with URL            | Webhook object including generated secret |
| DELETE | `/webhooks/:id` | Delete a webhook by ID                   | Success confirmation                      |

The webhook object structure:

```json
{
  "id": "webhook_uuid",
  "url": "https://your-endpoint.com/webhook",
  "secret": "32bytesecretinhexformat", // Only included in create response
  "isActive": true,
  "createdAt": "2025-01-15T10:30:01Z",
  "updatedAt": "2025-01-15T10:30:01Z"
}
```

## Webhook Payload Structure

All webhooks send a consistent JSON payload:

```json
description:"Webhook for transaction completed"
events:["gps.transaction.completed"]
url:"https://platform.arpdigital.io"
version:2
```

## Security

### Signature Verification

Each webhook includes security headers:

- `X-API-Key` : Your unique API Key
- `X-Timestamp` : The current Unix timestamp in milliseconds 
- `X-Signature` : HMAC SHA256 signature of the payload
- `X-Environment` : Specifies the environment `sandbox` or `production`

### Signature Generation

```javascript
const signature = crypto
  .createHmac("sha256", webhook_secret)
  .update(JSON.stringify(payload))
  .digest("hex");
```

### Verification Example

```javascript
function verifyWebhookSignature(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  return signature === expectedSignature;
}
```

### Webhook Delivery

Webhooks are delivered using HTTP POST requests with the following characteristics:

- JSON payload in the request body
- Standard headers including content-type, webhook signature, event type, and webhook ID
- Requests are made using the internal `fetcher` utility that handles HTTP requests
- Responses are logged but don't affect the transaction flow

```javascript
// Example of webhook request sent
const response = await fetcher(webhook.url, {
  method: "POST",
  data: payload,
  headers: {
  "X-API-Key: <your_api_key_here>"
  "X-Timestamp: <current_timestamp_in_millis>" 
  "X-Signature: <your_signature_key_here>"
  "X-Environment: sandbox or production" 
  },
});

```

## Webhook Response Requirements

When your endpoint receives a webhook, it should:

1. **Verify the signature** using the steps outlined in the Security section
2. **Process the webhook data** according to your application's needs
3. **Respond with:**
   - HTTP status code `200 OK` to acknowledge receipt
   - Content-Type header set to `application/json`
   - A JSON response body (can be a simple confirmation like `{"received": true}`)

Example response:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "received": true,
  "timestamp": "2025-07-09T14:23:45Z"
}
```

Failure to respond properly may result in delivery retries or other issues in future versions of the API.
