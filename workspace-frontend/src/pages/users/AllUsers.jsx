// File: src/pages/users/AddUser.jsx
import React, { useState } from 'react';
import { Container, Button } from '@mui/material';
import RoleFilter from './components/RoleFilter';
import UserTable from './components/UserTable';
import UserFormModal from './components/UserFormModal';

const initialUsers = [
  { name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { name: 'Mary James', email: 'mary@company.com', role: 'Employee', status: 'Inactive' }
];

function AddUser() {
  const [users, setUsers] = useState(initialUsers);
  const [filterRole, setFilterRole] = useState('');

  const openEdit = user => { setEditUser(user); setModalOpen(true); };
  const toggleStatus = user => setUsers(users.map(u => u.email === user.email ? { ...u, status: u.status === 'Active' ? 'Inactive' : 'Active' } : u));
  const deleteUser = user => { if (window.confirm('Confirm delete?')) setUsers(users.filter(u => u.email !== user.email)); };


  return (
    <Container sx={{ py: 4 }}>

      <UserTable
        users={users}
        filterRole={filterRole}
        onEdit={openEdit}
        onDelete={deleteUser}
        onToggleStatus={toggleStatus}
      />

    </Container>
  );
}

export default AddUser;
