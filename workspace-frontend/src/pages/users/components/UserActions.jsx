// File: src/pages/users/components/UserActions.jsx

import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

export default function UserActions({ user, onEdit, onDelete, onToggleStatus }) {
  const theme = useTheme();
  const isActive = user.status === 'Active';

  // Choose icon, color, and tooltip based on status
  const ToggleIcon = isActive ? ToggleOffIcon : ToggleOnIcon;
  const toggleColor = isActive
    ? theme.palette.error.main
    : theme.palette.success.main;
  const toggleLabel = isActive
    ? 'Deactivate user'
    : 'Activate user';

  return (
    <Box
      sx={{
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing(2),
        },
        [theme.breakpoints.down('sm')]: {
          display: 'grid',
          gridTemplateColumns: 'auto auto',
          gridTemplateRows: 'auto auto',
          gridTemplateAreas: `
            "toggle edit"
            "delete delete"
          `,
          justifyItems: 'center',
          alignItems: 'center',
          gap: theme.spacing(1),
        },
      }}
    >
      {/* Toggle Status */}
      <Box sx={{ gridArea: 'toggle' }}>
        <Tooltip title={toggleLabel}>
          <IconButton
            size="small"
            onClick={() => onToggleStatus(user)}
            sx={{ '&:hover': { backgroundColor: alpha(toggleColor, 0.1) } }}
          >
            <ToggleIcon
              sx={{ color: toggleColor, fontSize: { xs: '1.5rem', sm: '2rem' } }}
            />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Edit User */}
      <Box sx={{ gridArea: 'edit' }}>
        <Tooltip title="Edit user details">
          <IconButton
            size="small"
            onClick={() => onEdit(user)}
            sx={{ '&:hover': { backgroundColor: alpha(theme.palette.primary.main, 0.1) } }}
          >
            <EditIcon
              sx={{ color: theme.palette.primary.main, fontSize: { xs: '1.5rem', sm: '2rem' } }}
            />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Delete User */}
      <Box sx={{ gridArea: 'delete' }}>
        <Tooltip title="Delete user">
          <IconButton
            size="small"
            onClick={() => onDelete(user)}
            sx={{ '&:hover': { backgroundColor: alpha(theme.palette.error.main, 0.1) } }}
          >
            <DeleteIcon
              sx={{ color: theme.palette.error.main, fontSize: { xs: '1.5rem', sm: '2rem' } }}
            />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}
