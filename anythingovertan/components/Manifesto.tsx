export function Manifesto() {
  return (
    <section className="aot-fade-up-short aot-fade-up--d5 grid gap-10 border-b border-[var(--border)] px-6 py-16 sm:px-10 lg:grid-cols-[180px_1fr] lg:gap-16 lg:py-20">
      <div className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--ink-3)] lg:pt-1">
        Our manifesto
      </div>
      <p className="font-serif text-[clamp(1.5rem,2.4vw,2.2rem)] italic leading-[1.38] tracking-[-0.01em] text-[var(--ink)]">
        AutoTrader sells cars. We sell{" "}
        <strong className="font-normal italic text-[var(--tan)]">culture</strong>. Every listing
        here comes from someone who gives a damn. Every article is written by someone
        who&apos;s driven it, built it, or lived it. This is the marketplace for people who
        know the difference between a car and{" "}
        <strong className="font-normal italic text-[var(--tan)]">just transport</strong>.
      </p>
    </section>
  );
}
