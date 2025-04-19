// components/UpcomingBookings.jsx
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme
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
