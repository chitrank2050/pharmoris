import type { Metadata } from 'next'
import { fontSans } from '@/lib/fonts'
import AppProvider from '@/providers'

import './globals.css'

export const metadata: Metadata = {
  title: 'PHARMORIS — Pharmaceutical Intelligence',
  description: 'Real-time pharmaceutical supply and cost intelligence platform by NEUVIOR.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} font-sans antialiased`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
