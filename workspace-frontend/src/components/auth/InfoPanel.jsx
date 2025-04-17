import React from 'react';
import { Box, Typography } from '@mui/material';

const InfoPanel = ({ isLogin, orgInfo }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
        p: { xs: 3, md: 6 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
      >
        {orgInfo?.name || 'Workspace'}
      </Typography>

      {isLogin ? (
        <>
          <Typography variant="subtitle1" sx={{ mt: 2, opacity: 0.8 }}>
            Welcome back!
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
            Access your dashboard and collaborate on the go.
          </Typography>
        </>
      ) : (
        <>
          <Typography variant="subtitle1" sx={{ mt: 2, opacity: 0.8 }}>
            Join our community!
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
            Create your account and start collaborating with your team.
          </Typography>
        </>
      )}
    </Box>
  );
};

export default InfoPanel;
