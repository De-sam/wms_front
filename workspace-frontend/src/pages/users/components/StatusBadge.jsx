// File: src/pages/users/components/StatusBadge.jsx
import React from 'react';
import { Chip } from '@mui/material';
import { styled } from '@mui/system';

const GlassChip = styled(Chip, {
  shouldForwardProp: prop => prop !== '$status'
})(({ theme, $status }) => ({
  backgroundColor: $status === 'Active'
    ? theme.palette.mode === 'light'
      ? 'rgba(76, 175, 80, 0.2)' // green for light mode
      : 'rgba(76, 175, 80, 0.2)' // green for dark mode (same tone)
    : theme.palette.mode === 'light'
      ? 'rgba(120, 120, 120, 0.2)' // grey-ish for light
      : 'rgba(158, 158, 158, 0.2)', // grey for dark

  color: theme.palette.mode === 'light'
    ? theme.palette.grey[900]
    : theme.palette.common.white,

  border: `1px solid ${
    $status === 'Active'
      ? theme.palette.success.main
      : theme.palette.grey[500]
  }`,

  backdropFilter: 'blur(10px)',
  fontWeight: 500,
  textTransform: 'uppercase',
}));

function StatusBadge({ status }) {
  return <GlassChip label={status} $status={status} />;
}

export default StatusBadge;
