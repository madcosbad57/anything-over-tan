import { PLACEHOLDER_LISTING } from "@/lib/listingPlaceholder";

export function ListingHistory() {
  const { history } = PLACEHOLDER_LISTING;

  return (
    <div className="border-b border-[var(--border)] px-6 py-8 sm:px-10">
      <div className="mb-6 flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--ink-3)]">
        <span className="h-px w-[18px] shrink-0 bg-[var(--tan)]" aria-hidden />
        {history.label}
      </div>
      <div className="flex flex-col">
        {history.items.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-6 border-b border-[var(--border)] py-4 last:border-b-0"
          >
            <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-[var(--border)] font-mono text-[10px] text-[var(--ink-3)]">
              {item.icon}
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-0.5 font-condensed text-[13px] font-bold uppercase tracking-[0.05em] text-[var(--ink)]">
                {item.title}
              </div>
              <div className="font-mono text-[11px] text-[var(--ink-2)]">{item.desc}</div>
            </div>
            <span
              className={
                "shrink-0 self-center whitespace-nowrap rounded-sm px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] " +
                (item.badge.kind === "check"
                  ? "border border-[var(--green)] text-[var(--green)]"
                  : "border border-[var(--border-2)] text-[var(--ink-3)]")
              }
            >
              {item.badge.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
