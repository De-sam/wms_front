import React from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  useTheme
} from '@mui/material';
import Header from '../components/landingPage/Header'; // adjust the path as needed

const SignUp = () => {
  const theme = useTheme();

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
        <Container
          maxWidth="xl"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Paper
            elevation={4}
            sx={{
              width: '100%',
              minHeight: { xs: 'auto', md: 800 },
              borderRadius: 3,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' }
            }}
          >
            {/* Left Side: Logo Section */}
            <Box
              sx={{
                flex: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.primary.main
                    : theme.palette.primary.dark,
                color: (theme) =>
                  theme.palette.getContrastText(
                    theme.palette.mode === 'light'
                      ? theme.palette.primary.main
                      : theme.palette.primary.dark
                  ),
                p: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center'
              }}
            >
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
              >
                Workspace
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 2, opacity: 0.8 }}>
                Collaborate and grow your organization
              </Typography>
            </Box>

            {/* Right Side: Sign Up Form */}
            <Box
              sx={{
                flex: 1,
                backgroundColor: theme.palette.background.paper,
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: { xs: 3, md: 6 }
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  maxWidth: 400,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <Typography
                  variant="h4"
                  align="center"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: '1.5rem', md: '2.125rem' } }}
                >
                  Create Your Workspace Account
                </Typography>
                <Box component="form" noValidate sx={{ mt: 3, width: '100%' }}>
                  <TextField
                    label="Organization Name"
                    fullWidth
                    required
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    label="Email Address"
                    fullWidth
                    required
                    type="email"
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mt: 2
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{ px: 4 }}
                    >
                      Sign Up
                    </Button>
                  </Box>
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
