import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  IconButton, 
  Drawer,
  CssBaseline,
  useTheme,
  createTheme,
  ThemeProvider,
  Grid,
  TextField,
  List,
  ListItem,
  Divider,
  ListItemIcon,
  useMediaQuery
} from '@mui/material';
import { 
  Menu as MenuIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
  ArrowForward as ArrowForwardIcon,
  PlayCircleOutline as PlayCircleOutlineIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  Dashboard as DashboardIcon,
  Assignment as TasksIcon,
  People as TeamIcon,
  Equalizer as AnalyticsIcon,
  MoreHoriz as MoreHorizIcon
} from '@mui/icons-material';

// Import your image (ensure my_photo.jpg exists at src/assets/)
import myPhoto from "../assets/my_photo.jpg";

// --- Create a context for toggling color mode ---
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

// --- Header Component with Responsive Drawer ---
const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('');
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  // Navigation items
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Features', id: 'features' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Contact Us', id: 'contact' },
  ];

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const handleSectionChange = () => {
      const threshold = 150;
      let current = '';
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= threshold) current = item.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleSectionChange);
    handleSectionChange();
    return () => window.removeEventListener('scroll', handleSectionChange);
  }, [navItems]);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  const lightBackground = scrolled
    ? 'rgba(255, 255, 255, 0.2)'
    : 'rgba(255, 255, 255, 0.15)';
  const darkBackground = scrolled
    ? 'rgba(33, 33, 33, 0.2)'
    : 'rgba(33, 33, 33, 0.15)';

  const isActive = (id) => activeSection === id || (activeSection === '' && id === 'home');

  const drawerContent = (
    <Box sx={{ width: { xs: '80vw', md: 250 }, p: 2 }}>
      <Typography
        component="a"
        href="#home"
        onClick={() => handleNavClick('home')}
        sx={{
          fontSize: '1.3rem',
          fontWeight: 700,
          color: 'text.primary',
          textDecoration: 'none',
          mb: 2,
          display: 'block',
          textAlign: 'center',
        }}
      >
        WorkSpace
      </Typography>
      {navItems.map((item) => (
        <Button
          key={item.id}
          fullWidth
          onClick={() => handleNavClick(item.id)}
          sx={{
            justifyContent: 'flex-start',
            color: 'text.primary',
            textTransform: 'none',
            mb: 1,
            position: 'relative',
            '&:hover': { backgroundColor: 'transparent' },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -2,
              left: 0,
              width: isActive(item.id) ? '100%' : 0,
              height: '2px',
              bgcolor: 'warning.main',
              transition: 'width 0.3s ease',
            },
          }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );

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
          isolation: 'isolate',
          backgroundColor: theme.palette.mode === 'dark' ? darkBackground : lightBackground,
          backdropFilter: 'blur(25px)',
          WebkitBackdropFilter: 'blur(25px)',
          transition: 'background-color 0.3s ease',
          boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.2)' : 'none',
          py: 1,
          px: { xs: 2, md: 3 },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            component="a"
            href="#home"
            onClick={() => handleNavClick('home')}
            sx={{ fontSize: '1.3rem', fontWeight: 700, color: 'text.primary', textDecoration: 'none' }}
          >
            WorkSpace
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="ul"
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 3,
                listStyle: 'none',
                m: 0,
                p: 0,
                alignItems: 'center',
              }}
            >
              {navItems.map((item) => (
                <li key={item.id}>
                  <Button
                    onClick={() => handleNavClick(item.id)}
                    sx={{
                      color: 'text.primary',
                      fontWeight: 500,
                      position: 'relative',
                      '&:hover': { backgroundColor: 'transparent' },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -2,
                        left: 0,
                        width: isActive(item.id) ? '100%' : 0,
                        height: '2px',
                        bgcolor: 'warning.main',
                        transition: 'width 0.3s ease',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </li>
              ))}
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', ml: 2 }}>
              <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <Button variant="contained" color="warning" sx={{ fontWeight: 500, ml: 1 }}>
                Get Started
              </Button>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', ml: 2 }}>
              <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <IconButton sx={{ ml: 1 }} onClick={() => setMobileOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <Drawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        anchor="left"
        BackdropProps={{ sx: { backdropFilter: 'blur(10px)', backgroundColor: 'rgba(0,0,0,0.1)' } }}
        PaperProps={{
          sx: {
            width: { xs: '80vw', md: 250 },
            backgroundColor: theme.palette.mode === 'dark'
              ? 'rgba(33,33,33,0.8)'
              : 'rgba(255,255,255,0.8)',
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

// --- Hero Section with Responsive Layout ---
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
      id="home"
      sx={{
        mt: 10,
        width: '100%',
        overflowX: 'hidden',
        backgroundColor: '#1976d2',
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
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
          py: 4,
        }}
      >
        <Box
          sx={{
            flex: '1 1 50%',
            maxWidth: { xs: '100%', md: '650px' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: { xs: 'center', md: 'left' },
            p: 3,
            color: '#fff',
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3rem' }, fontWeight: 700, mb: 2 }}>
            Streamline Your Workspace
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, mb: 4, fontWeight: 300, lineHeight: 1.6 }}>
            Boost productivity with our intelligent workspace management system.
            Organize tasks, collaborate seamlessly, and analyze performance all in one place.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Button variant="contained" color="warning" sx={{ fontWeight: 500, padding: '12px 20px', fontSize: '1rem', color: '#fff', textTransform: 'none' }} startIcon={<ArrowForwardIcon />}>
              Start Free Trial
            </Button>
            <Button variant="outlined" sx={{ color: '#fff', borderColor: '#fff', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }, fontWeight: 500, padding: '12px 20px', fontSize: '1rem', textTransform: 'none' }} startIcon={<PlayCircleOutlineIcon />}>
              Watch Demo
            </Button>
          </Box>
        </Box>
        <Box
          sx={{ flex: '1 1 50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
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
              transition: 'transform 0.2s ease-out',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

// --- Features Section ---
const FeaturesSection = () => {
  const features = [
    {
      icon: <DashboardIcon fontSize="large" />,
      title: 'Smart Dashboard',
      description: 'Get a comprehensive overview of your workspace with customizable widgets and real-time updates.'
    },
    {
      icon: <TasksIcon fontSize="large" />,
      title: 'Task Management',
      description: 'Organize tasks with deadlines, priorities, and assignees. Track progress and get reminders.'
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

  return (
    <Box component="section" sx={{ py: 8, backgroundColor: 'background.default' }} id="features">
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6, position: 'relative' }}>
          <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 700, mb: 2 }}>
            Powerful Features
          </Typography>
          <Box sx={{ position: 'absolute', width: 80, height: 4, backgroundColor: 'warning.main', bottom: -10, left: '50%', transform: 'translateX(-50%)' }}/>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: 4 }}>
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: '8px',
                boxShadow: 1,
                p: 4,
                textAlign: 'center',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': { transform: 'translateY(-10px)', boxShadow: 3 },
                flex: '1 1 auto',
                maxWidth: { xs: '100%', md: '23%' },
                mb: { xs: 4, md: 0 }
              }}
            >
              <Box sx={{ color: 'primary.main', mb: 3 }}>
                {feature.icon}
              </Box>
              <Typography variant="h3" sx={{ fontSize: '1.3rem', mb: 2, fontWeight: 600 }}>
                {feature.title}
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

// --- How It Works Section (Responsive Timeline without Images) ---
const HowItWorksSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const steps = [
    {
      number: '01',
      title: 'Sign Up & Customize',
      description: 'Create your account and customize your workspace to match your team’s requirements.'
    },
    {
      number: '02',
      title: 'Invite Your Team',
      description: 'Add team members, assign roles, and set permissions for smooth collaboration.'
    },
    {
      number: '03',
      title: 'Start Managing Projects',
      description: 'Create projects, assign tasks, set milestones, and track progress in one platform.'
    }
  ];

  if (isMobile) {
    // Vertical layout for mobile view with adjusted small circle and neat spacing.
    return (
      <Box component="section" sx={{ py: 8, backgroundColor: 'background.paper' }} id="how-it-works">
        <Container>
          <Box sx={{ textAlign: 'center', mb: 4, position: 'relative' }}>
            <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 700, mb: 2 }}>
              How It Works
            </Typography>
            <Box sx={{ position: 'absolute', width: 80, height: 4, backgroundColor: 'warning.main', bottom: -10, left: '50%', transform: 'translateX(-50%)' }}/>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 2 }}>
                  <Box sx={{ 
                    width: 30, 
                    height: 30, 
                    borderRadius: '50%', 
                    backgroundColor: 'warning.main', 
                    color: 'white', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '0.8rem'
                  }}>
                    {step.number}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ mb: 0.5 }}>{step.title}</Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                      {step.description}
                    </Typography>
                  </Box>
                </Box>
                {index !== steps.length - 1 && (
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <MoreHorizIcon 
                      sx={{ transform: 'rotate(90deg)', color: 'warning.main' }} 
                      fontSize="medium" 
                    />
                  </Box>
                )}
              </React.Fragment>
            ))}
          </Box>
        </Container>
      </Box>
    );
  }

  // Horizontal layout for larger screens without images
  return (
    <Box component="section" sx={{ py: 8, backgroundColor: 'background.paper' }} id="how-it-works">
      <Container>
        <Box sx={{ textAlign: 'center', mb: 4, position: 'relative' }}>
          <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 700, mb: 2 }}>
            How It Works
          </Typography>
          <Box sx={{ position: 'absolute', width: 80, height: 4, backgroundColor: 'warning.main', bottom: -10, left: '50%', transform: 'translateX(-50%)' }}/>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <Box sx={{ flex: 1, textAlign: 'center', px: 2 }}>
                <Box sx={{ 
                  width: 60, 
                  height: 60, 
                  borderRadius: '50%', 
                  backgroundColor: 'warning.main', 
                  color: 'white', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontWeight: 'bold', 
                  fontSize: '1.2rem', 
                  mx: 'auto' 
                }}>
                  {step.number}
                </Box>
                <Typography variant="h6" sx={{ mt: 2 }}>{step.title}</Typography>
                <Typography sx={{ mt: 1, color: 'text.secondary', fontSize: '0.9rem' }}>
                  {step.description}
                </Typography>
              </Box>
              {index !== steps.length - 1 && (
                <Box sx={{ mx: 1, display: 'flex', alignItems: 'center' }}>
                  <MoreHorizIcon color="warning" fontSize="large" />
                </Box>
              )}
            </React.Fragment>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

