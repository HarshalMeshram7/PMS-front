import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { clubs } from '../__mocks__/clubs';
import { ClubListToolbar } from '../components/clubs/club-list-toolbar';
import { ClubCard } from '../components/clubs/club-card';
import { DashboardLayout } from '../components/dashboard-layout';

const Clubs = () => (
  <>
    <Head>
      <title>
        Clubs | PMS
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
        <ClubListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {clubs.map((product) => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={6}
                xs={12}
              >
                <ClubCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box> */}
      </Container>
    </Box>
  </>
);

Clubs.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Clubs;
