'use client'

import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { staggerChildVariants } from '@/lib/animations'
import type { KPICard } from '@/types'
import { cn } from '@/lib/utils'

interface Props {
  card: KPICard
}

const trendConfig = {
  up: 'text-emerald-700 bg-emerald-50 border-emerald-100',
  down: 'text-rose-700 bg-rose-50 border-rose-100',
  info: 'text-accent bg-accent-dim border-accent/10',
  stable: 'text-slate-400 bg-slate-50 border-slate-100',
}

// Icon base colors from the design
const iconConfig: Record<string, string> = {
  'active-pharmacies': 'bg-blue-50 text-accent',
  'drugs-monitored': 'bg-indigo-50 text-indigo-600',
  'cost-savings': 'bg-emerald-50 text-emerald-600',
  'stock-alerts': 'bg-rose-50 text-rose-600',
}

const Card = memo(function KPICard({ card }: Props) {
  const Icon =
    (LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>)[
      card.icon
        .split('-')
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join('')
    ] || LucideIcons.Activity

  const iconClasses = useMemo(() => iconConfig[card.id] || 'bg-slate-50 text-slate-400', [card.id])
  const trendClasses = useMemo(
    () => trendConfig[card.direction] || trendConfig.stable,
    [card.direction]
  )

  return (
    <motion.article
      variants={staggerChildVariants}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="group relative flex flex-col bg-surface p-6 rounded-2xl border border-line shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-5">
        <div
          className={cn(
            'p-2.5 rounded-xl transition-transform duration-300 group-hover:scale-110 border',
            iconClasses
          )}
        >
          <Icon className="w-5 h-5" />
        </div>
        <span
          className={cn(
            'text-[11px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap border',
            trendClasses
          )}
        >
          {card.change}
        </span>
      </div>

      <p className="text-xs font-semibold text-muted uppercase tracking-wider">{card.label}</p>

      <h3 className="text-3xl font-bold text-primary mt-1.5 tracking-tight">{card.value}</h3>

      <div className="text-xs text-muted mt-4 flex items-center gap-1.5">
        <span className="w-1 h-1 rounded-full bg-slate-300" aria-hidden="true"></span>
        {card.description}
      </div>
    </motion.article>
  )
})

export default Card
