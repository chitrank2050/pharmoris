'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { LayoutDashboard, Pill, Calculator, BarChart3, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/inventory', label: 'Inventory', icon: Pill },
  { href: '/savings', label: 'Savings', icon: Calculator },
  { href: '/reports', label: 'Reports', icon: BarChart3 },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <>
      <nav className="hidden lg:flex items-center gap-1 mx-8" aria-label="Main navigation">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'group flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-accent/10 text-accent shadow-sm ring-1 ring-accent/20'
                  : 'text-secondary hover:bg-page hover:text-primary'
              )}
            >
              <Icon
                className={cn(
                  'h-4 w-4',
                  isActive ? 'text-accent' : 'text-muted group-hover:text-secondary'
                )}
              />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Mobile Bottom Bar */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 bg-surface border-t border-line px-6 h-16 flex lg:hidden items-center justify-between shadow-2xl safe-area-inset-bottom"
        aria-label="Mobile navigation"
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center gap-1 p-2 rounded-xl transition-all',
                isActive ? 'text-accent' : 'text-muted'
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
            </Link>
          )
        })}
        <button className="flex flex-col items-center gap-1 p-2 text-muted">
          <Settings className="h-5 w-5" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Settings</span>
        </button>
      </nav>
    </>
  )
}
