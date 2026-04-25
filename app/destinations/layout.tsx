import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Destinations | Happy Feet Holidays",
  description:
    "Explore curated domestic and international destinations with high-conversion guided planning. Compare places, view plans, and get best deal support instantly.",
  openGraph: {
    title: "Destinations | Happy Feet Holidays",
    description:
      "Guided destination funnel with premium travel plans, itinerary previews, and quick lead capture for faster bookings.",
    type: "website",
    url: "https://happyfeetholidaysresorts.com/destinations",
  },
}

export default function DestinationsLayout({ children }: { children: React.ReactNode }) {
  return children
}
