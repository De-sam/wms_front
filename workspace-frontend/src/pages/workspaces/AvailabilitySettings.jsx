import React, { useState } from 'react';
import {
  Box,
  Container,
  Divider,
  Button,
  Typography,
  Paper,
} from '@mui/material';

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

  const handleSave = () => {
    if (hours.start >= hours.end) {
      alert('⛔ Start time must be before end time');
      return;
    }

    console.log('🔒 Settings saved:', {
      isEnabled,
      hours,
      restrictedDays,
      maxHours,
    });

    alert('✅ Settings saved successfully!');
  };

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

        <Divider sx={{ my: 3 }} />

        <AvailabilityToggle isEnabled={isEnabled} onToggle={setIsEnabled} />

        <Divider sx={{ my: 3 }} />

        <AvailabilityHoursForm hours={hours} setHours={setHours} />

        <Divider sx={{ my: 3 }} />

        <RestrictedDaysSelector
          restrictedDays={restrictedDays}
          setRestrictedDays={setRestrictedDays}
        />

        <Divider sx={{ my: 3 }} />

        <TimeLimitSetting maxHours={maxHours} setMaxHours={setMaxHours} />

        <Divider sx={{ my: 3 }} />

        <AvailabilitySummary
          isEnabled={isEnabled}
          hours={hours}
          restrictedDays={restrictedDays}
          maxHours={maxHours}
        />

        <Box mt={4} textAlign="right">
          <Button variant="contained" size="large" onClick={handleSave}>
            Save Settings
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AvailabilitySettings;
