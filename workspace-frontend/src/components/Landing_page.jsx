// Landing_page.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Styled Typography with a precise orange to lemon gradient
const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(90deg, #FFA500, #FFF700)', // Vibrant orange to bright lemon
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
  textAlign: 'center',
  fontSize: '4rem',
  letterSpacing: '0.05em',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
}));

const LandingPage = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
    sx={{
      backgroundColor: '#f5f5f5', // Professional light, neutral background
      padding: 2,
    }}
  >
    <GradientText>
      Welcome To WMS
    </GradientText>
  </Box>
);

export default LandingPage;
