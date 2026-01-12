# Deposit 

### Create Deposit POST

{
    "success": true,
    "data": {
        "id": "cmkaxxnhn0015vq3vv8t3s0gm",
        "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
        "amount": "10",
        "notes": null,
        "reference": null,
        "source": null,
        "status": "PROCESSING",
        "approvalStatus": "PENDING",
        "referenceId": null,
        "createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",
        "initiatorType": "API_KEY",
        "createdAt": "2026-01-12T09:08:36.011Z",
        "updatedAt": "2026-01-12T09:08:36.011Z",
        "sourceTreasuryId": null,
        "labels": [],
        "externalReference": null,
        "currencyId": "cmj10enm60012x34dv2hsyaeo",
        "cryptocurrencyId": null,
        "chainId": null
    }
}

### List Deposit GET

{
    "success": true,
    "data": {
        "deposits": [
            {
                "id": "cmkaxxnhn0015vq3vv8t3s0gm",
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "amount": "10",
                "notes": null,
                "reference": null,
                "status": "PROCESSING",
                "approvalStatus": "PENDING",
                "referenceId": null,
                "createdAt": "2026-01-12T09:08:36.011Z",
                "sourceTreasuryId": null,
                "labels": [],
                "externalReference": null,
                "currencyId": "cmj10enm60012x34dv2hsyaeo",
                "cryptocurrencyId": null,
                "chainId": null,
                "currency": {
                    "id": "cmj10enm60012x34dv2hsyaeo",
                    "type": "FIAT",
                    "name": "US Dollar",
                    "symbol": "USD",
                    "decimals": 2,
                    "minTradeAmount": null,
                    "maxTradeAmount": null,
                    "hiddenOnUI": false,
                    "products": [
                        "OTC",
                        "GPS",
                        "PAY"
                    ]
                },
                "sourceTreasury": null,
                "explorerUrl": null
            },
            {
                "id": "cmk5hlkta000bx33w464re6gh",
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "amount": "2",
                "notes": null,
                "reference": "dfgh",
                "status": "COMPLETED",
                "approvalStatus": "APPROVED",
                "referenceId": null,
                "createdAt": "2026-01-08T13:32:27.934Z",
                "sourceTreasuryId": "cmj10enuh001ox34dhv36m9fs",
                "labels": [],
                "externalReference": null,
                "currencyId": "cmj10enm60012x34dv2hsyaeo",
                "cryptocurrencyId": null,
                "chainId": null,
                "currency": {
                    "id": "cmj10enm60012x34dv2hsyaeo",
                    "type": "FIAT",
                    "name": "US Dollar",
                    "symbol": "USD",
                    "decimals": 2,
                    "minTradeAmount": null,
                    "maxTradeAmount": null,
                    "hiddenOnUI": false,
                    "products": [
                        "OTC",
                        "GPS",
                        "PAY"
                    ]
                },
                "sourceTreasury": {
                    "id": "cmj10enuh001ox34dhv36m9fs",
                    "currencyId": "cmj10enm60012x34dv2hsyaeo",
                    "country": "Bahrain",
                    "beneficiaryName": "ARP DIGITAL BAHRAIN BSC CLOSED",
                    "bankName": "National Bank of Bahrain",
                    "accountNumber": "5000044053",
                    "routingCode": "NBOBBHBM",
                    "iban": "BH63NBOB00005000044053",
                    "enabled": true,
                    "accountDetails": null
                },
                "explorerUrl": null
            },
            {
                "id": "cmk2gszlx000bx43zi3kox7kk",
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "amount": "20",
                "notes": null,
                "reference": "test",
                "status": "COMPLETED",
                "approvalStatus": "APPROVED",
                "referenceId": null,
                "createdAt": "2026-01-06T10:46:55.557Z",
                "sourceTreasuryId": "cmj10enun001px34de8hfqppn",
                "labels": [],
                "externalReference": null,
                "currencyId": "cmj10enm60013x34dqg86qxzo",
                "cryptocurrencyId": null,
                "chainId": null,
                "currency": {
                    "id": "cmj10enm60013x34dqg86qxzo",
                    "type": "FIAT",
                    "name": "Bahraini Dinar",
                    "symbol": "BHD",
                    "decimals": 3,
                    "minTradeAmount": null,
                    "maxTradeAmount": null,
                    "hiddenOnUI": false,
                    "products": [
                        "OTC",
                        "GPS",
                        "PAY"
                    ]
                },
                "sourceTreasury": {
                    "id": "cmj10enun001px34de8hfqppn",
                    "currencyId": "cmj10enm60013x34dqg86qxzo",
                    "country": "Bahrain",
                    "beneficiaryName": "ARP DIGITAL BAHRAIN BSC CLOSED",
                    "bankName": "Bank of Bahrain and Kuwait (BBK)",
                    "accountNumber": "100000483721",
                    "routingCode": "BBKUBHBM",
                    "iban": "BH32BBKU00100000483721",
                    "enabled": true,
                    "accountDetails": null
                },
                "explorerUrl": null
            },
            {
                "id": "cmjv50k5p0003x642vwke6ort",
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "amount": "1",
                "notes": null,
                "reference": null,
                "status": "PROCESSING",
                "approvalStatus": "PENDING",
                "referenceId": null,
                "createdAt": "2026-01-01T07:42:30.157Z",
                "sourceTreasuryId": "cmj10enun001px34de8hfqppn",
                "labels": [],
                "externalReference": null,
                "currencyId": "cmj10enm60013x34dqg86qxzo",
                "cryptocurrencyId": null,
                "chainId": null,
                "currency": {
                    "id": "cmj10enm60013x34dqg86qxzo",
                    "type": "FIAT",
                    "name": "Bahraini Dinar",
                    "symbol": "BHD",
                    "decimals": 3,
                    "minTradeAmount": null,
                    "maxTradeAmount": null,
                    "hiddenOnUI": false,
                    "products": [
                        "OTC",
                        "GPS",
                        "PAY"
                    ]
                },
                "sourceTreasury": {
                    "id": "cmj10enun001px34de8hfqppn",
                    "currencyId": "cmj10enm60013x34dqg86qxzo",
                    "country": "Bahrain",
                    "beneficiaryName": "ARP DIGITAL BAHRAIN BSC CLOSED",
                    "bankName": "Bank of Bahrain and Kuwait (BBK)",
                    "accountNumber": "100000483721",
                    "routingCode": "BBKUBHBM",
                    "iban": "BH32BBKU00100000483721",
                    "enabled": true,
                    "accountDetails": null
                },
                "explorerUrl": null
            },
            {
                "id": "cmjs7d11d0007ww3wnce3jada",
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "amount": "1",
                "notes": "Fireblocks vault deposit - TxID: 97acdf85-da7d-427d-8c0a-a0ae8f2a4251",
                "reference": "0xd4b04c1ac1aac846c70a99396bcbe9ca30e29c270a1d626b0a54757c3dda9f91",
                "status": "COMPLETED",
                "approvalStatus": "APPROVED",
                "referenceId": "97acdf85-da7d-427d-8c0a-a0ae8f2a4251",
                "createdAt": "2025-12-30T06:24:52.609Z",
                "sourceTreasuryId": null,
                "labels": [
                    "CRYPTO_DEPOSIT"
                ],
                "externalReference": null,
                "currencyId": "cmj10enm60017x34dhqgb09bk",
                "cryptocurrencyId": "cmj10enmm001ax34dvwbcntj1",
                "chainId": "cmj10enlx000zx34d1da1hqaz",
                "currency": {
                    "id": "cmj10enm60017x34dhqgb09bk",
                    "type": "CRYPTO",
                    "name": "Tether",
                    "symbol": "USDT",
                    "decimals": 6,
                    "minTradeAmount": null,
                    "maxTradeAmount": null,
                    "hiddenOnUI": false,
                    "products": [
                        "OTC",
                        "GPS",
                        "PAY"
                    ]
                },
                "sourceTreasury": null,
                "explorerUrl": null
            },
            {
                "id": "cmjqsp4ea0001x140tjbrvxb6",
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "amount": "1",
                "notes": null,
                "reference": "review",
                "status": "COMPLETED",
                "approvalStatus": "APPROVED",
                "referenceId": null,
                "createdAt": "2025-12-29T06:46:36.411Z",
                "sourceTreasuryId": null,
                "labels": [],
                "externalReference": null,
                "currencyId": "cmj10enm60015x34dq87dwub5",
                "cryptocurrencyId": null,
                "chainId": null,
                "currency": {
                    "id": "cmj10enm60015x34dq87dwub5",
                    "type": "FIAT",
                    "name": "Saudi Riyal",
                    "symbol": "SAR",
                    "decimals": 2,
                    "minTradeAmount": null,
                    "maxTradeAmount": null,
                    "hiddenOnUI": false,
                    "products": [
                        "OTC",
                        "GPS"
                    ]
                },
                "sourceTreasury": null,
                "explorerUrl": null
            },
            {
                "id": "cmjjlhdlz0007vl4ahrjkbg2a",
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "amount": "1",
                "notes": "Fireblocks vault deposit - TxID: 2f013e3d-5abf-4d01-96f0-ffce3764edb0",
                "reference": "0x40fb16ca622c7a5ff28a9608da67336c070ad4afc17803aa439b7b655c244156",
                "status": "COMPLETED",
                "approvalStatus": "APPROVED",
                "referenceId": "2f013e3d-5abf-4d01-96f0-ffce3764edb0",
                "createdAt": "2025-12-24T05:50:14.567Z",
                "sourceTreasuryId": null,
                "labels": [
                    "CRYPTO_DEPOSIT"
                ],
                "externalReference": null,
                "currencyId": "cmj10enm60017x34dhqgb09bk",
                "cryptocurrencyId": "cmj10enmm001ax34dvwbcntj1",
                "chainId": "cmj10enlx000zx34d1da1hqaz",
                "currency": {
                    "id": "cmj10enm60017x34dhqgb09bk",
                    "type": "CRYPTO",
                    "name": "Tether",
                    "symbol": "USDT",
                    "decimals": 6,
                    "minTradeAmount": null,
                    "maxTradeAmount": null,
                    "hiddenOnUI": false,
                    "products": [
                        "OTC",
                        "GPS",
                        "PAY"
                    ]
                },
                "sourceTreasury": null,
                "explorerUrl": null
            },
            {
                "id": "cmjjlch7z0001vl4azlkoy6on",
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "amount": "5",
                "notes": "Fireblocks vault deposit - TxID: ff5f5436-8ab4-4312-b44a-395521e02e33",
                "reference": "0x690bf7bd07911ea82ec8d4caefb0a71b79df90ebb1e1a537adefe7a0c537a0a6",
                "status": "COMPLETED",
                "approvalStatus": "APPROVED",
                "referenceId": "ff5f5436-8ab4-4312-b44a-395521e02e33",
                "createdAt": "2025-12-24T05:46:25.967Z",
                "sourceTreasuryId": null,
                "labels": [
                    "CRYPTO_DEPOSIT"
                ],
                "externalReference": null,
                "currencyId": "cmj10enm60017x34dhqgb09bk",
                "cryptocurrencyId": "cmj10enmm001ax34dvwbcntj1",
                "chainId": "cmj10enlx000zx34d1da1hqaz",
                "currency": {
                    "id": "cmj10enm60017x34dhqgb09bk",
                    "type": "CRYPTO",
                    "name": "Tether",
                    "symbol": "USDT",
                    "decimals": 6,
                    "minTradeAmount": null,
                    "maxTradeAmount": null,
                    "hiddenOnUI": false,
                    "products": [
                        "OTC",
                        "GPS",
                        "PAY"
                    ]
                },
                "sourceTreasury": null,
                "explorerUrl": null
            },
            {
                "id": "cmjil5g7f0017wz3wp8vxlhnr",
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "amount": "100",
                "notes": null,
                "reference": "review",
                "status": "COMPLETED",
                "approvalStatus": "APPROVED",
                "referenceId": null,
                "createdAt": "2025-12-23T12:53:11.883Z",
                "sourceTreasuryId": "cmj10enuz001rx34dv54wio7v",
                "labels": [],
                "externalReference": null,
                "currencyId": "cmj10enm60015x34dq87dwub5",
                "cryptocurrencyId": null,
                "chainId": null,
                "currency": {
                    "id": "cmj10enm60015x34dq87dwub5",
                    "type": "FIAT",
                    "name": "Saudi Riyal",
                    "symbol": "SAR",
                    "decimals": 2,
                    "minTradeAmount": null,
                    "maxTradeAmount": null,
                    "hiddenOnUI": false,
                    "products": [
                        "OTC",
                        "GPS"
                    ]
                },
                "sourceTreasury": {
                    "id": "cmj10enuz001rx34dv54wio7v",
                    "currencyId": "cmj10enm60015x34dq87dwub5",
                    "country": "Bahrain",
                    "beneficiaryName": "ARP DIGITAL BAHRAIN BSC CLOSED",
                    "bankName": "Bank of Bahrain and Kuwait (BBK)",
                    "accountNumber": "100000483763",
                    "routingCode": "BBKUBHBM",
                    "iban": "BH62BBKU00100000483763",
                    "enabled": true,
                    "accountDetails": null
                },
                "explorerUrl": null
            },
            {
                "id": "cmjija49c000xwz3w0cajx8ee",
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "amount": "100",
                "notes": null,
                "reference": "review",
                "status": "COMPLETED",
                "approvalStatus": "APPROVED",
                "referenceId": null,
                "createdAt": "2025-12-23T12:00:50.449Z",
                "sourceTreasuryId": "cmj10enu5001mx34dw0n8w9dg",
                "labels": [],
                "externalReference": null,
                "currencyId": "cmj10enm50011x34d8fq1w4j6",
                "cryptocurrencyId": null,
                "chainId": null,
                "currency": {
                    "id": "cmj10enm50011x34d8fq1w4j6",
                    "type": "FIAT",
                    "name": "UAE Dirham",
                    "symbol": "AED",
                    "decimals": 2,
                    "minTradeAmount": null,
                    "maxTradeAmount": null,
                    "hiddenOnUI": false,
                    "products": [
                        "OTC",
                        "GPS",
                        "PAY"
                    ]
                },
                "sourceTreasury": {
                    "id": "cmj10enu5001mx34dw0n8w9dg",
                    "currencyId": "cmj10enm50011x34d8fq1w4j6",
                    "country": "Bahrain",
                    "beneficiaryName": "ARP DIGITAL BAHRAIN BSC CLOSED",
                    "bankName": "Bank of Bahrain and Kuwait (BBK)",
                    "accountNumber": "100000483750",
                    "routingCode": "BBKUBHBM",
                    "iban": "BH25BBKU00100000483750",
                    "enabled": true,
                    "accountDetails": null
                },
                "explorerUrl": null
            },
            {
                "id": "cmjihy577000pwz3wf65ud9g8",
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "amount": "10",
                "notes": null,
                "reference": "review",
                "status": "COMPLETED",
                "approvalStatus": "APPROVED",
                "referenceId": null,
                "createdAt": "2025-12-23T11:23:32.179Z",
                "sourceTreasuryId": "cmj10enuh001ox34dhv36m9fs",
                "labels": [],
                "externalReference": null,
                "currencyId": "cmj10enm60012x34dv2hsyaeo",
                "cryptocurrencyId": null,
                "chainId": null,
                "currency": {
                    "id": "cmj10enm60012x34dv2hsyaeo",
                    "type": "FIAT",
                    "name": "US Dollar",
                    "symbol": "USD",
                    "decimals": 2,
                    "minTradeAmount": null,
                    "maxTradeAmount": null,
                    "hiddenOnUI": false,
                    "products": [
                        "OTC",
                        "GPS",
                        "PAY"
                    ]
                },
                "sourceTreasury": {
                    "id": "cmj10enuh001ox34dhv36m9fs",
                    "currencyId": "cmj10enm60012x34dv2hsyaeo",
                    "country": "Bahrain",
                    "beneficiaryName": "ARP DIGITAL BAHRAIN BSC CLOSED",
                    "bankName": "National Bank of Bahrain",
                    "accountNumber": "5000044053",
                    "routingCode": "NBOBBHBM",
                    "iban": "BH63NBOB00005000044053",
                    "enabled": true,
                    "accountDetails": null
                },
                "explorerUrl": null
            },
            {
                "id": "cmjihx42a000hwz3wn62d3fz9",
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "amount": "10",
                "notes": null,
                "reference": "review",
                "status": "COMPLETED",
                "approvalStatus": "APPROVED",
                "referenceId": null,
                "createdAt": "2025-12-23T11:22:44.050Z",
                "sourceTreasuryId": "cmj10enu5001mx34dw0n8w9dg",
                "labels": [],
                "externalReference": null,
                "currencyId": "cmj10enm50011x34d8fq1w4j6",
                "cryptocurrencyId": null,
                "chainId": null,
                "currency": {
                    "id": "cmj10enm50011x34d8fq1w4j6",
                    "type": "FIAT",
                    "name": "UAE Dirham",
                    "symbol": "AED",
                    "decimals": 2,
                    "minTradeAmount": null,
                    "maxTradeAmount": null,
                    "hiddenOnUI": false,
                    "products": [
                        "OTC",
                        "GPS",
                        "PAY"
                    ]
                },
                "sourceTreasury": {
                    "id": "cmj10enu5001mx34dw0n8w9dg",
                    "currencyId": "cmj10enm50011x34d8fq1w4j6",
                    "country": "Bahrain",
                    "beneficiaryName": "ARP DIGITAL BAHRAIN BSC CLOSED",
                    "bankName": "Bank of Bahrain and Kuwait (BBK)",
                    "accountNumber": "100000483750",
                    "routingCode": "BBKUBHBM",
                    "iban": "BH25BBKU00100000483750",
                    "enabled": true,
                    "accountDetails": null
                },
                "explorerUrl": null
            },
            {
                "id": "cmjihukdt0009wz3w2xhpw53y",
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "amount": "10",
                "notes": null,
                "reference": "review",
                "status": "COMPLETED",
                "approvalStatus": "APPROVED",
                "referenceId": null,
                "createdAt": "2025-12-23T11:20:45.234Z",
                "sourceTreasuryId": "cmj10enuz001rx34dv54wio7v",
                "labels": [],
                "externalReference": null,
                "currencyId": "cmj10enm60015x34dq87dwub5",
                "cryptocurrencyId": null,
                "chainId": null,
                "currency": {
                    "id": "cmj10enm60015x34dq87dwub5",
                    "type": "FIAT",
                    "name": "Saudi Riyal",
                    "symbol": "SAR",
                    "decimals": 2,
                    "minTradeAmount": null,
                    "maxTradeAmount": null,
                    "hiddenOnUI": false,
                    "products": [
                        "OTC",
                        "GPS"
                    ]
                },
                "sourceTreasury": {
                    "id": "cmj10enuz001rx34dv54wio7v",
                    "currencyId": "cmj10enm60015x34dq87dwub5",
                    "country": "Bahrain",
                    "beneficiaryName": "ARP DIGITAL BAHRAIN BSC CLOSED",
                    "bankName": "Bank of Bahrain and Kuwait (BBK)",
                    "accountNumber": "100000483763",
                    "routingCode": "BBKUBHBM",
                    "iban": "BH62BBKU00100000483763",
                    "enabled": true,
                    "accountDetails": null
                },
                "explorerUrl": null
            },
            {
                "id": "cmjihsvx10001wz3wglshj29c",
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "amount": "5",
                "notes": null,
                "reference": "review",
                "status": "COMPLETED",
                "approvalStatus": "APPROVED",
                "referenceId": null,
                "createdAt": "2025-12-23T11:19:26.868Z",
                "sourceTreasuryId": "cmj10enun001px34de8hfqppn",
                "labels": [],
                "externalReference": null,
                "currencyId": "cmj10enm60013x34dqg86qxzo",
                "cryptocurrencyId": null,
                "chainId": null,
                "currency": {
                    "id": "cmj10enm60013x34dqg86qxzo",
                    "type": "FIAT",
                    "name": "Bahraini Dinar",
                    "symbol": "BHD",
                    "decimals": 3,
                    "minTradeAmount": null,
                    "maxTradeAmount": null,
                    "hiddenOnUI": false,
                    "products": [
                        "OTC",
                        "GPS",
                        "PAY"
                    ]
                },
                "sourceTreasury": {
                    "id": "cmj10enun001px34de8hfqppn",
                    "currencyId": "cmj10enm60013x34dqg86qxzo",
                    "country": "Bahrain",
                    "beneficiaryName": "ARP DIGITAL BAHRAIN BSC CLOSED",
                    "bankName": "Bank of Bahrain and Kuwait (BBK)",
                    "accountNumber": "100000483721",
                    "routingCode": "BBKUBHBM",
                    "iban": "BH32BBKU00100000483721",
                    "enabled": true,
                    "accountDetails": null
                },
                "explorerUrl": null
            },
            {
                "id": "cmjh23qlg001bx33xzk29fxfg",
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "amount": "1",
                "notes": "Fireblocks vault deposit - TxID: 5f8b2d63-8f60-4269-9de0-6644b4086111",
                "reference": "0xc68097c646525cfb7a3eb1e91fefef36b7edbcd09889a791c2605190de5d6546",
                "status": "COMPLETED",
                "approvalStatus": "APPROVED",
                "referenceId": "5f8b2d63-8f60-4269-9de0-6644b4086111",
                "createdAt": "2025-12-22T11:12:13.156Z",
                "sourceTreasuryId": null,
                "labels": [
                    "CRYPTO_DEPOSIT"
                ],
                "externalReference": null,
                "currencyId": "cmj10enm60017x34dhqgb09bk",
                "cryptocurrencyId": "cmj10enmm001ax34dvwbcntj1",
                "chainId": "cmj10enlx000zx34d1da1hqaz",
                "currency": {
                    "id": "cmj10enm60017x34dhqgb09bk",
                    "type": "CRYPTO",
                    "name": "Tether",
                    "symbol": "USDT",
                    "decimals": 6,
                    "minTradeAmount": null,
                    "maxTradeAmount": null,
                    "hiddenOnUI": false,
                    "products": [
                        "OTC",
                        "GPS",
                        "PAY"
                    ]
                },
                "sourceTreasury": null,
                "explorerUrl": null
            },
            {
                "id": "cmjgwtrj7000xx33x0nj524jp",
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "amount": "10",
                "notes": null,
                "reference": "review",
                "status": "COMPLETED",
                "approvalStatus": "APPROVED",
                "referenceId": null,
                "createdAt": "2025-12-22T08:44:29.731Z",
                "sourceTreasuryId": "cmj10enun001px34de8hfqppn",
                "labels": [],
                "externalReference": null,
                "currencyId": "cmj10enm60013x34dqg86qxzo",
                "cryptocurrencyId": null,
                "chainId": null,
                "currency": {
                    "id": "cmj10enm60013x34dqg86qxzo",
                    "type": "FIAT",
                    "name": "Bahraini Dinar",
                    "symbol": "BHD",
                    "decimals": 3,
                    "minTradeAmount": null,
                    "maxTradeAmount": null,
                    "hiddenOnUI": false,
                    "products": [
                        "OTC",
                        "GPS",
                        "PAY"
                    ]
                },
                "sourceTreasury": {
                    "id": "cmj10enun001px34de8hfqppn",
                    "currencyId": "cmj10enm60013x34dqg86qxzo",
                    "country": "Bahrain",
                    "beneficiaryName": "ARP DIGITAL BAHRAIN BSC CLOSED",
                    "bankName": "Bank of Bahrain and Kuwait (BBK)",
                    "accountNumber": "100000483721",
                    "routingCode": "BBKUBHBM",
                    "iban": "BH32BBKU00100000483721",
                    "enabled": true,
                    "accountDetails": null
                },
                "explorerUrl": null
            },
            {
                "id": "cmjgtbdqz000hx33xs901ucly",
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "amount": "5",
                "notes": null,
                "reference": "review",
                "status": "COMPLETED",
                "approvalStatus": "APPROVED",
                "referenceId": null,
                "createdAt": "2025-12-22T07:06:13.212Z",
                "sourceTreasuryId": "cmj10enuc001nx34d6ewlf1vs",
                "labels": [],
                "externalReference": null,
                "currencyId": "cmj10enm60012x34dv2hsyaeo",
                "cryptocurrencyId": null,
                "chainId": null,
                "currency": {
                    "id": "cmj10enm60012x34dv2hsyaeo",
                    "type": "FIAT",
                    "name": "US Dollar",
                    "symbol": "USD",
                    "decimals": 2,
                    "minTradeAmount": null,
                    "maxTradeAmount": null,
                    "hiddenOnUI": false,
                    "products": [
                        "OTC",
                        "GPS",
                        "PAY"
                    ]
                },
                "sourceTreasury": {
                    "id": "cmj10enuc001nx34d6ewlf1vs",
                    "currencyId": "cmj10enm60012x34dv2hsyaeo",
                    "country": "Bahrain",
                    "beneficiaryName": "ARP DIGITAL BAHRAIN BSC CLOSED",
                    "bankName": "Bank of Bahrain and Kuwait (BBK)",
                    "accountNumber": "100000483776",
                    "routingCode": "BBKUBHBM",
                    "iban": "BH02BBKU00100000483776",
                    "enabled": true,
                    "accountDetails": null
                },
                "explorerUrl": null
            },
            {
                "id": "cmjgslwyv0009x33xwbrmv4gg",
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "amount": "5",
                "notes": null,
                "reference": "review",
                "status": "COMPLETED",
                "approvalStatus": "APPROVED",
                "referenceId": null,
                "createdAt": "2025-12-22T06:46:25.063Z",
                "sourceTreasuryId": "cmj10enun001px34de8hfqppn",
                "labels": [],
                "externalReference": null,
                "currencyId": "cmj10enm60013x34dqg86qxzo",
                "cryptocurrencyId": null,
                "chainId": null,
                "currency": {
                    "id": "cmj10enm60013x34dqg86qxzo",
                    "type": "FIAT",
                    "name": "Bahraini Dinar",
                    "symbol": "BHD",
                    "decimals": 3,
                    "minTradeAmount": null,
                    "maxTradeAmount": null,
                    "hiddenOnUI": false,
                    "products": [
                        "OTC",
                        "GPS",
                        "PAY"
                    ]
                },
                "sourceTreasury": {
                    "id": "cmj10enun001px34de8hfqppn",
                    "currencyId": "cmj10enm60013x34dqg86qxzo",
                    "country": "Bahrain",
                    "beneficiaryName": "ARP DIGITAL BAHRAIN BSC CLOSED",
                    "bankName": "Bank of Bahrain and Kuwait (BBK)",
                    "accountNumber": "100000483721",
                    "routingCode": "BBKUBHBM",
                    "iban": "BH32BBKU00100000483721",
                    "enabled": true,
                    "accountDetails": null
                },
                "explorerUrl": null
            }
        ],
        "total": 18
    }
}


