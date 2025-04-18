// src/pages/workspaces/components/AvailabilityHoursForm.jsx
import React from 'react';
import { Box, Grid, TextField, Typography } from '@mui/material';

const AvailabilityHoursForm = ({ startTime, endTime, onChange }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
        Default Booking Hours
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Set the time range during which bookings are allowed.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Start Time"
            type="time"
            fullWidth
            name="startTime"
            value={startTime}
            onChange={onChange}
            InputLabelProps={{ shrink: true }}
            inputProps={{ step: 300 }} // 5 min steps
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="End Time"
            type="time"
            fullWidth
            name="endTime"
            value={endTime}
            onChange={onChange}
            InputLabelProps={{ shrink: true }}
            inputProps={{ step: 300 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AvailabilityHoursForm;
