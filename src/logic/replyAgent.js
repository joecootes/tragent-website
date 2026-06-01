/**
 * TRAGENT — REPLY AGENT LOGIC
 * ─────────────────────────────────────────────────────────────────
 *
 * CORE PRINCIPLE
 * ─────────────────────────────────────────────────────────────────
 * The first auto reply is QUALIFICATION-FIRST, not decision-making.
 *
 * Tragent does NOT decide whether to take the job in the first reply.
 * The tradesperson makes that decision AFTER the customer replies with
 * the qualifying information.
 *
 * ─────────────────────────────────────────────────────────────────
 * WHAT THE FIRST REPLY MUST NOT DO
 * ─────────────────────────────────────────────────────────────────
 *
 * ❌ Do NOT confirm the job
 * ❌ Do NOT guarantee availability
 * ❌ Do NOT mention booking in
 * ❌ Do NOT suggest dates or times
 * ❌ Do NOT sound like a final decision has been made
 *
 * Banned phrases:
 *   - "Yes we can do that"
 *   - "I can come on Monday"
 *   - "Happy to quote"
 *   - "I'd love to help"
 *   - "When are you free"
 *   - "Let's get you booked in"
 *   - "We'd love to take this on"
 *   - "I can get that sorted for you"
 *   - Anything that implies the job is accepted
 *
 * ─────────────────────────────────────────────────────────────────
 * WHAT THE FIRST REPLY SHOULD DO
 * ─────────────────────────────────────────────────────────────────
 *
 * ✅ Briefly acknowledge the enquiry
 * ✅ Signal it is SOMETHING WE CAN LOOK AT (not that we've decided)
 * ✅ Ask only for the next missing qualifying piece of information
 * ✅ Keep the conversation moving without making commitments
 *
 * ─────────────────────────────────────────────────────────────────
 * INFORMATION PRIORITY — WHAT TO COLLECT FIRST
 * ─────────────────────────────────────────────────────────────────
 *
 * Priority order:
 *   1. Postcode          (needed to assess location and travel)
 *   2. Contact number    (needed to follow up by phone)
 *   3. Next useful detail (property type, number of rooms, etc.)
 *
 * CRITICAL RULE — READ THE ORIGINAL ENQUIRY FIRST:
 *   Before asking for anything, check what the customer already provided.
 *
 *   - Postcode present?        → Do NOT ask for postcode
 *   - Contact number present?  → Do NOT ask for contact number
 *   - Both present?            → Ask only the next most useful clarification
 *   - Neither present?         → Ask for both postcode and contact number
 *
 * The reply should feel aware of what the customer has already said.
 * Repeating a question already answered is a failure.
 *
 * ─────────────────────────────────────────────────────────────────
 * DETECTION — WHAT COUNTS AS "PRESENT"
 * ─────────────────────────────────────────────────────────────────
 *
 * Postcode present:
 *   - UK postcode pattern: /[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}/i
 *   - Partial postcode (e.g. "M14") counts as present if area is clear
 *
 * Contact number present:
 *   - Any sequence of 10–11 digits
 *   - Patterns: 07xxx, 01xxx, +44, bracketed area codes
 *   - If customer says "call me on..." — number is present
 *
 * ─────────────────────────────────────────────────────────────────
 * TONE RULES
 * ─────────────────────────────────────────────────────────────────
 *
 * ✅ Short — no padding or filler sentences
 * ✅ Natural — sounds like a real person, not a chatbot
 * ✅ Human — no robotic openers, no overly polished customer service language
 * ❌ No hyphens or dashes in sentences
 * ❌ No exclamation marks unless the user's selected style calls for warmth
 * ❌ No "Great!", "Fantastic!", "Wonderful!" openers
 * ❌ No passive voice: "Your enquiry has been received"
 *
 * ─────────────────────────────────────────────────────────────────
 * REPLY STYLE CALIBRATION
 * ─────────────────────────────────────────────────────────────────
 *
 * The user selects a reply style during onboarding.
 * Style affects: tone, warmth, directness, I vs we, sentence length
 * Style does NOT affect: qualification-first logic, info collection order,
 *                        scope rules, safety rules, booking-first structure
 *
 * Style options (set at onboarding):
 *   A — Direct, short, low warmth
 *   B — Warm but efficient, medium length
 *   C — Minimal, action-only
 *
 * ─────────────────────────────────────────────────────────────────
 * EXAMPLE REPLIES BY SCENARIO
 * ─────────────────────────────────────────────────────────────────
 *
 * Scenario 1: No postcode, no number
 * Enquiry: "Hi I need someone to rewire my house. Can you help?"
 *
 *   Style A: "Thanks for getting in touch. Sounds like something we can
 *             look at. Can you send your postcode and a contact number so
 *             we can move this forward?"
 *
 *   Style B: "Hi, thanks for reaching out. That sounds like something we
 *             may be able to help with. If you can send your postcode and
 *             a contact number we can take it from there."
 *
 *   Style C: "Got your message. Send us your postcode and number and
 *             we'll take a look."
 *
 * ─────────────────────────────────────────────────────────────────
 *
 * Scenario 2: Postcode present, no number
 * Enquiry: "Need a quote for a rewire. I'm in M14 5KT."
 *
 *   Style A: "Thanks for the message. Can you send a contact number
 *             so we can follow this up properly?"
 *
 *   Style B: "Hi, thanks for getting in touch. That area works for us.
 *             Can you send a contact number and we can pick this up?"
 *
 *   Style C: "Thanks. What's the best number to reach you on?"
 *
 * ─────────────────────────────────────────────────────────────────
 *
 * Scenario 3: Both postcode and number present
 * Enquiry: "Hi, need a rewire quote. M14 5KT. Number is 07700 900123."
 *
 *   Style A: "Thanks. Can you tell us a bit more about the property,
 *             number of rooms and is it a house or a flat?"
 *
 *   Style B: "Thanks for the message. To help us understand the job
 *             better, could you tell us the property type and roughly
 *             how many rooms?"
 *
 *   Style C: "Cheers. House or flat, and how many rooms?"
 *
 * ─────────────────────────────────────────────────────────────────
 * WHAT THIS LOGIC DOES NOT OVERRIDE
 * ─────────────────────────────────────────────────────────────────
 *
 *   - Missing info collection sequence (always postcode → number → detail)
 *   - Booking-first structure (once qualified, always move toward site visit)
 *   - Scope guardrails (do not quote without a visit)
 *   - Safety rules (gas, electrics — always recommend certified professional)
 *   - Tragent core reply flow and hand-off logic
 *
 * ─────────────────────────────────────────────────────────────────
 */

