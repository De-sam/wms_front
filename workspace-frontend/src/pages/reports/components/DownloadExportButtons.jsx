import React from 'react';
import { Button, Stack, useTheme } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const DownloadExportButtons = () => {
  const theme = useTheme();

  const handleDownloadPDF = () => {
    console.log('Download PDF clicked');
    // Add your actual PDF generation/download logic here
  };

  const handleExportCSV = () => {
    console.log('Export CSV clicked');
    // Add your actual CSV export logic here
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        disableElevation
        startIcon={<PictureAsPdfIcon />}
        onClick={handleDownloadPDF}
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: '#fff',
          borderRadius: 2,
          textTransform: 'none',
          transition: 'transform 0.1s ease-in-out, background-color 0.3s',
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          },
          '&:active': {
            transform: 'scale(0.95)',
          },
        }}
      >
        Download PDF
      </Button>
      <Button
        variant="contained"
        disableElevation
        startIcon={<FileDownloadIcon />}
        onClick={handleExportCSV}
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: '#fff',
          borderRadius: 2,
          textTransform: 'none',
          transition: 'transform 0.1s ease-in-out, background-color 0.3s',
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          },
          '&:active': {
            transform: 'scale(0.95)',
          },
        }}
      >
        Export CSV
      </Button>
    </Stack>
  );
};

export default DownloadExportButtons;
