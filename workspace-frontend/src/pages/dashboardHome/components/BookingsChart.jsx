import React from 'react';
import { Box, Typography } from '@mui/material';
import { amber } from '@mui/material/colors';

const BookingsChart = () => {
  const fullDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const shortDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const barHeights = [30, 55, 40, 65, 20, 80, 50]; // in %

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
        sx={{ fontSize: '0.9rem', mb: 0.5 }}
      >
        Bookings
      </Typography>

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-end',
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
              flex: 1,
              height: '100%',
              minWidth: 0, // Prevents shrinking issues
            }}
          >
            {/* Day label */}
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: '0.75rem', md: '0.8rem' },
                pt: 0.5,
              }}
            >
              {day}
            </Typography>

            {/* Bar */}
            <Box
              sx={{
                width: { xs: 16, md: 22 },
                height: `${barHeights[idx]}%`,
                backgroundColor: amber[400],
                borderRadius: 1,
                mt: 0, // 🔽 Remove vertical spacing
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BookingsChart;