// ─────────────────────────────────────────────────────────────────
// DETECTION UTILITIES
// ─────────────────────────────────────────────────────────────────

const UK_POSTCODE_REGEX = /[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}/i
const PARTIAL_POSTCODE_REGEX = /\b[A-Z]{1,2}[0-9]{1,2}\b/i
const PHONE_REGEX = /(\+44\s?|0)[\s\-.]?[0-9]{3,5}[\s\-.]?[0-9]{3,5}[\s\-.]?[0-9]{0,4}/

export function hasPostcode(text) {
  return UK_POSTCODE_REGEX.test(text) || PARTIAL_POSTCODE_REGEX.test(text)
}

export function hasContactNumber(text) {
  return PHONE_REGEX.test(text)
}

// ─────────────────────────────────────────────────────────────────
// MISSING INFO RESOLVER
// Returns what info to request next, in priority order.
// ─────────────────────────────────────────────────────────────────

export function getMissingInfo(enquiryText) {
  const postcodePresent = hasPostcode(enquiryText)
  const numberPresent = hasContactNumber(enquiryText)

  if (!postcodePresent && !numberPresent) {
    return { missing: 'both', ask: 'postcode_and_number' }
  }
  if (!postcodePresent && numberPresent) {
    return { missing: 'postcode', ask: 'postcode_only' }
  }
  if (postcodePresent && !numberPresent) {
    return { missing: 'number', ask: 'number_only' }
  }
  return { missing: 'none', ask: 'next_useful_detail' }
}

// ─────────────────────────────────────────────────────────────────
// QUALIFICATION PHRASE MAP
// Phrases used to signal "we can look at this" without committing.
// Pick randomly or by trade context to avoid repetition.
// ─────────────────────────────────────────────────────────────────

