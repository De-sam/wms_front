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
    <Box width="100%" maxWidth="100vw" overflowX="hidden">
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

        {/* Chart + Recent Activities layout */}
        <Box
          mt={1}
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          gap={0.5} // ✅ Tiny spacing (4px) for all screen sizes
          width="100%"
        >
          {/* LEFT: Quick Links + Chart */}
          <Box width={{ xs: '100%', md: '60%' }}>
            <Paper
              elevation={0}
              sx={{
                p: 0.5,
                height: 320,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2
              }}
            >
              <ActionLinks />
              <BookingsChart />
            </Paper>
          </Box>

          {/* RIGHT: Recent Activities */}
          <Box width={{ xs: '100%', md: '40%' }}>
            <Paper
              elevation={0}
              sx={{
                p: 0.5,
                height: 320,
                width: '100%',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2
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
