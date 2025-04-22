import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const sampleData = [
  { workspace: 'Conference Room A', count: 32 },
  { workspace: 'Open Desk 4', count: 28 },
  { workspace: 'Private Office 2', count: 24 },
  { workspace: 'Hot Desk 9', count: 21 },
  { workspace: 'Meeting Pod 1', count: 18 },
];

const PeakBookingHoursTable = () => {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><strong>Workspace</strong></TableCell>
            <TableCell><strong>Booking Count</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sampleData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.workspace}</TableCell>
              <TableCell>{row.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PeakBookingHoursTable;
