import Link from "next/link";

type SectionHeadProps = {
  title: string;
  linkHref: string;
  linkLabel: string;
};

export function SectionHead({ title, linkHref, linkLabel }: SectionHeadProps) {
  return (
    <div className="flex items-baseline justify-between border-b border-[var(--border)] px-6 py-4 pb-5 sm:px-10">
      <div className="flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--ink-3)]">
        <span className="h-px w-[18px] shrink-0 bg-[var(--tan)]" aria-hidden />
        {title}
      </div>
      <Link
        href={linkHref}
        className="border-b border-[var(--border)] pb-px font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--ink-3)] transition-colors hover:border-[var(--ink)] hover:text-[var(--ink)]"
      >
        {linkLabel}
      </Link>
    </div>
  );
}
