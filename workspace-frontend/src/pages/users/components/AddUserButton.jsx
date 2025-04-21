// File: src/pages/users/components/AddUserButton.jsx
import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/material/styles';

export default function AddUserButton({ onClick, isMobile, sx }) {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      size={isMobile ? 'small' : 'medium'}
      startIcon={<AddIcon />}
      onClick={onClick}
      sx={{
        textTransform: 'none',
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
        },
        width: isMobile ? '100%' : 'auto',
        ...sx
      }}
    >
      Add User
    </Button>
  );
}
