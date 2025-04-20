import React from 'react';
import { Container, Box, Typography } from '@mui/material';
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

        {/* Action Links on top of Bookings Chart */}
        <Box
          sx={{
            width: '100%',
            mt: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              px: { xs: 0, md: 2 }
            }}
          >
            <ActionLinks />
          </Box>

          <Box
            sx={{
              width: '100%',
              mt: 1
            }}
          >
            <BookingsChart />
          </Box>
        </Box>

        {/* Upcoming Bookings + Recent Activities (Switched) */}
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} mt={4}>
          <Box width={{ xs: '100%', md: '800px' }}>
            <UpcomingBookings />
          </Box>
          <Box width={{ xs: '100%', md: '650px' }}>
            <RecentActivities />
          </Box>
        </Box>

        {/* Top Workspaces moved down here */}
        <Box mt={4} width="100%">
          <TopWorkspaces />
        </Box>
      </Box>
    </Container>
  );
};

export default DashboardHome;
