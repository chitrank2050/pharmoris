'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { hoverScale, springs } from '@/lib/animations'

/**
 * ThemeToggle Component
 * Handles switching between dark and light themes using next-themes.
 */
export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    // Use requestAnimationFrame to defer the state update.
    // This avoids the "Calling setState synchronously within an effect" warning
    // while ensuring the component correctly identifies when it has mounted on the client.
    const raf = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  if (!mounted) {
    return <div className="h-8 w-8" aria-hidden="true" />
  }

  // Use resolvedTheme to handle cases where 'system' preference is enabled
  const isDark = resolvedTheme === 'dark'

  return (
    <motion.button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      {...hoverScale}
      className="flex h-8 w-8 items-center justify-center rounded-sm text-secondary outline-none focus-visible:ring-1 focus-visible:ring-accent"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? 'sun' : 'moon'}
          initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
          transition={springs.micro}
          style={{ willChange: 'transform, opacity' }}
        >
          {isDark ? (
            <Sun className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Moon className="h-4 w-4" aria-hidden="true" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  )
}
