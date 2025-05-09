import React from 'react';
import {
  Paper,
  Box,
  Typography,
  List,
  ListItem,
  useTheme
} from '@mui/material';

const topWorkspaces = [
  { name: 'Meeting Room 1',      count: 24 },
  { name: 'Desk A2',             count: 18 },
  { name: 'Training Table',      count: 12 },
  { name: 'Phone Booth',         count: 10 },
  { name: 'Collaboration Space', count: 8  },
  { name: 'Quiet Pod 1',         count: 6  },
  { name: 'Open Lounge',         count: 5  }
];

const TopWorkspaces = () => {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: 0,
        height: 400,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
      }}
    >
      {/* Heading with divider */}
      <Box
        sx={{
          width: '100%',
          borderBottom: '1px solid',
          borderColor: 'divider',
          pb: 1,
          mb: 2,
        }}
      >
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}
        >
          Top Booked Workspaces
        </Typography>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          '&::-webkit-scrollbar': { display: 'none' },
          scrollbarWidth: 'none',
          '-ms-overflow-style': 'none'
        }}
      >
        <List disablePadding>
          {topWorkspaces.map(({ name, count }, i) => (
            <ListItem
              key={i}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 2.5,
                px: 1,
                borderBottom: `1px solid ${theme.palette.divider}`,
                '&:last-child': { borderBottom: 'none' }
              }}
            >
              <Typography variant="body1" fontWeight={500}>
                {`${i + 1}. ${name}`}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {count}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  );
};

export default TopWorkspaces;
