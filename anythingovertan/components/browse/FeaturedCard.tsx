import Link from "next/link";

import type { FeaturedListing } from "@/lib/browsePlaceholder";

function FeaturedCarSvg() {
  return (
    <svg width="220" height="80" viewBox="0 0 220 80" fill="rgba(255,255,255,0.1)" aria-hidden>
      <path d="M15 62 L30 40 L65 26 L120 24 L155 28 L185 44 L200 62Z" />
      <circle cx="58" cy="66" r="14" />
      <circle cx="162" cy="66" r="14" />
    </svg>
  );
}

export type FeaturedCardProps = {
  listing: FeaturedListing;
  viewMode: "grid" | "list";
};

export function FeaturedCard({ listing, viewMode }: FeaturedCardProps) {
  const href = `/listings/${listing.id}`;
  const innerGrid =
    viewMode === "list" ? "grid grid-cols-1" : "grid grid-cols-1 lg:grid-cols-2";

  return (
    <div
      className={
        "group relative overflow-hidden rounded-[10px] border border-[var(--border)] bg-[var(--paper)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-2)] hover:shadow-[0_4px_24px_rgba(30,26,22,0.1)] " +
        (viewMode === "list" ? "col-span-1" : "col-span-1 lg:col-span-2")
      }
    >
      <Link href={href} className="absolute inset-0 z-[1]" aria-label={`${listing.make} ${listing.model}`} />
      <div className={`pointer-events-none relative z-[2] ${innerGrid}`}>
        <div className="relative min-h-[240px] overflow-hidden lg:aspect-auto lg:h-full">
          <div
            className={`flex h-full min-h-[240px] w-full items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.04] ${listing.gradientClass}`}
          >
            <FeaturedCarSvg />
          </div>
          <span className="absolute left-2.5 top-2.5 bg-[var(--tan)] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--paper)]">
            Featured
          </span>
          <button
            type="button"
            className="pointer-events-auto absolute right-2.5 top-2.5 z-[3] flex size-7 items-center justify-center border-0 bg-[rgba(242,239,232,0.85)] text-[13px] transition-colors hover:bg-[var(--paper)]"
            aria-label="Save listing"
            onClick={(e) => e.preventDefault()}
          >
            ♡
          </button>
        </div>
        <div className="flex flex-col justify-between p-6">
          <div>
            <div className="mb-2 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--tan)]">
              <span className="h-px w-3.5 bg-[var(--tan)]" aria-hidden />
              {listing.featuredLabel}
            </div>
            <div className="mb-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--ink-3)]">
              {listing.make}
            </div>
            <div className="mb-2 font-serif text-[1.75rem] font-normal italic leading-[1.05] text-[var(--ink)] lg:text-[1.75rem]">
              {listing.model}
            </div>
            <div className="mb-4 font-mono text-[11px] leading-[1.7] text-[var(--ink-3)]">
              {listing.spec}
              <br />
              <br />
              {listing.description}
            </div>
            <div className="mb-4 flex flex-wrap gap-1.5">
              {listing.tags.map((t) => (
                <span
                  key={t}
                  className="border border-[var(--border)] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.08em] text-[var(--ink-3)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-[var(--border)] pt-[0.85rem]">
            <span className="font-condensed text-2xl font-bold text-[var(--ink)]">{listing.price}</span>
            <span className="font-mono text-[9px] text-[var(--ink-3)]">{listing.loc}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
