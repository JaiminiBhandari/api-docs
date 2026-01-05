import type { ZudokuConfig, ZudokuPlugin } from "zudoku";
import { Landingpage } from "./src/Landingpage";
import SignatureGenerator from "./src/SignatureGenerator";

const commonPlugin: ZudokuPlugin = {
  getHead: () => (
    <>
      <link rel="stylesheet" href="/custom-styles.css" />
      <link rel="stylesheet" href="/pagefind/pagefind-ui.css" />
      <script src="/pagefind/pagefind-ui.js" defer></script>
    </>
  ),
  getMdxComponents: () => ({
    SignatureGenerator,
  }),
};

const config: ZudokuConfig = {
  metadata: {
    title: "ARP Digital",
  },

  docs: {
    publishMarkdown: false,
    llms: {
      llmsTxt: false,
      llmsTxtFull: false,
    },
    defaultOptions: {
      copyPage: false,
    },
  },

  site: {
    logo: {
      src: {
        light: "/logo_dark.png",
        dark: "/logo_light.png",
      },
      width: 130,
      alt: "ARP Digital",
    },
    footer: {
      copyright: "Powered by Zudoku",
    },
  },

  plugins: [commonPlugin],

  navigation: [
    {
      type: "link",
      label: "Home",
      to: "/Landingpage",
      icon: "home",
    },

    {
      type: "custom-page",
      path: "/Landingpage",
      element: <Landingpage />,
    },

    // =========================
    // GETTING STARTED (DROPDOWNS)
    // =========================
    {
      type: "category",
      label: "Getting Started",
      icon: "book-open",
      items: [
        // INTRODUCTION DROPDOWN
        {
          type: "category",
          label: "Introduction",
          icon: "info",
          items: [
            {
              type: "doc",
              file: "getting-started",
              label: "Getting Started",
              icon: "user-plus",
            },
            {
              type: "doc",
              file: "authentication",
              label: "Authentication",
              icon: "key",
            },
            {
              type: "doc",
              file: "webhooks",
              label: "Webhooks",
              icon: "webhook",
            },
          ],
        },

        // VERIFICATION DROPDOWN
        {
          type: "category",
          label: "Verification",
          icon: "shield-check",
          items: [
            {
              type: "doc",
              file: "recipient-verification",
              label: "Recipient",
              icon: "users",
            },
            {
              type: "doc",
              file: "remittance-verification",
              label: "Remittance",
              icon: "send",
            },

            // BANK ACCOUNT VERIFICATION (3rd LEVEL)
            {
              type: "category",
              label: "Bank Account",
              icon: "building-2",
              items: [
                {
                  type: "doc",
                  file: "bank-verification-bhd",
                  label: "BHD - Bahrain Dinar",
                  // icon: "dollar-sign",
                },
                {
                  type: "doc",
                  file: "bank-verification-sar",
                  label: "SAR - Saudi Riyal",
                  //icon: "saudi-riyal",
                },
                {
                  type: "doc",
                  file: "bank-verification-aed",
                  label: "AED - UAE Dirham",
                  //icon: "dollar-sign",
                },
                {
                  type: "doc",
                  file: "bank-verification-usd",
                  label: "USD - US Dollar",
                  //icon: "dollar-sign",
                },
              ],
            },
          ],
        },
      ],
    },

    // =========================
    // API REFERENCES
    // =========================
    {
      type: "category",
      label: "API References",
      icon: "folder-cog",
      items: [
        {
          type: "link",
          label: "All Endpoints",
          to: "/api-reference",
          icon: "list",
        },
        {
          type: "link",
          label: "Remittance API",
          to: "/remittance-api",
          icon: "dollar-sign",
        },
        {
          type: "link",
          label: "Trade API",
          to: "/trade-api",
          icon: "chart-line",
        },
        {
          type: "link",
          label: "Checkout API",
          to: "/checkout-api",
          icon: "credit-card",
        },
        {
          type: "link",
          label: "Wallet API",
          to: "/wallet-api",
          icon: "wallet",
        },
      ],
    },

    {
      type: "link",
      label: "Remittance API",
      to: "/remittance-api",
      icon: "dollar-sign",
    },
    { type: "link", label: "Trade API", to: "/trade-api", icon: "chart-line" },
    {
      type: "link",
      label: "Checkout API",
      to: "/checkout-api",
      icon: "credit-card",
    },
    { type: "link", label: "Wallet API", to: "/wallet-api", icon: "wallet" },

    // =========================
    // API CATALOG
    // =========================
    {
      type: "link",
      label: "API Catalog",
      to: "/api-catalog",
      icon: "grid",
    },
  ],

  catalogs: {
    path: "api-catalog",
    label: "API Catalog",
  },

  apis: [
    {
      type: "file",
      input: "./schema/remittance-openapi.json",
      path: "remittance-api",
    },
    {
      type: "file",
      input: "./schema/trade-openapi.json",
      path: "trade-api",
    },
    {
      type: "file",
      input: "./schema/checkout-openapi.json",
      path: "checkout-api",
    },
    {
      type: "file",
      input: "./schema/wallet-openapi.json",
      path: "wallet-api",
    },
  ],

  search: {
    type: "pagefind",
  },

  theme: {
    registryUrl: "https://tweakcn.com/r/themes/modern-minimal.json",
  },
};

export default config;
