import type { Metadata } from 'next'
import { fontSans } from '@/lib/fonts'
import AppProvider from '@/providers'
import Footer from '@/components/layout/Footer'

import './globals.css'

export const metadata: Metadata = {
  title: 'PHARMORIS — Pharmaceutical Intelligence',
  description: 'Real-time pharmaceutical supply and cost intelligence platform by NEUVIOR.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <AppProvider>
          <div className="flex-1 flex flex-col">
            {children}
            <Footer />
          </div>
        </AppProvider>
      </body>
    </html>
  )
}
