import { PLACEHOLDER_LISTING } from "@/lib/listingPlaceholder";

export function ListingTitleBlock() {
  const { titleBlock } = PLACEHOLDER_LISTING;

  return (
    <div className="border-b border-[var(--border)] px-6 pb-8 pt-10 sm:px-10">
      <div className="mb-1.5 flex flex-wrap items-center gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-3)]">
        <span>{titleBlock.makeYear}</span>
        <span className="bg-[var(--green)] px-2 py-0.5 text-[9px] tracking-[0.1em] text-white">
          {titleBlock.status}
        </span>
      </div>
      <h1 className="mb-4 font-serif text-[clamp(2.5rem,4vw,3.75rem)] font-normal italic leading-[0.95] tracking-[-0.02em] text-[var(--ink)]">
        {titleBlock.title}
      </h1>
      <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-[var(--ink-2)]">
        {titleBlock.subtitles.map((s, i) => (
          <span
            key={s}
            className={
              "inline-flex items-center gap-1.5 " +
              (i > 0 ? "before:mr-0 before:text-[var(--border-2)] before:content-['·']" : "")
            }
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
