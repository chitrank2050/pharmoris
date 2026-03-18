import { Bell } from 'lucide-react'
import { Button } from '@/ui'

export default function Notifications() {
  return (
    <Button variant="secondary" size="icon" className="relative">
      <div className="relative">
        <Bell className="h-4 w-4" />
        <span className="absolute -top-1.5 -right-1.5 h-3.5 w-3.5 flex items-center justify-center bg-rose-500 text-white rounded-full text-[9px] font-bold border-2 border-surface animate-pulse">
          3
        </span>
      </div>
    </Button>
  )
}
