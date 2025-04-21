// File: src/pages/users/components/UserActions.jsx
import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

function UserActions({ user, onEdit, onDelete, onToggleStatus }) {
  const isActive = user.status === 'Active';

  return (
    <>
      <Tooltip title="Edit">
        <IconButton onClick={() => onEdit(user)}>
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={isActive ? 'Deactivate' : 'Activate'}>
        <IconButton onClick={() => onToggleStatus(user)}>
          {isActive ? <ToggleOffIcon /> : <ToggleOnIcon />}
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton onClick={() => onDelete(user)}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </>
  );
}

export default UserActions;
