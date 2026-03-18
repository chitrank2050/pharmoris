'use client'

import { motion } from 'framer-motion'
import Card from './Card'
import { KPI_DATA } from '@/data/kpi'
import { staggerContainerVariants } from '@/lib/animations'

export default function GridContent() {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {KPI_DATA.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </motion.div>
  )
}
