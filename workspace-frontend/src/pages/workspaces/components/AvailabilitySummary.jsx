// src/pages/workspaces/components/AvailabilitySummary.jsx
import React from 'react';
import {
  Box,
  Typography,
  Chip,
  Grid,
  Paper
} from '@mui/material';

const AvailabilitySummary = ({
  isEnabled,
  startTime,
  endTime,
  restrictedDays,
  timeLimit
}) => {
  return (
    <Paper variant="outlined" sx={{ p: 3, mt: 4 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Availability Summary
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle2">Booking Status:</Typography>
          <Chip
            label={isEnabled ? "Enabled" : "Disabled"}
            color={isEnabled ? "success" : "default"}
            variant="outlined"
            sx={{ mt: 1 }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle2">Default Hours:</Typography>
          <Typography sx={{ mt: 1 }}>
            {startTime || '--'} to {endTime || '--'}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle2">Restricted Days:</Typography>
          <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {restrictedDays.length > 0 ? (
              restrictedDays.map((day) => (
                <Chip key={day} label={day} variant="outlined" />
              ))
            ) : (
              <Typography variant="body2" color="text.secondary">
                None
              </Typography>
            )}
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle2">Max Duration per Session:</Typography>
          <Typography sx={{ mt: 1 }}>{timeLimit} hour(s)</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AvailabilitySummary;
