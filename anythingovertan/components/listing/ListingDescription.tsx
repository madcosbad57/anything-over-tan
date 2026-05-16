import { PLACEHOLDER_LISTING } from "@/lib/listingPlaceholder";

function RichParagraph({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <p className="mb-5 max-w-[640px] font-serif text-[1.05rem] italic leading-[1.75] text-[var(--ink)] last:mb-0">
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-normal not-italic text-[var(--tan)]">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  );
}

export function ListingDescription() {
  const { description } = PLACEHOLDER_LISTING;

  return (
    <div className="border-b border-[var(--border)] px-6 py-8 sm:px-10">
      <div className="mb-6 flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--ink-3)]">
        <span className="h-px w-[18px] shrink-0 bg-[var(--tan)]" aria-hidden />
        {description.label}
      </div>
      {description.paragraphs.map((p, i) => (
        <RichParagraph key={i} text={p} />
      ))}
    </div>
  );
}
