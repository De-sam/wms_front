// components/SummaryCards.jsx
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
    <Grid container spacing={2} sx={{ width: '100%' }}>
      {summaryItems.map(({ label, value, Icon, color }, idx) => (
        <Grid item xs={6} sm={6} md={3} key={idx}>
          <Card
            sx={{
              width: { xs: '150px', md: '340px' },
              height: { xs: '150px', md: '120px' },
              m: { xs: 'auto', sm: 1 },
              borderRadius: '16px',
              backgroundColor: 'transparent',
              border: `1px solid ${color}`,
              boxShadow: 'none',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <CardContent
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                p: { xs: 1.5, sm: 2 }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 1 }}>
                <Icon sx={{ color, fontSize: { xs: 30, sm: 40 } }} />
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
                >
                  {value}
                </Typography>
              </Box>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: 'center',
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
                  fontWeight: 500,
                  color: theme.palette.text.primary
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
