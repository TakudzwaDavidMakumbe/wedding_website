import type React from "react"
import "./globals.css"
import { Playfair_Display, Inter } from "next/font/google"
import type { Metadata } from "next"
import { Toaster } from "@/components/ui/toaster"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Roda's 50th Birthday Celebration",
  description: "Join us as we celebrate Roda's 50th birthday milestone",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-sans`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
