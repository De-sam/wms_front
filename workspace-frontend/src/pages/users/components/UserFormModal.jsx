import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Box,
  useMediaQuery
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';

export default function UserFormModal({ open, onClose, onSubmit, initialData }) {
  const theme = useTheme();
  // only go full‑screen on extra‑small, so small phones stay a bit narrower
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [form, setForm] = useState({
    name: '',
    email: '',
    role: 'Employee',
    password: ''
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name,
        email: initialData.email,
        role: initialData.role,
        password: ''
      });
    }
  }, [initialData]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(form);
    onClose();
  };

  const glassBg =
    theme.palette.mode === 'light'
      ? alpha(theme.palette.common.white, 0.6)
      : alpha(theme.palette.common.black, 0.4);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      PaperProps={{
        sx: {
          width: fullScreen
            ? '100%'
            : { xs: '90%', sm: '70%', md: '50%', lg: '40%' },
          bgcolor: glassBg,
          backdropFilter: 'blur(20px)',
          borderRadius: 3,
          p: 3,
          boxShadow: theme.shadows[10]
        }
      }}
    >
      <DialogTitle>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          {initialData ? 'Edit User' : 'Add New User'}
        </Typography>
      </DialogTitle>

      <DialogContent dividers>
        <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
          <TextField
            name="name"
            label="Full Name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          <TextField
            name="email"
            label="Email Address"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          {/* Role select now auto‑sizes on sm‑down */}
          <FormControl
            margin="normal"
            fullWidth={!isMobile}
            sx={{
              width: isMobile ? 'auto' : '100%'
            }}
          >
            <InputLabel>Role</InputLabel>
            <Select
              name="role"
              value={form.role}
              label="Role"
              onChange={handleChange}
              sx={{
                [theme => theme.breakpoints.down('sm')]: {
                  width: 'auto'
                }
              }}
            >
              {['Super Admin', 'Admin', 'Manager', 'Employee'].map(role => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            name="password"
            label="Temporary Password"
            type="password"
            value={form.password}
            onChange={handleChange}
            fullWidth
            margin="dense"
            helperText="Leave blank to auto-generate"
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button onClick={onClose} sx={{ textTransform: 'none' }}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disableElevation
          sx={{ textTransform: 'none' }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
