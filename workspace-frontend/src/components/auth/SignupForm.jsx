import React from 'react';
import { Box, Typography, TextField, Button, Link } from '@mui/material';

const SignupForm = ({
  orgName,
  email,
  fullName,
  phone,
  onOrgChange,
  onEmailChange,
  onFullNameChange,
  onPhoneChange,
  onSwitch,
  onSubmit,
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
        Create Your Workspace Account
      </Typography>

      <TextField
        label="Full Name"
        variant="standard"
        fullWidth
        required
        value={fullName}
        onChange={onFullNameChange}
        sx={{ mb: 2 }}
      />

      <TextField
        label="Phone Number"
        variant="standard"
        fullWidth
        required
        value={phone}
        onChange={onPhoneChange}
        sx={{ mb: 2 }}
      />

      <TextField
        label="Organization Name"
        variant="standard"
        fullWidth
        required
        value={orgName}
        onChange={onOrgChange}
        sx={{ mb: 2 }}
      />

      <TextField
        label="Email Address"
        variant="standard"
        type="email"
        fullWidth
        required
        value={email}
        onChange={onEmailChange}
        sx={{ mb: 2 }}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        sx={{ px: 4, mt: 2 }}
        fullWidth
      >
        Sign Up
      </Button>

      <Typography sx={{ mt: 2 }}>
        Already have an account?{' '}
        <Link component="button" variant="body2" onClick={onSwitch}>
          Log in
        </Link>
      </Typography>
    </Box>
  );
};

export default SignupForm;
