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

// Hero conversation panel animation
(function () {
  const cm1 = document.getElementById('cm1');
  const cl1 = document.getElementById('cl1');
  const cm2 = document.getElementById('cm2');
  const cbTyping = document.getElementById('cb-typing');
  const cbText = document.getElementById('cb-text');
  const cm3 = document.getElementById('cm3');
  const footer = document.getElementById('convFooter');

  if (!cm1) return;

  // Hide text bubble initially; typing bubble shows first
  cbText.style.display = 'none';

  function show(el) { el.classList.add('conv-visible'); }

  function reset() {
    [cm1, cl1, cm2, cm3, footer].forEach(el => el.classList.remove('conv-visible'));
    cbTyping.style.display = '';
    cbText.style.display = 'none';
  }

  function run() {
    reset();
    const t = (fn, ms) => setTimeout(fn, ms);
    t(() => show(cm1), 900);
    t(() => show(cl1), 2500);
    t(() => show(cm2), 3500);
    t(() => { cbTyping.style.display = 'none'; cbText.style.display = 'block'; }, 5300);
    t(() => show(cm3), 7500);
    t(() => show(footer), 8700);
    t(run, 14000);
  }

  // Start once the panel scrolls into view
  const panelEl = cm1.closest('.conv-panel');
  const startObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      run();
      startObserver.disconnect();
    }
  }, { threshold: 0.3 });
  startObserver.observe(panelEl);
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
