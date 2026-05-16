import { PLACEHOLDER_LISTING } from "@/lib/listingPlaceholder";

export function ListingSidebar() {
  const { sidebar } = PLACEHOLDER_LISTING;

  return (
    <aside className="flex flex-col gap-0 px-6 py-8 sm:px-8">
      <div className="mb-6 border-b border-[var(--border)] pb-6">
        <div className="mb-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--ink-3)]">
          {sidebar.priceLabel}
        </div>
        <div className="mb-1 font-serif text-5xl italic leading-none text-[var(--ink)]">
          {sidebar.price}
        </div>
        <div className="font-mono text-[10px] text-[var(--ink-3)]">{sidebar.priceNote}</div>
      </div>

      <button
        type="button"
        className="mb-3 w-full bg-[var(--ink)] py-3.5 font-condensed text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--paper)] transition-colors hover:bg-[var(--rust)]"
      >
        Make an enquiry
      </button>
      <button
        type="button"
        className="mb-6 w-full border border-[var(--border-2)] bg-transparent py-3 font-condensed text-xs font-bold uppercase tracking-[0.12em] text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
      >
        Save listing
      </button>

      <div className="mb-6 border border-[var(--border)]">
        {sidebar.quickFacts.map((q) => (
          <div
            key={q.key}
            className="flex items-center justify-between border-b border-[var(--border)] px-[0.85rem] py-2.5 last:border-b-0"
          >
            <span className="font-mono text-[10px] tracking-[0.06em] text-[var(--ink-3)]">
              {q.key}
            </span>
            <span
              className={
                "font-mono text-[11px] font-medium " +
                (q.good ? "text-[var(--green)]" : "text-[var(--ink)]")
              }
            >
              {q.val}
            </span>
          </div>
        ))}
      </div>

      <div className="mb-6 border border-[var(--border)] p-5">
        <div className="mb-4 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--ink-3)]">
          Seller
        </div>
        <div className="mb-4 flex items-center gap-3.5">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--cream)] font-serif text-lg italic text-[var(--ink-2)]">
            {sidebar.seller.initials}
          </div>
          <div>
            <div className="font-condensed text-sm font-bold tracking-[0.04em] text-[var(--ink)]">
              {sidebar.seller.name}
            </div>
            <div className="font-mono text-[10px] text-[var(--ink-3)]">{sidebar.seller.since}</div>
          </div>
        </div>
        <div className="grid grid-cols-2 border border-[var(--border)]">
          <div className="border-r border-[var(--border)] px-3 py-2.5">
            <div className="font-condensed text-lg font-bold text-[var(--ink)]">
              {sidebar.seller.listings}
            </div>
            <div className="font-mono text-[9px] uppercase tracking-[0.08em] text-[var(--ink-3)]">
              Listings
            </div>
          </div>
          <div className="px-3 py-2.5">
            <div className="font-condensed text-lg font-bold text-[var(--ink)]">
              {sidebar.seller.responseRate}
            </div>
            <div className="font-mono text-[9px] uppercase tracking-[0.08em] text-[var(--ink-3)]">
              Response rate
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          className="flex-1 border border-[var(--border)] bg-transparent px-2.5 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--ink-3)] transition-colors hover:border-[var(--ink)] hover:text-[var(--ink)]"
        >
          Share
        </button>
        <button
          type="button"
          className="flex-1 border border-[var(--border)] bg-transparent px-2.5 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--ink-3)] transition-colors hover:border-[var(--ink)] hover:text-[var(--ink)]"
        >
          Copy link
        </button>
        <button
          type="button"
          className="flex-1 border border-[var(--border)] bg-transparent px-2.5 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--ink-3)] transition-colors hover:border-[var(--ink)] hover:text-[var(--ink)]"
        >
          Report
        </button>
      </div>
    </aside>
  );
}
