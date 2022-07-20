import React from "react";
import { DashboardLayout } from "src/components/dashboard-layout";

const Scorecard = () => {
    return(
        <>
        <h1>Scorecard Page</h1>
        </>
    )
}

Scorecard.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );

export default Scorecard;