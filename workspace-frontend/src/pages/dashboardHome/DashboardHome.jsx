import React from 'react';
import { Container, Box, Typography, Grid, Paper } from '@mui/material';
import GreetingHeader from './components/GreetingHeader';
import SummaryCards from './components/SummaryCards';
import UpcomingBookings from './components/UpcomingBookings';
import TopWorkspaces from './components/TopWorkspaces';
import RecentActivities from './components/RecentActivities';
import BookingsChart from './components/BookingsChart';
import ActionLinks from './components/ActionLinks';

const DashboardHome = ({
  totalWorkspaces = 0,
  totalUsers = 0,
  bookingsToday = 0,
  occupancyRate = 0
}) => {
  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflowX: { xs: 'auto', md: 'visible' }
      }}
    >
      {/* Header */}
      <GreetingHeader />

      <Box
        flexGrow={1}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        pt={{ xs: 1, sm: 2 }}
        px={{ xs: 2, md: 4 }}
      >
        {/* Workspace statistics */}
        <Box width="100%" pb={1}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}
          >
            Workspace statistics
          </Typography>
        </Box>

        {/* Summary Cards */}
        <SummaryCards
          totalWorkspaces={totalWorkspaces}
          totalUsers={totalUsers}
          bookingsToday={bookingsToday}
          occupancyRate={occupancyRate}
        />

        {/* Top Grid Section */}
        <Grid container spacing={3} mt={4}>
          {/* LEFT COLUMN (60%) */}
          <Grid item xs={12} md={7.2}>
            <Paper elevation={1} sx={{ p: 2, height: '100%' }}>
              <Box display="flex" flexDirection="column" gap={2}>
                <ActionLinks />
                <BookingsChart />
              </Box>
            </Paper>
          </Grid>

          {/* RIGHT COLUMN (40%) */}
          <Grid item xs={12} md={4.8}>
            <Paper elevation={1} sx={{ p: 2, height: '100%' }}>
              <RecentActivities />
            </Paper>
          </Grid>
        </Grid>

        {/* Bottom Grid Section */}
        <Grid container spacing={3} mt={1}>
          {/* LEFT COLUMN (60%) */}
          <Grid item xs={12} md={7.2}>
            <Paper elevation={1} sx={{ p: 2, height: '100%' }}>
              <UpcomingBookings />
            </Paper>
          </Grid>

          {/* RIGHT COLUMN (40%) */}
          <Grid item xs={12} md={4.8}>
            <Paper elevation={1} sx={{ p: 2, height: '100%' }}>
              <TopWorkspaces />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default DashboardHome;
