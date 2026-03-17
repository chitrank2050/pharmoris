import { Syne, IBM_Plex_Mono, DM_Sans } from 'next/font/google'

export const fontSyne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  preload: true,
})

export const fontIbmPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500'],
  preload: true,
})

export const fontDmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500'],
  preload: true,
})
