import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { AddPlayerDialog } from 'src/components/player/add-player-dialog';
import { PlayerListResults } from '../components/player/player-list-results';
import { PlayerListToolbar } from '../components/player/player-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { players } from '../__mocks__/players';
import { useState } from 'react';

const Players = () => {
  const [showAddPlayerDialog, setShowAddPlayerDialog] = useState(false);
  const handleOpenAddPlayer = () => setShowAddPlayerDialog(true);
  const handleCloseAddPlayer = () => setShowAddPlayerDialog(false);


return(
  <>
    <Head>
      <title>
        Players | PMS
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    > 
    <AddPlayerDialog
          open={showAddPlayerDialog}
          handleClose={handleCloseAddPlayer}
        />
      <Container maxWidth={false}>
      <PlayerListToolbar
            handleOpenAddPlayer={handleOpenAddPlayer}
            open={showAddPlayerDialog}
             />
        <Box sx={{ mt: 3 }}>
          <PlayerListResults players={players} />
        </Box>
      </Container>
    </Box>
  </>
);
}

Players.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);


export default Players;
