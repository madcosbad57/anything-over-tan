"use client";

import { useState } from "react";

import type { IconCard } from "@/lib/listingPlaceholder";
import { PLACEHOLDER_LISTING } from "@/lib/listingPlaceholder";

type TabId = "overview" | "performance" | "specification";

function IconCardsGrid({ cards }: { cards: readonly IconCard[] | IconCard[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 border-b border-[var(--border)] p-5 md:grid-cols-4">
      {cards.map((c) => (
        <div
          key={`${c.key}-${c.val}`}
          className="flex cursor-default flex-col rounded-lg border border-[var(--border)] bg-[var(--paper)] p-4 transition-[background,border-color] duration-150 hover:border-[var(--border-2)] hover:bg-[var(--cream)]"
        >
          <div className="mb-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--ink-3)]">
            {c.key}
          </div>
          <div
            className={
              "font-condensed text-[1.1rem] font-bold leading-tight tracking-[0.02em] " +
              (c.good ? "text-[var(--green)]" : "text-[var(--ink)]")
            }
          >
            {c.val}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ListingSpecTabs() {
  const { statStrip, overviewCards, performanceCards, performanceNote, specification } =
    PLACEHOLDER_LISTING;
  const [tab, setTab] = useState<TabId>("overview");

  return (
    <div className="border-b border-[var(--border)] px-6 py-8 sm:px-10">
      <div className="overflow-x-auto border-b border-[var(--border)] bg-[var(--ink)]">
        <div className="min-w-[520px]">
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
          {statStrip.flatMap((s, i) => {
            const cell = (
              <div key={s.label} className="px-4 py-6 text-center">
                <div className="font-serif text-[2.4rem] italic leading-none text-[var(--paper)]">
                  {s.num}
                </div>
                <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--tan)]">
                  {s.unit}
                </div>
                <div className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-[rgba(242,239,232,0.35)]">
                  {s.label}
                </div>
              </div>
            );
            const div =
              i < statStrip.length - 1 ? (
                <div key={`sep-${i}`} className="w-px bg-[rgba(255,255,255,0.08)]" aria-hidden />
              ) : null;
            return div ? [cell, div] : [cell];
          })}
        </div>
        </div>
      </div>

      <div className="flex border-b border-[var(--border)]">
        {(
          [
            { id: "overview" as const, label: "Overview" },
            { id: "performance" as const, label: "Performance" },
            { id: "specification" as const, label: "Specification" },
          ] as const
        ).map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={
              "-mb-px border-b-2 border-transparent bg-transparent px-6 py-3.5 font-mono text-[10px] font-medium uppercase tracking-[0.14em] transition-colors " +
              (tab === t.id
                ? "border-[var(--tan)] text-[var(--ink)]"
                : "text-[var(--ink-3)] hover:text-[var(--ink)]")
            }
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "overview" ? <IconCardsGrid cards={overviewCards} /> : null}

      {tab === "performance" ? (
        <div>
          <IconCardsGrid cards={performanceCards} />
          <div className="flex items-start gap-3 border-t border-[var(--border)] bg-[var(--cream)] px-5 py-4 font-mono text-[11px] leading-[1.7] text-[var(--ink-2)]">
            <span className="mt-0.5 shrink-0 text-[var(--tan)]" aria-hidden>
              ★
            </span>
            <span>{performanceNote}</span>
          </div>
        </div>
      ) : null}

      {tab === "specification" ? (
        <div>
          <div className="border-b border-[var(--border)] bg-[var(--cream)] px-[1.1rem] py-3 font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--ink-3)]">
            Exterior
          </div>
          <IconCardsGrid cards={specification.exterior} />
          <div className="border-b border-[var(--border)] bg-[var(--cream)] px-[1.1rem] py-3 font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--ink-3)]">
            Interior
          </div>
          <IconCardsGrid cards={specification.interior} />
          <div className="border-b border-[var(--border)] bg-[var(--cream)] px-[1.1rem] py-3 font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--ink-3)]">
            Notable equipment
          </div>
          <div className="border-b border-[var(--border)]">
            {specification.equipment.map((row) => (
              <div
                key={row.text}
                className={
                  "flex items-center gap-3 border-b border-[var(--border)] px-[1.1rem] py-2.5 font-mono text-[11px] last:border-b-0 " +
                  (row.ok ? "text-[var(--ink)]" : "text-[var(--ink-3)]")
                }
              >
                <span
                  className={
                    "shrink-0 text-xs " + (row.ok ? "text-[var(--green)]" : "text-[var(--border-2)]")
                  }
                  aria-hidden
                >
                  {row.ok ? "✓" : "✗"}
                </span>
                {row.text}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
