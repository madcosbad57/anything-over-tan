/** Browse / listings index — placeholder until CMS or DB. */

export type BrowseListing = {
  id: string;
  gradientClass: string;
  make: string;
  model: string;
  spec: string;
  tags: string[];
  price: string;
  loc: string;
  badge?: "for-sale" | "new";
};

export type FeaturedListing = Omit<BrowseListing, "badge"> & {
  featuredLabel: string;
  description: string;
  badge: "featured";
};

export const BROWSE_META = {
  title: "Browse listings — anythingovertan",
  eyebrow: "Marketplace",
  pageTitle: "Browse listings",
  totalCount: 247,
  showingCount: 9,
  loadMoreLabel: "Showing 9 of 247 listings",
} as const;

export const BROWSE_CHIPS = [
  "All",
  "JDM",
  "Classics",
  "Modified",
  "Track",
  "Daily",
  "Convertible",
  "Electric",
] as const;

export const BROWSE_FEATURED: FeaturedListing = {
  id: "nsx-type-r-1994",
  gradientClass: "bg-[linear-gradient(145deg,#22190e,#170f08)]",
  make: "Honda",
  model: "NSX Type R",
  spec: "1994 · 3.0 V6 VTEC · 76,000 mi · Manual · Yorkshire",
  description:
    "A genuine, unmodified Type R — one of 483 examples built for the JDM in 1994. Never tracked, never modified, two owners from new.",
  tags: ["JDM", "Manual", "Original"],
  price: "£68,000",
  loc: "Yorkshire",
  featuredLabel: "Editor's pick",
  badge: "featured",
};

export const BROWSE_LISTINGS: BrowseListing[] = [
  {
    id: "supra-mk4-1997",
    gradientClass: "bg-[linear-gradient(145deg,#0e1620,#080f18)]",
    make: "Toyota",
    model: "Supra MK4",
    spec: "1997 · 3.0 Twin Turbo · 62,000 mi · Manual",
    tags: ["JDM", "Manual"],
    price: "£85,000",
    loc: "London",
    badge: "for-sale",
  },
  {
    id: "skyline-gtr-1999",
    gradientClass: "bg-[linear-gradient(145deg,#1a1510,#201810)]",
    make: "Nissan",
    model: "Skyline GT-R",
    spec: "1999 · 2.6 Twin Turbo · 54,000 mi · Manual",
    tags: ["JDM", "AWD"],
    price: "£72,000",
    loc: "Manchester",
    badge: "new",
  },
  {
    id: "rx7-fd-1995",
    gradientClass: "bg-[linear-gradient(145deg,#0e1818,#081412)]",
    make: "Mazda",
    model: "RX-7 FD",
    spec: "1995 · 1.3 Twin Rotor · 81,000 mi · Manual",
    tags: ["JDM", "RWD"],
    price: "£38,000",
    loc: "Bristol",
    badge: "for-sale",
  },
  {
    id: "impreza-sti-2003",
    gradientClass: "bg-[linear-gradient(145deg,#1a1020,#100818)]",
    make: "Subaru",
    model: "Impreza STi",
    spec: "2003 · 2.0 Turbo · 94,000 mi · Manual",
    tags: ["JDM", "AWD"],
    price: "£24,500",
    loc: "Leeds",
    badge: "for-sale",
  },
  {
    id: "evo-vi-1999",
    gradientClass: "bg-[linear-gradient(145deg,#1e1408,#160e04)]",
    make: "Mitsubishi",
    model: "Lancer Evo VI",
    spec: "1999 · 2.0 Turbo · 68,000 mi · Manual",
    tags: ["JDM", "AWD"],
    price: "£32,000",
    loc: "Edinburgh",
    badge: "new",
  },
  {
    id: "integra-type-r-2001",
    gradientClass: "bg-[linear-gradient(145deg,#0a1420,#060e18)]",
    make: "Honda",
    model: "Integra Type R",
    spec: "2001 · 1.8 VTEC · 52,000 mi · Manual",
    tags: ["JDM", "FWD"],
    price: "£19,500",
    loc: "Birmingham",
    badge: "for-sale",
  },
  {
    id: "celica-gtfour-1994",
    gradientClass: "bg-[linear-gradient(145deg,#1c1c14,#141410)]",
    make: "Toyota",
    model: "Celica GT-Four",
    spec: "1994 · 2.0 Turbo · 88,000 mi · Manual",
    tags: ["JDM", "AWD"],
    price: "£14,000",
    loc: "Cardiff",
    badge: "for-sale",
  },
  {
    id: "silvia-s15-2000",
    gradientClass: "bg-[linear-gradient(145deg,#200e0e,#180808)]",
    make: "Nissan",
    model: "Silvia S15",
    spec: "2000 · 2.0 Turbo · 71,000 mi · Manual",
    tags: ["JDM", "RWD"],
    price: "£28,000",
    loc: "Newcastle",
    badge: "new",
  },
];

export const SORT_OPTIONS = [
  "Most recent",
  "Price: low to high",
  "Price: high to low",
  "Mileage: lowest",
  "Most saved",
] as const;
