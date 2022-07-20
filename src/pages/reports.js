import React from "react";
import { DashboardLayout } from "src/components/dashboard-layout";

const Reports = () => {
    return(
        <>
        <h1>Reports Page</h1>
        </>
    )
}

Reports.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );

export default Reports;