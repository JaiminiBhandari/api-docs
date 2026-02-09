Perfect — this actually **simplifies the bank API a lot** 👍
Below is the **corrected, bank-facing PUBLIC API documentation** using **a single trade endpoint** with `side = buy | sell`, exactly matching your Joi schema.

No internals, no DV Chain, no orchestration — this is **what a bank integrates against**.

---

# **ARP OTC Trading – Bank-Facing Public API**

## Base URL

```
https://api.arp.trade
```

---

## Authentication

**Headers (Required for all endpoints)**

```
Authorization: Bearer <BANK_ACCESS_TOKEN>
Idempotency-Key: <uuid-v4>        // REQUIRED for trade endpoint
Content-Type: application/json
```

---

## 1️⃣ Live Rates (WebSocket – Read Only)

### Purpose

* Price discovery only
* Generate `quoteId` for execution
* No balances or trades executed here

---

### WebSocket URL

```
wss://api.arp.trade/ws/rates
```

---

### Subscribe to Rates

**Client → Server**

```json
{
  "action": "subscribe",
  "pair": "BTC/USD"
}
```

---

### Rate Update Event

**Server → Client**

```json
{
  "event": "rate.update",
  "data": {
    "quoteId": "qt_91bc72",
    "asset": "BTC",
    "buyPrice": "42350.25",
    "sellPrice": "42110.40",
    "expiresAt": "2026-01-23T10:45:10Z"
  }
}
```

---

### Bank Notes

* `quoteId` is mandatory for trade execution
* Quote expires automatically
* Quote is single-use
* WebSocket is **read-only**

---

## 2️⃣ Execute OTC Trade (BUY / SELL)

### Single Unified Endpoint

### Endpoint

```
POST /api/v1/otc/trade
```

---

### Request Payload

(**Matches your Joi schema exactly**)

```json
{
  "bankId": "bank_001",
  "bankCustomerRef": "CUST_10293",
  "asset": "BTC",
  "quantity": 0.5,
  "quoteId": "qt_91bc72",
  "side": "buy"
}
```

---

### Field Description

| Field           | Type   | Required | Description                   |
| --------------- | ------ | -------- | ----------------------------- |
| bankId          | string | ✅        | Partner bank identifier       |
| bankCustomerRef | string | ✅        | Bank’s internal customer ID   |
| asset           | string | ✅        | Asset symbol (BTC, ETH, etc.) |
| quantity        | number | ✅        | Trade quantity                |
| quoteId         | string | ✅        | Quote received via WebSocket  |
| side            | string | ✅        | `buy` or `sell`               |

---

### Success Response (200 – Completed)

```json
{
  "tradeId": "tr_82ac19",
  "status": "COMPLETED",
  "side": "buy",
  "asset": "BTC",
  "quantity": 0.5,
  "price": "42350.25",
  "notional": "21175.12",
  "executedAt": "2026-01-23T10:44:58Z"
}
```

---

### Accepted Response (202 – Processing)

```json
{
  "tradeId": "tr_82ac19",
  "status": "PENDING"
}
```

---

### Error Responses

#### Quote Invalid / Expired

```json
{
  "error": "QUOTE_INVALID",
  "message": "Quote expired or already used"
}
```

#### Insufficient Balance

```json
{
  "error": "INSUFFICIENT_FUNDS",
  "message": "Partner balance insufficient for this trade"
}
```

#### Duplicate Request (Idempotency)

```json
{
  "error": "DUPLICATE_REQUEST",
  "tradeId": "tr_82ac19"
}
```

---

## 3️⃣ Get Trade Status

### Endpoint

```
GET /api/v1/otc/trades/{tradeId}
```

### Response

```json
{
  "tradeId": "tr_82ac19",
  "status": "COMPLETED",
  "side": "buy",
  "asset": "BTC",
  "quantity": 0.5,
  "price": "42350.25",
  "executedAt": "2026-01-23T10:44:58Z"
}
```

---

## 4️⃣ Get Customer Balances

### Endpoint

```
GET /api/v1/customers/{bankCustomerRef}/balances
```

### Response

```json
{
  "bankCustomerRef": "CUST_10293",
  "balances": [
    {
      "asset": "BTC",
      "available": "1.25",
      "locked": "0.0"
    }
  ]
}
```

---

## 5️⃣ Get Bank (Partner) Balance

### Endpoint

```
GET /api/v1/bank/balance
```

### Response

```json
{
  "currency": "USD",
  "availableBalance": "980000.00",
  "lockedBalance": "20000.00"
}
```

---

## 6️⃣ Idempotency Rules (Very Important for Banks)

* `Idempotency-Key` **required** for `/otc/trade`
* Same key + same payload → same response
* Prevents double execution on retries
* Keys retained for a configurable TTL (e.g. 24h)

---

## 7️⃣ What This API Guarantees to Banks

✅ Single trade endpoint
✅ Deterministic execution
✅ Quote-based pricing
✅ No partial state exposure
✅ Retry-safe
✅ Audit-friendly

---

## 8️⃣ What Banks Never See

* DV Chain
* Liquidity providers
* Internal ledgers
* Execution routing
* Markup logic

---

If you want next, I can:

* Generate **OpenAPI (Swagger) YAML** from this
* Add **example error catalog**
* Add **sandbox vs prod headers**
* Add **rate limits & SLAs**
* Review Joi schema for edge cases (quantity precision, asset enums)

Just say the word.
