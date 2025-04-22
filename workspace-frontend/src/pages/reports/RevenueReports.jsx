// src/pages/reports/RevenueReports.jsx
import React from 'react';
import { Box } from '@mui/material';
import PieChart from './components/PieChart';
import MostBookedWorkspaces from './components/MostBookedWorkspaces';
import PeakBookingHoursTable from './components/PeakBookingHoursTable';
import BookingHoursBarChart from './components/BookingHoursBarChart';

const RevenueReports = () => {
  return (
    <Box sx={{ p: 2 }}>
      {/* Row 1: PieChart + MostBookedWorkspaces */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <PieChart />
        </Box>
        <Box sx={{ flex: 1 }}>
          <MostBookedWorkspaces />
        </Box>
      </Box>

      {/* Row 2: PeakBookingHoursTable + BookingHoursBarChart */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          mt: 4,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <PeakBookingHoursTable />
        </Box>
        <Box sx={{ flex: 1 }}>
          <BookingHoursBarChart />
        </Box>
      </Box>
    </Box>
  );
};

export default RevenueReports;
