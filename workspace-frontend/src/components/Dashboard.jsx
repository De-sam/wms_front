import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Sidebar from './dashboard/Drawer';
import DashHead from './dashboard/DashHead';

const drawerWidth = 300;

const Dashboard = () => {
  // State to control mobile drawer visibility
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar/Drawer - Full Height */}
      <Sidebar open={mobileOpen} onClose={handleDrawerToggle} />

      {/* Main content area including header and page content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { xs: 0, md: `${drawerWidth}px` },
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
        }}
      >
        {/* Header - spans full width to the right of sidebar */}
        <DashHead handleDrawerToggle={handleDrawerToggle} />

        {/* Dashboard Content */}
      </Box>
    </Box>
  );
};

export default Dashboard;
