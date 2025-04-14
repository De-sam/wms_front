import React, { useEffect, useState, useContext } from 'react';
import {
  Box,
  Button,
  IconButton,
  Typography,
  Drawer,
  useTheme
} from '@mui/material';
import {
  Segment as SegmentIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import ColorModeContext from '../../context/ColorModeContext';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const location = useLocation();
  const navigate = useNavigate();

  const menuOptions = [
    { text: 'Home', id: 'hero' },
    { text: 'Features', id: 'features' },
    { text: 'How It Works', id: 'how-it-works' },
    { text: 'Contact Us', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Only update activeItem when on the homepage.
      if (location.pathname === '/') {
        const scrollY = window.scrollY + 120; // offset to compensate for header
        let current = 'Home';

        for (const option of menuOptions) {
          const section = document.getElementById(option.id);
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
              current = option.text;
              break;
            }
          }
        }
        setActiveItem(current);
      } else {
        // Clear active item when not on the homepage.
        setActiveItem('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Also call once on mount.
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleScrollTo = (id) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(id);
      if (section) {
        const yOffset = -80;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (event?.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const lightBackground = scrolled
    ? 'rgba(255, 255, 255, 0.2)'
    : 'rgba(255, 255, 255, 0.15)';
  const darkBackground = scrolled
    ? 'rgba(33, 33, 33, 0.2)'
    : 'rgba(33, 33, 33, 0.15)';

  const handleNavigation = (e, option) => {
    e.preventDefault();
    setActiveItem(option.text);
    if (location.pathname === '/') {
      handleScrollTo(option.id);
    } else {
      // Navigate back to homepage with hash.
      navigate(`/#${option.id}`);
    }
  };

  return (
    <>
      <Box
        component="header"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          backgroundColor: theme.palette.mode === 'dark' ? darkBackground : lightBackground,
          backdropFilter: 'blur(25px)',
          WebkitBackdropFilter: 'blur(25px)',
          transition: 'background-color 0.3s ease',
          boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.2)' : 'none',
          py: 0.5
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 3,
            width: '100%'
          }}
        >
          <Typography
            component={Link}
            to="/"
            sx={{
              fontSize: '1.3rem',
              fontWeight: 700,
              color: 'text.primary',
              textDecoration: 'none'
            }}
          >
            WorkSpace
          </Typography>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 2,
              ml: 'auto'
            }}
          >
            {menuOptions.map((option) => (
              <Button
                key={option.text}
                onClick={(e) => handleNavigation(e, option)}
                sx={{
                  color: 'text.primary',
                  fontWeight: 500,
                  textTransform: 'none',
                  position: 'relative',
                  '&::after': {
                    content: "''",
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width:
                      activeItem === option.text && location.pathname === '/'
                        ? '100%'
                        : '0%',
                    height: '2px',
                    bgcolor: '#ffc107',
                    transition: 'width 0.3s ease'
                  }
                }}
              >
                {option.text}
              </Button>
            ))}

            <IconButton onClick={colorMode.toggleColorMode} color="inherit" sx={{ ml: 1 }}>
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>

            <Button
              component={Link}
              to="/signup"
              variant="contained"
              color="warning"
              sx={{
                fontWeight: 500,
                ml: 2,
                px: 3,
                py: 1,
                borderRadius: '6px',
                color: '#fff',
                textTransform: 'none',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#e0a800'
                }
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Get Started
            </Button>
          </Box>

          {/* Mobile Nav */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
            <IconButton onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <IconButton onClick={toggleDrawer(true)} color="inherit">
              <SegmentIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            // Using low-opacity colors to let blurred content be visible in both modes.
            backgroundColor:
              theme.palette.mode === 'dark'
                ? 'rgba(33, 33, 33, 0.1)'
                : 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(15px)',
            boxShadow: 'none'
          }
        }}
      >
        <Box
          sx={{ width: 250, p: 2 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {menuOptions.map((option) => (
            <Button
              key={option.text}
              onClick={(e) => handleNavigation(e, option)}
              sx={{
                display: 'block',
                textAlign: 'left',
                color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                fontWeight: 500,
                textTransform: 'none',
                width: '100%',
                my: 1,
                position: 'relative',
                '&::after': {
                  content: "''",
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width:
                    activeItem === option.text && location.pathname === '/'
                      ? '100%'
                      : '0%',
                  height: '2px',
                  bgcolor: '#ffc107',
                  transition: 'width 0.3s ease'
                }
              }}
            >
              {option.text}
            </Button>
          ))}

          <Button
            component={Link}
            to="/signup"
            variant="contained"
            color="warning"
            sx={{
              fontWeight: 500,
              mt: 2,
              color: '#fff',
              textTransform: 'none'
            }}
            endIcon={<ArrowForwardIcon />}
            fullWidth
          >
            Get Started
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
