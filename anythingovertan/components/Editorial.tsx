import Link from "next/link";

import { SectionHead } from "./SectionHead";

function JournalCarSvg() {
  return (
    <svg
      className="absolute left-1/2 top-1/2 w-[55%] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
      viewBox="0 0 400 140"
      fill="white"
      aria-hidden
    >
      <path d="M20 110 L40 70 L95 44 L200 40 L268 46 L318 72 L340 110Z" />
      <circle cx="80" cy="118" r="20" />
      <circle cx="298" cy="118" r="20" />
    </svg>
  );
}

const col1 = [
  {
    num: "01",
    tag: "Long read",
    title: "Why the E46 M3 is still the standard everything is judged against",
    meta: "8 min · Dan Okafor",
  },
  {
    num: "02",
    tag: "Community",
    title: "Building a Group B replica in a Sheffield lock-up",
    meta: "6 min · Aaron T.",
  },
  {
    num: "03",
    tag: "Opinion",
    title: "The problem with buying cars online — and how we fix it",
    meta: "4 min · Editorial",
  },
] as const;

const col2 = [
  {
    num: "04",
    tag: "Project Drive",
    title: "Summer European Adventure — the route, the cars, the chaos",
    meta: "10 min · Project Drive",
  },
  {
    num: "05",
    tag: "Buyer's guide",
    title: "Buying your first JDM import — what nobody tells you",
    meta: "7 min · Sarah K.",
  },
  {
    num: "06",
    tag: "Interview",
    title: `"I've owned 40 Porsches." A conversation with a collector`,
    meta: "12 min · Editorial",
  },
] as const;

function EdItem({
  num,
  tag,
  title,
  meta,
}: {
  num: string;
  tag: string;
  title: string;
  meta: string;
}) {
  return (
    <Link
      href="/editorial"
      className="flex flex-1 flex-col border-b border-[var(--border)] p-[1.1rem] transition-colors last:border-b-0 hover:bg-[var(--cream)] md:px-5 md:py-[1.1rem]"
    >
      <div className="mb-1.5 font-serif text-[2.75rem] italic leading-none text-[var(--border)]">
        {num}
      </div>
      <div className="mb-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--tan)]">
        {tag}
      </div>
      <div className="mb-1.5 font-serif text-[0.95rem] leading-snug text-[var(--ink)]">{title}</div>
      <div className="mt-auto font-mono text-[9px] text-[var(--ink-3)]">{meta}</div>
    </Link>
  );
}

export function Editorial() {
  return (
    <section className="aot-fade-up-short aot-fade-up--d4 border-b border-[var(--border)]">
      <SectionHead title="From the journal" linkHref="/editorial" linkLabel="Read all" />
      <div className="grid lg:grid-cols-[2fr_1fr_1fr]">
        <article className="cursor-pointer border-b border-[var(--border)] transition-colors hover:bg-[var(--cream)] lg:border-b-0 lg:border-r">
          <Link href="/editorial" className="block">
            <div className="relative flex aspect-video items-end bg-[linear-gradient(135deg,#1c1810,#241e12)] p-5">
              <JournalCarSvg />
              <span className="relative z-[1] font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--tan)]">
                Photo Essay
              </span>
            </div>
            <div className="p-[1.4rem]">
              <div className="mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--ink-3)]">
                James Whitfield · 12 min read
              </div>
              <h2 className="mb-3 font-serif text-[1.6rem] leading-tight text-[var(--ink)]">
                The last great <em className="italic">analogue</em> Ferraris — and why they
                matter now more than ever
              </h2>
              <p className="font-mono text-[11px] leading-[1.8] text-[var(--ink-2)]">
                Before the turbos, the hybrid systems, the screens — there was a window
                where Ferrari built cars that communicated everything through the seat of
                your trousers. We drove three back to back.
              </p>
            </div>
          </Link>
        </article>

        <div className="flex flex-col border-b border-[var(--border)] lg:border-b-0 lg:border-r">
          {col1.map((item) => (
            <EdItem key={item.num} {...item} />
          ))}
        </div>

        <div className="flex flex-col">
          {col2.map((item) => (
            <EdItem key={item.num} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
