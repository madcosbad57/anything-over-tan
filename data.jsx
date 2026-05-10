// content for anythingovertan — every story carries a [paint] OVER TAN spec line
const HERO = {
  kicker: "Issue 014 · Long Read",
  spec: "Guards Red Over Tan",
  title: ["The 996 Generation:", <em key="i">Porsche's runt grows up</em>],
  dek: "For two decades, fried-egg headlights and a switch to water-cooling kept the 996 in the bargain bin. The smart money is already gone — here's the case for buying what's left.",
  byline: "Marco Vieth",
  date: "May 8, 2026",
  read: "18 min",
  shot: { film: "Provia 100F", lens: "XF 23mm f/2", loc: "Carmel Valley, CA", frame: "04 / 36" },
};

const TICKER = [
  { tag: "Watchlist", text: "1995 Lexus LS400 in Moonstone over Tan — $11k, asking" },
  { tag: "Quoted",    text: "Manual swap on a 996.1 — $7,400 turnkey" },
  { tag: "Argued",    text: "The W124 wagon is the only correct family car" },
  { tag: "Spec",      text: "Velocity Yellow over Tan, or don't bother" },
  { tag: "Heard",     text: "Five E39 Touring sightings in seven days" },
  { tag: "Pending",   text: "Long-term test: Defender 110 on 33s" },
];

const FEATURES = [
  {
    id: "f1",
    section: "Buying Guide",
    spec: "Nightshade over Tan",
    title: ["Six manual ", <em key="i">grand tourers</em>, " under $40k, ranked"],
    dek: "Three pedals, four seats, and a back road that won't end. We sat down with the spreadsheet and a bottle of something cheap.",
    author: "S. Okafor",
    date: "May 5",
    read: "12 min",
    photo: { film: "Velvia 50", subj: "BMW 850Ci", loc: "Sausalito" },
    span: "tall",
  },
  {
    id: "f2",
    section: "Photo Essay",
    spec: "British Racing Green over Tan",
    title: ["5:42 AM, ", <em key="i">Highway 1</em>],
    dek: "Twenty-two frames between Bixby and Big Sur. Two coffees, no other traffic.",
    author: "K. Halloran",
    date: "May 3",
    read: "Photo essay · 22 frames",
    photo: { film: "Acros 100 II", subj: "Aston DB9", loc: "Bixby Bridge", dark: true },
    span: "wide",
  },
  {
    id: "f3",
    section: "Long Feature",
    spec: "Oxford Green over Tan",
    title: ["The E39 M5 is ", <em key="i">still</em>, " the answer"],
    dek: "Five hundred miles in a tidy 2002 reveals what the spec sheet has been hinting at for a quarter-century.",
    author: "M. Vieth",
    date: "May 1",
    read: "16 min",
    photo: { film: "Pro 400H", subj: "BMW E39 M5", loc: "Skyline Blvd" },
    span: "med",
  },
  {
    id: "f4",
    section: "Culture",
    spec: "Rubystone over Tan",
    title: ["A field guide to ", <em key="i">Luftgekühlt</em>],
    dek: "What to wear, what to bring, and the seven cars you'll see and pretend not to recognize.",
    author: "J. Park",
    date: "Apr 28",
    read: "9 min",
    photo: { film: "Provia 400X", subj: "964 Carrera RS", loc: "Universal Studios lot" },
    span: "med",
  },
  {
    id: "f5",
    section: "Buying Guide",
    spec: "Black Onyx over Tan",
    title: ["Don't sleep on the ", <em key="i">SC430</em>],
    dek: "It is not a sports car. That is, in fact, the entire point. A patient enthusiast's case for the unloved Lexus.",
    author: "T. Reyes",
    date: "Apr 26",
    read: "11 min",
    photo: { film: "Velvia 100", subj: "Lexus SC430", loc: "Pasadena", dark: true },
    span: "med",
  },
  {
    id: "f6",
    section: "Long Feature",
    spec: "Valencia Orange over Tan",
    title: ["Why the BMW 1M is ", <em key="i">quietly doubling</em>],
    dek: "Production was 740 cars for North America. The market has finally noticed. We crunch the auction comps.",
    author: "S. Okafor",
    date: "Apr 22",
    read: "14 min",
    photo: { film: "XTRA 400", subj: "BMW 1M", loc: "Angeles Crest" },
    span: "med",
  },
];

// for the photo-essay full-bleed band
const ESSAY = {
  kicker: "Photo Essay",
  spec: "Black & White Over Tan",
  title: ["Sundays at ", <em key="i">Cars & Coffee</em>],
  dek: "Forty-three frames before the donuts ran out. Shot on Acros II, scanned wet, no edit.",
  meta: "Frames 01–43 · Acros 100 II · Spring 2026",
  shots: [
    { subj: "964 Turbo S",    loc: "Lot 2",   film: "Acros II" },
    { subj: "Datsun 240Z",    loc: "Lot 1",   film: "Acros II" },
    { subj: "F40 (yes, F40)", loc: "Curb",    film: "Acros II" },
    { subj: "E30 M3",         loc: "Lot 4",   film: "Acros II" },
  ],
};

// the watchlist — buying intel
const WATCH = [
  { car: "Porsche 996.1 Carrera",   spec: "Guards Red over Tan",        price: "$28k",  trend: "+6%",  take: "The runt grows up. Buy a tidy one before the C4S runs." },
  { car: "BMW E39 M5",              spec: "Oxford Green over Tan",      price: "$54k",  trend: "+11%", take: "Everyone knows. We agree with everyone." },
  { car: "Lexus SC430",             spec: "Black Onyx over Tan",        price: "$14k",  trend: "+3%",  take: "Boulevard car. Top down, V8, broken in." },
  { car: "Aston Martin DB9 Volante", spec: "British Racing Green over Tan", price: "$32k", trend: "+4%", take: "Depreciation has done the hard work. You do the rest." },
  { car: "BMW 1M Coupé",            spec: "Valencia Orange over Tan",   price: "$78k",  trend: "+18%", take: "Quietly doubling. Speak softly, bid hard." },
  { car: "Mercedes W124 Wagon",     spec: "Smoke Silver over Tan",      price: "$22k",  trend: "+9%",  take: "Engineered for the next century. Buy the four-eye." },
];

const SECTIONS = ["Long Reads", "Photo Essays", "Buying Guides", "Culture", "Watchlist", "Archive"];

window.AOT_DATA = { HERO, TICKER, FEATURES, ESSAY, WATCH, SECTIONS };
