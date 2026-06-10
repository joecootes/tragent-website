// ============================================================
// Tragent — interactions
// ============================================================

// Nav: glass background once scrolled past the top
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

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
