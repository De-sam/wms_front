import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import {
  PersonAdd as PersonAddIcon,
  Group as GroupIcon,
  LocationOn as LocationOnIcon,
  BarChart as BarChartIcon
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { amber } from '@mui/material/colors';

const steps = [
  {
    label: 'Sign Up',
    description:
      'Create an account for your organization by signing up on our platform. The first person to register becomes the Super Admin, with full control over workspace settings and staff management.',
    icon: <PersonAddIcon fontSize="medium" />
  },
  {
    label: 'Add Staff',
    description:
      'Invite your team members by adding their details. Assign them roles and grant permissions based on their responsibilities within the organization.',
    icon: <GroupIcon fontSize="medium" />
  },
  {
    label: 'Add Locations',
    description:
      'Define your organization’s physical locations. Add multiple branches or office sites, and structure each one by setting up specific floors, sections, or departments.',
    icon: <LocationOnIcon fontSize="medium" />
  },
  {
    label: 'Manage Workspaces',
    description:
      'Easily create and manage workspaces such as desks, meeting rooms, or hot zones. Monitor bookings, track usage, send reminders, and ensure seamless day-to-day workspace operations.',
    icon: <BarChartIcon fontSize="medium" />
  }
];

//
// DoubleCircleIndicator Component
// - Uses a 0.8s spinner animation.
// - The spinner circles and the center number circle use amber.
// - The step number is explicitly white.
const DoubleCircleIndicator = ({ number, onComplete }) => {
  const theme = useTheme();
  const containerRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const wasVisible = useRef(false);

  // Outer circle configuration.
  const outerRadius = 38;
  const outerCircumference = 2 * Math.PI * outerRadius; 
  const outerGap = 30;
  const outerDash = outerCircumference - outerGap;

  // Inner circle configuration.
  const innerRadius = 28;
  const innerCircumference = 2 * Math.PI * innerRadius;
  const innerGap = 20;
  const innerDash = innerCircumference - innerGap;

  const keyframesStyles = `
    @keyframes outerSpin {
      0% { transform: rotate(0deg); }
      50% { transform: rotate(360deg); }
      100% { transform: rotate(0deg); }
    }
    @keyframes innerSpin {
      0% { transform: rotate(0deg); }
      50% { transform: rotate(-360deg); }
      100% { transform: rotate(0deg); }
    }
  `;

  const spinnerDuration = '0.5s';

  const handleAnimationEnd = useCallback(() => {
    setAnimate(false);
    if (onComplete) {
      onComplete(); // Trigger text slide-in immediately.
    }
  }, [onComplete]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !wasVisible.current) {
          setAnimate(true);
          wasVisible.current = true;
        } else if (!entry.isIntersecting) {
          wasVisible.current = false;
        }
      },
      { threshold: 0.5 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box sx={{ position: 'relative', width: 80, height: 80 }} ref={containerRef}>
      <style>{keyframesStyles}</style>
      {/* Outer Circle SVG */}
      <svg width="80" height="80" style={{ position: 'absolute', top: 0, left: 0 }}>
        <circle
          cx="40"
          cy="40"
          r={outerRadius}
          fill="none"
          stroke={amber[500]}
          strokeWidth="2"
          strokeDasharray={`${outerDash} ${outerGap}`}
          strokeDashoffset="0"
          style={
            animate
              ? {
                  animation: `outerSpin ${spinnerDuration} linear 1`,
                  transformOrigin: '50% 50%',
                  transformBox: 'fill-box'
                }
              : {}
          }
          onAnimationEnd={handleAnimationEnd}
        />
      </svg>
      {/* Inner Circle SVG */}
      <svg width="80" height="80" style={{ position: 'absolute', top: 10, left: 10 }}>
        <circle
          cx="30"
          cy="30"
          r={innerRadius}
          fill="none"
          stroke={amber[500]}
          strokeWidth="2"
          strokeDasharray={`${innerDash} ${innerGap}`}
          strokeDashoffset={innerCircumference / 2}
          style={
            animate
              ? {
                  animation: `innerSpin ${spinnerDuration} linear 1`,
                  transformOrigin: '50% 50%',
                  transformBox: 'fill-box'
                }
              : {}
          }
        />
      </svg>
      {/* Center Filled Circle with Step Number */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 40,
          height: 40,
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          backgroundColor: amber[500],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white', // Explicitly white
          fontWeight: 'bold',
          fontSize: '1.2rem'
        }}
      >
        {number}
      </Box>
    </Box>
  );
};

//
// StepRow Component
// - Arranges the spinner, icon, header, and description.
// - The header text and its icon are styled in blue (using theme.palette.primary.main).
const StepRow = ({ step, index, isReversed }) => {
  const theme = useTheme();
  const rowRef = useRef(null);
  const [animateText, setAnimateText] = useState(false);

  // Keyframes for text slide-in.
  const slideKeyframes = `
    @keyframes slideInFromLeft {
      0% { opacity: 0; transform: translateX(-20px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideInFromRight {
      0% { opacity: 0; transform: translateX(20px); }
      100% { opacity: 1; transform: translateX(0); }
    }
  `;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) setAnimateText(false);
      },
      { threshold: 0.5 }
    );
    if (rowRef.current) observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, []);

  const textAnimationStyle = animateText
    ? {
        animation: `${isReversed ? 'slideInFromLeft' : 'slideInFromRight'} 0.5s linear forwards`
      }
    : { opacity: 0 };

  // Text container with header icon, label, and description.
  const TextContainer = () => (
    <Box
      sx={{
        ...textAnimationStyle,
        maxWidth: '70%',
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: theme.palette.primary.main }}>
        {React.cloneElement(step.icon, { sx: { color: theme.palette.primary.main } })}
        <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
          {step.label}
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
        {step.description}
      </Typography>
    </Box>
  );

  return (
    <Box
      ref={rowRef}
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: 4,
        p: 2,
        backgroundColor: 'transparent',
        borderRadius: 0,
        boxShadow: 'none',
        transition: 'transform 0.3s ease'
      }}
    >
      <style>{slideKeyframes}</style>
      {isReversed ? (
        <>
          <TextContainer />
          <Box sx={{ ml: 2 }}>
            <DoubleCircleIndicator number={index + 1} onComplete={() => setAnimateText(true)} />
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ mr: 2 }}>
            <DoubleCircleIndicator number={index + 1} onComplete={() => setAnimateText(true)} />
          </Box>
          <TextContainer />
        </>
      )}
    </Box>
  );
};

//
// MobileTimeline Component: Renders each step.
const MobileTimeline = () => (
  <Box sx={{ mt: 4 }}>
    {steps.map((step, index) => {
      const isReversed = index % 2 !== 0;
      return <StepRow key={index} step={step} index={index} isReversed={isReversed} />;
    })}
  </Box>
);

//
// HowItWorksSection Component: Displays the section header and timeline.
const HowItWorksSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box component="section" id="how-it-works" sx={{ py: 8, backgroundColor: theme.palette.background.default }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6, position: 'relative' }}>
          <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 700, mb: 2 }}>
            How It Works
          </Typography>
          <Box
            sx={{
              position: 'absolute',
              width: 80,
              height: 4,
              backgroundColor: theme.palette.warning.main,
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          />
        </Box>
        {isMobile ? (
          <MobileTimeline />
        ) : (
          <Typography align="center">Desktop view not implemented in this snippet.</Typography>
        )}
      </Container>
    </Box>
  );
};

export default HowItWorksSection;
