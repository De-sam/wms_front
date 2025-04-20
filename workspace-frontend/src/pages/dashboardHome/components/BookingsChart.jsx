import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { amber } from '@mui/material/colors';

const BookingsChart = () => {
  const theme = useTheme();

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

      {/* Stretch bar chart */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-end',
          gap: { xs: 0.5, md: 1 },
          px: 0,
          width: '100%',
        }}
      >
        {fullDays.map((day, idx) => (
          <Box
            key={day}
            sx={{
              display: 'flex',
              flexDirection: 'column-reverse',
              alignItems: 'center',
              justifyContent: 'flex-end',
              height: '100%',
              flex: 1,
            }}
          >
            {/* Day label */}
            <Typography
              variant="body2"
              sx={{
                mt: 0.5,
                display: { xs: 'none', md: 'block' },
                fontSize: '0.8rem',
              }}
            >
              {day}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mt: 0.5,
                display: { xs: 'block', md: 'none' },
                fontSize: '0.75rem',
              }}
            >
              {shortDays[idx]}
            </Typography>

            {/* Bar */}
            <Box
              sx={{
                width: { xs: 16, md: 23 },
                height: `${barHeights[idx]}%`,
                backgroundColor: amber[400], // 🟧 Amber bar
                border: '1px solid rgba(255,255,255,0.3)',
                backdropFilter: 'blur(4px)',
                borderRadius: 1,
                mb: 0,
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BookingsChart;
