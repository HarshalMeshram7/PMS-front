import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { SettingsNotifications } from '../components/settings/settings-notifications';
import { SettingsPassword } from '../components/settings/settings-password';
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

const Settings = () => {
  // const [role, setRole] = useState("Federation")
  // const router = useRouter();
  // useEffect(() => {
  //   setRole(localStorage.getItem("role"))
  // }, [role])

  // if (role !== "Federation") {
  //   router.push('/')
  // }
  return (
    <>
      <Head>
        <title>
          Settings | Material Kit
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{ mb: 3 }}
            variant="h4"
          >
            Settings
          </Typography>
          <SettingsNotifications />
          <Box sx={{ pt: 3 }}>
            <SettingsPassword />
          </Box>
        </Container>
      </Box>
    </>
  );
}

Settings.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Settings;
