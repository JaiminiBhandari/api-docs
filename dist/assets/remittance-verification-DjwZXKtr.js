import{J as t,j as e}from"./entry.client-C2DISYtT.js";const d="The Send Money feature allows you to create a new GPS remittance transaction by transferring funds from your wallet balance to a recipient in a supported country.",c=[{depth:1,value:"Send Money (GPS Remittance)",id:"send-money-gps-remittance",children:[{depth:2,value:"Overview",id:"overview"},{depth:2,value:"How to Send Money (Remittance Process)",id:"how-to-send-money-remittance-process",children:[{depth:3,value:"1. Create a Recipient",id:"1-create-a-recipient"},{depth:3,value:"2. Get a Quote",id:"2-get-a-quote"},{depth:3,value:"3. Execute Transaction",id:"3-execute-transaction"}]},{depth:2,value:"Supported Countries",id:"supported-countries"},{depth:2,value:"Field Descriptions",id:"field-descriptions",children:[{depth:3,value:"Recipient Section",id:"recipient-section"},{depth:3,value:"Transfer Details Section",id:"transfer-details-section"}]},{depth:2,value:"Currency Behavior",id:"currency-behavior"},{depth:2,value:"Transfer Limits",id:"transfer-limits",children:[{depth:3,value:"Supported Receiving Currencies",id:"supported-receiving-currencies",children:[{depth:4,value:"Country-Specific Currency Support",id:"country-specific-currency-support"}]},{depth:3,value:"Limit Rules",id:"limit-rules"},{depth:3,value:"Country-Specific Minimum Limits",id:"country-specific-minimum-limits",children:[{depth:4,value:"Business",id:"business"},{depth:4,value:"Individual",id:"individual"}]}]},{depth:2,value:"Validation Rules",id:"validation-rules"}]}],l={lastModifiedTime:"2026-01-23T10:36:59.000Z"},h="pages\\remittance-verification.md";function r(i){const n={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"send-money-gps-remittance",children:"Send Money (GPS Remittance)"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Send Money"})," feature allows you to create a new ",e.jsx(n.strong,{children:"GPS remittance transaction"})," by transferring funds from your wallet balance to a recipient in a supported country."]}),`
`,e.jsxs(n.p,{children:["This flow supports ",e.jsx(n.strong,{children:"multiple countries and currencies"})," in a single unified interface and provides real-time quotes based on the selected corridor."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"how-to-send-money-remittance-process",children:"How to Send Money (Remittance Process)"}),`
`,e.jsx(n.p,{children:"The remittance process involves three main steps:"}),`
`,e.jsx(n.h3,{id:"1-create-a-recipient",children:"1. Create a Recipient"}),`
`,e.jsx(n.p,{children:"Creating a recipient is the first step in sending money internationally. Recipients must be verified before they can receive funds, and the verification process varies by destination country."}),`
`,e.jsxs(n.p,{children:["To create a recipient, use the ",e.jsx(n.strong,{children:e.jsx(n.a,{href:"/remittance-api/recipients#create-recipient",children:"Create Recipient"})})," API endpoint."]}),`
`,e.jsx(n.h3,{id:"2-get-a-quote",children:"2. Get a Quote"}),`
`,e.jsx(n.p,{children:"Before executing a transaction, obtain a real-time exchange rate quote for the desired currency pair."}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.strong,{children:e.jsx(n.a,{href:"/remittance-api/quotes#get-exchange-rate-quote",children:"Get Exchange Rate Quote"})})," API endpoint to get a quote."]}),`
`,e.jsx(n.h3,{id:"3-execute-transaction",children:"3. Execute Transaction"}),`
`,e.jsx(n.p,{children:"Once you have a quote and a verified recipient, execute the remittance transaction."}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.strong,{children:e.jsx(n.a,{href:"/remittance-api/transactions#execute-transaction",children:"Execute Transaction"})})," API endpoint to complete the transfer."]}),`
`,e.jsx(n.h2,{id:"supported-countries",children:"Supported Countries"}),`
`,e.jsx(n.p,{children:"The Send Money feature currently supports the following destination countries:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"India"}),`
`,e.jsx(n.li,{children:"Philippines"}),`
`,e.jsx(n.li,{children:"Hong Kong"}),`
`,e.jsx(n.li,{children:"United Arab Emirates"}),`
`,e.jsx(n.li,{children:"Saudi Arabia"}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Available countries may vary by environment and configuration."}),`
`]}),`
`,e.jsx(n.h2,{id:"field-descriptions",children:"Field Descriptions"}),`
`,e.jsx(n.h3,{id:"recipient-section",children:"Recipient Section"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Field Name"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Country"}),e.jsx(n.td,{children:"Destination country where the recipient will receive funds"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Recipient"}),e.jsx(n.td,{children:"The person or entity receiving the money"})]})]})]}),`
`,e.jsx(n.h3,{id:"transfer-details-section",children:"Transfer Details Section"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Field Name"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"You Send"}),e.jsx(n.td,{children:"Amount deducted from your wallet balance"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Sending Currency"}),e.jsx(n.td,{children:"Currency of your wallet balance"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"They Receive"}),e.jsx(n.td,{children:"Amount the recipient receives"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Receiving Currency"}),e.jsx(n.td,{children:"Local currency of the destination country"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"currency-behavior",children:"Currency Behavior"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Exchange rates are applied automatically based on the selected country and currencies."}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.strong,{children:"Receive"})," amount updates in real time when the send amount changes."]}),`
`,e.jsx(n.li,{children:"Currency pairs are restricted to supported corridors only."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"transfer-limits",children:"Transfer Limits"}),`
`,e.jsxs(n.p,{children:["Transfer limits are enforced ",e.jsx(n.strong,{children:"per destination country and receiving currency"}),"."]}),`
`,e.jsx(n.h3,{id:"supported-receiving-currencies",children:"Supported Receiving Currencies"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"USD"}),`
`,e.jsx(n.li,{children:"AED"}),`
`,e.jsx(n.li,{children:"BHD"}),`
`,e.jsx(n.li,{children:"SAR"}),`
`,e.jsx(n.li,{children:"USDT"}),`
`,e.jsx(n.li,{children:"USDC"}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Available currencies depend on the selected destination country and corridor configuration."}),`
`]}),`
`,e.jsx(n.h4,{id:"country-specific-currency-support",children:"Country-Specific Currency Support"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"United Arab Emirates (UAE)"}),": Supports only ",e.jsx(n.strong,{children:"USDT"})," and ",e.jsx(n.strong,{children:"USDC"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Saudi Arabia (SAR)"}),": Supports only ",e.jsx(n.strong,{children:"USDT"})," and ",e.jsx(n.strong,{children:"USDC"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"limit-rules",children:"Limit Rules"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Each country–currency pair has its own ",e.jsx(n.strong,{children:"minimum"})," and ",e.jsx(n.strong,{children:"maximum"})," transfer amount."]}),`
`,e.jsxs(n.li,{children:["Limits are applied to the ",e.jsx(n.strong,{children:"receiving amount"})," (They Receive)."]}),`
`,e.jsx(n.li,{children:"Transactions outside configured limits are blocked."}),`
`]}),`
`,e.jsx(n.h3,{id:"country-specific-minimum-limits",children:"Country-Specific Minimum Limits"}),`
`,e.jsx(n.p,{children:"The following minimum receiving amount limits are currently configured:"}),`
`,e.jsx(n.h4,{id:"business",children:"Business"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Country"}),e.jsx(n.th,{children:"Minimum Transfer Amount"}),e.jsx(n.th,{children:"Maximum Transfer Amount"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"India"}),e.jsx(n.td,{children:"500.0000"}),e.jsx(n.td,{children:"2,000,000.0000"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Philippines"}),e.jsx(n.td,{children:"500.0000"}),e.jsx(n.td,{children:"1,000,000.0000"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Hong Kong"}),e.jsx(n.td,{children:"100.0000"}),e.jsx(n.td,{children:"5,000,000.0000"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Saudi Arabia"}),e.jsx(n.td,{children:"N/A"}),e.jsx(n.td,{children:"N/A"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"United Arab Emirates"}),e.jsx(n.td,{children:"N/A"}),e.jsx(n.td,{children:"N/A"})]})]})]}),`
`,e.jsx(n.h4,{id:"individual",children:"Individual"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Country"}),e.jsx(n.th,{children:"Minimum Transfer Amount"}),e.jsx(n.th,{children:"Maximum Transfer Amount"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"India"}),e.jsx(n.td,{children:"500.0000"}),e.jsx(n.td,{children:"1,000,000.0000"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Philippines"}),e.jsx(n.td,{children:"100.0000"}),e.jsx(n.td,{children:"500,000.0000"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Hong Kong"}),e.jsx(n.td,{children:"100.0000"}),e.jsx(n.td,{children:"1,000,000.0000"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Saudi Arabia"}),e.jsx(n.td,{children:"N/A"}),e.jsx(n.td,{children:"N/A"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"United Arab Emirates"}),e.jsx(n.td,{children:"N/A"}),e.jsx(n.td,{children:"N/A"})]})]})]}),`
`,e.jsx(n.p,{children:"Limits are updated automatically when the destination country or receiving currency changes."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"validation-rules",children:"Validation Rules"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"You must have sufficient wallet balance to initiate a transfer."}),`
`,e.jsx(n.li,{children:"The selected country must be supported."}),`
`,e.jsx(n.li,{children:"A valid recipient must be selected."}),`
`,e.jsx(n.li,{children:"Currency and country combinations must be supported."}),`
`,e.jsx(n.li,{children:"Transfer amount must be within configured limits for the selected country and currency."}),`
`]}),`
`,e.jsx(n.hr,{})]})}function a(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{h as __filepath,a as default,d as excerpt,l as frontmatter,c as tableOfContents};
//# sourceMappingURL=remittance-verification-DjwZXKtr.js.map
