import React from 'react'
import { DashboardLayout } from 'src/components/dashboard-layout';

export default function Academyfinance() {
  return (
    <div>academyfinance</div>
  )
}

Academyfinance.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);
