import Link from "next/link";

import type { BrowseListing } from "@/lib/browsePlaceholder";

function CardCarSvg({ variant }: { variant: 0 | 1 | 2 }) {
  if (variant === 0) {
    return (
      <svg width="160" height="58" viewBox="0 0 180 65" fill="rgba(255,255,255,0.1)" aria-hidden>
        <path d="M10 54 L22 30 L58 18 L105 16 L135 22 L158 38 L166 54Z" />
        <circle cx="47" cy="57" r="11" />
        <circle cx="138" cy="57" r="11" />
      </svg>
    );
  }
  if (variant === 1) {
    return (
      <svg width="160" height="58" viewBox="0 0 180 65" fill="rgba(255,255,255,0.1)" aria-hidden>
        <path d="M12 54 L25 34 L52 22 L100 20 L130 24 L155 38 L164 54Z" />
        <circle cx="45" cy="57" r="11" />
        <circle cx="133" cy="57" r="11" />
      </svg>
    );
  }
  return (
    <svg width="160" height="58" viewBox="0 0 180 65" fill="rgba(255,255,255,0.1)" aria-hidden>
      <path d="M15 54 L28 32 L60 20 L96 18 L126 22 L152 36 L162 54Z" />
      <circle cx="50" cy="57" r="11" />
      <circle cx="130" cy="57" r="11" />
    </svg>
  );
}

export type ListingCardProps = {
  listing: BrowseListing;
  carSvgVariant?: 0 | 1 | 2;
};

export function ListingCard({ listing, carSvgVariant = 0 }: ListingCardProps) {
  const v = carSvgVariant;
  const href = `/listings/${listing.id}`;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[10px] border border-[var(--border)] bg-[var(--paper)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-2)] hover:shadow-[0_4px_20px_rgba(30,26,22,0.08)]">
      <Link href={href} className="absolute inset-0 z-[1]" aria-label={`${listing.make} ${listing.model}`} />
      <div className="pointer-events-none relative z-[2] flex flex-1 flex-col">
        <div className="relative aspect-[4/3] overflow-hidden">
          <div
            className={`flex h-full w-full items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.04] ${listing.gradientClass}`}
          >
            <CardCarSvg variant={v} />
          </div>
          {listing.badge === "new" ? (
            <span className="absolute left-2.5 top-2.5 bg-[var(--tan)] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--paper)]">
              New
            </span>
          ) : listing.badge === "for-sale" ? (
            <span className="absolute left-2.5 top-2.5 bg-[var(--paper)] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--ink)]">
              For sale
            </span>
          ) : null}
          <button
            type="button"
            className="pointer-events-auto absolute right-2.5 top-2.5 z-[3] flex size-7 items-center justify-center border-0 bg-[rgba(242,239,232,0.85)] text-[13px] transition-colors hover:bg-[var(--paper)]"
            aria-label="Save listing"
            onClick={(e) => e.preventDefault()}
          >
            ♡
          </button>
        </div>
        <div className="flex flex-1 flex-col px-[1.1rem] pb-4 pt-4">
          <div className="mb-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--ink-3)]">
            {listing.make}
          </div>
          <div className="mb-1.5 font-serif text-[1.35rem] italic leading-[1.05] text-[var(--ink)]">
            {listing.model}
          </div>
          <div className="mb-3.5 flex-1 font-mono text-[10px] text-[var(--ink-3)]">{listing.spec}</div>
          <div className="mb-3.5 flex flex-wrap gap-1.5">
            {listing.tags.map((t) => (
              <span
                key={t}
                className="border border-[var(--border)] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.08em] text-[var(--ink-3)]"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-[var(--border)] pt-[0.85rem]">
            <span className="font-condensed text-xl font-bold text-[var(--ink)]">{listing.price}</span>
            <span className="font-mono text-[9px] text-[var(--ink-3)]">{listing.loc}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
