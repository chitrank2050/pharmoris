'use client'

import { memo, useCallback, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  type TooltipContentProps,
} from 'recharts'
import { COST_SAVINGS_DATA } from '@/data/chart'
import { fadeUpVariants } from '@/lib/animations'
import { tokens } from '@/lib/tokens'

function formatSavings(value: number) {
  if (value >= 1_000_000) return `£${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `£${(value / 1_000).toFixed(0)}K`
  return `£${value}`
}

const ChartTooltip = memo(function ChartTooltip({ active, payload, label }: TooltipContentProps) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-sm border border-line bg-surface-raised px-3 py-2 shadow-xl">
      <p className="mb-1 text-xs text-muted">{label}</p>
      <p className="font-display text-sm font-700 text-accent">
        {formatSavings(payload[0].value as number)}
      </p>
    </div>
  )
})

const ChartBody = memo(function ChartBody() {
  const tooltipContent = useCallback(
    (props: TooltipContentProps) => <ChartTooltip {...props} />,
    []
  )

  return (
    <ResponsiveContainer width="100%" height={240}>
      <AreaChart data={COST_SAVINGS_DATA} margin={{ top: 10, right: 4, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={tokens.colors.accent} stopOpacity={0.25} />
            <stop offset="100%" stopColor={tokens.colors.accent} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="month"
          tick={{
            fill: tokens.colors.textSecondary,
            fontSize: 10,
            fontFamily: tokens.fonts.display,
          }}
          axisLine={false}
          tickLine={false}
          dy={8}
        />
        <YAxis
          tickFormatter={formatSavings}
          tick={{
            fill: tokens.colors.textSecondary,
            fontSize: 10,
            fontFamily: tokens.fonts.display,
          }}
          axisLine={false}
          tickLine={false}
          width={52}
        />
        <Tooltip
          content={tooltipContent}
          cursor={{ stroke: tokens.colors.border, strokeWidth: 1 }}
        />
        <Area
          type="monotone"
          dataKey="savings"
          stroke={tokens.colors.accent}
          strokeWidth={1.5}
          fill="url(#savingsGradient)"
          dot={false}
          activeDot={{ r: 4, fill: tokens.colors.accent, stroke: tokens.colors.bg, strokeWidth: 2 }}
          isAnimationActive={true}
          animationDuration={1200}
          animationEasing="ease-out"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
})

export default function CostSavingsChart() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      variants={fadeUpVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      style={{ willChange: 'transform, opacity' }}
      className="overflow-hidden rounded-2xl border border-line bg-surface p-8 shadow-sm h-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h3 className="text-lg font-bold text-primary">Cost Savings Over Time</h3>
          <p className="text-sm text-muted">Projected efficiency vs. actual savings.</p>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
            <span className="text-[11px] font-bold text-muted uppercase tracking-wider">
              Actual
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-line"></span>
            <span className="text-[11px] font-bold text-muted uppercase tracking-wider">
              Target
            </span>
          </div>
        </div>
      </div>

      {/* Chart Content */}
      <div className="grow min-h-[300px]">
        <ChartBody />
      </div>

      {/* Footer Stats */}
      <div className="flex justify-between mt-6 px-1 text-[11px] font-bold text-muted tracking-widest uppercase">
        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
        <span>Jun</span>
        <span>Jul</span>
      </div>
    </motion.div>
  )
}
