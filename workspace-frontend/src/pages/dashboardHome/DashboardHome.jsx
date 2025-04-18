import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  useTheme,
  Container
} from '@mui/material';
import {
  WorkspacePremium,
  Group,
  EventNote,
  Percent
} from '@mui/icons-material';

const DashboardHome = ({
  totalWorkspaces = 0,
  totalUsers = 0,
  bookingsToday = 0,
  occupancyRate = 0
}) => {
  const theme = useTheme();

  // Greeting logic
  const hour = new Date().getHours();
  let greeting, emoji;
  if (hour >= 4 && hour < 12) {
    greeting = 'Good morning'; emoji = '☀️';
  } else if (hour < 16) {
    greeting = 'Good afternoon'; emoji = '🌤️';
  } else if (hour < 20) {
    greeting = 'Good evening'; emoji = '🌆';
  } else {
    greeting = 'Good night'; emoji = '🌙';
  }

  const summaryItems = [
    { label: 'Total Workspaces',  value: totalWorkspaces, Icon: WorkspacePremium, color: '#2196f3' },
    { label: 'Total Users',       value: totalUsers,      Icon: Group,             color: '#4caf50' },
    { label: 'Bookings Today',    value: bookingsToday,   Icon: EventNote,         color: '#ff9800' },
    { label: 'Occupancy Rate',    value: `${occupancyRate}%`, Icon: Percent,       color: '#e91e63' }
  ];

  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      {/* Hey Text */}
      <Box px={{ xs: 2, md: 4 }} py={2}>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}
        >
          Hey 👋
        </Typography>
      </Box>

      {/* Greeting */}
      <Box px={{ xs: 2, md: 4 }} py={1}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ fontSize: { xs: '1.4rem', md: '2rem' } }}
        >
          {`${emoji} ${greeting}, Admin!`}
        </Typography>
      </Box>

      {/* Cards */}
      <Box
        flexGrow={1}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        pt={{ xs: 1, sm: 2 }}
        px={{ xs: 2, md: 4 }}
      >
        {/* Section Title */}
        <Box width="100%" pb={1}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}
          >
            Workspace statistics
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ width: '100%' }}>
          {summaryItems.map(({ label, value, Icon, color }, idx) => (
            <Grid item xs={6} sm={6} md={3} key={idx}>
              <Card
                sx={{
                  width:  { xs: '150px', md: '320px' },
                  height: { xs: '150px', md: '120px' },
                  m:      { xs: 'auto', sm: 1 },
                  borderRadius: '16px',
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
                  {/* Centered icon & number with space */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 3, // Adjust spacing here
                      mb: 1
                    }}
                  >
                    <Icon sx={{ color, fontSize: { xs: 30, sm: 40 } }} />
                    <Typography
                      variant="h3"
                      fontWeight="bold"
                      sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
                    >
                      {value}
                    </Typography>
                  </Box>
                  {/* Label */}
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
      </Box>
    </Container>
  );
};

export default DashboardHome;
