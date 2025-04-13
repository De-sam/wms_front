import React from 'react';
import {
  Box,
  Button,
  Typography,
  Container,
  useTheme
} from '@mui/material';
import {
  ArrowForward as ArrowForwardIcon,
  PlayCircleOutline as PlayCircleOutlineIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import myPhoto from '../../assets/my_photo.jpg';

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
        backgroundColor: theme.palette.primary.main,
        borderBottomLeftRadius: { xs: '16px', md: '24px' },
        borderBottomRightRadius: { xs: '16px', md: '24px' },
        transition: 'border-radius 0.3s ease'
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 4,
          py: 6
        }}
      >
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ flex: 1, maxWidth: '600px', color: '#fff', textAlign: 'left' }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.4rem', md: '3rem' },
              fontWeight: 700,
              mb: 2
            }}
          >
            Streamline Your Workspace
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              fontWeight: 300,
              mb: 4,
              lineHeight: 1.6
            }}
          >
            Boost productivity with our intelligent workspace management system.
            Organize tasks, collaborate seamlessly, and analyze performance all in one place.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 2,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                component={Link}
                to="/signup"
                variant="contained"
                color="warning"
                sx={{
                  fontWeight: 500,
                  px: 3,
                  py: 1.5,
                  color: '#fff',
                  textTransform: 'none'
                }}
                startIcon={<ArrowForwardIcon />}
              >
                Start Free Trial
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outlined"
                sx={{
                  color: '#fff',
                  borderColor: '#fff',
                  fontWeight: 500,
                  px: 3,
                  py: 1.5,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
                startIcon={<PlayCircleOutlineIcon />}
              >
                Watch Demo
              </Button>
            </motion.div>
          </Box>
        </motion.div>

        {/* Image Side */}
        <motion.div
          style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.img
            src={myPhoto}
            alt="Workspace Dashboard"
            style={{
              width: '100%',
              maxWidth: 750,
              maxHeight: 500,
              borderRadius: '16px',
              boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
              transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`
            }}
            transition={{ type: 'spring', stiffness: 50 }}
          />
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;
