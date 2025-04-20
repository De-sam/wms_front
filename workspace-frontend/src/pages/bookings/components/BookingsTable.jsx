// src/pages/bookings/components/BookingsTable.jsx
import React from 'react';
import {
  Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, Button, Typography
} from '@mui/material';

const BookingsTable = ({ bookings, onShowQR, onEdit, onCancel }) => {
  return (
    <TableContainer component={Paper} elevation={1}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell>Workspace</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>QR Code</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell>{booking.user}</TableCell>
              <TableCell>{booking.workspace}</TableCell>
              <TableCell>{booking.date}</TableCell>
              <TableCell>{booking.time}</TableCell>
              <TableCell>{booking.duration}</TableCell>
              <TableCell>
                <Typography color={booking.status === 'Confirmed' ? 'green' : 'gray'}>
                  {booking.status}
                </Typography>
              </TableCell>
              <TableCell>
                {booking.status === 'Confirmed' ? (
                  <Button size="small" onClick={() => onShowQR(booking)}>Show QR</Button>
                ) : (
                  <Typography color="text.secondary">
                    {booking.status === 'Completed' ? '✔️ Checked-in' : '🔒 Expired'}
                  </Typography>
                )}
              </TableCell>
              <TableCell align="center">
                <Button size="small" color="error" onClick={() => onCancel(booking.id)}>
                  Cancel
                </Button>
                <Button size="small" onClick={() => onEdit(booking)}>Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BookingsTable;
