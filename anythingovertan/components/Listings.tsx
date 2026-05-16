import Link from "next/link";

import { SectionHead } from "./SectionHead";

function CardCarSvg({ gradient }: { gradient: string }) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.04] ${gradient}`}
    >
      <svg width="180" height="65" viewBox="0 0 180 65" fill="rgba(255,255,255,0.12)" aria-hidden>
        <path d="M12 54 L25 34 L52 22 L100 20 L130 24 L155 38 L164 54Z" />
        <circle cx="45" cy="57" r="11" />
        <circle cx="133" cy="57" r="11" />
      </svg>
    </div>
  );
}

const cards = [
  {
    gradient: "bg-[linear-gradient(145deg,#22190e,#170f08)]",
    make: "Honda",
    model: "NSX Type R",
    spec: "1994 · 3.0 V6 · 76,000 mi · Manual",
    price: "£68,000",
    loc: "Yorkshire",
  },
  {
    gradient: "bg-[linear-gradient(145deg,#0e1620,#080f18)]",
    make: "Subaru",
    model: "Impreza STi",
    spec: "2003 · 2.0 Turbo · 94,000 mi · Manual",
    price: "£24,500",
    loc: "Leeds",
  },
  {
    gradient: "bg-[linear-gradient(145deg,#1a1510,#201810)]",
    make: "Porsche",
    model: "944 Turbo",
    spec: "1987 · 2.5 Turbo · 88,000 mi · Manual",
    price: "£18,000",
    loc: "London",
  },
] as const;

export function Listings() {
  return (
    <section className="aot-fade-up-short aot-fade-up--d3 border-b border-[var(--border)]">
      <SectionHead
        title="Latest listings"
        linkHref="/listings"
        linkLabel="View all listings"
      />
      <ul className="grid md:grid-cols-3">
        {cards.map((c) => (
          <li
            key={c.model}
            className="group cursor-pointer border-b border-[var(--border)] transition-colors last:border-b-0 hover:bg-[var(--cream)] md:border-b-0 md:border-r md:last:border-r-0"
          >
            <Link href="/listings" className="block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <CardCarSvg gradient={c.gradient} />
                <span className="absolute left-2.5 top-2.5 bg-[var(--paper)] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--ink)]">
                  For sale
                </span>
              </div>
              <div className="px-5 py-[1.1rem]">
                <div className="mb-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--ink-3)]">
                  {c.make}
                </div>
                <div className="mb-1.5 font-serif text-2xl italic leading-[1.05] text-[var(--ink)]">
                  {c.model}
                </div>
                <div className="mb-4 font-mono text-[10px] text-[var(--ink-3)]">{c.spec}</div>
                <div className="flex items-baseline justify-between border-t border-[var(--border)] pt-[0.85rem]">
                  <span className="font-condensed text-xl font-bold text-[var(--ink)]">{c.price}</span>
                  <span className="font-mono text-[9px] text-[var(--ink-3)]">{c.loc}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
