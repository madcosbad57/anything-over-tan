import Link from "next/link";

function HeroCarSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M60 210 L110 165 L195 128 L340 112 L490 118 L595 140 L668 172 L700 210 Z" fill="white" />
      <path d="M195 158 L255 118 L400 108 L520 115 L568 148 Z" fill="#2a2218" />
      <circle cx="195" cy="222" r="36" fill="white" opacity="0.9" />
      <circle cx="195" cy="222" r="20" fill="#1a1410" />
      <circle cx="590" cy="222" r="36" fill="white" opacity="0.9" />
      <circle cx="590" cy="222" r="20" fill="#1a1410" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="aot-fade-up aot-fade-up--d1 mt-[54px] grid min-h-[calc(100vh-54px)] border-b border-[var(--border)] lg:grid-cols-2">
      <div className="flex h-full min-h-[calc(100vh-54px)] flex-col justify-between border-r border-[#d4cfc6] px-6 py-10 sm:px-10 lg:min-h-0 lg:h-full lg:py-16 lg:pl-10 lg:pr-12">
        <div>
          <div className="mb-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--ink-3)]">
            <span className="h-px w-5 bg-[var(--tan)]" aria-hidden />
            The enthusiast&apos;s marketplace — Est. 2025
          </div>
          <h1 className="font-serif text-[clamp(3.5rem,8vw,8.5rem)] font-normal italic leading-[0.9] tracking-[-0.03em] text-[var(--ink)]">
            Cars.
            <br />
            <em className="not-italic text-[var(--tan)]">Not</em>
            <br />
            Databases.
          </h1>
        </div>
        <div className="flex flex-col gap-7">
          <p className="max-w-[400px] font-mono text-xs leading-[1.8] text-[var(--ink-2)]">
            A community-led marketplace for people who actually care. Buy, sell,
            read, and connect — built by enthusiasts, for enthusiasts. Always free
            to list.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/listings"
              className="font-condensed bg-[var(--ink)] px-[26px] py-[11px] text-xs font-bold uppercase tracking-[0.12em] text-[var(--paper)] transition-colors hover:bg-[var(--rust)]"
            >
              Browse listings
            </Link>
            <Link
              href="/editorial"
              className="font-condensed border border-[var(--border-2)] bg-transparent px-[26px] py-[11px] text-xs font-bold uppercase tracking-[0.12em] text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
            >
              Read the journal
            </Link>
          </div>
        </div>
      </div>

      <div className="relative min-h-[320px] overflow-hidden bg-[var(--ink)] lg:min-h-0">
        <div className="absolute inset-0 bg-[linear-gradient(140deg,#1c1810_0%,#2a2218_45%,#161210_100%)]" />
        <div
          className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(255,255,255,0.012)_3px,rgba(255,255,255,0.012)_4px)]"
          aria-hidden
        />
        <HeroCarSilhouette className="pointer-events-none absolute left-1/2 top-1/2 w-[78%] max-w-[640px] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]" />
        <div className="relative flex h-full min-h-[320px] flex-col justify-end p-8 lg:absolute lg:inset-0 lg:min-h-0">
          <div className="absolute right-8 top-8 z-[1] flex flex-col gap-6 text-right">
            <div>
              <div className="font-serif text-[2.75rem] italic leading-none text-[var(--paper)]">
                2.4k
              </div>
              <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[rgba(242,239,232,0.35)]">
                Live listings
              </div>
            </div>
            <div>
              <div className="font-serif text-[2.75rem] italic leading-none text-[var(--paper)]">
                840
              </div>
              <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[rgba(242,239,232,0.35)]">
                Members
              </div>
            </div>
            <div>
              <div className="font-serif text-[2.75rem] italic leading-none text-[var(--paper)]">
                12
              </div>
              <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[rgba(242,239,232,0.35)]">
                Events this month
              </div>
            </div>
          </div>
          <p className="relative z-[1] font-mono text-[9px] uppercase tracking-[0.12em] text-[rgba(242,239,232,0.3)]">
            Photography by the community
          </p>
        </div>
      </div>
    </section>
  );
}
