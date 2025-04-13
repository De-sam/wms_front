import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import {
  ArrowForward as ArrowForwardIcon,
  PlayCircleOutline as PlayCircleOutlineIcon
} from '@mui/icons-material';

import myPhoto from '../../assets/my_photo.jpg';
import { useTheme } from '@mui/material/styles';

const HeroSection = () => {
  const [transform, setTransform] = React.useState({ rotateX: 0, rotateY: 0 });
  const theme = useTheme();

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / rect.height) * 15;
    const rotateY = (x / rect.width) * 15;
    setTransform({ rotateX, rotateY });
  };

  const handleMouseLeave = () => setTransform({ rotateX: 0, rotateY: 0 });

  return (
    <Box
      component="section"
      sx={{
        mt: 10,
        width: '100%',
        overflowX: 'hidden',
        backgroundColor: theme.palette.primary.main
      }}
    >
      <Container
        sx={{
          maxWidth: '1200px',
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 4,
          py: 4
        }}
      >
        {/* Text Side */}
        <Box
          sx={{
            flex: '1 1 50%',
            maxWidth: { xs: '100%', md: '650px' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: { xs: 'center', md: 'left' },
            p: 3,
            color: '#fff'
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3rem' },
              fontWeight: 700,
              mb: 2
            }}
          >
            Streamline Your Workspace
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.25rem' },
              mb: 4,
              fontWeight: 300,
              lineHeight: 1.6
            }}
          >
            Boost productivity with our intelligent workspace management system.
            Organize tasks, collaborate seamlessly, and analyze performance all in one place.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 2,
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' }
            }}
          >
            <Button
              variant="contained"
              color="warning"
              sx={{
                fontWeight: 500,
                px: 3,
                py: 1.5,
                fontSize: '1rem',
                color: '#fff',
                textTransform: 'none'
              }}
              startIcon={<ArrowForwardIcon />}
            >
              Start Free Trial
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: '#fff',
                borderColor: '#fff',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                fontWeight: 500,
                px: 3,
                py: 1.5,
                fontSize: '1rem',
                textTransform: 'none'
              }}
              startIcon={<PlayCircleOutlineIcon />}
            >
              Watch Demo
            </Button>
          </Box>
        </Box>

        {/* Image Side */}
        <Box
          sx={{
            flex: '1 1 50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <Box
            component="img"
            src={myPhoto}
            alt="Workspace Dashboard"
            sx={{
              width: '100%',
              maxWidth: 800,
              maxHeight: 600,
              borderRadius: '16px',
              boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
              transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
              transition: 'transform 0.2s ease-out'
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
