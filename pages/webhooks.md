# Webhook Implementation Guide

This document provides details about the webhook system implementation in ARP Digital GPS.

## Overview

The webhook system sends real-time notifications to user-configured endpoints when specific events occur in the platform. This allows clients to stay updated on transaction status changes and other important events without polling the API.

## Supported Events

| Event                   | Description                        | Trigger                                   |
| ----------------------- | ---------------------------------- | ----------------------------------------- |
| `transaction.completed` | Transaction successfully completed | When transaction status becomes COMPLETED |
| `transaction.failed`    | Transaction failed                 | When transaction status becomes FAILED    |

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
{
  "event": "transaction.completed",
  "data": {
    // Event-specific data (see schemas below)
  },
  "timestamp": "2024-01-15T10:30:01Z",
  "webhook_id": "webhook_xyz789"
}
```

### Transaction Events Data Schema

```json
{
  "id": "transaction_id",
  "status": "COMPLETED|FAILED|etc",
  "fromCurrency": "USD",
  "toCurrency": "PHP",
  "fromAmount": "100.00",
  "toAmount": "5500.00",
  "sender": {
    "id": "sender_id",
    "email": "sender@example.com",
    "type": "INDIVIDUAL|BUSINESS"
  },
  "recipient": {
    "id": "recipient_id",
    "name": "Recipient Name",
    "email": "recipient@example.com",
    "type": "INDIVIDUAL|BUSINESS"
  },
  "notes": "Error message (for failed transactions)",
  "createdAt": "2024-01-15T10:25:00Z",
  "updatedAt": "2024-01-15T10:30:00Z",
  "completedAt": "2024-01-15T10:30:00Z" // Only for completed transactions
}
```

## Security

### Signature Verification

Each webhook includes security headers:

- `X-Webhook-Signature`: HMAC SHA256 signature of the payload
- `X-Webhook-Event`: Event type for quick filtering
- `X-Webhook-ID`: Webhook configuration ID
- `User-Agent`: Always "ARP-Digital-GPS-Webhook/1.0"

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
    "X-Webhook-Signature": signature,
    "X-Webhook-Event": event,
    "X-Webhook-ID": webhook.id,
    "User-Agent": "ARP-Digital-GPS-Webhook/1.0",
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
