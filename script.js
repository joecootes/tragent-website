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

  function setDone(icon, step, count) {
    icon.classList.remove('active');
    icon.classList.add('done');
    step.classList.add('conv-step--done');
    if (doneCount) doneCount.textContent = count;
  }

  function setActive(icon) {
    icon.classList.add('active');
  }

  function reset() {
    icons.forEach(i => { i.classList.remove('done', 'active'); });
    steps.forEach(s => s.classList.remove('conv-step--done'));
    if (doneCount) doneCount.textContent = '0';
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

// Try-live demo: keep the interaction above the fold and show the magic first.
const demoForm = document.getElementById("demoForm");
if (demoForm) {
  const statusPill = document.getElementById("demoStatusPill");
  const replyPill = document.getElementById("replyPill");
  const previewEmail = document.getElementById("previewEmail");
  const previewSubject = document.getElementById("previewSubject");
  const previewReply = document.getElementById("previewReply");
  const copyReply = document.getElementById("copyReply");
  const steps = Array.from(document.querySelectorAll("[data-demo-step]"));

  const setStep = (stepName) => {
    const currentIndex = steps.findIndex((step) => step.dataset.demoStep === stepName);
    steps.forEach((step, index) => {
      step.classList.toggle("active", index === currentIndex);
      step.classList.toggle("complete", index < currentIndex);
    });
  };

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  demoForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(demoForm);
    const name = String(formData.get("name") || "there").trim();
    const email = String(formData.get("email") || "your inbox").trim();
    const trade = String(formData.get("trade") || "trade business").trim();
    const enquiry = String(formData.get("enquiry") || "").trim();
    const firstName = name.split(" ")[0] || "there";

    const button = demoForm.querySelector("button[type='submit']");
    button.disabled = true;
    button.textContent = "Generating reply...";
    statusPill.textContent = "Working";
    replyPill.textContent = "Drafting";
    previewEmail.textContent = email;
    previewSubject.textContent = "Re: Your enquiry";
    previewReply.textContent = "Tragent is reading the enquiry...";

    setStep("received");
    await wait(450);
    setStep("reading");
    previewReply.textContent = `Customer enquiry:\n${enquiry}`;
    await wait(650);
    setStep("drafting");
    previewReply.textContent = "Writing a fast, useful first reply...";
    await wait(850);

    const reply = `Hi ${firstName}, thanks for getting in touch.\n\nYes, we can help with that. To get this moving, could you send over your postcode, a contact number, and a couple of times that would suit for a quick look or call?\n\nOnce I have those details, I can let you know the next step.\n\nThanks,\n${trade}`;

    setStep("ready");
    statusPill.textContent = "Ready";
    replyPill.textContent = "Ready to approve";
    previewReply.textContent = reply;
    copyReply.disabled = false;
    copyReply.dataset.reply = reply;
    button.disabled = false;
    button.textContent = "Send another test";
    document.querySelector(".demo-result-section")?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  });

  copyReply?.addEventListener("click", async () => {
    const reply = copyReply.dataset.reply;
    if (!reply) return;
    try {
      await navigator.clipboard.writeText(reply);
      copyReply.textContent = "Copied";
      setTimeout(() => {
        copyReply.textContent = "Copy reply";
      }, 1400);
    } catch {
      copyReply.textContent = "Select reply to copy";
    }
  });
}
