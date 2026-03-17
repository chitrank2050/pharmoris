import { Suspense } from 'react'
import { Activity } from 'lucide-react'
import ThemeToggle from '@/ui/ThemeToggle'

import Navbar from './Navbar'
import Profile from './Profile'
import Notifications from './Notifications'

export default function Header() {
  return (
    <header role="banner" className="sticky top-0 z-50 glass-header">
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between w-full">
        <div className="flex h-16 items-center justify-between w-full">
          <div className="flex items-center gap-3" aria-label="PHARMORIS home">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-sm bg-accent shadow-lg"
              aria-hidden="true"
            >
              <Activity className="h-4 w-4 text-background" strokeWidth={2.5} />
            </div>
            <span className="font-normal tracking-tight text-lg text-primary">PHARMORIS</span>
          </div>

          <Suspense fallback={<div className="flex-1" />}>
            <Navbar />
          </Suspense>

          {/* Right Actions */}
          <div className="flex items-center gap-2" role="toolbar" aria-label="Header actions">
            <ThemeToggle />
            <Notifications />
            <div className="h-6 w-px bg-border mx-2 hidden md:block" />

            {/* Profile (Image and Name) - Wrapped in Suspense per user request */}
            <Suspense fallback={<div className="h-8 w-8 rounded-full bg-surface-raised md:w-32" />}>
              <Profile />
            </Suspense>
          </div>
        </div>
      </div>
    </header>
  )
}
