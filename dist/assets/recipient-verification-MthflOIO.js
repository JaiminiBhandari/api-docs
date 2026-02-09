import{j as e,J as t}from"./entry.client-C2DISYtT.js";const n=({title:a,fields:i})=>e.jsxs("div",{className:"rounded-xl border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900 p-6 shadow-sm",children:[e.jsx("h4",{className:"mb-4 text-lg font-semibold text-black dark:text-white",children:a}),e.jsx("div",{className:"divide-y divide-neutral-200 dark:divide-neutral-800",children:i.map((l,r)=>e.jsxs("div",{className:"flex items-center justify-between py-3",children:[e.jsx("span",{className:"text-sm text-neutral-600 dark:text-neutral-400",children:l.label}),e.jsx("span",{className:"text-sm font-medium text-black dark:text-white text-right",children:l.value})]},r))})]}),o="The Recipient Verification process ensures that all recipients added to the system comply with regulatory, and corridor-specific requirements before they can receive funds through GPS remittance transfers.",c=[{depth:1,value:"Recipient Verification",id:"recipient-verification",children:[{depth:2,value:"Overview",id:"overview"},{depth:2,value:"How to Create a Recipient",id:"how-to-create-a-recipient",children:[{depth:3,value:"Using the API",id:"using-the-api"}]},{depth:2,value:"Recipient Creation Flow",id:"recipient-creation-flow"},{depth:2,value:"Add a new recipient for India",id:"add-a-new-recipient-for-india",children:[{depth:3,value:"Tesing Recipient Record",id:"tesing-recipient-record"}]},{depth:2,value:"Add a new recipient for Philippines",id:"add-a-new-recipient-for-philippines",children:[{depth:3,value:"Testing Recipient Record",id:"testing-recipient-record"}]},{depth:2,value:"Add a new recipient for Hong Kong",id:"add-a-new-recipient-for-hong-kong",children:[{depth:3,value:"Testing Recipient Record",id:"testing-recipient-record-1"}]},{depth:2,value:"Add a new recipient for United Arab Emirates",id:"add-a-new-recipient-for-united-arab-emirates",children:[{depth:3,value:"Testing Recipient Record",id:"testing-recipient-record-2"}]},{depth:2,value:"Add a new recipient for Saudi Arabia",id:"add-a-new-recipient-for-saudi-arabia",children:[{depth:3,value:"Testing Recipient Record",id:"testing-recipient-record-3"}]},{depth:2,value:"Important Notes",id:"important-notes"},{depth:2,value:"Summary",id:"summary"}]}],u={lastModifiedTime:"2026-01-30T07:11:19.943Z"},h="pages\\recipient-verification.mdx";function s(a){const i={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"recipient-verification",children:"Recipient Verification"}),`
`,e.jsx(i.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.strong,{children:"Recipient Verification"})," process ensures that all recipients added to the system comply with regulatory, and corridor-specific requirements before they can receive funds through GPS remittance transfers."]}),`
`,e.jsxs(i.p,{children:["This process is tightly integrated with the ",e.jsx(i.strong,{children:"Create Recipient"})," flow and varies based on the selected ",e.jsx(i.strong,{children:"destination country"}),"."]}),`
`,e.jsx(i.h2,{id:"how-to-create-a-recipient",children:"How to Create a Recipient"}),`
`,e.jsx(i.p,{children:"Creating a recipient is the first step in sending money internationally. Recipients must be verified before they can receive funds, and the verification process varies by destination country."}),`
`,e.jsx(i.h3,{id:"using-the-api",children:"Using the API"}),`
`,e.jsxs(i.p,{children:["To create a recipient, use the ",e.jsx(i.strong,{children:e.jsx(i.a,{href:"/remittance-api/recipients#create-recipient",children:"Create Recipient"})})," API endpoint. This endpoint allows you to add recipients to your sandbox environment."]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"recipient-creation-flow",children:"Recipient Creation Flow"}),`
`,e.jsxs(i.p,{children:["Recipient creation is completed in ",e.jsx(i.strong,{children:"three sequential steps"}),":"]}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.strong,{children:"Basic Info"})}),`
`,e.jsx(i.li,{children:e.jsx(i.strong,{children:"Personal Details"})}),`
`,e.jsx(i.li,{children:e.jsx(i.strong,{children:"Payment Method"})}),`
`]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"Each step must be completed successfully before proceeding to the next."}),`
`]}),`
`,`
`,`
`,e.jsxs(i.h2,{id:"add-a-new-recipient-for-india",children:["Add a new recipient for ",e.jsx(i.strong,{children:"India"})]}),`
`,e.jsx(i.h3,{id:"tesing-recipient-record",children:"Tesing Recipient Record"}),`
`,e.jsx(i.p,{children:"The following Sample data is used for testing purposes only and does not represent a real individual."}),`
`,e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(n,{title:"Basic Info – Individual",fields:[{label:"Recipient Type",value:"INDIVIDUAL"},{label:"Country",value:"India"}]}),e.jsx(n,{title:"Basic Info – Business",fields:[{label:"Recipient Type",value:"BUSINESS"},{label:"Country",value:"India"}]})]}),`
`,e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(n,{title:"Personal Details – Individual",fields:[{label:"First Name",value:"Rohan"},{label:"Last Name",value:"Sharma"},{label:"Email",value:"rohan.sharma@testmail.com"},{label:"Phone",value:"9876543210"},{label:"City",value:"Mumbai"},{label:"State",value:"Maharashtra"},{label:"Post Code",value:"400001"},{label:"Address",value:"Flat 12B, Andheri East"}]}),e.jsx(n,{title:"Personal Details – Business",fields:[{label:"Business Name",value:"ABC Corporation"},{label:"Email",value:"business@testmail.com"},{label:"Phone",value:"9876543210"}]})]}),`
`,e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:e.jsx(n,{title:"Payment Method",fields:[{label:"Account Number",value:"1234567890"},{label:"IFSC Code",value:"SBIN0001234"},{label:"Bank Name",value:"State Bank of India"},{label:"Account Holder Name",value:"Rohan Sharma"},{label:"Branch",value:"Andheri"},{label:"Account Type",value:"Savings / Current"}]})}),`
`,e.jsxs(i.h2,{id:"add-a-new-recipient-for-philippines",children:["Add a new recipient for ",e.jsx(i.strong,{children:"Philippines"})]}),`
`,e.jsx(i.h3,{id:"testing-recipient-record",children:"Testing Recipient Record"}),`
`,e.jsx(i.p,{children:"The following Sample data is used for testing purposes only and does not represent a real individual."}),`
`,e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(n,{title:"Basic Info – Individual",fields:[{label:"Recipient Type",value:"INDIVIDUAL"},{label:"Country",value:"Philippines"}]}),e.jsx(n,{title:"Basic Info – Business",fields:[{label:"Recipient Type",value:"BUSINESS"},{label:"Country",value:"Philippines"}]})]}),`
`,e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(n,{title:"Personal Details – Individual",fields:[{label:"First Name",value:"Juan"},{label:"Last Name",value:"Dela Cruz"}]}),e.jsx(n,{title:"Personal Details – Business",fields:[{label:"Business Name",value:"XYZ Enterprises"}]})]}),`
`,e.jsx(n,{title:"Payment Method – Philippines",fields:[{label:"Payment Method Type",value:"INSTAPAY / PESONET"},{label:"Destination Bank / E-wallet",value:"BDO Bank"},{label:"Account Number",value:"123456789012"},{label:"Name",value:"Juan Dela Cruz"}]}),`
`,e.jsxs(i.h2,{id:"add-a-new-recipient-for-hong-kong",children:["Add a new recipient for ",e.jsx(i.strong,{children:"Hong Kong"})]}),`
`,e.jsx(i.h3,{id:"testing-recipient-record-1",children:"Testing Recipient Record"}),`
`,e.jsx(i.p,{children:"The following Sample data is used for testing purposes only and does not represent a real individual."}),`
`,e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(n,{title:"Basic Info – Individual",fields:[{label:"Recipient Type",value:"INDIVIDUAL"},{label:"Country",value:"Hong Kong"}]}),e.jsx(n,{title:"Basic Info – Business",fields:[{label:"Recipient Type",value:"BUSINESS"},{label:"Country",value:"Hong Kong"}]})]}),`
`,e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(n,{title:"Personal Details – Individual",fields:[{label:"First Name",value:"Michael"},{label:"Middle Name",value:"Wei"},{label:"Last Name",value:"Chan"},{label:"Legal Full Name",value:"Michael Wei Chan"}]}),e.jsx(n,{title:"Personal Details – Business",fields:[{label:"Business Name",value:"Hong Kong Trading Co."}]})]}),`
`,e.jsx(n,{title:"Payment Method – Hong Kong",fields:[{label:"Account Number",value:"123456789"},{label:"Bank Name",value:"HSBC Hong Kong"},{label:"Clearing Code",value:"004"},{label:"Street",value:"Queens Road Central"},{label:"City",value:"Central"},{label:"Postal Code",value:"999077"}]}),`
`,e.jsxs(i.h2,{id:"add-a-new-recipient-for-united-arab-emirates",children:["Add a new recipient for ",e.jsx(i.strong,{children:"United Arab Emirates"})]}),`
`,e.jsx(i.h3,{id:"testing-recipient-record-2",children:"Testing Recipient Record"}),`
`,e.jsx(i.p,{children:"The following Sample data is used for testing purposes only and does not represent a real individual."}),`
`,e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(n,{title:"Basic Info – Individual",fields:[{label:"Recipient Type",value:"INDIVIDUAL"},{label:"Country",value:"UAE"}]}),e.jsx(n,{title:"Basic Info – Business",fields:[{label:"Recipient Type",value:"BUSINESS"},{label:"Country",value:"UAE"}]})]}),`
`,e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(n,{title:"Personal Details – Individual",fields:[{label:"Full Name",value:"Ahmed Al-Mansoori"}]}),e.jsx(n,{title:"Personal Details – Business",fields:[{label:"Business Name",value:"UAE Business Corp"}]})]}),`
`,e.jsx(n,{title:"Payment Method – UAE",fields:[{label:"Full Name",value:"Ahmed Al-Mansoori"},{label:"IBAN",value:"AE070331234567890123456"},{label:"Bank Name",value:"Emirates NBD"},{label:"Bank Code",value:"EBILAEADXXX"}]}),`
`,e.jsxs(i.h2,{id:"add-a-new-recipient-for-saudi-arabia",children:["Add a new recipient for ",e.jsx(i.strong,{children:"Saudi Arabia"})]}),`
`,e.jsx(i.h3,{id:"testing-recipient-record-3",children:"Testing Recipient Record"}),`
`,e.jsx(i.p,{children:"The following Sample data is used for testing purposes only and does not represent a real individual."}),`
`,e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(n,{title:"Basic Info – Individual",fields:[{label:"Recipient Type",value:"INDIVIDUAL"},{label:"Country",value:"Saudi Arabia"}]}),e.jsx(n,{title:"Basic Info – Business",fields:[{label:"Recipient Type",value:"BUSINESS"},{label:"Country",value:"Saudi Arabia"}]})]}),`
`,e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(n,{title:"Personal Details – Individual",fields:[{label:"Full Name",value:"Mohammed Al-Saud"}]}),e.jsx(n,{title:"Personal Details – Business",fields:[{label:"Business Name",value:"Saudi Business LLC"}]})]}),`
`,e.jsx(n,{title:"Payment Method – Saudi Arabia",fields:[{label:"Full Name",value:"Mohammed Al-Saud"},{label:"IBAN",value:"SA0380000000608010167519"},{label:"Bank Name",value:"Al-Inma Bank"},{label:"Bank Code",value:"INMA"}]}),`
`,`
`,e.jsx(i.h2,{id:"important-notes",children:"Important Notes"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Sample recipient records work ",e.jsx(i.strong,{children:"only in Sandbox"}),"."]}),`
`,e.jsx(i.li,{children:"Do not use these values in Production."}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"summary",children:"Summary"}),`
`,e.jsx(i.p,{children:"This document provides comprehensive documentation for the Recipient Verification process across multiple international corridors. Key highlights include:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"5 Countries Covered"}),": India, Philippines, Hong Kong, UAE, and Saudi Arabia"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Complete Test Coverage"}),": Basic Info, Personal Details, and Payment Method validations for each country"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Sample Data"}),": Sandbox-ready test data with proper formatting and validation rules"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Country-Specific Requirements"}),": Tailored fields and validation logic for each destination country"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Structured Format"}),": Consistent table-based documentation for easy reference and testing"]}),`
`]})]})}function p(a={}){const{wrapper:i}={...t(),...a.components};return i?e.jsx(i,{...a,children:e.jsx(s,{...a})}):s(a)}export{h as __filepath,p as default,o as excerpt,u as frontmatter,c as tableOfContents};
//# sourceMappingURL=recipient-verification-MthflOIO.js.map