# Sender 

### List Senders GET

{
    "success": true,
    "data": [
        {
            "id": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",
            "email": "jennyinfo24@gmail.com",
            "fullName": "Jaimini Bhandari",
            "phone": null,
            "createdAt": "2025-12-22T04:58:47.392Z",
            "updatedAt": "2025-12-22T05:04:25.933Z"
        }
    ]
}


# Recipient

### Verification field GET

{
    "success": true,
    "data": [
        {
            "fieldName": "firstName",
            "displayName": "First Name",
            "required": true,
            "type": "STRING",
            "regex": "^[A-Za-z\\s.'.\\-]{1,35}$",
            "errorMessage": "Please enter a valid first name (1-35 letters)"
        },
        {
            "fieldName": "lastName",
            "displayName": "Last Name",
            "required": true,
            "type": "STRING",
            "regex": "^[A-Za-z\\s]{1,35}$",
            "errorMessage": "Please enter a valid last name (1-35 letters)"
        },
        {
            "fieldName": "email",
            "displayName": "Email",
            "required": false,
            "type": "STRING",
            "regex": "^[a-zA-Z0-9._%\\+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
            "errorMessage": "Please enter a valid email address"
        },
        {
            "fieldName": "phone",
            "displayName": "Phone",
            "required": false,
            "type": "STRING",
            "regex": "^\\d{10}$",
            "errorMessage": "Please enter a valid phone number (10 digits)"
        },
        {
            "fieldName": "city",
            "displayName": "City",
            "required": false,
            "type": "STRING",
            "regex": "^[A-Za-z\\s]{1,50}$",
            "errorMessage": "Please enter a valid city name (1-50 letters)"
        },
        {
            "fieldName": "state",
            "displayName": "State",
            "required": false,
            "type": "STRING",
            "regex": "^[A-Za-z\\s]{1,50}$",
            "errorMessage": "Please enter a valid state name (1-50 letters)"
        },
        {
            "fieldName": "postCode",
            "displayName": "Post Code",
            "required": false,
            "type": "STRING",
            "regex": "^[1-9][0-9]{5}$",
            "errorMessage": "Please enter a valid Indian PIN code (6 digits, cannot start with 0)"
        },
        {
            "fieldName": "address",
            "displayName": "Address",
            "required": false,
            "type": "STRING",
            "regex": "^[A-Za-z0-9\\s,.'\\-/#()&]{1,200}$",
            "errorMessage": "Please enter a valid address (1-200 characters)"
        }
    ]
}


