// components for anythingovertan homepage
const { useEffect, useState, useRef } = React;

// ─── photo placeholder ─────────────────────────────────────────
function Photo({ film, subj, loc, frame, dark, className = "", style = {}, children }) {
  return (
    <div className={`photo ${dark ? "photo--dark" : ""} ${className}`} style={style}>
      <div className="photo__crop">{frame || "•"}</div>
      <div className="photo__cap">
        <span>{[film, subj].filter(Boolean).join(" · ")}</span>
        <span>{loc}</span>
      </div>
      {children}
    </div>
  );
}

// ─── nav / masthead ────────────────────────────────────────────
function Masthead({ sections }) {
  const [now, setNow] = useState(() => fmtClock(new Date()));
  useEffect(() => {
    const i = setInterval(() => setNow(fmtClock(new Date())), 1000);
    return () => clearInterval(i);
  }, []);
  return (
    <header className="mast">
      <div className="mast__top container">
        <div className="mast__meta">
          <span className="mast__dot" /> Live · {now} PST
        </div>
        <div className="mast__issue">Issue 014 · May 2026</div>
        <div className="mast__cta">
          <a className="mast__sub">Subscribe →</a>
        </div>
      </div>
      <div className="rule rule--ink" />
      <div className="mast__brand container">
        <a className="brand">
          <span className="brand__word">anything</span>
          <span className="brand__over">over</span>
          <span className="brand__word brand__word--tan">tan</span>
        </a>
        <div className="mast__tag">
          Any color you like — <em>as long as it's over tan.</em>
        </div>
      </div>
      <div className="rule" />
      <nav className="mast__nav container">
        <ul>
          {sections.map((s, i) => (
            <li key={s} className={i === 0 ? "is-active" : ""}>{s}</li>
          ))}
        </ul>
        <div className="mast__search">⌕  Search the archive</div>
      </nav>
      <div className="rule" />
    </header>
  );
}

function fmtClock(d) {
  return d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
}

// ─── hero ──────────────────────────────────────────────────────
function Hero({ data }) {
  return (
    <section className="hero container">
      <div className="hero__head reveal in">
        <div className="seclabel">{data.kicker}</div>
        <div className="hero__spec">
          <span className="spec__chip">{data.spec}</span>
          <span className="hero__byline">By {data.byline} · {data.date} · {data.read}</span>
        </div>
      </div>

      <div className="hero__body">
        <h1 className="hero__title display rise" style={{ animationDelay: "120ms" }}>
          {data.title}
        </h1>

        <div className="hero__photoWrap rise" style={{ animationDelay: "240ms" }}>
          <Photo
            dark
            className="hero__photo"
            film={data.shot.film}
            subj="996.1 Carrera"
            loc={data.shot.loc}
            frame={data.shot.frame}
          >
            <div className="hero__overlay">
              <div className="hero__filmStrip">
                <span>FUJIFILM</span>
                <span>{data.shot.film}</span>
                <span>{data.shot.lens}</span>
                <span>1/250 · f/4</span>
              </div>
            </div>
          </Photo>
          <div className="hero__caption">
            <span className="hero__caption-num">01 / 14</span>
            <span>Photographed by K. Halloran for anythingovertan, Issue 014</span>
          </div>
        </div>

        <aside className="hero__dek rise" style={{ animationDelay: "360ms" }}>
          <p>{data.dek}</p>
          <div className="hero__readMore">
            <a className="readlink">Read the feature →</a>
          </div>
        </aside>
      </div>
    </section>
  );
}

// ─── ticker ────────────────────────────────────────────────────
function Ticker({ items }) {
  const track = (
    <div className="marquee__track">
      {[...items, ...items, ...items].map((t, i) => (
        <span key={i} className="marquee__item">
          <span className="marquee__dot">●</span>
          <strong>{t.tag}</strong>
          <span>{t.text}</span>
        </span>
      ))}
    </div>
  );
  return <div className="marquee" aria-label="Ticker">{track}</div>;
}

// ─── feature card ──────────────────────────────────────────────
function FeatureCard({ f, layout }) {
  return (
    <a className={`card card--${layout}`}>
      <Photo
        film={f.photo.film}
        subj={f.photo.subj}
        loc={f.photo.loc}
        dark={f.photo.dark}
        className={`card__photo card__photo--${layout}`}
        frame={f.id.toUpperCase()}
      />
      <div className="card__body">
        <div className="card__meta">
          <span className="card__section">{f.section}</span>
          <span className="card__spec">{f.spec}</span>
        </div>
        <h3 className="card__title display headline">{f.title}</h3>
        {f.dek && <p className="card__dek">{f.dek}</p>}
        <div className="card__by">
          <span>{f.author}</span>
          <span>{f.date}</span>
          <span>{f.read}</span>
        </div>
      </div>
    </a>
  );
}

// ─── feature grid ──────────────────────────────────────────────
function FeatureGrid({ features }) {
  // first two are "above the fold" hero pair; remaining are 3-up + 1 wide footer
  const [a, b, c, d, e, f] = features;
  return (
    <section className="container grid-section">
      <div className="seclabel reveal">In this issue</div>
      <h2 className="grid__lead display reveal">
        Six pieces. <em>One constant.</em>
      </h2>

      <div className="grid grid--top">
        <div className="grid__cell grid__cell--tall reveal">
          <FeatureCard f={a} layout="tall" />
        </div>
        <div className="grid__cell grid__cell--wide reveal">
          <FeatureCard f={b} layout="wide" />
        </div>
      </div>

      <div className="grid grid--three">
        {[c, d, e].map((it) => (
          <div key={it.id} className="grid__cell reveal">
            <FeatureCard f={it} layout="med" />
          </div>
        ))}
      </div>

      <div className="grid grid--featurerow reveal">
        <FeatureRow f={f} />
      </div>
    </section>
  );
}

