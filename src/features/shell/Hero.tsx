'use client'

import { motion } from 'framer-motion'
import { Download, PlusCircle } from 'lucide-react'
import { fadeUpVariants } from '@/lib/animations'

export default function Hero() {
  return (
    <section
      className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
      id="hero-section"
    >
      <motion.div
        id="hero-text-animate"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1 className="text-3xl font-bold tracking-tight text-primary">Overview</h1>
        <p className="text-muted mt-1.5 text-sm">
          Real-time pharmaceutical monitoring and supply analytics.
        </p>
      </motion.div>
      <motion.div
        className="flex gap-3 flex-wrap sm:flex-nowrap"
        id="hero-actions-animate"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <button
          aria-label="Export analytics report as PDF"
          className="flex items-center justify-center gap-2 px-4 py-2 bg-surface border border-line rounded-lg text-sm font-medium hover:bg-surface-raised hover:border-line transition-all shadow-sm active:scale-95 text-secondary whitespace-nowrap sm:min-w-[145px]"
        >
          <Download className="w-4 h-4 text-muted" />
          Export PDF
        </button>
        <button
          aria-label="Start a new pharmaceutical analysis"
          className="flex items-center justify-center gap-2 px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-hover transition-all shadow-md active:scale-95 whitespace-nowrap sm:min-w-[145px]"
        >
          <PlusCircle className="w-4 h-4" />
          New Analysis
        </button>
      </motion.div>
    </section>
  )
}
