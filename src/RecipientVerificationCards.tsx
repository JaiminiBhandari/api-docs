// import React from "react";

// type Field = {
//   label: string;
//   value: string;
// };

// type Step = {
//   title: string;
//   fields: Field[];
// };

// type Entity = {
//   type: "INDIVIDUAL" | "BUSINESS";
//   steps: Step[];
// };

// type Country = {
//   name: string;
//   entities: Entity[];
// };

// const COUNTRIES: Country[] = [
//   {
//     name: "India",
//     entities: [
//       {
//         type: "INDIVIDUAL",
//         steps: [
//           {
//             title: "Basic Info",
//             fields: [
//               { label: "Recipient Type", value: "INDIVIDUAL" },
//               { label: "Country", value: "India" },
//             ],
//           },
//           {
//             title: "Personal Details",
//             fields: [
//               { label: "First Name", value: "Rohan" },
//               { label: "Last Name", value: "Sharma" },
//               { label: "Email", value: "rohan.sharma@testmail.com" },
//               { label: "Phone", value: "9876543210" },
//               { label: "City", value: "Mumbai" },
//               { label: "State", value: "Maharashtra" },
//               { label: "Post Code", value: "400001" },
//               { label: "Address", value: "Flat 12B, Andheri East" },
//             ],
//           },
//           {
//             title: "Payment Method",
//             fields: [
//               { label: "Account Number", value: "1234567890" },
//               { label: "IFSC Code", value: "SBIN0001234" },
//               { label: "Bank Name", value: "State Bank of India" },
//               { label: "Account Type", value: "Savings" },
//             ],
//           },
//         ],
//       },
//       {
//         type: "BUSINESS",
//         steps: [
//           {
//             title: "Basic Info",
//             fields: [
//               { label: "Recipient Type", value: "BUSINESS" },
//               { label: "Country", value: "India" },
//             ],
//           },
//           {
//             title: "Personal Details",
//             fields: [
//               { label: "Business Name", value: "ABC Corporation" },
//               { label: "Email", value: "business@testmail.com" },
//               { label: "Phone", value: "9876543210" },
//             ],
//           },
//           {
//             title: "Payment Method",
//             fields: [
//               { label: "Account Number", value: "1234567890" },
//               { label: "IFSC Code", value: "SBIN0001234" },
//               { label: "Bank Name", value: "State Bank of India" },
//             ],
//           },
//         ],
//       },
//     ],
//   },

//   {
//     name: "Philippines",
//     entities: [
//       {
//         type: "INDIVIDUAL",
//         steps: [
//           {
//             title: "Basic Info",
//             fields: [
//               { label: "Recipient Type", value: "INDIVIDUAL" },
//               { label: "Country", value: "Philippines" },
//             ],
//           },
//           {
//             title: "Personal Details",
//             fields: [
//               { label: "First Name", value: "Juan" },
//               { label: "Last Name", value: "Dela Cruz" },
//             ],
//           },
//         ],
//       },
//       {
//         type: "BUSINESS",
//         steps: [
//           {
//             title: "Basic Info",
//             fields: [
//               { label: "Recipient Type", value: "BUSINESS" },
//               { label: "Country", value: "Philippines" },
//             ],
//           },
//           {
//             title: "Personal Details",
//             fields: [
//               { label: "Business Name", value: "XYZ Enterprises" },
//             ],
//           },
//         ],
//       },
//     ],
//   },

//   {
//     name: "Hong Kong",
//     entities: [
//       {
//         type: "INDIVIDUAL",
//         steps: [
//           {
//             title: "Basic Info",
//             fields: [
//               { label: "Recipient Type", value: "INDIVIDUAL" },
//               { label: "Country", value: "Hong Kong" },
//             ],
//           },
//           {
//             title: "Personal Details",
//             fields: [
//               { label: "Legal Full Name", value: "Michael Wei Chan" },
//             ],
//           },
//           {
//             title: "Payment Method",
//             fields: [
//               { label: "Bank Name", value: "HSBC Hong Kong" },
//               { label: "Account Number", value: "123456789" },
//               { label: "Clearing Code", value: "004" },
//             ],
//           },
//         ],
//       },
//       {
//         type: "BUSINESS",
//         steps: [
//           {
//             title: "Personal Details",
//             fields: [
//               { label: "Business Name", value: "Hong Kong Trading Co." },
//             ],
//           },
//         ],
//       },
//     ],
//   },

