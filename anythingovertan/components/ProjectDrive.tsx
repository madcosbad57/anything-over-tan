import Link from "next/link";

const events = [
  {
    date: "Jun 4–13",
    name: "Summer European Adventure 2 — UK, France, Italy, Switzerland, Germany",
    loc: "Central Europe",
  },
  {
    date: "Every 3rd Sat",
    name: "Cars & Coffee x Quintessential — Free to attend",
    loc: "9am–12pm",
  },
  {
    date: "Sep 2026",
    name: "Scottish September — North Scotland & NC500",
    loc: "Scotland",
  },
] as const;

export function ProjectDrive() {
  return (
    <section className="aot-fade-up-short aot-fade-up--d6 grid min-h-[380px] border-b border-[var(--border)] md:grid-cols-2">
      <div className="flex flex-col justify-between border-[var(--border)] bg-[#0f0d0a] px-6 py-12 sm:px-10 md:border-r md:border-[rgba(255,255,255,0.05)]">
        <div className="flex flex-col gap-6">
          <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--tan)]">
            In partnership with
          </div>
          <div className="flex items-center gap-3.5">
            <div className="flex flex-col leading-none">
              <span className="font-condensed text-[11px] font-semibold uppercase tracking-[0.25em] text-[rgba(242,239,232,0.45)]">
                Project<span className="text-[var(--tan)]">:</span>
              </span>
              <span className="font-serif text-[2.2rem] italic tracking-[-0.01em] text-[rgba(242,239,232,0.95)]">
                Drive
              </span>
            </div>
          </div>
          <p className="max-w-[340px] font-mono text-[11px] leading-[1.75] text-[rgba(242,239,232,0.4)]">
            Automotive adventures and road trips across the UK and Europe. Cars & Coffee,
            multi-day drives, and a community built for those who live for the road.
          </p>
        </div>
        <Link
          href="https://www.projectdrive.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex w-fit bg-[var(--tan)] px-[22px] py-2.5 font-condensed text-[11px] font-bold uppercase tracking-[0.12em] text-[#1a1208] transition-opacity hover:opacity-[0.85] md:mt-0"
        >
          Visit projectdrive.uk
        </Link>
      </div>

      <div className="relative flex flex-col justify-end overflow-hidden bg-[#120f0a] p-6 sm:p-10">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(160,114,72,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(160,114,72,0.07)_1px,transparent_1px)] bg-[length:36px_36px]"
          aria-hidden
        />
        <div className="relative z-[1] flex flex-col gap-2.5">
          {events.map((e) => (
            <div
              key={e.date}
              className="flex cursor-pointer items-center gap-4 border border-[rgba(160,114,72,0.12)] bg-[rgba(242,239,232,0.03)] px-4 py-2.5 transition-colors hover:bg-[rgba(242,239,232,0.07)]"
            >
              <div className="min-w-[52px] shrink-0 font-mono text-[9px] font-medium uppercase tracking-[0.1em] text-[var(--tan)]">
                {e.date}
              </div>
              <div className="min-w-0 flex-1 font-mono text-[11px] text-[rgba(242,239,232,0.65)]">
                {e.name}
              </div>
              <div className="hidden shrink-0 font-condensed text-[10px] uppercase tracking-[0.08em] text-[rgba(242,239,232,0.25)] sm:block">
                {e.loc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
