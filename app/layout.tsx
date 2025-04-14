import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import ClientLayout from "./clientLayout"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    template: '%s | Comfort Health Group',
    default: 'Comfort Health Group - Housing Stabilization Services',
  },
  description: "Comfort Health Group provides comprehensive housing stabilization, transition, and sustaining services in Minnesota, helping individuals find and maintain stable housing.",
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
        url: '/images/comfort-health-group-logo.png',
        sizes: '32x32',
      },
      {
        url: '/images/comfort-health-group-logo.png',
        sizes: '16x16',
      }
    ],
    apple: [
      {
        url: '/images/comfort-health-group-logo.png',
        sizes: '180x180',
      }
    ],
    shortcut: '/images/comfort-health-group-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}

import './globals.css'