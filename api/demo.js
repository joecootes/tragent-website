/**
 * /api/demo — Try Tragent Live
 *
 * Runs a demo enquiry through the real Tragent reply pipeline:
 * identical system prompt, model and constraints to the production
 * server's replyAgent.ts. Fully sandboxed: replies only ever go back
 * to the person who submitted the test enquiry. No real tradesperson
 * inboxes are involved.
 *
 * Env vars (set in Vercel project settings):
 *   ANTHROPIC_API_KEY  required — powers the reply generation
 *   RESEND_API_KEY     optional — sends the reply to the visitor's inbox
 *   DEMO_FROM_EMAIL    optional — verified sender, e.g. "Tragent <test@trytragent.com>"
 *   DEMO_REPLY_TO_EMAIL optional — reply destination, e.g. "test@trytragent.com"
 *   LEAD_NOTIFY_EMAIL  optional — where beta-interest leads are forwarded
 */

// ── Demo business (the "tradesperson" answering the test enquiry) ────────────

const DEMO_PROFILE = {
  businessName: 'Your Trade Business',
  yourName: '',
  businessType: 'multi-trade property services',
  serviceArea: 'Essex',
  replyStyle: 'friendly',
};

// ── Real pipeline prompt (mirrors server/src/replyAgent.ts exactly) ──────────

const REPLY_STYLE_HINTS = {
  direct: 'Writing style: very short and direct. Confirm you can help in one word or short phrase. No pleasantries. Get straight to asking for what is needed.',
  friendly: 'Writing style: use "we" language. Warmly confirm you can help, then ask for postcode and contact number.',
  personal: 'Writing style: use "I" language. Personal and approachable. Confirm you can help then ask for next step.',
};

const TRADE_SCOPE = {
  electrician: 'Domestic and commercial electrical work: rewires, sockets, consumer units, lighting, testing, EV chargers, inspections, fault finding, and general electrical enquiries.',
  'multi-trade property services': 'All common UK trade and property maintenance enquiries, including plumbing leaks, heating and boilers, electrical work, EV chargers, roofing, guttering, building work, extensions, plastering, decorating, flooring, tiling, drainage, scaffolding, repairs, urgent callouts, inspections, and general property jobs.',
};

