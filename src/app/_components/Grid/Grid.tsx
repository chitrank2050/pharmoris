'use client'

import { motion } from 'framer-motion'
import Card from '@/app/_components/Card/Card'
import { KPI_DATA } from '@/data/kpi'
import { staggerContainerVariants } from '@/lib/animations'

export default function KPIGrid() {
  return (
    <section aria-label="Key performance indicators" className="mb-8">
      <p className="mb-4 text-xs tracking-widest text-muted" aria-hidden="true">
        OVERVIEW
      </p>
      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        {KPI_DATA.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </motion.div>
    </section>
  )
}
