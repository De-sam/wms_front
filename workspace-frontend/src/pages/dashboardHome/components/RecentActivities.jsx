// components/RecentActivities.jsx
import React from 'react';
import {
  Paper,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  useTheme
} from '@mui/material';
import {
  EventNote,
  Cancel,
  Edit,
  Update,
  CheckCircle,
  Feedback
} from '@mui/icons-material';
import { blue, red, purple, yellow, green, amber } from '@mui/material/colors';

const recentActivities = [
  {
    primary: 'Henry Jack booked Desk A1',
    secondary: '10:00 AM - 12:00 PM',
    Icon: EventNote,
    color: blue[600]
  },
  {
    primary: 'Mary Jane canceled Room B reservation',
    secondary: '09:00 AM - 10:00 AM',
    Icon: Cancel,
    color: red[600]
  },
  {
    primary: 'David Clarke updated booking for Room C',
    secondary: '08:30 AM - 09:30 AM',
    Icon: Edit,
    color: purple[600]
  },
  {
    primary: 'Alice Johnson extended booking for Desk 2',
    secondary: '12:00 PM - 02:00 PM',
    Icon: Update,
    color: yellow[600]
  },
  {
    primary: 'Michael Davis checked into Collaboration Space',
    secondary: '11:00 AM',
    Icon: CheckCircle,
    color: green[600]
  },
  {
    primary: 'Emma Wilson left feedback for Meeting Room 1',
    secondary: 'Yesterday',
    Icon: Feedback,
    color: amber[600]
  }
];

const RecentActivities = () => {
  const theme = useTheme();

  return (
    <Paper
        elevation={0}
        sx={{
        backgroundColor: 'transparent',
        border: '1px solid', // keep the border transparent initially
        borderRadius: 2,
        width: { xs: '100%', md: 800 },
        p: 2,
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        transition: 'border 0.3s ease',
        '&:hover': {
            border: '1px solid #1976d2', // rich blue on hover
        },
        }}
    >
      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
        Recent Activities
      </Typography>

      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          '&::-webkit-scrollbar': { display: 'none' },
          '-ms-overflow-style': 'none',
          scrollbarWidth: 'none'
        }}
      >
        <List sx={{ width: '100%' }}>
          {recentActivities.map((item, i) => (
            <ListItem
              key={i}
              sx={{
                display: 'flex',
                alignItems: 'center',
                py: 1.5,
                borderBottom: `1px solid ${theme.palette.divider}`,
                '&:last-child': { borderBottom: 'none' }
              }}
            >
              <item.Icon
                sx={{
                  mr: 2,
                  fontSize: { xs: 30, sm: 36, md: 40 },
                  color: item.color
                }}
              />
              <ListItemText
                primary={item.primary}
                secondary={item.secondary}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  );
};

export default RecentActivities;
