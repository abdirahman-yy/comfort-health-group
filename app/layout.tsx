import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import ClientLayout from "./clientLayout"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0F172A',
}

export const metadata: Metadata = {
  title: {
    template: '%s | Comfort Health Group',
    default: 'Comfort Health Group - Housing Stabilization Services',
  },
  description: "Comfort Health Group provides comprehensive housing stabilization, transition, and sustaining services in Minnesota, helping individuals find and maintain stable housing.",
  keywords: "housing stabilization services, housing transition services, housing sustaining services, Minnesota housing assistance, housing support, Comfort Health Group",
  generator: 'Next.js',
  manifest: '/manifest.json',
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
        sizes: '512x512',
        type: 'image/png',
      },
      {
        url: '/images/comfort-health-group-logo.png',
        sizes: '384x384',
        type: 'image/png',
      },
      {
        url: '/images/comfort-health-group-logo.png',
        sizes: '256x256',
        type: 'image/png',
      }
    ],
    apple: [
      {
        url: '/images/comfort-health-group-logo.png',
        sizes: '512x512',
        type: 'image/png',
      }
    ],
    shortcut: [
      {
        url: '/images/comfort-health-group-logo.png',
        sizes: '512x512',
        type: 'image/png',
      }
    ],
  },
  other: {
    'msapplication-TileColor': '#0F172A',
    'msapplication-TileImage': '/images/comfort-health-group-logo.png',
    'msapplication-config': 'none',
    'msapplication-square512x512logo': '/images/comfort-health-group-logo.png'
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