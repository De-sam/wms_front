import React from 'react';
import { Box, Paper, Link, useTheme, Divider, Typography } from '@mui/material';

const ActionLinks = () => {
  const theme = useTheme();

  const links = [
    { label: 'Add Workspace', href: '#' },
    { label: 'View All Booking', href: '#' },
    { label: 'Add User', href: '#' },
    { label: 'Generate Report', href: '#' },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      {/* Divider line above chart heading */}
      <Divider sx={{ mb: 1, borderColor: 'divider' }} />

      {/* Buttons layout */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: { xs: 'wrap', md: 'nowrap' }, // ✅ wrap only on mobile
          gap: 1,
          width: '100%',
        }}
      >
        {links.map((link, i) => (
          <Paper
            key={i}
            elevation={0}
            sx={{
              flex: 1,
              backgroundColor: 'transparent',
              border: '1px solid',
              borderColor: 'divider',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(90deg, #ffb300, #1976d2)',
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
                  color: '#fff',
                },
              }}
            >
              {link.label}
            </Link>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default ActionLinks;
