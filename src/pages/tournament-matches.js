import React from "react";
import { DashboardLayout } from "src/components/dashboard-layout";

const TournamentMatches = () => {
    return(
        <>
        <h1>Tournament and Matches Page</h1>
        </>
    )
}

TournamentMatches.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );

export default TournamentMatches;