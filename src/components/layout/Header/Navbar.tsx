'use client'

import { useState, useCallback } from 'react'
import { LayoutDashboard, LineChart, Package, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

export const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard },
  { label: 'Insights', icon: LineChart },
  { label: 'Supply', icon: Package },
  { label: 'Settings', icon: Settings },
] as const

export type NavItemLabel = (typeof navItems)[number]['label']

export default function Navbar() {
  const [active, setActive] = useState<NavItemLabel>('Dashboard')

  const handleNav = useCallback((item: NavItemLabel) => {
    setActive(item)
  }, [])

  return (
    <>
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
                'relative p-2 text-xs font-medium tracking-wider outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:rounded-sm',
                isActive ? 'text-accent font-medium' : 'text-secondary hover:text-primary',
              ])}
            >
              {item.label.toUpperCase()}
            </button>
          )
        })}
      </nav>

      {/* Mobile Bottom Bar */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-line bg-page/90 backdrop-blur-lg md:hidden"
        aria-label="Mobile bottom navigation"
      >
        <div className="flex h-16 items-center justify-around px-2 w-full">
          {navItems.map((item) => {
            const isActive = active === item.label
            const Icon = item.icon
            return (
              <button
                key={item.label}
                onClick={() => handleNav(item.label)}
                className={cn(
                  'flex flex-col items-center justify-center gap-1 w-full h-full transition-colors duration-200',
                  isActive ? 'text-accent' : 'text-secondary'
                )}
              >
                <div className="relative">
                  <Icon className="h-5 w-5" />
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
