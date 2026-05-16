import { BROWSE_META } from "@/lib/browsePlaceholder";

type BrowseHeaderProps = {
  resultCount?: number;
};

export function BrowseHeader({ resultCount = BROWSE_META.totalCount }: BrowseHeaderProps) {
  return (
    <header className="aot-fade-up-short mt-[54px] border-b border-[var(--border)] px-6 pb-6 pt-10 sm:px-10">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="mb-2 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink-3)]">
            <span className="h-px w-[18px] shrink-0 bg-[var(--tan)]" aria-hidden />
            {BROWSE_META.eyebrow}
          </div>
          <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal italic leading-none tracking-[-0.02em] text-[var(--ink)]">
            {BROWSE_META.pageTitle}
          </h1>
        </div>
        <p className="font-mono text-[11px] text-[var(--ink-3)]">
          Showing <span className="font-medium text-[var(--ink)]">{resultCount}</span> cars
        </p>
      </div>
    </header>
  );
}