### paymentmethod field  GET

{
    "success": true,
    "data": {
        "BANK_ACCOUNT": [
            {
                "fieldName": "sla",
                "value": "Instant, 24/7 including weekends and holidays. Minimum 101 INR & Limit upto 500,000 INR",
                "min": 500,
                "max": 10000000
            },
            {
                "fieldName": "accountNumber",
                "displayName": "Account Number",
                "required": true,
                "type": "STRING",
                "regex": "^\\d{9,18}$",
                "errorMessage": "Please enter a valid Indian bank account number (9–18 digits)."
            },
            {
                "fieldName": "ifscCode",
                "displayName": "IFSC Code",
                "required": true,
                "type": "STRING",
                "regex": "^([A-Z]{4}0[A-Z0-9]{6})$",
                "errorMessage": "Please enter a valid IFSC code (e.g., HDFC0001234)."
            },
            {
                "fieldName": "bankName",
                "displayName": "Bank Name",
                "required": true,
                "type": "STRING",
                "regex": "^[A-Za-z0-9&.,\\- ]{3,25}$",
                "errorMessage": "Please enter a valid bank name (3–25 characters)."
            },
            {
                "fieldName": "accountHolderName",
                "displayName": "Account Holder Name",
                "required": true,
                "type": "STRING",
                "regex": "^[A-Za-z\\s.'\\-]{3,100}$",
                "errorMessage": "Please enter a valid account holder name (only alphabets and .'- allowed)."
            },
            {
                "fieldName": "branch",
                "displayName": "Branch",
                "required": true,
                "type": "STRING",
                "regex": "^[A-Za-z0-9\\s.,'-]{3,25}$",
                "errorMessage": "Please enter a valid branch name (3–25 characters)."
            },
            {
                "fieldName": "accountType",
                "displayName": "Account Type",
                "required": false,
                "type": "MULTI_CHOICE",
                "options": [
                    {
                        "value": "savings",
                        "displayName": "Savings"
                    },
                    {
                        "value": "current",
                        "displayName": "Current"
                    }
                ]
            }
        ]
    }
}

