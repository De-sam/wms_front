// src/pages/reports/components/BookingHoursBarChart.jsx
import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';
import { Paper, Typography, useTheme, Box, useMediaQuery } from '@mui/material';
import DownloadExportButtons from './DownloadExportButtons';

const data = [
  { time: '9 AM', bookings: 12 },
  { time: '10 AM', bookings: 20 },
  { time: '11 AM', bookings: 18 },
  { time: '12 PM', bookings: 25 },
  { time: '1 PM', bookings: 22 },
  { time: '2 PM', bookings: 15 },
  { time: '3 PM', bookings: 10 },
];

const BookingHoursBarChart = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper
      elevation={0}
      sx={{
        width: { xs: '100%', sm: '90%', md: 790 },
        maxWidth: 790,
        height: { xs: 420, sm: 320, md: 380 },
        mx: { xs: 0, sm: 'auto' },
        p: 2,
        backgroundColor: 'transparent',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header for desktop */}
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 1,
        }}
      >
        <Typography variant="subtitle1">Bookings per Hour</Typography>
        <DownloadExportButtons />
      </Box>

      {/* Title for mobile */}
      <Typography
        variant="subtitle1"
        sx={{
          display: { xs: 'block', sm: 'none' },
          mb: 1,
        }}
      >
        Bookings per Hour
      </Typography>

      {/* Chart container */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: isMobile ? 'center' : 'flex-start',
          px: isMobile ? 0 : 2,
        }}
      >
        <ResponsiveContainer width={isMobile ? '95%' : '100%'} height="100%">
          <BarChart
            data={data}
            margin={isMobile ? { top: 0, right: 0, bottom: 0, left: 0 } : { top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid
              horizontal
              vertical={false}
              stroke={theme.palette.divider}
              strokeDasharray="3 3"
              strokeOpacity={0.15}
            />
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fill: theme.palette.text.primary }}
              padding={{ left: 0, right: 0 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={false}
              domain={[0, 'dataMax']}
            />
            <Bar
              dataKey="bookings"
              fill={theme.palette.primary.main}
              barSize={20}
              barCategoryGap={isMobile ? '20%' : '20%'}
              cursor="default"
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>

      {/* Buttons for mobile */}
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          justifyContent: 'flex-end',
          mt: 1,
          gap: 1,
        }}
      >
        <DownloadExportButtons />
      </Box>
    </Paper>
  );
};

export default BookingHoursBarChart;
