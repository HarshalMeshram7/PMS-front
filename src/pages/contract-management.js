import React from "react";
import { DashboardLayout } from "src/components/dashboard-layout";

const ContractManagement = () => {
    return(
        <>
        <h1>Contract Management Page</h1>
        </>
    )
}

ContractManagement.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );

export default ContractManagement;