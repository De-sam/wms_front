// components/GreetingHeader.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const GreetingHeader = () => {
  const hour = new Date().getHours();
  let greeting, emoji;

  if (hour >= 4 && hour < 12) {
    greeting = 'Good morning';
    emoji = '☀️';
  } else if (hour < 16) {
    greeting = 'Good afternoon';
    emoji = '🌤️';
  } else if (hour < 20) {
    greeting = 'Good evening';
    emoji = '🌆';
  } else {
    greeting = 'Good night';
    emoji = '🌙';
  }

  return (
    <>
      <Box px={{ xs: 2, md: 4 }} py={2}>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}
        >
          Hey 👋
        </Typography>
      </Box>

      <Box px={{ xs: 2, md: 4 }} py={1}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ fontSize: { xs: '1.4rem', md: '2rem' } }}
        >
          {`${emoji} ${greeting}, Admin!`}
        </Typography>
      </Box>
    </>
  );
};

export default GreetingHeader;
