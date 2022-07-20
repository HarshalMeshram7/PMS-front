import React from "react";
import { DashboardLayout } from "src/components/dashboard-layout";

const StaffRegistration = () => {
    return(
        <>
        <h1>Staff Registration Page</h1>
        </>
    )
}

StaffRegistration.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );

export default StaffRegistration;