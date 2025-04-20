import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import GreetingHeader from './components/GreetingHeader';
import SummaryCards from './components/SummaryCards';
import BookingsChart from './components/BookingsChart';
import ActionLinks from './components/ActionLinks';
import RecentActivities from './components/RecentActivities';
import UpcomingBookings from './components/UpcomingBookings';
import TopWorkspaces from './components/TopWorkspaces'; // ✅ Add this

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

      <Box width="100%" display="flex" flexDirection="column" px={0} py={0}>
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

        {/* Top row: Chart + Activities */}
        <Box
          mt={1}
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          gap={1}
          width="100%"
        >
          {/* LEFT: Chart + Quick Links + Upcoming Bookings */}
          <Box width={{ xs: '100%', md: '60%' }}>
            <Paper
              elevation={0}
              sx={{
                p: 0.5,
                height: 380,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
              }}
            >
              <BookingsChart />
              <ActionLinks />
            </Paper>

            {/* Upcoming Bookings (same width) */}
            <Box mt={1}>
              <UpcomingBookings />
            </Box>
          </Box>

          {/* RIGHT: Recent Activities + Top Workspaces */}
          <Box width={{ xs: '100%', md: '40%' }}>
            <Paper
              elevation={0}
              sx={{
                p: 0.5,
                height: 380,
                width: '100%',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
              }}
            >
              <RecentActivities />
            </Paper>

            {/* ✅ Top Workspaces (same width) */}
            <Box mt={1}>
              <TopWorkspaces />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardHome;