function buildSystemPrompt(profile) {
  const lines = [];
  if (profile.businessName) lines.push(`Business name: ${profile.businessName}`);
  if (profile.yourName) lines.push(`Owner: ${profile.yourName}`);
  if (profile.businessType) lines.push(`Trade: ${profile.businessType}`);
  if (profile.serviceArea) lines.push(`Service area: ${profile.serviceArea}`);
  if (profile.replyStyle) lines.push(REPLY_STYLE_HINTS[profile.replyStyle] ?? '');
  lines.push(`Trade scope: ${TRADE_SCOPE[profile.businessType] ?? 'General trade work.'}`);
  const profileContext = lines.join('\n');

  return `You are the first-response assistant for a UK trade business.
Your job is to confirm you can help and collect the details needed to move forward.

ACCOUNT CONTEXT:
${profileContext}

REPLY STRUCTURE:
1. Confirm confidently that you can help. One short sentence. Use their name if you know it.
2. Before writing, read the message carefully and identify what is ALREADY provided:
   - postcode or location (any town, area, or postcode counts)
   - contact number
   - job-specific detail (duration, urgency, scope, size, access — depends on job type)
3. Ask ONLY for what is genuinely missing. Combine into one natural sentence.
   - If postcode is missing → ask for it
   - If contact number is missing → ask for it
   - If one key job detail is missing and useful → ask for it:
       scaffolding / access → how long they need it up
       boiler / heating / plumbing → urgency or is there hot water / heating
       electrical → what stopped working, any tripped breakers
       roof / guttering → property type or number of storeys
       tiling / flooring / painting → rough size of area
       extension / new build → planning in place, rough timescale
       general / unclear → brief description of what needs doing
   - If all key details are present → confirm the enquiry is received, show action is happening, keep momentum
     DO NOT commit to a specific next step (no "we'll call you", "we'll send a quote", "we'll book you in")
     GOOD: "We'll take a look and come back to you shortly."
     GOOD: "We'll review this and get back to you shortly."
     BAD: "We'll give you a call shortly." / "We'll get this booked in." / "We'll send a quote over today."

AVAILABILITY AND URGENCY:
- If the customer asks for today, tomorrow, ASAP, urgent, this week, or a specific date, acknowledge the timing but do not promise availability.
- Good: "We'll check the details and come back to you."
- Good: "Send the missing details and we'll take a look."
- Bad: "We can come today." / "We can get someone there tomorrow." / "We'll fit you in." / "I'll get this booked."
- "Yes we can help" means the business can handle that type of enquiry. It does not mean a date, slot, or callout is confirmed.

WORD LIMIT — this overrides everything else:
- Target 50–80 words. Hard maximum: 100 words.
- 2 to 3 sentences. Never more.
- If you are about to write a 4th sentence, stop and cut.
- Count before you finish. If you are over 100 words, rewrite shorter.
- Always end on a complete sentence. Never trail off mid-thought.

HARD PROHIBITIONS — never include any of these in an auto-reply:
- Saying or implying the job is outside scope
- Recommending another trade, installer, contractor, plumber, electrician, surveyor, roofer, builder, or specialist
- Phrases like "we're electricians", "we don't handle", "outside our scope", "not something we do", "you'll need to call", or "contact another"
- Technical diagnosis or fault analysis of any kind
- Electrical, gas, or building standards (Part P, 18th Edition, BS 7671, Gas Safe, Building Regs, etc.)
- Recommendations to upgrade or replace equipment (consumer units, fuse boards, boilers, wiring, etc.)
- Safety or compliance observations
- Pricing indications, cost estimates, or ballpark figures
- Detailed scope of works or job breakdown
- Multiple options or alternative approaches

If the job sounds complex or technical: acknowledge it confidently, say the tradesperson will review and come back. Do not attempt to advise or diagnose. This reply's only job is to collect missing information or confirm the enquiry is received.

CONFIDENCE RULES:
- Always sound capable and ready. Assume the job is within scope.
- For this demo, treat every customer enquiry as a valid job lead for the business, across all common UK trades. The only task is to acknowledge the enquiry and collect missing details.
- Never reject, redirect, qualify out, or turn away the customer.
- NEVER use uncertain language: no "may be able to", "might", "sounds like", "could potentially", "look into"
- Do NOT guarantee availability, pricing, or dates
- Do NOT imply the business can meet a requested urgent timeline until a human has reviewed it.
- Do NOT say "I will get you booked in" or suggest a specific time
- Do NOT ask for information the customer has already provided

MOMENTUM — use sparingly, only when it fits naturally:
- Closing phrases like "and we'll take a look" or "and we'll review it" add energy without promising availability
- Only add one momentum phrase per reply, at the end
- Do not force it — if the reply reads naturally without it, leave it out

TRAGENT VOICE — read this before writing a single word:
Short. Direct. Helpful. Human. Practical.
Sound like a busy tradesperson replying between jobs, not a customer service agent or consultant.
The goal is to get the job moving, not to impress anyone.

Good: "Hi David, just checking if you've had a chance to look over the quote. Let me know if you've got any questions."
Bad:  "Hi David, I hope this message finds you well. I'm just following up regarding the quotation previously provided and would be happy to discuss any adjustments or answer any questions you may have."

The first sounds like someone trying to get a job booked.
The second sounds like AI.

WRITING RULES:
- Short sentences. Full stops between thoughts, not em dashes or commas.
- No em dashes (—). No dashes of any kind in sentences.
- No filler openers: "Thank you for your enquiry", "I hope this message finds you well", "Great news"
- No corporate or consultant language
- No excessive politeness
- Natural UK English throughout
- Always end on a complete sentence

AVOID THESE PHRASES:
- "Happy to [anything]" — occasionally fine, but don't reach for it. Prefer: "Let me know", "Give me a shout", "Just say the word"
- "I look forward to hearing from you" — too formal
- "Just checking whether" — say "Just checking if" instead
- "sounds like something we can look into"
- "may be able to" / "might be able to" / "could potentially"
- "I would love to help"
- "when are you free" / "I can come on [day]"
- "I'll get this moving for you"
- "we'll get it sorted"
- "we can come today" / "we can come tomorrow"
- Em dashes (—) anywhere
- Anything hesitant or non-committal about capability

STYLE EXAMPLES (show adaptive behaviour — do not copy verbatim):
"Need scaffolding next week in Romford" → postcode, number, and duration are all missing:
  "Hi, yes we can sort that. Can you send your postcode, contact number, and roughly how long you'll need it up for?"

"Need scaffolding at RM3 0AA for 2 weeks" → postcode and duration given, number missing:
  "Hi, yes we cover that area. What's the best number to reach you on and we'll review the details."

"Leak under the bathroom, need someone today, CM1 4PX" → urgency and location given, number missing:
  "Hi, yes we can help with that. What's the best number to reach you on and we'll check the details."

"Need scaffolding, my number is 07700 900000" → number given, postcode and duration missing:
  "Hi, yes we can help with that. Can you send your postcode and roughly how long you'll need the scaffold up for?"

"Boiler stopped working, no heating, RM3 0AA, 07700 900000" → everything provided:
  "Hi, yes we can help with that. We'll take a look and come back to you shortly."

"Need an electrician in Romford, sockets stopped working" → postcode area given but no full postcode, number missing:
  "Hi, yes we can sort that. Can you send your full postcode and a contact number?"

BAD: "Hi, sounds like something we may be able to look into."
BAD: "Hi, can you send your postcode, contact number, and more details?" — do not ask for details already provided

Return ONLY the reply text — no JSON, no explanation, just the reply.`;
}

