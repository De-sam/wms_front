// src/pages/workspaces/components/AvailabilityHeader.jsx
import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

const AvailabilityHeader = () => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Workspace Availability Settings
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Configure the global availability, default hours, restrictions, and booking limits for all workspaces.
      </Typography>
      <Divider sx={{ mt: 2 }} />
    </Box>
  );
};

export default AvailabilityHeader;
