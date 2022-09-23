import React from "react";
import Head from "next/head";
import { useState } from "react";
import { Box, Container } from "@mui/material";
import { getCoachDetails } from "src/services/coachRequest";
import { DashboardLayout } from "src/components/dashboard-layout";
import { useAllCoach } from "src/adapters/coachAdapter";
import { AddCoachDialog } from "src/components/coach/add-coach-dialog";
import { CoachDetailsDialog } from "src/components/coach/coach-details-dialog";
import { CoachListToolbar } from "src/components/coach/coach-list-toolbar";
import { CoachListResult } from "src/components/coach/coach-list-result";


const CoachRegistration = () => {

  const [showAddCoachDialog, setShowAddCoachDialog] = useState(false);
  const [showCoachDetailsDialog, setShowCoachDetailsDialog] = useState(false);
  const [params, setParams] = useState({});
  const [coach, setCoach] = useState({});
  const handleOpenAddCoach = () => setShowAddCoachDialog(true);
  const handleCloseAddCoach = () => setShowAddCoachDialog(false);
  const handleCloseCoachDetails = () => setShowCoachDetailsDialog(false);

  
  const handleOpenCoachDetails = (coach) => {

    try{
      getCoachDetails({id:coach.ID}).then((res)=>{
        if(res?.status === "SUCCESS"){
          let SendCoach = {...res.result,fullName:coach.FullName}
          setUser(SendCoach);
          setShowCoachDetailsDialog(true)
        }
      })
    }
    catch(error){
      console.log(error);
    }
  };

  const { loading, coaches, mutate } = useAllCoach({ ...params });


    return(
        <>
        <Head>
        <title>Coach Registration | PMS</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <AddCoachDialog
          open={showAddCoachDialog}
          handleClose={handleCloseAddCoach}
        />
        <CoachDetailsDialog
          coach={coaches}
          open={showCoachDetailsDialog}
          handleClose={handleCloseCoachDetails}
        />
        <Container maxWidth={false}>
          <CoachListToolbar
            handleOpenAddCoach={handleOpenAddCoach}
            open={showAddCoachDialog}
          />
          {/* <Box sx={{ mt: 3 }}>
            <UserAccessListResults userAccess={users || []} 
            handleOpenCoachDetails={handleOpenCoachDetails} />
          </Box> */}

          <Box sx={{ mt: 3 }}>
            <CoachListResult CoachAccess={coaches || []} 
            handleOpenCoachDetails={handleOpenCoachDetails} />
          </Box>
          
        </Container>

      </Box>
    </>
  )
}


CoachRegistration.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );

export default CoachRegistration;