import Link from "next/link";

type WordmarkSize = "nav" | "footer";

type WordmarkProps = {
  size?: WordmarkSize;
  /** Use `null` for a non-link wordmark (e.g. footer). Omit or pass a path for a link. */
  href?: string | null;
  className?: string;
};

export function Wordmark({ size = "nav", href, className = "" }: WordmarkProps) {
  const resolved = href === undefined ? "/" : href;
  const isNav = size === "nav";
  const root =
    `inline-flex items-baseline leading-none tracking-[-0.02em] text-[var(--ink)] ` +
    (isNav
      ? "gap-[0.04em] text-[28px]"
      : "gap-[0.03em] text-[18px]");

  const over =
    "font-mono not-italic self-center rounded-full border border-[var(--border-2)] bg-[var(--paper)] uppercase text-[var(--ink-2)] " +
    (isNav
      ? "mx-[0.3em] px-[0.55em] py-[0.25em] text-[0.36em] tracking-[0.1em]"
      : "mx-[0.28em] px-[0.5em] py-[0.25em] text-[0.38em] tracking-[0.1em]");

  const inner = (
    <>
      <span className="font-serif italic text-[var(--ink)]">anything</span>
      <span className={over}>over</span>
      <span className="font-serif italic text-[var(--tan)]">tan</span>
    </>
  );

  const merged = `${root} ${className}`.trim();

  if (resolved !== null) {
    return (
      <Link href={resolved} className={merged}>
        {inner}
      </Link>
    );
  }

  return <span className={merged}>{inner}</span>;
}
