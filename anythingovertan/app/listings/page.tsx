"use client";

import { useState } from "react";

import { Footer } from "@/components";
import { Nav } from "@/components/Nav";
import {
  BrowseControls,
  BrowseHeader,
  FeaturedCard,
  FilterSidebar,
  ListingCard,
  type ViewMode,
} from "@/components/browse";
import {
  BROWSE_CHIPS,
  BROWSE_FEATURED,
  BROWSE_LISTINGS,
  BROWSE_META,
  SORT_OPTIONS,
} from "@/lib/browsePlaceholder";

export default function BrowseListingsPage() {
  const [activeChip, setActiveChip] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<string>(SORT_OPTIONS[0]);
  const [activeTags, setActiveTags] = useState<string[]>([
    "JDM",
    "Manual",
    "Under £50,000",
  ]);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const gridClass =
    viewMode === "list"
      ? "grid grid-cols-1 gap-5"
      : "grid grid-cols-1 gap-5 lg:grid-cols-3";

  return (
    <div className="relative z-[1] flex min-h-full flex-col bg-[var(--paper)] font-mono text-sm leading-relaxed text-[var(--ink)]">
      <Nav />
      <BrowseHeader resultCount={BROWSE_META.totalCount} />

      <div className="aot-fade-up-short aot-fade-up--d2 flex flex-wrap items-center gap-4 border-b border-[var(--border)] px-6 py-5 sm:px-10">
        <div className="flex min-w-[260px] flex-1 border border-[var(--border-2)] bg-[var(--paper)] transition-colors focus-within:border-[var(--ink)]">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by make, model, or keyword..."
            className="min-w-0 flex-1 border-0 bg-transparent px-3.5 py-2 font-mono text-xs text-[var(--ink)] outline-none placeholder:text-[var(--ink-3)]"
          />
          <button
            type="button"
            className="shrink-0 bg-[var(--ink)] px-4 font-condensed text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--paper)] transition-colors hover:bg-[var(--rust)]"
          >
            Search
          </button>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {BROWSE_CHIPS.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => setActiveChip(label)}
              className={
                "whitespace-nowrap border px-3 py-1 font-condensed text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors " +
                (activeChip === label
                  ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]"
                  : "border-[var(--border)] bg-transparent text-[var(--ink-3)] hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)]")
              }
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <BrowseControls
        sortBy={sortBy}
        onSortByChange={setSortBy}
        activeTags={activeTags}
        onRemoveTag={(tag) => setActiveTags((t) => t.filter((x) => x !== tag))}
        onClearAllTags={() => setActiveTags([])}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      <div className="aot-fade-up-short aot-fade-up--d3 grid min-h-[calc(100vh-54px)] grid-cols-1 border-b border-[var(--border)] lg:grid-cols-[240px_1fr]">
        <FilterSidebar />
        <main className="px-6 py-6 sm:px-8">
          <div className={gridClass}>
            <FeaturedCard listing={BROWSE_FEATURED} viewMode={viewMode} />
            {BROWSE_LISTINGS.map((listing, i) => (
              <ListingCard
                key={listing.id}
                listing={listing}
                carSvgVariant={(i % 3) as 0 | 1 | 2}
              />
            ))}
          </div>
          <div className="mt-2 border-t border-[var(--border)] px-0 py-10 text-center">
            <p className="mb-4 font-mono text-[10px] text-[var(--ink-3)]">{BROWSE_META.loadMoreLabel}</p>
            <button
              type="button"
              className="border border-[var(--border-2)] bg-transparent px-9 py-3 font-condensed text-xs font-bold uppercase tracking-[0.12em] text-[var(--ink)] transition-colors hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)]"
            >
              Load more
            </button>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
