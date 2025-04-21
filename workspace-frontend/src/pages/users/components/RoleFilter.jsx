// File: src/pages/users/components/RoleFilter.jsx
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function RoleFilter({ filterRole, setFilterRole }) {
  return (
    <FormControl sx={{ m: 1, minWidth: 140, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: 2 }}>
      <InputLabel>Filter Role</InputLabel>
      <Select value={filterRole} label="Filter Role" onChange={e => setFilterRole(e.target.value)}>
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Super Admin">Super Admin</MenuItem>
        <MenuItem value="Admin">Admin</MenuItem>
        <MenuItem value="Manager">Manager</MenuItem>
        <MenuItem value="Employee">Employee</MenuItem>
      </Select>
    </FormControl>
  );
}

export default RoleFilter;
