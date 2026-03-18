'use client'

import { motion } from 'framer-motion'
import { fadeUpVariants } from '@/lib/animations'
import { Button, Card } from '@/ui'

const MotionCard = motion(Card)

const INSIGHTS = [
  {
    id: 1,
    title: 'Generic switch suggested',
    description: 'Switching Paracetamol 500mg can save £4,200/mo in region B.',
    time: '2h ago',
    color: 'bg-accent',
  },
  {
    id: 2,
    title: 'Supply chain disruption',
    description: 'Manufacturer "GlobalPharma" reported a 2 week logistic delay.',
    time: '5h ago',
    color: 'bg-amber-500',
  },
  {
    id: 3,
    title: 'Price reduction alert',
    description: 'Lisinopril prices dropped by 12% across national hubs.',
    time: '1d ago',
    color: 'bg-emerald-500',
  },
]

export default function RecentTrends() {
  return (
    <section aria-label="Recent insights and alerts" className="h-full">
      <MotionCard
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h-full flex flex-col"
      >
        <h3 className="text-lg font-bold text-primary mb-8">Recent Insights</h3>
        <div className="space-y-8 flex-1">
          {INSIGHTS.map((item) => (
            <div key={item.id} className="flex gap-4 group cursor-pointer">
              <div
                className={`mt-1 w-2.5 h-2.5 rounded-full ${item.color} shrink-0 group-hover:scale-125 transition-transform`}
              ></div>
              <div>
                <p className="text-sm font-semibold text-primary leading-tight group-hover:text-accent transition-colors">
                  {item.title}
                </p>
                <p className="text-xs text-muted mt-1.5 leading-relaxed">{item.description}</p>
                <span className="text-[10px] text-muted mt-2 block font-bold uppercase tracking-wider italic">
                  {item.time}
                </span>
              </div>
            </div>
          ))}
        </div>
        <Button
          variant="tertiary"
          className="w-full mt-10 py-3 text-xs font-bold uppercase tracking-widest"
          aria-label="View all insight reports"
        >
          View All Reports
        </Button>
      </MotionCard>
    </section>
  )
}
