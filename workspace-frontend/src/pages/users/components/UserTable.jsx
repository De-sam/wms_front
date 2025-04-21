// File: src/pages/users/components/UserTable.jsx
import React, { useState } from 'react';
import {
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
import SearchIcon from '@mui/icons-material/Search';
import RoleFilter from './RoleFilter';
import AddUserButton from './AddUserButton';
import UserFormModal from './UserFormModal';
import StatusBadge from './StatusBadge';
import UserActions from './UserActions';

export default function UserTable({
  initialUsers = [
    { name: 'Alice Johnson',   email: 'alice@example.com',   role: 'Admin',  status: 'Active'   },
    { name: 'Bob Smith',       email: 'bob@example.com',     role: 'Editor', status: 'Inactive' },
    { name: 'Charlie Brown',   email: 'charlie@example.com', role: 'Viewer', status: 'Active'   },
    { name: 'Diana Prince',    email: 'diana@example.com',   role: 'Admin',  status: 'Active'   },
    { name: 'Ethan Hunt',      email: 'ethan@example.com',   role: 'Editor', status: 'Inactive' }
  ]
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // component state
  const [users, setUsers]               = useState(initialUsers);
  const [filterRole, setFilterRole]     = useState('');
  const [searchTerm, setSearchTerm]     = useState('');
  const [modalOpen, setModalOpen]       = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // glassy bg styling
  const glassBg = theme.palette.mode === 'light'
    ? alpha(theme.palette.background.paper, 0.6)
    : alpha(theme.palette.background.default, 0.4);

  // modal handlers
  const openAddModal  = () => { setSelectedUser(null);        setModalOpen(true); };
  const openEditModal = user => { setSelectedUser(user);      setModalOpen(true); };
  const closeModal    = ()   => setModalOpen(false);

  // CRUD actions
  const handleAddUser      = data => setUsers([...users, { ...data, status: 'Active' }]);
  const handleEditUser     = data => {
    setUsers(users.map(u =>
      u.email === selectedUser.email ? { ...u, ...data } : u
    ));
  };
  const handleDeleteUser   = user => setUsers(users.filter(u => u.email !== user.email));
  const handleToggleStatus = user => {
    setUsers(users.map(u =>
      u.email === user.email
        ? { ...u, status: u.status === 'Active' ? 'Inactive' : 'Active' }
        : u
    ));
  };

  // filter + search pipeline
  const filtered = users
    .filter(u => filterRole ? u.role === filterRole : true)
    .filter(u =>
      `${u.name} ${u.email}`
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase())
    );

  // form submit (add vs edit)
  const handleSubmit = data => {
    selectedUser ? handleEditUser(data) : handleAddUser(data);
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
      {/* Header */}
      <Stack
        direction={isMobile ? 'column' : 'row'}
        alignItems="center"
        justifyContent="space-between"
        spacing={isMobile ? 1 : 2}
        mb={2}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: theme.palette.text.primary }}
        >
          Users
        </Typography>
        <Stack
          direction={isMobile ? 'column' : 'row'}
          spacing={1}
          alignItems="center"
          width={isMobile ? '100%' : 'auto'}
        >
          <RoleFilter
            filterRole={filterRole}
            setFilterRole={setFilterRole}
          />
          <AddUserButton onClick={openAddModal} isMobile={isMobile} />
        </Stack>
      </Stack>

      {/* Search */}
      <TextField
        size={isMobile ? 'small' : 'medium'}
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
        <Table
          stickyHeader
          sx={{
            minWidth: 720,
            tableLayout: 'fixed'
          }}
        >
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
                    backgroundColor: alpha(
                      theme.palette.primary.main,
                      theme.palette.action.hoverOpacity
                    )
                  }
                }}
              >
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">{user.role}</TableCell>
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

      {/* Form Modal */}
      <UserFormModal
        open={modalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
        initialData={selectedUser}
      />
    </Paper>
  );
}
