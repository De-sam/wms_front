import React from 'react';
import { Button, Stack } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const DownloadExportButtons = () => {
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
        variant="outlined"
        startIcon={<PictureAsPdfIcon />}
        onClick={handleDownloadPDF}
      >
        Download PDF
      </Button>
      <Button
        variant="outlined"
        startIcon={<FileDownloadIcon />}
        onClick={handleExportCSV}
      >
        Export CSV
      </Button>
    </Stack>
  );
};

export default DownloadExportButtons;
