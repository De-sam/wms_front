import React from 'react';
import { Box, Paper, Typography, useTheme } from '@mui/material';

const BookingsChart = () => {
  const theme = useTheme();

  const fullDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const shortDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const barHeights = [30, 55, 40, 65, 20, 80, 50]; // percent

  return (
    <Box
      sx={{
        width: '100%', // Ensures it matches 70% column width
      }}
    >
      <Paper
        elevation={0}
        sx={{
          backgroundColor: 'transparent',
          border: '1px solid',
          borderRadius: 2,
          p: 2,
          width: '100%',
          transition: 'border 0.3s ease',
          '&:hover': {
            borderColor: '#ffb300', // amber on hover
          },
        }}
      >
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          sx={{ mb: 2 }}
        >
          Bookings
        </Typography>

        {/* Flex filler for where real chart would go */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Footer bar chart */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: { xs: 1, md: 2 },
            mb: 2,
            px: { xs: 0.5, md: 1 },
            width: '100%',
            overflowX: 'auto',
          }}
        >
          {fullDays.map((day, idx) => (
            <Box
              key={day}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flex: 1, // <-- This helps distribute evenly
              }}
            >
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
                    backgroundColor: 'rgba(33, 150, 243, 0.2)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    backdropFilter: 'blur(4px)',
                    borderRadius: 1,
                  }}
                />
              </Box>
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
      </Paper>
    </Box>
  );
};

export default BookingsChart;
