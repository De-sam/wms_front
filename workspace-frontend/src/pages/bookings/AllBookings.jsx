// src/pages/bookings/AllBookings.jsx
import React, { useState } from 'react';
import { Box, Container, Grid, Paper } from '@mui/material';

import BookingsTable from './components/BookingsTable';
import QRScanner from './components/QRScanner';
import BookingDetailsModal from './components/BookingDetailsModal';
import QRModal from './components/QRModal';

const AllBookings = () => {
  const [selectedBooking, setSelectedBooking] = useState(null); // for scanned booking
  const [qrPreviewData, setQrPreviewData] = useState(null); // for manual preview
  const [scannerResult, setScannerResult] = useState(null); // QR scan result
  const [showQrModal, setShowQrModal] = useState(false);
  const [showCheckinModal, setShowCheckinModal] = useState(false);

  const handleScan = (data) => {
    if (data) {
      setScannerResult(data); // booking:uuid123
      // Fetch booking details here via API using bookingId
      // setSelectedBooking(response)
      setShowCheckinModal(true);
    }
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

  return (
    <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 2, md: 3 }, pt: 2, pb: 4 }}>
      <Grid container spacing={3}>
        {/* Bookings Table */}
        <Grid item xs={12} md={8}>
          <Paper elevation={2} sx={{ p: { xs: 2, sm: 3 }, boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
            <BookingsTable onQrPreview={handleQrPreview} />
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
        bookingId={scannerResult}
        onClose={handleCloseModals}
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
