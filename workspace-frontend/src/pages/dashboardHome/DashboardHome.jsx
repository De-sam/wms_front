import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  useTheme,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  List,
  ListItem,
  ListItemText
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
    { label: 'Total Workspaces', value: totalWorkspaces, Icon: WorkspacePremium, color: '#2196f3' },
    { label: 'Total Users', value: totalUsers, Icon: Group, color: '#4caf50' },
    { label: 'Bookings Today', value: bookingsToday, Icon: EventNote, color: '#ff9800' },
    { label: 'Occupancy Rate', value: `${occupancyRate}%`, Icon: Percent, color: '#e91e63' }
  ];

  const dummyBookings = [
    { time: '09:00 AM', user: 'Jane Doe', workspace: 'Room A', duration: '2h' },
    { time: '10:15 AM', user: 'Mark Lee', workspace: 'Desk 2', duration: '1h' },
    { time: '11:30 AM', user: 'John Smith', workspace: 'Desk 3', duration: '1.5h' },
    { time: '12:00 PM', user: 'Olivia Brown', workspace: 'Room C', duration: '2h' },
    { time: '01:00 PM', user: 'Alice Johnson', workspace: 'Room B', duration: '3h' },
    { time: '02:15 PM', user: 'Michael Davis', workspace: 'Desk 5', duration: '1h' },
    { time: '03:45 PM', user: 'Bob Brown', workspace: 'Desk 5', duration: '1h' },
    { time: '04:30 PM', user: 'Charlie Adams', workspace: 'Room C', duration: '2.5h' },
    { time: '05:00 PM', user: 'Emma Wilson', workspace: 'Desk 6', duration: '1h' },
    { time: '06:00 PM', user: 'Dana White', workspace: 'Desk 7', duration: '1h' },
    { time: '07:15 PM', user: 'Liam Taylor', workspace: 'Room A', duration: '1.5h' },
    { time: '08:30 PM', user: 'Sophia Martinez', workspace: 'Room B', duration: '2h' }
  ];

  const topWorkspaces = [
    { name: 'Meeting Room 1', count: 24 },
    { name: 'Desk A2', count: 18 },
    { name: 'Training Table', count: 12 },
    { name: 'Phone Booth', count: 10 },
    { name: 'Collaboration Space', count: 8 },
    { name: 'Quiet Pod 1', count: 6 },
    { name: 'Open Lounge', count: 5 }
  ];

  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // <-- allow horizontal scroll on mobile only
        overflowX: { xs: 'auto', md: 'visible' }
      }}
    >
      <Box px={{ xs: 2, md: 4 }} py={2}>
        <Typography variant="h5" fontWeight="bold" sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
          Hey 👋
        </Typography>
      </Box>

      <Box px={{ xs: 2, md: 4 }} py={1}>
        <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { xs: '1.4rem', md: '2rem' } }}>
          {`${emoji} ${greeting}, Admin!`}
        </Typography>
      </Box>

      <Box
        flexGrow={1}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        pt={{ xs: 1, sm: 2 }}
        px={{ xs: 2, md: 4 }}
      >
        <Box width="100%" pb={1}>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}>
            Workspace statistics
          </Typography>
        </Box>

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
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3, mb: 1 }}>
                    <Icon sx={{ color, fontSize: { xs: 30, sm: 40 } }} />
                    <Typography variant="h3" fontWeight="bold" sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
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

        {/* Side by side */}
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} mt={4}>
          {/* Table (fixed width) */}
          <Box width={{ xs: '100%', md: '800px' }}>
            <TableContainer
              component={Paper}
              elevation={0}
              sx={{
                backgroundColor: 'transparent',
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
                maxHeight: 400,
                overflowY: 'auto',
                '&::-webkit-scrollbar': { display: 'none' },
                scrollbarWidth: 'none',
                '-ms-overflow-style': 'none'
              }}
            >
              <Table
                size="small"
                stickyHeader
                sx={{
                  '& caption': {
                    captionSide: 'top',
                    textAlign: 'left',
                    typography: 'subtitle1',
                    fontWeight: 'bold',
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    mb: 1
                  },
                  '& .MuiTableCell-root': {
                    py: { xs: 2, sm: 2.5 },
                    px: { xs: 1, sm: 1.5 }
                  }
                }}
              >
                <caption>Upcoming Bookings</caption>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>Time</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>User</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Workspace</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Duration</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dummyBookings.map((booking, index) => (
                    <TableRow key={index}>
                      <TableCell>{booking.time}</TableCell>
                      <TableCell>{booking.user}</TableCell>
                      <TableCell>{booking.workspace}</TableCell>
                      <TableCell>{booking.duration}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Top Booked Workspaces */}
          <Box width={{ xs: '100%', md: '650px' }}>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: 'transparent',
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
                height: 400,
                display: 'flex',
                flexDirection: 'column',
                p: 2
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{ mb: 2, fontSize: { xs: '1rem', md: '1.2rem' }, flexShrink: 0 }}
              >
                Top Booked Workspaces
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  overflowY: 'auto',
                  '&::-webkit-scrollbar': { display: 'none' },
                  scrollbarWidth: 'none',
                  '-ms-overflow-style': 'none'
                }}
              >
                <List disablePadding>
                  {topWorkspaces.map(({ name, count }, idx) => (
                    <ListItem
                      key={idx}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        py: 2.5,
                        px: 1,
                        borderBottom: `1px solid ${theme.palette.divider}`,
                        '&:last-child': { borderBottom: 'none' }
                      }}
                    >
                      <Typography variant="body1" fontWeight={500}>
                        {`${idx + 1}. ${name}`}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {count}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Paper>
          </Box>
        </Box>

        {/* Recent Activities */}
        {/* Recent Activities */}
        <Paper
          elevation={0}
          sx={{
            backgroundColor: 'transparent',
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 2,
            width: '100%',
            mt: 4,
            p: 2
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
            Recent Activities
          </Typography>
          <List>
            <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <ListItemText
                primary="Henry Jack booked Desk A1"
                secondary="10:00 AM - 12:00 PM"
              />
            </ListItem>
          </List>
        </Paper>

      </Box>
    </Container>
  );
};

export default DashboardHome;
