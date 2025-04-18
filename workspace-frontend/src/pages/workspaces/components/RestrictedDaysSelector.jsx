// src/pages/workspaces/components/RestrictedDaysSelector.jsx
import React from 'react';
import {
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Grid,
} from '@mui/material';

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const RestrictedDaysSelector = ({ restrictedDays, onChange }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
        Restricted Booking Days
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Select the days when bookings should not be allowed.
      </Typography>

      <Grid container spacing={1}>
        {daysOfWeek.map((day) => (
          <Grid item xs={6} sm={4} md={3} key={day}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={restrictedDays.includes(day)}
                  onChange={() => onChange(day)}
                />
              }
              label={day}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RestrictedDaysSelector;
