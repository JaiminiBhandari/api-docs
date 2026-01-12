---
sidebar_label: General Information
sidebar_icon: heart-handshake
---

# ARP Digital

Welcome to ARP Digital.

We provide a powerful suite of cross-border payment and settlement services that enable businesses to integrate global money movement directly into their applications.

Our API offers end-to-end tools for fast transfers, secure transactions, and intelligent routing—giving you everything you need to build seamless, compliant financial experiences at scale.

## Services

### Remittance

Send money across borders quickly and securely. ARP Digital provides compliant, real-time remittance capabilities designed for global transfers at scale.

### Trading

Seamlessly trade between fiat and cryptocurrencies with unified APIs. Execute conversions, manage liquidity, and enable asset swaps with reliable pricing and low latency.

### Checkout

Create secure external payment links for frictionless monetary transactions. Perfect for merchants, platforms, and applications that need fast, compliant payment collection without building a full checkout flow.

## API

### Authentication

All API requests require authentication using API key and signature. You must include the following headers with each request:

**X-API-Key:** Your API key  
**X-Timestamp:** Current Unix timestamp in seconds  
**X-Signature:** HMAC SHA256 signature of apiKey + requestBody + timestamp using your API secret as the key

**Note:** The API secret is stored securely on the server and is not transmitted in headers.

API keys can be created through the client dashboard.

## Signature Generation

The signature is generated using HMAC SHA256 with the following steps:

1. Concatenate: `apiKey + requestBody + timestamp`
2. Create HMAC SHA256 hash using your API secret as the key
3. Convert to lowercase hexadecimal string

**Important Notes**

- For GET requests, use an empty string as the request body
- Timestamps must be within 1000 seconds of the server time
- All signatures are case-sensitive
- Request body must be the exact JSON string sent in the request

## Servers

- **Sandbox Environment:** `https://platform.stage.arpdigital.io/api/v1`
- **Production Environment:** `https://platform.arpdigital.io/api/v1`
