import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  CircularProgress,
  useTheme,
  Paper
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import axios from 'axios';

const ActivateAccount = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const activateAccount = async () => {
      const pathParts = window.location.pathname.split('/');
      const token = pathParts[pathParts.length - 1]; // Get token from URL

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/organisations/activate/${token}/`
        );

        setSuccess(true);
        setMessage('Your account has been activated. Check your email for your login credentials.');
      } catch (error) {
        setSuccess(false);

        if (error.response) {
          console.error('🔥 Backend error:', error.response);
          setMessage(error.response.data?.detail || 'Activation failed. Please try again.');
        } else {
          console.error('🔥 Network error:', error.message);
          setMessage('Network error occurred during activation.');
        }
      } finally {
        setLoading(false);
      }
    };

    activateAccount();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#0f172a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#0f172a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          maxWidth: 400,
          width: '100%',
          borderRadius: 3,
          textAlign: 'center',
          backgroundColor: '#1e293b',
          color: '#ffffff'
        }}
      >
        {success ? (
          <>
            <CheckCircleIcon sx={{ fontSize: 64, color: '#facc15', mb: 2 }} />
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Activation Successful
            </Typography>
            <Typography>{message}</Typography>
          </>
        ) : (
          <>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Activation Failed
            </Typography>
            <Typography>{message}</Typography>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default ActivateAccount;
