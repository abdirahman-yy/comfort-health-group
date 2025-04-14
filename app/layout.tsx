import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Comfort Health Group",
  description: "Comfort Health Group is a leading provider of housing stabilization services, offering expert guidance and one-on-one support to overcome housing challenges and make a lasting impact in our community.",
  keywords: "housing stabilization services, housing transition services, housing sustaining services, Minnesota housing assistance, housing support, Comfort Health Group",
  generator: 'Next.js',
  openGraph: {
    title: 'Comfort Health Group | Housing Stabilization Services',
    description: 'Comfort Health Group provides comprehensive housing stabilization, transition, and sustaining services in Minnesota, helping individuals find and maintain stable housing.',
    url: 'https://comforthealthgroup.org',
    siteName: 'Comfort Health Group',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/images/comfort-health-group-logo.png",
        href: "/images/comfort-health-group-logo.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        url: "/images/comfort-health-group-logo.png",
        href: "/images/comfort-health-group-logo.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    shortcut: "/images/comfort-health-group-logo.png",
    apple: "/images/comfort-health-group-logo.png"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/comfort-health-group-logo.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/images/comfort-health-group-logo.png" sizes="512x512" type="image/png" />
        <link rel="apple-touch-icon" href="/images/comfort-health-group-logo.png" sizes="192x192" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}