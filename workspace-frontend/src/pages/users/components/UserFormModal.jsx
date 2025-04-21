// File: src/pages/users/components/UserFormModal.jsx
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';

export default function UserFormModal({
  open,
  onClose,
  onSubmit,
  initialData = null
}) {
  const theme = useTheme();
  const [form, setForm] = useState({ name: '', email: '', role: '' });

  // Populate form when editing
  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name,
        email: initialData.email,
        role: initialData.role
      });
    } else {
      setForm({ name: '', email: '', role: '' });
    }
  }, [initialData]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // simple validation
    if (!form.name || !form.email || !form.role) return;
    onSubmit(form);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      BackdropProps={{
        style: {
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255,255,255,0.2)'
        }
      }}
      PaperProps={{
        sx: {
          backgroundColor: alpha(theme.palette.background.paper, 0.4),
          backdropFilter: 'blur(10px)'
        }
      }}
    >
      <DialogTitle>
        {initialData ? 'Edit User' : 'Add New User'}
      </DialogTitle>

      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField
            name="name"
            label="Name"
            fullWidth
            value={form.name}
            onChange={handleChange}
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            fullWidth
            value={form.email}
            onChange={handleChange}
          />
          <FormControl fullWidth>
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              name="role"
              value={form.role}
              label="Role"
              onChange={handleChange}
            >
              <MenuItem value="Super Admin">Super Admin</MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="Manager">Manager</MenuItem>
              <MenuItem value="Employee">Employee</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSave}>
          {initialData ? 'Update' : 'Create'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
