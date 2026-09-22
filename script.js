// ============================================================
// Tragent — interactions
// ============================================================

// Theme toggle
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  if (!btn) return;

  const saved = localStorage.getItem('tragent-theme');
  if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);

  btn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('tragent-theme', next);
    btn.setAttribute('aria-label', next === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  });
})();

// Nav: glass background once scrolled past the top
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Mobile burger menu
const burger = document.getElementById("burger");
const navDrawer = document.getElementById("navDrawer");
if (burger && navDrawer) {
  burger.addEventListener("click", () => {
    const open = burger.classList.toggle("open");
    navDrawer.classList.toggle("open", open);
    nav.classList.toggle("menu-open", open);
    burger.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  });
  navDrawer.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      burger.classList.remove("open");
      navDrawer.classList.remove("open");
      nav.classList.remove("menu-open");
      burger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}

// Scroll-reveal via IntersectionObserver
const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Activate CSS animations on sections when they scroll into view
const animObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("anim-active");
        animObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 }
);
document.querySelectorAll(".how-works").forEach((el) => animObserver.observe(el));

// Hero app frame: tilt settles flat as it scrolls into view
const heroApp = document.getElementById("heroApp");
if (heroApp) {
  const settleObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          heroApp.classList.add("settled");
          settleObserver.disconnect();
        }
      }
    },
    { threshold: 0.45 }
  );
  settleObserver.observe(heroApp);
}

// Mouse-tracked glow on cards
document.querySelectorAll(".glowable").forEach((card) => {
  card.addEventListener("pointermove", (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  });
});

// Hero workflow card animation
(function () {
  const panel = document.querySelector('.conv-panel');
  if (!panel) return;

  const steps = [
    document.getElementById('cs1'),
    document.getElementById('cs2'),
    document.getElementById('cs3'),
    document.getElementById('cs4'),
    document.getElementById('cs5'),
  ];
  const icons = [
    document.getElementById('ci1'),
    document.getElementById('ci2'),
    document.getElementById('ci3'),
    document.getElementById('ci4'),
    document.getElementById('ci5'),
  ];
  const doneCount = document.getElementById('convDone');
  const countWrap = document.getElementById('convCount');
  const allDonePill = document.getElementById('convAllDone');

  function setDone(icon, step, count) {
    icon.classList.remove('active');
    icon.classList.add('done');
    step.classList.add('conv-step--done');
    if (doneCount) doneCount.textContent = count;
    if (count === steps.length) {
      if (countWrap) countWrap.style.display = 'none';
      if (allDonePill) allDonePill.classList.add('visible');
    }
  }

  function setActive(icon) {
    icon.classList.add('active');
  }

  function reset() {
    icons.forEach(i => { i.classList.remove('done', 'active'); });
    steps.forEach(s => s.classList.remove('conv-step--done'));
    if (doneCount) doneCount.textContent = '0';
    if (countWrap) countWrap.style.display = '';
    if (allDonePill) allDonePill.classList.remove('visible');
  }

  function run() {
    reset();
    const t = setTimeout;
    t(() => setActive(icons[0]), 600);
    t(() => setDone(icons[0], steps[0], 1), 1800);
    t(() => setActive(icons[1]), 2100);
    t(() => setDone(icons[1], steps[1], 2), 3000);
    t(() => setActive(icons[2]), 3300);
    t(() => setDone(icons[2], steps[2], 3), 4400);
    t(() => setActive(icons[3]), 4700);
    t(() => setDone(icons[3], steps[3], 4), 5800);
    t(() => setActive(icons[4]), 6100);
    t(() => setDone(icons[4], steps[4], 5), 7200);
    t(() => run(), 12000);
  }

  // Kick off when card enters view
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { run(); observer.disconnect(); }
  }, { threshold: 0.3 });
  observer.observe(panel);
})();

/* Getting started carousel: sync the scroll-indicator dashes on mobile. */
(function () {
  const grid = document.querySelector('.gs-grid');
  const dots = [...document.querySelectorAll('.gs-dots .gs-dot')];
  if (!grid || !dots.length) return;
  const cards = [...grid.querySelectorAll('.gs-card')];
  let raf = null;
  function update() {
    raf = null;
    const mid = grid.scrollLeft + grid.clientWidth / 2;
    let best = 0, bestDist = Infinity;
    cards.forEach((c, i) => {
      const center = c.offsetLeft + c.offsetWidth / 2;
      const d = Math.abs(center - mid);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === best));
  }
  grid.addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(update); }, { passive: true });
})();
