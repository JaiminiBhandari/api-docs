
import { useState } from "react";

export const API_CATALOG = [
  {
    title: "Remittance API",
    description: "Global remittance and payout APIs.",
    path: "/remittance-api",
  },
  {
    title: "Trade API",
    description: "Trading, quotes, and execution APIs.",
    path: "/trade-api",
  },
  {
    title: "Checkout API",
    description: "Hosted checkout and payment APIs.",
    path: "/checkout-api",
  },
  {
    title: "Wallet API",
    description: "Balances, wallets, deposits, and withdrawals.",
    path: "/wallet-api",
  },
  {
    title: "OTC API",
    description: "Over-the-counter trading APIs for large transactions.",
    path: "/otc-api",
  }
];

export default function ApiCatalog() {
  const [selectedApi, setSelectedApi] = useState(null);

  const displayedApis = selectedApi ? [selectedApi] : API_CATALOG;

  return (
    <div className="flex">
      <nav className="hidden max-w-[calc(var(--side-nav-width)+var(--padding-nav-item))] lg:flex scrollbar flex-col overflow-y-auto shrink-0 text-sm pe-3 ps-4 lg:ps-8 -mx-(--padding-nav-item) pb-[8vh] pt-(--padding-content-top) scroll-pt-2 gap-1 -mt-2.5" style={{ maskImage: "linear-gradient(180deg, transparent 1%, rgba(0, 0, 0, 1) 20px, rgba(0, 0, 0, 1) 90%, transparent 99%)" }}>
        <button className="relative flex items-center gap-2 px-(--padding-nav-item) my-0.5 py-1.5 rounded-lg hover:bg-accent tabular-nums bg-accent font-medium active" onClick={() => setSelectedApi(null)}>
          <span className="truncate flex-1" title="Overview">Overview</span>
          <span className="flex items-center duration-200 transition-opacity text-center uppercase text-[0.65rem] leading-5 font-bold dark:text-zinc-50 h-full px-3 border border-border rounded-md text-foreground">{API_CATALOG.length}</span>
        </button>
        <div data-state="open" className="flex flex-col">
          <div className="group relative flex items-center gap-2 px-(--padding-nav-item) my-0.5 py-1.5 rounded-lg tabular-nums text-foreground/80 group text-start font-medium cursor-default">
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-2 w-full">General</div>
            </div>
          </div>
          <div data-state="open" id="radix-general" className="ms-6 my-1">
            <ul className="relative after:absolute after:-start-(--padding-nav-item) after:translate-x-[1.5px] after:top-0 after:bottom-0 after:w-px after:bg-border">
              {API_CATALOG.map((api) => (
                <button key={api.title} className="relative flex items-center gap-2 px-(--padding-nav-item) my-0.5 py-1.5 rounded-lg hover:bg-accent tabular-nums text-foreground/80 w-full text-left" onClick={() => setSelectedApi(api)}>
                  <span className="truncate flex-1" title={api.title}>{api.title}</span>
                  <span className="flex items-center duration-200 transition-opacity text-center uppercase text-[0.65rem] leading-5 font-bold dark:text-zinc-50 h-full px-3 border border-border rounded-md text-foreground">1</span>
                </button>
              ))}
            </ul>
          </div>
        </div>
      
      </nav>

      <main data-pagefind-body="true" className="px-4 lg:pe-8 lg:px-8">
        <section className="pt-(--padding-content-top)">
          <div className="w-250">
            <h2 className="group relative text-2xl font-bold">API Catalog{selectedApi ? ` - ${selectedApi.title}` : ''}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {displayedApis.map((api) => (
                <a key={api.title} className="no-underline hover:text-foreground!" href={api.path} data-discover="true">
                  <div className="border h-full rounded-lg p-4 flex flex-col gap-2 cursor-pointer hover:bg-border/20 font-normal">
                    <span className="font-semibold">{api.title}</span>
                    <div className="prose dark:prose-invert prose-neutral typography text-sm whitespace-pre-wrap mb-6 line-clamp-2">
                      <p>{api.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

<ApiCatalog />