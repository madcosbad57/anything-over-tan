import Link from "next/link";

import { PLACEHOLDER_LISTING } from "@/lib/listingPlaceholder";

function CardSvg() {
  return (
    <svg width="160" height="58" viewBox="0 0 180 65" fill="rgba(255,255,255,0.12)" aria-hidden>
      <path d="M10 54 L22 30 L58 18 L105 16 L135 22 L158 38 L166 54Z" />
      <circle cx="47" cy="57" r="11" />
      <circle cx="138" cy="57" r="11" />
    </svg>
  );
}

function CardSvg2() {
  return (
    <svg width="160" height="58" viewBox="0 0 180 65" fill="rgba(255,255,255,0.12)" aria-hidden>
      <path d="M12 54 L25 34 L52 22 L100 20 L130 24 L155 38 L164 54Z" />
      <circle cx="45" cy="57" r="11" />
      <circle cx="133" cy="57" r="11" />
    </svg>
  );
}

function CardSvg3() {
  return (
    <svg width="160" height="58" viewBox="0 0 180 65" fill="rgba(255,255,255,0.12)" aria-hidden>
      <path d="M15 54 L28 32 L60 20 L96 18 L126 22 L152 36 L162 54Z" />
      <circle cx="50" cy="57" r="11" />
      <circle cx="130" cy="57" r="11" />
    </svg>
  );
}

const cardSvgs = [<CardSvg key="a" />, <CardSvg2 key="b" />, <CardSvg3 key="c" />];

export function ListingRelated() {
  const { related } = PLACEHOLDER_LISTING;

  return (
    <section className="aot-fade-up-short aot-fade-up--d4 border-b border-[var(--border)]">
      <div className="flex items-baseline justify-between border-b border-[var(--border)] px-6 py-8 pb-5 sm:px-10">
        <div className="flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--ink-3)]">
          <span className="h-px w-[18px] shrink-0 bg-[var(--tan)]" aria-hidden />
          {related.title}
        </div>
        <Link
          href={related.linkHref}
          className="border-b border-[var(--border)] pb-px font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--ink-3)] transition-colors hover:border-[var(--ink)] hover:text-[var(--ink)]"
        >
          {related.linkLabel}
        </Link>
      </div>
      <ul className="grid md:grid-cols-3">
        {related.cards.map((card, i) => (
          <li
            key={card.model}
            className="group cursor-pointer border-b border-[var(--border)] transition-colors last:border-b-0 hover:bg-[var(--cream)] md:border-b-0 md:border-r md:last:border-r-0"
          >
            <Link href="/listings" className="block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className={`flex h-full w-full items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.04] ${card.gradient}`}
                >
                  {cardSvgs[i]}
                </div>
                <span className="absolute left-2.5 top-2.5 bg-[var(--paper)] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--ink)]">
                  For sale
                </span>
              </div>
              <div className="px-5 py-[1.1rem]">
                <div className="mb-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--ink-3)]">
                  {card.make}
                </div>
                <div className="mb-1.5 font-serif text-[1.4rem] italic leading-[1.05] text-[var(--ink)]">
                  {card.model}
                </div>
                <div className="mb-4 font-mono text-[10px] text-[var(--ink-3)]">{card.spec}</div>
                <div className="flex items-baseline justify-between border-t border-[var(--border)] pt-[0.85rem]">
                  <span className="font-condensed text-xl font-bold text-[var(--ink)]">{card.price}</span>
                  <span className="font-mono text-[9px] text-[var(--ink-3)]">{card.loc}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
