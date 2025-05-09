import React, { useRef, useEffect, useState } from 'react';
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

const DoubleCircleIndicator = ({
  number,
  shouldSpin,
  onSpinComplete,
  isActive = true,
  spinnerDuration = '0.5s'
}) => {
  const theme = useTheme();
  const [animate, setAnimate] = useState(false);

  const outerRadius = 38;
  const outerCircumference = 2 * Math.PI * outerRadius;
  const outerGap = 30;
  const outerDash = outerCircumference - outerGap;

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

  useEffect(() => {
    if (typeof shouldSpin === 'number' ? shouldSpin > 0 : shouldSpin) {
      setAnimate(true);
    }
  }, [shouldSpin]);

  const handleAnimationEnd = () => {
    setAnimate(false);
    if (onSpinComplete) onSpinComplete();
  };

  return (
    <Box sx={{ position: 'relative', width: 80, height: 80 }}>
      <style>{keyframesStyles}</style>
      {(isActive || animate) && (
        <>
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
        </>
      )}
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

const StepRow = ({ step, index, isReversed }) => {
  const theme = useTheme();
  const rowRef = useRef(null);
  const [animateText, setAnimateText] = useState(false);
  const [inView, setInView] = useState(false);
  const [spinTrigger, setSpinTrigger] = useState(0);

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
        if (entry.isIntersecting && !inView) {
          setInView(true);
          setSpinTrigger(prev => prev + 1);
        } else if (!entry.isIntersecting && inView) {
          setInView(false);
        }
        setAnimateText(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (rowRef.current) observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, [inView]);

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
        p: 2
      }}
    >
      <style>{slideKeyframes}</style>
      {isReversed ? (
        <>
          <TextContainer />
          <Box sx={{ ml: 2 }}>
            <DoubleCircleIndicator number={index + 1} shouldSpin={spinTrigger} spinnerDuration="2.5s" />
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ mr: 2 }}>
            <DoubleCircleIndicator number={index + 1} shouldSpin={spinTrigger} spinnerDuration="2.5s" />
          </Box>
          <TextContainer />
        </>
      )}
    </Box>
  );
};

const DesktopStep = ({ step, index, circleRef, shouldSpin, onSpinComplete, isActive }) => {
  const theme = useTheme();
  const [animateText, setAnimateText] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (shouldSpin && isActive) {
      setAnimateText(true);
    }
  }, [shouldSpin, isActive]);

  return (
    <Box ref={containerRef} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 2 }}>
      <Box ref={circleRef} sx={{ width: 80, height: 80 }}>
        {isActive && (
          <DoubleCircleIndicator
            number={index + 1}
            shouldSpin={shouldSpin}
            isActive={isActive}
            onSpinComplete={onSpinComplete}
            spinnerDuration="0.5s"
          />
        )}
      </Box>
      <Box
        sx={{
          maxWidth: 220,
          textAlign: 'center',
          mt: 2,
          px: 1,
          opacity: animateText ? 1 : 0,
          transform: animateText ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
            color: theme.palette.primary.main
          }}
        >
          {React.cloneElement(step.icon, { sx: { color: theme.palette.primary.main } })}
          <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
            {step.label}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1, lineHeight: 1.6 }}>
          {step.description}
        </Typography>
      </Box>
    </Box>
  );
};

const DesktopTimeline = () => {
  const theme = useTheme();
  const timelineRef = useRef(null);
  const [lineSegments, setLineSegments] = useState([]);
  const [currentAnimIndex, setCurrentAnimIndex] = useState(-1);
  const circleRefs = useRef([]);
  if (circleRefs.current.length !== steps.length) {
    circleRefs.current = Array(steps.length)
      .fill(null)
      .map((_, i) => circleRefs.current[i] || React.createRef());
  }
  const gap = 20;

  const drawLineKeyframes = `
    @keyframes drawLine {
      from { stroke-dashoffset: var(--line-length); }
      to { stroke-dashoffset: 0; }
    }
  `;

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
        const startX = currentRect.right - timelineRect.left + gap;
        const endX = nextRect.left - timelineRect.left - gap;
        const y = currentRect.top + currentRect.height / 2 - timelineRect.top;
        segments.push({ x1: startX, x2: endX, y });
      }
    }
    setLineSegments(segments);
  }, []);

  useEffect(() => {
    if (!timelineRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentAnimIndex(0);
        } else {
          setCurrentAnimIndex(-1);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(timelineRef.current);
    return () => observer.disconnect();
  }, []);

  const advanceSequence = () => {
    setCurrentAnimIndex(prev => prev + 1);
  };

  return (
    <Box sx={{ width: '100%', mt: 4, position: 'relative' }} ref={timelineRef}>
      <style>{drawLineKeyframes}</style>
      <svg style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }} width="100%" height="100%">
        {lineSegments.map((seg, index) => {
          const lineLength = seg.x2 - seg.x1;
          const lineAnimIndex = 2 * index + 1;
          const hasFinished = currentAnimIndex > lineAnimIndex;
          const shouldAnimateLine = currentAnimIndex === lineAnimIndex;
          return (
            <line
              key={index}
              x1={seg.x1}
              y1={seg.y}
              x2={seg.x2}
              y2={seg.y}
              stroke={theme.palette.warning.main}
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={lineLength}
              strokeDashoffset={hasFinished ? 0 : lineLength}
              style={
                shouldAnimateLine
                  ? {
                      '--line-length': lineLength,
                      animation: `drawLine 0.3s ease-in-out forwards`
                    }
                  : { transition: 'none' }
              }
              onAnimationEnd={() => {
                if (shouldAnimateLine) {
                  advanceSequence();
                }
              }}
            />
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
        {steps.map((step, index) => {
          let isActive = false;
          if (index === 0) isActive = true;
          else if (index === 1) isActive = currentAnimIndex > 1;
          else if (index === 2) isActive = currentAnimIndex > 3;
          else if (index === 3) isActive = currentAnimIndex > 5;

          const shouldSpin = currentAnimIndex === 2 * index;

          return (
            <DesktopStep
              key={index}
              step={step}
              index={index}
              circleRef={circleRefs.current[index]}
              shouldSpin={shouldSpin}
              onSpinComplete={advanceSequence}
              isActive={isActive}
            />
          );
        })}
      </Box>
    </Box>
  );
};

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
        {isMobile ? (
          steps.map((step, index) => {
            const isReversed = index % 2 !== 0;
            return <StepRow key={index} step={step} index={index} isReversed={isReversed} />;
          })
        ) : (
          <DesktopTimeline />
        )}
      </Container>
    </Box>
  );
};

export default HowItWorksSection;
