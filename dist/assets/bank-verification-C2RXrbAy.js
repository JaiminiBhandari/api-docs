import{J as i,j as n}from"./entry.client-C2DISYtT.js";const d="E # Bank Account Verification",c=[{depth:2,value:"Overview",id:"overview"},{depth:2,value:"How to Use Testing Accounts",id:"how-to-use-testing-accounts"},{depth:2,value:"Supported Test Scenarios",id:"supported-test-scenarios"},{depth:2,value:"SWIFT/BIC and IBAN – Quick Reference",id:"swiftbic-and-iban--quick-reference",children:[{depth:4,value:"SWIFT / BIC Code",id:"swift--bic-code"},{depth:4,value:"IBAN (International Bank Account Number)",id:"iban-international-bank-account-number"},{depth:3,value:"Testing Account Table for AED (UAE Dirham)",id:"testing-account-table-for-aed-uae-dirham"},{depth:3,value:"Testing Account Table for BHD (Bahraini Dinar)",id:"testing-account-table-for-bhd-bahraini-dinar"},{depth:3,value:"Testing Account Table for SAR (Saudi Riyal)",id:"testing-account-table-for-sar-saudi-riyal"},{depth:3,value:"Testing Account Table for USD (US Dollar)",id:"testing-account-table-for-usd-us-dollar"},{depth:3,value:"Notes",id:"notes"}]},{depth:2,value:"Entity Coverage",id:"entity-coverage"},{depth:2,value:"Important Notes",id:"important-notes"}],l={lastModifiedTime:"2026-01-12T11:06:36.000Z"},h="pages\\bank-verification.md";function s(t){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"E # Bank Account Verification"}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.strong,{children:"Testing Accounts"})," documentation provides standardized mock bank account details that enable developers to fully test payment workflows in the ",n.jsx(e.strong,{children:"Sandbox environment"})," without using real bank accounts or funds. "]}),`
`,n.jsxs(e.p,{children:["Testing accounts support end-to-end validation of ",n.jsx(e.strong,{children:"deposits, withdrawals, payouts, and bank account validations"})," across all supported corridors and for both ",n.jsx(e.strong,{children:"INDIVIDUAL"})," and ",n.jsx(e.strong,{children:"BUSINESS"})," entities."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"how-to-use-testing-accounts",children:"How to Use Testing Accounts"}),`
`,n.jsx(e.p,{children:"Testing accounts allow you to simulate bank account creation and verification in the sandbox environment without real banking credentials. Follow these steps to integrate and test bank account workflows:"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Select a Testing Account"}),": Choose a testing account from the tables below based on the currency and entity type (INDIVIDUAL or BUSINESS) you want to test. Each table provides standardized mock details for testing."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Create the Bank Account"}),": Use the ",n.jsx(e.strong,{children:n.jsx(e.a,{href:"/wallet-api/bank-accounts#create-bank-account",children:"Create Bank Account"})})," API endpoint to add the testing account to your sandbox wallet. Include the following fields from the selected testing account:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{inline:"true",children:"Entity Type"})}),`
`,n.jsx(e.li,{children:"Currency"}),`
`,n.jsx(e.li,{children:"Country Code"}),`
`,n.jsx(e.li,{children:"Beneficiary Name"}),`
`,n.jsx(e.li,{children:"Bank Name"}),`
`,n.jsx(e.li,{children:"Account Number"}),`
`,n.jsx(e.li,{children:"SWIFT / BIC Code"}),`
`,n.jsx(e.li,{children:"IBAN"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Verify Account Creation"}),": In the sandbox environment, the API will accept the exact values from the testing tables and create the account successfully. Any deviations may result in errors, simulating real-world validation."]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"Note: Testing accounts work only in the Sandbox environment. Do not use these details in Production."}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"supported-test-scenarios",children:"Supported Test Scenarios"}),`
`,n.jsx(e.p,{children:"Testing accounts are configured to return predictable outcomes:"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Scenario"}),n.jsx(e.th,{children:"Description"}),n.jsx(e.th,{children:"Typical Use Case"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Success"}),n.jsx(e.td,{children:"Transaction completes successfully"}),n.jsx(e.td,{children:"Happy-path testing"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Failure"}),n.jsx(e.td,{children:"Transaction is rejected with a fixed error code"}),n.jsx(e.td,{children:"Error handling and retries"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Pending"}),n.jsx(e.td,{children:"Transaction remains pending before final resolution"}),n.jsx(e.td,{children:"Async processing"})]})]})]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"swiftbic-and-iban--quick-reference",children:"SWIFT/BIC and IBAN – Quick Reference"}),`
`,n.jsx(e.h4,{id:"swift--bic-code",children:"SWIFT / BIC Code"}),`
`,n.jsxs(e.p,{children:["A ",n.jsx(e.strong,{children:"SWIFT"})," (Society for Worldwide Interbank Financial Telecommunication) or ",n.jsx(e.strong,{children:"BIC"})," (Bank Identifier Code) is used to identify a specific bank in international transactions."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Length: ",n.jsx(e.strong,{children:"8 or 11 characters"})]}),`
`,n.jsxs(e.li,{children:["Example: ",n.jsx(e.code,{inline:"true",children:"DEUTDEFF"})," or ",n.jsx(e.code,{inline:"true",children:"DEUTDEFF500"})]}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"SWIFT and BIC refer to the same code and can be used interchangeably."}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h4,{id:"iban-international-bank-account-number",children:"IBAN (International Bank Account Number)"}),`
`,n.jsxs(e.p,{children:["An ",n.jsx(e.strong,{children:"IBAN"})," uniquely identifies an individual bank account across national borders."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Length: ",n.jsx(e.strong,{children:"Up to 34 alphanumeric characters"})]}),`
`,n.jsx(e.li,{children:"The structure of an IBAN consists of a two-letter country code, which must be in uppercase."}),`
`,n.jsxs(e.li,{children:["Example: ",n.jsx(e.code,{inline:"true",children:"AE89 3704 0044 0532 0130 00"})]}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"The IBAN helps reduce errors and ensures faster, more accurate payment processing."}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"testing-account-table-for-aed-uae-dirham",children:"Testing Account Table for AED (UAE Dirham)"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Use these values to create ",n.jsx(e.strong,{children:"sample bank accounts"})," and validate your integration without using real banking information."]}),`
`]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Entity Type"}),n.jsx(e.th,{children:"Currency"}),n.jsx(e.th,{children:"Country Code"}),n.jsx(e.th,{children:"Beneficiary Name"}),n.jsx(e.th,{children:"Bank Name"}),n.jsx(e.th,{children:"Account Number"}),n.jsx(e.th,{children:"SWIFT / BIC"}),n.jsx(e.th,{children:"IBAN"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"INDIVIDUAL"}),n.jsx(e.td,{children:"AED"}),n.jsx(e.td,{children:"ARE"}),n.jsx(e.td,{children:"Test UAE Individual"}),n.jsx(e.td,{children:"Emirates NBD"}),n.jsx(e.td,{children:"1000000001"}),n.jsx(e.td,{children:"TESTAEAD"}),n.jsx(e.td,{children:"AE00TEST000000000001"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"BUSINESS"}),n.jsx(e.td,{children:"AED"}),n.jsx(e.td,{children:"ARE"}),n.jsx(e.td,{children:"Test UAE Business"}),n.jsx(e.td,{children:"Emirates NBD"}),n.jsx(e.td,{children:"1000000003"}),n.jsx(e.td,{children:"TESTAEAD"}),n.jsx(e.td,{children:"AE00TEST000000000003"})]})]})]}),`
`,n.jsx(e.h3,{id:"testing-account-table-for-bhd-bahraini-dinar",children:"Testing Account Table for BHD (Bahraini Dinar)"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Use these values to create ",n.jsx(e.strong,{children:"sample bank accounts"})," and validate your integration without using real banking information."]}),`
`]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Entity Type"}),n.jsx(e.th,{children:"Currency"}),n.jsx(e.th,{children:"Country Code"}),n.jsx(e.th,{children:"Beneficiary Name"}),n.jsx(e.th,{children:"Bank Name"}),n.jsx(e.th,{children:"Account Number"}),n.jsx(e.th,{children:"SWIFT / BIC"}),n.jsx(e.th,{children:"IBAN"}),n.jsx(e.th,{children:"Expected Result"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"INDIVIDUAL"}),n.jsx(e.td,{children:"BHD"}),n.jsx(e.td,{children:"BHR"}),n.jsx(e.td,{children:"Test Bahrain Individual"}),n.jsx(e.td,{children:"Bank of Bahrain Kuwait"}),n.jsx(e.td,{children:"3000000001"}),n.jsx(e.td,{children:"TESTBHBM"}),n.jsx(e.td,{children:"BH00TEST000000000001"}),n.jsx(e.td,{children:"Success"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"BUSINESS"}),n.jsx(e.td,{children:"BHD"}),n.jsx(e.td,{children:"BHR"}),n.jsx(e.td,{children:"Test Bahrain Business"}),n.jsx(e.td,{children:"Bank of Bahrain Kuwait"}),n.jsx(e.td,{children:"3000000002"}),n.jsx(e.td,{children:"TESTBHBM"}),n.jsx(e.td,{children:"BH00TEST000000000002"}),n.jsx(e.td,{children:"Success"})]})]})]}),`
`,n.jsx(e.h3,{id:"testing-account-table-for-sar-saudi-riyal",children:"Testing Account Table for SAR (Saudi Riyal)"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Use these values to create ",n.jsx(e.strong,{children:"sample bank accounts"})," and validate your integration without using real banking information."]}),`
`]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Entity Type"}),n.jsx(e.th,{children:"Currency"}),n.jsx(e.th,{children:"Country Code"}),n.jsx(e.th,{children:"Beneficiary Name"}),n.jsx(e.th,{children:"Bank Name"}),n.jsx(e.th,{children:"Account Number"}),n.jsx(e.th,{children:"SWIFT / BIC"}),n.jsx(e.th,{children:"IBAN"}),n.jsx(e.th,{children:"Expected Result"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"INDIVIDUAL"}),n.jsx(e.td,{children:"SAR"}),n.jsx(e.td,{children:"SAU"}),n.jsx(e.td,{children:"Test KSA Individual"}),n.jsx(e.td,{children:"Al Rajhi Bank"}),n.jsx(e.td,{children:"2000000001"}),n.jsx(e.td,{children:"TESTSARI"}),n.jsx(e.td,{children:"SA00TEST000000000001"}),n.jsx(e.td,{children:"Success"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"BUSINESS"}),n.jsx(e.td,{children:"SAR"}),n.jsx(e.td,{children:"SAU"}),n.jsx(e.td,{children:"Test KSA Business"}),n.jsx(e.td,{children:"Al Rajhi Bank"}),n.jsx(e.td,{children:"2000000002"}),n.jsx(e.td,{children:"TESTSARI"}),n.jsx(e.td,{children:"SA00TEST000000000002"}),n.jsx(e.td,{children:"Success"})]})]})]}),`
`,n.jsx(e.h3,{id:"testing-account-table-for-usd-us-dollar",children:"Testing Account Table for USD (US Dollar)"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Use these values to create ",n.jsx(e.strong,{children:"sample bank accounts"})," and validate your integration without using real banking information."]}),`
`]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Entity Type"}),n.jsx(e.th,{children:"Currency"}),n.jsx(e.th,{children:"Country Code"}),n.jsx(e.th,{children:"Beneficiary Name"}),n.jsx(e.th,{children:"Bank Name"}),n.jsx(e.th,{children:"Account Number"}),n.jsx(e.th,{children:"SWIFT / BIC"}),n.jsx(e.th,{children:"IBAN"}),n.jsx(e.th,{children:"Expected Result"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"INDIVIDUAL"}),n.jsx(e.td,{children:"USD"}),n.jsx(e.td,{children:"USA"}),n.jsx(e.td,{children:"Test US Individual"}),n.jsx(e.td,{children:"JPMorgan Chase"}),n.jsx(e.td,{children:"5000000001"}),n.jsx(e.td,{children:"TESTUS33"}),n.jsx(e.td,{children:"US00TEST00000001"}),n.jsx(e.td,{children:"Success"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"BUSINESS"}),n.jsx(e.td,{children:"USD"}),n.jsx(e.td,{children:"USA"}),n.jsx(e.td,{children:"Test US Business"}),n.jsx(e.td,{children:"JPMorgan Chase"}),n.jsx(e.td,{children:"5000000002"}),n.jsx(e.td,{children:"TESTUS99"}),n.jsx(e.td,{children:"US00TEST00000002"}),n.jsx(e.td,{children:"Success"})]})]})]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"notes",children:"Notes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["All validations apply ",n.jsx(e.strong,{children:"only in Production"}),"."]}),`
`,n.jsxs(e.li,{children:["Field values must match the ",n.jsx(e.strong,{children:"Testing Account Table exactly"}),"."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"entity-coverage",children:"Entity Coverage"}),`
`,n.jsx(e.p,{children:"Testing accounts are provided for:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Individuals"}),": Personal bank accounts"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Businesses"}),": Corporate or merchant accounts"]}),`
`]}),`
`,n.jsx(e.p,{children:"Ensure the entity type in your API request matches the entity type defined for the testing account."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"important-notes",children:"Important Notes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Testing accounts function ",n.jsx(e.strong,{children:"only in Sandbox"}),"."]}),`
`,n.jsx(e.li,{children:"Do not use these values in production."}),`
`]}),`
`,n.jsx(e.hr,{})]})}function a(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{h as __filepath,a as default,d as excerpt,l as frontmatter,c as tableOfContents};
//# sourceMappingURL=bank-verification-C2RXrbAy.js.map
