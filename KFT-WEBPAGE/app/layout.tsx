import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KHEGARHA FALAHI TANZEEM - Social Welfare Organization",
  description:
    "Serving humanity with compassion and dedication. Providing essential services including food assistance, healthcare support, education programs, and emergency relief.",
  icons: {
    icon: "/kft-logo-official.png",
    shortcut: "/kft-logo-official.png",
    apple: "/kft-logo-official.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/kft-logo-official.png" sizes="any" />
        <link rel="apple-touch-icon" href="/kft-logo-official.png" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
