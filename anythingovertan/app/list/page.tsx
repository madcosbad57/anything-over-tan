import { Nav } from "@/components/Nav";

export default function ListPage() {
  return (
    <div className="relative z-[1] min-h-full bg-[var(--paper)] font-mono text-sm text-[var(--ink)]">
      <Nav />
      <main className="px-6 pb-16 pt-[calc(54px+2rem)] text-[var(--ink-3)]">
        <p>List a car — coming soon.</p>
      </main>
    </div>
  );
}
