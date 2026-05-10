// shared chrome — injects masthead + footer + ticker into pages
(function() {
  const NAV = [
    { id: "long",    label: "Long Reads",    href: "archive.html?cat=long" },
    { id: "photo",   label: "Photo Essays",  href: "archive.html?cat=photo" },
    { id: "buying",  label: "Buying Guides", href: "archive.html?cat=buying" },
    { id: "culture", label: "Culture",       href: "archive.html?cat=culture" },
    { id: "watch",   label: "Watchlist",     href: "archive.html?cat=watch" },
    { id: "archive", label: "Archive",       href: "archive.html" },
    { id: "about",   label: "About",         href: "about.html" },
  ];

  const here = document.body.dataset.page || "";
  const navHTML = NAV.map(n =>
    `<li><a href="${n.href}" class="${n.id === here ? "is-active" : ""}">${n.label}</a></li>`
  ).join("");

  const mast = `
<header class="mast">
  <div class="mast__top container">
    <div class="mast__meta"><span class="mast__dot"></span> Live · <span data-clock>10:14:02</span> PST</div>
    <div class="mast__issue">Issue 014 · May 2026</div>
    <div class="mast__cta"><a class="mast__sub" href="index.html#subscribe">Subscribe →</a></div>
  </div>
  <div class="rule rule--ink"></div>
  <div class="mast__brand container">
    <a href="index.html" class="brand">
      <span class="brand__word">anything</span>
      <span class="brand__over">over</span>
      <span class="brand__word brand__word--tan">tan</span>
    </a>
    <div class="mast__tag">Any color you like — <em>as long as it's over tan.</em></div>
  </div>
  <div class="rule"></div>
  <nav class="mast__nav container">
    <ul>${navHTML}</ul>
    <div class="mast__search">⌕  Search the archive</div>
  </nav>
  <div class="rule"></div>
</header>`;

  const foot = `
<footer class="foot">
  <div class="foot__top container">
    <div class="foot__brand">
      <div class="brand brand--foot">
        <span class="brand__word">anything</span>
        <span class="brand__over">over</span>
        <span class="brand__word brand__word--tan">tan</span>
      </div>
      <p class="foot__line">A long-form blog about cars worth buying, written by people who actually drive them. Independent. Reader-funded.</p>
    </div>
    <div class="foot__col"><div class="foot__title">Sections</div><ul>
      <li><a href="archive.html?cat=long">Long Reads</a></li>
      <li><a href="archive.html?cat=photo">Photo Essays</a></li>
      <li><a href="archive.html?cat=buying">Buying Guides</a></li>
      <li><a href="archive.html?cat=culture">Culture</a></li>
      <li><a href="archive.html?cat=watch">Watchlist</a></li>
    </ul></div>
    <div class="foot__col"><div class="foot__title">The Magazine</div><ul>
      <li><a href="archive.html">Issue 014 (Current)</a></li>
      <li><a href="archive.html">Archive</a></li>
      <li><a href="archive.html">Print Annual</a></li>
      <li><a href="about.html#tip">Submit a tip</a></li>
    </ul></div>
    <div class="foot__col"><div class="foot__title">Elsewhere</div><ul>
      <li><a>Instagram</a></li><li><a>RSS</a></li><li><a>Mastodon</a></li><li><a>Bluesky</a></li>
    </ul></div>
  </div>
  <div class="foot__base container">
    <span>© 2026 anythingovertan ltd.</span>
    <span class="foot__motto">Any color you like, as long as it's over tan.</span>
    <span>Set in Instrument Serif & Helvetica. Photographed on Fujifilm.</span>
  </div>
</footer>`;

  // mount
  const mount = (sel, html) => {
    const el = document.querySelector(sel);
    if (el) el.innerHTML = html;
  };
  mount("[data-mast]", mast);
  mount("[data-foot]", foot);

  // live clock
  const fmtClock = d => d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
  const tickClock = () => {
    document.querySelectorAll("[data-clock]").forEach(el => el.textContent = fmtClock(new Date()));
  };
  tickClock();
  setInterval(tickClock, 1000);

  // scroll reveal
  const io = new IntersectionObserver((ents) => {
    ents.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
})();
