// Landing_page.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/system';

// Keyframes to animate the gradient background so the colors flow smoothly
const gradientAnimation = keyframes`
  0% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
  100% {
    background-position: 0% center;
  }
`;

// Styled Typography component that applies the animated gradient to the text
const GradientText = styled(Typography)(({ theme }) => ({
  // Define a gradient from orange to light lemon-green and back
  background: 'linear-gradient(90deg, #FFA500, #BFFF00, #FFA500)',
  // Increase the background size for noticeable movement
  backgroundSize: '300% 100%',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
  textAlign: 'center',
  fontSize: '4rem',
  letterSpacing: '0.05em',
  animation: `${gradientAnimation} 5s ease infinite`,
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
}));

const LandingPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        backgroundColor: '#f5f5f5', // A professional light, neutral background
        padding: 2,
      }}
    >
      <GradientText>
        Welcome To WMS
      </GradientText>
    </Box>
  );
};

export default LandingPage;
