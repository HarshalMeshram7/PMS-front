import React from 'react'
import { DashboardLayout } from 'src/components/dashboard-layout'

export default function Clubfinance() {
  return (
    <div>clubfinance</div>
  )
}
Clubfinance.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);