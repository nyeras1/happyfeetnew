export const BANNED_COPY_TERMS = ["pricing", "price", "cost", "fees", "plans"] as const

export const COPY_REPLACEMENTS: Record<(typeof BANNED_COPY_TERMS)[number], string> = {
  pricing: "trip details",
  price: "journey details",
  cost: "value",
  fees: "service terms",
  plans: "journey options",
}

export const BRAND_VOICE_GUIDE = {
  tone: "Warm, confident, human, and story-led.",
  style: "Mostly English with a light local flavor.",
  copyRules: [
    "Keep sentences short and conversational.",
    "Use memory-led and trust-led language.",
    "Avoid robotic superlatives and generic claims.",
    "Favor clear actions: connect, enquire, start journey.",
  ],
} as const
