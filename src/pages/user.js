import React from "react";
import { DashboardLayout } from "src/components/dashboard-layout";

const User = () => {
    return(
        <>
        <h1>User Page</h1>
        </>
    )
}

User.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );

export default User;