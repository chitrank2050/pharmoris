'use client'

import { motion } from 'framer-motion'
import { Download, PlusCircle } from 'lucide-react'
import { fadeUpVariants } from '@/lib/animations'
import { Button } from '@/ui'

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
        <Button
          variant="secondary"
          className="sm:min-w-[145px]"
          aria-label="Export analytics report as PDF"
        >
          <Download className="w-4 h-4 text-muted" />
          Export PDF
        </Button>
        <Button
          variant="primary"
          className="sm:min-w-[145px]"
          aria-label="Start a new pharmaceutical analysis"
        >
          <PlusCircle className="w-4 h-4" />
          New Analysis
        </Button>
      </motion.div>
    </section>
  )
}
