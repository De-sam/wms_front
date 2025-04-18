// src/pages/workspaces/components/AvailabilityToggle.jsx
import React from 'react';
import { Box, FormControlLabel, Switch, Typography } from '@mui/material';

const AvailabilityToggle = ({ enabled, onToggle }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        my: 3,
        flexWrap: 'wrap',
        gap: 2,
      }}
    >
      <Box>
        <Typography variant="subtitle1" fontWeight="medium">
          Booking Availability
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Toggle to enable or disable bookings across all workspaces.
        </Typography>
      </Box>

      <FormControlLabel
        control={
          <Switch
            checked={enabled}
            onChange={onToggle}
            color="primary"
          />
        }
        label={enabled ? 'Enabled' : 'Disabled'}
        labelPlacement="start"
      />
    </Box>
  );
};

export default AvailabilityToggle;
