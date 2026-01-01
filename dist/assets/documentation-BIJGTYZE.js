import{J as s,j as e}from"./entry.client-CPfyXGNb.js";const a="Welcome to ARP Digital.",l=[{depth:1,value:"ARP Digital",id:"arp-digital",children:[{depth:2,value:"Services",id:"services",children:[{depth:3,value:"Remittance",id:"remittance"},{depth:3,value:"Trading",id:"trading"},{depth:3,value:"Checkout",id:"checkout"}]},{depth:2,value:"API",id:"api",children:[{depth:3,value:"Authentication",id:"authentication"}]},{depth:2,value:"Signature Generation",id:"signature-generation"},{depth:2,value:"Servers",id:"servers"}]}],o={sidebar_label:"General Information",sidebar_icon:"heart-handshake",lastModifiedTime:"2025-12-23T10:32:11.328Z"},c="pages\\documentation.mdx";function i(t){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"arp-digital",children:"ARP Digital"}),`
`,e.jsx(n.p,{children:"Welcome to ARP Digital."}),`
`,e.jsx(n.p,{children:"We provide a powerful suite of cross-border payment and settlement services that enable businesses to integrate global money movement directly into their applications."}),`
`,e.jsx(n.p,{children:"Our API offers end-to-end tools for fast transfers, secure transactions, and intelligent routing—giving you everything you need to build seamless, compliant financial experiences at scale."}),`
`,e.jsx(n.h2,{id:"services",children:"Services"}),`
`,e.jsx(n.h3,{id:"remittance",children:"Remittance"}),`
`,e.jsx(n.p,{children:"Send money across borders quickly and securely. ARP Digital provides compliant, real-time remittance capabilities designed for global transfers at scale."}),`
`,e.jsx(n.h3,{id:"trading",children:"Trading"}),`
`,e.jsx(n.p,{children:"Seamlessly trade between fiat and cryptocurrencies with unified APIs. Execute conversions, manage liquidity, and enable asset swaps with reliable pricing and low latency."}),`
`,e.jsx(n.h3,{id:"checkout",children:"Checkout"}),`
`,e.jsx(n.p,{children:"Create secure external payment links for frictionless monetary transactions. Perfect for merchants, platforms, and applications that need fast, compliant payment collection without building a full checkout flow."}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(n.h3,{id:"authentication",children:"Authentication"}),`
`,e.jsx(n.p,{children:"All API requests require authentication using API key and signature. You must include the following headers with each request:"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"X-API-Key:"})," Your API key",e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"X-Timestamp:"})," Current Unix timestamp in seconds",e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"X-Signature:"})," HMAC SHA256 signature of apiKey + requestBody + timestamp using your API secret as the key"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," The API secret is stored securely on the server and is not transmitted in headers."]}),`
`,e.jsx(n.p,{children:"API keys can be created through the client dashboard."}),`
`,e.jsx(n.h2,{id:"signature-generation",children:"Signature Generation"}),`
`,e.jsx(n.p,{children:"The signature is generated using HMAC SHA256 with the following steps:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Concatenate: ",e.jsx(n.code,{inline:"true",children:"apiKey + requestBody + timestamp"})]}),`
`,e.jsx(n.li,{children:"Create HMAC SHA256 hash using your API secret as the key"}),`
`,e.jsx(n.li,{children:"Convert to lowercase hexadecimal string"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Important Notes"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"For GET requests, use an empty string as the request body"}),`
`,e.jsx(n.li,{children:"Timestamps must be within 1000 seconds of the server time"}),`
`,e.jsx(n.li,{children:"All signatures are case-sensitive"}),`
`,e.jsx(n.li,{children:"Request body must be the exact JSON string sent in the request"}),`
`]}),`
`,e.jsx(n.h2,{id:"servers",children:"Servers"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Sandbox Environment:"})," ",e.jsx(n.code,{inline:"true",children:"https://platform.arpdigital.io/api/v1"})]}),`
`]})]})}function d(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{c as __filepath,d as default,a as excerpt,o as frontmatter,l as tableOfContents};
//# sourceMappingURL=documentation-BIJGTYZE.js.map
