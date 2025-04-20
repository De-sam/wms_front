// src/pages/bookings/components/BookingDetailsModal.jsx
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Divider,
  Box,
} from '@mui/material';

const BookingDetailsModal = ({ open, onClose, booking, onCheckIn }) => {
  if (!booking) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>✅ Booking Details</DialogTitle>
      <Divider />
      <DialogContent>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1"><strong>User:</strong> {booking.user}</Typography>
          <Typography variant="subtitle1"><strong>Workspace:</strong> {booking.workspace}</Typography>
          <Typography variant="subtitle1"><strong>Date:</strong> {booking.date}</Typography>
          <Typography variant="subtitle1"><strong>Time:</strong> {booking.time}</Typography>
          <Typography variant="subtitle1"><strong>Status:</strong> {booking.status}</Typography>
        </Box>
        {booking.checked_in && (
          <Typography color="error" fontWeight="bold">
            ⚠️ This booking has already been checked in.
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        {!booking.checked_in && (
          <Button onClick={() => onCheckIn(booking.id)} variant="contained" color="success">
            Confirm Check-in
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default BookingDetailsModal;
