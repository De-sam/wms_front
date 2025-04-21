/* File: src/pages/users/AddUser.jsx */
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
  const [modalOpen, setModalOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const openAdd = () => { setEditUser(null); setModalOpen(true); };
  const openEdit = (user) => { setEditUser(user); setModalOpen(true); };
  const toggleStatus = (user) => setUsers(users.map(u => u.email === user.email ? { ...u, status: u.status === 'Active' ? 'Inactive' : 'Active' } : u));
  const deleteUser = (user) => { if (window.confirm('Confirm delete?')) setUsers(users.filter(u => u.email !== user.email)); };
  const submitForm = (data) => {
    if (editUser) setUsers(users.map(u => u.email === editUser.email ? { ...u, ...data } : u));
    else setUsers([...users, { ...data, status: 'Active' }]);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Button variant="contained" onClick={openAdd} sx={{ mb: 2 }}>Add User</Button>
      <RoleFilter filterRole={filterRole} setFilterRole={setFilterRole} />
      <UserTable
        users={users}
        filterRole={filterRole}
        onEdit={openEdit}
        onDelete={deleteUser}
        onToggleStatus={toggleStatus}
      />
      <UserFormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={submitForm}
        initialData={editUser}
      />
    </Container>
  );
}

export default AddUser;
