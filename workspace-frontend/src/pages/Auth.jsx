import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Paper,
  Snackbar,
  Alert,
  useTheme,
  useMediaQuery
} from '@mui/material';
import Header from '../components/landingPage/Header';
import InfoPanel from '../components/auth/InfoPanel';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';

const Auth = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const headerHeight = 64;
  const { shortcode } = useParams();

  const [mode, setMode] = useState(isMobile ? 'login' : null);
  const effectiveMode = mode || 'login';

  const [orgInfo, setOrgInfo] = useState(null);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginAlert, setLoginAlert] = useState({ open: false, message: '', severity: 'info' });
  const [showToast, setShowToast] = useState(false);
  const [signupOrg, setSignupOrg] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupLoading, setSignupLoading] = useState(false);
  const [signupAlert, setSignupAlert] = useState({ open: false, message: '', severity: 'info' });

  useEffect(() => {
    const fetchOrgInfo = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/organizations/${shortcode}/profile/`);
        const data = await res.json();
        setOrgInfo(data);
      } catch (err) {
        console.error('Failed to load organization info:', err);
      }
    };
    fetchOrgInfo();
  }, [shortcode]);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginAlert({ open: false, message: '', severity: 'info' });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/${shortcode}/admin/login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Login failed.');
      }

      setShowToast(true);

    } catch (error) {
      setLoginAlert({ open: true, message: error.message, severity: 'error' });
    }

    setLoginLoading(false);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setSignupLoading(true);
    setSignupAlert({ open: false, message: '', severity: 'info' });

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSignupAlert({ open: true, message: 'Signup complete!', severity: 'success' });
    setSignupLoading(false);
    setMode('login');
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pt: { xs: `${headerHeight}px`, md: 12 },
          pb: { xs: 2, md: 4 },
        }}
      >
        <Container maxWidth="lg">
          <Paper
            elevation={4}
            sx={{
              position: 'relative',
              height: { xs: `calc(100vh - ${headerHeight}px)`, md: '800px' },
              minHeight: { xs: `calc(100vh - ${headerHeight}px)`, md: '800px' },
              borderTopLeftRadius: { xs: theme.shape.borderRadius, md: 3 },
              borderTopRightRadius: { xs: theme.shape.borderRadius, md: 3 },
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                position: 'absolute',
                top: 0,
                left: effectiveMode === 'login' ? '0%' : '50%',
                width: '50%',
                height: '100%',
                transition: 'left 0.5s ease-in-out',
                backgroundColor: theme.palette.background.paper,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 6,
                borderTopLeftRadius: effectiveMode === 'login' ? theme.shape.borderRadius : 0,
                borderBottomLeftRadius: effectiveMode === 'login' ? theme.shape.borderRadius : 0,
                borderTopRightRadius: effectiveMode === 'signup' ? theme.shape.borderRadius : 0,
                borderBottomRightRadius: effectiveMode === 'signup' ? theme.shape.borderRadius : 0,
              }}
            >
              {orgInfo && (
                <h2 style={{ marginBottom: '1rem' }}>Welcome to {orgInfo.name}</h2>
              )}
              {effectiveMode === 'login' ? (
                <LoginForm
                  email={loginEmail}
                  password={loginPassword}
                  onEmailChange={(e) => setLoginEmail(e.target.value)}
                  onPasswordChange={(e) => setLoginPassword(e.target.value)}
                  onSubmit={handleLoginSubmit}
                  loading={loginLoading}
                  alert={loginAlert}
                  onSwitch={() => setMode('signup')}
                />
              ) : (
                <SignupForm
                  orgName={signupOrg}
                  email={signupEmail}
                  onOrgChange={(e) => setSignupOrg(e.target.value)}
                  onEmailChange={(e) => setSignupEmail(e.target.value)}
                  onSubmit={handleSignupSubmit}
                  loading={signupLoading}
                  alert={signupAlert}
                  onSwitch={() => setMode('login')}
                />
              )}
            </Box>

            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                position: 'absolute',
                top: 0,
                height: '100%',
                width: '50%',
                zIndex: 2,
                transition: 'left 0.5s ease-in-out',
                left: effectiveMode === 'login' ? '50%' : '0%',
                borderTopRightRadius: effectiveMode === 'login' ? theme.shape.borderRadius : 0,
                borderBottomRightRadius: effectiveMode === 'login' ? theme.shape.borderRadius : 0,
                borderTopLeftRadius: effectiveMode === 'signup' ? theme.shape.borderRadius : 0,
                borderBottomLeftRadius: effectiveMode === 'signup' ? theme.shape.borderRadius : 0,
              }}
            >
              <InfoPanel isLogin={effectiveMode === 'login'} orgInfo={orgInfo} />
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', height: '100%' }}>
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  width: '100%',
                  height: '25%',
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    color: theme.palette.primary.contrastText,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    px: 2,
                  }}
                >
                  {mode === 'login'
                    ? `Welcome back to ${orgInfo?.name || 'your workspace'}!`
                    : 'Join us! Sign up to get started.'}
                </Box>
              </Box>

              {mode && (
                <Box
                  sx={{
                    position: 'relative',
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: theme.palette.background.paper,
                    borderTopLeftRadius: theme.shape.borderRadius,
                    borderTopRightRadius: theme.shape.borderRadius,
                    p: 2,
                    animation: 'slideIn 0.5s forwards',
                    '@keyframes slideIn': {
                      from: { transform: 'translateY(100%)' },
                      to: { transform: 'translateY(0)' },
                    },
                  }}
                >
                  {mode === 'login' ? (
                    <LoginForm
                      email={loginEmail}
                      password={loginPassword}
                      onEmailChange={(e) => setLoginEmail(e.target.value)}
                      onPasswordChange={(e) => setLoginPassword(e.target.value)}
                      onSubmit={handleLoginSubmit}
                      loading={loginLoading}
                      alert={loginAlert}
                      onSwitch={() => setMode('signup')}
                    />
                  ) : (
                    <SignupForm
                      orgName={signupOrg}
                      email={signupEmail}
                      onOrgChange={(e) => setSignupOrg(e.target.value)}
                      onEmailChange={(e) => setSignupEmail(e.target.value)}
                      onSubmit={handleSignupSubmit}
                      loading={signupLoading}
                      alert={signupAlert}
                      onSwitch={() => setMode('login')}
                    />
                  )}
                </Box>
              )}
            </Box>
          </Paper>
        </Container>
      </Box>

      <Snackbar
        open={showToast}
        autoHideDuration={3000}
        onClose={() => setShowToast(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setShowToast(false)} severity="success" sx={{ width: '100%' }}>
          🎉 Successfully logged in!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Auth;
