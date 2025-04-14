import React from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper
} from '@mui/material';
import Header from '../components/landingPage/Header'; // adjust the path as needed

const SignUp = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? '#f5f5f5' : 'background.default',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pt: { xs: 10, md: 12 }, // Add padding top to avoid header overlap
          pb: 4
        }}
      >
        <Container maxWidth="sm">
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
            <Typography variant="h4" gutterBottom align="center">
              Create Your Workspace Account
            </Typography>

            <Box component="form" noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Organization Name"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email Address"
                    fullWidth
                    required
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                  >
                    Sign Up
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default SignUp;
