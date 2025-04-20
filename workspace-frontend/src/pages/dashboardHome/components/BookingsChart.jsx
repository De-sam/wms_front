import React from 'react';
import { Box, Typography } from '@mui/material';
import { amber } from '@mui/material/colors';

const BookingsChart = () => {
  const fullDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const shortDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const barHeights = [30, 55, 40, 65, 20, 80, 50]; // percent

  return (
    <Box
      sx={{
        width: '100%',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        sx={{ mb: 1, fontSize: '0.9rem' }}
      >
        Bookings
      </Typography>

      {/* Bar chart row */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around', // better stretch
          gap: { xs: 0.5, md: 1 },
          px: 0,
          width: '100%',
          flexGrow: 1,
          alignItems: 'flex-end',
        }}
      >
        {fullDays.map((day, idx) => (
          <Box
            key={day}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flex: 1,
            }}
          >
            {/* Bar */}
            <Box
              sx={{
                height: { xs: 80, md: 130 },
                display: 'flex',
                alignItems: 'flex-end',
                mb: 1,
              }}
            >
              <Box
                sx={{
                  width: { xs: 16, md: 23 },
                  height: `${barHeights[idx]}%`,
                  backgroundColor: amber[400], // Amber color
                  border: '1px solid rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(4px)',
                  borderRadius: 1,
                }}
              />
            </Box>

            {/* Label */}
            <Typography
              variant="body2"
              sx={{
                display: { xs: 'none', md: 'block' },
                fontSize: '0.8rem',
              }}
            >
              {day}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: { xs: 'block', md: 'none' },
                fontSize: '0.75rem',
              }}
            >
              {shortDays[idx]}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BookingsChart;
