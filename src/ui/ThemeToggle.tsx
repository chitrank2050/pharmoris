'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { hoverScale, springs } from '@/lib/animations'

/**
 * ThemeToggle Component
 * Handles switching between dark and light themes using localStorage.
 * Standardizes on dark theme as default for PHARMORIS.
 */
export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(true)

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    // Default to dark if no preference is stored
    const initialDark = stored ? stored === 'dark' : true

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(initialDark)
    document.documentElement.classList.toggle('dark', initialDark)
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', next)
  }

  // Prevent hydration mismatch: don't render content until client-side state is ready
  if (!mounted) {
    return <div className="h-8 w-8" aria-hidden="true" />
  }

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      {...hoverScale}
      className="flex h-8 w-8 items-center justify-center rounded-sm text-text-secondary outline-none focus-visible:ring-1 focus-visible:ring-accent"
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
