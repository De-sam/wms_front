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
      <GreetingHeader />

      <Box width="100%" display="flex" flexDirection="column" px={0} py={0}>
        {/* Workspace stats title */}
        <Box px={{ xs: 2, sm: 3, md: 4 }} mt={2} mb={1}>
          <Typography variant="subtitle1" fontWeight="bold" fontSize={{ xs: '0.9rem', md: '1rem' }}>
            Workspace statistics
          </Typography>
        </Box>

        {/* ✅ SummaryCards now inside a Paper like other sections */}
        <Box px={{ xs: 2, sm: 3, md: 4 }} mb={2}>
          <Paper
            elevation={0}
            sx={{
              p: 1.5,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
              width: '100%',
            }}
          >
            <SummaryCards
              totalWorkspaces={totalWorkspaces}
              totalUsers={totalUsers}
              bookingsToday={bookingsToday}
              occupancyRate={occupancyRate}
            />
          </Paper>
        </Box>

        {/* Chart + Activities */}
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={1} px={{ xs: 2, sm: 3, md: 4 }}>
          <Box width={{ xs: '100%', md: '60%' }}>
            <Paper elevation={0} sx={{ p: 0.5, height: 380, width: '100%', border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
              <BookingsChart />
              <ActionLinks />
            </Paper>
          </Box>
          <Box width={{ xs: '100%', md: '40%' }}>
            <Paper elevation={0} sx={{ p: 0.5, height: 380, width: '100%', border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
              <RecentActivities />
            </Paper>
          </Box>
        </Box>

        {/* Bottom: Bookings + Workspaces */}
        <Box mt={1} display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={1} px={{ xs: 2, sm: 3, md: 4 }} mb={3}>
          <Box width={{ xs: '100%', md: '60%' }}>
            <Paper elevation={0} sx={{ p: 0.5, width: '100%', border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
              <UpcomingBookings />
            </Paper>
          </Box>
          <Box width={{ xs: '100%', md: '40%' }}>
            <Paper elevation={0} sx={{ p: 0.5, width: '100%', border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
              <TopWorkspaces />
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardHome;