# Recipient

### Create recipient POST


{
    "success": true,
    "data": {
        "id": "7c801cac-ba71-4cb2-8b4a-7c8ddd28b81d",
        "name": "Maadhav Sharma",
        "type": "INDIVIDUAL",
        "country": "IND",
        "verificationInfo": {
            "email": "maadhav@codedecoders.io",
            "phone": "7819011596",
            "lastName": "Sharma",
            "firstName": "Maadhav"
        },
        "metadata": null,
        "verificationStatus": "NOT_STARTED",
        "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
        "createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",
        "initiatorType": "USER",
        "createdAt": "2026-01-12T09:45:25.367Z",
        "updatedAt": "2026-01-12T09:45:25.459Z",
        "deletedAt": null,
        "externalReference": null,
        "paymentMethods": [
            {
                "id": "ed2883b6-8b43-42b6-93ba-0080bf485b6b",
                "type": "BANK_ACCOUNT",
                "metadata": {
                    "branch": "Motera",
                    "bankName": "HDFC Bank",
                    "ifscCode": "HDFC0001234",
                    "accountNumber": "1234567890",
                    "accountHolderName": "MAADHAV SHARMA"
                },
                "recipientId": "7c801cac-ba71-4cb2-8b4a-7c8ddd28b81d",
                "partnerId": null,
                "createdAt": "2026-01-12T09:45:25.382Z",
                "updatedAt": "2026-01-12T09:45:25.382Z"
            }
        ]
    }
}


### Get Recipient

