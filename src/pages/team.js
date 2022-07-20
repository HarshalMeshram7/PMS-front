import React from "react";
import { DashboardLayout } from "src/components/dashboard-layout";

const Team = () => {
    return(
        <>
        <h1>Team Page</h1>
        </>
    )
}

Team.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );

export default Team;