import {
  Editorial,
  Footer,
  Hero,
  Listings,
  Manifesto,
  Nav,
  ProjectDrive,
  SearchBar,
  Ticker,
} from "@/components";

export default function Home() {
  return (
    <div className="relative z-[1] flex min-h-full flex-col bg-[var(--paper)]">
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Ticker />
        <SearchBar />
        <Listings />
        <Editorial />
        <Manifesto />
        <ProjectDrive />
        <Footer />
      </main>
    </div>
  );
}
