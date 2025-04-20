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
        width: '100%',
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr 1fr',       // 2 per row on phones
          sm: '1fr 1fr',       // 2 per row on small tablets
          md: 'repeat(4, 1fr)' // all 4 in one row on md+
        },
        gap: 1.5,
        alignItems: 'stretch'
      }}
    >
      {links.map((link, i) => (
        <Paper
          key={i}
          elevation={0}
          sx={{
            backgroundColor: 'transparent',
            border: '1px solid transparent',
            p: 0.5,
            transition: 'border 0.3s ease',
            height: '100%', // makes sure all cards align
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
              borderImage: 'linear-gradient(to right, #ffa000, #1976d2) 1',
            },
          }}
        >
          <Link
            href={link.href}
            underline="none"
            sx={{
              width: '100%',
              textAlign: 'center',
              fontWeight: 500,
              fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem' },
              color: theme.palette.text.primary,
              py: 1,
              px: 1
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
