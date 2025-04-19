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
  ListItemText,
  Link
} from '@mui/material';
import {
  WorkspacePremium,
  Group,
  EventNote,
  Percent,
  Cancel,
  Edit,
  Update,
  CheckCircle,
  Feedback
} from '@mui/icons-material';
import { red, blue, yellow, green, amber, purple } from '@mui/material/colors';

const DashboardHome = ({
  totalWorkspaces = 0,
  totalUsers = 0,
  bookingsToday = 0,
  occupancyRate = 0
}) => {
  const theme = useTheme();

  // greeting logic
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

  // summary cards
  const summaryItems = [
    { label: 'Total Workspaces', value: totalWorkspaces, Icon: WorkspacePremium, color: '#2196f3' },
    { label: 'Total Users',        value: totalUsers,      Icon: Group,            color: '#4caf50' },
    { label: 'Bookings Today',     value: bookingsToday,   Icon: EventNote,        color: '#ff9800' },
    { label: 'Occupancy Rate',     value: `${occupancyRate}%`, Icon: Percent,       color: '#e91e63' }
  ];

  // dummy data
  const dummyBookings = [
    { time: '09:00 AM', user: 'Jane Doe',         workspace: 'Room A',  duration: '2h' },
    { time: '10:15 AM', user: 'Mark Lee',         workspace: 'Desk 2',  duration: '1h' },
    { time: '11:30 AM', user: 'John Smith',       workspace: 'Desk 3',  duration: '1.5h' },
    { time: '12:00 PM', user: 'Olivia Brown',     workspace: 'Room C',  duration: '2h' },
    { time: '01:00 PM', user: 'Alice Johnson',    workspace: 'Room B',  duration: '3h' },
    { time: '02:15 PM', user: 'Michael Davis',    workspace: 'Desk 5',  duration: '1h' },
    { time: '03:45 PM', user: 'Bob Brown',        workspace: 'Desk 5',  duration: '1h' },
    { time: '04:30 PM', user: 'Charlie Adams',    workspace: 'Room C',  duration: '2.5h' },
    { time: '05:00 PM', user: 'Emma Wilson',      workspace: 'Desk 6',  duration: '1h' },
    { time: '06:00 PM', user: 'Dana White',       workspace: 'Desk 7',  duration: '1h' },
    { time: '07:15 PM', user: 'Liam Taylor',      workspace: 'Room A',  duration: '1.5h' },
    { time: '08:30 PM', user: 'Sophia Martinez',  workspace: 'Room B',  duration: '2h' }
  ];
  const topWorkspaces = [
    { name: 'Meeting Room 1',       count: 24 },
    { name: 'Desk A2',              count: 18 },
    { name: 'Training Table',       count: 12 },
    { name: 'Phone Booth',          count: 10 },
    { name: 'Collaboration Space',  count: 8 },
    { name: 'Quiet Pod 1',          count: 6 },
    { name: 'Open Lounge',          count: 5 }
  ];
  const recentActivities = [
    { primary: 'Henry Jack booked Desk A1',            secondary: '10:00 AM - 12:00 PM', Icon: EventNote,   color: blue[600] },
    { primary: 'Mary Jane canceled Room B reservation',secondary: '09:00 AM - 10:00 AM', Icon: Cancel,      color: red[600] },
    { primary: 'David Clarke updated booking for Room C',secondary: '08:30 AM - 09:30 AM',Icon: Edit,        color: purple[600] },
    { primary: 'Alice Johnson extended booking for Desk 2',secondary: '12:00 PM - 02:00 PM',Icon: Update,      color: yellow[600] },
    { primary: 'Michael Davis checked into Collaboration Space',secondary: '11:00 AM',    Icon: CheckCircle, color: green[600] },
    { primary: 'Emma Wilson left feedback for Meeting Room 1',     secondary: 'Yesterday', Icon: Feedback,    color: amber[600] }
  ];

  // footer data
  const fullDays  = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const shortDays = ['M','T','W','T','F','S','S'];
  const barHeights = [30, 55, 40, 65, 20, 80, 50]; // percents

  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflowX: { xs: 'auto', md: 'visible' }
      }}
    >
      {/* Header */}
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
        {/* Workspace stats */}
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
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 1 }}>
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

        {/* Upcoming & Top Workspaces */}
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} mt={4}>
          {/* Upcoming Bookings */}
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
              <Table size="small" stickyHeader sx={{
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
              }}>
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
                  {dummyBookings.map((b, i) => (
                    <TableRow key={i}>
                      <TableCell>{b.time}</TableCell>
                      <TableCell>{b.user}</TableCell>
                      <TableCell>{b.workspace}</TableCell>
                      <TableCell>{b.duration}</TableCell>
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
              <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2, fontSize: { xs: '1rem', md: '1.2rem' } }}>
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
                  {topWorkspaces.map(({ name, count }, i) => (
                    <ListItem
                      key={i}
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
                        {`${i + 1}. ${name}`}
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

        {/* Recent Activities & Bookings + Links */}
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} mt={4}>
          {/* Recent Activities */}
          <Paper
            elevation={0}
            sx={{
              backgroundColor: 'transparent',
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 2,
              width: { xs: '100%', md: 800 },
              p: 2,
              height: 400,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
              Recent Activities
            </Typography>
            <Box
              sx={{
                flex: 1,
                overflowY: 'auto',
                '&::-webkit-scrollbar': { display: 'none' },
                '-ms-overflow-style': 'none',
                scrollbarWidth: 'none'
              }}  
            >
              <List sx={{ width: '100%' }}>
                {recentActivities.map((item, i) => (
                  <ListItem
                    key={i}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      py: 1.5,
                      borderBottom: `1px solid ${theme.palette.divider}`,
                      '&:last-child': { borderBottom: 'none' }
                    }}
                  >
                    <item.Icon sx={{ mr: 2, fontSize: { xs: 30, sm: 36, md: 40 }, color: item.color }} />
                    <ListItemText primary={item.primary} secondary={item.secondary} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Paper>

          {/* Bookings + Links Column */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: { xs: '100%', md: 650 }
            }}
          >
            {/* Bookings */}
            <Paper
              elevation={0}
              sx={{
                backgroundColor: 'transparent',
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
                p: 2,
                height: 259,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
                Bookings
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                {/* bookings content goes here */}
              </Box>
              {/* footer bars */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'space-evenly', md: 'center' },
                  gap: { xs: 1, md: 3 },
                  mb: 2,
                  px: { xs: 0.5, md: 1 }
                }}
              >
                {fullDays.map((day, idx) => (
                  <Box
                    key={day}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      minWidth: { xs: 30, md: 48 }
                    }}
                  >
                    <Box
                      sx={{
                        height: { xs: 80, md: 120 },
                        display: 'flex',
                        alignItems: 'flex-end',
                        mb: 1
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: 16, md: 23 },
                          height: `${barHeights[idx]}%`,
                          backgroundColor: 'rgba(33, 150, 243, 0.2)',
                          border: '1px solid rgba(255,255,255,0.3)',
                          backdropFilter: 'blur(4px)',
                          borderRadius: 1
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '0.8rem', md: '1.1rem' },
                        display: { xs: 'none', md: 'block' }
                      }}
                    >
                      {day}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '0.9rem', md: '1.1rem' },
                        display: { xs: 'block', md: 'none' }
                      }}
                    >
                      {shortDays[idx]}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>

            {/* Four action links */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr' },
                gap: 1
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: 'transparent',
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 2,
                  p: 1
                }}
              >
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    display: 'block',
                    width: '100%',
                    py: 1,
                    textAlign: 'center',
                    color: theme.palette.text.primary
                  }}
                >
                  Add Workspace
                </Link>
              </Paper>
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: 'transparent',
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 2,
                  p: 1
                }}
              >
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    display: 'block',
                    width: '100%',
                    py: 1,
                    textAlign: 'center',
                    color: theme.palette.text.primary
                  }}
                >
                  View All Booking
                </Link>
              </Paper>
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: 'transparent',
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 2,
                  p: 1
                }}
              >
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    display: 'block',
                    width: '100%',
                    py: 1,
                    textAlign: 'center',
                    color: theme.palette.text.primary
                  }}
                >
                  Add User
                </Link>
              </Paper>
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: 'transparent',
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 2,
                  p: 1
                }}
              >
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    display: 'block',
                    width: '100%',
                    py: 1,
                    textAlign: 'center',
                    color: theme.palette.text.primary
                  }}
                >
                  Generate Report
                </Link>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default DashboardHome;
