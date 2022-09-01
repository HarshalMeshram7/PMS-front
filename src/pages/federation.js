import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { FederationCard } from 'src/components/federation/federation-card';
import { FederationListToolbar } from 'src/components/federation/federation-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { AddFederationDialog } from 'src/components/federation/add-federation-dialog';
import { useState, useEffect } from 'react';
import { FederationDetailsDialog } from 'src/components/federation/federation-details-dialog';
import { useAllAcademies } from 'src/adapters/academyAdapter';
import { FederationFinanceDialog } from 'src/components/federation/federation-finance-dialog';

const Federation = () => {
    const [showAddFederationDialog, setShowAddFederationDialog] = useState(false);
    const [showFederationDetailsDialog, setShowFederationDetailsDialog] = useState(false);
    const [showFederationFinanceDialog, setShowFederationFinanceDialog] = useState(false);
    const [academy, setAcademy] = useState([])
    const [params, setParams] = useState({})

    const handleOpenAddFederation = () => setShowAddFederationDialog(true);
    const handleCloseAddFederation = () => setShowAddFederationDialog(false);

    const handleOpenAcademyDetails = (academy) => {
        setAcademy(academy)
        setShowFederationDetailsDialog(true)
    };
    const handleCloseAcademyDetails = () => setShowFederationDetailsDialog(false);

    const handleOpenAcademyFinance = (academy) => {
        setAcademy(academy)
        setShowFederationFinanceDialog(true)
    };
    const handleCloseAcademyFinance = () => setShowFederationFinanceDialog(false);

    const handleSearch = (value) => {
        setParams((p) => ({ ...p, searched_name_pattern: value }))
    };

    const { academies, loading, error, mutate } = useAllAcademies({ ...params });

    return (
        <>
            <Head>
                <title>
                    Federation | PMS
                </title>
            </Head>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <AddFederationDialog
                    mutate={mutate}
                    open={showAddFederationDialog}
                    handleClose={handleCloseAddFederation}
                />
                <FederationDetailsDialog academy={academy}
                    mutate={mutate}
                    open={showFederationDetailsDialog}
                    handleClose={handleCloseAcademyDetails} />

                <FederationFinanceDialog
                    academy={academy}
                    mutate={mutate}
                    open={showFederationFinanceDialog}
                    handleClose={handleCloseAcademyFinance}
                />

                <Container maxWidth={false}>
                    <FederationListToolbar
                        onSearch={handleSearch}
                        handleOpenAddFederation={handleOpenAddFederation}
                        open={showAddFederationDialog}
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
                                    <FederationCard
                                        handleOpenAcademyFinance={handleOpenAcademyFinance}
                                        handleOpenAcademyDetails={handleOpenAcademyDetails}
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

Federation.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Federation;