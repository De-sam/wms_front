import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from './theme/theme';
import ColorModeContext from './context/ColorModeContext';

// Public pages
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import Auth from './pages/Auth';
import ActivateAccount from './pages/ActivateAccount';

// Dashboard layout and protected route
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Dashboard child pages
import DashboardHome from './pages/dashboardHome/DashboardHome';
import AllWorkspaces from './pages/workspaces/AllWorkspaces';
import AddWorkspace from './pages/workspaces/AddWorkspace';
import AvailabilitySettings from './pages/workspaces/AvailabilitySettings';
import AllBookings from './pages/bookings/AllBookings';
import BookingRules from './pages/bookings/BookingRules';
import AllUsers from './pages/users/AllUsers';
import AddUser from './pages/users/AddUser';
import RevenueReports from './pages/reports/RevenueReports';
import UsageReports from './pages/reports/UsageReports';

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
          {/* 🌍 Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/:shortcode/login" element={<Auth />} />
          <Route path="/activate/:token" element={<ActivateAccount />} />

          {/* 🛡️ Protected Dashboard & Nested Routes */}
          <Route
            path="/:shortcode/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardHome />} />
            <Route path="workspaces" element={<AllWorkspaces />} />
            <Route path="workspaces/add" element={<AddWorkspace />} />
            <Route path="workspaces/availability" element={<AvailabilitySettings />} />
            <Route path="bookings" element={<AllBookings />} />
            <Route path="bookings/rules" element={<BookingRules />} />
            <Route path="users" element={<AllUsers />} />
            <Route path="users/add" element={<AddUser />} />
            <Route path="reports/revenue" element={<RevenueReports />} />
            <Route path="reports/usage" element={<UsageReports />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
