"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Wordmark } from "./Wordmark";

const navLinks = [
  { href: "/listings", label: "Buy" },
  { href: "/sell", label: "Sell" },
  { href: "/editorial", label: "Editorial" },
  { href: "/events", label: "Events" },
  { href: "/community", label: "Community" },
] as const;

function isActiveNavPath(pathname: string, href: string) {
  if (href === "/listings") {
    return pathname === "/listings" || pathname.startsWith("/listings/");
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

function navLinkClassName(pathname: string, href: string) {
  const active = isActiveNavPath(pathname, href);
  return (
    "inline-block font-condensed border-b-2 pb-0.5 text-xs font-semibold uppercase tracking-[0.1em] transition-colors " +
    (active
      ? "border-[var(--tan)] text-[var(--ink)]"
      : "border-transparent text-[var(--ink-3)] hover:text-[var(--ink)]")
  );
}

function navMobileLinkClassName(pathname: string, href: string) {
  const active = isActiveNavPath(pathname, href);
  if (active) {
    return (
      "block px-6 py-4 font-condensed text-xs font-semibold uppercase tracking-[0.1em] text-[var(--ink)] underline decoration-2 " +
      "decoration-[var(--tan)] underline-offset-[6px] transition-colors hover:bg-[var(--cream)]"
    );
  }
  return (
    "block px-6 py-4 font-condensed text-xs font-semibold uppercase tracking-[0.1em] text-[var(--ink-3)] transition-colors " +
    "hover:bg-[var(--cream)] hover:text-[var(--ink)]"
  );
}

function HamburgerIcon() {
  return (
    <svg
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="text-[var(--ink)]"
    >
      <path d="M1 1H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M1 9H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M1 17H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-[var(--border)] bg-[rgba(242,239,232,0.96)] backdrop-blur-[10px]">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[54px] w-full max-w-[1600px] items-center justify-between gap-4 px-6 lg:px-8"
      >
        <Wordmark href="/" className="shrink-0" />

        <ul className="hidden min-w-0 flex-1 justify-center gap-7 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={navLinkClassName(pathname, href)}
                aria-current={isActiveNavPath(pathname, href) ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <Link
            href="/sign-in"
            className="font-condensed border border-[var(--ink)] bg-transparent px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
          >
            Sign in
          </Link>
          <Link
            href="/list"
            className="font-condensed border border-[var(--ink)] bg-[var(--ink)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--paper)] transition-colors hover:border-[var(--rust)] hover:bg-[var(--rust)]"
          >
            List a car
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <HamburgerIcon />
        </button>
      </nav>

      <div
        id="mobile-nav-menu"
        aria-hidden={!open}
        className={
          "fixed left-0 right-0 top-[54px] z-[100] border-b border-[var(--border)] bg-[rgba(242,239,232,0.96)] backdrop-blur-[10px] transition-[transform,opacity,visibility] duration-300 ease-out md:hidden " +
          (open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-full opacity-0 pointer-events-none")
        }
      >
        <ul className="flex flex-col">
          {navLinks.map(({ href, label }) => (
            <li key={href} className="border-b border-[var(--border)]">
              <Link
                href={href}
                className={navMobileLinkClassName(pathname, href)}
                aria-current={isActiveNavPath(pathname, href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3 border-t border-[var(--border)] p-4">
          <Link
            href="/sign-in"
            className="font-condensed block w-full border border-[var(--ink)] bg-transparent py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
            onClick={() => setOpen(false)}
          >
            Sign In
          </Link>
          <Link
            href="/list"
            className="font-condensed block w-full border border-[var(--ink)] bg-[var(--ink)] py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--paper)] transition-colors hover:border-[var(--rust)] hover:bg-[var(--rust)]"
            onClick={() => setOpen(false)}
          >
            List a Car
          </Link>
        </div>
      </div>
    </header>
  );
}
