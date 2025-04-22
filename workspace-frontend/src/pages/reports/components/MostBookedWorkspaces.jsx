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

const workspaceData = [
  { name: 'Private Office 1', bookings: 58 },
  { name: 'Conference Room B', bookings: 47 },
  { name: 'Open Desk 3', bookings: 39 },
  { name: 'Hot Desk 7', bookings: 35 },
  { name: 'Meeting Pod 2', bookings: 31 },
];

const MostBookedWorkspaces = () => {
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
          {workspaceData.map((workspace, idx) => (
            <TableRow key={idx}>
              <TableCell>{workspace.name}</TableCell>
              <TableCell>{workspace.bookings}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MostBookedWorkspaces;
