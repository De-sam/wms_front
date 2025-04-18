// src/pages/workspaces/AvailabilitySettings.jsx
import React, { useState } from 'react';
import { Box, Container, Paper } from '@mui/material';

import AvailabilityHeader from './components/AvailabilityHeader';
import AvailabilityToggle from './components/AvailabilityToggle';
import AvailabilityHoursForm from './components/AvailabilityHoursForm';
import RestrictedDaysSelector from './components/RestrictedDaysSelector';
import TimeLimitSetting from './components/TimeLimitSetting';
import AvailabilitySummary from './components/AvailabilitySummary';

const AvailabilitySettings = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [hours, setHours] = useState({ start: '08:00', end: '17:00' });
  const [restrictedDays, setRestrictedDays] = useState([]);
  const [maxHours, setMaxHours] = useState(4);

  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{ px: { xs: 1, sm: 2, md: 3 }, pt: 1, pb: 4 }}
    >
      <Paper
        elevation={2}
        sx={{
          p: { xs: 2, sm: 3, md: 4 },
          width: '100%',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        }}
      >
        <AvailabilityHeader />

        <Box mt={3}>
          <AvailabilityToggle isEnabled={isEnabled} onToggle={setIsEnabled} />
        </Box>

        <Box mt={3}>
          <AvailabilityHoursForm hours={hours} setHours={setHours} />
        </Box>

        <Box mt={3}>
          <RestrictedDaysSelector
            restrictedDays={restrictedDays}
            setRestrictedDays={setRestrictedDays}
          />
        </Box>

        <Box mt={3}>
          <TimeLimitSetting maxHours={maxHours} setMaxHours={setMaxHours} />
        </Box>

        <Box mt={4}>
          <AvailabilitySummary
            isEnabled={isEnabled}
            hours={hours}
            restrictedDays={restrictedDays}
            maxHours={maxHours}
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default AvailabilitySettings;
