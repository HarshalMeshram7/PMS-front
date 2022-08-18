import React from "react";
import { DashboardLayout } from "src/components/dashboard-layout";

const Clubfinance = () => {
    return(
        <>
        <h1>Club Finance Page</h1>
        </>
    )
}

Clubfinance.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );

export default Clubfinance;