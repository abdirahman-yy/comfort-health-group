import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import ClientLayout from "./clientLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Comfort Health Group | Housing Stabilization Services",
  description: "Comfort Health Group provides housing stabilization services in Minnesota, helping individuals find and maintain stable housing.",
  generator: 'Next.js'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}

import './globals.css'