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

// Steps data
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
// - Uses a 0.5s spinner animation for both outer and inner circles.
// - The circles are styled in amber, while the step number is rendered in white.
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
      onComplete();
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
          color: 'white',
          fontWeight: 'bold',
          fontSize: '1.2rem',
          zIndex: 1
        }}
      >
        {number}
      </Box>
    </Box>
  );
};

//
// StepRow Component for MobileTimeline (vertical layout)
// (Unchanged from previous implementation.)
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
// MobileTimeline Component: Renders each step in a vertical layout.
// (Unchanged from previous implementation.)
const MobileTimeline = () => (
  <Box sx={{ mt: 4 }}>
    {steps.map((step, index) => {
      const isReversed = index % 2 !== 0;
      return <StepRow key={index} step={step} index={index} isReversed={isReversed} />;
    })}
  </Box>
);

//
// DesktopStep Component for DesktopTimeline with an added onStepComplete callback.
// When the indicator animation completes, the provided onStepComplete function is called.
const DesktopStep = ({ step, index, circleRef, onStepComplete }) => {
  const theme = useTheme();
  const [animateText, setAnimateText] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animateText) {
          setAnimateText(true);
        }
      },
      { threshold: 0.5 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [animateText]);

  const TextContainer = () => (
    <Box
      sx={{
        maxWidth: 220,
        textAlign: 'center',
        mt: 2,
        px: 1
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, color: theme.palette.primary.main }}>
        {React.cloneElement(step.icon, { sx: { color: theme.palette.primary.main } })}
        <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
          {step.label}
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1, lineHeight: 1.6 }}>
        {step.description}
      </Typography>
    </Box>
  );

  return (
    <Box ref={containerRef} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 2 }}>
      <Box ref={circleRef}>
        <DoubleCircleIndicator
          number={index + 1}
          onComplete={() => {
            setAnimateText(true);
            // If a step-specific completion callback was passed (for step 0), trigger it.
            if (onStepComplete) onStepComplete();
          }}
        />
      </Box>
      <TextContainer />
    </Box>
  );
};

//
// DesktopTimeline Component:
// For desktop view, renders all desktop steps in a single row with connecting line segments that
// animate like progress bars (filling from left to right) every time the timeline enters the viewport.
//
// DesktopTimeline Component:
// For desktop view, renders all desktop steps in a single row with connecting line segments that
// animate like progress bars (filling from left to right) every time the timeline enters the viewport.
// The animated line is rendered in white with no background track.
const DesktopTimeline = () => {
  const theme = useTheme();
  const timelineRef = useRef(null);
  const [lineSegments, setLineSegments] = useState([]);
  // progressKey is incremented each time the timeline enters the viewport to re-trigger all animations.
  const [progressKey, setProgressKey] = useState(0);
  // Create an array of refs (one for each step's circle)
  const circleRefs = useRef([]);
  if (circleRefs.current.length !== steps.length) {
    circleRefs.current = Array(steps.length)
      .fill(null)
      .map((_, i) => circleRefs.current[i] || React.createRef());
  }
  const gap = 20; // Increased gap for extra space between circles

  // Observer to trigger the progress bar animations whenever the timeline enters the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Update the key to force re-rendering of the animated progress lines.
          setProgressKey((prev) => prev + 1);
        }
      });
    }, { threshold: 0.5 });
    if (timelineRef.current) observer.observe(timelineRef.current);
    return () => observer.disconnect();
  }, []);

  // Calculate positions for the connecting line segments.
  useEffect(() => {
    if (!timelineRef.current) return;
    const timelineRect = timelineRef.current.getBoundingClientRect();
    const segments = [];
    for (let i = 0; i < steps.length - 1; i++) {
      const current = circleRefs.current[i].current;
      const next = circleRefs.current[i + 1].current;
      if (current && next) {
        const currentRect = current.getBoundingClientRect();
        const nextRect = next.getBoundingClientRect();
        // The line segment starts at currentRect.right plus gap and ends at nextRect.left minus gap.
        const startX = currentRect.right - timelineRect.left + gap;
        const endX = nextRect.left - timelineRect.left - gap;
        // Use the vertical center of the current circle.
        const y = currentRect.top + currentRect.height / 2 - timelineRect.top;
        segments.push({ x1: startX, x2: endX, y });
      }
    }
    setLineSegments(segments);
  }, []);

  return (
    <Box sx={{ width: '100%', mt: 4, position: 'relative' }} ref={timelineRef}>
      <svg
        style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
        width="100%"
        height="100%"
      >
        {lineSegments.map((seg, index) => {
          const totalLength = seg.x2 - seg.x1;
          return (
            <g key={`${progressKey}-${index}`}>
              {/* Animated white progress fill with no background track */}
              <line
                x1={seg.x1}
                y1={seg.y}
                x2={seg.x2}
                y2={seg.y}
                stroke="#FFC107"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray={totalLength}
                strokeDashoffset={totalLength}
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from={totalLength}
                  to="0"
                  dur="1s"
                  fill="freeze"
                />
              </line>
            </g>
          );
        })}
      </svg>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
          position: 'relative',
          zIndex: 1
        }}
      >
        {steps.map((step, index) => (
          <DesktopStep
            key={index}
            step={step}
            index={index}
            circleRef={circleRefs.current[index]}
          />
        ))}
      </Box>
    </Box>
  );
};


//
// HowItWorksSection Component:
// Displays the section header and timeline. Uses MobileTimeline for devices up to the 'md' breakpoint;
// for larger screens, the DesktopTimeline (with animated connecting line and arrow) is rendered.
const HowItWorksSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box component="section" id="how-it-works" sx={{ py: 8, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth={isMobile ? 'md' : false}>
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
        {isMobile ? <MobileTimeline /> : <DesktopTimeline />}
      </Container>
    </Box>
  );
};

export default HowItWorksSection;
