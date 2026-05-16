"use client";

import { useCallback, useState } from "react";

type FilterOption = { id: string; label: string; count: string };

const categoryOptions: FilterOption[] = [
  { id: "cat-jdm", label: "JDM", count: "48" },
  { id: "cat-classics", label: "Classics", count: "62" },
  { id: "cat-modified", label: "Modified", count: "34" },
  { id: "cat-track", label: "Track", count: "19" },
  { id: "cat-daily", label: "Daily", count: "71" },
  { id: "cat-convertible", label: "Convertible", count: "13" },
];

const makeOptions: FilterOption[] = [
  { id: "make-honda", label: "Honda", count: "22" },
  { id: "make-toyota", label: "Toyota", count: "18" },
  { id: "make-nissan", label: "Nissan", count: "14" },
  { id: "make-mazda", label: "Mazda", count: "11" },
  { id: "make-porsche", label: "Porsche", count: "9" },
  { id: "make-bmw", label: "BMW", count: "16" },
  { id: "make-subaru", label: "Subaru", count: "8" },
];

const gearboxOptions: FilterOption[] = [
  { id: "gb-manual", label: "Manual", count: "168" },
  { id: "gb-auto", label: "Automatic", count: "79" },
];

const mileageOptions: FilterOption[] = [
  { id: "mi-u30", label: "Under 30,000", count: "41" },
  { id: "mi-30-70", label: "30,000 – 70,000", count: "88" },
  { id: "mi-70-100", label: "70,000 – 100,000", count: "64" },
  { id: "mi-o100", label: "Over 100,000", count: "54" },
];

const locationOptions: FilterOption[] = [
  { id: "loc-north", label: "North England", count: "54" },
  { id: "loc-south", label: "South England", count: "72" },
  { id: "loc-mid", label: "Midlands", count: "38" },
  { id: "loc-scot", label: "Scotland", count: "21" },
  { id: "loc-wales", label: "Wales", count: "12" },
];

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="px-5 py-5">
      <div className="flex cursor-pointer items-center justify-between pb-3 pt-1 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--ink-3)]">
        {title}
        <span className="text-xs text-[var(--border-2)]">▾</span>
      </div>
      {children}
    </div>
  );
}

function CheckboxRow({
  option,
  checked,
  onToggle,
}: {
  option: FilterOption;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full cursor-pointer items-center justify-between py-0.5 text-left"
    >
      <span className="flex items-center gap-2.5">
        <span
          className={
            "flex size-3.5 shrink-0 items-center justify-center border text-[9px] transition-colors " +
            (checked
              ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]"
              : "border-[var(--border-2)] bg-[var(--paper)] text-transparent")
          }
        >
          {checked ? "✓" : ""}
        </span>
        <span className="font-mono text-[11px] text-[var(--ink-2)]">{option.label}</span>
      </span>
      <span className="font-mono text-[10px] text-[var(--ink-3)]">{option.count}</span>
    </button>
  );
}

function useSetToggle(initial: Set<string>) {
  const [set, setSet] = useState(() => new Set(initial));

  const toggle = useCallback((id: string) => {
    setSet((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const isOn = useCallback((id: string) => set.has(id), [set]);

  return { toggle, isOn };
}

export function FilterSidebar() {
  const category = useSetToggle(new Set(["cat-jdm"]));
  const make = useSetToggle(new Set(["make-honda"]));
  const gearbox = useSetToggle(new Set(["gb-manual"]));
  const mileage = useSetToggle(new Set());
  const location = useSetToggle(new Set());

  const [priceMin, setPriceMin] = useState("£0");
  const [priceMax, setPriceMax] = useState("£50,000");

  return (
    <aside className="sticky top-[54px] h-[calc(100vh-54px)] w-full shrink-0 divide-y divide-[var(--border)] overflow-y-auto border-r border-[var(--border)] lg:w-[240px]">
      <FilterGroup title="Category">
        <div className="flex flex-col gap-1.5">
          {categoryOptions.map((o) => (
            <CheckboxRow
              key={o.id}
              option={o}
              checked={category.isOn(o.id)}
              onToggle={() => category.toggle(o.id)}
            />
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Price">
        <div className="mt-2 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
              placeholder="Min"
              className="min-w-0 flex-1 border border-[var(--border-2)] bg-[var(--paper)] px-2 py-1.5 font-mono text-[11px] text-[var(--ink)] outline-none focus:border-[var(--ink)]"
            />
            <span className="shrink-0 font-mono text-[11px] text-[var(--ink-3)]">—</span>
            <input
              type="text"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
              placeholder="Max"
              className="min-w-0 flex-1 border border-[var(--border-2)] bg-[var(--paper)] px-2 py-1.5 font-mono text-[11px] text-[var(--ink)] outline-none focus:border-[var(--ink)]"
            />
          </div>
        </div>
      </FilterGroup>

      <FilterGroup title="Make">
        <div className="flex flex-col gap-1.5">
          {makeOptions.map((o) => (
            <CheckboxRow
              key={o.id}
              option={o}
              checked={make.isOn(o.id)}
              onToggle={() => make.toggle(o.id)}
            />
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Gearbox">
        <div className="flex flex-col gap-1.5">
          {gearboxOptions.map((o) => (
            <CheckboxRow
              key={o.id}
              option={o}
              checked={gearbox.isOn(o.id)}
              onToggle={() => gearbox.toggle(o.id)}
            />
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Mileage">
        <div className="flex flex-col gap-1.5">
          {mileageOptions.map((o) => (
            <CheckboxRow
              key={o.id}
              option={o}
              checked={mileage.isOn(o.id)}
              onToggle={() => mileage.toggle(o.id)}
            />
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Location">
        <div className="flex flex-col gap-1.5">
          {locationOptions.map((o) => (
            <CheckboxRow
              key={o.id}
              option={o}
              checked={location.isOn(o.id)}
              onToggle={() => location.toggle(o.id)}
            />
          ))}
        </div>
      </FilterGroup>
    </aside>
  );
}
