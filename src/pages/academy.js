import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { AcademyCard } from 'src/components/academy/academy-card';
import { AcademyListToolbar } from 'src/components/academy/academy-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { AddAcademyDialog } from 'src/components/academy/add-academy-dialog';
import { useState, useEffect } from 'react';
import { getAllacademy } from 'src/services/academyRequest';

const Academy = () => {
  const [showAddAcademyDialog, setShowAddAcademyDialog] = useState(false);
  const handleOpenAddAcademy = () => setShowAddAcademyDialog(true);
  const handleCloseAddAcademy = () => setShowAddAcademyDialog(false);
  const [academy,setAcademy] = useState([])
  useEffect(() => {
    getAllacademy().then((res) => {
      console.log(res);
      setAcademy(res);
    })
  },[])

  return (
    <>
      <Head>
        <title>
          Academies | PMS
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <AddAcademyDialog
          open={showAddAcademyDialog}
          handleClose={handleCloseAddAcademy}
        />
        <Container maxWidth={false}>
          <AcademyListToolbar
            handleOpenAddAcademy={handleOpenAddAcademy}
            open={showAddAcademyDialog}
             />
          <Box sx={{ pt: 3 }}>
            <Grid
              container
              spacing={3}
            >
              {academy.map((product) => (
                <Grid
                  item
                  key={product.id}
                  lg={4}
                  md={6}
                  xs={12}
                >
                  <AcademyCard product={product} />
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

Academy.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Academy;