{
    "success": true,
    "data": [
        {
            "id": "7c801cac-ba71-4cb2-8b4a-7c8ddd28b81d",
            "name": "Maadhav Sharma",
            "type": "INDIVIDUAL",
            "country": "IND",
            "verificationInfo": {
                "email": "maadhav@codedecoders.io",
                "phone": "7819011596",
                "lastName": "Sharma",
                "firstName": "Maadhav"
            },
            "metadata": null,
            "verificationStatus": "NOT_STARTED",
            "externalReference": null,
            "paymentMethods": [
                {
                    "id": "ed2883b6-8b43-42b6-93ba-0080bf485b6b",
                    "type": "BANK_ACCOUNT",
                    "metadata": {
                        "branch": "Motera",
                        "bankName": "HDFC Bank",
                        "ifscCode": "HDFC0001234",
                        "accountNumber": "1234567890",
                        "accountHolderName": "MAADHAV SHARMA"
                    }
                }
            ]
        },
        {
            "id": "bd38d26b-303d-4e75-bf4a-bfad8c9b7ac8",
            "name": "Queen Smith",
            "type": "INDIVIDUAL",
            "country": "PHL",
            "verificationInfo": {
                "lastName": "Smith",
                "firstName": "Queen"
            },
            "metadata": null,
            "verificationStatus": "NOT_STARTED",
            "externalReference": null,
            "paymentMethods": [
                {
                    "id": "6506e25d-154d-42c4-b089-b939b7fc4704",
                    "type": "INSTAPAY",
                    "metadata": {
                        "name": "Juan Dela Cruz",
                        "channel": "bpi",
                        "accountNumber": "5000044048"
                    }
                }
            ]
        },
        {
            "id": "23d6c769-3ce8-4ed7-b9b2-305320757a55",
            "name": "Sara Dela Cruz",
            "type": "INDIVIDUAL",
            "country": "PHL",
            "verificationInfo": {
                "lastName": "Dela Cruz",
                "firstName": "Sara"
            },
            "metadata": null,
            "verificationStatus": "NOT_STARTED",
            "externalReference": null,
            "paymentMethods": [
                {
                    "id": "c6675101-348a-4cf3-b2bc-befc4bab8861",
                    "type": "INSTAPAY",
                    "metadata": {
                        "name": "Juan Dela Cruz",
                        "channel": "bpi",
                        "accountNumber": "45678934567"
                    }
                }
            ]
        },
        {
            "id": "861bf8ba-77bb-487b-8b91-9b6c19647842",
            "name": "Juan Dela Cruz",
            "type": "INDIVIDUAL",
            "country": "PHL",
            "verificationInfo": {
                "lastName": "Dela Cruz",
                "firstName": "Juan"
            },
            "metadata": null,
            "verificationStatus": "NOT_STARTED",
            "externalReference": null,
            "paymentMethods": [
                {
                    "id": "95ebacd3-add7-4d7c-822f-1a6ad7ab07ef",
                    "type": "INSTAPAY",
                    "metadata": {
                        "name": "Juan Dela Cruz",
                        "channel": "bpi",
                        "accountNumber": "1234567890"
                    }
                }
            ]
        },
        {
            "id": "47fd4d11-ccc6-472d-a955-aca1104819be",
            "name": "Queen Luis",
            "type": "INDIVIDUAL",
            "country": "HKG",
            "verificationInfo": {
                "lastName": "Luis",
                "firstName": "Queen",
                "middleName": "Alice",
                "legalFullName": "Queen Alice Luis"
            },
            "metadata": null,
            "verificationStatus": "NOT_STARTED",
            "externalReference": null,
            "paymentMethods": [
                {
                    "id": "3cf3274d-6541-47b9-aa77-a53d34bddfe6",
                    "type": "BANK_ACCOUNT",
                    "metadata": {
                        "city": "Toronto",
                        "state": "Ontario",
                        "street": "Queens Road Central",
                        "country": "HK",
                        "bankName": "Emirates NBD",
                        "postalCode": "999077",
                        "clearingCode": "004",
                        "accountNumber": "1029384756"
                    }
                }
            ]
        },
        {
            "id": "912290c3-4a00-4810-83bd-a534828e6465",
            "name": "Ayaz Johnson",
            "type": "INDIVIDUAL",
            "country": "PHL",
            "verificationInfo": {
                "lastName": "Johnson",
                "firstName": "Ayaz"
            },
            "metadata": null,
            "verificationStatus": "NOT_STARTED",
            "externalReference": null,
            "paymentMethods": [
                {
                    "id": "773569c9-8e2b-41de-8433-c2603477613e",
                    "type": "PESONET",
                    "metadata": {
                        "name": "Juan Dela Cruz",
                        "channel": "bankofcommerce",
                        "accountNumber": "5000044048"
                    }
                }
            ]
        },
        {
            "id": "c26360df-db4d-4d72-9684-d884be12517c",
            "name": "Mohammed Al-Saud",
            "type": "BUSINESS",
            "country": "SAU",
            "verificationInfo": {
                "businessName": "Mohammed Al-Saud"
            },
            "metadata": null,
            "verificationStatus": "NOT_STARTED",
            "externalReference": null,
            "paymentMethods": [
                {
                    "id": "1410ac95-f6dd-4f58-8051-cfc1170add9e",
                    "type": "BANK_ACCOUNT",
                    "metadata": {
                        "bankCode": "INMA",
                        "bankName": "INMA",
                        "fullName": "Mohammed Al-Saud",
                        "accountNumber": "SA0380000000608010167519"
                    }
                }
            ]
        },
        {
            "id": "b4305af5-ff6a-4748-84cb-510bf4cb0ae1",
            "name": "Mohammed Al-Saud",
            "type": "INDIVIDUAL",
            "country": "SAU",
            "verificationInfo": {
                "fullName": "Mohammed Al-Saud"
            },
            "metadata": null,
            "verificationStatus": "NOT_STARTED",
            "externalReference": null,
            "paymentMethods": [
                {
                    "id": "b3264551-30b9-4d71-ae8c-f90fb821b52b",
                    "type": "BANK_ACCOUNT",
                    "metadata": {
                        "bankCode": "INMA",
                        "bankName": "INMA",
                        "fullName": "Mohammed Al-Saud",
                        "accountNumber": "SA0380000000608010167519"
                    }
                }
            ]
        },
        {
            "id": "f03c30f1-c655-44ba-82d2-35d789cd261b",
            "name": "UAE Business Corp",
            "type": "BUSINESS",
            "country": "ARE",
            "verificationInfo": {
                "businessName": "UAE Business Corp"
            },
            "metadata": null,
            "verificationStatus": "NOT_STARTED",
            "externalReference": null,
            "paymentMethods": [
                {
                    "id": "5cceb1ba-3a4a-40d8-92fe-068130ee1047",
                    "type": "BANK_ACCOUNT",
                    "metadata": {
                        "bankCode": "EBILAEADXXX",
                        "bankName": "EBILAEADXXX",
                        "fullName": "Ahmed Al-Mansoori",
                        "accountNumber": "AE070331234567890123456"
                    }
                }
            ]
        },
        {
            "id": "2c1495d6-0b8f-4a0e-8cf3-770b22e22857",
            "name": "Ahmed Al-Mansoori",
            "type": "INDIVIDUAL",
            "country": "ARE",
            "verificationInfo": {
                "fullName": "Ahmed Al-Mansoori"
            },
            "metadata": null,
            "verificationStatus": "NOT_STARTED",
            "externalReference": null,
            "paymentMethods": [
                {
                    "id": "bcbfb847-5a8b-40f6-a198-22cc32c34d4a",
                    "type": "BANK_ACCOUNT",
                    "metadata": {
                        "bankCode": "EBILAEADXXX",
                        "bankName": "EBILAEADXXX",
                        "fullName": "Ahmed Al-Mansoori",
                        "accountNumber": "AE070331234567890123456"
                    }
                }
            ]
        },
        {
            "id": "f4216d0c-0f4a-46e6-9b6b-c19d421d154c",
            "name": "Hong Kong Trading Co.",
            "type": "BUSINESS",
            "country": "HKG",
            "verificationInfo": {
                "businessName": "Hong Kong Trading Co."
            },
            "metadata": null,
            "verificationStatus": "NOT_STARTED",
            "externalReference": null,
            "paymentMethods": [
                {
                    "id": "5728273f-31e8-4950-9596-94bb3abc72c7",
                    "type": "BANK_ACCOUNT",
                    "metadata": {
                        "city": "Central",
                        "state": "Hong Kong Island",
                        "street": "Queens Road Central",
                        "country": "HK",
                        "bankName": "HSBC Hong Kong",
                        "postalCode": "999077",
                        "clearingCode": "004",
                        "accountNumber": "123456789"
                    }
                }
            ]
        },
        {
            "id": "3354b22f-1760-48ef-b153-413c07f7b2fc",
            "name": "Michael Chan",
            "type": "INDIVIDUAL",
            "country": "HKG",
            "verificationInfo": {
                "lastName": "Chan",
                "firstName": "Michael",
                "middleName": "wei",
                "legalFullName": "Michael Wei Chan"
            },
            "metadata": null,
            "verificationStatus": "NOT_STARTED",
            "externalReference": null,
            "paymentMethods": [
                {
                    "id": "57d43b7b-0c4d-49fa-a160-417a08e41d7c",
                    "type": "BANK_ACCOUNT",
                    "metadata": {
                        "city": "Central",
                        "state": "Hong Kong Island",
                        "street": "Queens Road Central",
                        "country": "HK",
                        "bankName": "HSBC Hong Kong",
                        "postalCode": "999077",
                        "clearingCode": "004",
                        "accountNumber": "123456789"
                    }
                }
            ]
        },
        {
            "id": "2ef52c3a-92a0-42df-b00a-03bde94e7ee0",
            "name": "XYZ Enterprises",
            "type": "BUSINESS",
            "country": "PHL",
            "verificationInfo": {
                "businessName": "XYZ Enterprises"
            },
            "metadata": null,
            "verificationStatus": "NOT_STARTED",
            "externalReference": null,
            "paymentMethods": [
                {
                    "id": "d58e29e2-0651-439d-a615-357d43a80d53",
                    "type": "PESONET",
                    "metadata": {
                        "name": "Juan Dela Cruz",
                        "channel": "bdouni",
                        "accountNumber": "123456789012"
                    }
                }
            ]
        },
        {
            "id": "48a8f839-5fbc-40fb-b49e-2ffe3fc5222d",
            "name": "Juan Dela Cruz",
            "type": "INDIVIDUAL",
            "country": "PHL",
            "verificationInfo": {
                "lastName": "Dela Cruz",
                "firstName": "Juan"
            },
            "metadata": null,
            "verificationStatus": "NOT_STARTED",
            "externalReference": null,
            "paymentMethods": [
                {
                    "id": "f1eb5ce5-9073-4ebe-b94b-d61f4c7f2b4b",
                    "type": "PESONET",
                    "metadata": {
                        "name": "Juan Dela Cruz",
                        "channel": "bdouni",
                        "accountNumber": "123456789012"
                    }
                }
            ]
        },
        {
            "id": "0006894e-28e9-4b60-b3e8-a254396f73f2",
            "name": "XYZ Enterprises",
            "type": "BUSINESS",
            "country": "PHL",
            "verificationInfo": {
                "businessName": "XYZ Enterprises"
            },
            "metadata": null,
            "verificationStatus": "NOT_STARTED",
            "externalReference": null,
            "paymentMethods": [
                {
                    "id": "32981ae5-63be-46c8-bc11-260453cce5ac",
                    "type": "INSTAPAY",
                    "metadata": {
                        "name": "Juan Dela Cruz",
                        "channel": "bpi",
                        "accountNumber": "123456789012"
                    }
                }
            ]
        },
        {
            "id": "fc7b6995-2af9-44ed-aeef-e0eb0470b622",
            "name": "Juan Dela Cruz",
            "type": "INDIVIDUAL",
            "country": "PHL",
            "verificationInfo": {
                "lastName": "Dela Cruz",
                "firstName": "Juan"
            },
            "metadata": null,
            "verificationStatus": "NOT_STARTED",
            "externalReference": null,
            "paymentMethods": [
                {
                    "id": "83332023-3412-492d-a804-8729049c0a86",
                    "type": "INSTAPAY",
                    "metadata": {
                        "name": "Juan Dela Cruz",
                        "channel": "bdouni",
                        "accountNumber": "123456789012"
                    }
                }
            ]
        },
        {
            "id": "5064f238-fedf-421c-9c2e-ef426fc24aa7",
            "name": "ABC Corporation",
            "type": "BUSINESS",
            "country": "IND",
            "verificationInfo": {
                "email": "business@testmail.com",
                "phone": "9876543210",
                "businessName": "ABC Corporation"
            },
            "metadata": null,
            "verificationStatus": "NOT_STARTED",
            "externalReference": null,
            "paymentMethods": [
                {
                    "id": "5c2cd88e-aa46-46bc-9150-562497ce4045",
                    "type": "BANK_ACCOUNT",
                    "metadata": {
                        "branch": "Adajan",
                        "bankName": "State Bank of India",
                        "ifscCode": "SBIN0001234",
                        "accountType": "savings",
                        "accountNumber": "1234567890",
                        "accountHolderName": "Rohan Sharma"
                    }
                }
            ]
        },
        {
            "id": "9701c5e3-5e68-4457-9548-d2468fa851d9",
            "name": "Rohan Sharma",
            "type": "INDIVIDUAL",
            "country": "IND",
            "verificationInfo": {
                "city": "Mumbai",
                "email": "rohan.sharma@testmail.com",
                "phone": "9876543210",
                "state": "Maharashtra",
                "address": "Flat 12B, Andheri East, Mumbai",
                "lastName": "Sharma",
                "postCode": "400001",
                "firstName": "\tRohan"
            },
            "metadata": null,
            "verificationStatus": "NOT_STARTED",
            "externalReference": null,
            "paymentMethods": [
                {
                    "id": "025b0f27-3af7-470a-8a17-a35018294381",
                    "type": "BANK_ACCOUNT",
                    "metadata": {
                        "branch": "Adajan",
                        "bankName": "State Bank of India",
                        "ifscCode": "SBIN0001234",
                        "accountType": "savings",
                        "accountNumber": "1234567890",
                        "accountHolderName": "Rohan Sharma"
                    }
                }
            ]
        },
        {
            "id": "b94aa1a0-1078-447e-9ce7-5f1c76602f6c",
            "name": "dfgfd",
            "type": "BUSINESS",
            "country": "PHL",
            "verificationInfo": {
                "businessName": "dfgfd"
            },
            "metadata": null,
            "verificationStatus": "NOT_STARTED",
            "externalReference": null,
            "paymentMethods": [
                {
                    "id": "e7795a92-131f-4023-84f7-d018cb739a5e",
                    "type": "INSTAPAY",
                    "metadata": {
                        "name": "John",
                        "channel": "bdo",
                        "accountNumber": "12345678789"
                    }
                }
            ]
        },
        {
            "id": "d5d5de7c-413a-48a6-8aad-a486d3e4e2f9",
            "name": "Helly Smith",
            "type": "INDIVIDUAL",
            "country": "ARE",
            "verificationInfo": {
                "fullName": "Helly Smith"
            },
            "metadata": null,
            "verificationStatus": "NOT_STARTED",
            "externalReference": null,
            "paymentMethods": [
                {
                    "id": "92e4434d-b557-42c8-9dcd-d41d57605f50",
                    "type": "BANK_ACCOUNT",
                    "metadata": {
                        "bankCode": "BBMEAEADXXX",
                        "bankName": "BBMEAEADXXX",
                        "fullName": "Ahmed Al Khalid",
                        "accountNumber": "AE070331234567890123456"
                    }
                }
            ]
        },
        {
            "id": "19c9d7c2-f128-41ea-aeb9-62fd138fc7de",
            "name": "Sara Smith",
            "type": "INDIVIDUAL",
            "country": "PHL",
            "verificationInfo": {
                "lastName": "Smith",
                "firstName": "Sara"
            },
            "metadata": null,
            "verificationStatus": "NOT_STARTED",
            "externalReference": null,
            "paymentMethods": [
                {
                    "id": "98a391c7-bbb4-4986-8458-9edc15e8aae2",
                    "type": "PESONET",
                    "metadata": {
                        "name": "John",
                        "channel": "bmi",
                        "accountNumber": "1029384756"
                    }
                }
            ]
        },
        {
            "id": "1f2705ac-6aa3-45fa-92de-9cdadab5963a",
            "name": "Rohit Patel",
            "type": "INDIVIDUAL",
            "country": "SAU",
            "verificationInfo": {
                "fullName": "Rohit Patel"
            },
            "metadata": null,
            "verificationStatus": "NOT_STARTED",
            "externalReference": null,
            "paymentMethods": [
                {
                    "id": "9997212d-738e-4dcb-aad2-047cf676e62d",
                    "type": "BANK_ACCOUNT",
                    "metadata": {
                        "bankCode": "EBIL",
                        "bankName": "EBIL",
                        "fullName": "Rohit Patel",
                        "accountNumber": "SA0380000000608010167519"
                    }
                }
            ]
        },
        {
            "id": "a067b2a6-0141-4dcf-bc90-afe96ef9b558",
            "name": "Sara Johnson",
            "type": "INDIVIDUAL",
            "country": "IND",
            "verificationInfo": {
                "city": "Toronto",
                "email": "venexip216@besenica.com",
                "phone": "1236547890",
                "state": "Ontario",
                "address": "Dero cafe",
                "lastName": "Johnson",
                "postCode": "360009",
                "firstName": "Sara"
            },
            "metadata": null,
            "verificationStatus": "NOT_STARTED",
            "externalReference": null,
            "paymentMethods": [
                {
                    "id": "523654f5-045f-42ec-9831-3b1ee9ac9401",
                    "type": "BANK_ACCOUNT",
                    "metadata": {
                        "branch": "Ahmedabad",
                        "bankName": "Emirates NBD",
                        "ifscCode": "HDFC0001234",
                        "accountType": "savings",
                        "accountNumber": "1029384756",
                        "accountHolderName": "John"
                    }
                }
            ]
        },
        {
            "id": "17dccc00-d0f6-4970-9f1b-e65c8bdb44f9",
            "name": "Ahmed Al Khalid",
            "type": "INDIVIDUAL",
            "country": "SAU",
            "verificationInfo": {
                "fullName": "Ahmed Al Khalid"
            },
            "metadata": null,
            "verificationStatus": "NOT_STARTED",
            "externalReference": null,
            "paymentMethods": [
                {
                    "id": "717b1807-364e-483e-a7c4-191ce794d26f",
                    "type": "BANK_ACCOUNT",
                    "metadata": {
                        "bankCode": "NBOK",
                        "bankName": "NBOK",
                        "fullName": "Ahmed Al Khalid",
                        "accountNumber": "SA0380000000608010167519"
                    }
                }
            ]
        },
        {
            "id": "1a38d8ba-1c7b-4148-8e00-66372b2ddea5",
            "name": "Fatima Hussain",
            "type": "INDIVIDUAL",
            "country": "ARE",
            "verificationInfo": {
                "fullName": "Fatima Hussain"
            },
            "metadata": null,
            "verificationStatus": "NOT_STARTED",
            "externalReference": null,
            "paymentMethods": [
                {
                    "id": "f158052e-d21f-4208-a4de-d0df2eb6b30a",
                    "type": "BANK_ACCOUNT",
                    "metadata": {
                        "bankCode": "BSIRAEADXXX",
                        "bankName": "BSIRAEADXXX",
                        "fullName": "Fatima Hussain",
                        "accountNumber": "AE460090000000123456789"
                    }
                }
            ]
        },
        {
            "id": "a616c16a-b6df-4a5d-8c27-d67612829faf",
            "name": "Michael man",
            "type": "INDIVIDUAL",
            "country": "HKG",
            "verificationInfo": {
                "lastName": "man",
                "firstName": "Michael",
                "middleName": "John",
                "legalFullName": "Michael John man"
            },
            "metadata": null,
            "verificationStatus": "NOT_STARTED",
            "externalReference": null,
            "paymentMethods": [
                {
                    "id": "31365a06-6537-4c9c-bd3c-7f402dfb0927",
                    "type": "BANK_ACCOUNT",
                    "metadata": {
                        "city": "Abu Dhabi",
                        "state": "Abu Dhabi",
                        "street": "sfgggg",
                        "country": "HK",
                        "bankName": "National Bank of Bahrain",
                        "postalCode": "456892",
                        "clearingCode": "32005",
                        "accountNumber": "1029384756"
                    }
                }
            ]
        },
        {
            "id": "13acf742-9835-4081-8950-abdb1f0835d5",
            "name": "Sara Johnson",
            "type": "INDIVIDUAL",
            "country": "PHL",
            "verificationInfo": {
                "lastName": "Johnson",
                "firstName": "Sara"
            },
            "metadata": null,
            "verificationStatus": "NOT_STARTED",
            "externalReference": null,
            "paymentMethods": [
                {
                    "id": "fefaee50-0b27-422e-a81e-874432d76995",
                    "type": "INSTAPAY",
                    "metadata": {
                        "name": "John",
                        "channel": "guinobatan",
                        "accountNumber": "5000044048"
                    }
                }
            ]
        }
    ]
}

