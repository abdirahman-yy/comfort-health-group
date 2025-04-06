"use client"

import type React from "react"

import "./globals.css"
import { Poppins } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // Scroll to top when pathname changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <html lang="en">
      <head>
        <title>Comfort Health Group</title>
        <meta name="description" content="Pioneering Housing Stability, Transforming Lives" />
      </head>
      <body className={`${poppins.className} bg-warm-white text-deep-blue`}>
        <Header />
        <main className="min-h-screen pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

