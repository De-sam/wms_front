import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { getTheme } from './theme/theme';
import ColorModeContext from './context/ColorModeContext';

import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp'; // make sure this file exists

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
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
