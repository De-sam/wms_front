import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import GreetingHeader from './components/GreetingHeader';
import SummaryCards from './components/SummaryCards';
import BookingsChart from './components/BookingsChart';
import ActionLinks from './components/ActionLinks';
import RecentActivities from './components/RecentActivities';

const DashboardHome = ({
  totalWorkspaces = 0,
  totalUsers = 0,
  bookingsToday = 0,
  occupancyRate = 0
}) => {
  return (
    <Box
      width="100%"
      maxWidth="100vw"
      overflowX="hidden"
    >
      {/* Header */}
      <GreetingHeader />

      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        px={0}
        py={0}
      >
        {/* Workspace statistics */}
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, mb: 0.5 }}
        >
          Workspace statistics
        </Typography>

        {/* Summary Cards */}
        <SummaryCards
          totalWorkspaces={totalWorkspaces}
          totalUsers={totalUsers}
          bookingsToday={bookingsToday}
          occupancyRate={occupancyRate}
        />

        {/* Responsive 60/40 layout for chart and recent activities */}
        <Box
          mt={1}
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          gap={0}
          width="100%"
        >
          {/* LEFT: Action Links + Bookings Chart */}
          <Box width={{ xs: '100%', md: '60%' }}>
            <Paper
              elevation={0}
              sx={{
                p: 0.5,
                height: 320, // 📏 fixed height for both cards
                width: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <ActionLinks />
              <BookingsChart />
            </Paper>
          </Box>

          {/* RIGHT: Recent Activities */}
          <Box
            width={{ xs: '100%', md: '40%' }}
            sx={{ mt: { xs: 0.5, md: 0 } }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 0.5,
                height: 320, // 📏 same height
                width: '100%',
              }}
            >
              <RecentActivities />
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardHome;
