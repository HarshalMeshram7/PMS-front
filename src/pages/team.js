import React from "react";
import Head from 'next/head';
import { DashboardLayout } from "src/components/dashboard-layout";
import { Box, Container, Grid, Pagination } from '@mui/material';
import { teams } from "src/__mocks__/teams";
import { TeamListToolbar } from "src/components/team/team-list-toolbar";
import { TeamCard } from "src/components/team/team-card";

const Team = () => (
  <>
  <Head>
    <title>
      Team | PMS
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
      <TeamListToolbar />
      <Box sx={{ pt: 3 }}>
        <Grid
          container
          spacing={3}
        >
          {teams.map((product) => (
            <Grid
              item
              key={product.id}
              lg={4}
              md={6}
              xs={12}
            >
              <TeamCard product={product} />
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



Team.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );

export default Team;