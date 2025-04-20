import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';
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
    <Box width="100vw" overflow="hidden">
      {/* Header */}
      <GreetingHeader />

      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        px={{ xs: 2, md: 4 }}
        py={3}
      >
        {/* Workspace statistics */}
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, mb: 2 }}
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

        {/* Responsive layout: 60% / 40% on desktop, stacked on mobile */}
        <Box
          mt={4}
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          gap={3}
          width="100%"
        >
          {/* Left section (Chart + Quick Links) */}
          <Box width={{ xs: '100%', md: '60%' }}>
            <Paper elevation={0} sx={{ p: 2, height: 400, width: '100%' }}>
              <Box display="flex" flexDirection="column" gap={2} height="100%">
                <ActionLinks />
                <BookingsChart />
              </Box>
            </Paper>
          </Box>

          {/* Right section (Recent Activities) */}
          <Box width={{ xs: '100%', md: '40%' }}>
            <Paper elevation={0} sx={{ p: 2, height: 400, width: '100%' }}>
              <RecentActivities />
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardHome;
