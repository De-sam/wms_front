// src/pages/workspaces/components/TimeLimitSetting.jsx
import React from 'react';
import { Box, Typography, Slider } from '@mui/material';

const TimeLimitSetting = ({ maxHours, setMaxHours }) => {
  const handleSliderChange = (event, newValue) => {
    setMaxHours(newValue);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Maximum Booking Duration (Hours)
      </Typography>

      <Slider
        value={maxHours}
        onChange={handleSliderChange}
        step={1}
        marks
        min={1}
        max={8}
        valueLabelDisplay="on"
        sx={{ mt: 2 }}
      />

      <Typography variant="body2" sx={{ mt: 1 }}>
        Users will not be allowed to book a space for more than <strong>{maxHours} hour(s)</strong>.
      </Typography>
    </Box>
  );
};

export default TimeLimitSetting;
