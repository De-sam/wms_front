// src/pages/reports/components/BookingHoursBarChart.jsx
import React, { useEffect, useState } from 'react';
import { Paper, Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import { amber } from '@mui/material/colors';
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
  const [animate, setAnimate] = useState(false);

  // compute percentage heights relative to the max bookings
  const max = Math.max(...data.map(d => d.bookings));
  const percents = data.map(d => (d.bookings / max) * 100);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(t);
  }, []);

  // prepare full vs. short labels
  const fullLabels = data.map(d => d.time);
  // keep AM/PM but remove the extra space e.g. "9 AM" → "9AM"
  const shortLabels = data.map(d => d.time.replace(' ', ''));

  return (
    <Paper
      elevation={0}
      sx={{
        width: { xs: '100%', sm: '90%', md: 790 },
        maxWidth: 790,
        height: { xs: 300, sm: 380, md: 380 },
        mx: { xs: 0, sm: 'auto' },
        p: 2,
        backgroundColor: 'transparent',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Desktop header */}
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

      {/* Mobile title */}
      <Typography
        variant="subtitle1"
        sx={{ display: { xs: 'block', sm: 'none' }, mb: 1 }}
      >
        Bookings per Hour
      </Typography>

      {/* Chart area pushed to bottom */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        {/* Bars row – fixed max height */}
        <Box
          sx={{
            height: { xs: 120, md: 200 },
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
            px: 1,
          }}
        >
          {percents.map((pct, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                width: { xs: 16, md: 24 },
                height: '100%',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: animate ? `${pct}%` : 0,
                  backgroundColor: amber[400],
                  border: '1px solid rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(4px)',
                  borderRadius: 1,
                  transition: 'height 0.8s ease-in-out',
                  mb: 1,
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Labels row */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            mt: 1,
          }}
        >
          {fullLabels.map((lbl, i) => (
            <Typography
              key={i}
              variant="body2"
              sx={{ fontSize: { xs: '0.7rem', md: '0.8rem' } }}
            >
              {isMobile ? shortLabels[i] : lbl}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* Mobile export buttons */}
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          justifyContent: 'flex-end',
          mt: 1,
        }}
      >
        <DownloadExportButtons />
      </Box>
    </Paper>
  );
};

export default BookingHoursBarChart;
