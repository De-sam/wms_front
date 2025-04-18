import React, { useContext, useState } from 'react';
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
  Switch,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
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
  Brightness7 as Brightness7Icon,
  Brightness4 as Brightness4Icon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import ColorModeContext from '../../context/ColorModeContext';

const drawerWidth = 300;

// Enhanced Styled Switch for centered thumb icons
const IconSwitch = styled(Switch)(({ theme }) => ({
  width: 80,
  height: 44,
  padding: 9,

  // position & slide logic
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    zIndex: 1,
    transform: 'translateX(0)',
    '&.Mui-checked': { transform: 'translateX(36px)' },
  },

  // thumb container
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 40,
    height: 40,
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },

  // default (sun) icon color
  '& .MuiSwitch-thumb svg': {
    fontSize: 32,
    color:
      theme.palette.mode === 'light'
        ? theme.palette.warning.dark     // sun in light mode
        : theme.palette.grey[100],       // sun in dark mode (faded)
    transition: theme.transitions.create('color'),
  },

  // checked (moon) icon color
  '& .MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb svg': {
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.warning.light    // moon in dark mode
        : theme.palette.primary.dark,    // moon in light mode (faded)
  },

  // thin, centered track
  '& .MuiSwitch-track': {
    position: 'absolute',
    top: '50%',
    left: 11,      // 9px padding + 2px margin
    width: 36,     // exactly your slide distance
    height: 12,
    transform: 'translateY(-50%)',
    borderRadius: 6,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? '#4D4D4D'
        : '#E0E0E0',
    opacity: 1,
    zIndex: 0,
  },
}));

const Sidebar = ({ open, onClose }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();
  const location = useLocation();

  const orgName = localStorage.getItem('org_name') || 'Workspace';
  const shortcode = localStorage.getItem('shortcode') || '';
  const [workspaceOpen, setWorkspaceOpen] = useState(false);

  // decide icon colors for maximum contrast
  const sunColor =
    theme.palette.mode === 'light'
      ? theme.palette.warning.dark
      : theme.palette.warning.light;
  const moonColor =
    theme.palette.mode === 'dark'
      ? theme.palette.grey[100]
      : theme.palette.primary.dark;

  const handleNavigate = (path) =>
    navigate(`/${shortcode}/dashboard/${path}`);

  const currentPath =
    location.pathname.split(`/${shortcode}/dashboard/`)[1] || '';
  const isActive = (target) => currentPath === target;

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

  const renderProfile = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', ml: 2, mt: 2 }}>
      <Avatar sx={{ width: 50, height: 50, mr: 2 }}>E</Avatar>
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{ color: theme.palette.text.primary }}
      >
        Employee
      </Typography>
    </Box>
  );

  const renderContent = (isMobile = false) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 2 }}>
      {isMobile && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={onClose}>
            <CloseIcon sx={{ color: theme.palette.text.primary }} />
          </IconButton>
        </Box>
      )}

      {/* Logo + Org */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: 1,
        }}
      >
        <Avatar
          variant="rounded"
          sx={{
            width: 64,
            height: 64,
            mb: 1,
            bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.200',
            fontSize: 20,
            fontWeight: 'bold',
            color: theme.palette.text.primary,
          }}
        >
          LOGO
        </Avatar>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ color: theme.palette.text.primary }}
        >
          {orgName}
        </Typography>
      </Box>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 4, pl: 2 }}
      >
        Workspace Management System
      </Typography>

      <List sx={{ mt: 2 }}>
        <ListItem
          button
          onClick={() => navigate(`/${shortcode}/dashboard`)}
          sx={{
            px: 2,
            py: 0.5,
            mb: 1,
            borderRadius: 1,
            backgroundColor:
              location.pathname === `/${shortcode}/dashboard`
                ? 'rgba(0,150,255,0.2)'
                : 'transparent',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.05)' },
          }}
        >
          <ListItemIcon sx={{ minWidth: 'auto', mr: 1, color: 'inherit' }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText
            primary="Dashboard"
            primaryTypographyProps={{ color: 'textPrimary' }}
          />
        </ListItem>

        <ListItem
          button
          onClick={() => setWorkspaceOpen(!workspaceOpen)}
          sx={{
            px: 2,
            py: 0.5,
            mb: 1,
            borderRadius: 1,
            backgroundColor: workspaceOpen
              ? 'rgba(0,150,255,0.1)'
              : 'transparent',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.05)' },
          }}
        >
          <ListItemIcon sx={{ minWidth: 'auto', mr: 1, color: 'inherit' }}>
            <WorkspacesIcon />
          </ListItemIcon>
          <ListItemText
            primary="Workspaces"
            primaryTypographyProps={{ color: 'textPrimary' }}
          />
          {workspaceOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={workspaceOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            {[
              { label: 'All Workspaces', icon: <ViewListIcon />, path: 'workspaces' },
              { label: 'Add New Workspace', icon: <AddIcon />, path: 'workspaces/add' },
              { label: 'Availability Settings', icon: <TuneIcon />, path: 'workspaces/availability' },
            ].map((item) => (
              <ListItem
                key={item.path}
                button
                onClick={() => handleNavigate(item.path)}
                selected={isActive(item.path)}
              >
                <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ color: 'textPrimary' }}
                />
              </ListItem>
            ))}
          </List>
        </Collapse>

        {[
          { label: 'Bookings', icon: <BookOnlineIcon />, path: 'bookings' },
          { label: 'Users', icon: <PeopleIcon />, path: 'users' },
          { label: 'Reports', icon: <BarChartIcon />, path: 'reports/revenue' },
        ].map((item) => (
          <ListItem
            key={item.path}
            button
            onClick={() => handleNavigate(item.path)}
            selected={isActive(item.path)}
          >
            <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{ color: 'textPrimary' }}
            />
          </ListItem>
        ))}
      </List>

      {/* Dark / Light toggle */}
      <Box sx={{ mt: 'auto', mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip
            title={
              theme.palette.mode === 'dark' ? 'Switch to light' : 'Switch to dark'
            }
            PopperProps={{
              sx: { zIndex: 2300 } // ensure tooltip hovers above sidebar
            }}
          >
            <IconSwitch
              checked={theme.palette.mode === 'dark'}
              onChange={colorMode.toggleColorMode}
              icon={<Brightness7Icon sx={{ fontSize: 32, color: sunColor }} />}
              checkedIcon={<Brightness4Icon sx={{ fontSize: 32, color: moonColor }} />}
            />
          </Tooltip>
        </Box>
        <Box
          sx={{
            borderTop: `1px solid ${
              theme.palette.mode === 'dark'
                ? 'rgba(255,255,255,0.1)'
                : 'rgba(0,0,0,0.1)'
            }`,
            mt: 2,
            pt: 2,
          }}
        />
        {renderProfile()}
      </Box>
    </Box>
  );

  return (
    <>
      {/* Permanent Drawer (desktop) */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          zIndex: 2200,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            ...glassStyles,
            zIndex: 2200,
          },
        }}
        open
      >
        {renderContent()}
      </Drawer>

      {/* Temporary Drawer (mobile) */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          zIndex: 2200,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: theme.palette.background.paper,
            color: theme.palette.text.primary,
            zIndex: 2200,
          },
        }}
      >
        {renderContent(true)}
      </Drawer>
    </>
  );
};

export default Sidebar;
