import PageShell from '@/layout/PageShell'

import Grid from './_components/Grid'
import Chart from './_components/Chart'
import Table from './_components/Table'

export default function DashboardPage() {
  return (
    <main className="min-h-screen">
      {/* <Header /> */}
      <PageShell>
        <Grid />
        <Table />
        <Chart />
      </PageShell>
    </main>
  )
}
