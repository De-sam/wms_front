import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/Drawer';
import DashHead from '../components/dashboard/DashHead';

const drawerWidth = 300;
const topbarHeight = 100; // 👈 height of DashHead (Toolbar)

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
            pt: '100px', // Push content down by AppBar height
            px: { xs: 2, sm: 4 },
            pb: 4,
            flexGrow: 1,
            overflowY: 'auto',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
