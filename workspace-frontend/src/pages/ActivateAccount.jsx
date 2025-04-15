import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  CircularProgress,
  useTheme,
  Paper
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ActivateAccount = () => {
  const { token } = useParams();
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const activateAccount = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/organisations/activate/${token}`);
        const data = await response.json();

        if (response.ok) {
          setSuccess(true);
          setMessage('Your account has been activated. Check your email for your login credentials.');
        } else {
          setSuccess(false);
          setMessage(data?.detail || 'Activation failed. Please try again.');
        }
      } catch (err) {
        setSuccess(false);
        setMessage('Network error occurred during activation.');
      } finally {
        setLoading(false);
      }
    };

    activateAccount();
  }, [token]);

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
            <Typography>
              {message}
            </Typography>
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
