// src/pages/reports/components/MostBookedWorkspaces.jsx
import React from 'react';
import { Box, Typography, useTheme, Paper } from '@mui/material';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const workspaceData = [
  { name: 'Private Office 1', bookings: 58 },
  { name: 'Conference Room A', bookings: 52 },
  { name: 'Conference Room B', bookings: 47 },
  { name: 'Open Desk 1', bookings: 45 },
  { name: 'Open Desk 2', bookings: 42 },
  { name: 'Open Desk 3', bookings: 39 },
  { name: 'Hot Desk 4', bookings: 38 },
  { name: 'Hot Desk 5', bookings: 37 },
  { name: 'Hot Desk 6', bookings: 36 },
  { name: 'Hot Desk 7', bookings: 35 },
  { name: 'Meeting Pod 1', bookings: 34 },
  { name: 'Meeting Pod 2', bookings: 31 },
  { name: 'Meeting Pod 3', bookings: 30 },
  { name: 'Focus Booth 1', bookings: 28 },
  { name: 'Focus Booth 2', bookings: 27 },
  { name: 'Focus Booth 3', bookings: 25 },
  { name: 'Lounge Area', bookings: 23 },
  { name: 'Phone Booth 1', bookings: 22 },
  { name: 'Phone Booth 2', bookings: 20 },
  { name: 'Collaborative Pod', bookings: 18 },
];

const MostBookedWorkspaces = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        height: 400,                          // fixed container height
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        p: 2,
        gap: 2,
      }}
    >
      <Typography variant="h6">
        Most Booked Workspaces
      </Typography>

      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          flex: 1,                             // take up remaining height
          backgroundColor: 'transparent',      // transparent background
          boxShadow: 'none',                   // remove Paper shadow
          overflowY: 'auto',                   // enable vertical scrolling
          overflowX: 'hidden',                 // hide horizontal overflow
          // hide native scrollbar
          '&::-webkit-scrollbar': { display: 'none' },
          '-ms-overflow-style': 'none',        // IE and Edge
          'scrollbar-width': 'none',           // Firefox
        }}
      >
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 'bold',
                  position: 'sticky',
                  top: 0,
                  bgcolor: theme.palette.background.paper,
                  zIndex: 1,
                }}
              >
                Workspace
              </TableCell>
              <TableCell
                align="center"                    // center-align header text
                sx={{
                  fontWeight: 'bold',
                  position: 'sticky',
                  top: 0,
                  bgcolor: theme.palette.background.paper,
                  zIndex: 1,
                }}
              >
                Bookings
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {workspaceData.map((ws, idx) => (
              <TableRow
                key={idx}
                hover
                sx={{
                  '& .MuiTableCell-root': { py: 2, textAlign: 'center' }, // center cells
                  '& .MuiTableCell-root:first-of-type': { textAlign: 'left' }, // keep name left-aligned
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
              >
                <TableCell>{ws.name}</TableCell>
                <TableCell>{ws.bookings}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MostBookedWorkspaces;
