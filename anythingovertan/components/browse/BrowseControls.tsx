"use client";

import { SORT_OPTIONS } from "@/lib/browsePlaceholder";

export type ViewMode = "grid" | "list";

export type BrowseControlsProps = {
  sortBy: string;
  onSortByChange: (value: string) => void;
  activeTags: string[];
  onRemoveTag: (tag: string) => void;
  onClearAllTags: () => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
};

export function BrowseControls({
  sortBy,
  onSortByChange,
  activeTags,
  onRemoveTag,
  onClearAllTags,
  viewMode,
  onViewModeChange,
}: BrowseControlsProps) {
  return (
    <div className="flex flex-col gap-4 border-b border-[var(--border)] px-6 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-10">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--ink-3)]">
            Sort by
          </span>
          <select
            value={sortBy}
            onChange={(e) => onSortByChange(e.target.value)}
            className="cursor-pointer appearance-none border border-[var(--border-2)] bg-[var(--paper)] bg-[length:10px_6px] bg-[right_8px_center] bg-no-repeat py-1 pl-2.5 pr-7 font-mono text-[11px] text-[var(--ink)] outline-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%238a8078'/%3E%3C/svg%3E")`,
            }}
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {activeTags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1.5 border border-[var(--border)] bg-[var(--cream)] px-2 py-0.5 font-mono text-[10px] tracking-[0.06em] text-[var(--ink-2)]"
            >
              {tag}
              <button
                type="button"
                className="border-0 bg-transparent p-0 text-xs leading-none text-[var(--ink-3)] hover:text-[var(--rust)]"
                aria-label={`Remove ${tag}`}
                onClick={() => onRemoveTag(tag)}
              >
                ×
              </button>
            </span>
          ))}
          <button
            type="button"
            onClick={onClearAllTags}
            className="border-0 bg-transparent font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--ink-3)] underline decoration-[var(--border)] underline-offset-2 hover:text-[var(--rust)]"
          >
            Clear all
          </button>
        </div>
      </div>
      <div className="flex gap-0.5">
        <button
          type="button"
          title="Grid view"
          onClick={() => onViewModeChange("grid")}
          className={
            "flex size-[30px] items-center justify-center border text-[13px] transition-colors " +
            (viewMode === "grid"
              ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]"
              : "border-[var(--border)] bg-transparent text-[var(--ink-3)] hover:border-[var(--ink-2)] hover:text-[var(--ink)]")
          }
        >
          ⊞
        </button>
        <button
          type="button"
          title="List view"
          onClick={() => onViewModeChange("list")}
          className={
            "flex size-[30px] items-center justify-center border text-[13px] transition-colors " +
            (viewMode === "list"
              ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]"
              : "border-[var(--border)] bg-transparent text-[var(--ink-3)] hover:border-[var(--ink-2)] hover:text-[var(--ink)]")
          }
        >
          ☰
        </button>
      </div>
    </div>
  );
}