function FeatureRow({ f }) {
  return (
    <a className="card row">
      <Photo
        film={f.photo.film}
        subj={f.photo.subj}
        loc={f.photo.loc}
        dark={f.photo.dark}
        className="row__photo"
        frame="MARQUEE"
      />
      <div className="row__body">
        <div className="card__meta">
          <span className="card__section">{f.section}</span>
          <span className="card__spec">{f.spec}</span>
        </div>
        <h3 className="row__title display headline">{f.title}</h3>
        <p className="row__dek">{f.dek}</p>
        <div className="card__by">
          <span>{f.author}</span>
          <span>{f.date}</span>
          <span>{f.read}</span>
          <span className="row__more">Read the feature →</span>
        </div>
      </div>
    </a>
  );
}

// ─── photo essay band ──────────────────────────────────────────
function EssayBand({ data }) {
  return (
    <section className="essay">
      <div className="essay__head container reveal">
        <div className="seclabel essay__label">{data.kicker}</div>
        <div className="essay__spec">{data.spec}</div>
      </div>
      <h2 className="essay__title display container reveal">{data.title}</h2>
      <p className="essay__dek container reveal">{data.dek}</p>

      <div className="essay__strip">
        {data.shots.map((s, i) => (
          <div className="essay__shot reveal" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
            <Photo
              dark
              film={s.film}
              subj={s.subj}
              loc={s.loc}
              frame={`${String(i + 1).padStart(2, "0")} / 43`}
              className="essay__photo"
            />
            <div className="essay__cap">{s.subj}</div>
          </div>
        ))}
      </div>
      <div className="essay__meta container">
        <span>{data.meta}</span>
        <a className="readlink readlink--light">View all 43 frames →</a>
      </div>
    </section>
  );
}

// ─── watchlist ─────────────────────────────────────────────────
function Watchlist({ rows }) {
  return (
    <section className="watch container">
      <div className="watch__head reveal">
        <div>
          <div className="seclabel">The Watchlist</div>
          <h2 className="watch__title display">
            Six cars we'd <em>buy this week</em>.
          </h2>
        </div>
        <div className="watch__sub">
          <p>
            Refreshed every Friday. Median asking, six-month delta, and our
            unedited take. We do not get paid for any of this.
          </p>
          <div className="watch__legend">
            <span><span className="dot dot--up" /> rising</span>
            <span><span className="dot dot--flat" /> flat</span>
            <span><span className="dot dot--down" /> cooling</span>
          </div>
        </div>
      </div>

      <div className="watch__table">
        <div className="watch__row watch__row--head">
          <div className="col col--num">№</div>
          <div className="col col--car">Car</div>
          <div className="col col--spec">Spec</div>
          <div className="col col--price">Median</div>
          <div className="col col--trend">6 mo.</div>
          <div className="col col--take">Our take</div>
        </div>
        {rows.map((r, i) => (
          <div className="watch__row reveal" key={i} style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="col col--num">{String(i + 1).padStart(2, "0")}</div>
            <div className="col col--car"><strong>{r.car}</strong></div>
            <div className="col col--spec">{r.spec}</div>
            <div className="col col--price">{r.price}</div>
            <div className="col col--trend"><TrendDot v={r.trend} /> {r.trend}</div>
            <div className="col col--take">{r.take}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TrendDot({ v }) {
  const isUp = v.startsWith("+");
  return <span className={`dot ${isUp ? "dot--up" : "dot--down"}`} />;
}

// ─── newsletter + footer ───────────────────────────────────────
function Newsletter() {
  return (
    <section className="news container">
      <div className="news__inner reveal">
        <div className="news__copy">
          <div className="seclabel">The Drop · Friday morning</div>
          <h2 className="news__title display">
            One car, one spec, one paragraph. <em>Every Friday.</em>
          </h2>
          <p className="news__dek">
            No affiliate links. No paid placements. Just a single car we'd
            actually write a check for, with the listing attached.
          </p>
        </div>
        <form className="news__form" onSubmit={(e) => e.preventDefault()}>
          <input className="news__input" placeholder="you@yourgarage.com" />
          <button className="news__btn">Subscribe</button>
          <div className="news__fine">14,082 readers · Unsubscribe in one click</div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <div className="foot__top container">
        <div className="foot__brand">
          <div className="brand brand--foot">
            <span>anything</span>
            <span className="brand__over">over</span>
            <span className="brand__word--tan">tan</span>
          </div>
          <p className="foot__line">
            A long-form blog about cars worth buying, written by people who
            actually drive them. Independent. Reader-funded.
          </p>
        </div>
        <FootCol title="Sections" items={["Long Reads", "Photo Essays", "Buying Guides", "Culture", "Watchlist"]} />
        <FootCol title="The Magazine" items={["Issue 014 (Current)", "Archive", "Print Annual", "Submit a tip"]} />
        <FootCol title="Elsewhere" items={["Instagram", "RSS", "Mastodon", "Bluesky"]} />
      </div>
      <div className="foot__base container">
        <span>© 2026 anythingovertan ltd.</span>
        <span className="foot__motto">Any color you like, as long as it's over tan.</span>
        <span>Set in Instrument Serif & Helvetica. Photographed on Fujifilm.</span>
      </div>
    </footer>
  );
}

function FootCol({ title, items }) {
  return (
    <div className="foot__col">
      <div className="foot__title">{title}</div>
      <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>
    </div>
  );
}

Object.assign(window, {
  Masthead, Hero, Ticker, FeatureGrid, EssayBand, Watchlist, Newsletter, Footer,
});
