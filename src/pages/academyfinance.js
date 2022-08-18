import React from "react";
import { DashboardLayout } from "src/components/dashboard-layout";

const Academyfinance = () => {
    return(
        <>
        <h1>Academy Finance Page</h1>
        </>
    )
}

Academyfinance.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );

export default Academyfinance;