import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import DownloadIcon from '@mui/icons-material/Download';

const BookingsHeader = ({ onRefresh, onExport }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'flex-start', sm: 'center' },
        justifyContent: 'space-between',
        mb: 2,
        gap: 2,
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        🗓️ All Bookings
      </Typography>

      <Stack direction="row" spacing={1}>
        <Button
          variant="outlined"
          startIcon={<RefreshIcon />}
          onClick={onRefresh}
        >
          Refresh
        </Button>
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          onClick={onExport}
        >
          Export CSV
        </Button>
      </Stack>
    </Box>
  );
};

export default BookingsHeader;

