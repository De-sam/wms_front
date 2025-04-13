import React from 'react';
import {
  Box,
  Container,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useMediaQuery
} from '@mui/material';
import {
  Build as BuildIcon,
  Group as GroupIcon,
  BarChart as BarChartIcon
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const steps = [
  {
    label: 'Sign Up & Customize',
    description:
      "Create your account and tailor your workspace to suit your team's workflow.",
    icon: <BuildIcon />
  },
  {
    label: 'Invite Your Team',
    description:
      'Add teammates, assign roles, and collaborate within shared workspaces.',
    icon: <GroupIcon />
  },
  {
    label: 'Start Managing Workspaces',
    description:
      'Create and manage workspaces, set goals, and track productivity with real-time analytics.',
    icon: <BarChartIcon />
  }
];

const HowItWorksSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="section"
      id="how-it-works"
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.default
      }}
    >
      <Container>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 6, position: 'relative' }}>
          <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 700, mb: 2 }}>
            How It Works
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

        {/* Stepper Timeline */}
        <Stepper
          alternativeLabel={!isMobile}
          orientation={isMobile ? 'vertical' : 'horizontal'}
          sx={{
            '& .MuiStepConnector-line': {
              borderColor: theme.palette.mode === 'light' ? '#ccc' : '#444'
            }
          }}
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel
                StepIconComponent={() => (
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: theme.palette.primary.main,
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 20
                    }}
                  >
                    {step.icon}
                  </Box>
                )}
              >
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {step.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {step.description}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Container>
    </Box>
  );
};

export default HowItWorksSection;
