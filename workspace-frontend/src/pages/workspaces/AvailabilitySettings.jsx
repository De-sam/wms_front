import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  Button,
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

    console.log('🔒 Saving settings:', {
      isEnabled,
      hours,
      restrictedDays,
      maxHours,
    });

    alert('✅ Settings saved successfully!');
  };

  return (
    <Container maxWidth="xl" sx={{ px: { xs: 1, md: 2 }, pt: 1, pb: 4 }}>
      <AvailabilityHeader />

      <Grid container spacing={3} mt={2}>
        {/* Booking Toggle */}
        <Grid item xs={12} md={6}>
          <Card
            variant="outlined"
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Booking Availability
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <AvailabilityToggle isEnabled={isEnabled} onToggle={setIsEnabled} />
            </CardContent>
          </Card>
        </Grid>

        {/* Booking Hours */}
        <Grid item xs={12} md={6}>
          <Card
            variant="outlined"
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Booking Hours
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <AvailabilityHoursForm hours={hours} setHours={setHours} />
            </CardContent>
          </Card>
        </Grid>

        {/* Restricted Days */}
        <Grid item xs={12} md={6}>
          <Card
            variant="outlined"
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Restricted Days
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <RestrictedDaysSelector
                restrictedDays={restrictedDays}
                setRestrictedDays={setRestrictedDays}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Max Duration */}
        <Grid item xs={12} md={6}>
          <Card
            variant="outlined"
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Max Booking Duration
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <TimeLimitSetting maxHours={maxHours} setMaxHours={setMaxHours} />
            </CardContent>
          </Card>
        </Grid>

        {/* Summary & Save */}
        <Grid item xs={12}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Summary
              </Typography>
              <Divider sx={{ mb: 2 }} />
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
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AvailabilitySettings;
