'use client'

import { Bell } from 'lucide-react'

export default function Notifications() {
  return (
    <button className="h-9 w-9 flex items-center justify-center rounded-xl bg-surface border border-line text-muted hover:text-primary hover:border-slate-300 transition-all shadow-sm active:shadow-inner">
      <div className="relative">
        <Bell className="h-4 w-4" />
        <span className="absolute -top-1.5 -right-1.5 h-3.5 w-3.5 flex items-center justify-center bg-rose-500 text-white rounded-full text-[9px] font-bold border-2 border-surface animate-pulse">
          3
        </span>
      </div>
    </button>
  )
}
