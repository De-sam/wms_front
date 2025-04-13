import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Assignment as TasksIcon,
  People as TeamIcon,
  Equalizer as AnalyticsIcon
} from '@mui/icons-material';

const features = [
  {
    icon: <DashboardIcon fontSize="large" />,
    title: 'Smart Dashboard',
    description: 'Get a comprehensive overview of your workspace with customizable widgets and real-time updates.'
  },
  {
    icon: <TasksIcon fontSize="large" />,
    title: 'Task Management',
    description: 'Organize tasks with deadlines, priorities, and assignees. Track progress and get reminders.'
  },
  {
    icon: <TeamIcon fontSize="large" />,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with shared workspaces, document collaboration, and instant messaging.'
  },
  {
    icon: <AnalyticsIcon fontSize="large" />,
    title: 'Advanced Analytics',
    description: 'Gain insights into productivity patterns, team performance, and resource allocation.'
  }
];

const FeaturesSection = () => {
  return (
    <Box
      component="section"
      id="features"
      sx={{
        py: 8,
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? '#f5f5f5' : 'background.default'
      }}
    >
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6, position: 'relative' }}>
          <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 700, mb: 2 }}>
            Powerful Features
          </Typography>
          <Box
            sx={{
              position: 'absolute',
              width: 80,
              height: 4,
              backgroundColor: 'warning.main',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          />
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  backgroundColor: 'background.paper',
                  borderRadius: '8px',
                  boxShadow: 1,
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: 3
                  }
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 3 }}>{feature.icon}</Box>
                <Typography
                  variant="h3"
                  sx={{ fontSize: '1.3rem', mb: 2, fontWeight: 600 }}
                >
                  {feature.title}
                </Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
