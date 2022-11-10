import React from "react";
import Head from 'next/head';

import { Box, Container } from '@mui/material';
import { DashboardLayout } from "src/components/dashboard-layout";
import { AddAdministrativeDialog } from "src/components/administrative-template/add-administrative-dialog";
import { useState } from 'react';
import { AdministrativeListToolbar } from "src/components/administrative-template/administrative-list-toolbar";
import { FixturesListToolbar } from "src/components/tournament-matches/fixtures-list-toolbar";
import { AddFixturesDialog } from "src/components/tournament-matches/add-fixtures-dialog";

const TournamentMatches = () => {

  const [showAddAdministrativeDialog, setShowAddAdministrativeDialog] = useState(false);
  const handleCloseAddAdministrative = () => setShowAddAdministrativeDialog(false);
  const handleOpenAddAdministrative = () => setShowAddAdministrativeDialog(true);
 

  return (
    <>
      <Head>
        <title>
          Tournament Matches | PMS
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >

        <AddFixturesDialog
          open={showAddAdministrativeDialog}
          handleClose={handleCloseAddAdministrative}
        />

        <Container maxWidth={false}>

        <FixturesListToolbar
            handleOpenAddAdministrative={handleOpenAddAdministrative} 
            open={showAddAdministrativeDialog}
          />


        </Container>

      </Box>


    </>
  )
}

TournamentMatches.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default TournamentMatches;