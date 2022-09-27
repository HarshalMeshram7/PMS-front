import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { AddPlayerDialog } from 'src/components/player/add-player-dialog';
import { PlayerListResults } from '../components/player/player-list-results';
import { PlayerListToolbar } from '../components/player/player-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { useState } from 'react';
import { PlayerDetailsDialog } from 'src/components/player/player-details-dialog';

const Players = () => {
  const [showAddPlayerDialog, setShowAddPlayerDialog] = useState(false);
  const [showPlayerDetailsDialog, setShowPlayerDetailsDialog] = useState(false);
  const handleOpenAddPlayer = () => setShowAddPlayerDialog(true);
  const handleCloseAddPlayer = () => setShowAddPlayerDialog(false);
  
  const handleOpenPlayerDetails = () => setShowPlayerDetailsDialog(true);
  const handleClosePlayerDetails = () => setShowPlayerDetailsDialog(false);

let playerslist =
[
  {
    id: "1",
    address: {
      country: 'USA',
      state: 'West Virginia',
      city: 'Parkersburg',
      street: '2849 Fulton Street'
    },
    avatarUrl: '/static/images/avatars/avatar_3.png',
    createdAt: 1555016400000,
    email: 'ekaterina.tankova@devias.io',
    name: 'Ekaterina Tankova',
    phone: '304-428-3097'
  },
  {
    id: "2",
    address: {
      country: 'USA',
      state: 'Bristow',
      city: 'Iowa',
      street: '1865  Pleasant Hill Road'
    },
    avatarUrl: '/static/images/avatars/avatar_4.png',
    createdAt: 1555016400000,
    email: 'cao.yu@devias.io',
    name: 'Cao Yu',
    phone: '712-351-5711'
  },
]


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
    <PlayerDetailsDialog 
    open={showPlayerDetailsDialog}
    handleClose={handleClosePlayerDetails}
    />
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
          <PlayerListResults players={playerslist} handleOpenPlayerDetails={handleOpenPlayerDetails}
             />
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
