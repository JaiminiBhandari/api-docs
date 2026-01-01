import type {
  ApiIdentity,
  ApiIdentityPlugin,
  ZudokuConfig,
  ZudokuContext,
  ZudokuPlugin,
} from "zudoku";
import { Landingpage } from "./src/Landingpage";
import SignatureGenerator from "./src/SignatureGenerator";

const commonPlugin: ZudokuPlugin = {
  initialize: async (context) => {
    /* ... */
  },
  getHead: () => (
    <>
      <link rel="stylesheet" href="/custom-styles.css" />
      <link rel="stylesheet" href="/pagefind/pagefind-ui.css" />
      <script src="/pagefind/pagefind-ui.js" defer></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              function initPagefind(){
                if (typeof window === 'undefined') return;
                if (window.PagefindUI) {
                  try { new window.PagefindUI({ element: "#search" }); } catch(e){ console.error(e); }
                  return true;
                }
                return false;
              }
              if (document.readyState !== 'loading') initPagefind();
              else window.addEventListener('DOMContentLoaded', initPagefind);
            })();
          `,
        }}
      />
    </>
  ),
  getMdxComponents: () => ({
    SignatureGenerator,
  }),
};

const config: ZudokuConfig = {
  protectedRoutes: [],
  metadata: {
    title: "ARP Digital.",
  },
docs: {
  publishMarkdown: false,
  llms: { llmsTxt: false, llmsTxtFull: false },
  defaultOptions: {
    copyPage: false,
  },
},


  site: {
    logo: {
      src: { light: "/logo_dark.png", dark: "/logo_light.png" },
      width: 130,
      alt: "ARP Digital",
    },
    banner: {
      message: (
        <div className="text-center">
          Explore the latest ARP Digital API Documentation!
        </div>
      ),
      dismissible: true,
    },
    footer: {
      columns: [
        {
          title: "Resources",
          links: [
            { label: "API Reference", href: "/" },
            { label: "Status", href: "/" },
            { label: "Support", href: "/" },
          ],
        },
        {
          title: "Legal",
          links: [
            { label: "Privacy", href: "/" },
            { label: "Terms", href: "/" },
            { label: "Security", href: "/" },
          ],
        },
      ],
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

    {
      type: "category",
      label: "Getting Started",
      icon: "book-open",
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

    {
      type: "link",
      label: "API Catalog",
      to: "/api-catalog",
      icon: "grid",
    },

    // {
    //   type: "custom-page",
    //   path: "/api-catalog",
    //   element: <ApiCatalog />,
    // },
    // {
    //   type: "category",
    //   label: "API Catalog",
    //   icon: "layers",
    //   items: [
    //     {
    //       type: "link",
    //       label: "All Endpoints",
    //       to: "/api-catalog",
        
    //     },
    //     {
    //       type: "link",
    //       label: "Remittance API",
    //       to: "/remittance-api",
          
    //     },
    //     {
    //       type: "link",
    //       label: "Trade API",
    //       to: "/trade-api",
      
    //     },
    //     {
    //       type: "link",
    //       label: "Checkout API",
    //       to: "/checkout-api",
        
    //     },
    //     {
    //       type: "link",
    //       label: "Wallet API",
    //       to: "/wallet-api",
    
    //     },
    //   ],
    // },

  ],
  catalogs: {
    path: "api-catalog",
    label: "API Catalog",
  },
  defaults: {
    apis: {
      examplesLanguage: "js",
    },
  },
  search: {
    type: "pagefind",
  },
  // redirects: [{ from: "/", to: "/Landingpage" }],

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
  theme: {
    registryUrl: "https://tweakcn.com/r/themes/modern-minimal.json",
  },
};

export default config;
