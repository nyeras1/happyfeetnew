"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type ChatRole = "user" | "bot"

type ChatMessage = {
  role: ChatRole
  text: string
}

type TripType = "family" | "couple" | "friends" | "corporate" | "solo"

type ChatContext = {
  tripType?: TripType
  destination?: string
  monthOrDates?: string
  travelers?: string
  budget?: string
}

function normalize(text: string) {
  return text.trim().toLowerCase()
}

function pick<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)]
}

function cleanValue(value: string) {
  return value.replace(/\s+/g, " ").trim()
}

function extractMonthOrDates(text: string) {
  const t = normalize(text)
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
    "jan",
    "feb",
    "mar",
    "apr",
    "jun",
    "jul",
    "aug",
    "sep",
    "sept",
    "oct",
    "nov",
    "dec",
  ]
  const month = months.find((m) => new RegExp(`\\b${m}\\b`, "i").test(t))
  if (month) return month

  const dateRange = text.match(/\b(\d{1,2}[\/-]\d{1,2}(?:[\/-]\d{2,4})?)\b\s*(?:to|\-|–)\s*\b(\d{1,2}[\/-]\d{1,2}(?:[\/-]\d{2,4})?)\b/i)
  if (dateRange) return `${dateRange[1]} to ${dateRange[2]}`

  const singleDate = text.match(/\b\d{1,2}[\/-]\d{1,2}(?:[\/-]\d{2,4})?\b/)
  if (singleDate) return singleDate[0]

  return undefined
}

function extractBudget(text: string) {
  const t = normalize(text)
  if (!/(budget|price|cost|inr|rs|₹|lakh|lakhs|k)\b/i.test(t) && !/\b\d{2,}\b/.test(t)) return undefined

  const range = text.match(/(?:₹|rs\.?|inr)?\s*(\d+(?:\.\d+)?)\s*(k|lakh|lakhs)?\s*(?:to|\-|–)\s*(?:₹|rs\.?|inr)?\s*(\d+(?:\.\d+)?)\s*(k|lakh|lakhs)?/i)
  if (range) return cleanValue(range[0])

  const single = text.match(/(?:₹|rs\.?|inr)\s*\d+[\d,.]*\s*(?:k|lakh|lakhs)?/i)
  if (single) return cleanValue(single[0])

  const plain = text.match(/\b\d+[\d,.]*\s*(?:k|lakh|lakhs)\b/i)
  if (plain) return cleanValue(plain[0])

  return undefined
}

function extractTravelers(text: string) {
  const t = normalize(text)
  const adultsKids = text.match(/(\d+)\s*adults?\b(?:\s*(?:and|,)\s*(\d+)\s*kids?)?/i)
  if (adultsKids) {
    const adults = adultsKids[1]
    const kids = adultsKids[2]
    return kids ? `${adults} adults, ${kids} kids` : `${adults} adults`
  }

  const total = t.match(/\b(\d+)\s*(people|persons|travellers|travelers|members|guests)\b/i)
  if (total) return `${total[1]} ${total[2]}`

  return undefined
}

function extractTripType(text: string): TripType | undefined {
  const t = normalize(text)
  if (/(honeymoon|couple|romantic)/i.test(t)) return "couple"
  if (/(family|kids|child|children|parents)/i.test(t)) return "family"
  if (/(corporate|team|office|company)/i.test(t)) return "corporate"
  if (/(friends|buddies|group)/i.test(t)) return "friends"
  if (/(solo|alone)/i.test(t)) return "solo"
  return undefined
}

function extractDestination(text: string) {
  const known = [
    "goa",
    "kerala",
    "coorg",
    "manali",
    "kashmir",
    "ladakh",
    "andaman",
    "maldives",
    "dubai",
    "bali",
    "singapore",
    "thailand",
  ]
  const t = normalize(text)
  const hit = known.find((d) => new RegExp(`\\b${d}\\b`, "i").test(t))
  if (hit) return hit

  const maybe = text.match(/\bto\s+([A-Za-z][A-Za-z\s]{2,30})\b/i)
  if (maybe) return cleanValue(maybe[1])

  return undefined
}

