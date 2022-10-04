import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { AddPlayerDialog } from 'src/components/player/add-player-dialog.js';
import { PlayerListResults } from '../components/player/player-list-results.js';
import { PlayerListToolbar } from '../components/player/player-list-toolbar.js';
import { DashboardLayout } from '../components/dashboard-layout.js';
import { useState } from 'react';
import { PlayerDetailsDialog } from 'src/components/player/player-details-dialog.js';
import { ContractListToolbar } from 'src/components/contract-management/contract-list-toolbar.js';
import { ContractDetailsDialog } from 'src/components/contract-management/contract-details-dialog.js';
import { AddContractDialog } from 'src/components/contract-management/add-contract-dialog.js';
import { ContractListResults } from 'src/components/contract-management/contract-list-results.js';


const ContractManagement = () => {
  const [showAddContractDialog, setShowAddContractDialog] = useState(false);
  const [showContractDetailsDialog, setShowContractDetailsDialog] = useState(false);
  const handleOpenAddContract = () => setShowAddContractDialog(true);
  const handleCloseAddContract = () => setShowAddContractDialog(false);
  const handleOpenContractDetails = () => setShowContractDetailsDialog(true);

  const handleCloseContractDetails = () => setShowContractDetailsDialog(false);

  let contractlist =
    [
      {
        id: "1",
        address: {
          country: 'CONTRACT',
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
          country: 'CONTRACT',
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


  return (
    <>
      <Head>
        <title>
          Contract Management | PMS
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <ContractDetailsDialog
          open={showContractDetailsDialog}
          handleClose={handleCloseContractDetails}
        />

        <AddContractDialog
          open={showAddContractDialog}
          handleClose={handleCloseAddContract}
        />
        <Container maxWidth={false}>
          <ContractListToolbar
            handleOpenAddContract={handleOpenAddContract}
            open={showAddContractDialog}
          />

          <Box sx={{ mt: 3 }}>
            <ContractListResults contracts={contractlist} handleOpenContractDetails={handleOpenContractDetails}
            />
          </Box>

        </Container>
      </Box>
    </>
  );
}

ContractManagement.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);


export default ContractManagement;
