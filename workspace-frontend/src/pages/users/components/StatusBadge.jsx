// File: src/pages/users/components/StatusBadge.jsx
import React from 'react';
import { Chip } from '@mui/material';

function StatusBadge({ status }) {
  return <Chip label={status} color={status === 'Active' ? 'success' : 'default'} />;
}

export default StatusBadge;
