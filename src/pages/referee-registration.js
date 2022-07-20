import React from "react";
import { DashboardLayout } from "src/components/dashboard-layout";

const RefereeRegistration = () => {
    return(
        <>
        <h1>Referee Registration Page</h1>
        </>
    )
}

RefereeRegistration.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );

export default RefereeRegistration;