// --- Contact Section (Side-by-Side) ---
const ContactSection = () => {
  return (
    <Box component="section" sx={{ py: 8, backgroundColor: 'background.default' }} id="contact">
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          direction={{ xs: 'column', md: 'row' }}
          alignItems="stretch"
          justifyContent={{ xs: 'center', md: 'space-between' }}
        >
          {/* Left column: Get In Touch */}
          <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
            <Box sx={{ height: '100%', pl: { xs: 2, md: 4 } }}>
              <Typography variant="h2" sx={{ fontSize: '2rem', mb: 2 }}>
                Get In Touch
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.6, mb: 3 }}>
                Have questions or ready to transform your workspace? Our team is here to help you get started.
              </Typography>
              <List>
                <ListItem disableGutters sx={{ mb: 2 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <EmailIcon />
                    </Box>
                  </ListItemIcon>
                  <Typography>contact@workspace-system.com</Typography>
                </ListItem>
                <ListItem disableGutters sx={{ mb: 2 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <PhoneIcon />
                    </Box>
                  </ListItemIcon>
                  <Typography>+1 (555) 123-4567</Typography>
                </ListItem>
                <ListItem disableGutters sx={{ mb: 2 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <LocationIcon />
                    </Box>
                  </ListItemIcon>
                  <Typography>
                    123 Workspace Avenue, Suite 100<br />
                    San Francisco, CA 94107
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </Grid>

          {/* Right column: Contact Form */}
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Box
              sx={{
                backgroundColor: 'background.paper',
                p: { xs: 3, md: 4 },
                borderRadius: '12px',
                boxShadow: 2,
                mx: { xs: 'auto', md: 0 },
                width: { xs: '90%', sm: '80%', md: 'auto' },
              }}
            >
              <Typography
                variant="h3"
                sx={{ fontSize: '1.5rem', mb: 3, fontWeight: 600, textAlign: 'center' }}
              >
                Send Us a Message
              </Typography>
              <Box component="form">
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Full Name" placeholder="Your full name" variant="outlined" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Email Address" placeholder="Your email address" type="email" variant="outlined" />
                  </Grid>
                </Grid>
                <TextField fullWidth label="Subject" placeholder="Message subject" sx={{ mb: 2 }} variant="outlined" />
                <TextField
                  fullWidth
                  label="Your Message"
                  placeholder="Write your message here..."
                  multiline
                  rows={4}
                  sx={{ mb: 2 }}
                  variant="outlined"
                />
                <Button type="submit" variant="contained" fullWidth color="primary" size="large">
                  Submit Message
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};



const Footer = () => {
  const footerLinks = {
    company: ['About Us', 'Careers', 'Blog', 'Press Kit'],
    product: ['Features', 'Pricing', 'Integrations', 'Enterprise', 'Security'],
    resources: ['Documentation', 'Help Center', 'API', 'Community', 'Webinars'],
    legal: ['Terms of Service', 'Privacy Policy', 'GDPR', 'Cookie Policy']
  };

  return (
    <Box component="footer" sx={{ backgroundColor: 'grey.900', color: 'grey.300', py: 6 }}>
      <Container>
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h3" sx={{ fontSize: '1.2rem', mb: 3, fontWeight: 600 }}>
              WorkSpace
            </Typography>
            <Typography sx={{ color: 'grey.500', lineHeight: 1.6, mb: 3 }}>
              Our workspace management system helps teams organize tasks, collaborate effectively, and boost productivity with intelligent tools and analytics.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button sx={{ minWidth: 35, height: 35, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', color: 'grey.100', '&:hover': { backgroundColor: 'primary.main' } }}>
                <FacebookIcon fontSize="small" />
              </Button>
              <Button sx={{ minWidth: 35, height: 35, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', color: 'grey.100', '&:hover': { backgroundColor: 'primary.main' } }}>
                <TwitterIcon fontSize="small" />
              </Button>
              <Button sx={{ minWidth: 35, height: 35, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', color: 'grey.100', '&:hover': { backgroundColor: 'primary.main' } }}>
                <LinkedInIcon fontSize="small" />
              </Button>
              <Button sx={{ minWidth: 35, height: 35, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', color: 'grey.100', '&:hover': { backgroundColor: 'primary.main' } }}>
                <InstagramIcon fontSize="small" />
              </Button>
            </Box>
          </Grid>
          {Object.entries(footerLinks).map(([title, links]) => (
            <Grid item xs={6} md={2} key={title}>
              <Typography variant="h3" sx={{ fontSize: '1.2rem', mb: 3, fontWeight: 600 }}>
                {title.charAt(0).toUpperCase() + title.slice(1)}
              </Typography>
              <List dense sx={{ p: 0 }}>
                {links.map((link, index) => (
                  <ListItem key={index} disableGutters sx={{ mb: 1 }}>
                    <Button href="#" sx={{ color: 'grey.500', textTransform: 'none', justifyContent: 'flex-start', p: 0, '&:hover': { color: 'warning.main' } }}>
                      {link}
                    </Button>
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ backgroundColor: 'grey.800', my: 4 }} />
        <Typography sx={{ textAlign: 'center', color: 'grey.600', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} WorkSpace Management System. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

// --- Landing Page Content ---
const LandingPageContent = () => (
  <>
    <Header />
    <HeroSection />
    <FeaturesSection />
    <HowItWorksSection />
    <ContactSection />
    <Footer />
  </>
);

// --- Main Component with Dark/Light Theme Toggle ---
const LandingPage = () => {
  const [mode, setMode] = React.useState('light');

  const colorMode = React.useMemo(() => ({
    toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }), []);

  const theme = React.useMemo(() =>
    createTheme({
      palette: {
        mode,
        primary: { main: mode === 'light' ? '#1976d2' : '#90caf9' },
        secondary: { main: mode === 'light' ? '#ffc107' : '#ffb300' },
        warning: { main: '#ffc107' },
        background: { default: mode === 'light' ? '#f0f2f5' : '#121212', paper: mode === 'light' ? '#ffffff' : '#1e1e1e' }
      },
      typography: { fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }
    }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LandingPageContent />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default LandingPage;
