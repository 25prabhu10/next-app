import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
  title: "My Next App",
  description: "A basic starter for Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
