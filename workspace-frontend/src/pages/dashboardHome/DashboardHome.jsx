import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import GreetingHeader from './components/GreetingHeader';
import SummaryCards from './components/SummaryCards';
import BookingsChart from './components/BookingsChart';
import ActionLinks from './components/ActionLinks';
import RecentActivities from './components/RecentActivities';
import UpcomingBookings from './components/UpcomingBookings';
import TopWorkspaces from './components/TopWorkspaces';

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
        {/* Workspace statistics heading */}
        <Box px={{ xs: 2, sm: 3, md: 4 }} mt={2}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, mb: 0.5 }}
          >
            Workspace statistics
          </Typography>
        </Box>

        {/* Summary Cards - full width, no outer padding */}
        <Box mt={1} mb={2}>
          <SummaryCards
            totalWorkspaces={totalWorkspaces}
            totalUsers={totalUsers}
            bookingsToday={bookingsToday}
            occupancyRate={occupancyRate}
          />
        </Box>

        {/* Top row: Chart + Activities */}
        <Box
          mt={0}
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          gap={1}
          px={{ xs: 2, sm: 3, md: 4 }}
        >
          {/* LEFT: Chart + Quick Links */}
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
                borderRadius: 1,
              }}
            >
              <BookingsChart />
              <ActionLinks />
            </Paper>
          </Box>

          {/* RIGHT: Recent Activities */}
          <Box width={{ xs: '100%', md: '40%' }}>
            <Paper
              elevation={0}
              sx={{
                p: 0.5,
                height: 380,
                width: '100%',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
              }}
            >
              <RecentActivities />
            </Paper>
          </Box>
        </Box>

        {/* Bottom row: Upcoming Bookings + Top Workspaces */}
        <Box
          mt={1}
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          gap={1}
          px={{ xs: 2, sm: 3, md: 4 }}
          mb={3}
        >
          {/* LEFT: Upcoming Bookings */}
          <Box width={{ xs: '100%', md: '60%' }}>
            <Paper
              elevation={0}
              sx={{
                p: 0.5,
                width: '100%',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
              }}
            >
              <UpcomingBookings />
            </Paper>
          </Box>

          {/* RIGHT: Top Workspaces */}
          <Box width={{ xs: '100%', md: '40%' }}>
            <Paper
              elevation={0}
              sx={{
                p: 0.5,
                width: '100%',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
              }}
            >
              <TopWorkspaces />
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardHome;
