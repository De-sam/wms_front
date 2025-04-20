import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  Box,
  useTheme
} from '@mui/material';
import {
  WorkspacePremium,
  Group,
  EventNote,
  Percent
} from '@mui/icons-material';

const SummaryCards = ({
  totalWorkspaces = 0,
  totalUsers = 0,
  bookingsToday = 0,
  occupancyRate = 0
}) => {
  const theme = useTheme();

  const summaryItems = [
    {
      label: 'Total Workspaces',
      value: totalWorkspaces,
      Icon: WorkspacePremium,
      color: '#2196f3'
    },
    {
      label: 'Total Users',
      value: totalUsers,
      Icon: Group,
      color: '#4caf50'
    },
    {
      label: 'Bookings Today',
      value: bookingsToday,
      Icon: EventNote,
      color: '#ff9800'
    },
    {
      label: 'Occupancy Rate',
      value: `${occupancyRate}%`,
      Icon: Percent,
      color: '#e91e63'
    }
  ];

  return (
    <Grid container spacing={2} sx={{ width: '100%' }}>
      {summaryItems.map(({ label, value, Icon, color }, idx) => (
        <Grid item xs={12} sm={6} md={3} key={idx}>
          <Paper
            elevation={0}
            sx={{
              height: 130,
              borderRadius: 1,
              border: `1px solid ${color}`,
              backgroundColor: 'transparent',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              p: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
              <Icon sx={{ color, fontSize: 32 }} />
              <Typography variant="h4" fontWeight="bold">
                {value}
              </Typography>
            </Box>
            <Typography
              variant="subtitle2"
              sx={{
                textAlign: 'center',
                fontSize: { xs: '0.9rem', sm: '1rem' },
                fontWeight: 500,
                color: theme.palette.text.primary,
              }}
            >
              {label}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default SummaryCards;
