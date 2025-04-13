import React from 'react';
import {
  Box,
  Button,
  Container,
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

import ColorModeContext from '../../context/ColorModeContext';
const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

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
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
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
          backgroundColor:
            theme.palette.mode === 'dark' ? darkBackground : lightBackground,
          backdropFilter: 'blur(25px)',
          WebkitBackdropFilter: 'blur(25px)',
          transition: 'background-color 0.3s ease',
          boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.2)' : 'none',
          py: 1
        }}
      >
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          {/* Brand */}
          <Typography
            component="a"
            href="#"
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
              gap: 3
            }}
          >
            {menuOptions.map((option, index) => (
              <Button
                key={index}
                href={option.href}
                sx={{
                  color: 'text.primary',
                  fontWeight: 500,
                  textTransform: 'none'
                }}
              >
                {option.text}
              </Button>
            ))}
            <IconButton onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
            <Button
              variant="contained"
              color="warning"
              sx={{
                fontWeight: 500,
                ml: 1,
                color: '#fff',
                textTransform: 'none'
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Get Started
            </Button>
          </Box>

          {/* Mobile Nav */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center'
            }}
          >
            <IconButton onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
            <IconButton onClick={toggleDrawer(true)} sx={{ ml: 1 }}>
              <SegmentIcon />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, p: 2 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {menuOptions.map((option, index) => (
            <Button
              key={index}
              href={option.href}
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
