## Summary of Endpoints

### Customer Management

- `POST /customers` - Create a new customer
- `GET /customers` - List all customers (paginated)
- `GET /customers/:id` - Get customer details by ID
- `PATCH /customers/:id/enable` - Enable or disable a customer
- `GET /customers/:id/balance` - Get customer balance
- `GET /customers/:id/transactions` - Get customer balance transactions

### Quote & Trade

- `POST /quotes` - Request a real-time exchange quote
- `GET /quotes/:quoteId` - Get details of a specific quote
- `POST /trades` - Execute a trade based on a quote

---

## Customer Endpoints

### 1. Create Customer

Register a new customer for your organization.

**URL:** `/customers`  
**Method:** `POST`

#### Request Body

| Field         | Type      | Required | Description                                         |
| :------------ | :-------- | :------- | :-------------------------------------------------- |
| `externalRef` | `string`  | Yes      | Your internal reference ID for the customer.        |
| `enabled`     | `boolean` | No       | Whether the customer is active. Defaults to `true`. |

**Example Request:**

```json
{
  "externalRef": "user_99",
  "enabled": true
}
```

#### Response

**Success (200 OK):**

```json
{
  "success": true,
  "data": {
    "id": "uuid-v4-string",
    "externalRef": "user_99",
    "enabled": true,
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

### 2. List Customers

Retrieve a paginated list of customers.

**URL:** `/customers`  
**Method:** `GET`

#### Query Parameters

| Parameter | Type     | Default | Description                   |
| :-------- | :------- | :------ | :---------------------------- |
| `page`    | `number` | `1`     | Page number.                  |
| `limit`   | `number` | `10`    | Items per page (max 100).     |
| `sort`    | `string` | `asc`   | Sort order (`asc` or `desc`). |

**Example Request:** `/customers?page=1&limit=20`

#### Response

**Success (200 OK):**

```json
{
  "success": true,
  "data": [
    { "id": "uuid-1", "externalRef": "user_1", "enabled": true },
    { "id": "uuid-2", "externalRef": "user_2", "enabled": true }
  ],
  "pagination": {
    "total": 150,
    "page": 1,
    "limit": 20,
    "totalPages": 8
  }
}
```

---

### 3. Get Customer by ID

Retrieve details for a specific customer.

**URL:** `/customers/:id`  
**Method:** `GET`

**Example Request:** `/customers/uuid-v4-string`

#### Response

**Success (200 OK):**

```json
{
  "success": true,
  "data": {
    "id": "uuid-v4-string",
    "externalRef": "user_99",
    "enabled": true
  }
}
```

---

### 4. Enable/Disable Customer

Update a customer's active status.

**URL:** `/customers/:id/enable`  
**Method:** `PATCH`

#### Request Body

| Field     | Type      | Required | Description                                    |
| :-------- | :-------- | :------- | :--------------------------------------------- |
| `enabled` | `boolean` | Yes      | Set to `true` to enable or `false` to disable. |

**Example Request:**

```json
{ "enabled": false }
```

---

### 5. Get Customer Balance

Retrieve the current balances for a customer.

**URL:** `/customers/:id/balance`  
**Method:** `GET`

#### Query Parameters

| Parameter    | Type     | Required | Description                                       |
| :----------- | :------- | :------- | :------------------------------------------------ |
| `currencyId` | `string` | No       | Filter by specific currency (e.g., "BTC", "USD"). |

**Example Request:** `/customers/uuid/balance?currencyId=USD`

---

### 6. Get Customer Transactions

Retrieve the transaction history for a customer's balance.

**URL:** `/customers/:id/transactions`  
**Method:** `GET`

#### Query Parameters

| Parameter    | Type     | Required | Description                  |
| :----------- | :------- | :------- | :--------------------------- |
| `currencyId` | `string` | No       | Filter by specific currency. |

---

## Quote & Trade Endpoints

### 7. Request Quote

Get a real-time quote for currency exchange.

**URL:** `/quotes`  
**Method:** `POST`

#### Request Body

| Field            | Type     | Required | Description                            |
| :--------------- | :------- | :------- | :------------------------------------- |
| `customerId`     | `string` | Yes      | The unique identifier of the customer. |
| `quantity`       | `number` | Yes      | The quantity to be exchanged.          |
| `fromCurrencyId` | `string` | Yes      | Currency to sell.                      |
| `toCurrencyId`   | `string` | Yes      | Currency to buy.                       |

**Example Request:**

```json
{
  "customerId": "uuid-v4",
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
  "data": { "quoteId": "quote_abc123" }
}
```

---

### 8. Get Quote by ID

Retrieve the details of a specific quote.

**URL:** `/quotes/:quoteId`  
**Method:** `GET`

#### Response

**Success (200 OK):**

```json
{
  "success": true,
  "data": {
    "quote": {
      "id": "quote_abc123",
      "quantity": 1.5,
      "fromCurrencyId": "BTC",
      "toCurrencyId": "USD",
      "rate": 50000.0,
      "expiresAt": "2024-01-01T00:01:00.000Z"
    }
  }
}
```

---

### 9. Execute Trade

Execute a trade based on a valid `quoteId`.

**URL:** `/trades`  
**Method:** `POST`

#### Request Body

| Field        | Type     | Required | Description                               |
| :----------- | :------- | :------- | :---------------------------------------- |
| `quoteId`    | `string` | Yes      | The valid ID from the `/quotes` endpoint. |
| `customerId` | `string` | Yes      | The unique identifier of the customer.    |

**Example Response:**

```json
{
  "success": true,
  "data": { "status": "Trade Executed Successfully" }
}
```

---

## Error Handling

The API returns errors in a consistent format:

```json
{
  "success": false,
  "error": "Short error message",
  "errorDetails": {
    "type": "ERROR_TYPE",
    "code": "ERROR_CODE",
    "message": "Detailed error message"
  }
}
```
