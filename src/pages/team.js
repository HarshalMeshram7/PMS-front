import React from "react";
import Head from 'next/head';
import { DashboardLayout } from "src/components/dashboard-layout";
import { Box, Container, Grid, keyframes, Pagination } from '@mui/material';
import { teams } from "src/__mocks__/teams";
import { TeamListToolbar } from "src/components/team/team-list-toolbar";
import { TeamCard } from "src/components/team/team-card";
import { useState } from 'react';
import { useAllAcademies } from "src/adapters/academyAdapter";
import { useAllTeams } from "src/adapters/teamAdapter";
import { AddTeamDialog } from "src/components/team/add-team-dialog";
import { TeamDetailsDialog } from "src/components/team/team-details-dialog";
import { TeamFinanceDialog } from "src/components/team/team-finance-dialog";

const Team = () => {
  const [showAddTeamDialog, setShowAddTeamDialog] = useState(false);
  const [showTeamDetailsDialog, setShowTeamDetailsDialog] = useState(false);
  const [showTeamFinanceDialog, setShowTeamFinanceDialog] = useState(false);
  const [team, setTeam] = useState([])
  const [params, setParams] = useState({searchpattern: ""})

  const handleOpenAddTeam = () => setShowAddTeamDialog(true);
  const handleCloseAddTeam = () => setShowAddTeamDialog(false);

  const handleOpenTeamDetails = (team) => {
    setTeam(team)
    setShowTeamDetailsDialog(true)
  };
  const handleCloseTeamDetails = () => setShowTeamDetailsDialog(false);

  const handleOpenTeamFinance = (team) => {
    setTeam(team)
    setShowTeamFinanceDialog(true)
  };
  const handleCloseTeamFinance = () => setShowTeamFinanceDialog(false);

  const handleSearch = (value) => {
    setParams((p) => ({ ...p, searched_name_pattern: value }))
  };

  const { academies, loading, error, mutate } = useAllAcademies({ ...params });
  // const { teams, loading, error, mutate } = useAllTeams({ ...params });

  let teamLocal = [{ "_id": "62de8df69fda862707152867", "academyName": "Team 1", "address": "Address", "phone": 8208793805, "email": "club2@pixonix.tech", "personName": "Person name", "logo": "/static/images/products/product_2.png", "banner": "../../../public/static/images/background/register.jpg", "accreditation": "accreditation", "facebook": "fb", "twitter": "tw", "instagram": "ins", "sportsList": ["Football", "Cricket", "Tennis"], "__v": 0 }, { "_id": "62de96aeba11e272e5e1db81", "academyName": "Team 2", "address": "Address", "phone": 8208793805, "email": "Federation3@pixonix.tech", "personName": "Person name", "logo": "/static/images/products/product_3.png", "banner": "../../../public/static/images/background/register.jpg", "accreditation": "accreditation", "facebook": "fb", "twitter": "tw", "instagram": "ins", "sportsList": ["Football", "Cricket", "Tennis"], "__v": 0 }, { "_id": "62de978fba11e272e5e1db93", "academyName": "Team 3", "address": "Address", "phone": 8208793805, "email": "Federation4@pixonix.tech", "personName": "Person name", "logo": "/static/images/products/product_4.png", "banner": "../../../public/static/images/background/register.jpg", "accreditation": "accreditation", "facebook": "fb", "twitter": "tw", "instagram": "ins", "sportsList": ["Cricket"], "__v": 0 }, { "_id": "62ea72328d25391153e4cfe7", "academyName": "Team 4", "address": "Address", "phone": 8208793805, "email": "Federation@pixonix.tech", "personName": "Person name", "logo": "/static/images/products/product_1.png", "banner": "../../../public/static/images/background/register.jpg", "accreditation": "accreditation", "facebook": "fb", "twitter": "tw", "instagram": "ins", "sportsList": [], "__v": 0 }]

  return (
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
        <AddTeamDialog
          open={showAddTeamDialog}
          handleClose={handleCloseAddTeam}
        />
        <TeamDetailsDialog team={team}
          mutate={mutate}
          open={showTeamDetailsDialog}
          handleClose={handleCloseTeamDetails} />

        <TeamFinanceDialog
          team={team}
          mutate={mutate}
          open={showTeamFinanceDialog}
          handleClose={handleCloseTeamFinance}
        />

        <Container maxWidth={false}>
          <TeamListToolbar
            handleOpenAddTeam={handleOpenAddTeam}
            open={showAddTeamDialog}
          />
          <Box sx={{ pt: 3 }}>
            <Grid
              container
              spacing={3}
            >
              {teamLocal?.map((product, key) => (
                <Grid
                  item
                  key={key}
                  lg={4}
                  md={6}
                  xs={12}
                >
                  <TeamCard
                    handleOpenTeamFinance={handleOpenTeamFinance}
                    handleOpenTeamDetails={handleOpenTeamDetails}
                    product={product} />
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
}


Team.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Team;