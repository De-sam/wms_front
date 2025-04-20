import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { amber } from '@mui/material/colors';

const BookingsChart = () => {
  const fullDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const shortDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const barHeights = [70, 85, 75, 90, 60, 100, 80]; // boosted for taller bars

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Section Heading with underline */}
      <Box
        sx={{
          width: '100%',
          borderBottom: '1px solid',
          borderColor: 'divider',
          pb: 1,
          mb: 2,
        }}
      >
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          sx={{ fontSize: '0.95rem' }}
        >
          Booking Summary
        </Typography>
      </Box>

      {/* Bar Chart */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
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
            {/* Bar container */}
            <Box
              sx={{
                height: { xs: 100, md: 180 }, // chart vertical range
                display: 'flex',
                alignItems: 'flex-end',
                mb: 1,
              }}
            >
              <Box
                sx={{
                  width: { xs: 16, md: 23 },
                  height: animate ? `${barHeights[idx]}%` : 0,
                  backgroundColor: amber[400],
                  border: '1px solid rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(4px)',
                  borderRadius: 1,
                  transition: 'height 0.8s ease-in-out',
                }}
              />
            </Box>

            {/* Labels */}
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
