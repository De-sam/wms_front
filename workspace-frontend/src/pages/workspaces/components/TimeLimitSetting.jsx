// src/pages/workspaces/components/TimeLimitSetting.jsx
import React from 'react';
import {
  Box,
  Typography,
  Slider,
  Grid
} from '@mui/material';

const TimeLimitSetting = ({ timeLimit, onChange }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
        Maximum Booking Duration
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Set the maximum number of hours allowed per booking session.
      </Typography>

      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={10}>
          <Slider
            value={timeLimit}
            onChange={(_, value) => onChange(value)}
            aria-labelledby="time-limit-slider"
            valueLabelDisplay="auto"
            min={1}
            max={8}
            step={1}
            marks
          />
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body1" fontWeight="bold" textAlign="center">
            {timeLimit}h
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TimeLimitSetting;
