// File: src/pages/users/components/RoleFilter.jsx

import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

// Glassy styled FormControl with custom mobile width override
const GlassFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 160,  // default desktop/tablet width
  backgroundColor:
    theme.palette.mode === 'light'
      ? alpha(theme.palette.common.white, 0.15)
      : alpha(theme.palette.background.default, 0.25),
  backdropFilter: 'blur(12px)',
  borderRadius: theme.shape.borderRadius * 2,

  // override on mobile (≤600px)
  [theme.breakpoints.down('sm')]: {
    minWidth: '120px',  // your desired mobile width
    width: '120px',
  },

  '& .MuiInputLabel-root': {
    color:
      theme.palette.mode === 'light'
        ? theme.palette.text.primary
        : theme.palette.common.white,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor:
      theme.palette.mode === 'light'
        ? alpha(theme.palette.text.primary, 0.5)
        : alpha(theme.palette.common.white, 0.5),
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.light,
  },
  '& .MuiSelect-select': {
    color:
      theme.palette.mode === 'light'
        ? theme.palette.text.primary
        : theme.palette.common.white,
  },
}));

export default function RoleFilter({ filterRole, setFilterRole }) {
  const roles = ['', 'Super Admin', 'Admin', 'Manager', 'Employee'];

  return (
    <GlassFormControl variant="outlined">
      <InputLabel id="role-filter-label">Filter Role</InputLabel>
      <Select
        labelId="role-filter-label"
        id="role-filter"
        value={filterRole}
        label="Filter Role"
        onChange={e => setFilterRole(e.target.value)}
      >
        {roles.map(role => (
          <MenuItem key={role} value={role}>
            {role || 'All'}
          </MenuItem>
        ))}
      </Select>
    </GlassFormControl>
  );
}