//   {
//     name: "United Arab Emirates",
//     entities: [
//       {
//         type: "INDIVIDUAL",
//         steps: [
//           {
//             title: "Personal Details",
//             fields: [
//               { label: "Full Name", value: "Ahmed Al-Mansoori" },
//             ],
//           },
//           {
//             title: "Payment Method",
//             fields: [
//               { label: "IBAN", value: "AE070331234567890123456" },
//               { label: "Bank Name", value: "EmiratesNBD" },
//             ],
//           },
//         ],
//       },
//       {
//         type: "BUSINESS",
//         steps: [
//           {
//             title: "Personal Details",
//             fields: [
//               { label: "Business Name", value: "UAE Business Corp" },
//             ],
//           },
//         ],
//       },
//     ],
//   },

//   {
//     name: "Saudi Arabia",
//     entities: [
//       {
//         type: "INDIVIDUAL",
//         steps: [
//           {
//             title: "Personal Details",
//             fields: [
//               { label: "Full Name", value: "Mohammed Al-Saud" },
//             ],
//           },
//           {
//             title: "Payment Method",
//             fields: [
//               { label: "IBAN", value: "SA0380000000608010167519" },
//               { label: "Bank Name", value: "Al-Inma Bank" },
//             ],
//           },
//         ],
//       },
//       {
//         type: "BUSINESS",
//         steps: [
//           {
//             title: "Personal Details",
//             fields: [
//               { label: "Business Name", value: "Saudi Business LLC" },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ];

// export default function RecipientVerificationCards() {
//   return (
//     <div className="space-y-14">
//       {COUNTRIES.map((country) => (
//         <section key={country.name}>
//           <h2 className="mb-6 text-2xl font-semibold text-white">
//             {country.name}
//           </h2>

//           {country.entities.map((entity) => (
//             <div key={entity.type} className="mb-10">
//               <h3 className="mb-4 text-lg text-neutral-300 font-medium">
//                 {entity.type}
//               </h3>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {entity.steps.map((step) => (
//                   <div
//                     key={step.title}
//                     className="rounded-lg border border-neutral-700 bg-neutral-900 p-6"
//                   >
//                     <h4 className="mb-4 font-semibold text-white">
//                       {step.title}
//                     </h4>

//                     <div className="space-y-2 text-sm">
//                       {step.fields.map((field, index) => (
//                         <div
//                           key={index}
//                           className="flex justify-between border-b border-neutral-800 pb-1"
//                         >
//                           <span className="text-neutral-400">
//                             {field.label}
//                           </span>
//                           <span className="text-white text-right">
//                             {field.value}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </section>
//       ))}
//     </div>
//   );
// }


// import React from "react";

// type Field = {
//   label: string;
//   value: string;
// };

// type RecipientVerificationCards = {
//   // title: string;
//   // side: "Front" | "Back";
//   fields: Field[];
// };

// export default function RecipientVerificationCards({
//   // title,
//   // side,
//   fields,
// }: RecipientVerificationCards) {
//   return (
//     <div className="rounded-xl border border-neutral-700 bg-neutral-900 p-6 shadow-sm">
//       <div className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
//         {/* <span className="text-neutral-400">{side}</span> */}
//       </div>

//       <div className="space-y-2 text-sm text-neutral-300">
//         {fields.map((field, index) => (
//           <div
//             key={index}
//             className="flex justify-between gap-4 border-b border-neutral-800 pb-1 last:border-none"
//           >
//             <span className="text-neutral-400">{field.label}</span>
//             <span className="text-white text-right">{field.value}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React from "react";

type Field = {
  label: string;
  value: string;
};

type RecipientVerificationCardsProps = {
  title: string;
  fields: Field[];
};

const RecipientVerificationCards: React.FC<RecipientVerificationCardsProps> = ({
  title,
  fields,
}) => {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900 p-6 shadow-sm">
      <h4 className="mb-4 text-lg font-semibold text-black dark:text-white">{title}</h4>

      <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {fields.map((field, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3"
          >
            <span className="text-sm text-neutral-600 dark:text-neutral-400">
              {field.label}
            </span>
            <span className="text-sm font-medium text-black dark:text-white text-right">
              {field.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipientVerificationCards;
