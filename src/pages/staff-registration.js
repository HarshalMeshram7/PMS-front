import React from "react";
import Head from "next/head";
import { useState } from "react";
import { Box, Container } from "@mui/material";
import { getUserDetails } from "src/services/userRequests";
import { DashboardLayout } from "src/components/dashboard-layout";
import { StaffRegistrationListToolbar } from "src/components/staff-registration/staffregistration-list-toolbar";
import { AddStaffRegistrationDialog } from "src/components/staff-registration/add-staffregistration-dialog";
import { StaffRegistrationListResults } from "src/components/staff-registration/staff-list-result";
import { StaffRegistrationDetailsDialog } from "src/components/staff-registration/staff-details-dialog";
import { useAllStaff } from "src/adapters/staffAdapter";

const StaffRegistration = () => {

  const [showAddStaffRegistrationDialog, setShowAddStaffRegistrationDialog] = useState(false);
  const [showStaffRegistrationDetailsDialog, setShowStaffRegistrationDetailsDialog] = useState(false);
  const [params, setParams] = useState({});
  const [staff, setStaff] = useState({});
  const handleOpenAddStaffRegistration = () => setShowAddStaffRegistrationDialog(true);
  const handleCloseAddStaffRegistration = () => setShowAddStaffRegistrationDialog(false);
  const handleCloseStaffRegistrationDetails = () => setShowStaffRegistrationDetailsDialog(false);
  

  const handleOpenStaffRegistrationDetails = (staff) => {
    try{
      getUserDetails({id:staff.ID}).then((res)=>{
        if(res?.status === "SUCCESS"){
          let SendStaff = {...res.result,fullName:staff.FullName}
          setUser(SendStaff);
          setShowStaffRegistrationDetailsDialog(true)
        }
      })
    }
    catch(error){
      console.log(error);
    }
  };

  const { loading, staffs, mutate } = useAllStaff({ ...params });

  return (
    <>
      <Head>
        <title>Staff Registration | PMS</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <AddStaffRegistrationDialog
          open={showAddStaffRegistrationDialog}
          handleClose={handleCloseAddStaffRegistration}
        />
        <StaffRegistrationDetailsDialog
          staff={staff}
          open={showStaffRegistrationDetailsDialog}
          handleClose={handleCloseStaffRegistrationDetails}
        />
        <Container maxWidth={false}>
          <StaffRegistrationListToolbar
            handleOpenAddStaffRegistration={handleOpenAddStaffRegistration}
            open={showAddStaffRegistrationDialog}
          />
          {/* <Box sx={{ mt: 3 }}>
            <UserAccessListResults userAccess={users || []} 
            handleOpenStaffRegistrationDetails={handleOpenStaffRegistrationDetails} />
          </Box> */}

          <Box sx={{ mt: 3 }}>
            <StaffRegistrationListResults StaffAccess={staffs || []} 
            handleOpenStaffRegistrationDetails={handleOpenStaffRegistrationDetails} />
          </Box>
          
        </Container>

      </Box>
    </>
  )
}

StaffRegistration.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default StaffRegistration;