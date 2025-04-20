// src/pages/bookings/AllBookings.jsx
import React, { useState } from 'react';
import { Box, Container, Grid, Paper } from '@mui/material';

import BookingsHeader from './components/BookingsHeader';
import BookingsTable from './components/BookingsTable';
import QRScanner from './components/QRScanner';
import BookingDetailsModal from './components/BookingDetailsModal';
import QRModal from './components/QRModal';

const AllBookings = () => {
  const [bookings, setBookings] = useState([
    {
      id: 'booking-001',
      user: 'James Smith',
      workspace: 'Desk A1',
      date: '2025-04-17',
      time: '10:00 - 12:00',
      duration: '2 hrs',
      status: 'Confirmed',
      checked_in: false,
      expired: false,
    },
    {
      id: 'booking-002',
      user: 'Mary John',
      workspace: 'Room B2',
      date: '2025-04-17',
      time: '9:00 - 11:00',
      duration: '2 hrs',
      status: 'Completed',
      checked_in: true,
      expired: true,
    },
  ]);

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [qrPreviewData, setQrPreviewData] = useState(null);
  const [scannerResult, setScannerResult] = useState(null);
  const [showQrModal, setShowQrModal] = useState(false);
  const [showCheckinModal, setShowCheckinModal] = useState(false);

  const handleScan = (data) => {
    if (data) {
      const foundBooking = bookings.find((b) => `booking:${b.id}` === data);
      if (foundBooking) {
        setSelectedBooking(foundBooking);
        setScannerResult(data);
        setShowCheckinModal(true);
      }
    }
  };

  const handleCheckIn = (id) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, checked_in: true } : b))
    );
    setShowCheckinModal(false);
  };

  const handleQrPreview = (booking) => {
    setQrPreviewData(booking);
    setShowQrModal(true);
  };

  const handleCloseModals = () => {
    setShowQrModal(false);
    setShowCheckinModal(false);
    setSelectedBooking(null);
    setScannerResult(null);
  };

  const handleEdit = (booking) => {
    alert(`Edit booking ${booking.id}`);
  };

  const handleCancel = (id) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 2, md: 3 }, pt: 2, pb: 4 }}>
      <BookingsHeader />

      <Grid container spacing={3}>
        {/* Bookings Table */}
        <Grid item xs={12} md={8}>
          <Paper elevation={2} sx={{ p: { xs: 2, sm: 3 }, boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
            <BookingsTable
              bookings={bookings}
              onQrPreview={handleQrPreview}
              onEdit={handleEdit}
              onCancel={handleCancel}
              onCheckIn={handleCheckIn}
            />
          </Paper>
        </Grid>

        {/* QR Scanner */}
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: { xs: 2, sm: 3 }, height: '100%' }}>
            <QRScanner onScan={handleScan} />
          </Paper>
        </Grid>
      </Grid>

      {/* ✅ Confirm Check-in Modal */}
      <BookingDetailsModal
        open={showCheckinModal}
        booking={selectedBooking}
        onClose={handleCloseModals}
        onCheckIn={handleCheckIn}
      />

      {/* 🔲 Manual QR Preview Modal */}
      <QRModal
        open={showQrModal}
        booking={qrPreviewData}
        onClose={handleCloseModals}
      />
    </Container>
  );
};

export default AllBookings;
