// components/BookingsChart.jsx
import React from 'react';
import { Box, Paper, Typography, useTheme } from '@mui/material';

const BookingsChart = () => {
  const theme = useTheme();

  // footer bar data
  const fullDays  = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const shortDays = ['M','T','W','T','F','S','S'];
  const barHeights = [30, 55, 40, 65, 20, 80, 50]; // percents

  return (
<Paper
    elevation={0}
    sx={{
    backgroundColor: 'transparent',
    border: '1px solid', // keep the border transparent initially
    borderRadius: 2,
    p: 2,
    display: 'flex',
    flexDirection: 'column',
    transition: 'border 0.3s ease',
    '&:hover': {
        border: '1px solid #ffb300', // amber color on hover
    },
    }}
    >
      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
        Bookings
      </Typography>

      {/* empty flex spacer for where bookings content would go */}
      <Box sx={{ flexGrow: 1 }} />

      {/* footer bar chart */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'space-evenly', md: 'center' },
          gap: { xs: 1, md: 3 },
          mb: 2,
          px: { xs: 0.5, md: 1 },
        }}
      >
        {fullDays.map((day, idx) => (
          <Box
            key={day}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: { xs: 30, md: 48 },
            }}
          >
            <Box
              sx={{
                height: { xs: 80, md: 130.3 },
                display: 'flex',
                alignItems: 'flex-end',
                mb: 1,
              }}
            >
              <Box
                sx={{
                  width: { xs: 16, md: 23 },
                  height: `${barHeights[idx]}%`,
                  backgroundColor: 'rgba(33, 150, 243, 0.2)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(4px)',
                  borderRadius: 1,
                }}
              />
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.8rem', md: '1.1rem' },
                display: { xs: 'none', md: 'block' },
              }}
            >
              {day}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.9rem', md: '1.1rem' },
                display: { xs: 'block', md: 'none' },
              }}
            >
              {shortDays[idx]}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default BookingsChart;
