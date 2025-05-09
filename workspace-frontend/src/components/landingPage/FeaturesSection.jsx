import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Workspaces as WorkspaceIcon,
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
    icon: <WorkspaceIcon fontSize="large" />,
    title: 'Workspace Management',
    description: 'Manage your workspaces with deadlines, priorities, and assignments. Track usage and optimize every space.'
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
  const [mousePos, setMousePos] = useState({ x: '50%', y: '50%' });

  // Calculate the relative mouse position within the card.
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x: `${x}%`, y: `${y}%` });
  };

  // Reset to center when leaving the card.
  const handleMouseLeave = () => {
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
          // Set CSS variables from state
          '--mouse-x': mousePos.x,
          '--mouse-y': mousePos.y,
          // Pseudo-element for the subtle light effect following the cursor.
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '300%',
            height: '300%',
            background: `radial-gradient(
              circle at var(--mouse-x) var(--mouse-y),
              rgba(255,193,7,0.15) 0%,
              transparent 60%
            )`,
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
