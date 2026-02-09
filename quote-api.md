```
### 1. Request Quote

Get a real-time quote for currency exchange. This quote will provide a `quoteId` which is required to execute the trade.

**URL:** `/quotes`  
**Method:** `POST`

#### Request Body

| Field            | Type     | Required | Description                                                            |
| :--------------- | :------- | :------- | :--------------------------------------------------------------------- |
| `customerId`     | `string` | Yes      | The unique identifier of the customer.                                 |
| `quantity`       | `number` | Yes      | The quantity of the source currency to be exchanged. Must be positive. |
| `fromCurrencyId` | `string` | Yes      | The ID/Symbol of the currency to sell (e.g., "BTC", "USD").            |
| `toCurrencyId`   | `string` | Yes      | The ID/Symbol of the currency to buy.                                  |

**Example Request:**

```json
{
  "customerId": "cust_12345",
  "quantity": 1.5,
  "fromCurrencyId": "BTC",
  "toCurrencyId": "USD"
}
```

#### Response

**Success (200 OK):**

```json
{
  "success": true,
  "data": {
    "quoteId": "quote_abc123efg"
  }
}
```

**Error (400 Bad Request):**

```json
{
  "success": false,
  "errorCode": "TXN_QUOTE_FAILED",
  "error": {
    "message": "Failed to create quote"
  }
}
```

---

### 2. Execute Trade

Execute a trade based on a previously generated quote.

**URL:** `/trades`  
**Method:** `POST`

#### Request Body

| Field        | Type     | Required | Description                                               |
| :----------- | :------- | :------- | :-------------------------------------------------------- |
| `quoteId`    | `string` | Yes      | The ID of the quote received from the `/quotes` endpoint. |
| `customerId` | `string` | Yes      | The unique identifier of the customer.                    |

**Example Request:**

```json
{
  "quoteId": "quote_abc123efg",
  "customerId": "cust_12345"
}
```

#### Response

**Success (200 OK):**

```json
{
  "success": true,
  "data": {
    "status": "Trade Executed Successfully"
  }
}
```

**Error (400 Bad Request):**

```json
{
  "success": false,
  "errorCode": "TXN_TRADE_FAILED",
  "error": {
    "message": "Failed to create trade"
  }
}
```

---

## Error Handling

The API returns errors in a consistent format:

```json
{
  "success": false,
  "errorCode": "ERROR_CODE_STRING",
  "error": {
    "message": "Human readable error message"
  }
}
```

Common Error Codes:

- `TXN_QUOTE_FAILED`: Occurs if a quote cannot be generated (e.g., invalid currency pair, production restriction).
- `TXN_TRADE_FAILED`: Occurs if the trade execution fails.
- `UNAUTHORIZED`: Invalid or missing API Key.

```