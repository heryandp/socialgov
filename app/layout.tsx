import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google"
import { AppChrome } from "./_components/app-chrome"
import "./globals.css"

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
})

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "socialgov",
    template: "%s | socialgov",
  },
  description: "Social media untuk memantau kinerja APBN dan APBD daerah.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  )
}
