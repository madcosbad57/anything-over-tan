import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components";
import { Nav } from "@/components/Nav";
import {
  ListingComments,
  ListingDescription,
  ListingGallery,
  ListingHistory,
  ListingRelated,
  ListingSidebar,
  ListingSpecTabs,
  ListingTitleBlock,
} from "@/components/listing";
import { PLACEHOLDER_LISTING } from "@/lib/listingPlaceholder";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return {
    title: PLACEHOLDER_LISTING.title,
    description: `anythingovertan listing ${id}`,
  };
}

export default async function ListingPage({ params }: Props) {
  const { id: listingId } = await params;

  const { breadcrumb, breadcrumbCurrent } = PLACEHOLDER_LISTING;

  return (
    <div
      data-listing-id={listingId}
      className="relative z-[1] flex min-h-full flex-col bg-[var(--paper)] font-mono text-sm leading-relaxed text-[var(--ink)]"
    >
      <Nav />
      <nav
        aria-label="Breadcrumb"
        className="mt-[54px] flex flex-wrap items-center gap-2 border-b border-[var(--border)] px-6 py-3.5 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--ink-3)] sm:px-10"
      >
        {breadcrumb.flatMap((c, i) => [
          i > 0 ? (
            <span key={`sep-${c.href}`} className="text-[var(--border-2)]">
              ›
            </span>
          ) : null,
          <Link key={c.href} href={c.href} className="transition-colors hover:text-[var(--ink)]">
            {c.label}
          </Link>,
        ])}
        <span className="text-[var(--border-2)]">›</span>
        <span className="text-[var(--ink-2)]">{breadcrumbCurrent}</span>
      </nav>

      <ListingGallery />

      <div className="aot-fade-up-short aot-fade-up--d2 grid border-b border-[var(--border)] lg:grid-cols-[1fr_360px]">
        <div className="min-w-0 lg:border-r lg:border-[var(--border)]">
          <ListingTitleBlock />
          <ListingSpecTabs />
          <ListingDescription />
          <ListingHistory />
        </div>
        <ListingSidebar />
      </div>

      <ListingComments />
      <ListingRelated />
      <Footer />
    </div>
  );
}
