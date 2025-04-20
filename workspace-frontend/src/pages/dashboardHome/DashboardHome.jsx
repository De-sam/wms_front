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
        px={{ xs: 1, md: 4 }} // tighter padding on mobile
        py={{ xs: 2, md: 3 }}
      >
        {/* Workspace statistics */}
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          sx={{ fontSize: { xs: '0.95rem', md: '1.2rem' }, mb: { xs: 1, md: 2 } }}
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

        {/* Responsive Card Row */}
        <Box
          mt={{ xs: 2, md: 4 }}
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          gap={0}
          width="100%"
        >
          {/* Left: Chart + Quick Links */}
          <Box width={{ xs: '100%', md: '60%' }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 1, md: 2 }, // tighter padding on mobile
                height: 400,
                width: '100%',
              }}
            >
              <Box display="flex" flexDirection="column" gap={2} height="100%">
                <ActionLinks />
                <BookingsChart />
              </Box>
            </Paper>
          </Box>

          {/* Right: Recent Activities */}
          <Box width={{ xs: '100%', md: '40%' }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 1, md: 2 }, // tighter padding on mobile
                height: 400,
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
