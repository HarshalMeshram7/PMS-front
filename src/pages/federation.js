import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { FederationCard } from 'src/components/federation/federation-card';
import { FederationListToolbar } from 'src/components/federation/federation-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { AddFederationDialog } from 'src/components/federation/add-federation-dialog';
import { useState, useEffect } from 'react';
import { FederationDetailsDialog } from 'src/components/federation/federation-details-dialog';
import { useAllFederations } from 'src/adapters/federationAdapter';
import { FederationFinanceDialog } from 'src/components/federation/federation-finance-dialog';
import { getFederation } from 'src/services/federationRequest';

const Federation = () => {   
   
    //to show hide add federation dialog
    const [showAddFederationDialog, setShowAddFederationDialog] = useState(false);
   
    // to show hide details federation dialogue
    const [showFederationDetailsDialog, setShowFederationDetailsDialog] = useState(false);
   
    //to show hide federation finance dialogue
    const [showFederationFinanceDialog, setShowFederationFinanceDialog] = useState(false);
    
    //to store single federation data which is clicked from detail detail or finance button
    const [federation, setFederation] = useState([])
    
    //to store parameters required to send with get req
    const [params, setParams] = useState({searchpattern: ""})

    //to show hide add federation dialog
    const handleOpenAddFederation = () => setShowAddFederationDialog(true);
    const handleCloseAddFederation = () => setShowAddFederationDialog(false);

    const handleOpenFederationDetails = (federation) => {
        getFederation({id:federation.ID}).then((res)=>{
            setFederation(res)
            setShowFederationDetailsDialog(true)
        })
    };
    const handleCloseFederationDetails = () => setShowFederationDetailsDialog(false);

    const handleOpenFederationFinance = (federation) => {
        getFederation({id:federation.ID}).then((res)=>{
            setFederation(res)
            setShowFederationFinanceDialog(true)
        })
    };
    const handleCloseFederationFinance = () => setShowFederationFinanceDialog(false);
    const handleSearch = (value) => {
        setParams((p) => ({ ...p, searchpattern: value }))
    };

    const { federations, loading, error, mutate } = useAllFederations({ ...params });
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
                <FederationDetailsDialog 
                    federation={federation}
                    mutate={mutate}
                    open={showFederationDetailsDialog}
                    handleClose={handleCloseFederationDetails} />

                <FederationFinanceDialog
                    federation={federation}
                    mutate={mutate}
                    open={showFederationFinanceDialog}
                    handleClose={handleCloseFederationFinance}
                />

                <Container maxWidth={false}>
                    <FederationListToolbar
                        search={handleSearch}
                        handleOpenAddFederation={handleOpenAddFederation}
                        open={showAddFederationDialog}
                    />
                    <Box sx={{ pt: 3 }}>
                        <Grid
                            container
                            spacing={3}
                        >
                            {federations?.map((product,key) => (
                                <Grid
                                    item
                                    key={key}
                                    lg={4}
                                    md={6}
                                    xs={12}
                                >
                                    <FederationCard
                                        handleOpenFederationFinance={handleOpenFederationFinance}
                                        handleOpenFederationDetails={handleOpenFederationDetails}
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