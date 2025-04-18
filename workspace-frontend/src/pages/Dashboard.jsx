import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom'; // ✅ for nested routing
import Sidebar from '../components/dashboard/Drawer';
import DashHead from '../components/dashboard/DashHead';

const drawerWidth = 300;

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'background.default' }}>
      {/* Sidebar */}
      <Sidebar open={mobileOpen} onClose={handleDrawerToggle} />

      {/* Main Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { xs: '100%', sm: `calc(100% - ${drawerWidth}px)` },
          ml: { xs: 0, sm: `${drawerWidth}px` },
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Topbar */}
        <DashHead handleDrawerToggle={handleDrawerToggle} />

        {/* Page Content */}
        <Box
          sx={{
            mt: { xs: '40px', sm: '60px' },
            px: { xs: 2, sm: 4 },
            py: 4,
            flexGrow: 1,
            overflowY: 'auto',
          }}
        >
          <Outlet /> {/* ✅ Nested route components will render here */}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