# Transaction 

### Get exchange rate quote  POST

{
    "success": true,
    "data": {
        "id": "deb19e88-012d-4533-b930-2cd85859fbe9",
        "fromCurrency": "USD",
        "toCurrency": "INR",
        "fromAmount": "10",
        "toAmount": "920.6",
        "rate": "92.06",
        "expiresAt": "2026-01-12T10:10:28.942Z",
        "midMarketRate": "90.154",
        "difference": "19.06"
    }
}

### Excute Transaction POST 

### Get Transaction GET

{
    "success": true,
    "data": {
        "transactions": [
            {
                "id": "f2ec24df-e8f8-47de-a210-6b1abfee1ed1",
                "fromCurrencyId": "cmj10enm60013x34dqg86qxzo",
                "toCurrencyId": "cmj10enm60014x34dm0fp6ndy",
                "fromAmount": "3",
                "toAmount": "732.8658",
                "destination_country": "IND",
                "purpose_of_payment": null,
                "notes": null,
                "error": null,
                "status": "COMPLETED",
                "completedAt": "2026-01-08T09:43:25.126Z",
                "createdAt": "2026-01-08T09:42:37.697Z",
                "updatedAt": "2026-01-08T09:43:25.127Z",
                "externalReference": null,
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",
                "initiatorType": "USER",
                "paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",
                "recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"
            },
            {
                "id": "611322e3-5374-4526-beea-3c541b82a421",
                "fromCurrencyId": "cmj10enm50011x34d8fq1w4j6",
                "toCurrencyId": "cmj10enm60014x34dm0fp6ndy",
                "fromAmount": "40.6237",
                "toAmount": "1000",
                "destination_country": "IND",
                "purpose_of_payment": null,
                "notes": null,
                "error": null,
                "status": "COMPLETED",
                "completedAt": "2026-01-07T05:46:11.084Z",
                "createdAt": "2026-01-07T05:45:15.256Z",
                "updatedAt": "2026-01-07T05:46:11.086Z",
                "externalReference": null,
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",
                "initiatorType": "USER",
                "paymentMethodId": "5c2cd88e-aa46-46bc-9150-562497ce4045",
                "recipientId": "5064f238-fedf-421c-9c2e-ef426fc24aa7"
            },
            {
                "id": "872bd027-1f8d-48f7-90e6-320df5a84d20",
                "fromCurrencyId": "cmj10enm60012x34dv2hsyaeo",
                "toCurrencyId": "cmj10enm60014x34dm0fp6ndy",
                "fromAmount": "6",
                "toAmount": "551.76",
                "destination_country": "IND",
                "purpose_of_payment": null,
                "notes": null,
                "error": null,
                "status": "COMPLETED",
                "completedAt": "2026-01-06T10:47:17.774Z",
                "createdAt": "2026-01-06T10:46:25.884Z",
                "updatedAt": "2026-01-06T10:47:17.775Z",
                "externalReference": null,
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",
                "initiatorType": "USER",
                "paymentMethodId": "025b0f27-3af7-470a-8a17-a35018294381",
                "recipientId": "9701c5e3-5e68-4457-9548-d2468fa851d9"
            },
            {
                "id": "5dcf8ace-535b-467a-bf03-64d458eab249",
                "fromCurrencyId": "cmj10enm60015x34dq87dwub5",
                "toCurrencyId": "cmj10enm60014x34dm0fp6ndy",
                "fromAmount": "21",
                "toAmount": "514.9221",
                "destination_country": "IND",
                "purpose_of_payment": null,
                "notes": null,
                "error": null,
                "status": "COMPLETED",
                "completedAt": "2026-01-06T10:46:23.915Z",
                "createdAt": "2026-01-06T10:45:32.103Z",
                "updatedAt": "2026-01-06T10:46:23.916Z",
                "externalReference": null,
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",
                "initiatorType": "USER",
                "paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",
                "recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"
            },
            {
                "id": "bf7928bc-5e3c-40c4-a6e7-a61d9b75fc82",
                "fromCurrencyId": "cmj10enm60013x34dqg86qxzo",
                "toCurrencyId": "cmj10enm60016x34darmpv6ev",
                "fromAmount": "1",
                "toAmount": "157.1239",
                "destination_country": "PHL",
                "purpose_of_payment": null,
                "notes": null,
                "error": null,
                "status": "COMPLETED",
                "completedAt": "2026-01-06T09:39:51.797Z",
                "createdAt": "2026-01-06T09:39:02.646Z",
                "updatedAt": "2026-01-06T09:39:51.798Z",
                "externalReference": null,
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",
                "initiatorType": "USER",
                "paymentMethodId": "83332023-3412-492d-a804-8729049c0a86",
                "recipientId": "fc7b6995-2af9-44ed-aeef-e0eb0470b622"
            },
            {
                "id": "e7cf98f0-7103-48ac-9596-d907aaea0958",
                "fromCurrencyId": "cmj10enm50011x34d8fq1w4j6",
                "toCurrencyId": "cmj10enm60014x34dm0fp6ndy",
                "fromAmount": "25",
                "toAmount": "624.57",
                "destination_country": "IND",
                "purpose_of_payment": null,
                "notes": null,
                "error": null,
                "status": "COMPLETED",
                "completedAt": "2026-01-06T09:38:04.118Z",
                "createdAt": "2026-01-06T09:37:37.698Z",
                "updatedAt": "2026-01-06T09:38:04.120Z",
                "externalReference": null,
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",
                "initiatorType": "USER",
                "paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",
                "recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"
            },
            {
                "id": "99040d51-c552-4513-8e9a-32fca1c75ba1",
                "fromCurrencyId": "cmj10enm60017x34dhqgb09bk",
                "toCurrencyId": "cmj10enm60016x34darmpv6ev",
                "fromAmount": "2",
                "toAmount": "117.72",
                "destination_country": "PHL",
                "purpose_of_payment": null,
                "notes": null,
                "error": null,
                "status": "COMPLETED",
                "completedAt": "2025-12-24T05:43:16.695Z",
                "createdAt": "2025-12-24T05:42:36.470Z",
                "updatedAt": "2025-12-24T05:43:16.697Z",
                "externalReference": null,
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",
                "initiatorType": "USER",
                "paymentMethodId": "98a391c7-bbb4-4986-8458-9edc15e8aae2",
                "recipientId": "19c9d7c2-f128-41ea-aeb9-62fd138fc7de"
            },
            {
                "id": "043cf98a-6b23-4f52-923d-2bb2920251f3",
                "fromCurrencyId": "cmj10enm60012x34dv2hsyaeo",
                "toCurrencyId": "cmj10enm60014x34dm0fp6ndy",
                "fromAmount": "6",
                "toAmount": "546.72",
                "destination_country": "IND",
                "purpose_of_payment": null,
                "notes": null,
                "error": null,
                "status": "COMPLETED",
                "completedAt": "2025-12-24T05:32:54.254Z",
                "createdAt": "2025-12-24T05:32:01.410Z",
                "updatedAt": "2025-12-24T05:32:54.256Z",
                "externalReference": null,
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",
                "initiatorType": "USER",
                "paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",
                "recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"
            },
            {
                "id": "5362430a-651f-4aba-b542-5c2984bef0da",
                "fromCurrencyId": "cmj10enm60013x34dqg86qxzo",
                "toCurrencyId": "cmj10enm60014x34dm0fp6ndy",
                "fromAmount": "3",
                "toAmount": "725.0928",
                "destination_country": "IND",
                "purpose_of_payment": null,
                "notes": null,
                "error": null,
                "status": "COMPLETED",
                "completedAt": "2025-12-23T09:33:13.529Z",
                "createdAt": "2025-12-23T09:32:23.136Z",
                "updatedAt": "2025-12-23T09:33:13.530Z",
                "externalReference": null,
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",
                "initiatorType": "USER",
                "paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",
                "recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"
            },
            {
                "id": "b775ba56-c027-4dae-ab5c-a7c113897f94",
                "fromCurrencyId": "cmj10enm60013x34dqg86qxzo",
                "toCurrencyId": "cmj10enm60014x34dm0fp6ndy",
                "fromAmount": "3",
                "toAmount": "724.695",
                "destination_country": "IND",
                "purpose_of_payment": null,
                "notes": "GPS Transfer to Sara Johnson",
                "error": null,
                "status": "COMPLETED",
                "completedAt": "2025-12-22T09:01:00.140Z",
                "createdAt": "2025-12-22T09:00:17.839Z",
                "updatedAt": "2025-12-22T09:01:00.142Z",
                "externalReference": null,
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",
                "initiatorType": "USER",
                "paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",
                "recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"
            },
            {
                "id": "9502c252-b5ab-44b5-b15e-c667f8b595a5",
                "fromCurrencyId": "cmj10enm60013x34dqg86qxzo",
                "toCurrencyId": "cmj10enm60014x34dm0fp6ndy",
                "fromAmount": "3",
                "toAmount": "724.695",
                "destination_country": "IND",
                "purpose_of_payment": null,
                "notes": "GPS Transfer to Sara Johnson",
                "error": null,
                "status": "COMPLETED",
                "completedAt": "2025-12-22T08:50:55.108Z",
                "createdAt": "2025-12-22T08:50:04.631Z",
                "updatedAt": "2025-12-22T08:50:55.109Z",
                "externalReference": null,
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",
                "initiatorType": "USER",
                "paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",
                "recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"
            }
        ],
        "total": 11
    }
}


