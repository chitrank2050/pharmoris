'use client'

import { useState } from 'react'
import { Activity, Bell, Settings, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = ['Dashboard', 'Insights', 'Supply', 'Settings'] as const

export default function Header() {
  const [active, setActive] = useState('Dashboard')
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-accent">
              <Activity className="h-4 w-4 text-bg" strokeWidth={2.5} />
            </div>
            <span className="font-display text-lg font-700 tracking-widest text-text-primary">
              PHARMORIS
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={cn([
                  'relative px-4 py-2 font-mono text-xs tracking-widest transition-colors duration-200',
                  active === item ? 'text-accent' : 'text-text-secondary hover:text-text-primary',
                ])}
              >
                {active === item && <span className="absolute inset-x-2 bottom-0 h-px bg-accent" />}
                {item.toUpperCase()}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button className="relative hidden h-8 w-8 items-center justify-center rounded-sm text-text-secondary transition-colors hover:bg-surface hover:text-text-primary md:flex">
              <Bell className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
            </button>
            <button className="hidden h-8 w-8 items-center justify-center rounded-sm text-text-secondary transition-colors hover:bg-surface hover:text-text-primary md:flex">
              <Settings className="h-4 w-4" />
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-8 w-8 items-center justify-center rounded-sm text-text-secondary hover:text-text-primary md:hidden"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="border-t border-border py-3 md:hidden">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActive(item)
                  setMobileOpen(false)
                }}
                className={cn([
                  'block w-full px-2 py-3 text-left font-mono text-xs tracking-widest transition-colors',
                  active === item ? 'text-accent' : 'text-text-secondary',
                ])}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
