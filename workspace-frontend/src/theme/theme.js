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
        primary: mode === 'light' ? '#333' : '#fff',        // flip text
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
    },
  });
