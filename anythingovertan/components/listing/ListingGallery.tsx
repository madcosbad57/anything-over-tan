import { PLACEHOLDER_LISTING } from "@/lib/listingPlaceholder";

function CarGhost({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M60 210 L110 165 L195 128 L340 112 L490 118 L595 140 L668 172 L700 210 Z" fill="white" />
      <path d="M195 158 L255 118 L400 108 L520 115 L568 148 Z" fill="#2a2218" />
      <circle cx="195" cy="222" r="36" fill="white" opacity="0.9" />
      <circle cx="195" cy="222" r="20" fill="#1a1410" />
      <circle cx="590" cy="222" r="36" fill="white" opacity="0.9" />
      <circle cx="590" cy="222" r="20" fill="#1a1410" />
    </svg>
  );
}

function CarGhostSm({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 800 280" fill="none" aria-hidden>
      <path d="M60 210 L110 165 L195 128 L340 112 L490 118 L595 140 L668 172 L700 210 Z" fill="white" />
      <circle cx="195" cy="222" r="36" fill="white" opacity="0.8" />
      <circle cx="590" cy="222" r="36" fill="white" opacity="0.8" />
    </svg>
  );
}

export function ListingGallery() {
  const { gallery } = PLACEHOLDER_LISTING;

  return (
    <div className="aot-fade-up-short aot-fade-up--d1 overflow-x-auto border-b border-[var(--border)]">
      <div className="min-w-[720px] bg-[var(--ink)]">
        <div className="grid grid-cols-2 grid-rows-[480px_200px] gap-0.5">
          <div className="group relative col-span-1 row-span-2 cursor-pointer overflow-hidden">
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(145deg,#1e1a10_0%,#2e2416_50%,#141008_100%)] transition-transform duration-[600ms] ease-out group-hover:scale-[1.02]">
              <CarGhost className="w-[65%] opacity-10" />
            </div>
            <div className="absolute left-4 top-4 bg-[var(--paper)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--ink)]">
              {gallery.badge}
            </div>
            <div className="absolute bottom-3 right-3 bg-black/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[rgba(242,239,232,0.6)] backdrop-blur-[4px]">
              {gallery.count}
            </div>
          </div>

          <div className="group relative cursor-pointer overflow-hidden">
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(145deg,#181410_0%,#24180e_100%)] brightness-75 transition-[transform,filter] duration-[400ms] ease-out group-hover:scale-[1.04] group-hover:brightness-90">
              <CarGhostSm className="w-[55%] opacity-[0.08]" />
            </div>
          </div>

          <div className="group relative cursor-pointer overflow-hidden">
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(145deg,#0e1018_0%,#141820_100%)] brightness-75 transition-[transform,filter] duration-[400ms] ease-out group-hover:scale-[1.04] group-hover:brightness-90">
              <CarGhostSm className="w-[55%] opacity-[0.08]" />
            </div>
            <div className="absolute bottom-2.5 right-2.5 bg-black/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[rgba(242,239,232,0.6)] backdrop-blur-[4px]">
              {gallery.thumbMore}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
