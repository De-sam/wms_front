import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const WorkspaceHeader = ({ onAdd }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
      <Typography variant="h5" fontWeight="bold">
        Workspace Management
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={onAdd}
      >
        Add Workspace
      </Button>
    </Box>
  );
};

export default WorkspaceHeader;
