import Head from "next/head";
import { Box, Container } from "@mui/material";
import { AddUserAccessDialog } from "src/components/user-access/add-useraccess-dialog";
import { UserAccessListToolbar } from "src/components/user-access/useraccess-list-toolbar";
import { UserAccessListResults } from "src/components/user-access/useraccess-list-result";
import { DashboardLayout } from "../components/dashboard-layout";
import { useState } from "react";
import { useAllUser2 } from "src/adapters/usersAdapters";
import { UserAccessDetailsDialog } from "src/components/user-access/useraccess-details-dialog";
import { getUserDetails } from "src/services/userRequests";

const Useraccess = () => {
  const [showAddUserAccessDialog, setShowAddUserAccessDialog] = useState(false);
  const [showUserAccessDetailsDialog, setShowUserAccessDetailsDialog] = useState(false);
  const [user, setUser] = useState({});
  const [params, setParams] = useState({});
  const handleOpenAddUserAccess = () => setShowAddUserAccessDialog(true);
  const handleCloseAddUserAccess = () => setShowAddUserAccessDialog(false);

  const handleCloseUserAccessDetails = () => setShowUserAccessDetailsDialog(false);
  const handleOpenUserAccessDetails = (user) => {
    try{
      getUserDetails({id:user.ID}).then((res)=>{
        if(res?.status === "SUCCESS"){
          let Senduser = {...res.result,fullName:user.FullName}
          setUser(Senduser);
          setShowUserAccessDetailsDialog(true)
        }
      })
    }
    catch(error){
      console.log(error);
    }
  };

  const { loading, users, mutate } = useAllUser2({ ...params });

  return (
    <>
      <Head>
        <title>Referee Registration | PMS</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <AddUserAccessDialog
          open={showAddUserAccessDialog}
          handleClose={handleCloseAddUserAccess}
        />
        <UserAccessDetailsDialog
          user={user}
          open={showUserAccessDetailsDialog}
          handleClose={handleCloseUserAccessDetails}
        />
        <Container maxWidth={false}>
          <UserAccessListToolbar
            handleOpenAddUserAccess={handleOpenAddUserAccess}
            open={showAddUserAccessDialog}
          />
          <Box sx={{ mt: 3 }}>
            <UserAccessListResults userAccess={users || []} 
            handleOpenUserAccessDetails={handleOpenUserAccessDetails} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Useraccess.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Useraccess;