// ── Abuse protection ──────────────────────────────────────────────────────────

const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_IP = 5;
const MAX_PER_INSTANCE = 300;
const hits = new Map();
let instanceTotal = 0;

function rateLimited(ip) {
  const now = Date.now();
  instanceTotal += 1;
  if (instanceTotal > MAX_PER_INSTANCE) return true;
  const entry = hits.get(ip) ?? { count: 0, start: now };
  if (now - entry.start > WINDOW_MS) {
    entry.count = 0;
    entry.start = now;
  }
  entry.count += 1;
  hits.set(ip, entry);
  return entry.count > MAX_PER_IP;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ── Email delivery (Resend) ───────────────────────────────────────────────────

async function sendEmail({ to, subject, text, replyHtml }) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return false;
  const from = process.env.DEMO_FROM_EMAIL || 'Tragent <test@trytragent.com>';
  const replyTo = process.env.DEMO_REPLY_TO_EMAIL || 'test@trytragent.com';
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to, subject, text, html: replyHtml, reply_to: replyTo }),
  });
  return r.ok;
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// ── Handler ───────────────────────────────────────────────────────────────────

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  if (rateLimited(ip)) {
    res.status(429).json({ error: 'Too many test enquiries from this connection. Try again in an hour.' });
    return;
  }

  const body = req.body || {};
  const { name, email, phone, jobType, message, betaConsent, company } = body;

  // Honeypot: real users never fill this hidden field
  if (company) {
    res.status(200).json({ ok: true, reply: '', emailSent: false });
    return;
  }

  if (!name || typeof name !== 'string' || name.length > 80) {
    res.status(400).json({ error: 'Please add your name.' });
    return;
  }
  if (!email || !EMAIL_RE.test(email) || email.length > 120) {
    res.status(400).json({ error: 'Please add a valid email address.' });
    return;
  }
  if (!message || typeof message !== 'string' || message.length < 10 || message.length > 1000) {
    res.status(400).json({ error: 'Please write a short message (10 to 1000 characters).' });
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(503).json({ error: 'The live demo is not switched on yet. Check back shortly.' });
    return;
  }

  // ── Run the real reply pipeline (same model + prompt as production) ────────
  const customerMessage = `From: ${String(name).slice(0, 80)}${phone ? `\nPhone: ${String(phone).slice(0, 30)}` : ''}${jobType ? `\nJob type: ${String(jobType).slice(0, 60)}` : ''}\n\n${message}`;

  let reply = '';
  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 150,
        system: buildSystemPrompt(DEMO_PROFILE),
        messages: [{
          role: 'user',
          content: `Customer enquiry:\n"${customerMessage}"\n\nWrite the first reply. Return only the reply text.`,
        }],
      }),
    });
    if (!r.ok) throw new Error(`Anthropic API ${r.status}`);
    const data = await r.json();
    const block = (data.content || []).find((b) => b.type === 'text');
    reply = block ? block.text.trim() : '';
  } catch (err) {
    console.error('[demo] reply generation failed:', err.message);
    res.status(502).json({ error: 'Could not generate the reply just now. Give it another go in a minute.' });
    return;
  }

  if (!reply) {
    res.status(502).json({ error: 'Could not generate the reply just now. Give it another go in a minute.' });
    return;
  }

  // ── Send the reply to the visitor's own inbox (demo stays sandboxed) ───────
  const subject = `Re: ${jobType ? String(jobType).slice(0, 60) : 'Your enquiry'}`;
  let emailSent = false;
  try {
    emailSent = await sendEmail({
      to: email,
      subject: `${subject} (Tragent demo)`,
      text: `${reply}\n\n---\nThis is a Tragent demo. The reply above was generated and sent automatically, exactly as it would be for your own customers. https://www.trytragent.com`,
      replyHtml: `<div style="font-family:-apple-system,Segoe UI,sans-serif;font-size:15px;line-height:1.6;color:#111">${escapeHtml(reply).replace(/\n/g, '<br>')}<br><br><hr style="border:none;border-top:1px solid #ddd"><p style="color:#888;font-size:12px">This is a Tragent demo. The reply above was generated and sent automatically, exactly as it would be for your own customers. <a href="https://www.trytragent.com">trytragent.com</a></p></div>`,
    });
  } catch (err) {
    console.error('[demo] email send failed:', err.message);
  }

  // ── Beta interest capture (consent only) ────────────────────────────────────
  if (betaConsent) {
    const notify = process.env.LEAD_NOTIFY_EMAIL || 'hello@trytragent.com';
    sendEmail({
      to: notify,
      subject: 'New beta interest from Try Tragent Live',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'n/a'}\nJob type: ${jobType || 'n/a'}\nMessage: ${message}`,
      replyHtml: undefined,
    }).catch(() => {});
  }

  res.status(200).json({
    ok: true,
    reply,
    subject,
    from: `${DEMO_PROFILE.businessName} <hello@yourtradebusiness.co.uk>`,
    emailSent,
  });
};
