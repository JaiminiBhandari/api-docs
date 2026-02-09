# Customers API

Base URL: `http://localhost:4004`  
Legacy/listing service: `http://localhost:4000` 

---

## 1. List Customers

Retrieve a paginated list of customers.

- **Method:** `GET` 
- **URL:** `http://localhost:4000/client/customers/list` 
- **Query Parameters:**
  - `page` (integer, optional, default: `1`)  
    Page number to fetch.
  - `includeHidden` (boolean, optional, default: `false`)  
    Whether to include hidden/disabled customers.

### Example Request

```http
GET http://localhost:4000/client/customers/list?includeHidden=true&page=1
```

### Example Response 200 OK

```json
{
  "success": true,
  "data": {
    "0": {
      "id": "d45dbb45-20e7-4dd4-8123-b86fb201ca81",
      "organizationId": "799a92db-14f4-4f28-958c-9ab0a272aad7",
      "externalRef": "Test",
      "enabled": true,
      "createdAt": "2026-01-27T13:04:06.009Z",
      "updatedAt": "2026-01-27T13:04:06.009Z"
    }
  },
  "pagination": {
    "total": 1,
    "page": 1,
    "limit": 10,
    "totalPages": 1
  }
}
```

### cURL

```bash
curl --location 'http://localhost:4004/client/customers/list?includeHidden=true&page=1' \
--header 'Cookie: score=f5a1d1c7e634c237ba902b58d4dc39aee946ad4f0d5b2d46c96a3b670ec89085eaecdce08b6eec1f2bd1ed13fa61cd4393ecc51f0f0301c636819802a5da11d2' \
--data ''
```

---

## 2. Create Customer

Create a new customer.

- **Method:** `POST`
- **URL:** `http://localhost:4004/client/customers/create`
- **Headers:**
  - `Content-Type: application/json`

### Request Body

```json
{
  "externalRef": "Test"
}
```

#### Body Fields:
- `externalRef` (string, required)
  - External reference/identifier for the customer (e.g., from another system).

### Example Response 200 OK

```json
{
  "success": true,
  "data": {
    "id": "d45dbb45-20e7-4dd4-8123-b86fb201ca81",
    "organizationId": "799a92db-14f4-4f28-958c-9ab0a272aad7",
    "externalRef": "Test",
    "enabled": true,
    "createdAt": "2026-01-27T13:04:06.009Z",
    "updatedAt": "2026-01-27T13:04:06.009Z"
  }
}
```

### cURL

```bash
curl --location 'http://localhost:4004/client/customers/create' \
--header 'Content-Type: application/json' \
--header 'Cookie: score=f5a1d1c7e634c237ba902b58d4dc39aee946ad4f0d5b2d46c96a3b670ec89085eaecdce08b6eec1f2bd1ed13fa61cd4393ecc51f0f0301c636819802a5da11d2' \
--data '{
    "externalRef": "Test"
}'
```

---

## 3. Get Customer by ID

Fetch details for a single customer by ID.

- **Method:** `GET`
- **URL:** `http://localhost:4004/client/customers/{id}`

### Path Parameters:
- `id` (UUID, required)
- The unique customer identifier.

### Example Request

```http
GET http://localhost:4004/client/customers/b2b38293-49a8-4d61-88bf-f4b9d12101c3
```

### Example Response 200 OK

```json
{
  "success": true,
  "data": {
    "id": "b2b38293-49a8-4d61-88bf-f4b9d12101c3",
    "organizationId": "799a92db-14f4-4f28-958c-9ab0a272aad7",
    "externalRef": "abcd",
    "enabled": true,
    "createdAt": "2026-01-27T12:17:03.588Z",
    "updatedAt": "2026-01-27T13:06:05.295Z"
  }
}
```

### cURL

```bash
curl --location 'http://localhost:4004/client/customers/b2b38293-49a8-4d61-88bf-f4b9d12101c3' \
--header 'Cookie: score=f5a1d1c7e634c237ba902b58d4dc39aee946ad4f0d5b2d46c96a3b670ec89085eaecdce08b6eec1f2bd1ed13fa61cd4393ecc51f0f0301c636819802a5da11d2'
```

---

## 4. Enable/Disable Customer

Enable or disable a customer.

- **Method:** `PATCH`
- **URL:** `http://localhost:4004/client/customers/{id}/enable`

### Path Parameters:
- `id` (UUID, required)
- The unique customer identifier.

### Headers:
- `Content-Type: application/json`

### Request Body

```json
{
  "enabled": true
}
```

#### Body Fields:
- `enabled` (boolean, required)
- `true` to enable the customer
- `false` to disable the customer

### Example Request

```http
PATCH http://localhost:4004/client/customers/b2b38293-49a8-4d61-88bf-f4b9d12101c3/enable
Content-Type: application/json

{
  "enabled": true
}
```

### Example Response 200 OK

```json
{
  "success": true,
  "data": {
    "id": "b2b38293-49a8-4d61-88bf-f4b9d12101c3",
    "organizationId": "799a92db-14f4-4f28-958c-9ab0a272aad7",
    "externalRef": "abcd",
    "enabled": true,
    "createdAt": "2026-01-27T12:17:03.588Z",
    "updatedAt": "2026-01-27T13:06:05.295Z"
  }
}
```

### cURL

```bash
curl --location --request PATCH 'http://localhost:4004/client/customers/b2b38293-49a8-4d61-88bf-f4b9d12101c3/enable' \
--header 'Content-Type: application/json' \
--header 'Cookie: score=f5a1d1c7e634c237ba902b58d4dc39aee946ad4f0d5b2d46c96a3b670ec89085eaecdce08b6eec1f2bd1ed13fa61cd4393ecc51f0f0301c636819802a5da11d2' \
--data '{
    "enabled": true
}'
```
