import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
  CircularProgress,
  useTheme
} from '@mui/material';
import Header from '../components/landingPage/Header';

const SignUp = () => {
  const theme = useTheme();
  const [organizationName, setOrganizationName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ open: false, message: '', severity: 'info' });

  const handleClose = () => {
    setAlert({ ...alert, open: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert({ open: false, message: '', severity: 'info' });

    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/organizations/signup/`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          organization_name: organizationName,
          email: email
        })
      });

      const data = await response.json();

      if (response.ok) {
        setAlert({ open: true, message: '🎉 Signup successful!', severity: 'success' });
        setOrganizationName('');
        setEmail('');
      } else {
        setAlert({ open: true, message: data?.detail || 'Signup failed', severity: 'error' });
      }
    } catch (error) {
      console.error('❌ Signup error:', error);
      setAlert({ open: true, message: 'Network or server error.', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: theme.palette.background.default,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pt: { xs: 10, md: 12 },
          pb: 4
        }}
      >
        <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Paper
            elevation={4}
            sx={{
              width: '100%',
              minHeight: { xs: 'auto', md: 800 },
              borderRadius: 3,
              overflow: 'hidden',
              position: 'relative',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' }
            }}
          >
            {/* Curvy Divider */}
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                transform: 'translateX(-50%)',
                width: 100,
                display: { xs: 'none', md: 'block' },
                zIndex: 1
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 800"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 0 0 Q 50 100 0 200 Q 50 300 0 400 Q 50 500 0 600 Q 50 700 0 800 L 100 800 L 100 0 Z"
                  fill={theme.palette.background.default}
                />
              </svg>
            </Box>

            {/* Left: Logo Section */}
            <Box
              sx={{
                flex: 1,
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.getContrastText(theme.palette.primary.main),
                p: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                zIndex: 2
              }}
            >
              <Typography variant="h3" fontWeight="bold" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
                Workspace
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 2, opacity: 0.8 }}>
                Collaborate and grow your organization
              </Typography>
            </Box>

            {/* Right: Sign Up Form */}
            <Box
              sx={{
                flex: 1,
                backgroundColor: theme.palette.background.paper,
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: { xs: 3, md: 6 },
                zIndex: 2
              }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ width: '100%', maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <Typography
                  variant="h4"
                  align="center"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: '1.5rem', md: '2.125rem' }, mb: 1 }}
                >
                  Create Your Workspace Account
                </Typography>

                {alert.open && (
                  <Alert severity={alert.severity} sx={{ width: '100%', mb: 2 }} onClose={handleClose}>
                    {alert.message}
                  </Alert>
                )}

                <TextField
                  label="Organization Name"
                  fullWidth
                  required
                  variant="standard"
                  value={organizationName}
                  onChange={(e) => setOrganizationName(e.target.value)}
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Email Address"
                  fullWidth
                  required
                  type="email"
                  variant="standard"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ mb: 2 }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, width: '100%' }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ px: 4 }}
                    disabled={loading}
                    fullWidth
                  >
                    {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign Up'}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default SignUp;
