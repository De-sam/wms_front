// src/pages/reports/RevenueReports.jsx
import React from 'react';
import { Box, Grid } from '@mui/material';

import PieChart from './components/PieChart';
import MostBookedWorkspaces from './components/MostBookedWorkspaces';
import PeakBookingHoursTable from './components/PeakBookingHoursTable';
import BookingHoursBarChart from './components/BookingHoursBarChart';

const RevenueReports = () => {
  return (
    <Box
      sx={{
        px: { xs: 0, sm: 2 }, // no horizontal padding on mobile, keep 16px on sm+
        py: 2,              // vertical padding remains
      }}
    >
      {/* Top row: PieChart above on xs, side‑by‑side on md+ */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          alignItems: 'flex-start',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <PieChart />
        </Box>
        <Box sx={{ flex: 1 }}>
          <MostBookedWorkspaces />
        </Box>
      </Box>

      {/* Bottom section: table on left, chart+buttons on right */}
      <Box mt={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <PeakBookingHoursTable />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <BookingHoursBarChart />
            <Box mt={2}>
              {/* any buttons or controls can go here */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default RevenueReports;