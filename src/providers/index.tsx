'use client'

import { ThemeProvider } from 'next-themes'

interface Props {
  children: React.ReactNode
}

export default function AppProvider({ children }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {children}
    </ThemeProvider>
  )
}
