import React from 'react';
import {
  Grid,
  Card,
  CardContent,
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
    <Grid container spacing={2} sx={{ width: '100%', margin: 0 }}>
      {summaryItems.map(({ label, value, Icon, color }, idx) => (
        <Grid item xs={12} sm={6} md={3} key={idx}>
          <Card
            sx={{
              height: 130,
              borderRadius: 2,
              border: `1px solid ${color}`,
              boxShadow: 'none',
              backgroundColor: 'transparent',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CardContent
              sx={{
                width: '100%',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
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
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SummaryCards;
