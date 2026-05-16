"use client";

import { useState } from "react";

const chips = ["All", "JDM", "Classics", "Modified", "Track", "Daily"] as const;

export function SearchBar() {
  const [active, setActive] = useState<(typeof chips)[number]>("All");

  return (
    <section className="aot-fade-up-short aot-fade-up--d2 flex flex-col gap-4 border-b border-[var(--border)] px-6 py-6 sm:flex-row sm:items-center sm:px-10">
      <label className="sr-only" htmlFor="site-search">
        Search by make, model, or keyword
      </label>
      <div className="flex min-h-[42px] min-w-0 flex-1 border border-[var(--border-2)] bg-[var(--paper)] transition-colors focus-within:border-[var(--ink)]">
        <input
          id="site-search"
          type="text"
          placeholder="Search by make, model, or keyword..."
          className="min-w-0 flex-1 border-0 bg-transparent px-3.5 py-2.5 font-mono text-xs text-[var(--ink)] outline-none placeholder:text-[var(--ink-3)]"
        />
        <button
          type="button"
          className="shrink-0 px-[18px] font-condensed text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--paper)] transition-colors bg-[var(--ink)] hover:bg-[var(--rust)]"
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {chips.map((label) => (
          <button
            key={label}
            type="button"
            onClick={() => setActive(label)}
            className={
              "font-condensed border px-[13px] py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors " +
              (active === label
                ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]"
                : "border-[var(--border)] bg-transparent text-[var(--ink-3)] hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)]")
            }
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}
