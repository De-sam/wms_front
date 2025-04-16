import React from 'react';
import { Box, Typography, TextField, Button, Alert, CircularProgress, Link } from '@mui/material';

const LoginForm = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  loading,
  alert,
  onSwitch,
}) => {
  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        width: '100%',
        maxWidth: 400,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" align="center" fontWeight="bold" sx={{ mb: 1 }}>
        Log In
      </Typography>
      {alert.open && (
        <Alert severity={alert.severity} sx={{ width: '100%', mb: 2 }}>
          {alert.message}
        </Alert>
      )}
      <TextField
        label="Email Address"
        variant="standard"
        fullWidth
        required
        autoFocus
        value={email}
        onChange={onEmailChange}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Password"
        variant="standard"
        type="password"
        fullWidth
        required
        value={password}
        onChange={onPasswordChange}
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }} disabled={loading} fullWidth>
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Log In'}
      </Button>
      <Typography sx={{ mt: 2 }}>
        Don’t have an account?{' '}
        <Link component="button" variant="body2" onClick={onSwitch}>
          Sign up
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginForm;
