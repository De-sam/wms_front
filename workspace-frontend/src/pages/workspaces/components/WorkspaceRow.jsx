import React from 'react';
import {
  TableRow,
  TableCell,
  IconButton,
  Chip
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  CheckCircleOutline,
  CancelOutlined
} from '@mui/icons-material';

const WorkspaceRow = ({
  workspace,
  onEdit,
  onDelete,
  onToggle
}) => {
  return (
    <TableRow hover>
      <TableCell>{workspace.name}</TableCell>
      <TableCell>{workspace.type}</TableCell>
      <TableCell>{workspace.capacity}</TableCell>
      <TableCell>{workspace.description}</TableCell>
      <TableCell>{workspace.amenities}</TableCell>
      <TableCell align="center">
        <Chip
          label={workspace.available ? 'Available' : 'Unavailable'}
          color={workspace.available ? 'success' : 'error'}
          size="small"
        />
      </TableCell>
      <TableCell align="center">
        <IconButton onClick={() => onToggle(workspace.id)} color={workspace.available ? 'warning' : 'success'}>
          {workspace.available ? <CancelOutlined /> : <CheckCircleOutline />}
        </IconButton>
        <IconButton onClick={() => onEdit(workspace)} color="primary">
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(workspace.id)} color="error">
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default WorkspaceRow;
