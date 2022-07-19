import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { PlayerListResults } from '../components/player/player-list-results';
import { PlayerListToolbar } from '../components/player/player-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { players } from '../__mocks__/players';

const Players = () => (
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
      <Container maxWidth={false}>
        <PlayerListToolbar />
        <Box sx={{ mt: 3 }}>
          <PlayerListResults players={players} />
        </Box>
      </Container>
    </Box>
  </>
);
Players.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Players;
