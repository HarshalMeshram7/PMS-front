import React from "react";
import { DashboardLayout } from '../components/dashboard-layout';

const Academy = () => {
    return(
        <>
        <h1>Academy Page</h1>
        </>
    )
}

Academy.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );

export default Academy;