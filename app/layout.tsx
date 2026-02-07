import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"
import { AppShell } from "@/components/app-shell"
import { Toaster } from "@/components/ui/toaster"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-nav" })

export const metadata: Metadata = {
  title: "Happy Feet Holidays & Resorts | Travel Differently",
  description:
    "Where dreams meet destinations — curated holiday packages and exclusive resort stays across breathtaking destinations.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logo-CZBEvsvV.png",
        type: "image/png",
      },
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${poppins.variable} font-sans antialiased overflow-x-hidden`}>
        <AppShell>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Chatbot />
          <Toaster />
          <Analytics />
        </AppShell>
      </body>
    </html>
  )
}