function updateContextFromUserText(prev: ChatContext, userText: string): ChatContext {
  const next: ChatContext = { ...prev }

  const tripType = extractTripType(userText)
  const destination = extractDestination(userText)
  const monthOrDates = extractMonthOrDates(userText)
  const travelers = extractTravelers(userText)
  const budget = extractBudget(userText)

  if (tripType) next.tripType = tripType
  if (destination) next.destination = destination
  if (monthOrDates) next.monthOrDates = monthOrDates
  if (travelers) next.travelers = travelers
  if (budget) next.budget = budget

  return next
}

function describeTripType(type?: TripType) {
  if (!type) return undefined
  if (type === "couple") return "couple / honeymoon"
  if (type === "family") return "family"
  if (type === "friends") return "friends"
  if (type === "corporate") return "corporate"
  return "solo"
}

function buildBotReply(userTextRaw: string, ctx: ChatContext) {
  const userText = normalize(userTextRaw)

  const greet = /(hi|hello|hey|good\s*morning|good\s*evening|good\s*afternoon)/i.test(userText)
  const thanks = /(thanks|thank you|thx)/i.test(userText)
  const contact = /(call|phone|number|whatsapp|contact|support)/i.test(userText)
  const price = /(price|cost|budget|expensive|cheap|rate|package\s*price)/i.test(userText)
  const book = /(book|booking|reserve|reservation|buy)/i.test(userText)
  const refund = /(refund|cancellation|cancel|return)/i.test(userText)
  const packages = /(package|packages|tour|itinerary|plan)/i.test(userText)
  const destinations = /(destination|destinations|where|place|go to|visit|beach|mountain|kerala|goa|maldives|dubai|bali)/i.test(userText)
  const time = /(when|date|month|season|best\s*time)/i.test(userText)
  const honeymoon = /(honeymoon|couple|romantic)/i.test(userText)
  const family = /(family|kids|child|children|parents)/i.test(userText)
  const corporate = /(corporate|team|office|company)/i.test(userText)

  if (greet) {
    return pick([
      "Hello! Welcome to Happy Feet. Where would you like to travel — India or international?",
      "Hey! I can help you pick a destination and a package. What kind of trip are you planning (family, couple, friends, corporate)?",
      "Hi there! Tell me your preferred destination (or vibe like beach/mountains) and your rough travel dates.",
    ])
  }

  if (thanks) {
    return pick([
      "You’re welcome! Want me to suggest a few options based on your budget and dates?",
      "Anytime. Tell me the destination (or beach/mountains) and I’ll guide you.",
      "Glad to help. Would you like to book now or explore destinations first?",
    ])
  }

  if (contact) {
    return "You can reach our team at +91 97429 97421 or email customercare@happyfeetholidaysresorts.com. If you tell me what you need, I can guide you here as well."
  }

  if (refund) {
    return "Refunds and cancellations depend on the airline/hotel/bus/tour policy. You can read our Refund & Cancellation Policy here: /refund. If you share your booking type (flight/hotel/package) and travel date, I’ll tell you what usually applies."
  }

  if (book) {
    return "Great — I can help you book. Quick questions: 1) destination, 2) travel dates, 3) number of travelers, 4) budget range."
  }

  if (price) {
    return "Pricing depends on destination, dates, and hotel category. Share your destination + travel month + budget range, and I’ll suggest the best-fit options."
  }

  if (honeymoon) {
    return "Honeymoon trip — love that. Do you prefer beach luxury (Maldives/Bali/Goa) or scenic escapes (Kerala/Coorg)? Also share your travel month and budget range."
  }

  if (family) {
    return "Family trip — perfect. How many adults and kids, and what dates are you considering? I can suggest family-friendly stays and activities."
  }

  if (corporate) {
    return "Corporate outing — got it. How many people and which city are you departing from? I can suggest resort options and a rough per-head estimate."
  }

  if (time) {
    return "Tell me the destination you have in mind and I’ll suggest the best travel window. If you’re flexible, tell me: beach or mountains?"
  }

  if (destinations) {
    return "Nice choice. Tell me your travel month and number of travelers — I’ll suggest a few premium options and what they usually include (stays, transfers, experiences)."
  }

  if (packages) {
    return "We have curated packages and we also customize. Tell me your destination (or vibe), dates, and budget — I’ll guide you to the right option."
  }

  const missing = {
    destination: !ctx.destination,
    monthOrDates: !ctx.monthOrDates,
    travelers: !ctx.travelers,
    budget: !ctx.budget,
  }

  const tripSummaryParts = [
    ctx.tripType ? `${describeTripType(ctx.tripType)} trip` : undefined,
    ctx.destination ? `to ${ctx.destination}` : undefined,
    ctx.monthOrDates ? `around ${ctx.monthOrDates}` : undefined,
    ctx.travelers ? `for ${ctx.travelers}` : undefined,
    ctx.budget ? `budget: ${ctx.budget}` : undefined,
  ].filter(Boolean)

  if (tripSummaryParts.length >= 2) {
    if (missing.destination || missing.monthOrDates || missing.travelers || missing.budget) {
      const ask =
        (missing.destination && "Which destination are you considering?") ||
        (missing.monthOrDates && "What are your travel dates or month?") ||
        (missing.travelers && "How many people are traveling?") ||
        (missing.budget && "What budget range are you comfortable with?")

      return `Got it — ${tripSummaryParts.join(", ")}. ${ask}`
    }

    return `Perfect — ${tripSummaryParts.join(", ")}. Would you like premium luxury stays or value-for-money options with great experiences?`
  }

  return pick([
    "Got it. To suggest the best option, tell me your destination (or beach/mountains), travel dates, and budget range.",
    "Understood. Are you planning a family trip, couple trip, or friends trip? Also share your travel month.",
    "I can help with that. What’s your destination and how many people are traveling?",
  ])
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "bot", text: "Hello! How can I help you plan your dream vacation today?" },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [context, setContext] = useState<ChatContext>({})
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const quickReplies = useMemo(
    () => [
      "I want a package",
      "Best destinations",
      "Refund & cancellation",
      "Talk to support",
    ],
    [],
  )

  useEffect(() => {
    if (!isOpen) return
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
    })
  }, [isOpen, messages, isTyping])

  const handleSend = (text?: string) => {
    const messageText = (text ?? inputValue).trim()
    if (!messageText) return

    const nextContext = updateContextFromUserText(context, messageText)
    setContext(nextContext)

    setMessages((prev) => [...prev, { role: "user", text: messageText }])
    setInputValue("")
    setIsTyping(true)

    const reply = buildBotReply(messageText, nextContext)
    const delay = Math.min(1200, Math.max(450, Math.floor(reply.length * 8)))

    window.setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: reply }])
      setIsTyping(false)
    }, delay)
  }

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110",
          "bg-gradient-to-br from-accent to-accent/80 text-accent-foreground"
        )}
        aria-label="Toggle chat"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 h-[500px] bg-card rounded-2xl shadow-2xl flex flex-col animate-fade-in border border-border overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">Travel Assistant</h3>
              <p className="text-xs text-primary-foreground/80">Always here to help</p>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
              >
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-muted text-foreground rounded-bl-sm"
                  )}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed bg-muted text-foreground rounded-bl-sm">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-foreground/40 animate-pulse" />
                    <span className="h-2 w-2 rounded-full bg-foreground/40 animate-pulse [animation-delay:150ms]" />
                    <span className="h-2 w-2 rounded-full bg-foreground/40 animate-pulse [animation-delay:300ms]" />
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex flex-wrap gap-2 pb-3">
              {quickReplies.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => handleSend(q)}
                  className="text-xs px-3 py-1.5 rounded-full border border-border bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button onClick={() => handleSend()} size="icon" className="bg-accent hover:bg-accent/90" disabled={isTyping}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
