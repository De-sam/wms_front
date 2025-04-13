import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Assignment as TasksIcon,
  People as TeamIcon,
  Equalizer as AnalyticsIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

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
      <Container sx={{ px: { xs: 2, md: 0 } }}>
        {/* Section Title */}
        <Box sx={{ textAlign: 'center', mb: 6, position: 'relative' }}>
          <Typography
            variant="h2"
            sx={{ fontSize: '2rem', fontWeight: 700, mb: 2 }}
          >
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

        {/* Responsive Card Layout */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: { xs: 'center', md: 'space-between' },
            alignItems: { xs: 'center', md: 'stretch' },
            gap: 3,
            flexWrap: 'wrap'
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                flex: '1 1 auto',
                width: '100%',
                maxWidth: '280px'
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  backgroundColor: 'background.paper',
                  borderRadius: '8px',
                  boxShadow: 1,
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: 3
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '300%',
                    height: '300%',
                    background:
                      'radial-gradient(circle, rgba(255,193,7,0.15) 0%, transparent 60%)',
                    transform: 'translate(-50%, -50%) scale(0.2)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease, transform 0.4s ease'
                  },
                  '&:hover::before': {
                    opacity: 1,
                    transform: 'translate(-50%, -50%) scale(1)'
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
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
