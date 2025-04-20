// src/pages/bookings/components/QRScanner.jsx
import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QRScanner = ({ onScanSuccess }) => {
  const scannerRef = useRef(null);

  useEffect(() => {
    if (!scannerRef.current) {
      scannerRef.current = new Html5QrcodeScanner(
        'qr-scanner',
        { fps: 10, qrbox: 250 },
        false
      );

      scannerRef.current.render(
        (decodedText) => {
          scannerRef.current.clear().then(() => {
            onScanSuccess(decodedText);
          });
        },
        (error) => {
          // Optional: handle scan errors (too frequent logs can be noisy)
          // console.warn('QR Scan Error:', error);
        }
      );
    }

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch((err) => console.error('Clear failed', err));
      }
    };
  }, [onScanSuccess]);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        📷 Scan QR to Check-in
      </Typography>
      <Box
        id="qr-scanner"
        sx={{
          width: '100%',
          maxWidth: 400,
          border: '2px dashed #ccc',
          borderRadius: 2,
          padding: 2,
          mx: 'auto',
        }}
      />
    </Box>
  );
};

export default QRScanner;
