'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Activity, Bell, Settings, LayoutDashboard, LineChart, Package } from 'lucide-react'
import { springs, hoverScale } from '@/lib/animations'
import ThemeToggle from '@/ui/ThemeToggle'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard },
  { label: 'Insights', icon: LineChart },
  { label: 'Supply', icon: Package },
  { label: 'Settings', icon: Settings },
] as const

type NavItemLabel = (typeof navItems)[number]['label']

export default function Header() {
  const [active, setActive] = useState<NavItemLabel>('Dashboard')

  const handleNav = useCallback((item: NavItemLabel) => {
    setActive(item)
  }, [])

  return (
    <>
      <header role="banner" className="sticky top-0 z-50 glass-header">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between w-full">
          <div className="flex h-16 items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center gap-3" aria-label="PHARMORIS home">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-sm bg-accent shadow-lg"
                aria-hidden="true"
              >
                <Activity className="h-4 w-4 text-bg" strokeWidth={2.5} />
              </div>
              <span className="font-display text-lg tracking-widest text-text-primary">
                PHARMORIS
              </span>
            </div>

            {/* Desktop Nav */}
            <nav
              role="navigation"
              aria-label="Primary navigation"
              className="hidden items-center gap-1 md:flex flex-1 justify-center"
            >
              {navItems.map((item) => {
                const isActive = active === item.label
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNav(item.label)}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn([
                      'relative px-4 py-2 text-xs tracking-widest outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:rounded-sm',
                      isActive
                        ? 'text-accent font-medium'
                        : 'text-text-secondary hover:text-text-primary',
                    ])}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-2 bottom-0 h-px bg-accent"
                        style={{ willChange: 'transform' }}
                      />
                    )}
                    {item.label.toUpperCase()}
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

              <div className="h-6 w-px bg-border mx-2 hidden md:block" />

              {/* Desktop Profile (placeholder for context) */}
              <div className="hidden items-center gap-3 pl-2 md:flex">
                <div className="text-right">
                  <p className="text-[10px] font-bold text-text-primary uppercase tracking-wider">
                    Dr. Chitrank
                  </p>
                  <p className="text-[9px] text-text-muted uppercase tracking-widest font-700">
                    Administrator
                  </p>
                </div>
                <div className="h-8 w-8 rounded-full border border-border bg-surface-raised overflow-hidden relative">
                  <Image
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                    alt="Avatar"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Bar */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-border bg-bg/90 backdrop-blur-lg md:hidden"
        aria-label="Mobile bottom navigation"
      >
        <div className="flex h-16 items-center justify-around px-2">
          {navItems.map((item) => {
            const isActive = active === item.label
            const Icon = item.icon
            return (
              <button
                key={item.label}
                onClick={() => handleNav(item.label)}
                className={cn(
                  'flex flex-col items-center justify-center gap-1 w-full h-full transition-colors duration-200',
                  isActive ? 'text-accent' : 'text-text-secondary'
                )}
              >
                <div className="relative">
                  <Icon className="h-5 w-5" />
                  {isActive && (
                    <motion.div
                      layoutId="active-dot"
                      className="absolute -top-1 -right-1 h-1 w-1 rounded-full bg-accent"
                      transition={springs.micro}
                    />
                  )}
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest">{item.label}</span>
              </button>
            )
          })}
        </div>
        {/* Safe area inset for physical home bars (iOS) */}
        <div className="h-[env(safe-area-inset-bottom)]" />
      </nav>
    </>
  )
}
