import type { Metadata } from 'next'
import { fontInter } from '@/lib/fonts'

import './globals.css'

export const metadata: Metadata = {
  title: 'PHARMORIS — Pharmaceutical Intelligence',
  description: 'Real-time pharmaceutical supply and cost intelligence platform by NEUVIOR.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body style={{ colorScheme: 'dark' }} className={`${fontInter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
