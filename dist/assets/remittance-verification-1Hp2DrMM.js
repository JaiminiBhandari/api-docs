import{J as s,j as e}from"./entry.client-BmU5zPXR.js";const c="The Send Money feature allows you to create a new GPS remittance transaction by transferring funds from your wallet balance to a recipient in a supported country.",l=[{depth:1,value:"Send Money (GPS Remittance)",id:"send-money-gps-remittance",children:[{depth:2,value:"Overview",id:"overview"},{depth:2,value:"Supported Countries",id:"supported-countries"},{depth:2,value:"How to Send Money",id:"how-to-send-money",children:[{depth:3,value:"Step-by-Step Instructions",id:"step-by-step-instructions"}]},{depth:2,value:"Field Descriptions",id:"field-descriptions",children:[{depth:3,value:"Recipient Section",id:"recipient-section"},{depth:3,value:"Transfer Details Section",id:"transfer-details-section"}]},{depth:2,value:"Currency Behavior",id:"currency-behavior"},{depth:2,value:"Transfer Limits",id:"transfer-limits",children:[{depth:3,value:"Supported Receiving Currencies",id:"supported-receiving-currencies",children:[{depth:4,value:"Country-Specific Currency Support",id:"country-specific-currency-support"}]},{depth:3,value:"Limit Rules",id:"limit-rules"},{depth:3,value:"Country-Specific Minimum Limits",id:"country-specific-minimum-limits"},{depth:3,value:"Example Limit Messages",id:"example-limit-messages"}]},{depth:2,value:"Validation Rules",id:"validation-rules"},{depth:2,value:"Error Scenarios",id:"error-scenarios"},{depth:2,value:"Environment Notes",id:"environment-notes"},{depth:2,value:"Summary",id:"summary"}]}],d={lastModifiedTime:"2026-01-02T09:54:07.917Z"},o="pages\\remittance-verification.md";function r(i){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"send-money-gps-remittance",children:"Send Money (GPS Remittance)"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Send Money"})," feature allows you to create a new ",e.jsx(n.strong,{children:"GPS remittance transaction"})," by transferring funds from your wallet balance to a recipient in a supported country."]}),`
`,e.jsxs(n.p,{children:["This flow supports ",e.jsx(n.strong,{children:"multiple countries and currencies"})," in a single unified interface and provides real-time quotes based on the selected corridor."]}),`
`,e.jsx(n.hr,{}),`
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
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"how-to-send-money",children:"How to Send Money"}),`
`,e.jsxs(n.p,{children:["Follow the steps below to create a remittance transaction. The same flow applies to ",e.jsx(n.strong,{children:"all supported countries"}),"."]}),`
`,e.jsx(n.h3,{id:"step-by-step-instructions",children:"Step-by-Step Instructions"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Go to ",e.jsx(n.strong,{children:"Balance"})," from the sidebar."]}),`
`,e.jsxs(n.li,{children:["Click to the ",e.jsx(n.strong,{children:"Send"})," button in the pop-over."]}),`
`,e.jsxs(n.li,{children:["Select the ",e.jsx(n.strong,{children:"destination country"})," from the Country dropdown."]}),`
`,e.jsxs(n.li,{children:["In the ",e.jsx(n.strong,{children:"Send Money"})," page, locate the ",e.jsx(n.strong,{children:"Recipient"})," section."]}),`
`,e.jsxs(n.li,{children:["Select an existing ",e.jsx(n.strong,{children:"recipient"})," or create a new one if required."]}),`
`,e.jsxs(n.li,{children:["In the ",e.jsx(n.strong,{children:"Transfer Details"})," section, enter the amount you want to send."]}),`
`,e.jsxs(n.li,{children:["Select the ",e.jsx(n.strong,{children:"send currency"})," (wallet currency)."]}),`
`,e.jsxs(n.li,{children:["Review the ",e.jsx(n.strong,{children:"receiving amount and currency"}),", calculates automatically."]}),`
`,e.jsx(n.li,{children:"Verify all details and confirm the transaction."}),`
`]}),`
`,e.jsx(n.hr,{}),`
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
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"India"}),": Minimum transfer amount is ",e.jsx(n.strong,{children:"500.0000 INR"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Philippines"}),": Minimum transfer amount is ",e.jsx(n.strong,{children:"100.0000 PHP"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"example-limit-messages",children:"Example Limit Messages"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Minimum limit violation (India)"}),`\r
`,e.jsx(n.code,{inline:"true",children:"Minimum transfer amount for India is 500.0000 INR."})]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Minimum limit violation (Philippines)"}),`\r
`,e.jsx(n.code,{inline:"true",children:"Minimum transfer amount for Philippines is 100.0000 PHP."})]}),`
`]}),`
`]}),`
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
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"error-scenarios",children:"Error Scenarios"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Error Code"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"INSUFFICIENT_FUNDS"}),e.jsx(n.td,{children:"Wallet balance is not enough to complete the transfer"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"CORRIDOR_NOT_SUPPORTED"}),e.jsx(n.td,{children:"Selected country or currency pair is not supported"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"RECIPIENT_INVALID"}),e.jsx(n.td,{children:"Selected recipient is invalid or inactive"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"TRANSFER_LIMIT_EXCEEDED"}),e.jsx(n.td,{children:"Transaction exceeds configured minimum or maximum limits"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"environment-notes",children:"Environment Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["This feature is available in both ",e.jsx(n.strong,{children:"Sandbox"})," and ",e.jsx(n.strong,{children:"Production"}),", depending on configuration."]}),`
`,e.jsx(n.li,{children:"Sandbox transactions return predictable responses for testing purposes."}),`
`,e.jsx(n.li,{children:"No real funds are moved in Sandbox."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"summary",children:"Summary"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Send Money"})," page provides a single, consistent flow for creating GPS remittance transactions across multiple countries. By selecting a destination country, recipient, and amount, users can quickly send funds while the system automatically handles currency conversion, limit enforcement, and validation."]})]})}function h(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{o as __filepath,h as default,c as excerpt,d as frontmatter,l as tableOfContents};
//# sourceMappingURL=remittance-verification-1Hp2DrMM.js.map
