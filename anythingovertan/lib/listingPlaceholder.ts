/** Hardcoded 1994 Honda NSX Type R — swap for CMS / DB later. */

export type IconCard = { key: string; val: string; good?: boolean };

export type EquipmentRow = { text: string; ok: boolean };

export type HistoryRow = {
  icon: string;
  title: string;
  desc: string;
  badge: { kind: "check" | "cross"; label: string };
};

export type CommentItem = {
  id: string;
  avatar: string;
  name: string;
  role: "community" | "seller";
  time: string;
  text: string;
};

export type CommentThread = {
  id: string;
  root: CommentItem;
  sellerReply?: CommentItem;
  awaitingSeller?: boolean;
};

export type RelatedCard = {
  gradient: string;
  make: string;
  model: string;
  spec: string;
  price: string;
  loc: string;
};

export const PLACEHOLDER_LISTING = {
  title: "1994 Honda NSX Type R — anythingovertan",
  breadcrumb: [
    { href: "/", label: "Home" },
    { href: "/listings", label: "Listings" },
    { href: "/listings?tag=jdm", label: "JDM" },
  ],
  breadcrumbCurrent: "1994 Honda NSX Type R",
  gallery: {
    badge: "For sale",
    count: "1 / 12 photos",
    thumbMore: "+10 more",
  },
  titleBlock: {
    makeYear: "Honda · 1994 · JDM",
    status: "Available",
    title: "NSX Type R",
    subtitles: [
      "76,000 miles",
      "Manual",
      "3.0 V6",
      "Yorkshire",
      "Listed 3 days ago",
    ],
  },
  statStrip: [
    { num: "276", unit: "bhp", label: "Power" },
    { num: "5.7", unit: "sec", label: "0–60 mph" },
    { num: "168", unit: "mph", label: "Top speed" },
    { num: "1,270", unit: "kg", label: "Kerb weight" },
  ],
  overviewCards: [
    { key: "Year", val: "1994" },
    { key: "Mileage", val: "76,000 mi" },
    { key: "Gearbox", val: "Manual" },
    { key: "History", val: "2 owners" },
    { key: "Engine", val: "3.0 V6" },
    { key: "Fuel", val: "Petrol" },
    { key: "MOT", val: "Feb 2026", good: true },
    { key: "Colour", val: "Formula Red" },
  ] satisfies IconCard[],
  performanceCards: [
    { key: "Engine", val: "3.0 V6 VTEC" },
    { key: "Capacity", val: "2,977 cc" },
    { key: "Valves", val: "24v DOHC" },
    { key: "Drive", val: "RWD" },
    { key: "Torque", val: "210 Nm" },
    { key: "Power / tonne", val: "236 bhp/t" },
    { key: "Gearbox", val: "5-speed" },
    { key: "Cylinders", val: "V6" },
  ] satisfies IconCard[],
  performanceNote:
    "The Type R received a 70 kg weight reduction over the standard NSX — removing air conditioning, stereo, and spare wheel — giving it the best power-to-weight ratio of any Honda road car of its era.",
  specification: {
    exterior: [
      { key: "Colour", val: "Formula Red" },
      { key: "Paint code", val: "R-81" },
      { key: "Body style", val: "Targa / Coupe" },
      { key: "Wheels", val: '15" / 16" Alloys' },
    ] satisfies IconCard[],
    interior: [
      { key: "Seats", val: "Recaro Buckets" },
      { key: "Interior colour", val: "Black / Red" },
      { key: "Steering wheel", val: "Momo Sport" },
      { key: "Gear knob", val: "Titanium" },
    ] satisfies IconCard[],
    equipment: [
      { text: "Recaro bucket seats (original)", ok: true },
      { text: "Titanium shift knob (original)", ok: true },
      { text: "Brembo brakes (factory Type R)", ok: true },
      { text: "Torsen limited slip differential", ok: true },
      { text: "Two sets of keys", ok: true },
      { text: "Original tool kit present", ok: true },
      { text: "Air conditioning (removed — weight saving)", ok: false },
      { text: "Stereo (removed — weight saving)", ok: false },
      { text: "Spare wheel (removed — weight saving)", ok: false },
    ] satisfies EquipmentRow[],
  },
  description: {
    label: "About this car",
    paragraphs: [
      "This is a genuine, unmodified Type R — one of just 483 examples built for the Japanese domestic market in 1994. It arrived in the UK in 2018 via a specialist importer and has been in the same private collection since. The car has never been tracked, never been modified, and has spent the majority of its life in a climate-controlled garage.",
      "The bodywork is **exceptional** for the age. No accident history, no filler, no repaints. The Recaro bucket seats, the stripped-out interior, the titanium shift knob — all completely original. Honda engineers hand-built these engines individually, and it shows: the VTEC crossover at 5,800rpm is as crisp as the day it left Tochigi.",
      "A full service history folder accompanies the car, along with the original Japanese registration documents, the UK import paperwork, and two sets of keys. This is not a restored car — it's a preserved one. There is a difference, and this car proves it.",
    ] as string[],
  },
  history: {
    label: "History & checks",
    items: [
      {
        icon: "V5",
        title: "V5 Logbook",
        desc: "UK registered. V5C present with the car.",
        badge: { kind: "check", label: "Verified" },
      },
      {
        icon: "SH",
        title: "Full Service History",
        desc: "Stamped service book from import date. Pre-import records provided.",
        badge: { kind: "check", label: "Full" },
      },
      {
        icon: "HPI",
        title: "HPI Clear",
        desc: "No outstanding finance, no write-off markers, no stolen markers.",
        badge: { kind: "check", label: "Clear" },
      },
      {
        icon: "MOT",
        title: "MOT History",
        desc: "Valid until February 2026. No advisories on last test.",
        badge: { kind: "check", label: "Valid" },
      },
      {
        icon: "PX",
        title: "Part Exchange",
        desc: "Seller is not considering part exchange on this occasion.",
        badge: { kind: "cross", label: "Not available" },
      },
    ] satisfies HistoryRow[],
  },
  sidebar: {
    priceLabel: "Asking price",
    price: "£68,000",
    priceNote: "No VAT · Private seller",
    quickFacts: [
      { key: "Location", val: "Yorkshire", good: false },
      { key: "Listed", val: "3 days ago", good: false },
      { key: "Views", val: "847", good: false },
      { key: "Saved by", val: "34 members", good: false },
      { key: "HPI", val: "Clear", good: true },
      { key: "MOT", val: "Feb 2026", good: true },
    ],
    seller: {
      initials: "JW",
      name: "James Whitfield",
      since: "Member since 2025 · Private seller",
      listings: "4",
      responseRate: "100%",
    },
  },
  comments: {
    sectionTitle: "Questions & comments",
    initialCount: 4,
    guidelinesHref: "#",
    threads: [
      {
        id: "t1",
        root: {
          id: "c1",
          avatar: "DK",
          name: "Dan K.",
          role: "community",
          time: "2 days ago",
          text: "Has the car ever been on a track day, even as a passenger vehicle? Also — is the original hard top included?",
        },
        sellerReply: {
          id: "c2",
          avatar: "JW",
          name: "James Whitfield",
          role: "seller",
          time: "2 days ago",
          text: "Never tracked — I can confirm that with the service history and previous owner documentation. And yes, the original Targa hard top is included. It's in excellent condition and comes with the car.",
        },
      },
      {
        id: "t2",
        root: {
          id: "c3",
          avatar: "SR",
          name: "Sam R.",
          role: "community",
          time: "1 day ago",
          text: "Stunning car. Is the price firm or is there any flexibility? Would you consider a viewing before making an offer?",
        },
        sellerReply: {
          id: "c4",
          avatar: "JW",
          name: "James Whitfield",
          role: "seller",
          time: "1 day ago",
          text: "Viewings are very welcome — use the enquiry button to arrange. Price reflects the originality and condition, but I'm happy to discuss with a serious buyer after a viewing.",
        },
      },
      {
        id: "t3",
        root: {
          id: "c5",
          avatar: "MT",
          name: "M. Tanaka",
          role: "community",
          time: "6 hours ago",
          text: "What tyres is it currently running? Originals or has it been updated?",
        },
        awaitingSeller: true,
      },
    ] satisfies CommentThread[],
  },
  related: {
    title: "You might also like",
    linkHref: "/listings?tag=jdm",
    linkLabel: "View all JDM",
    cards: [
      {
        gradient: "bg-[linear-gradient(145deg,#0e1620,#080f18)]",
        make: "Toyota",
        model: "Supra MK4",
        spec: "1997 · 3.0 Turbo · 62,000 mi · Manual",
        price: "£85,000",
        loc: "London",
      },
      {
        gradient: "bg-[linear-gradient(145deg,#22190e,#170f08)]",
        make: "Nissan",
        model: "Skyline GT-R",
        spec: "1999 · 2.6 Twin Turbo · 54,000 mi · Manual",
        price: "£72,000",
        loc: "Manchester",
      },
      {
        gradient: "bg-[linear-gradient(145deg,#1a1510,#201810)]",
        make: "Mazda",
        model: "RX-7 FD",
        spec: "1995 · 1.3 Twin Rotor · 81,000 mi · Manual",
        price: "£38,000",
        loc: "Bristol",
      },
    ] satisfies RelatedCard[],
  },
} as const;
