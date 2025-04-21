// File: src/pages/users/components/UserFormModal.jsx
import React, { useState, useEffect } from 'react';
import { Modal, Box, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const modalStyle = {
  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
  width: 400, bgcolor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', p: 4, borderRadius: 2
};

function UserFormModal({ open, onClose, onSubmit, initialData }) {
  const [form, setForm] = useState({ name: '', email: '', role: 'Employee', password: '' });

  useEffect(() => {
    if (initialData) {
      setForm({ name: initialData.name, email: initialData.email, role: initialData.role, password: '' });
    }
  }, [initialData]);

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = () => { onSubmit(form); onClose(); };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <TextField name="name" label="Full Name" value={form.name} onChange={handleChange} fullWidth margin="normal" />
        <TextField name="email" label="Email Address" value={form.email} onChange={handleChange} fullWidth margin="normal" />
        <FormControl fullWidth margin="normal">
          <InputLabel>Role</InputLabel>
          <Select name="role" value={form.role} label="Role" onChange={handleChange}>
            <MenuItem value="Super Admin">Super Admin</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Manager">Manager</MenuItem>
            <MenuItem value="Employee">Employee</MenuItem>
          </Select>
        </FormControl>
        <TextField name="password" label="Temporary Password" type="password" value={form.password} onChange={handleChange} fullWidth margin="normal" helperText="Auto-generated if blank" />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button onClick={onClose} sx={{ mr: 1 }}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default UserFormModal;
