import{J as s,j as e}from"./entry.client-C2DISYtT.js";const c="This page contains all available endpoints for the ARP Digital API.",r=[{depth:2,value:"Overview",id:"overview"},{depth:2,value:"Authentication",id:"authentication"},{depth:2,value:"Endpoints by Category",id:"endpoints-by-category",children:[{depth:3,value:"Account Management",id:"account-management"},{depth:3,value:"Sender",id:"sender"}]},{depth:2,value:"Remittances API",id:"remittances-api",children:[{depth:3,value:"Recipients",id:"recipients"},{depth:3,value:"Quotes",id:"quotes"},{depth:3,value:"Transactions",id:"transactions"},{depth:3,value:"Configuration",id:"configuration"}]},{depth:2,value:"Trade API",id:"trade-api",children:[{depth:3,value:"Trades",id:"trades"},{depth:3,value:"Quotes",id:"quotes-1"}]},{depth:2,value:"Checkout API",id:"checkout-api"},{depth:2,value:"Wallet API",id:"wallet-api",children:[{depth:3,value:"Balances",id:"balances"},{depth:3,value:"Wallets",id:"wallets"},{depth:3,value:"Bank Accounts",id:"bank-accounts"}]},{depth:2,value:"Deposits",id:"deposits"},{depth:2,value:"Withdrawals",id:"withdrawals"},{depth:2,value:"OTC API",id:"otc-api",children:[{depth:4,value:"Customer",id:"customer"},{depth:4,value:"Quote & Trade",id:"quote--trade"}]},{depth:2,value:"Servers",id:"servers"}],d={title:"API Reference",lastModifiedTime:"2026-01-30T04:47:45.000Z"},a="pages\\api-reference.mdx";function t(n){const i={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.p,{children:"This page contains all available endpoints for the ARP Digital API."}),`
`,e.jsx(i.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(i.p,{children:"The ARP Digital API provides comprehensive functionality for managing remittances, trades, checkouts, and account operations. All endpoints require authentication using API key and signature."}),`
`,e.jsx(i.h2,{id:"authentication",children:"Authentication"}),`
`,e.jsx(i.p,{children:"All API requests require authentication using API key and signature. You must include the following headers with each request:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"X-API-Key"}),": Your API key"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"X-Timestamp"}),": Current Unix timestamp in seconds"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"X-Signature"}),": HMAC SHA256 signature of ",e.jsx(i.code,{inline:"true",children:"apiKey + requestBody + timestamp"})," using your API secret as the key"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"X-Environment"}),": ",e.jsx(i.code,{inline:"true",children:"sandbox"})," or ",e.jsx(i.code,{inline:"true",children:"production"})]}),`
`]}),`
`,e.jsx(i.h2,{id:"endpoints-by-category",children:"Endpoints by Category"}),`
`,e.jsx(i.h3,{id:"account-management",children:"Account Management"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"PUT /profile"})," - Update user profile"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"POST /change-password"})," - Change password"]}),`
`]}),`
`,e.jsx(i.h3,{id:"sender",children:"Sender"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET /senders"})," - Get senders"]}),`
`]}),`
`,e.jsx(i.h2,{id:"remittances-api",children:"Remittances API"}),`
`,e.jsx(i.h3,{id:"recipients",children:"Recipients"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET /gps/api/v1/recipients"})," - Get recipients"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"POST /gps/api/v1/recipients"})," - Create recipient"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET /gps/api/v1/recipients/{id}"})," - Get recipient by ID"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET /gps/api/v1/recipients/verificationFields"})," - Get recipient verification fields"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET /gps/api/v1/recipients/paymentMethodFields"})," - Get recipient payment method fields"]}),`
`]}),`
`,e.jsx(i.h3,{id:"quotes",children:"Quotes"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"POST /gps/api/v1/quote"})," - Get exchange rate quote"]}),`
`]}),`
`,e.jsx(i.h3,{id:"transactions",children:"Transactions"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"POST /gps/api/v1/transaction"})," - Execute transaction"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET /gps/api/v1/transactions"})," - Get transactions"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET /gps/api/v1/transactions/{id}"})," - Get transaction by ID"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET /gps/api/v1/transactions/report/excel"})," - Generate transactions report"]}),`
`]}),`
`,e.jsx(i.h3,{id:"configuration",children:"Configuration"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET /gps/api/v1/countries"})," - Get countries"]}),`
`]}),`
`,e.jsx(i.h2,{id:"trade-api",children:"Trade API"}),`
`,e.jsx(i.h3,{id:"trades",children:"Trades"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET otc/api/v1/trades"})," - Get trades"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"POST otc/api/v1/trades"})," - Create trades"]}),`
`]}),`
`,e.jsx(i.h3,{id:"quotes-1",children:"Quotes"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"POST otc/api/v1/quotes"})," - Create exchange rate quote"]}),`
`]}),`
`,e.jsx(i.h2,{id:"checkout-api",children:"Checkout API"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET gate/api/v1/health"})," - Check the health"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"POST gate/api/v1/checkout"})," - Create checkout"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET gate/api/v1/checkout"})," - Get all checkouts"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"POST gate/api/v1/checkout/broker"})," - Create broker checkout"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET gate/api/v1/checkout/{checkoutId}"})," - Get checkout by ID"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET gate/api/v1/checkout/{checkoutId}/completion-url"})," - Get the completion URL"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET gate/api/v1/checkout/{checkoutId}/receipt"})," - Get receipt"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET gate/api/v1/checkout/buyer/{checkoutId}"})," - Get buyer"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET gate/api/v1/checkout/seller/{checkoutId}"})," - Get seller"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"POST gate/api/v1/checkout/complete"})," - Proceed checkout"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"POST gate/api/v1/checkout/penny-test"})," - Create penny-test"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"POST gate/api/v1/checkout/{checkoutId}/cancel"})," - Cancel checkout by ID"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"POST gate/api/v1/vaults"})," - Create vault"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET gate/api/v1/vaults/detailed"})," - Get vault detailed"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET gate/api/v1/vaults/basic"})," - Get basic vault information"]}),`
`]}),`
`,e.jsx(i.h2,{id:"wallet-api",children:"Wallet API"}),`
`,e.jsx(i.h3,{id:"balances",children:"Balances"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET wallet/api/v1/balance"})," - Get user balances"]}),`
`]}),`
`,e.jsx(i.h3,{id:"wallets",children:"Wallets"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET wallet/api/v1/wallets"})," - Get user wallet"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"POST wallet/api/v1/wallets"})," - Create wallet"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET wallet/api/v1/wallets/{id}"})," - Get wallet by ID"]}),`
`]}),`
`,e.jsx(i.h3,{id:"bank-accounts",children:"Bank Accounts"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET wallet/api/v1/bank-accounts"})," - Get all bank accounts"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"POST wallet/api/v1/bank-accounts"})," - Create bank account"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET wallet/api/v1/bank-accounts/{id}"})," - Get bank account by ID"]}),`
`]}),`
`,e.jsx(i.h2,{id:"deposits",children:"Deposits"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET wallet/api/v1/deposits"})," - Get deposit"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"POST wallet/api/v1/deposits"})," - Create deposit"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET wallet/api/v1/deposits/{id}"})," - Get deposit by ID"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET /api/v1/beneficiary"})," - Get beneficiary details for fiat deposits"]}),`
`]}),`
`,e.jsx(i.h2,{id:"withdrawals",children:"Withdrawals"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET wallet/api/v1/withdrawals"})," - Get withdrawal"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"POST wallet/api/v1/withdrawals"})," - Create withdrawal"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET wallet/api/v1/withdrawals/{id}"})," - Get withdrawal by ID"]}),`
`]}),`
`,`
`,e.jsx(i.h2,{id:"otc-api",children:"OTC API"}),`
`,e.jsx(i.h4,{id:"customer",children:"Customer"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"POST /customers"})," - Create a new customer"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET /customers"})," - List all customers"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET /customers/{id}"})," - Get customer details by ID"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"PATCH /customers/{id}/enable"})," - Enable or disable a customer"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET /customers/{id}/balance"})," - Get customer balance"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET /customers/{id}/transactions"})," - Get customer balance transactions"]}),`
`]}),`
`,e.jsx(i.h4,{id:"quote--trade",children:"Quote & Trade"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"POST /quotes"})," - Request a real-time exchange quote"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"GET /quotes/{quoteId}"})," - Get details of a specific quote"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{inline:"true",children:"POST /trades"})," - Execute a trade based on a quote"]}),`
`]}),`
`,e.jsx(i.h2,{id:"servers",children:"Servers"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Production Environment:"})," ",e.jsx(i.code,{inline:"true",children:"https://platform.arpdigital.io/services"})]}),`
`]})]})}function h(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{a as __filepath,h as default,c as excerpt,d as frontmatter,r as tableOfContents};
//# sourceMappingURL=api-reference-CHMrcq_k.js.map
