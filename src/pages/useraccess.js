import Head from 'next/head';
import { Box, Container } from '@mui/material';

// import { AddPlayerDialog } from 'src/components/player/add-player-dialog';
import { AddUserAccessDialog } from 'src/components/user-access/add-useraccess-dialog';

// import { PlayerListToolbar } from '../components/player/player-list-toolbar';
import { UserAccessListToolbar } from 'src/components/user-access/useraccess-list-toolbar';

// import { PlayerListResults } from '../components/player/player-list-results';
import { UserAccessListResults } from 'src/components/user-access/useraccess-list-result';

import { DashboardLayout } from '../components/dashboard-layout';
// import { players } from '../__mocks__/players';
import { userAccess } from 'src/__mocks__/userAccess';
import { useState } from 'react';

const Useraccess = () => {
  const [showAddUserAccessDialog, setShowAddUserAccessDialog] = useState(false);
  const handleOpenAddUserAccess = () => setShowAddUserAccessDialog(true);
  const handleCloseAddUserAccess = () => setShowAddUserAccessDialog(false);


return(
  <>
    <Head>
      <title>
        User Access | PMS
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    > 
    <AddUserAccessDialog
          open={showAddUserAccessDialog}
          handleClose={handleCloseAddUserAccess}
        />
      <Container maxWidth={false}>
      <UserAccessListToolbar
            handleOpenAddUserAccess={handleOpenAddUserAccess}
            open={showAddUserAccessDialog}
             />
        <Box sx={{ mt: 3 }}>
          <UserAccessListResults userAccess={userAccess} />
        </Box>
      </Container>
    </Box>
  </>
);
}

Useraccess.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);


export default Useraccess;
