// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from './theme/theme';
import ColorModeContext from './context/ColorModeContext';

import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import Auth from './pages/Auth';
import ActivateAccount from './pages/ActivateAccount';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/auth/ProtectedRoute'; // ✅ Add this

const App = () => {
  const [mode, setMode] = React.useState('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light')),
    }),
    []
  );

  const theme = React.useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/:shortcode/login" element={<Auth />} />
          <Route path="/activate/:token" element={<ActivateAccount />} />

          {/* ✅ Protect the dashboard route */}
          <Route
            path="/:shortcode/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
