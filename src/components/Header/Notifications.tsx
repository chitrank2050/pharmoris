'use client'

import { motion } from 'framer-motion'
import { Bell } from 'lucide-react'
import { hoverScale } from '@/lib/animations'

export default function Notifications() {
  return (
    <motion.button
      aria-label="Notifications — 1 unread"
      {...hoverScale}
      style={{ willChange: 'transform' }}
      className="relative hidden h-8 w-8 items-center justify-center rounded-sm text-secondary outline-none focus-visible:ring-1 focus-visible:ring-accent md:flex"
    >
      <Bell className="h-4 w-4" aria-hidden="true" />
      <span
        aria-hidden="true"
        className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-accent"
      />
    </motion.button>
  )
}
