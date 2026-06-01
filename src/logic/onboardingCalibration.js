/**
 * TRAGENT — ONBOARDING REPLY STYLE CALIBRATION
 * ─────────────────────────────────────────────────────────────────
 *
 * Shown after trade selection. Helps Tragent learn how the user
 * naturally sounds so auto replies feel like them from day one.
 *
 * ALL example replies follow qualification-first logic.
 * The examples demonstrate DIFFERENT TONES, not different behaviour.
 * The core logic (what to ask, in what order) is identical across all options.
 *
 * RULES FOR EXAMPLE REPLIES:
 *   ✅ All must acknowledge briefly and ask for qualifying info
 *   ✅ All must check what info is already in the example enquiry
 *   ✅ None must commit to the job, confirm availability, or suggest dates
 *   ✅ None must ask for info already present in the example enquiry
 *   ✅ Each must show a noticeably different tone/style
 *
 */

// ─────────────────────────────────────────────────────────────────
// EXAMPLE ENQUIRIES BY TRADE
// Each includes realistic missing info so the example replies
// demonstrate the qualification flow naturally.
// ─────────────────────────────────────────────────────────────────

export const TRADE_ENQUIRIES = {
  electrician: {
    label: 'Electrician',
    enquiry: "Hi, I need someone to look at a full rewire on a 3 bed semi. Kitchen and upstairs sockets aren't working. Can you help?",
    // No postcode. No number. → Ask for both.
    presentInfo: { postcode: false, number: false },
  },
  plumber: {
    label: 'Plumber',
    enquiry: "Hi, my boiler keeps cutting out. I'm in Leeds, LS6 2AB. Happens every morning. Can someone come and take a look?",
    // Postcode present. No number. → Ask for number only.
    presentInfo: { postcode: true, number: false },
  },
  builder: {
    label: 'Builder',
    enquiry: "Looking for someone to quote on a rear extension. Single storey. Can you help?",
    // No postcode. No number. → Ask for both.
    presentInfo: { postcode: false, number: false },
  },
  hvac: {
    label: 'HVAC / Air Con',
    enquiry: "Our office aircon keeps tripping out. We're based in Bristol, BS1 4DJ. Number is 07700 900321. Need someone asap.",
    // Postcode present. Number present. → Ask for next useful detail.
    presentInfo: { postcode: true, number: true },
  },
  painter: {
    label: 'Painter & Decorator',
    enquiry: "Need the whole inside of my house done. 4 bed detached. Looking for quotes this week.",
    // No postcode. No number. → Ask for both.
    presentInfo: { postcode: false, number: false },
  },
  general: {
    label: 'General Trades',
    enquiry: "Hi, need someone to take a look at a job I've got. Can you help?",
    // No postcode. No number. → Ask for both.
    presentInfo: { postcode: false, number: false },
  },
}

// ─────────────────────────────────────────────────────────────────
// STYLE OPTIONS BY TRADE
// Generated per trade based on what info is already present.
// All three options follow qualification-first logic.
// ─────────────────────────────────────────────────────────────────