### Get Transaction by ID GET 

{
    "success": true,
    "data": {
        "transactions": [
            {
                "id": "f2ec24df-e8f8-47de-a210-6b1abfee1ed1",
                "fromCurrencyId": "cmj10enm60013x34dqg86qxzo",
                "toCurrencyId": "cmj10enm60014x34dm0fp6ndy",
                "fromAmount": "3",
                "toAmount": "732.8658",
                "destination_country": "IND",
                "purpose_of_payment": null,
                "notes": null,
                "error": null,
                "status": "COMPLETED",
                "completedAt": "2026-01-08T09:43:25.126Z",
                "createdAt": "2026-01-08T09:42:37.697Z",
                "updatedAt": "2026-01-08T09:43:25.127Z",
                "externalReference": null,
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",
                "initiatorType": "USER",
                "paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",
                "recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"
            },
            {
                "id": "611322e3-5374-4526-beea-3c541b82a421",
                "fromCurrencyId": "cmj10enm50011x34d8fq1w4j6",
                "toCurrencyId": "cmj10enm60014x34dm0fp6ndy",
                "fromAmount": "40.6237",
                "toAmount": "1000",
                "destination_country": "IND",
                "purpose_of_payment": null,
                "notes": null,
                "error": null,
                "status": "COMPLETED",
                "completedAt": "2026-01-07T05:46:11.084Z",
                "createdAt": "2026-01-07T05:45:15.256Z",
                "updatedAt": "2026-01-07T05:46:11.086Z",
                "externalReference": null,
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",
                "initiatorType": "USER",
                "paymentMethodId": "5c2cd88e-aa46-46bc-9150-562497ce4045",
                "recipientId": "5064f238-fedf-421c-9c2e-ef426fc24aa7"
            },
            {
                "id": "872bd027-1f8d-48f7-90e6-320df5a84d20",
                "fromCurrencyId": "cmj10enm60012x34dv2hsyaeo",
                "toCurrencyId": "cmj10enm60014x34dm0fp6ndy",
                "fromAmount": "6",
                "toAmount": "551.76",
                "destination_country": "IND",
                "purpose_of_payment": null,
                "notes": null,
                "error": null,
                "status": "COMPLETED",
                "completedAt": "2026-01-06T10:47:17.774Z",
                "createdAt": "2026-01-06T10:46:25.884Z",
                "updatedAt": "2026-01-06T10:47:17.775Z",
                "externalReference": null,
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",
                "initiatorType": "USER",
                "paymentMethodId": "025b0f27-3af7-470a-8a17-a35018294381",
                "recipientId": "9701c5e3-5e68-4457-9548-d2468fa851d9"
            },
            {
                "id": "5dcf8ace-535b-467a-bf03-64d458eab249",
                "fromCurrencyId": "cmj10enm60015x34dq87dwub5",
                "toCurrencyId": "cmj10enm60014x34dm0fp6ndy",
                "fromAmount": "21",
                "toAmount": "514.9221",
                "destination_country": "IND",
                "purpose_of_payment": null,
                "notes": null,
                "error": null,
                "status": "COMPLETED",
                "completedAt": "2026-01-06T10:46:23.915Z",
                "createdAt": "2026-01-06T10:45:32.103Z",
                "updatedAt": "2026-01-06T10:46:23.916Z",
                "externalReference": null,
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",
                "initiatorType": "USER",
                "paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",
                "recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"
            },
            {
                "id": "bf7928bc-5e3c-40c4-a6e7-a61d9b75fc82",
                "fromCurrencyId": "cmj10enm60013x34dqg86qxzo",
                "toCurrencyId": "cmj10enm60016x34darmpv6ev",
                "fromAmount": "1",
                "toAmount": "157.1239",
                "destination_country": "PHL",
                "purpose_of_payment": null,
                "notes": null,
                "error": null,
                "status": "COMPLETED",
                "completedAt": "2026-01-06T09:39:51.797Z",
                "createdAt": "2026-01-06T09:39:02.646Z",
                "updatedAt": "2026-01-06T09:39:51.798Z",
                "externalReference": null,
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",
                "initiatorType": "USER",
                "paymentMethodId": "83332023-3412-492d-a804-8729049c0a86",
                "recipientId": "fc7b6995-2af9-44ed-aeef-e0eb0470b622"
            },
            {
                "id": "e7cf98f0-7103-48ac-9596-d907aaea0958",
                "fromCurrencyId": "cmj10enm50011x34d8fq1w4j6",
                "toCurrencyId": "cmj10enm60014x34dm0fp6ndy",
                "fromAmount": "25",
                "toAmount": "624.57",
                "destination_country": "IND",
                "purpose_of_payment": null,
                "notes": null,
                "error": null,
                "status": "COMPLETED",
                "completedAt": "2026-01-06T09:38:04.118Z",
                "createdAt": "2026-01-06T09:37:37.698Z",
                "updatedAt": "2026-01-06T09:38:04.120Z",
                "externalReference": null,
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",
                "initiatorType": "USER",
                "paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",
                "recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"
            },
            {
                "id": "99040d51-c552-4513-8e9a-32fca1c75ba1",
                "fromCurrencyId": "cmj10enm60017x34dhqgb09bk",
                "toCurrencyId": "cmj10enm60016x34darmpv6ev",
                "fromAmount": "2",
                "toAmount": "117.72",
                "destination_country": "PHL",
                "purpose_of_payment": null,
                "notes": null,
                "error": null,
                "status": "COMPLETED",
                "completedAt": "2025-12-24T05:43:16.695Z",
                "createdAt": "2025-12-24T05:42:36.470Z",
                "updatedAt": "2025-12-24T05:43:16.697Z",
                "externalReference": null,
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",
                "initiatorType": "USER",
                "paymentMethodId": "98a391c7-bbb4-4986-8458-9edc15e8aae2",
                "recipientId": "19c9d7c2-f128-41ea-aeb9-62fd138fc7de"
            },
            {
                "id": "043cf98a-6b23-4f52-923d-2bb2920251f3",
                "fromCurrencyId": "cmj10enm60012x34dv2hsyaeo",
                "toCurrencyId": "cmj10enm60014x34dm0fp6ndy",
                "fromAmount": "6",
                "toAmount": "546.72",
                "destination_country": "IND",
                "purpose_of_payment": null,
                "notes": null,
                "error": null,
                "status": "COMPLETED",
                "completedAt": "2025-12-24T05:32:54.254Z",
                "createdAt": "2025-12-24T05:32:01.410Z",
                "updatedAt": "2025-12-24T05:32:54.256Z",
                "externalReference": null,
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",
                "initiatorType": "USER",
                "paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",
                "recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"
            },
            {
                "id": "5362430a-651f-4aba-b542-5c2984bef0da",
                "fromCurrencyId": "cmj10enm60013x34dqg86qxzo",
                "toCurrencyId": "cmj10enm60014x34dm0fp6ndy",
                "fromAmount": "3",
                "toAmount": "725.0928",
                "destination_country": "IND",
                "purpose_of_payment": null,
                "notes": null,
                "error": null,
                "status": "COMPLETED",
                "completedAt": "2025-12-23T09:33:13.529Z",
                "createdAt": "2025-12-23T09:32:23.136Z",
                "updatedAt": "2025-12-23T09:33:13.530Z",
                "externalReference": null,
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",
                "initiatorType": "USER",
                "paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",
                "recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"
            },
            {
                "id": "b775ba56-c027-4dae-ab5c-a7c113897f94",
                "fromCurrencyId": "cmj10enm60013x34dqg86qxzo",
                "toCurrencyId": "cmj10enm60014x34dm0fp6ndy",
                "fromAmount": "3",
                "toAmount": "724.695",
                "destination_country": "IND",
                "purpose_of_payment": null,
                "notes": "GPS Transfer to Sara Johnson",
                "error": null,
                "status": "COMPLETED",
                "completedAt": "2025-12-22T09:01:00.140Z",
                "createdAt": "2025-12-22T09:00:17.839Z",
                "updatedAt": "2025-12-22T09:01:00.142Z",
                "externalReference": null,
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",
                "initiatorType": "USER",
                "paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",
                "recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"
            },
            {
                "id": "9502c252-b5ab-44b5-b15e-c667f8b595a5",
                "fromCurrencyId": "cmj10enm60013x34dqg86qxzo",
                "toCurrencyId": "cmj10enm60014x34dm0fp6ndy",
                "fromAmount": "3",
                "toAmount": "724.695",
                "destination_country": "IND",
                "purpose_of_payment": null,
                "notes": "GPS Transfer to Sara Johnson",
                "error": null,
                "status": "COMPLETED",
                "completedAt": "2025-12-22T08:50:55.108Z",
                "createdAt": "2025-12-22T08:50:04.631Z",
                "updatedAt": "2025-12-22T08:50:55.109Z",
                "externalReference": null,
                "orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",
                "createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",
                "initiatorType": "USER",
                "paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",
                "recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"
            }
        ],
        "total": 11
    }
}