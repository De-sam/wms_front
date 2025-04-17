import React, { useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from '../components/dashboard/Drawer';
import DashHead from '../components/dashboard/DashHead';

const drawerWidth = 300;

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'background.default' }}>
      <Sidebar open={mobileOpen} onClose={handleDrawerToggle} />

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
        <DashHead handleDrawerToggle={handleDrawerToggle} />
        <Box
          sx={{
            mt: { xs: '100px', sm: '100px' },
            px: { xs: 2, sm: 4 },
            py: 4,
            flexGrow: 1,
          }}
        >
          <h2>Welcome to the Dashboard!</h2>
          <p>This is where your main content will live.</p>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
