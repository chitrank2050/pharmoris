import PageShell from '@/features/shell/PageShell'
import Header from '@/features/shell/Header'
import Hero from '@/features/shell/Hero'
import Grid from '@/features/kpi-metrics'
import Chart from '@/features/cost-analytics'
import Table from '@/features/supply-table'
import Trends from '@/features/trends'

export default function DashboardPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageShell>
        <Hero />
        <Grid />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="lg:col-span-2">
            <Chart />
          </div>
          <div className="lg:col-span-1">
            <Trends />
          </div>
        </div>

        <Table />
      </PageShell>
    </main>
  )
}
