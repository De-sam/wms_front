import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme,
  Box,
  Typography,
} from '@mui/material';

const dummyBookings = [
  { time: '09:00 AM', user: 'Jane Doe',        workspace: 'Room A', duration: '2h' },
  { time: '10:15 AM', user: 'Mark Lee',        workspace: 'Desk 2', duration: '1h' },
  { time: '11:30 AM', user: 'John Smith',      workspace: 'Desk 3', duration: '1.5h' },
  { time: '12:00 PM', user: 'Olivia Brown',    workspace: 'Room C', duration: '2h' },
  { time: '01:00 PM', user: 'Alice Johnson',   workspace: 'Room B', duration: '3h' },
  { time: '02:15 PM', user: 'Michael Davis',   workspace: 'Desk 5', duration: '1h' },
  { time: '03:45 PM', user: 'Bob Brown',       workspace: 'Desk 5', duration: '1h' },
  { time: '04:30 PM', user: 'Charlie Adams',   workspace: 'Room C', duration: '2.5h' },
  { time: '05:00 PM', user: 'Emma Wilson',     workspace: 'Desk 6', duration: '1h' },
  { time: '06:00 PM', user: 'Dana White',      workspace: 'Desk 7', duration: '1h' },
  { time: '07:15 PM', user: 'Liam Taylor',     workspace: 'Room A', duration: '1.5h' },
  { time: '08:30 PM', user: 'Sophia Martinez', workspace: 'Room B', duration: '2h' }
];

const UpcomingBookings = () => {
  const theme = useTheme();

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: 0,
        p: 0,
        maxHeight: 400,
        width: '100%',
        overflowY: 'auto',
        '&::-webkit-scrollbar': { display: 'none' },
        scrollbarWidth: 'none',
        '-ms-overflow-style': 'none',
      }}
    >
      {/* Sticky Heading with Divider */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 2,
          backgroundColor: theme.palette.background.default,
          borderBottom: '1px solid',
          borderColor: 'divider',
          px: 1.5,
          py: 1.2,
        }}
      >
        <Typography variant="subtitle1" fontWeight="bold">
          Upcoming Bookings
        </Typography>
      </Box>

      <Table
        size="small"
        stickyHeader
        sx={{
          width: '100%',
          '& .MuiTableCell-root': {
            py: { xs: 2, sm: 2.5 },
            px: { xs: 1, sm: 1.5 }
          }
        }}
      >
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
  );
};

export default UpcomingBookings;
