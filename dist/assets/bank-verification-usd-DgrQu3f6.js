import{J as i,j as e}from"./entry.client-BmU5zPXR.js";const c="The Testing Accounts documentation provides standardized mock bank account details that enable developers to fully test payment workflows in the Sandbox environment without using real bank accounts or funds. This follows the same principle as PSP test cards (for example, 4242 4242 4242 4242) and ensures deterministic, repeatable test outcomes.",d=[{depth:1,value:"Bank Account Verification for USD (US Dollar)",id:"bank-account-verification-for-usd-us-dollar",children:[{depth:2,value:"Overview",id:"overview"},{depth:2,value:"How to Use Testing Accounts",id:"how-to-use-testing-accounts"},{depth:2,value:"Supported Test Scenarios",id:"supported-test-scenarios"},{depth:2,value:"Accepted Testing Accounts for USD",id:"accepted-testing-accounts-for-usd"},{depth:2,value:"SWIFT/BIC and IBAN – Quick Reference",id:"swiftbic-and-iban--quick-reference",children:[{depth:3,value:"SWIFT / BIC Code",id:"swift--bic-code"},{depth:3,value:"IBAN (International Bank Account Number)",id:"iban-international-bank-account-number"},{depth:3,value:"Testing Account Table",id:"testing-account-table"}]},{depth:2,value:"Error Code Mapping",id:"error-code-mapping",children:[{depth:3,value:"Notes",id:"notes"}]},{depth:2,value:"Entity Coverage",id:"entity-coverage"},{depth:2,value:"Important Notes",id:"important-notes"},{depth:2,value:"Summary",id:"summary"}]}],o={lastModifiedTime:"2026-01-01T12:36:52.000Z"},a="pages\\bank-verification-usd.md";function s(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"bank-account-verification-for-usd-us-dollar",children:"Bank Account Verification for USD (US Dollar)"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Testing Accounts"})," documentation provides standardized mock bank account details that enable developers to fully test payment workflows in the ",e.jsx(n.strong,{children:"Sandbox environment"})," without using real bank accounts or funds. This follows the same principle as PSP test cards (for example, ",e.jsx(n.code,{inline:"true",children:"4242 4242 4242 4242"}),") and ensures deterministic, repeatable test outcomes."]}),`
`,e.jsxs(n.p,{children:["Testing accounts support end-to-end validation of ",e.jsx(n.strong,{children:"deposits, withdrawals, payouts, and bank account validations"})," across all supported corridors and for both ",e.jsx(n.strong,{children:"individual"})," and ",e.jsx(n.strong,{children:"business"})," entities, specifically tailored for USD transactions."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"how-to-use-testing-accounts",children:"How to Use Testing Accounts"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Switch your environment to ",e.jsx(n.strong,{children:"Sandbox"}),"."]}),`
`,e.jsx(n.li,{children:"Go to Bank Accounts section from Sidebar."}),`
`,e.jsx(n.li,{children:"Choose the currency for the bank account."}),`
`,e.jsx(n.li,{children:"Select the country code that matches the chosen currency."}),`
`,e.jsx(n.li,{children:"Enter the beneficiary name  provided in the testing account table."}),`
`,e.jsx(n.li,{children:"Enter the bank name provided in the testing account table."}),`
`,e.jsx(n.li,{children:"Enter account number provided in the testing account table."}),`
`,e.jsx(n.li,{children:"Enter the SWIFT / BIC code exactly as shown in the testing account table."}),`
`,e.jsx(n.li,{children:"Enter the IBAN from the testing account details."}),`
`,e.jsx(n.li,{children:"Save and submit the bank account details."}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note : Click here to show Testing Account Table : 👉 ",e.jsx(n.strong,{children:e.jsx(n.a,{href:"#testing-account-table",children:"Testing Account Table"})})]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"supported-test-scenarios",children:"Supported Test Scenarios"}),`
`,e.jsx(n.p,{children:"Testing accounts are configured to return predictable outcomes:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Scenario"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Typical Use Case"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Success"}),e.jsx(n.td,{children:"Transaction completes successfully"}),e.jsx(n.td,{children:"Happy-path testing"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Failure"}),e.jsx(n.td,{children:"Transaction is rejected with a fixed error code"}),e.jsx(n.td,{children:"Error handling and retries"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Pending"}),e.jsx(n.td,{children:"Transaction remains pending before final resolution"}),e.jsx(n.td,{children:"Async processing and polling"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accepted-testing-accounts-for-usd",children:"Accepted Testing Accounts for USD"}),`
`,e.jsxs(n.p,{children:["The following testing accounts are ",e.jsx(n.strong,{children:"always accepted in Sandbox"})," for SAR-related transactions. These values can be reused across test runs and automated test suites."]}),`
`,e.jsx(n.h2,{id:"swiftbic-and-iban--quick-reference",children:"SWIFT/BIC and IBAN – Quick Reference"}),`
`,e.jsx(n.h3,{id:"swift--bic-code",children:"SWIFT / BIC Code"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"SWIFT"})," (Society for Worldwide Interbank Financial Telecommunication) or ",e.jsx(n.strong,{children:"BIC"})," (Bank Identifier Code) is used to identify a specific bank in international transactions."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Length: ",e.jsx(n.strong,{children:"8 or 11 characters"})]}),`
`,e.jsxs(n.li,{children:["Example: ",e.jsx(n.code,{inline:"true",children:"DEUTDEFF"})," or ",e.jsx(n.code,{inline:"true",children:"DEUTDEFF500"})]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"SWIFT and BIC refer to the same code and can be used interchangeably."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"iban-international-bank-account-number",children:"IBAN (International Bank Account Number)"}),`
`,e.jsxs(n.p,{children:["An ",e.jsx(n.strong,{children:"IBAN"})," uniquely identifies an individual bank account across national borders."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Length: ",e.jsx(n.strong,{children:"Up to 34 alphanumeric characters"})]}),`
`,e.jsxs(n.li,{children:["Example: ",e.jsx(n.code,{inline:"true",children:"DE89 3704 0044 0532 0130 00"})]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"The IBAN helps reduce errors and ensures faster, more accurate payment processing."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"testing-account-table",children:"Testing Account Table"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Use these values to create ",e.jsx(n.strong,{children:"dummy bank accounts"})," and validate your integration without using real banking information."]}),`
`]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Entity Type"}),e.jsx(n.th,{children:"Currency"}),e.jsx(n.th,{children:"Country Code"}),e.jsx(n.th,{children:"Beneficiary Name"}),e.jsx(n.th,{children:"Bank Name"}),e.jsx(n.th,{children:"Account Number"}),e.jsx(n.th,{children:"SWIFT / BIC"}),e.jsx(n.th,{children:"IBAN"}),e.jsx(n.th,{children:"Expected Result"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Individual"}),e.jsx(n.td,{children:"USD"}),e.jsx(n.td,{children:"USA"}),e.jsx(n.td,{children:"Test US Individual"}),e.jsx(n.td,{children:"JPMorgan Chase"}),e.jsx(n.td,{children:"5000000001"}),e.jsx(n.td,{children:"TESTUS33"}),e.jsx(n.td,{children:"US00TEST00000001"}),e.jsx(n.td,{children:"Success"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Business"}),e.jsx(n.td,{children:"USD"}),e.jsx(n.td,{children:"USA"}),e.jsx(n.td,{children:"Test US Business"}),e.jsx(n.td,{children:"JPMorgan Chase"}),e.jsx(n.td,{children:"5000000002"}),e.jsx(n.td,{children:"TESTUS99"}),e.jsx(n.td,{children:"US00TEST00000002"}),e.jsx(n.td,{children:"Failure"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"error-code-mapping",children:"Error Code Mapping"}),`
`,e.jsxs(n.p,{children:["In the ",e.jsx(n.strong,{children:"Sandbox environment"}),", validation errors are returned based on specific bank account input fields. The table below explains which field causes which error and under what condition."]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Field Name"}),e.jsx(n.th,{children:"Error Code"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Currency"}),e.jsx(n.td,{children:"CORRIDOR_NOT_SUPPORTED"}),e.jsx(n.td,{children:"The selected currency is not supported for the chosen country in Sandbox"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Country Code"}),e.jsx(n.td,{children:"CORRIDOR_NOT_SUPPORTED"}),e.jsx(n.td,{children:"The country code does not match the selected currency"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Beneficiary Name"}),e.jsx(n.td,{children:"BENEFICIARY_BLOCKED"}),e.jsx(n.td,{children:"The beneficiary name is configured as blocked in Sandbox testing data"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Bank Name"}),e.jsx(n.td,{children:"BANK_ACCOUNT_INVALID"}),e.jsx(n.td,{children:"The bank name does not match the testing account table"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Account Number"}),e.jsx(n.td,{children:"BANK_ACCOUNT_INVALID"}),e.jsx(n.td,{children:"The account number is invalid or does not match testing data"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"SWIFT / BIC"}),e.jsx(n.td,{children:"BANK_ACCOUNT_INVALID"}),e.jsx(n.td,{children:"The SWIFT/BIC code is incorrect, incomplete, or not listed in test data"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"IBAN"}),e.jsx(n.td,{children:"BANK_ACCOUNT_INVALID"}),e.jsx(n.td,{children:"The IBAN is invalid or does not match the testing account details"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Account Balance"}),e.jsx(n.td,{children:"INSUFFICIENT_FUNDS"}),e.jsx(n.td,{children:"The testing account is configured to simulate insufficient funds"})]})]})]}),`
`,e.jsx(n.h3,{id:"notes",children:"Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["All validations apply ",e.jsx(n.strong,{children:"only in Sandbox"}),"."]}),`
`,e.jsxs(n.li,{children:["Field values must match the ",e.jsx(n.strong,{children:"Testing Account Table exactly"}),"."]}),`
`,e.jsx(n.li,{children:"Any mismatch results in a deterministic error code suitable for automated testing."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"entity-coverage",children:"Entity Coverage"}),`
`,e.jsx(n.p,{children:"Testing accounts are provided for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Individuals"}),": Personal bank accounts"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Businesses"}),": Corporate or merchant accounts"]}),`
`]}),`
`,e.jsx(n.p,{children:"Ensure the entity type in your API request matches the entity type defined for the testing account."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"important-notes",children:"Important Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Testing accounts function ",e.jsx(n.strong,{children:"only in Sandbox"}),"."]}),`
`,e.jsx(n.li,{children:"Do not use these values in production."}),`
`,e.jsx(n.li,{children:"Real bank accounts are not supported in Sandbox."}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"summary",children:"Summary"}),`
`,e.jsx(n.p,{children:"The Testing Accounts documentation enables safe, comprehensive testing of all payment flows using corridor-specific mock accounts. By providing predictable outcomes and stable error codes, developers can confidently validate integrations before moving to production, specifically for USD transactions."})]})}function l(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{a as __filepath,l as default,c as excerpt,o as frontmatter,d as tableOfContents};
//# sourceMappingURL=bank-verification-usd-DgrQu3f6.js.map
