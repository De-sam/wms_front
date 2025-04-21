// File: src/pages/users/components/UserTable.jsx

import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
  TextField,
  InputAdornment,
  useMediaQuery
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import RoleFilter from './RoleFilter';
import UserFormModal from './UserFormModal';
import StatusBadge from './StatusBadge';
import UserActions from './UserActions';

export default function UserTable({ initialUsers = [
  {
    name: 'Alice Johnson',
    email: 'alice@example.com',
    role: 'Admin',
    status: 'Active'
  },
  {
    name: 'Bob Smith',
    email: 'bob@example.com',
    role: 'Editor',
    status: 'Inactive'
  },
  {
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    role: 'Viewer',
    status: 'Active'
  },
  {
    name: 'Diana Prince',
    email: 'diana@example.com',
    role: 'Admin',
    status: 'Active'
  },
  {
    name: 'Ethan Hunt',
    email: 'ethan@example.com',
    role: 'Editor',
    status: 'Inactive'
  }
] }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Local state for users
  const [users, setUsers] = useState(initialUsers);
  const [filterRole, setFilterRole] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Glassy background
  const glassBg =
    theme.palette.mode === 'light'
      ? alpha(theme.palette.background.paper, 0.6)
      : alpha(theme.palette.background.default, 0.4);

  // Modal controls
  const openAddModal = () => {
    setSelectedUser(null);
    setModalOpen(true);
  };
  const openEditModal = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  // Core actions
  const handleAddUser = (data) => {
    setUsers([
      ...users,
      { ...data, status: 'Active' } // new users start as Active
    ]);
  };
  const handleEditUser = (data) => {
    setUsers(
      users.map(u =>
        u.email === selectedUser.email
          ? { ...u, ...data } // merge updated fields
          : u
      )
    );
  };
  const handleDeleteUser = (user) => {
    setUsers(users.filter(u => u.email !== user.email));
  };
  const handleToggleStatus = (user) => {
    setUsers(
      users.map(u =>
        u.email === user.email
          ? { ...u, status: u.status === 'Active' ? 'Inactive' : 'Active' }
          : u
      )
    );
  };

  // Search + filter
  const filtered = users
    .filter(u => (filterRole ? u.role === filterRole : true))
    .filter(u =>
      `${u.name} ${u.email}`
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase())
    );

  // Form submission
  const handleSubmit = (formData) => {
    if (selectedUser) handleEditUser(formData);
    else handleAddUser(formData);
    closeModal();
  };

  return (
    <Paper
      sx={{
        width: '100%',
        p: { xs: 1, sm: 2, md: 3 },
        backgroundColor: glassBg,
        backdropFilter: 'blur(10px)',
        border: `1px solid ${theme.palette.divider}`
      }}
    >
      {/* Header: title + controls */}
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
          Users
        </Typography>

        <Stack direction="row" spacing={1}>
          <RoleFilter filterRole={filterRole} setFilterRole={setFilterRole} />
          <Button
            variant="contained"
            size={isMobile ? 'small' : 'medium'}
            startIcon={<AddIcon />}
            onClick={openAddModal}
            sx={{
              textTransform: 'none',
              background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
              boxShadow: theme.shadows[4],
              '&:hover': { boxShadow: theme.shadows[8] }
            }}
          >
            Add User
          </Button>
        </Stack>
      </Stack>

      {/* Search bar */}
      <TextField
        size="big"
        fullWidth
        placeholder="Search by name or email…"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          )
        }}
        sx={{
          mb: 2,
          backgroundColor:
            theme.palette.mode === 'light'
              ? alpha(theme.palette.background.paper, 0.8)
              : alpha(theme.palette.background.default, 0.6),
          borderRadius: 1
        }}
      />

      {/* Table */}
      <TableContainer
        component={Paper}
        sx={{
          width: '100%',
          background: 'transparent',
          boxShadow: 'none',
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          overflowX: 'auto'
        }}
      >
        <Table stickyHeader sx={{ minWidth: { xs: 600, sm: 720 }, tableLayout: 'fixed' }}>
          <TableHead>
            <TableRow>
              {['Name', 'Email', 'Role', 'Status', 'Actions'].map(header => (
                <TableCell
                  key={header}
                  align="center"
                  sx={{
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.text.primary,
                    fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                    fontWeight: 600
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {filtered.map(user => (
              <TableRow
                key={user.email}
                sx={{
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
                  }
                }}
              >
                <TableCell align="center" sx={{ color: theme.palette.text.primary }}>
                  {user.name}
                </TableCell>
                <TableCell align="center" sx={{ color: theme.palette.text.primary }}>
                  {user.email}
                </TableCell>
                <TableCell align="center" sx={{ color: theme.palette.text.primary }}>
                  {user.role}
                </TableCell>
                <TableCell align="center">
                  <StatusBadge status={user.status} />
                </TableCell>
                <TableCell align="center" sx={{ pl: 1.5 }}>
                  <UserActions
                    user={user}
                    onEdit={openEditModal}
                    onDelete={handleDeleteUser}
                    onToggleStatus={handleToggleStatus}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* User form modal */}
      <UserFormModal
        open={modalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
        initialData={selectedUser}
      />
    </Paper>
  );
}
