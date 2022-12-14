import Head from "next/head";
import { Box, Container } from "@mui/material";
import { AddUserAccessDialog } from "src/components/user-access/add-useraccess-dialog";
import { UserAccessListToolbar } from "src/components/user-access/useraccess-list-toolbar";
import { UserAccessListResults } from "src/components/user-access/useraccess-list-result";
import { DashboardLayout } from "../components/dashboard-layout";
import { useState } from "react";
import { useAllUser2 } from "src/adapters/usersAdapters";
import { UserAccessDetailsDialog } from "src/components/user-access/useraccess-details-dialog";
import { getUserDetails, deleteUser ,getUserTypeList} from "src/services/userRequests";
import DeleteDialog from "src/components/common/deleteDialog";


const Useraccess = () => {
  const [showAddUserAccessDialog, setShowAddUserAccessDialog] = useState(false);
  const [showUserAccessDetailsDialog, setShowUserAccessDetailsDialog] = useState(false);
  const [openDeleteDialogue, setOpenDeleteDialogue] = useState(false);
  const [user, setUser] = useState({});
  const [params, setParams] = useState({});

  const handleOpenAddUserAccess = () => {
    try {
      getUserTypeList().then((res) => {
        if (res?.status === "SUCCESS") {
          setUser(res.result);
        }
        setShowAddUserAccessDialog(true)
      })
    }
    catch (error) {
      console.log(error);
    }
  };
  const handleCloseAddUserAccess = () => setShowAddUserAccessDialog(false);

  const handleCloseUserAccessDetails = () => setShowUserAccessDetailsDialog(false);
  const handleOpenUserAccessDetails = (user) => {
    try {
      getUserDetails({ id: user.ID }).then((res) => {
        if (res?.status === "SUCCESS") {
          let Senduser = { ...res.result, fullName: user.FullName }
          setUser(Senduser);
          setShowUserAccessDetailsDialog(true)
        }
      })
    }
    catch (error) {
      console.log(error);
    }
  };
  const handleDeleteUser = (id) => {
    try {
      deleteUser({ "Id": id }).then((res) => {
        if (res?.status === "success") {
          setOpenDeleteDialogue(false)
          mutate();
        }
      })
    }
    catch (error) {
      console.log(error);
    }
  };


  const handleOpenDeleteDialogue = (user) => {
    setUser(user)
    setOpenDeleteDialogue(true);
  };

  const handleCloseDeleteDialogue = () => {
    setOpenDeleteDialogue(false);
  };
  const handleSearch = (value) => {
    setParams((p) => ({ ...p, searchpattern: value }))
  };



  const { loading, users, mutate } = useAllUser2({ ...params });

  return (
    <>
      <Head>
        <title>User Access | PMS</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <DeleteDialog
          handleDelete={handleDeleteUser}
          name={user.FullName}
          ID={user.ID}
          open={openDeleteDialogue}
          handleClose={handleCloseDeleteDialogue}
        />
        <AddUserAccessDialog
          user={user}
          open={showAddUserAccessDialog}
          handleClose={handleCloseAddUserAccess}
          mutate={mutate}
        />
        <UserAccessDetailsDialog
          user={user}
          open={showUserAccessDetailsDialog}
          handleClose={handleCloseUserAccessDetails}
        />
        <Container maxWidth={false}>
          <UserAccessListToolbar
            search={handleSearch}
            handleOpenAddUserAccess={handleOpenAddUserAccess}
            open={showAddUserAccessDialog}
          />
          <Box sx={{ mt: 3 }}>
            <UserAccessListResults userAccess={users || []}
              handleOpenUserAccessDetails={handleOpenUserAccessDetails}
              handleOpenDeleteDialogue={handleOpenDeleteDialogue} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Useraccess.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Useraccess;
