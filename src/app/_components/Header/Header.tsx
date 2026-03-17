'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Activity, Bell, Settings, Menu, X } from 'lucide-react'
import { springs, mobileNavVariants, hoverScale } from '@/lib/animations'
import ThemeToggle from '@/ui/ThemeToggle'

const navItems = ['Dashboard', 'Insights', 'Supply', 'Settings'] as const
type NavItem = (typeof navItems)[number]

export default function Header() {
  const [active, setActive] = useState<NavItem>('Dashboard')
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNav = useCallback((item: NavItem) => {
    setActive(item)
    setMobileOpen(false)
  }, [])
  const toggleMobile = useCallback(() => setMobileOpen((p) => !p), [])

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3" aria-label="PHARMORIS home">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-sm bg-accent"
              aria-hidden="true"
            >
              <Activity className="h-4 w-4 text-bg" strokeWidth={2.5} />
            </div>
            <span className="font-display text-lg font-700 tracking-widest text-text-primary">
              PHARMORIS
            </span>
          </div>

          {/* Desktop Nav */}
          <nav
            role="navigation"
            aria-label="Primary navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {navItems.map((item) => {
              const isActive = active === item
              return (
                <button
                  key={item}
                  onClick={() => handleNav(item)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-4 py-2 font-mono text-xs tracking-widest outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:rounded-sm ${
                    isActive ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-2 bottom-0 h-px bg-accent"
                      style={{ willChange: 'transform' }}
                    />
                  )}
                  {item.toUpperCase()}
                </button>
              )
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2" role="toolbar" aria-label="Header actions">
            <ThemeToggle />

            {/* Bell — scale only, no bg color animation */}
            <motion.button
              aria-label="Notifications — 1 unread"
              {...hoverScale}
              style={{ willChange: 'transform' }}
              className="relative hidden h-8 w-8 items-center justify-center rounded-sm text-text-secondary outline-none focus-visible:ring-1 focus-visible:ring-accent md:flex"
            >
              <Bell className="h-4 w-4" aria-hidden="true" />
              <span
                aria-hidden="true"
                className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-accent"
              />
            </motion.button>

            {/* Settings — scale + rotate, no bg color animation */}
            <motion.button
              aria-label="Settings"
              whileHover={{ scale: 1.1, rotate: 30, transition: springs.snappy }}
              whileTap={{ scale: 0.92, transition: springs.micro }}
              style={{ willChange: 'transform' }}
              className="hidden h-8 w-8 items-center justify-center rounded-sm text-text-secondary outline-none focus-visible:ring-1 focus-visible:ring-accent md:flex"
            >
              <Settings className="h-4 w-4" aria-hidden="true" />
            </motion.button>

            {/* Mobile toggle */}
            <button
              onClick={toggleMobile}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              className="flex h-8 w-8 items-center justify-center rounded-sm text-text-secondary outline-none focus-visible:ring-1 focus-visible:ring-accent md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, transform: 'rotate(-90deg) scale(0.8)' }}
                  animate={{ opacity: 1, transform: 'rotate(0deg) scale(1)' }}
                  exit={{ opacity: 0, transform: 'rotate(90deg) scale(0.8)' }}
                  transition={{ duration: 0.15 }}
                  style={{ willChange: 'transform, opacity' }}
                >
                  {mobileOpen ? (
                    <X className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Menu className="h-4 w-4" aria-hidden="true" />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Nav — clipPath, zero layout reflow */}
        <AnimatePresence initial={false}>
          {mobileOpen && (
            <motion.nav
              id="mobile-nav"
              role="navigation"
              aria-label="Mobile navigation"
              variants={mobileNavVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ willChange: 'transform, opacity, clip-path' }}
              className="border-t border-border"
            >
              <div className="py-3">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNav(item)}
                    aria-current={active === item ? 'page' : undefined}
                    className={`block w-full px-2 py-3 text-left font-mono text-xs tracking-widest outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                      active === item ? 'text-accent' : 'text-text-secondary'
                    }`}
                  >
                    {item.toUpperCase()}
                  </button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
