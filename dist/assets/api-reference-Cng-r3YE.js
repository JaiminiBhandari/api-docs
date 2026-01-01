import{J as s,j as e}from"./entry.client-CLkf4Kjg.js";const c="This page contains all available endpoints for the ARP Digital API.",r=[{depth:2,value:"Overview",id:"overview"},{depth:2,value:"Authentication",id:"authentication"},{depth:2,value:"Endpoints by Category",id:"endpoints-by-category",children:[{depth:3,value:"Account Management",id:"account-management"}]},{depth:2,value:"Remittances API",id:"remittances-api",children:[{depth:3,value:"Recipients",id:"recipients"},{depth:3,value:"Quotes",id:"quotes"},{depth:3,value:"Transactions",id:"transactions"},{depth:3,value:"Configuration",id:"configuration"}]},{depth:2,value:"Trade API",id:"trade-api",children:[{depth:3,value:"Trades",id:"trades"},{depth:3,value:"Quotes",id:"quotes-1"}]},{depth:2,value:"Checkout API",id:"checkout-api"},{depth:2,value:"Wallet API",id:"wallet-api",children:[{depth:3,value:"Balances",id:"balances"},{depth:3,value:"Wallets",id:"wallets"},{depth:3,value:"Bank Accounts",id:"bank-accounts"}]},{depth:2,value:"Deposits",id:"deposits"},{depth:2,value:"Withdrawals",id:"withdrawals"},{depth:2,value:"Servers",id:"servers"}],d={title:"API Reference",lastModifiedTime:"2026-01-01T05:54:20.000Z"},a="pages\\api-reference.mdx";function t(i){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"This page contains all available endpoints for the ARP Digital API."}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"The ARP Digital API provides comprehensive functionality for managing remittances, trades, checkouts, and account operations. All endpoints require authentication using API key and signature."}),`
`,e.jsx(n.h2,{id:"authentication",children:"Authentication"}),`
`,e.jsx(n.p,{children:"All API requests require authentication using API key and signature. You must include the following headers with each request:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"X-API-Key"}),": Your API key"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"X-Timestamp"}),": Current Unix timestamp in seconds"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"X-Signature"}),": HMAC SHA256 signature of ",e.jsx(n.code,{inline:"true",children:"apiKey + requestBody + timestamp"})," using your API secret as the key"]}),`
`]}),`
`,e.jsx(n.h2,{id:"endpoints-by-category",children:"Endpoints by Category"}),`
`,e.jsx(n.h3,{id:"account-management",children:"Account Management"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"PUT /profile"})," - Update user profile"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"POST /change-password"})," - Change password"]}),`
`]}),`
`,e.jsx(n.h2,{id:"remittances-api",children:"Remittances API"}),`
`,e.jsx(n.h3,{id:"recipients",children:"Recipients"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /recipients"})," - Get recipients"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"POST /recipients"})," - Create recipient"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /recipients/{id}"})," - Get recipient by ID"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /recipients/verificationFields"})," - Get recipient verification fields"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /recipients/paymentMethodFields"})," - Get recipient payment method fields"]}),`
`]}),`
`,e.jsx(n.h3,{id:"quotes",children:"Quotes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"POST /quote"})," - Get exchange rate quote"]}),`
`]}),`
`,e.jsx(n.h3,{id:"transactions",children:"Transactions"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"POST /transaction"})," - Execute transaction"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /transactions"})," - Get transactions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /transactions/{id}"})," - Get transaction by ID"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /transactions/report/excel"})," - Generate transactions report"]}),`
`]}),`
`,e.jsx(n.h3,{id:"configuration",children:"Configuration"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /countries/{id}"})," - Get countries by ID"]}),`
`]}),`
`,e.jsx(n.h2,{id:"trade-api",children:"Trade API"}),`
`,e.jsx(n.h3,{id:"trades",children:"Trades"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /api/v1/trades"})," - Get trades"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"POST /api/v1/trades"})," - Create trades"]}),`
`]}),`
`,e.jsx(n.h3,{id:"quotes-1",children:"Quotes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"POST /api/v1/quotes"}),"  - Create exchange rate quote"]}),`
`]}),`
`,e.jsx(n.h2,{id:"checkout-api",children:"Checkout API"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /health"})," - Check the health"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"POST/checkout"})," - Create checkout"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET/checkout"})," - Get all checkouts"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"POST /checkout/broker"})," - Create broker checkout"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /checkout/{checkoutId}"})," - Get checkout by ID"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /checkout/{checkoutId}/completion-url"})," - Get the completion URL"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /checkout/{checkoutId}/receipt"})," - Get receipt"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /checkout/buyer/{checkoutId}"})," - Get buyer"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /checkout/seller/{checkoutId}"})," - Get seller"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"POST /checkout/complete"})," - Proceed checkout"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"POST /checkout/penny-test"})," - Create penny-test"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"POST /checkout/{checkoutId}/cancel"})," - Cancel checkout by ID"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"POST /vaults"})," - Create vault"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /vaults/detailed"})," - Get vault detailed"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /vaults/basic"})," - Get basic vault information"]}),`
`]}),`
`,e.jsx(n.h2,{id:"wallet-api",children:"Wallet API"}),`
`,e.jsx(n.h3,{id:"balances",children:"Balances"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /balance"})," - Get user balances"]}),`
`]}),`
`,e.jsx(n.h3,{id:"wallets",children:"Wallets"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /wallets"}),"  - Get user wallet"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"POST /wallets"})," - Create wallet"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /wallets/{id}"})," - Get wallet by ID"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /wallet-transactions"})," - Get wallet transactions history"]}),`
`]}),`
`,e.jsx(n.h3,{id:"bank-accounts",children:"Bank Accounts"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /bank-accounts"})," - Get all bank accounts"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"POST /bank-accounts"})," - Create bank account"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /bank-accounts/{id}"})," - Get bank account by ID"]}),`
`]}),`
`,e.jsx(n.h2,{id:"deposits",children:"Deposits"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /deposits"})," - Get deposit"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"POST /deposits"})," - Create deposit"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /deposits/{id}"})," - Get deposit by ID"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /beneficiary"})," - Get beneficiary details for fiat deposits"]}),`
`]}),`
`,e.jsx(n.h2,{id:"withdrawals",children:"Withdrawals"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /withdrawals"})," - Get withdrawal"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"POST /withdrawals"})," - Create withdrawal"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{inline:"true",children:"GET /withdrawals/{id}"})," - Get withdrawal by ID"]}),`
`]}),`
`,e.jsx(n.h2,{id:"servers",children:"Servers"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Sandbox Environment:"})," ",e.jsx(n.code,{inline:"true",children:"https://platform.arpdigital.io/services"})]}),`
`]})]})}function h(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{a as __filepath,h as default,c as excerpt,d as frontmatter,r as tableOfContents};
//# sourceMappingURL=api-reference-Cng-r3YE.js.map
