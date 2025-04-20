import React from 'react';
import { Box, Paper, Link, useTheme } from '@mui/material';

const ActionLinks = () => {
  const theme = useTheme();

  const links = [
    { label: 'Add Workspace', href: '#' },
    { label: 'View All Booking', href: '#' },
    { label: 'Add User', href: '#' },
    { label: 'Generate Report', href: '#' },
  ];

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr' },
        gap: 1,
        width: '100%',
      }}
    >
      {links.map((link, i) => (
        <Paper
          key={i}
          elevation={0}
          sx={{
            backgroundColor: 'transparent',
            border: '1px solid',
            borderColor: 'divider',
            transition: 'all 0.3s ease',
            '&:hover': {
              background: 'linear-gradient(90deg, #ffb300, #1976d2)', // amber → blue
              borderColor: 'transparent',
            },
          }}
        >
          <Link
            href={link.href}
            underline="none"
            sx={{
              display: 'block',
              width: '100%',
              py: 1.5,
              textAlign: 'center',
              fontWeight: 500,
              color: theme.palette.text.primary,
              transition: 'color 0.3s ease',
              '&:hover': {
                color: '#fff', // make text white on hover
              },
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
