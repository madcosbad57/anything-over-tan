import Link from "next/link";

import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <>
      <footer className="grid gap-8 border-b border-[var(--border)] px-6 py-12 sm:px-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Wordmark size="footer" href={null} className="mb-2.5" />
          <p className="max-w-xs font-mono text-[10px] leading-[1.7] text-[var(--ink-3)]">
            The enthusiast&apos;s marketplace.
            <br />
            Community-led. Always free to list.
          </p>
        </div>
        <div>
          <div className="mb-4 font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--ink-3)]">
            Marketplace
          </div>
          <nav className="flex flex-col gap-2 font-mono text-[11px] text-[var(--ink-2)]">
            <Link href="/listings" className="transition-colors hover:text-[var(--tan)]">
              Browse listings
            </Link>
            <Link href="/list" className="transition-colors hover:text-[var(--tan)]">
              List a car
            </Link>
            <Link href="/saved" className="transition-colors hover:text-[var(--tan)]">
              Saved searches
            </Link>
            <Link href="/how-it-works" className="transition-colors hover:text-[var(--tan)]">
              How it works
            </Link>
          </nav>
        </div>
        <div>
          <div className="mb-4 font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--ink-3)]">
            Editorial
          </div>
          <nav className="flex flex-col gap-2 font-mono text-[11px] text-[var(--ink-2)]">
            <Link href="/editorial" className="transition-colors hover:text-[var(--tan)]">
              Latest articles
            </Link>
            <Link href="/editorial/photo-essays" className="transition-colors hover:text-[var(--tan)]">
              Photo essays
            </Link>
            <Link href="/editorial/guides" className="transition-colors hover:text-[var(--tan)]">
              Buyer&apos;s guides
            </Link>
            <Link href="/write" className="transition-colors hover:text-[var(--tan)]">
              Write for us
            </Link>
          </nav>
        </div>
        <div>
          <div className="mb-4 font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--ink-3)]">
            Community
          </div>
          <nav className="flex flex-col gap-2 font-mono text-[11px] text-[var(--ink-2)]">
            <Link
              href="https://www.projectdrive.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--tan)]"
            >
              Project Drive events
            </Link>
            <Link href="/cars-and-coffee" className="transition-colors hover:text-[var(--tan)]">
              Cars & Coffee
            </Link>
            <Link href="https://instagram.com" className="transition-colors hover:text-[var(--tan)]">
              Instagram
            </Link>
            <Link href="/newsletter" className="transition-colors hover:text-[var(--tan)]">
              Newsletter
            </Link>
          </nav>
        </div>
      </footer>
      <div className="flex flex-col gap-2 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p className="font-mono text-[9px] tracking-[0.06em] text-[var(--ink-3)]">
          © {new Date().getFullYear()} anythingovertan. Community-led. Always independent.
        </p>
        <p className="font-mono text-[9px] tracking-[0.06em] text-[var(--ink-3)]">
          Privacy Policy · Terms · ICO Registered
        </p>
      </div>
    </>
  );
}
