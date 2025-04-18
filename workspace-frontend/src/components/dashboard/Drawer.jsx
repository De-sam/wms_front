import React, { useContext, useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Workspaces as WorkspacesIcon,
  BookOnline as BookOnlineIcon,
  People as PeopleIcon,
  BarChart as BarChartIcon,
  ExpandLess,
  ExpandMore,
  Add as AddIcon,
  ViewList as ViewListIcon,
  Tune as TuneIcon,
  Close as CloseIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useNavigate, useLocation } from 'react-router-dom';
import ColorModeContext from '../../context/ColorModeContext';

const drawerWidth = 300;

const Sidebar = ({ open, onClose }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();
  const location = useLocation();

  const orgName = localStorage.getItem('org_name') || 'Workspace';
  const shortcode = localStorage.getItem('shortcode') || '';

  const [workspaceOpen, setWorkspaceOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(`/${shortcode}/dashboard/${path}`);
  };

  // Get active path segment (after /dashboard/)
  const currentPath = location.pathname.split(`/${shortcode}/dashboard/`)[1] || '';

  const isActive = (targetPath) => currentPath === targetPath;

  const glassStyles = {
    background:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(135deg, rgba(33,33,33,0.2), rgba(0,0,0,0.2))'
        : 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(240,240,240,0.2))',
    backdropFilter: 'blur(25px)',
    WebkitBackdropFilter: 'blur(25px)',
    boxShadow: '4px 0 10px rgba(0, 255, 255, 0.2)',
    border:
      theme.palette.mode === 'dark'
        ? 'none'
        : '1px solid rgba(255,255,255,0.3)',
    borderRadius: 2,
    color: theme.palette.text.primary,
  };

  const renderProfileSection = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', ml: 2, mt: 2 }}>
      <Avatar sx={{ width: 50, height: 50, mr: 2 }}>E</Avatar>
      <Typography variant="h6" fontWeight="bold" sx={{ color: theme.palette.text.primary }}>
        Employee
      </Typography>
    </Box>
  );

  const renderDrawerContent = (isMobile = false) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 2 }}>
      {isMobile && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={onClose}>
            <CloseIcon sx={{ color: theme.palette.text.primary }} />
          </IconButton>
        </Box>
      )}

      {/* Logo + Org Name */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 1 }}>
        <Avatar variant="rounded" sx={{
          width: 64,
          height: 64,
          mb: 1,
          bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.200',
          fontSize: 20,
          fontWeight: 'bold',
          color: theme.palette.text.primary,
        }}>
          LOGO
        </Avatar>
        <Typography variant="h6" fontWeight="bold" sx={{ textAlign: 'center', color: theme.palette.text.primary }}>
          {orgName}
        </Typography>
      </Box>

      <Box sx={{ mt: 4, pl: 2 }}>
        <Typography variant="body2" color="text.secondary">Workspace Management System</Typography>
      </Box>

      <Box sx={{ mt: 2 }}>
        <List>
          {/* Dashboard */}
          <ListItem
            button
            onClick={() => navigate(`/${shortcode}/dashboard`)}
            sx={{
              px: 2, py: 0.5, mb: 1, borderRadius: 1,
              backgroundColor: location.pathname === `/${shortcode}/dashboard` ? 'rgba(0,150,255,0.2)' : 'transparent',
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.05)' },
            }}
          >
            <ListItemIcon sx={{ minWidth: 'auto', mr: 1 }}><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

          {/* Workspaces */}
          <ListItem
            button
            onClick={() => setWorkspaceOpen(!workspaceOpen)}
            sx={{
              px: 2, py: 0.5, mb: 1, borderRadius: 1,
              backgroundColor: workspaceOpen ? 'rgba(0,150,255,0.1)' : 'transparent',
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.05)' },
            }}
          >
            <ListItemIcon sx={{ minWidth: 'auto', mr: 1 }}><WorkspacesIcon /></ListItemIcon>
            <ListItemText primary="Workspaces" />
            {workspaceOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={workspaceOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 4 }}>
              <ListItem button onClick={() => handleNavigate('workspaces')} selected={isActive('workspaces')}>
                <ListItemIcon><ViewListIcon /></ListItemIcon>
                <ListItemText primary="All Workspaces" />
              </ListItem>
              <ListItem button onClick={() => handleNavigate('workspaces/add')} selected={isActive('workspaces/add')}>
                <ListItemIcon><AddIcon /></ListItemIcon>
                <ListItemText primary="Add New Workspace" />
              </ListItem>
              <ListItem button onClick={() => handleNavigate('workspaces/availability')} selected={isActive('workspaces/availability')}>
                <ListItemIcon><TuneIcon /></ListItemIcon>
                <ListItemText primary="Availability Settings" />
              </ListItem>
            </List>
          </Collapse>

          {/* Bookings */}
          <ListItem button onClick={() => handleNavigate('bookings')} selected={isActive('bookings')}>
            <ListItemIcon><BookOnlineIcon /></ListItemIcon>
            <ListItemText primary="Bookings" />
          </ListItem>

          {/* Users */}
          <ListItem button onClick={() => handleNavigate('users')} selected={isActive('users')}>
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>

          {/* Reports */}
          <ListItem button onClick={() => handleNavigate('reports/revenue')} selected={isActive('reports/revenue')}>
            <ListItemIcon><BarChartIcon /></ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
        </List>
      </Box>

      {/* Dark Mode */}
      <Box sx={{ mt: 'auto' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
          <Tooltip title={theme.palette.mode === 'dark' ? 'Turn on the light' : 'Turn off the light'}>
            <IconButton onClick={colorMode.toggleColorMode} sx={{ color: theme.palette.text.primary }}>
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Tooltip>
        </Box>
        <Box
          sx={{
            borderTop: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
            mt: 2, pt: 2,
          }}
        />
        {renderProfileSection()}
      </Box>
    </Box>
  );

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            ...glassStyles,
          },
        }}
        open
      >
        {renderDrawerContent()}
      </Drawer>

      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          zIndex: 1600,
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: theme.palette.background.paper,
          },
        }}
      >
        {renderDrawerContent(true)}
      </Drawer>
    </>
  );
};

export default Sidebar;
