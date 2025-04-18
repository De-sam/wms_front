import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const WorkspaceSearch = ({ value, onChange }) => {
  return (
    <TextField
      fullWidth
      placeholder="Search workspaces..."
      value={value}
      onChange={onChange}
      variant="outlined"
      margin="normal"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default WorkspaceSearch;
