// anythingovertan — homepage entry
const { useEffect, useRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "density": "regular",
  "showGrain": true,
  "marqueeSpeed": 60
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = (window.useTweaks || (() => [TWEAK_DEFAULTS, () => {}]))(TWEAK_DEFAULTS);

  // apply density to <html> so CSS vars cascade everywhere
  useEffect(() => {
    document.documentElement.setAttribute("data-density", tweaks.density);
    document.documentElement.style.setProperty("--marquee-dur", `${tweaks.marqueeSpeed}s`);
    document.body.classList.toggle("no-grain", !tweaks.showGrain);
  }, [tweaks.density, tweaks.showGrain, tweaks.marqueeSpeed]);

  // scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    const io = new IntersectionObserver(
      (ents) => {
        ents.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });

  const D = window.AOT_DATA;

  return (
    <>
      <Masthead sections={D.SECTIONS} />
      <Hero data={D.HERO} />
      <Ticker items={D.TICKER} />
      <FeatureGrid features={D.FEATURES} />
      <EssayBand data={D.ESSAY} />
      <Watchlist rows={D.WATCH} />
      <Newsletter />
      <Footer />

      {window.TweaksPanel && (
        <window.TweaksPanel>
          <window.TweakSection label="Layout">
            <window.TweakRadio
              label="Density"
              value={tweaks.density}
              onChange={(v) => setTweak("density", v)}
              options={[
                { value: "compact",  label: "Compact"  },
                { value: "regular",  label: "Regular"  },
                { value: "spacious", label: "Spacious" },
              ]}
            />
          </window.TweakSection>
          <window.TweakSection label="Atmosphere">
            <window.TweakToggle
              label="Film grain overlay"
              value={tweaks.showGrain}
              onChange={(v) => setTweak("showGrain", v)}
            />
            <window.TweakSlider
              label="Marquee speed"
              unit="s"
              min={20}
              max={120}
              step={5}
              value={tweaks.marqueeSpeed}
              onChange={(v) => setTweak("marqueeSpeed", v)}
            />
          </window.TweakSection>
        </window.TweaksPanel>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
