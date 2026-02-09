import{J as t,j as n}from"./entry.client-C2DISYtT.js";const c=`{\r
"success": true,\r
"data": {\r
"id": "cmkaxxnhn0015vq3vv8t3s0gm",\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"amount": "10",\r
"notes": null,\r
"reference": null,\r
"source": null,\r
"status": "PROCESSING",\r
"approvalStatus": "PENDING",\r
"referenceId": null,\r
"createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",\r
"initiatorType": "API_KEY",\r
"createdAt": "2026-01-12T09:08:36.011Z",\r
"updatedAt": "2026-01-12T09:08:36.011Z",\r
"sourceTreasuryId": null,\r
"labels": [],\r
"externalReference": null,\r
"currencyId": "cmj10enm60012x34dv2hsyaeo",\r
"cryptocurrencyId": null,\r
"chainId": null\r
}\r
}`,l=[{depth:1,value:"Deposit",id:"deposit",children:[{depth:3,value:"Create Deposit POST",id:"create-deposit-post"},{depth:3,value:"List Deposit GET",id:"list-deposit-get"}]},{depth:1,value:"Sender",id:"sender",children:[{depth:3,value:"List Senders GET",id:"list-senders-get"}]},{depth:1,value:"Recipient",id:"recipient",children:[{depth:3,value:"Verification field GET",id:"verification-field-get"},{depth:3,value:"paymentmethod field  GET",id:"paymentmethod-field--get"}]},{depth:1,value:"Recipient",id:"recipient-1",children:[{depth:3,value:"Create recipient POST",id:"create-recipient-post"},{depth:3,value:"Get Recipient",id:"get-recipient"}]},{depth:1,value:"Transaction",id:"transaction",children:[{depth:3,value:"Get exchange rate quote  POST",id:"get-exchange-rate-quote--post"},{depth:3,value:"Excute Transaction POST",id:"excute-transaction-post"},{depth:3,value:"Get Transaction GET",id:"get-transaction-get"},{depth:3,value:"Get Transaction by ID GET",id:"get-transaction-by-id-get"}]}],o={lastModifiedTime:"2026-01-12T11:06:36.000Z"},u="pages\\api-response.md";function a(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"deposit",children:"Deposit"}),`
`,n.jsx(r.h3,{id:"create-deposit-post",children:"Create Deposit POST"}),`
`,n.jsx(r.p,{children:`{\r
"success": true,\r
"data": {\r
"id": "cmkaxxnhn0015vq3vv8t3s0gm",\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"amount": "10",\r
"notes": null,\r
"reference": null,\r
"source": null,\r
"status": "PROCESSING",\r
"approvalStatus": "PENDING",\r
"referenceId": null,\r
"createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",\r
"initiatorType": "API_KEY",\r
"createdAt": "2026-01-12T09:08:36.011Z",\r
"updatedAt": "2026-01-12T09:08:36.011Z",\r
"sourceTreasuryId": null,\r
"labels": [],\r
"externalReference": null,\r
"currencyId": "cmj10enm60012x34dv2hsyaeo",\r
"cryptocurrencyId": null,\r
"chainId": null\r
}\r
}`}),`
`,n.jsx(r.h3,{id:"list-deposit-get",children:"List Deposit GET"}),`
`,n.jsx(r.p,{children:`{\r
"success": true,\r
"data": {\r
"deposits": [\r
{\r
"id": "cmkaxxnhn0015vq3vv8t3s0gm",\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"amount": "10",\r
"notes": null,\r
"reference": null,\r
"status": "PROCESSING",\r
"approvalStatus": "PENDING",\r
"referenceId": null,\r
"createdAt": "2026-01-12T09:08:36.011Z",\r
"sourceTreasuryId": null,\r
"labels": [],\r
"externalReference": null,\r
"currencyId": "cmj10enm60012x34dv2hsyaeo",\r
"cryptocurrencyId": null,\r
"chainId": null,\r
"currency": {\r
"id": "cmj10enm60012x34dv2hsyaeo",\r
"type": "FIAT",\r
"name": "US Dollar",\r
"symbol": "USD",\r
"decimals": 2,\r
"minTradeAmount": null,\r
"maxTradeAmount": null,\r
"hiddenOnUI": false,\r
"products": [\r
"OTC",\r
"GPS",\r
"PAY"\r
]\r
},\r
"sourceTreasury": null,\r
"explorerUrl": null\r
},\r
{\r
"id": "cmk5hlkta000bx33w464re6gh",\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"amount": "2",\r
"notes": null,\r
"reference": "dfgh",\r
"status": "COMPLETED",\r
"approvalStatus": "APPROVED",\r
"referenceId": null,\r
"createdAt": "2026-01-08T13:32:27.934Z",\r
"sourceTreasuryId": "cmj10enuh001ox34dhv36m9fs",\r
"labels": [],\r
"externalReference": null,\r
"currencyId": "cmj10enm60012x34dv2hsyaeo",\r
"cryptocurrencyId": null,\r
"chainId": null,\r
"currency": {\r
"id": "cmj10enm60012x34dv2hsyaeo",\r
"type": "FIAT",\r
"name": "US Dollar",\r
"symbol": "USD",\r
"decimals": 2,\r
"minTradeAmount": null,\r
"maxTradeAmount": null,\r
"hiddenOnUI": false,\r
"products": [\r
"OTC",\r
"GPS",\r
"PAY"\r
]\r
},\r
"sourceTreasury": {\r
"id": "cmj10enuh001ox34dhv36m9fs",\r
"currencyId": "cmj10enm60012x34dv2hsyaeo",\r
"country": "Bahrain",\r
"beneficiaryName": "ARP DIGITAL BAHRAIN BSC CLOSED",\r
"bankName": "National Bank of Bahrain",\r
"accountNumber": "5000044053",\r
"routingCode": "NBOBBHBM",\r
"iban": "BH63NBOB00005000044053",\r
"enabled": true,\r
"accountDetails": null\r
},\r
"explorerUrl": null\r
},\r
{\r
"id": "cmk2gszlx000bx43zi3kox7kk",\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"amount": "20",\r
"notes": null,\r
"reference": "test",\r
"status": "COMPLETED",\r
"approvalStatus": "APPROVED",\r
"referenceId": null,\r
"createdAt": "2026-01-06T10:46:55.557Z",\r
"sourceTreasuryId": "cmj10enun001px34de8hfqppn",\r
"labels": [],\r
"externalReference": null,\r
"currencyId": "cmj10enm60013x34dqg86qxzo",\r
"cryptocurrencyId": null,\r
"chainId": null,\r
"currency": {\r
"id": "cmj10enm60013x34dqg86qxzo",\r
"type": "FIAT",\r
"name": "Bahraini Dinar",\r
"symbol": "BHD",\r
"decimals": 3,\r
"minTradeAmount": null,\r
"maxTradeAmount": null,\r
"hiddenOnUI": false,\r
"products": [\r
"OTC",\r
"GPS",\r
"PAY"\r
]\r
},\r
"sourceTreasury": {\r
"id": "cmj10enun001px34de8hfqppn",\r
"currencyId": "cmj10enm60013x34dqg86qxzo",\r
"country": "Bahrain",\r
"beneficiaryName": "ARP DIGITAL BAHRAIN BSC CLOSED",\r
"bankName": "Bank of Bahrain and Kuwait (BBK)",\r
"accountNumber": "100000483721",\r
"routingCode": "BBKUBHBM",\r
"iban": "BH32BBKU00100000483721",\r
"enabled": true,\r
"accountDetails": null\r
},\r
"explorerUrl": null\r
},\r
{\r
"id": "cmjv50k5p0003x642vwke6ort",\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"amount": "1",\r
"notes": null,\r
"reference": null,\r
"status": "PROCESSING",\r
"approvalStatus": "PENDING",\r
"referenceId": null,\r
"createdAt": "2026-01-01T07:42:30.157Z",\r
"sourceTreasuryId": "cmj10enun001px34de8hfqppn",\r
"labels": [],\r
"externalReference": null,\r
"currencyId": "cmj10enm60013x34dqg86qxzo",\r
"cryptocurrencyId": null,\r
"chainId": null,\r
"currency": {\r
"id": "cmj10enm60013x34dqg86qxzo",\r
"type": "FIAT",\r
"name": "Bahraini Dinar",\r
"symbol": "BHD",\r
"decimals": 3,\r
"minTradeAmount": null,\r
"maxTradeAmount": null,\r
"hiddenOnUI": false,\r
"products": [\r
"OTC",\r
"GPS",\r
"PAY"\r
]\r
},\r
"sourceTreasury": {\r
"id": "cmj10enun001px34de8hfqppn",\r
"currencyId": "cmj10enm60013x34dqg86qxzo",\r
"country": "Bahrain",\r
"beneficiaryName": "ARP DIGITAL BAHRAIN BSC CLOSED",\r
"bankName": "Bank of Bahrain and Kuwait (BBK)",\r
"accountNumber": "100000483721",\r
"routingCode": "BBKUBHBM",\r
"iban": "BH32BBKU00100000483721",\r
"enabled": true,\r
"accountDetails": null\r
},\r
"explorerUrl": null\r
},\r
{\r
"id": "cmjs7d11d0007ww3wnce3jada",\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"amount": "1",\r
"notes": "Fireblocks vault deposit - TxID: 97acdf85-da7d-427d-8c0a-a0ae8f2a4251",\r
"reference": "0xd4b04c1ac1aac846c70a99396bcbe9ca30e29c270a1d626b0a54757c3dda9f91",\r
"status": "COMPLETED",\r
"approvalStatus": "APPROVED",\r
"referenceId": "97acdf85-da7d-427d-8c0a-a0ae8f2a4251",\r
"createdAt": "2025-12-30T06:24:52.609Z",\r
"sourceTreasuryId": null,\r
"labels": [\r
"CRYPTO_DEPOSIT"\r
],\r
"externalReference": null,\r
"currencyId": "cmj10enm60017x34dhqgb09bk",\r
"cryptocurrencyId": "cmj10enmm001ax34dvwbcntj1",\r
"chainId": "cmj10enlx000zx34d1da1hqaz",\r
"currency": {\r
"id": "cmj10enm60017x34dhqgb09bk",\r
"type": "CRYPTO",\r
"name": "Tether",\r
"symbol": "USDT",\r
"decimals": 6,\r
"minTradeAmount": null,\r
"maxTradeAmount": null,\r
"hiddenOnUI": false,\r
"products": [\r
"OTC",\r
"GPS",\r
"PAY"\r
]\r
},\r
"sourceTreasury": null,\r
"explorerUrl": null\r
},\r
{\r
"id": "cmjqsp4ea0001x140tjbrvxb6",\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"amount": "1",\r
"notes": null,\r
"reference": "review",\r
"status": "COMPLETED",\r
"approvalStatus": "APPROVED",\r
"referenceId": null,\r
"createdAt": "2025-12-29T06:46:36.411Z",\r
"sourceTreasuryId": null,\r
"labels": [],\r
"externalReference": null,\r
"currencyId": "cmj10enm60015x34dq87dwub5",\r
"cryptocurrencyId": null,\r
"chainId": null,\r
"currency": {\r
"id": "cmj10enm60015x34dq87dwub5",\r
"type": "FIAT",\r
"name": "Saudi Riyal",\r
"symbol": "SAR",\r
"decimals": 2,\r
"minTradeAmount": null,\r
"maxTradeAmount": null,\r
"hiddenOnUI": false,\r
"products": [\r
"OTC",\r
"GPS"\r
]\r
},\r
"sourceTreasury": null,\r
"explorerUrl": null\r
},\r
{\r
"id": "cmjjlhdlz0007vl4ahrjkbg2a",\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"amount": "1",\r
"notes": "Fireblocks vault deposit - TxID: 2f013e3d-5abf-4d01-96f0-ffce3764edb0",\r
"reference": "0x40fb16ca622c7a5ff28a9608da67336c070ad4afc17803aa439b7b655c244156",\r
"status": "COMPLETED",\r
"approvalStatus": "APPROVED",\r
"referenceId": "2f013e3d-5abf-4d01-96f0-ffce3764edb0",\r
"createdAt": "2025-12-24T05:50:14.567Z",\r
"sourceTreasuryId": null,\r
"labels": [\r
"CRYPTO_DEPOSIT"\r
],\r
"externalReference": null,\r
"currencyId": "cmj10enm60017x34dhqgb09bk",\r
"cryptocurrencyId": "cmj10enmm001ax34dvwbcntj1",\r
"chainId": "cmj10enlx000zx34d1da1hqaz",\r
"currency": {\r
"id": "cmj10enm60017x34dhqgb09bk",\r
"type": "CRYPTO",\r
"name": "Tether",\r
"symbol": "USDT",\r
"decimals": 6,\r
"minTradeAmount": null,\r
"maxTradeAmount": null,\r
"hiddenOnUI": false,\r
"products": [\r
"OTC",\r
"GPS",\r
"PAY"\r
]\r
},\r
"sourceTreasury": null,\r
"explorerUrl": null\r
},\r
{\r
"id": "cmjjlch7z0001vl4azlkoy6on",\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"amount": "5",\r
"notes": "Fireblocks vault deposit - TxID: ff5f5436-8ab4-4312-b44a-395521e02e33",\r
"reference": "0x690bf7bd07911ea82ec8d4caefb0a71b79df90ebb1e1a537adefe7a0c537a0a6",\r
"status": "COMPLETED",\r
"approvalStatus": "APPROVED",\r
"referenceId": "ff5f5436-8ab4-4312-b44a-395521e02e33",\r
"createdAt": "2025-12-24T05:46:25.967Z",\r
"sourceTreasuryId": null,\r
"labels": [\r
"CRYPTO_DEPOSIT"\r
],\r
"externalReference": null,\r
"currencyId": "cmj10enm60017x34dhqgb09bk",\r
"cryptocurrencyId": "cmj10enmm001ax34dvwbcntj1",\r
"chainId": "cmj10enlx000zx34d1da1hqaz",\r
"currency": {\r
"id": "cmj10enm60017x34dhqgb09bk",\r
"type": "CRYPTO",\r
"name": "Tether",\r
"symbol": "USDT",\r
"decimals": 6,\r
"minTradeAmount": null,\r
"maxTradeAmount": null,\r
"hiddenOnUI": false,\r
"products": [\r
"OTC",\r
"GPS",\r
"PAY"\r
]\r
},\r
"sourceTreasury": null,\r
"explorerUrl": null\r
},\r
{\r
"id": "cmjil5g7f0017wz3wp8vxlhnr",\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"amount": "100",\r
"notes": null,\r
"reference": "review",\r
"status": "COMPLETED",\r
"approvalStatus": "APPROVED",\r
"referenceId": null,\r
"createdAt": "2025-12-23T12:53:11.883Z",\r
"sourceTreasuryId": "cmj10enuz001rx34dv54wio7v",\r
"labels": [],\r
"externalReference": null,\r
"currencyId": "cmj10enm60015x34dq87dwub5",\r
"cryptocurrencyId": null,\r
"chainId": null,\r
"currency": {\r
"id": "cmj10enm60015x34dq87dwub5",\r
"type": "FIAT",\r
"name": "Saudi Riyal",\r
"symbol": "SAR",\r
"decimals": 2,\r
"minTradeAmount": null,\r
"maxTradeAmount": null,\r
"hiddenOnUI": false,\r
"products": [\r
"OTC",\r
"GPS"\r
]\r
},\r
"sourceTreasury": {\r
"id": "cmj10enuz001rx34dv54wio7v",\r
"currencyId": "cmj10enm60015x34dq87dwub5",\r
"country": "Bahrain",\r
"beneficiaryName": "ARP DIGITAL BAHRAIN BSC CLOSED",\r
"bankName": "Bank of Bahrain and Kuwait (BBK)",\r
"accountNumber": "100000483763",\r
"routingCode": "BBKUBHBM",\r
"iban": "BH62BBKU00100000483763",\r
"enabled": true,\r
"accountDetails": null\r
},\r
"explorerUrl": null\r
},\r
{\r
"id": "cmjija49c000xwz3w0cajx8ee",\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"amount": "100",\r
"notes": null,\r
"reference": "review",\r
"status": "COMPLETED",\r
"approvalStatus": "APPROVED",\r
"referenceId": null,\r
"createdAt": "2025-12-23T12:00:50.449Z",\r
"sourceTreasuryId": "cmj10enu5001mx34dw0n8w9dg",\r
"labels": [],\r
"externalReference": null,\r
"currencyId": "cmj10enm50011x34d8fq1w4j6",\r
"cryptocurrencyId": null,\r
"chainId": null,\r
"currency": {\r
"id": "cmj10enm50011x34d8fq1w4j6",\r
"type": "FIAT",\r
"name": "UAE Dirham",\r
"symbol": "AED",\r
"decimals": 2,\r
"minTradeAmount": null,\r
"maxTradeAmount": null,\r
"hiddenOnUI": false,\r
"products": [\r
"OTC",\r
"GPS",\r
"PAY"\r
]\r
},\r
"sourceTreasury": {\r
"id": "cmj10enu5001mx34dw0n8w9dg",\r
"currencyId": "cmj10enm50011x34d8fq1w4j6",\r
"country": "Bahrain",\r
"beneficiaryName": "ARP DIGITAL BAHRAIN BSC CLOSED",\r
"bankName": "Bank of Bahrain and Kuwait (BBK)",\r
"accountNumber": "100000483750",\r
"routingCode": "BBKUBHBM",\r
"iban": "BH25BBKU00100000483750",\r
"enabled": true,\r
"accountDetails": null\r
},\r
"explorerUrl": null\r
},\r
{\r
"id": "cmjihy577000pwz3wf65ud9g8",\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"amount": "10",\r
"notes": null,\r
"reference": "review",\r
"status": "COMPLETED",\r
"approvalStatus": "APPROVED",\r
"referenceId": null,\r
"createdAt": "2025-12-23T11:23:32.179Z",\r
"sourceTreasuryId": "cmj10enuh001ox34dhv36m9fs",\r
"labels": [],\r
"externalReference": null,\r
"currencyId": "cmj10enm60012x34dv2hsyaeo",\r
"cryptocurrencyId": null,\r
"chainId": null,\r
"currency": {\r
"id": "cmj10enm60012x34dv2hsyaeo",\r
"type": "FIAT",\r
"name": "US Dollar",\r
"symbol": "USD",\r
"decimals": 2,\r
"minTradeAmount": null,\r
"maxTradeAmount": null,\r
"hiddenOnUI": false,\r
"products": [\r
"OTC",\r
"GPS",\r
"PAY"\r
]\r
},\r
"sourceTreasury": {\r
"id": "cmj10enuh001ox34dhv36m9fs",\r
"currencyId": "cmj10enm60012x34dv2hsyaeo",\r
"country": "Bahrain",\r
"beneficiaryName": "ARP DIGITAL BAHRAIN BSC CLOSED",\r
"bankName": "National Bank of Bahrain",\r
"accountNumber": "5000044053",\r
"routingCode": "NBOBBHBM",\r
"iban": "BH63NBOB00005000044053",\r
"enabled": true,\r
"accountDetails": null\r
},\r
"explorerUrl": null\r
},\r
{\r
"id": "cmjihx42a000hwz3wn62d3fz9",\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"amount": "10",\r
"notes": null,\r
"reference": "review",\r
"status": "COMPLETED",\r
"approvalStatus": "APPROVED",\r
"referenceId": null,\r
"createdAt": "2025-12-23T11:22:44.050Z",\r
"sourceTreasuryId": "cmj10enu5001mx34dw0n8w9dg",\r
"labels": [],\r
"externalReference": null,\r
"currencyId": "cmj10enm50011x34d8fq1w4j6",\r
"cryptocurrencyId": null,\r
"chainId": null,\r
"currency": {\r
"id": "cmj10enm50011x34d8fq1w4j6",\r
"type": "FIAT",\r
"name": "UAE Dirham",\r
"symbol": "AED",\r
"decimals": 2,\r
"minTradeAmount": null,\r
"maxTradeAmount": null,\r
"hiddenOnUI": false,\r
"products": [\r
"OTC",\r
"GPS",\r
"PAY"\r
]\r
},\r
"sourceTreasury": {\r
"id": "cmj10enu5001mx34dw0n8w9dg",\r
"currencyId": "cmj10enm50011x34d8fq1w4j6",\r
"country": "Bahrain",\r
"beneficiaryName": "ARP DIGITAL BAHRAIN BSC CLOSED",\r
"bankName": "Bank of Bahrain and Kuwait (BBK)",\r
"accountNumber": "100000483750",\r
"routingCode": "BBKUBHBM",\r
"iban": "BH25BBKU00100000483750",\r
"enabled": true,\r
"accountDetails": null\r
},\r
"explorerUrl": null\r
},\r
{\r
"id": "cmjihukdt0009wz3w2xhpw53y",\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"amount": "10",\r
"notes": null,\r
"reference": "review",\r
"status": "COMPLETED",\r
"approvalStatus": "APPROVED",\r
"referenceId": null,\r
"createdAt": "2025-12-23T11:20:45.234Z",\r
"sourceTreasuryId": "cmj10enuz001rx34dv54wio7v",\r
"labels": [],\r
"externalReference": null,\r
"currencyId": "cmj10enm60015x34dq87dwub5",\r
"cryptocurrencyId": null,\r
"chainId": null,\r
"currency": {\r
"id": "cmj10enm60015x34dq87dwub5",\r
"type": "FIAT",\r
"name": "Saudi Riyal",\r
"symbol": "SAR",\r
"decimals": 2,\r
"minTradeAmount": null,\r
"maxTradeAmount": null,\r
"hiddenOnUI": false,\r
"products": [\r
"OTC",\r
"GPS"\r
]\r
},\r
"sourceTreasury": {\r
"id": "cmj10enuz001rx34dv54wio7v",\r
"currencyId": "cmj10enm60015x34dq87dwub5",\r
"country": "Bahrain",\r
"beneficiaryName": "ARP DIGITAL BAHRAIN BSC CLOSED",\r
"bankName": "Bank of Bahrain and Kuwait (BBK)",\r
"accountNumber": "100000483763",\r
"routingCode": "BBKUBHBM",\r
"iban": "BH62BBKU00100000483763",\r
"enabled": true,\r
"accountDetails": null\r
},\r
"explorerUrl": null\r
},\r
{\r
"id": "cmjihsvx10001wz3wglshj29c",\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"amount": "5",\r
"notes": null,\r
"reference": "review",\r
"status": "COMPLETED",\r
"approvalStatus": "APPROVED",\r
"referenceId": null,\r
"createdAt": "2025-12-23T11:19:26.868Z",\r
"sourceTreasuryId": "cmj10enun001px34de8hfqppn",\r
"labels": [],\r
"externalReference": null,\r
"currencyId": "cmj10enm60013x34dqg86qxzo",\r
"cryptocurrencyId": null,\r
"chainId": null,\r
"currency": {\r
"id": "cmj10enm60013x34dqg86qxzo",\r
"type": "FIAT",\r
"name": "Bahraini Dinar",\r
"symbol": "BHD",\r
"decimals": 3,\r
"minTradeAmount": null,\r
"maxTradeAmount": null,\r
"hiddenOnUI": false,\r
"products": [\r
"OTC",\r
"GPS",\r
"PAY"\r
]\r
},\r
"sourceTreasury": {\r
"id": "cmj10enun001px34de8hfqppn",\r
"currencyId": "cmj10enm60013x34dqg86qxzo",\r
"country": "Bahrain",\r
"beneficiaryName": "ARP DIGITAL BAHRAIN BSC CLOSED",\r
"bankName": "Bank of Bahrain and Kuwait (BBK)",\r
"accountNumber": "100000483721",\r
"routingCode": "BBKUBHBM",\r
"iban": "BH32BBKU00100000483721",\r
"enabled": true,\r
"accountDetails": null\r
},\r
"explorerUrl": null\r
},\r
{\r
"id": "cmjh23qlg001bx33xzk29fxfg",\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"amount": "1",\r
"notes": "Fireblocks vault deposit - TxID: 5f8b2d63-8f60-4269-9de0-6644b4086111",\r
"reference": "0xc68097c646525cfb7a3eb1e91fefef36b7edbcd09889a791c2605190de5d6546",\r
"status": "COMPLETED",\r
"approvalStatus": "APPROVED",\r
"referenceId": "5f8b2d63-8f60-4269-9de0-6644b4086111",\r
"createdAt": "2025-12-22T11:12:13.156Z",\r
"sourceTreasuryId": null,\r
"labels": [\r
"CRYPTO_DEPOSIT"\r
],\r
"externalReference": null,\r
"currencyId": "cmj10enm60017x34dhqgb09bk",\r
"cryptocurrencyId": "cmj10enmm001ax34dvwbcntj1",\r
"chainId": "cmj10enlx000zx34d1da1hqaz",\r
"currency": {\r
"id": "cmj10enm60017x34dhqgb09bk",\r
"type": "CRYPTO",\r
"name": "Tether",\r
"symbol": "USDT",\r
"decimals": 6,\r
"minTradeAmount": null,\r
"maxTradeAmount": null,\r
"hiddenOnUI": false,\r
"products": [\r
"OTC",\r
"GPS",\r
"PAY"\r
]\r
},\r
"sourceTreasury": null,\r
"explorerUrl": null\r
},\r
{\r
"id": "cmjgwtrj7000xx33x0nj524jp",\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"amount": "10",\r
"notes": null,\r
"reference": "review",\r
"status": "COMPLETED",\r
"approvalStatus": "APPROVED",\r
"referenceId": null,\r
"createdAt": "2025-12-22T08:44:29.731Z",\r
"sourceTreasuryId": "cmj10enun001px34de8hfqppn",\r
"labels": [],\r
"externalReference": null,\r
"currencyId": "cmj10enm60013x34dqg86qxzo",\r
"cryptocurrencyId": null,\r
"chainId": null,\r
"currency": {\r
"id": "cmj10enm60013x34dqg86qxzo",\r
"type": "FIAT",\r
"name": "Bahraini Dinar",\r
"symbol": "BHD",\r
"decimals": 3,\r
"minTradeAmount": null,\r
"maxTradeAmount": null,\r
"hiddenOnUI": false,\r
"products": [\r
"OTC",\r
"GPS",\r
"PAY"\r
]\r
},\r
"sourceTreasury": {\r
"id": "cmj10enun001px34de8hfqppn",\r
"currencyId": "cmj10enm60013x34dqg86qxzo",\r
"country": "Bahrain",\r
"beneficiaryName": "ARP DIGITAL BAHRAIN BSC CLOSED",\r
"bankName": "Bank of Bahrain and Kuwait (BBK)",\r
"accountNumber": "100000483721",\r
"routingCode": "BBKUBHBM",\r
"iban": "BH32BBKU00100000483721",\r
"enabled": true,\r
"accountDetails": null\r
},\r
"explorerUrl": null\r
},\r
{\r
"id": "cmjgtbdqz000hx33xs901ucly",\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"amount": "5",\r
"notes": null,\r
"reference": "review",\r
"status": "COMPLETED",\r
"approvalStatus": "APPROVED",\r
"referenceId": null,\r
"createdAt": "2025-12-22T07:06:13.212Z",\r
"sourceTreasuryId": "cmj10enuc001nx34d6ewlf1vs",\r
"labels": [],\r
"externalReference": null,\r
"currencyId": "cmj10enm60012x34dv2hsyaeo",\r
"cryptocurrencyId": null,\r
"chainId": null,\r
"currency": {\r
"id": "cmj10enm60012x34dv2hsyaeo",\r
"type": "FIAT",\r
"name": "US Dollar",\r
"symbol": "USD",\r
"decimals": 2,\r
"minTradeAmount": null,\r
"maxTradeAmount": null,\r
"hiddenOnUI": false,\r
"products": [\r
"OTC",\r
"GPS",\r
"PAY"\r
]\r
},\r
"sourceTreasury": {\r
"id": "cmj10enuc001nx34d6ewlf1vs",\r
"currencyId": "cmj10enm60012x34dv2hsyaeo",\r
"country": "Bahrain",\r
"beneficiaryName": "ARP DIGITAL BAHRAIN BSC CLOSED",\r
"bankName": "Bank of Bahrain and Kuwait (BBK)",\r
"accountNumber": "100000483776",\r
"routingCode": "BBKUBHBM",\r
"iban": "BH02BBKU00100000483776",\r
"enabled": true,\r
"accountDetails": null\r
},\r
"explorerUrl": null\r
},\r
{\r
"id": "cmjgslwyv0009x33xwbrmv4gg",\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"amount": "5",\r
"notes": null,\r
"reference": "review",\r
"status": "COMPLETED",\r
"approvalStatus": "APPROVED",\r
"referenceId": null,\r
"createdAt": "2025-12-22T06:46:25.063Z",\r
"sourceTreasuryId": "cmj10enun001px34de8hfqppn",\r
"labels": [],\r
"externalReference": null,\r
"currencyId": "cmj10enm60013x34dqg86qxzo",\r
"cryptocurrencyId": null,\r
"chainId": null,\r
"currency": {\r
"id": "cmj10enm60013x34dqg86qxzo",\r
"type": "FIAT",\r
"name": "Bahraini Dinar",\r
"symbol": "BHD",\r
"decimals": 3,\r
"minTradeAmount": null,\r
"maxTradeAmount": null,\r
"hiddenOnUI": false,\r
"products": [\r
"OTC",\r
"GPS",\r
"PAY"\r
]\r
},\r
"sourceTreasury": {\r
"id": "cmj10enun001px34de8hfqppn",\r
"currencyId": "cmj10enm60013x34dqg86qxzo",\r
"country": "Bahrain",\r
"beneficiaryName": "ARP DIGITAL BAHRAIN BSC CLOSED",\r
"bankName": "Bank of Bahrain and Kuwait (BBK)",\r
"accountNumber": "100000483721",\r
"routingCode": "BBKUBHBM",\r
"iban": "BH32BBKU00100000483721",\r
"enabled": true,\r
"accountDetails": null\r
},\r
"explorerUrl": null\r
}\r
],\r
"total": 18\r
}\r
}`}),`
`,n.jsx(r.h1,{id:"sender",children:"Sender"}),`
`,n.jsx(r.h3,{id:"list-senders-get",children:"List Senders GET"}),`
`,n.jsxs(r.p,{children:[`{\r
"success": true,\r
"data": [\r
{\r
"id": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",\r
"email": "`,n.jsx(r.a,{href:"mailto:jennyinfo24@gmail.com",children:"jennyinfo24@gmail.com"}),`",\r
"fullName": "Jaimini Bhandari",\r
"phone": null,\r
"createdAt": "2025-12-22T04:58:47.392Z",\r
"updatedAt": "2025-12-22T05:04:25.933Z"\r
}\r
]\r
}`]}),`
`,n.jsx(r.h1,{id:"recipient",children:"Recipient"}),`
`,n.jsx(r.h3,{id:"verification-field-get",children:"Verification field GET"}),`
`,n.jsx(r.p,{children:`{\r
"success": true,\r
"data": [\r
{\r
"fieldName": "firstName",\r
"displayName": "First Name",\r
"required": true,\r
"type": "STRING",\r
"regex": "^[A-Za-z\\s.'.\\-]{1,35}$",\r
"errorMessage": "Please enter a valid first name (1-35 letters)"\r
},\r
{\r
"fieldName": "lastName",\r
"displayName": "Last Name",\r
"required": true,\r
"type": "STRING",\r
"regex": "^[A-Za-z\\s]{1,35}$",\r
"errorMessage": "Please enter a valid last name (1-35 letters)"\r
},\r
{\r
"fieldName": "email",\r
"displayName": "Email",\r
"required": false,\r
"type": "STRING",\r
"regex": "^[a-zA-Z0-9._%\\+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",\r
"errorMessage": "Please enter a valid email address"\r
},\r
{\r
"fieldName": "phone",\r
"displayName": "Phone",\r
"required": false,\r
"type": "STRING",\r
"regex": "^\\d{10}$",\r
"errorMessage": "Please enter a valid phone number (10 digits)"\r
},\r
{\r
"fieldName": "city",\r
"displayName": "City",\r
"required": false,\r
"type": "STRING",\r
"regex": "^[A-Za-z\\s]{1,50}$",\r
"errorMessage": "Please enter a valid city name (1-50 letters)"\r
},\r
{\r
"fieldName": "state",\r
"displayName": "State",\r
"required": false,\r
"type": "STRING",\r
"regex": "^[A-Za-z\\s]{1,50}$",\r
"errorMessage": "Please enter a valid state name (1-50 letters)"\r
},\r
{\r
"fieldName": "postCode",\r
"displayName": "Post Code",\r
"required": false,\r
"type": "STRING",\r
"regex": "^[1-9][0-9]{5}$",\r
"errorMessage": "Please enter a valid Indian PIN code (6 digits, cannot start with 0)"\r
},\r
{\r
"fieldName": "address",\r
"displayName": "Address",\r
"required": false,\r
"type": "STRING",\r
"regex": "^[A-Za-z0-9\\s,.'\\-/#()&]{1,200}$",\r
"errorMessage": "Please enter a valid address (1-200 characters)"\r
}\r
]\r
}`}),`
`,n.jsx(r.h3,{id:"paymentmethod-field--get",children:"paymentmethod field  GET"}),`
`,n.jsx(r.p,{children:`{\r
"success": true,\r
"data": {\r
"BANK_ACCOUNT": [\r
{\r
"fieldName": "sla",\r
"value": "Instant, 24/7 including weekends and holidays. Minimum 101 INR & Limit upto 500,000 INR",\r
"min": 500,\r
"max": 10000000\r
},\r
{\r
"fieldName": "accountNumber",\r
"displayName": "Account Number",\r
"required": true,\r
"type": "STRING",\r
"regex": "^\\d{9,18}$",\r
"errorMessage": "Please enter a valid Indian bank account number (9–18 digits)."\r
},\r
{\r
"fieldName": "ifscCode",\r
"displayName": "IFSC Code",\r
"required": true,\r
"type": "STRING",\r
"regex": "^([A-Z]{4}0[A-Z0-9]{6})$",\r
"errorMessage": "Please enter a valid IFSC code (e.g., HDFC0001234)."\r
},\r
{\r
"fieldName": "bankName",\r
"displayName": "Bank Name",\r
"required": true,\r
"type": "STRING",\r
"regex": "^[A-Za-z0-9&.,\\- ]{3,25}$",\r
"errorMessage": "Please enter a valid bank name (3–25 characters)."\r
},\r
{\r
"fieldName": "accountHolderName",\r
"displayName": "Account Holder Name",\r
"required": true,\r
"type": "STRING",\r
"regex": "^[A-Za-z\\s.'\\-]{3,100}$",\r
"errorMessage": "Please enter a valid account holder name (only alphabets and .'- allowed)."\r
},\r
{\r
"fieldName": "branch",\r
"displayName": "Branch",\r
"required": true,\r
"type": "STRING",\r
"regex": "^[A-Za-z0-9\\s.,'-]{3,25}$",\r
"errorMessage": "Please enter a valid branch name (3–25 characters)."\r
},\r
{\r
"fieldName": "accountType",\r
"displayName": "Account Type",\r
"required": false,\r
"type": "MULTI_CHOICE",\r
"options": [\r
{\r
"value": "savings",\r
"displayName": "Savings"\r
},\r
{\r
"value": "current",\r
"displayName": "Current"\r
}\r
]\r
}\r
]\r
}\r
}`}),`
`,n.jsx(r.h1,{id:"recipient-1",children:"Recipient"}),`
`,n.jsx(r.h3,{id:"create-recipient-post",children:"Create recipient POST"}),`
`,n.jsxs(r.p,{children:[`{\r
"success": true,\r
"data": {\r
"id": "7c801cac-ba71-4cb2-8b4a-7c8ddd28b81d",\r
"name": "Maadhav Sharma",\r
"type": "INDIVIDUAL",\r
"country": "IND",\r
"verificationInfo": {\r
"email": "`,n.jsx(r.a,{href:"mailto:maadhav@codedecoders.io",children:"maadhav@codedecoders.io"}),`",\r
"phone": "7819011596",\r
"lastName": "Sharma",\r
"firstName": "Maadhav"\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",\r
"initiatorType": "USER",\r
"createdAt": "2026-01-12T09:45:25.367Z",\r
"updatedAt": "2026-01-12T09:45:25.459Z",\r
"deletedAt": null,\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "ed2883b6-8b43-42b6-93ba-0080bf485b6b",\r
"type": "BANK_ACCOUNT",\r
"metadata": {\r
"branch": "Motera",\r
"bankName": "HDFC Bank",\r
"ifscCode": "HDFC0001234",\r
"accountNumber": "1234567890",\r
"accountHolderName": "MAADHAV SHARMA"\r
},\r
"recipientId": "7c801cac-ba71-4cb2-8b4a-7c8ddd28b81d",\r
"partnerId": null,\r
"createdAt": "2026-01-12T09:45:25.382Z",\r
"updatedAt": "2026-01-12T09:45:25.382Z"\r
}\r
]\r
}\r
}`]}),`
`,n.jsx(r.h3,{id:"get-recipient",children:"Get Recipient"}),`
`,n.jsxs(r.p,{children:[`{\r
"success": true,\r
"data": [\r
{\r
"id": "7c801cac-ba71-4cb2-8b4a-7c8ddd28b81d",\r
"name": "Maadhav Sharma",\r
"type": "INDIVIDUAL",\r
"country": "IND",\r
"verificationInfo": {\r
"email": "`,n.jsx(r.a,{href:"mailto:maadhav@codedecoders.io",children:"maadhav@codedecoders.io"}),`",\r
"phone": "7819011596",\r
"lastName": "Sharma",\r
"firstName": "Maadhav"\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "ed2883b6-8b43-42b6-93ba-0080bf485b6b",\r
"type": "BANK_ACCOUNT",\r
"metadata": {\r
"branch": "Motera",\r
"bankName": "HDFC Bank",\r
"ifscCode": "HDFC0001234",\r
"accountNumber": "1234567890",\r
"accountHolderName": "MAADHAV SHARMA"\r
}\r
}\r
]\r
},\r
{\r
"id": "bd38d26b-303d-4e75-bf4a-bfad8c9b7ac8",\r
"name": "Queen Smith",\r
"type": "INDIVIDUAL",\r
"country": "PHL",\r
"verificationInfo": {\r
"lastName": "Smith",\r
"firstName": "Queen"\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "6506e25d-154d-42c4-b089-b939b7fc4704",\r
"type": "INSTAPAY",\r
"metadata": {\r
"name": "Juan Dela Cruz",\r
"channel": "bpi",\r
"accountNumber": "5000044048"\r
}\r
}\r
]\r
},\r
{\r
"id": "23d6c769-3ce8-4ed7-b9b2-305320757a55",\r
"name": "Sara Dela Cruz",\r
"type": "INDIVIDUAL",\r
"country": "PHL",\r
"verificationInfo": {\r
"lastName": "Dela Cruz",\r
"firstName": "Sara"\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "c6675101-348a-4cf3-b2bc-befc4bab8861",\r
"type": "INSTAPAY",\r
"metadata": {\r
"name": "Juan Dela Cruz",\r
"channel": "bpi",\r
"accountNumber": "45678934567"\r
}\r
}\r
]\r
},\r
{\r
"id": "861bf8ba-77bb-487b-8b91-9b6c19647842",\r
"name": "Juan Dela Cruz",\r
"type": "INDIVIDUAL",\r
"country": "PHL",\r
"verificationInfo": {\r
"lastName": "Dela Cruz",\r
"firstName": "Juan"\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "95ebacd3-add7-4d7c-822f-1a6ad7ab07ef",\r
"type": "INSTAPAY",\r
"metadata": {\r
"name": "Juan Dela Cruz",\r
"channel": "bpi",\r
"accountNumber": "1234567890"\r
}\r
}\r
]\r
},\r
{\r
"id": "47fd4d11-ccc6-472d-a955-aca1104819be",\r
"name": "Queen Luis",\r
"type": "INDIVIDUAL",\r
"country": "HKG",\r
"verificationInfo": {\r
"lastName": "Luis",\r
"firstName": "Queen",\r
"middleName": "Alice",\r
"legalFullName": "Queen Alice Luis"\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "3cf3274d-6541-47b9-aa77-a53d34bddfe6",\r
"type": "BANK_ACCOUNT",\r
"metadata": {\r
"city": "Toronto",\r
"state": "Ontario",\r
"street": "Queens Road Central",\r
"country": "HK",\r
"bankName": "Emirates NBD",\r
"postalCode": "999077",\r
"clearingCode": "004",\r
"accountNumber": "1029384756"\r
}\r
}\r
]\r
},\r
{\r
"id": "912290c3-4a00-4810-83bd-a534828e6465",\r
"name": "Ayaz Johnson",\r
"type": "INDIVIDUAL",\r
"country": "PHL",\r
"verificationInfo": {\r
"lastName": "Johnson",\r
"firstName": "Ayaz"\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "773569c9-8e2b-41de-8433-c2603477613e",\r
"type": "PESONET",\r
"metadata": {\r
"name": "Juan Dela Cruz",\r
"channel": "bankofcommerce",\r
"accountNumber": "5000044048"\r
}\r
}\r
]\r
},\r
{\r
"id": "c26360df-db4d-4d72-9684-d884be12517c",\r
"name": "Mohammed Al-Saud",\r
"type": "BUSINESS",\r
"country": "SAU",\r
"verificationInfo": {\r
"businessName": "Mohammed Al-Saud"\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "1410ac95-f6dd-4f58-8051-cfc1170add9e",\r
"type": "BANK_ACCOUNT",\r
"metadata": {\r
"bankCode": "INMA",\r
"bankName": "INMA",\r
"fullName": "Mohammed Al-Saud",\r
"accountNumber": "SA0380000000608010167519"\r
}\r
}\r
]\r
},\r
{\r
"id": "b4305af5-ff6a-4748-84cb-510bf4cb0ae1",\r
"name": "Mohammed Al-Saud",\r
"type": "INDIVIDUAL",\r
"country": "SAU",\r
"verificationInfo": {\r
"fullName": "Mohammed Al-Saud"\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "b3264551-30b9-4d71-ae8c-f90fb821b52b",\r
"type": "BANK_ACCOUNT",\r
"metadata": {\r
"bankCode": "INMA",\r
"bankName": "INMA",\r
"fullName": "Mohammed Al-Saud",\r
"accountNumber": "SA0380000000608010167519"\r
}\r
}\r
]\r
},\r
{\r
"id": "f03c30f1-c655-44ba-82d2-35d789cd261b",\r
"name": "UAE Business Corp",\r
"type": "BUSINESS",\r
"country": "ARE",\r
"verificationInfo": {\r
"businessName": "UAE Business Corp"\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "5cceb1ba-3a4a-40d8-92fe-068130ee1047",\r
"type": "BANK_ACCOUNT",\r
"metadata": {\r
"bankCode": "EBILAEADXXX",\r
"bankName": "EBILAEADXXX",\r
"fullName": "Ahmed Al-Mansoori",\r
"accountNumber": "AE070331234567890123456"\r
}\r
}\r
]\r
},\r
{\r
"id": "2c1495d6-0b8f-4a0e-8cf3-770b22e22857",\r
"name": "Ahmed Al-Mansoori",\r
"type": "INDIVIDUAL",\r
"country": "ARE",\r
"verificationInfo": {\r
"fullName": "Ahmed Al-Mansoori"\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "bcbfb847-5a8b-40f6-a198-22cc32c34d4a",\r
"type": "BANK_ACCOUNT",\r
"metadata": {\r
"bankCode": "EBILAEADXXX",\r
"bankName": "EBILAEADXXX",\r
"fullName": "Ahmed Al-Mansoori",\r
"accountNumber": "AE070331234567890123456"\r
}\r
}\r
]\r
},\r
{\r
"id": "f4216d0c-0f4a-46e6-9b6b-c19d421d154c",\r
"name": "Hong Kong Trading Co.",\r
"type": "BUSINESS",\r
"country": "HKG",\r
"verificationInfo": {\r
"businessName": "Hong Kong Trading Co."\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "5728273f-31e8-4950-9596-94bb3abc72c7",\r
"type": "BANK_ACCOUNT",\r
"metadata": {\r
"city": "Central",\r
"state": "Hong Kong Island",\r
"street": "Queens Road Central",\r
"country": "HK",\r
"bankName": "HSBC Hong Kong",\r
"postalCode": "999077",\r
"clearingCode": "004",\r
"accountNumber": "123456789"\r
}\r
}\r
]\r
},\r
{\r
"id": "3354b22f-1760-48ef-b153-413c07f7b2fc",\r
"name": "Michael Chan",\r
"type": "INDIVIDUAL",\r
"country": "HKG",\r
"verificationInfo": {\r
"lastName": "Chan",\r
"firstName": "Michael",\r
"middleName": "wei",\r
"legalFullName": "Michael Wei Chan"\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "57d43b7b-0c4d-49fa-a160-417a08e41d7c",\r
"type": "BANK_ACCOUNT",\r
"metadata": {\r
"city": "Central",\r
"state": "Hong Kong Island",\r
"street": "Queens Road Central",\r
"country": "HK",\r
"bankName": "HSBC Hong Kong",\r
"postalCode": "999077",\r
"clearingCode": "004",\r
"accountNumber": "123456789"\r
}\r
}\r
]\r
},\r
{\r
"id": "2ef52c3a-92a0-42df-b00a-03bde94e7ee0",\r
"name": "XYZ Enterprises",\r
"type": "BUSINESS",\r
"country": "PHL",\r
"verificationInfo": {\r
"businessName": "XYZ Enterprises"\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "d58e29e2-0651-439d-a615-357d43a80d53",\r
"type": "PESONET",\r
"metadata": {\r
"name": "Juan Dela Cruz",\r
"channel": "bdouni",\r
"accountNumber": "123456789012"\r
}\r
}\r
]\r
},\r
{\r
"id": "48a8f839-5fbc-40fb-b49e-2ffe3fc5222d",\r
"name": "Juan Dela Cruz",\r
"type": "INDIVIDUAL",\r
"country": "PHL",\r
"verificationInfo": {\r
"lastName": "Dela Cruz",\r
"firstName": "Juan"\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "f1eb5ce5-9073-4ebe-b94b-d61f4c7f2b4b",\r
"type": "PESONET",\r
"metadata": {\r
"name": "Juan Dela Cruz",\r
"channel": "bdouni",\r
"accountNumber": "123456789012"\r
}\r
}\r
]\r
},\r
{\r
"id": "0006894e-28e9-4b60-b3e8-a254396f73f2",\r
"name": "XYZ Enterprises",\r
"type": "BUSINESS",\r
"country": "PHL",\r
"verificationInfo": {\r
"businessName": "XYZ Enterprises"\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "32981ae5-63be-46c8-bc11-260453cce5ac",\r
"type": "INSTAPAY",\r
"metadata": {\r
"name": "Juan Dela Cruz",\r
"channel": "bpi",\r
"accountNumber": "123456789012"\r
}\r
}\r
]\r
},\r
{\r
"id": "fc7b6995-2af9-44ed-aeef-e0eb0470b622",\r
"name": "Juan Dela Cruz",\r
"type": "INDIVIDUAL",\r
"country": "PHL",\r
"verificationInfo": {\r
"lastName": "Dela Cruz",\r
"firstName": "Juan"\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "83332023-3412-492d-a804-8729049c0a86",\r
"type": "INSTAPAY",\r
"metadata": {\r
"name": "Juan Dela Cruz",\r
"channel": "bdouni",\r
"accountNumber": "123456789012"\r
}\r
}\r
]\r
},\r
{\r
"id": "5064f238-fedf-421c-9c2e-ef426fc24aa7",\r
"name": "ABC Corporation",\r
"type": "BUSINESS",\r
"country": "IND",\r
"verificationInfo": {\r
"email": "`,n.jsx(r.a,{href:"mailto:business@testmail.com",children:"business@testmail.com"}),`",\r
"phone": "9876543210",\r
"businessName": "ABC Corporation"\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "5c2cd88e-aa46-46bc-9150-562497ce4045",\r
"type": "BANK_ACCOUNT",\r
"metadata": {\r
"branch": "Adajan",\r
"bankName": "State Bank of India",\r
"ifscCode": "SBIN0001234",\r
"accountType": "savings",\r
"accountNumber": "1234567890",\r
"accountHolderName": "Rohan Sharma"\r
}\r
}\r
]\r
},\r
{\r
"id": "9701c5e3-5e68-4457-9548-d2468fa851d9",\r
"name": "Rohan Sharma",\r
"type": "INDIVIDUAL",\r
"country": "IND",\r
"verificationInfo": {\r
"city": "Mumbai",\r
"email": "`,n.jsx(r.a,{href:"mailto:rohan.sharma@testmail.com",children:"rohan.sharma@testmail.com"}),`",\r
"phone": "9876543210",\r
"state": "Maharashtra",\r
"address": "Flat 12B, Andheri East, Mumbai",\r
"lastName": "Sharma",\r
"postCode": "400001",\r
"firstName": "\\tRohan"\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "025b0f27-3af7-470a-8a17-a35018294381",\r
"type": "BANK_ACCOUNT",\r
"metadata": {\r
"branch": "Adajan",\r
"bankName": "State Bank of India",\r
"ifscCode": "SBIN0001234",\r
"accountType": "savings",\r
"accountNumber": "1234567890",\r
"accountHolderName": "Rohan Sharma"\r
}\r
}\r
]\r
},\r
{\r
"id": "b94aa1a0-1078-447e-9ce7-5f1c76602f6c",\r
"name": "dfgfd",\r
"type": "BUSINESS",\r
"country": "PHL",\r
"verificationInfo": {\r
"businessName": "dfgfd"\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "e7795a92-131f-4023-84f7-d018cb739a5e",\r
"type": "INSTAPAY",\r
"metadata": {\r
"name": "John",\r
"channel": "bdo",\r
"accountNumber": "12345678789"\r
}\r
}\r
]\r
},\r
{\r
"id": "d5d5de7c-413a-48a6-8aad-a486d3e4e2f9",\r
"name": "Helly Smith",\r
"type": "INDIVIDUAL",\r
"country": "ARE",\r
"verificationInfo": {\r
"fullName": "Helly Smith"\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "92e4434d-b557-42c8-9dcd-d41d57605f50",\r
"type": "BANK_ACCOUNT",\r
"metadata": {\r
"bankCode": "BBMEAEADXXX",\r
"bankName": "BBMEAEADXXX",\r
"fullName": "Ahmed Al Khalid",\r
"accountNumber": "AE070331234567890123456"\r
}\r
}\r
]\r
},\r
{\r
"id": "19c9d7c2-f128-41ea-aeb9-62fd138fc7de",\r
"name": "Sara Smith",\r
"type": "INDIVIDUAL",\r
"country": "PHL",\r
"verificationInfo": {\r
"lastName": "Smith",\r
"firstName": "Sara"\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "98a391c7-bbb4-4986-8458-9edc15e8aae2",\r
"type": "PESONET",\r
"metadata": {\r
"name": "John",\r
"channel": "bmi",\r
"accountNumber": "1029384756"\r
}\r
}\r
]\r
},\r
{\r
"id": "1f2705ac-6aa3-45fa-92de-9cdadab5963a",\r
"name": "Rohit Patel",\r
"type": "INDIVIDUAL",\r
"country": "SAU",\r
"verificationInfo": {\r
"fullName": "Rohit Patel"\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "9997212d-738e-4dcb-aad2-047cf676e62d",\r
"type": "BANK_ACCOUNT",\r
"metadata": {\r
"bankCode": "EBIL",\r
"bankName": "EBIL",\r
"fullName": "Rohit Patel",\r
"accountNumber": "SA0380000000608010167519"\r
}\r
}\r
]\r
},\r
{\r
"id": "a067b2a6-0141-4dcf-bc90-afe96ef9b558",\r
"name": "Sara Johnson",\r
"type": "INDIVIDUAL",\r
"country": "IND",\r
"verificationInfo": {\r
"city": "Toronto",\r
"email": "`,n.jsx(r.a,{href:"mailto:venexip216@besenica.com",children:"venexip216@besenica.com"}),`",\r
"phone": "1236547890",\r
"state": "Ontario",\r
"address": "Dero cafe",\r
"lastName": "Johnson",\r
"postCode": "360009",\r
"firstName": "Sara"\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "523654f5-045f-42ec-9831-3b1ee9ac9401",\r
"type": "BANK_ACCOUNT",\r
"metadata": {\r
"branch": "Ahmedabad",\r
"bankName": "Emirates NBD",\r
"ifscCode": "HDFC0001234",\r
"accountType": "savings",\r
"accountNumber": "1029384756",\r
"accountHolderName": "John"\r
}\r
}\r
]\r
},\r
{\r
"id": "17dccc00-d0f6-4970-9f1b-e65c8bdb44f9",\r
"name": "Ahmed Al Khalid",\r
"type": "INDIVIDUAL",\r
"country": "SAU",\r
"verificationInfo": {\r
"fullName": "Ahmed Al Khalid"\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "717b1807-364e-483e-a7c4-191ce794d26f",\r
"type": "BANK_ACCOUNT",\r
"metadata": {\r
"bankCode": "NBOK",\r
"bankName": "NBOK",\r
"fullName": "Ahmed Al Khalid",\r
"accountNumber": "SA0380000000608010167519"\r
}\r
}\r
]\r
},\r
{\r
"id": "1a38d8ba-1c7b-4148-8e00-66372b2ddea5",\r
"name": "Fatima Hussain",\r
"type": "INDIVIDUAL",\r
"country": "ARE",\r
"verificationInfo": {\r
"fullName": "Fatima Hussain"\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "f158052e-d21f-4208-a4de-d0df2eb6b30a",\r
"type": "BANK_ACCOUNT",\r
"metadata": {\r
"bankCode": "BSIRAEADXXX",\r
"bankName": "BSIRAEADXXX",\r
"fullName": "Fatima Hussain",\r
"accountNumber": "AE460090000000123456789"\r
}\r
}\r
]\r
},\r
{\r
"id": "a616c16a-b6df-4a5d-8c27-d67612829faf",\r
"name": "Michael man",\r
"type": "INDIVIDUAL",\r
"country": "HKG",\r
"verificationInfo": {\r
"lastName": "man",\r
"firstName": "Michael",\r
"middleName": "John",\r
"legalFullName": "Michael John man"\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "31365a06-6537-4c9c-bd3c-7f402dfb0927",\r
"type": "BANK_ACCOUNT",\r
"metadata": {\r
"city": "Abu Dhabi",\r
"state": "Abu Dhabi",\r
"street": "sfgggg",\r
"country": "HK",\r
"bankName": "National Bank of Bahrain",\r
"postalCode": "456892",\r
"clearingCode": "32005",\r
"accountNumber": "1029384756"\r
}\r
}\r
]\r
},\r
{\r
"id": "13acf742-9835-4081-8950-abdb1f0835d5",\r
"name": "Sara Johnson",\r
"type": "INDIVIDUAL",\r
"country": "PHL",\r
"verificationInfo": {\r
"lastName": "Johnson",\r
"firstName": "Sara"\r
},\r
"metadata": null,\r
"verificationStatus": "NOT_STARTED",\r
"externalReference": null,\r
"paymentMethods": [\r
{\r
"id": "fefaee50-0b27-422e-a81e-874432d76995",\r
"type": "INSTAPAY",\r
"metadata": {\r
"name": "John",\r
"channel": "guinobatan",\r
"accountNumber": "5000044048"\r
}\r
}\r
]\r
}\r
]\r
}`]}),`
`,n.jsx(r.h1,{id:"transaction",children:"Transaction"}),`
`,n.jsx(r.h3,{id:"get-exchange-rate-quote--post",children:"Get exchange rate quote  POST"}),`
`,n.jsx(r.p,{children:`{\r
"success": true,\r
"data": {\r
"id": "deb19e88-012d-4533-b930-2cd85859fbe9",\r
"fromCurrency": "USD",\r
"toCurrency": "INR",\r
"fromAmount": "10",\r
"toAmount": "920.6",\r
"rate": "92.06",\r
"expiresAt": "2026-01-12T10:10:28.942Z",\r
"midMarketRate": "90.154",\r
"difference": "19.06"\r
}\r
}`}),`
`,n.jsx(r.h3,{id:"excute-transaction-post",children:"Excute Transaction POST"}),`
`,n.jsx(r.h3,{id:"get-transaction-get",children:"Get Transaction GET"}),`
`,n.jsx(r.p,{children:`{\r
"success": true,\r
"data": {\r
"transactions": [\r
{\r
"id": "f2ec24df-e8f8-47de-a210-6b1abfee1ed1",\r
"fromCurrencyId": "cmj10enm60013x34dqg86qxzo",\r
"toCurrencyId": "cmj10enm60014x34dm0fp6ndy",\r
"fromAmount": "3",\r
"toAmount": "732.8658",\r
"destination_country": "IND",\r
"purpose_of_payment": null,\r
"notes": null,\r
"error": null,\r
"status": "COMPLETED",\r
"completedAt": "2026-01-08T09:43:25.126Z",\r
"createdAt": "2026-01-08T09:42:37.697Z",\r
"updatedAt": "2026-01-08T09:43:25.127Z",\r
"externalReference": null,\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",\r
"initiatorType": "USER",\r
"paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",\r
"recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"\r
},\r
{\r
"id": "611322e3-5374-4526-beea-3c541b82a421",\r
"fromCurrencyId": "cmj10enm50011x34d8fq1w4j6",\r
"toCurrencyId": "cmj10enm60014x34dm0fp6ndy",\r
"fromAmount": "40.6237",\r
"toAmount": "1000",\r
"destination_country": "IND",\r
"purpose_of_payment": null,\r
"notes": null,\r
"error": null,\r
"status": "COMPLETED",\r
"completedAt": "2026-01-07T05:46:11.084Z",\r
"createdAt": "2026-01-07T05:45:15.256Z",\r
"updatedAt": "2026-01-07T05:46:11.086Z",\r
"externalReference": null,\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",\r
"initiatorType": "USER",\r
"paymentMethodId": "5c2cd88e-aa46-46bc-9150-562497ce4045",\r
"recipientId": "5064f238-fedf-421c-9c2e-ef426fc24aa7"\r
},\r
{\r
"id": "872bd027-1f8d-48f7-90e6-320df5a84d20",\r
"fromCurrencyId": "cmj10enm60012x34dv2hsyaeo",\r
"toCurrencyId": "cmj10enm60014x34dm0fp6ndy",\r
"fromAmount": "6",\r
"toAmount": "551.76",\r
"destination_country": "IND",\r
"purpose_of_payment": null,\r
"notes": null,\r
"error": null,\r
"status": "COMPLETED",\r
"completedAt": "2026-01-06T10:47:17.774Z",\r
"createdAt": "2026-01-06T10:46:25.884Z",\r
"updatedAt": "2026-01-06T10:47:17.775Z",\r
"externalReference": null,\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",\r
"initiatorType": "USER",\r
"paymentMethodId": "025b0f27-3af7-470a-8a17-a35018294381",\r
"recipientId": "9701c5e3-5e68-4457-9548-d2468fa851d9"\r
},\r
{\r
"id": "5dcf8ace-535b-467a-bf03-64d458eab249",\r
"fromCurrencyId": "cmj10enm60015x34dq87dwub5",\r
"toCurrencyId": "cmj10enm60014x34dm0fp6ndy",\r
"fromAmount": "21",\r
"toAmount": "514.9221",\r
"destination_country": "IND",\r
"purpose_of_payment": null,\r
"notes": null,\r
"error": null,\r
"status": "COMPLETED",\r
"completedAt": "2026-01-06T10:46:23.915Z",\r
"createdAt": "2026-01-06T10:45:32.103Z",\r
"updatedAt": "2026-01-06T10:46:23.916Z",\r
"externalReference": null,\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",\r
"initiatorType": "USER",\r
"paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",\r
"recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"\r
},\r
{\r
"id": "bf7928bc-5e3c-40c4-a6e7-a61d9b75fc82",\r
"fromCurrencyId": "cmj10enm60013x34dqg86qxzo",\r
"toCurrencyId": "cmj10enm60016x34darmpv6ev",\r
"fromAmount": "1",\r
"toAmount": "157.1239",\r
"destination_country": "PHL",\r
"purpose_of_payment": null,\r
"notes": null,\r
"error": null,\r
"status": "COMPLETED",\r
"completedAt": "2026-01-06T09:39:51.797Z",\r
"createdAt": "2026-01-06T09:39:02.646Z",\r
"updatedAt": "2026-01-06T09:39:51.798Z",\r
"externalReference": null,\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",\r
"initiatorType": "USER",\r
"paymentMethodId": "83332023-3412-492d-a804-8729049c0a86",\r
"recipientId": "fc7b6995-2af9-44ed-aeef-e0eb0470b622"\r
},\r
{\r
"id": "e7cf98f0-7103-48ac-9596-d907aaea0958",\r
"fromCurrencyId": "cmj10enm50011x34d8fq1w4j6",\r
"toCurrencyId": "cmj10enm60014x34dm0fp6ndy",\r
"fromAmount": "25",\r
"toAmount": "624.57",\r
"destination_country": "IND",\r
"purpose_of_payment": null,\r
"notes": null,\r
"error": null,\r
"status": "COMPLETED",\r
"completedAt": "2026-01-06T09:38:04.118Z",\r
"createdAt": "2026-01-06T09:37:37.698Z",\r
"updatedAt": "2026-01-06T09:38:04.120Z",\r
"externalReference": null,\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",\r
"initiatorType": "USER",\r
"paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",\r
"recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"\r
},\r
{\r
"id": "99040d51-c552-4513-8e9a-32fca1c75ba1",\r
"fromCurrencyId": "cmj10enm60017x34dhqgb09bk",\r
"toCurrencyId": "cmj10enm60016x34darmpv6ev",\r
"fromAmount": "2",\r
"toAmount": "117.72",\r
"destination_country": "PHL",\r
"purpose_of_payment": null,\r
"notes": null,\r
"error": null,\r
"status": "COMPLETED",\r
"completedAt": "2025-12-24T05:43:16.695Z",\r
"createdAt": "2025-12-24T05:42:36.470Z",\r
"updatedAt": "2025-12-24T05:43:16.697Z",\r
"externalReference": null,\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",\r
"initiatorType": "USER",\r
"paymentMethodId": "98a391c7-bbb4-4986-8458-9edc15e8aae2",\r
"recipientId": "19c9d7c2-f128-41ea-aeb9-62fd138fc7de"\r
},\r
{\r
"id": "043cf98a-6b23-4f52-923d-2bb2920251f3",\r
"fromCurrencyId": "cmj10enm60012x34dv2hsyaeo",\r
"toCurrencyId": "cmj10enm60014x34dm0fp6ndy",\r
"fromAmount": "6",\r
"toAmount": "546.72",\r
"destination_country": "IND",\r
"purpose_of_payment": null,\r
"notes": null,\r
"error": null,\r
"status": "COMPLETED",\r
"completedAt": "2025-12-24T05:32:54.254Z",\r
"createdAt": "2025-12-24T05:32:01.410Z",\r
"updatedAt": "2025-12-24T05:32:54.256Z",\r
"externalReference": null,\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",\r
"initiatorType": "USER",\r
"paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",\r
"recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"\r
},\r
{\r
"id": "5362430a-651f-4aba-b542-5c2984bef0da",\r
"fromCurrencyId": "cmj10enm60013x34dqg86qxzo",\r
"toCurrencyId": "cmj10enm60014x34dm0fp6ndy",\r
"fromAmount": "3",\r
"toAmount": "725.0928",\r
"destination_country": "IND",\r
"purpose_of_payment": null,\r
"notes": null,\r
"error": null,\r
"status": "COMPLETED",\r
"completedAt": "2025-12-23T09:33:13.529Z",\r
"createdAt": "2025-12-23T09:32:23.136Z",\r
"updatedAt": "2025-12-23T09:33:13.530Z",\r
"externalReference": null,\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",\r
"initiatorType": "USER",\r
"paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",\r
"recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"\r
},\r
{\r
"id": "b775ba56-c027-4dae-ab5c-a7c113897f94",\r
"fromCurrencyId": "cmj10enm60013x34dqg86qxzo",\r
"toCurrencyId": "cmj10enm60014x34dm0fp6ndy",\r
"fromAmount": "3",\r
"toAmount": "724.695",\r
"destination_country": "IND",\r
"purpose_of_payment": null,\r
"notes": "GPS Transfer to Sara Johnson",\r
"error": null,\r
"status": "COMPLETED",\r
"completedAt": "2025-12-22T09:01:00.140Z",\r
"createdAt": "2025-12-22T09:00:17.839Z",\r
"updatedAt": "2025-12-22T09:01:00.142Z",\r
"externalReference": null,\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",\r
"initiatorType": "USER",\r
"paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",\r
"recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"\r
},\r
{\r
"id": "9502c252-b5ab-44b5-b15e-c667f8b595a5",\r
"fromCurrencyId": "cmj10enm60013x34dqg86qxzo",\r
"toCurrencyId": "cmj10enm60014x34dm0fp6ndy",\r
"fromAmount": "3",\r
"toAmount": "724.695",\r
"destination_country": "IND",\r
"purpose_of_payment": null,\r
"notes": "GPS Transfer to Sara Johnson",\r
"error": null,\r
"status": "COMPLETED",\r
"completedAt": "2025-12-22T08:50:55.108Z",\r
"createdAt": "2025-12-22T08:50:04.631Z",\r
"updatedAt": "2025-12-22T08:50:55.109Z",\r
"externalReference": null,\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",\r
"initiatorType": "USER",\r
"paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",\r
"recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"\r
}\r
],\r
"total": 11\r
}\r
}`}),`
`,n.jsx(r.h3,{id:"get-transaction-by-id-get",children:"Get Transaction by ID GET"}),`
`,n.jsx(r.p,{children:`{\r
"success": true,\r
"data": {\r
"transactions": [\r
{\r
"id": "f2ec24df-e8f8-47de-a210-6b1abfee1ed1",\r
"fromCurrencyId": "cmj10enm60013x34dqg86qxzo",\r
"toCurrencyId": "cmj10enm60014x34dm0fp6ndy",\r
"fromAmount": "3",\r
"toAmount": "732.8658",\r
"destination_country": "IND",\r
"purpose_of_payment": null,\r
"notes": null,\r
"error": null,\r
"status": "COMPLETED",\r
"completedAt": "2026-01-08T09:43:25.126Z",\r
"createdAt": "2026-01-08T09:42:37.697Z",\r
"updatedAt": "2026-01-08T09:43:25.127Z",\r
"externalReference": null,\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",\r
"initiatorType": "USER",\r
"paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",\r
"recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"\r
},\r
{\r
"id": "611322e3-5374-4526-beea-3c541b82a421",\r
"fromCurrencyId": "cmj10enm50011x34d8fq1w4j6",\r
"toCurrencyId": "cmj10enm60014x34dm0fp6ndy",\r
"fromAmount": "40.6237",\r
"toAmount": "1000",\r
"destination_country": "IND",\r
"purpose_of_payment": null,\r
"notes": null,\r
"error": null,\r
"status": "COMPLETED",\r
"completedAt": "2026-01-07T05:46:11.084Z",\r
"createdAt": "2026-01-07T05:45:15.256Z",\r
"updatedAt": "2026-01-07T05:46:11.086Z",\r
"externalReference": null,\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",\r
"initiatorType": "USER",\r
"paymentMethodId": "5c2cd88e-aa46-46bc-9150-562497ce4045",\r
"recipientId": "5064f238-fedf-421c-9c2e-ef426fc24aa7"\r
},\r
{\r
"id": "872bd027-1f8d-48f7-90e6-320df5a84d20",\r
"fromCurrencyId": "cmj10enm60012x34dv2hsyaeo",\r
"toCurrencyId": "cmj10enm60014x34dm0fp6ndy",\r
"fromAmount": "6",\r
"toAmount": "551.76",\r
"destination_country": "IND",\r
"purpose_of_payment": null,\r
"notes": null,\r
"error": null,\r
"status": "COMPLETED",\r
"completedAt": "2026-01-06T10:47:17.774Z",\r
"createdAt": "2026-01-06T10:46:25.884Z",\r
"updatedAt": "2026-01-06T10:47:17.775Z",\r
"externalReference": null,\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",\r
"initiatorType": "USER",\r
"paymentMethodId": "025b0f27-3af7-470a-8a17-a35018294381",\r
"recipientId": "9701c5e3-5e68-4457-9548-d2468fa851d9"\r
},\r
{\r
"id": "5dcf8ace-535b-467a-bf03-64d458eab249",\r
"fromCurrencyId": "cmj10enm60015x34dq87dwub5",\r
"toCurrencyId": "cmj10enm60014x34dm0fp6ndy",\r
"fromAmount": "21",\r
"toAmount": "514.9221",\r
"destination_country": "IND",\r
"purpose_of_payment": null,\r
"notes": null,\r
"error": null,\r
"status": "COMPLETED",\r
"completedAt": "2026-01-06T10:46:23.915Z",\r
"createdAt": "2026-01-06T10:45:32.103Z",\r
"updatedAt": "2026-01-06T10:46:23.916Z",\r
"externalReference": null,\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",\r
"initiatorType": "USER",\r
"paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",\r
"recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"\r
},\r
{\r
"id": "bf7928bc-5e3c-40c4-a6e7-a61d9b75fc82",\r
"fromCurrencyId": "cmj10enm60013x34dqg86qxzo",\r
"toCurrencyId": "cmj10enm60016x34darmpv6ev",\r
"fromAmount": "1",\r
"toAmount": "157.1239",\r
"destination_country": "PHL",\r
"purpose_of_payment": null,\r
"notes": null,\r
"error": null,\r
"status": "COMPLETED",\r
"completedAt": "2026-01-06T09:39:51.797Z",\r
"createdAt": "2026-01-06T09:39:02.646Z",\r
"updatedAt": "2026-01-06T09:39:51.798Z",\r
"externalReference": null,\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",\r
"initiatorType": "USER",\r
"paymentMethodId": "83332023-3412-492d-a804-8729049c0a86",\r
"recipientId": "fc7b6995-2af9-44ed-aeef-e0eb0470b622"\r
},\r
{\r
"id": "e7cf98f0-7103-48ac-9596-d907aaea0958",\r
"fromCurrencyId": "cmj10enm50011x34d8fq1w4j6",\r
"toCurrencyId": "cmj10enm60014x34dm0fp6ndy",\r
"fromAmount": "25",\r
"toAmount": "624.57",\r
"destination_country": "IND",\r
"purpose_of_payment": null,\r
"notes": null,\r
"error": null,\r
"status": "COMPLETED",\r
"completedAt": "2026-01-06T09:38:04.118Z",\r
"createdAt": "2026-01-06T09:37:37.698Z",\r
"updatedAt": "2026-01-06T09:38:04.120Z",\r
"externalReference": null,\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",\r
"initiatorType": "USER",\r
"paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",\r
"recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"\r
},\r
{\r
"id": "99040d51-c552-4513-8e9a-32fca1c75ba1",\r
"fromCurrencyId": "cmj10enm60017x34dhqgb09bk",\r
"toCurrencyId": "cmj10enm60016x34darmpv6ev",\r
"fromAmount": "2",\r
"toAmount": "117.72",\r
"destination_country": "PHL",\r
"purpose_of_payment": null,\r
"notes": null,\r
"error": null,\r
"status": "COMPLETED",\r
"completedAt": "2025-12-24T05:43:16.695Z",\r
"createdAt": "2025-12-24T05:42:36.470Z",\r
"updatedAt": "2025-12-24T05:43:16.697Z",\r
"externalReference": null,\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",\r
"initiatorType": "USER",\r
"paymentMethodId": "98a391c7-bbb4-4986-8458-9edc15e8aae2",\r
"recipientId": "19c9d7c2-f128-41ea-aeb9-62fd138fc7de"\r
},\r
{\r
"id": "043cf98a-6b23-4f52-923d-2bb2920251f3",\r
"fromCurrencyId": "cmj10enm60012x34dv2hsyaeo",\r
"toCurrencyId": "cmj10enm60014x34dm0fp6ndy",\r
"fromAmount": "6",\r
"toAmount": "546.72",\r
"destination_country": "IND",\r
"purpose_of_payment": null,\r
"notes": null,\r
"error": null,\r
"status": "COMPLETED",\r
"completedAt": "2025-12-24T05:32:54.254Z",\r
"createdAt": "2025-12-24T05:32:01.410Z",\r
"updatedAt": "2025-12-24T05:32:54.256Z",\r
"externalReference": null,\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",\r
"initiatorType": "USER",\r
"paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",\r
"recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"\r
},\r
{\r
"id": "5362430a-651f-4aba-b542-5c2984bef0da",\r
"fromCurrencyId": "cmj10enm60013x34dqg86qxzo",\r
"toCurrencyId": "cmj10enm60014x34dm0fp6ndy",\r
"fromAmount": "3",\r
"toAmount": "725.0928",\r
"destination_country": "IND",\r
"purpose_of_payment": null,\r
"notes": null,\r
"error": null,\r
"status": "COMPLETED",\r
"completedAt": "2025-12-23T09:33:13.529Z",\r
"createdAt": "2025-12-23T09:32:23.136Z",\r
"updatedAt": "2025-12-23T09:33:13.530Z",\r
"externalReference": null,\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",\r
"initiatorType": "USER",\r
"paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",\r
"recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"\r
},\r
{\r
"id": "b775ba56-c027-4dae-ab5c-a7c113897f94",\r
"fromCurrencyId": "cmj10enm60013x34dqg86qxzo",\r
"toCurrencyId": "cmj10enm60014x34dm0fp6ndy",\r
"fromAmount": "3",\r
"toAmount": "724.695",\r
"destination_country": "IND",\r
"purpose_of_payment": null,\r
"notes": "GPS Transfer to Sara Johnson",\r
"error": null,\r
"status": "COMPLETED",\r
"completedAt": "2025-12-22T09:01:00.140Z",\r
"createdAt": "2025-12-22T09:00:17.839Z",\r
"updatedAt": "2025-12-22T09:01:00.142Z",\r
"externalReference": null,\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",\r
"initiatorType": "USER",\r
"paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",\r
"recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"\r
},\r
{\r
"id": "9502c252-b5ab-44b5-b15e-c667f8b595a5",\r
"fromCurrencyId": "cmj10enm60013x34dqg86qxzo",\r
"toCurrencyId": "cmj10enm60014x34dm0fp6ndy",\r
"fromAmount": "3",\r
"toAmount": "724.695",\r
"destination_country": "IND",\r
"purpose_of_payment": null,\r
"notes": "GPS Transfer to Sara Johnson",\r
"error": null,\r
"status": "COMPLETED",\r
"completedAt": "2025-12-22T08:50:55.108Z",\r
"createdAt": "2025-12-22T08:50:04.631Z",\r
"updatedAt": "2025-12-22T08:50:55.109Z",\r
"externalReference": null,\r
"orgId": "74d14bfb-a6f0-4859-86f8-75ec3e0adfa0",\r
"createdByUserId": "d66fbf12-aa1a-45e4-86f7-df39cd6af66c",\r
"initiatorType": "USER",\r
"paymentMethodId": "523654f5-045f-42ec-9831-3b1ee9ac9401",\r
"recipientId": "a067b2a6-0141-4dcf-bc90-afe96ef9b558"\r
}\r
],\r
"total": 11\r
}\r
}`})]})}function i(e={}){const{wrapper:r}={...t(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(a,{...e})}):a(e)}export{u as __filepath,i as default,c as excerpt,o as frontmatter,l as tableOfContents};
//# sourceMappingURL=api-response-B1_zKRPx.js.map
