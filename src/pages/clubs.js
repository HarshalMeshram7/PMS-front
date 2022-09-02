import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { ClubCard } from 'src/components/newclub/club-card';
import { ClubListToolbar } from 'src/components/newclub/club-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { AddClubDialog } from 'src/components/newclub/add-club-dialog';
import { useState, useEffect } from 'react';
import { ClubDetailsDialog } from 'src/components/newclub/club-details-dialog';
import { useAllAcademies } from 'src/adapters/academyAdapter';
import { ClubFinanceDialog } from 'src/components/newclub/club-finance-dialog';

const Clubs = () => {
    const [showAddClubDialog, setShowAddClubDialog] = useState(false);
    const [showClubDetailsDialog, setShowClubDetailsDialog] = useState(false);
    const [showClubFinanceDialog, setShowClubFinanceDialog] = useState(false);
    const [academy, setAcademy] = useState([])
    const [params, setParams] = useState({})

    const handleOpenAddClub = () => setShowAddClubDialog(true);
    const handleCloseAddClub = () => setShowAddClubDialog(false);

    const handleOpenClubDetails = (academy) => {
        setAcademy(academy)
        setShowClubDetailsDialog(true)
    };
    const handleCloseClubDetails = () => setShowClubDetailsDialog(false);

    const handleOpenClubFinance = (academy) => {
        setAcademy(academy)
        setShowClubFinanceDialog(true)
    };
    const handleCloseClubFinance = () => setShowClubFinanceDialog(false);

    const handleSearch = (value) => {
        setParams((p) => ({ ...p, searched_name_pattern: value }))
    };

    const { academies, loading, error, mutate } = useAllAcademies({ ...params });

    return (
        <>
            <Head>
                <title>
                    Club | PMS
                </title>
            </Head>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <AddClubDialog
                    mutate={mutate}
                    open={showAddClubDialog}
                    handleClose={handleCloseAddClub}
                />
                <ClubDetailsDialog academy={academy}
                    mutate={mutate}
                    open={showClubDetailsDialog}
                    handleClose={handleCloseClubDetails} />

                <ClubFinanceDialog
                    academy={academy}
                    mutate={mutate}
                    open={showClubFinanceDialog}
                    handleClose={handleCloseClubFinance}
                />

                <Container maxWidth={false}>
                    <ClubListToolbar
                        onSearch={handleSearch}
                        handleOpenAddClub={handleOpenAddClub}
                        open={showAddClubDialog}
                    />
                    <Box sx={{ pt: 3 }}>
                        <Grid
                            container
                            spacing={3}
                        >
                            {academies?.map((product) => (
                                <Grid
                                    item
                                    key={product.id}
                                    lg={4}
                                    md={6}
                                    xs={12}
                                >
                                    <ClubCard
                                        handleOpenClubFinance={handleOpenClubFinance}
                                        handleOpenClubDetails={handleOpenClubDetails}
                                        product={product || []} />
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

Clubs.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Clubs;