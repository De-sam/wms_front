import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  Chip
} from '@mui/material';
import { Edit, Delete, Check, Close } from '@mui/icons-material';

const WorkspaceTable = ({ workspaces, onEdit, onDelete, onToggle }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        width: '100%',
        mt: 4,
        overflowX: 'auto',
      }}
    >
      <Table sx={{ minWidth: 900 }} size="small" aria-label="workspace table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Name</strong></TableCell>
            <TableCell><strong>Type</strong></TableCell>
            <TableCell><strong>Capacity</strong></TableCell>
            <TableCell><strong>Description</strong></TableCell>
            <TableCell><strong>Amenities</strong></TableCell>
            <TableCell align="center"><strong>Status</strong></TableCell>
            <TableCell align="center"><strong>Actions</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workspaces.length > 0 ? (
            workspaces.map((ws) => (
              <TableRow key={ws.id} hover>
                <TableCell>{ws.name}</TableCell>
                <TableCell>{ws.type}</TableCell>
                <TableCell>{ws.capacity}</TableCell>
                <TableCell>{ws.description}</TableCell>
                <TableCell>{ws.amenities}</TableCell>
                <TableCell align="center">
                  <Chip
                    label={ws.available ? 'Available' : 'Unavailable'}
                    color={ws.available ? 'success' : 'error'}
                    size="small"
                  />
                </TableCell>
                <TableCell align="center">
                  <Tooltip title={ws.available ? 'Mark as Unavailable' : 'Mark as Available'}>
                    <IconButton onClick={() => onToggle(ws.id)} color={ws.available ? 'warning' : 'success'}>
                      {ws.available ? <Close /> : <Check />}
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Edit">
                    <IconButton onClick={() => onEdit(ws)} color="primary">
                      <Edit />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton onClick={() => onDelete(ws.id)} color="error">
                      <Delete />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} align="center">
                No workspaces found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WorkspaceTable;
