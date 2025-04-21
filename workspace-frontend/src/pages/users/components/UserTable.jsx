// File: src/pages/users/components/UserTable.jsx
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import StatusBadge from './StatusBadge';
import UserActions from './UserActions';

function UserTable({ users, filterRole, onEdit, onDelete, onToggleStatus }) {
  const filtered = filterRole ? users.filter(u => u.role === filterRole) : users;

  return (
    <TableContainer component={Paper} sx={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filtered.map(user => (
            <TableRow key={user.email}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell><StatusBadge status={user.status} /></TableCell>
              <TableCell>
                <UserActions
                  user={user}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  onToggleStatus={onToggleStatus}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserTable;
