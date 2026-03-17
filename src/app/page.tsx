import PageShell from '@/layout/PageShell'

import Grid from './_components/Grid'
import Chart from './_components/Chart'

export default function DashboardPage() {
  return (
    <main className="min-h-screen">
      {/* <Header /> */}
      <PageShell>
        {/* <Grid /> */}
        <Grid />
        <Chart />
      </PageShell>
    </main>
  )
}
