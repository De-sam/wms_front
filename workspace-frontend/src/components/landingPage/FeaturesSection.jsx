import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
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

const FeatureCard = ({ feature, index }) => {
  const theme = useTheme();
  const [mousePos, setMousePos] = React.useState({ x: '50%', y: '50%' });

  // Update the mouse position relative to the card
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x: `${x}%`, y: `${y}%` });
  };

  const handleMouseLeave = () => {
    // Reset to the center on mouse leave.
    setMousePos({ x: '50%', y: '50%' });
  };

  return (
    <motion.div
      key={index}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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
          // Set CSS variables for the mouse position
          '--mouse-x': mousePos.x,
          '--mouse-y': mousePos.y,
          // Create the pseudo-element for the gradient effect.
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            // For desktop only: use the theme breakpoint (md and up) to enable the hover gradient.
            background: {
              xs: 'none',
              md: `radial-gradient(
                circle at var(--mouse-x) var(--mouse-y),
                rgba(255, 193, 7, 0.3),
                transparent 60%
              )`
            },
            opacity: 1,
            transition: 'opacity 0.4s ease, transform 0.4s ease',
            pointerEvents: 'none'
          }
        }}
      >
        <Box sx={{ color: 'primary.main', mb: 3 }}>{feature.icon}</Box>
        <Typography variant="h3" sx={{ fontSize: '1.3rem', mb: 2, fontWeight: 600 }}>
          {feature.title}
        </Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
          {feature.description}
        </Typography>
      </Box>
    </motion.div>
  );
};

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
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
