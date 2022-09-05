import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { ClubCard } from 'src/components/club/club-card';
import { ClubListToolbar } from 'src/components/club/club-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { AddClubDialog } from 'src/components/club/add-club-dialog';
import { useState, useEffect } from 'react';
import { ClubDetailsDialog } from 'src/components/club/club-details-dialog';
import { useAllAcademies } from 'src/adapters/academyAdapter';
import { useAllClubs } from 'src/adapters/clubAdapter';
import { ClubFinanceDialog } from 'src/components/club/club-finance-dialog';

const Clubs = () => {
    const [showAddClubDialog, setShowAddClubDialog] = useState(false);
    const [showClubDetailsDialog, setShowClubDetailsDialog] = useState(false);
    const [showClubFinanceDialog, setShowClubFinanceDialog] = useState(false);
    const [club, setClub] = useState([])
    const [params, setParams] = useState({})

    const handleOpenAddClub = () => setShowAddClubDialog(true);
    const handleCloseAddClub = () => setShowAddClubDialog(false);

    const handleOpenClubDetails = (club) => {
        setClub(club)
        setShowClubDetailsDialog(true)
    };
    const handleCloseClubDetails = () => setShowClubDetailsDialog(false);

    const handleOpenClubFinance = (club) => {
        setClub(club)
        setShowClubFinanceDialog(true)
    };
    const handleCloseClubFinance = () => setShowClubFinanceDialog(false);

    const handleSearch = (value) => {
        setParams((p) => ({ ...p, searched_name_pattern: value }))
    };

    const { academies, loading, error, mutate } = useAllAcademies({ ...params });
    // const { clubs, loading, error, mutate } = useAllClubs({ ...params });

    let clubsLocal = [{ "_id": "62de8df69fda862707152867", "academyName": "club2", "address": "Address", "phone": 8208793805, "email": "club2@pixonix.tech", "personName": "Person name", "logo": "/static/images/products/product_2.png", "banner": "../../../public/static/images/background/register.jpg", "accreditation": "accreditation", "facebook": "fb", "twitter": "tw", "instagram": "ins", "sportsList": ["Football", "Cricket", "Tennis"], "__v": 0 }, { "_id": "62de96aeba11e272e5e1db81", "academyName": "Fed3", "address": "Address", "phone": 8208793805, "email": "Federation3@pixonix.tech", "personName": "Person name", "logo": "/static/images/products/product_3.png", "banner": "../../../public/static/images/background/register.jpg", "accreditation": "accreditation", "facebook": "fb", "twitter": "tw", "instagram": "ins", "sportsList": ["Football", "Cricket", "Tennis"], "__v": 0 }, { "_id": "62de978fba11e272e5e1db93", "academyName": "Club4", "address": "Address", "phone": 8208793805, "email": "Federation4@pixonix.tech", "personName": "Person name", "logo": "/static/images/products/product_4.png", "banner": "../../../public/static/images/background/register.jpg", "accreditation": "accreditation", "facebook": "fb", "twitter": "tw", "instagram": "ins", "sportsList": ["Cricket"], "__v": 0 }, { "_id": "62ea72328d25391153e4cfe7", "academyName": "Club1", "address": "Address", "phone": 8208793805, "email": "Federation@pixonix.tech", "personName": "Person name", "logo": "/static/images/products/product_1.png", "banner": "../../../public/static/images/background/register.jpg", "accreditation": "accreditation", "facebook": "fb", "twitter": "tw", "instagram": "ins", "sportsList": [], "__v": 0 }]

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
                <ClubDetailsDialog club={club}
                    mutate={mutate}
                    open={showClubDetailsDialog}
                    handleClose={handleCloseClubDetails} />

                <ClubFinanceDialog
                    club={club}
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
                            {clubsLocal?.map((product,key) => (
                                <Grid
                                    item
                                    key={key}
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