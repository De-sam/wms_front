import React from 'react';
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
import { Link, useLocation } from 'react-router-dom';

import ColorModeContext from '../../context/ColorModeContext';

const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState('Home');
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const location = useLocation();

  const menuOptions = [
    { text: 'Home', href: '#' },
    { text: 'Features', href: '#features' },
    { text: 'How It Works', href: '#how-it-works' },
    { text: 'Contact Us', href: '#contact' }
  ];

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleScrollTo = (href) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.querySelector(href);
      if (section) {
        const yOffset = -80;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const lightBackground = scrolled
    ? 'rgba(255, 255, 255, 0.2)'
    : 'rgba(255, 255, 255, 0.15)';
  const darkBackground = scrolled
    ? 'rgba(33, 33, 33, 0.2)'
    : 'rgba(33, 33, 33, 0.15)';

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
          {/* Logo */}
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

          {/* Desktop Nav */}
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
                onClick={(e) => {
                  e.preventDefault();
                  setActiveItem(option.text);
                  if (location.pathname === '/') {
                    handleScrollTo(option.href);
                  } else {
                    window.location.href = '/' + option.href;
                  }
                }}
                sx={{
                  color: 'text.primary',
                  fontWeight: 500,
                  textTransform: 'none',
                  borderBottom:
                    activeItem === option.text
                      ? '2px solid #ffc107'
                      : '2px solid transparent',
                  transition: 'border-bottom 0.3s ease',
                  borderRadius: 0
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
            backgroundColor: 'transparent',
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
              onClick={(e) => {
                e.preventDefault();
                setActiveItem(option.text);
                if (location.pathname === '/') {
                  handleScrollTo(option.href);
                } else {
                  window.location.href = '/' + option.href;
                }
              }}
              sx={{
                display: 'block',
                textAlign: 'left',
                color: 'text.primary',
                fontWeight: 500,
                textTransform: 'none',
                width: '100%',
                my: 1
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
