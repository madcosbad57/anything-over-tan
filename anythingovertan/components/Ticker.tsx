const items = [
  "New listing: 1994 Honda NSX — £68,000 — Yorkshire",
  "Project Drive — Summer European Adventure — June 4th",
  "Feature: The last great analogue Ferraris",
  "New listing: 2003 Subaru Impreza STi — £24,500 — Leeds",
  "Cars & Coffee — Every third Saturday — 9am",
  "New listing: 1987 Porsche 944 Turbo — £18,000 — London",
  "Project Drive — Scottish September — NC500",
] as const;

function TickerRow() {
  return (
    <>
      {items.map((text) => (
        <div
          key={text}
          className="flex shrink-0 items-center gap-3 font-mono text-[10px] uppercase tracking-[0.1em] text-[rgba(242,239,232,0.5)]"
        >
          <span className="size-[3px] shrink-0 rounded-full bg-[var(--tan)]" aria-hidden />
          {text}
        </div>
      ))}
    </>
  );
}

export function Ticker() {
  return (
    <div className="flex h-[34px] items-center overflow-hidden border-b border-[rgba(255,255,255,0.06)] bg-[var(--ink)]">
      <div className="flex animate-[ticker_32s_linear_infinite] gap-14 whitespace-nowrap pl-0">
        <TickerRow />
        <TickerRow />
      </div>
    </div>
  );
}
