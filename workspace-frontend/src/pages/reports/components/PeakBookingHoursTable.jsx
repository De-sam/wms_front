// src/pages/reports/components/PeakBookingHoursTable.jsx
import React from 'react';
import {
  Box,
  Typography,
  useTheme,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const sampleData = [
  { workspace: 'Conference Room A', count: 32 },
  { workspace: 'Open Desk 4', count: 28 },
  { workspace: 'Private Office 2', count: 24 },
  { workspace: 'Hot Desk 9', count: 21 },
  { workspace: 'Meeting Pod 1', count: 18 },
];

const PeakBookingHoursTable = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: { xs: '100%', sm: '100%', md: 700 },
        maxWidth: 700,
        height: { xs: 360, sm: 320, md: 380 }, // increased mobile height
        mx: { xs: 0, sm: 'auto' },
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 2,
        p: 2,
        gap: 2,
      }}
    >
      <Typography variant="h6">Peak Booking Hours</Typography>

      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          flex: 1,
          backgroundColor: 'transparent',
          boxShadow: 'none',
          overflowY: 'auto',
          overflowX: 'hidden',
          '&::-webkit-scrollbar': { display: 'none' },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        }}
      >
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 'bold',
                  bgcolor: theme.palette.background.paper,
                  borderBottom: `1px solid ${theme.palette.divider}`,
                  position: 'sticky',
                  top: 0,
                  zIndex: 1,
                }}
              >
                Workspace
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: 'bold',
                  bgcolor: theme.palette.background.paper,
                  borderBottom: `1px solid ${theme.palette.divider}`,
                  position: 'sticky',
                  top: 0,
                  zIndex: 1,
                }}
              >
                Booking Count
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {sampleData.map((row, idx) => (
              <TableRow
                key={idx}
                hover
                sx={{
                  '& .MuiTableCell-root': {
                    py: 2,
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    textAlign: 'center',
                  },
                  '& .MuiTableCell-root:first-of-type': {
                    textAlign: 'left',
                  },
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
              >
                <TableCell>{row.workspace}</TableCell>
                <TableCell>{row.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PeakBookingHoursTable;
