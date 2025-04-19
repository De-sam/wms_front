// components/ActionLinks.jsx
import React from 'react';
import { Box, Paper, Link, useTheme } from '@mui/material';

const ActionLinks = () => {
  const theme = useTheme();

  const links = [
    { label: 'Add Workspace',   href: '#' },
    { label: 'View All Booking', href: '#' },
    { label: 'Add User',        href: '#' },
    { label: 'Generate Report',  href: '#' },
  ];

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr' },
        gap: 1,
      }}
    >
      {links.map((link, i) => (
        <Paper
          key={i}
          elevation={0}
          sx={{
            backgroundColor: 'transparent',
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 2,
            p: 1,
          }}
        >
          <Link
            href={link.href}
            underline="none"
            sx={{
              display: 'block',
              width: '100%',
              py: 1,
              textAlign: 'center',
              color: theme.palette.text.primary,
            }}
          >
            {link.label}
          </Link>
        </Paper>
      ))}
    </Box>
  );
};

export default ActionLinks;
