import React from "react";
import { DashboardLayout } from "src/components/dashboard-layout";

const CoachRegistration = () => {
    return(
        <>
        <h1>Coach Registration Page</h1>
        </>
    )
}

CoachRegistration.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );

export default CoachRegistration;