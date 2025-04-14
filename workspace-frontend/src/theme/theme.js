import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#1976d2', // Always blue
      },
      secondary: {
        main: '#ffc107', // Always amber
      },
      warning: {
        main: '#ffc107',
      },
      background: {
        default: mode === 'light' ? '#f5f5f5' : '#121212',  // page bg
        paper: mode === 'light' ? '#ffffff' : '#1e1e1e',    // cards/forms
      },
      text: {
        primary: mode === 'light' ? '#333' : '#fff',        // default text color
        secondary: mode === 'light' ? '#666' : '#bbb',
      },
    },
    typography: {
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            textTransform: 'none',
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            // Use a dark glass background in both modes for the slider so white text is visible.
            backgroundColor: mode === 'dark'
              ? 'rgba(33, 33, 33, 0.8)'
              : 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(15px)',
            color: '#fff', // Force white text in the drawer
            boxShadow: 'none',
          },
        },
      },
    },
  });
