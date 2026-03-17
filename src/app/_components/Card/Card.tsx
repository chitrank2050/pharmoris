'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { staggerChildVariants, hoverLift } from '@/lib/animations'
import type { KPICard } from '@/types'

interface Props {
  card: KPICard
}

const directionConfig = {
  up: { icon: TrendingUp, color: 'text-accent', bg: 'bg-accent-dim', label: 'trending up' },
  down: { icon: TrendingDown, color: 'text-danger', bg: 'bg-danger/10', label: 'trending down' },
  stable: { icon: Minus, color: 'text-text-secondary', bg: 'bg-surface-raised', label: 'stable' },
}

const Card = memo(function KPICard({ card }: Props) {
  const { icon: Icon, color, bg, label } = directionConfig[card.direction]

  return (
    <motion.article
      variants={staggerChildVariants}
      {...hoverLift}
      style={{ willChange: 'transform, opacity' }}
      aria-label={`${card.label}: ${card.value}, ${card.change}`}
      className="group relative overflow-hidden rounded-sm border border-border bg-surface p-6 cursor-default"
    >
      {/* Top row */}
      <div className="mb-4 flex items-start justify-between">
        <span className="font-mono text-xs tracking-widest text-text-secondary">
          {card.label.toUpperCase()}
        </span>
        <div
          className={`flex h-7 w-7 items-center justify-center rounded-sm ${bg}`}
          aria-hidden="true"
        >
          <Icon className={`h-3.5 w-3.5 ${color}`} strokeWidth={2.5} />
        </div>
      </div>

      {/* Value */}
      <p className="mb-2 font-display text-3xl font-800 tracking-tight text-text-primary">
        {card.value}
      </p>

      {/* Change */}
      <p className={`font-mono text-xs ${color}`} aria-label={`Change: ${card.change}, ${label}`}>
        {card.change}
      </p>

      {/* Bottom accent — transform only, GPU composited */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
        style={{ willChange: 'transform' }}
      />
    </motion.article>
  )
})

export default Card
