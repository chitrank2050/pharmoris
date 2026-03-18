import type { KPICard } from '@/types'

export const KPI_DATA: KPICard[] = [
  {
    id: 'active-pharmacies',
    label: 'Active Pharmacies',
    value: '128',
    description: 'vs. last month',
    change: '+4%',
    direction: 'up',
    icon: 'building-2',
  },
  {
    id: 'drugs-monitored',
    label: 'Drugs Monitored',
    value: '12,450',
    description: 'Active inventory items',
    change: '+120 new',
    direction: 'up',
    icon: 'pill',
  },
  {
    id: 'cost-savings',
    label: 'Cost Savings',
    value: '£3.2M',
    description: 'Calculated annually',
    change: 'Target Met',
    direction: 'info',
    icon: 'trending-up',
  },
  {
    id: 'stock-alerts',
    label: 'Stock Alerts Today',
    value: '47',
    description: 'Critical low levels',
    change: 'Action Required',
    direction: 'down',
    icon: 'alert-triangle',
  },
]