export const QUALIFICATION_SIGNALS = [
  'Sounds like something we can look at.',
  'That sounds like something we may be able to help with.',
  'Got your message.',
  'Thanks for reaching out.',
  'Thanks for getting in touch.',
  'Cheers for the message.',
]

// ─────────────────────────────────────────────────────────────────
// REPLY TEMPLATES BY SCENARIO AND STYLE
// These are passed to the LLM as few-shot examples or used as
// fallback templates when the LLM is unavailable.
// ─────────────────────────────────────────────────────────────────

export const REPLY_TEMPLATES = {
  postcode_and_number: {
    A: "Thanks for getting in touch. Sounds like something we can look at. Can you send your postcode and a contact number so we can move this forward?",
    B: "Hi, thanks for reaching out. That sounds like something we may be able to help with. If you can send your postcode and a contact number we can take it from there.",
    C: "Got your message. Send us your postcode and number and we'll take a look.",
  },
  postcode_only: {
    A: "Thanks for the message. Can you send a contact number so we can follow this up?",
    B: "Hi, thanks for getting in touch. Can you send a contact number and we can pick this up from there?",
    C: "Thanks. What's the best number to reach you on?",
  },
  number_only: {
    A: "Thanks for getting in touch. Can you send your postcode so we can check the area?",
    B: "Hi, thanks for reaching out. Could you send your postcode so we can take a look at this properly?",
    C: "Cheers. Can you send your postcode?",
  },
  next_useful_detail: {
    A: "Thanks. Can you tell us a bit more about the property, number of rooms and is it a house or a flat?",
    B: "Thanks for the message. To help us understand the job better, could you tell us the property type and roughly how many rooms?",
    C: "Cheers. House or flat, and how many rooms?",
  },
}

// ─────────────────────────────────────────────────────────────────
// SYSTEM PROMPT FRAGMENT
// Inject this into the LLM system prompt for reply generation.
// ─────────────────────────────────────────────────────────────────

export const REPLY_AGENT_SYSTEM_PROMPT = `
You are an AI assistant that handles the first reply to trade enquiries on behalf of a tradesperson.

CORE RULE: The first reply is QUALIFICATION-FIRST. You do NOT decide to take the job. The tradesperson decides that later.

WHAT YOU MUST NOT DO:
- Do not confirm the job
- Do not guarantee availability
- Do not mention booking in, dates, or times
- Do not say "I'd love to help", "Happy to quote", "I can come on Monday", or anything that sounds like the job is accepted
- Do not use hyphens or dashes in sentences
- Do not ask for information the customer has already provided

WHAT YOU MUST DO:
- Acknowledge the enquiry briefly
- Signal it is something the business can look at (not that they will take it)
- Identify what information is missing and ask only for the next most important item:
  Priority: 1. Postcode  2. Contact number  3. Next useful detail
- Keep the reply short, natural, and human

IF POSTCODE IS ALREADY IN THE ENQUIRY: Do not ask for postcode.
IF CONTACT NUMBER IS ALREADY IN THE ENQUIRY: Do not ask for contact number.
IF BOTH ARE PRESENT: Ask only the next most useful clarifying question.

TONE RULES:
- Short, no padding
- Natural, sounds like a real person
- No robotic phrasing
- No overly polished customer service language
- No "Great!", "Fantastic!", "Your enquiry has been received"

STYLE INSTRUCTION: {STYLE_INSTRUCTION}
`

export const STYLE_INSTRUCTIONS = {
  A: "Be direct and brief. Low warmth. Short sentences. Use 'we' to refer to the business. Get to the question fast.",
  B: "Be warm but efficient. Medium sentence length. Use 'we'. A brief acknowledgement then move straight to the question.",
  C: "Be minimal. Ultra short. One or two sentences maximum. No pleasantries. Just the question.",
}

export function buildSystemPrompt(style = 'B') {
  return REPLY_AGENT_SYSTEM_PROMPT.replace(
    '{STYLE_INSTRUCTION}',
    STYLE_INSTRUCTIONS[style] || STYLE_INSTRUCTIONS['B']
  )
}
