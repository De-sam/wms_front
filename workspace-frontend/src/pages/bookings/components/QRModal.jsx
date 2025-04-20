// src/pages/bookings/components/QRModal.jsx
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Divider,
  Box,
} from '@mui/material';
import { QRCodeSVG } from 'qrcode.react';

const QRModal = ({ open, onClose, bookingId }) => {
  if (!bookingId) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>📱 Booking QR Code</DialogTitle>
      <Divider />
      <DialogContent>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          py={3}
        >
          <QRCodeSVG value={`booking:${bookingId}`} size={200} />
          <Box mt={2} fontSize={14} color="text.secondary">
            Booking ID: {bookingId}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default QRModal;
