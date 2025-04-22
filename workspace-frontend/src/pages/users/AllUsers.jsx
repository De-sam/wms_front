// File: src/pages/users/AddUser.jsx
import React, { useState } from 'react';
import { Container } from '@mui/material';

import UserTable from './components/UserTable';
import UserFormModal from './components/UserFormModal';

const initialUsers = [
  { name: 'John Doe',    email: 'john@example.com',  role: 'Admin',    status: 'Active'   },
  { name: 'Mary James',  email: 'mary@company.com',  role: 'Employee', status: 'Inactive' }
];

export default function AllUserPage() {
  const [users, setUsers]         = useState(initialUsers);
  const [filterRole, setFilterRole] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editUser, setEditUser]   = useState(null);

  // open empty form
  const openAdd = () => {
    setEditUser(null);
    setModalOpen(true);
  };
  // open for edit
  const openEdit = user => {
    setEditUser(user);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  // toggle active/inactive
  const toggleStatus = user =>
    setUsers(users.map(u =>
      u.email === user.email
        ? { ...u, status: u.status === 'Active' ? 'Inactive' : 'Active' }
        : u
    ));

  // delete with confirmation
  const deleteUser = user => {
    if (window.confirm('Confirm delete?')) {
      setUsers(users.filter(u => u.email !== user.email));
    }
  };

  // handle both add & edit from the modal form
  const submitForm = data => {
    if (editUser) {
      // edit
      setUsers(users.map(u =>
        u.email === editUser.email ? { ...u, ...data } : u
      ));
    } else {
      // add new
      setUsers([...users, { ...data, status: 'Active' }]);
    }
    closeModal();
  };

  return (
    <Container sx={{ py: 4 }}>

      {/* table */}
      <UserTable
        users={users}
        filterRole={filterRole}
        onEdit={openEdit}
        onDelete={deleteUser}
        onToggleStatus={toggleStatus}
      />

      {/* modal */}
      <UserFormModal
        open={modalOpen}
        onClose={closeModal}
        onSubmit={submitForm}
        initialData={editUser}
      />
    </Container>
  );
}
