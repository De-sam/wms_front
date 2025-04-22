import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import {
  MoreVert as MoreVertIcon,
  Edit,
  Delete,
  Check,
  Close,
} from '@mui/icons-material';

const WorkspaceTable = ({ workspaces = [], onEdit, onDelete, onToggle }) => {
  const items = Array.isArray(workspaces) ? workspaces : [];

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const handleOpenMenu = (event, id) => {
    setAnchorEl(event.currentTarget);
    setSelectedId(id);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSelectedId(null);
  };

  const handleEdit = (ws) => {
    handleCloseMenu();
    onEdit(ws);
  };

  const handleDelete = (id) => {
    handleCloseMenu();
    onDelete(id);
  };

  const handleToggle = (id) => {
    handleCloseMenu();
    onToggle(id);
  };

  return (
    <TableContainer component={Paper} sx={{ width: '100%', mt: 2, overflowX: 'auto' }}>
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
          {items.length > 0 ? (
            items.map((ws) => (
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
                  <Tooltip title="More actions">
                    <IconButton onClick={(e) => handleOpenMenu(e, ws.id)}>
                      <MoreVertIcon />
                    </IconButton>
                  </Tooltip>
                  {selectedId === ws.id && (
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleCloseMenu}
                    >
                      <MenuItem onClick={() => handleToggle(ws.id)}>
                        {ws.available ? (
                          <>
                            <Close fontSize="small" sx={{ mr: 1 }} /> Mark Unavailable
                          </>
                        ) : (
                          <>
                            <Check fontSize="small" sx={{ mr: 1 }} /> Mark Available
                          </>
                        )}
                      </MenuItem>
                      <MenuItem onClick={() => handleEdit(ws)}>
                        <Edit fontSize="small" sx={{ mr: 1 }} /> Edit
                      </MenuItem>
                      <MenuItem onClick={() => handleDelete(ws.id)}>
                        <Delete fontSize="small" sx={{ mr: 1 }} /> Delete
                      </MenuItem>
                    </Menu>
                  )}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} align="center" sx={{ py: 4 }}>
                <Typography variant="body1" color="textSecondary">
                  No workspaces found.
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WorkspaceTable;
