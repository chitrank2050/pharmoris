import Card from './Card'
import { KPI_DATA } from '@/data/kpi'

export default function Grid() {
  return (
    <section className="mb-8">
      <p className="mb-4 font-mono text-xs tracking-widest text-text-muted">OVERVIEW</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {KPI_DATA.map((card, index) => (
          <Card key={card.id} card={card} index={index} />
        ))}
      </div>
    </section>
  )
}