export const STYLE_OPTIONS = {

  electrician: [
    {
      id: 'A',
      label: 'Direct',
      reply: "Thanks for getting in touch. Sounds like something we can look at. Can you send your postcode and a contact number so we can move this forward?",
    },
    {
      id: 'B',
      label: 'Warm',
      reply: "Hi, thanks for reaching out. That sounds like something we may be able to help with. If you can send your postcode and a contact number we can take it from there.",
    },
    {
      id: 'C',
      label: 'Brief',
      reply: "Got your message. Send us your postcode and a contact number and we'll take a look.",
    },
  ],

  plumber: [
    // Postcode already in enquiry (LS6 2AB). Do NOT ask for postcode. Ask for number only.
    {
      id: 'A',
      label: 'Direct',
      reply: "Thanks for the message. Can you send a contact number so we can follow this up properly?",
    },
    {
      id: 'B',
      label: 'Warm',
      reply: "Hi, thanks for getting in touch. That sounds like something worth looking at. Can you send a contact number and we can pick this up from there?",
    },
    {
      id: 'C',
      label: 'Brief',
      reply: "Thanks. What's the best number to reach you on?",
    },
  ],

  builder: [
    {
      id: 'A',
      label: 'Direct',
      reply: "Thanks for getting in touch. That sounds like something we can look at. Can you send your postcode and a contact number so we can move this forward?",
    },
    {
      id: 'B',
      label: 'Warm',
      reply: "Hi, thanks for reaching out. Extensions are something we look at regularly. If you can send your postcode and a contact number we can take it from there.",
    },
    {
      id: 'C',
      label: 'Brief',
      reply: "Got your message. Send over your postcode and a number and we'll be in touch.",
    },
  ],

  hvac: [
    // Both postcode (BS1 4DJ) AND number (07700 900321) already present.
    // Do NOT ask for either. Ask only the next useful detail.
    {
      id: 'A',
      label: 'Direct',
      reply: "Thanks for the message. Can you tell us a bit more about the unit, the make and model if you have it, and roughly how old it is?",
    },
    {
      id: 'B',
      label: 'Warm',
      reply: "Hi, thanks for getting in touch. To help us look at this properly, could you tell us the make and model of the unit and roughly how old it is?",
    },
    {
      id: 'C',
      label: 'Brief',
      reply: "Cheers. Do you know the make and model of the unit?",
    },
  ],

  painter: [
    {
      id: 'A',
      label: 'Direct',
      reply: "Thanks for getting in touch. Can you send your postcode and a contact number so we can take a look at this?",
    },
    {
      id: 'B',
      label: 'Warm',
      reply: "Hi, thanks for reaching out. That sounds like a decent sized job. If you can send your postcode and a contact number we can take it from there.",
    },
    {
      id: 'C',
      label: 'Brief',
      reply: "Got your message. Postcode and a number and we'll get back to you.",
    },
  ],

  general: [
    {
      id: 'A',
      label: 'Direct',
      reply: "Thanks for getting in touch. Can you tell us a bit more about the job and send your postcode and a contact number?",
    },
    {
      id: 'B',
      label: 'Warm',
      reply: "Hi, thanks for reaching out. If you can give us a bit more detail on the job and send your postcode and a contact number we can take a look.",
    },
    {
      id: 'C',
      label: 'Brief',
      reply: "Got your message. What's the job and can you send your postcode and a number?",
    },
  ],

}

// ─────────────────────────────────────────────────────────────────
// STYLE METADATA
// Used to store and apply the selected preference.
// ─────────────────────────────────────────────────────────────────

export const STYLE_METADATA = {
  A: {
    tone: 'direct',
    warmth: 'low',
    sentenceLength: 'short',
    useI: false,
    opener: 'low_warmth',
  },
  B: {
    tone: 'warm',
    warmth: 'medium',
    sentenceLength: 'medium',
    useI: false,
    opener: 'brief_acknowledgement',
  },
  C: {
    tone: 'minimal',
    warmth: 'none',
    sentenceLength: 'very_short',
    useI: false,
    opener: 'none',
  },
}

// ─────────────────────────────────────────────────────────────────
// HELPER
// ─────────────────────────────────────────────────────────────────

export function getCalibrationData(trade) {
  const key = trade?.toLowerCase().replace(/[^a-z]/g, '') || 'general'
  const tradeKey = TRADE_ENQUIRIES[key] ? key : 'general'
  return {
    enquiry: TRADE_ENQUIRIES[tradeKey],
    styles: STYLE_OPTIONS[tradeKey],
  }
}

export function saveStylePreference(styleId) {
  const meta = STYLE_METADATA[styleId]
  if (!meta) return null
  return {
    selectedStyle: styleId,
    ...meta,
    savedAt: new Date().toISOString(),
  }
}
