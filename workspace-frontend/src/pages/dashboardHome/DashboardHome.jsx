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
      {/* Hey Text with Emoji */}
      <Box px={{ xs: 2, md: 4 }} py={2}>
        <Box display="flex" alignItems="center">
          <Typography variant="h5" fontWeight="bold">
            Hey 👋
          </Typography>
        </Box>
      </Box>

      {/* Greeting */}
      <Box px={{ xs: 2, md: 4 }} py={1}>
        <Typography variant="h4" fontWeight="bold">
          {`${emoji} ${greeting}, Admin!`}
        </Typography>
      </Box>

      {/* Cards */}
      <Box
        flexGrow={1}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        pt={{ xs: 1, sm: 2, md: 2 }}
        px={{ xs: 2, md: 4 }}
      >
        {/* Section Title */}
        <Box width="100%" pb={1}>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ pl: { xs: 0, md: 0 }, fontSize: '1.2rem' }}>
            Workspace statistics
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="flex-start" sx={{ width: '100%' }}>
          {summaryItems.map(({ label, value, Icon, color }, idx) => (
            <Grid item key={idx}>
              <Card
                sx={{
                  width: { xs: '100%', sm: '320px' },
                  height: '120px',
                  m: { xs: 0, sm: 1 },
                  borderRadius: '16px',
                  backgroundColor: 'transparent',
                  border: `1px solid ${color}`,
                  boxShadow: 'none',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <CardContent sx={{ flex: 1, p: 2, display: 'flex', flexDirection: 'column' }}>
                  {/* Side-by-side icon & number */}
                  <Box
                    sx={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <Box
                      sx={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon sx={{ color, fontSize: 40 }} />
                    </Box>
                    <Box
                      sx={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Typography variant="h3" fontWeight="bold" sx={{ fontSize: '2rem' }}>
                        {value}
                      </Typography>
                    </Box>
                  </Box>
                  {/* Label at bottom */}
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textAlign: 'center',
                      pt: 1,
                      fontSize: 20,
                      fontWeight: 500,
                      color: theme.palette.mode === 'dark' ? '#fff' : '#000'
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
