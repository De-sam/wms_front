// File: src/pages/users/components/Sidebar.jsx

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

const IconSwitch = styled(Switch)(({ theme }) => ({
  width: 80,
  height: 44,
  padding: 9,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transform: 'translateX(0)',
    '&.Mui-checked': {
      transform: 'translateX(36px)',
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 40,
    height: 40,
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '& .MuiSwitch-thumb svg': {
    fontSize: 32,
    color:
      theme.palette.mode === 'light'
        ? theme.palette.warning.dark
        : theme.palette.grey[100],
  },
  '& .MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb svg': {
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.warning.light
        : theme.palette.primary.dark,
  },
  '& .MuiSwitch-track': {
    position: 'absolute',
    top: '50%',
    left: 11,
    width: 36,
    height: 12,
    transform: 'translateY(-50%)',
    borderRadius: 6,
    backgroundColor:
      theme.palette.mode === 'dark' ? '#4D4D4D' : '#E0E0E0',
    opacity: 1,
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

  const isActive = (target) =>
    location.pathname.split(`/${shortcode}/dashboard/`)[1] === target;

  const handleNavigate = (path) => {
    navigate(`/${shortcode}/dashboard/${path}`);
    if (open && onClose) onClose();
  };

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
    zIndex: 2000,
  };

  const renderContent = (isMobile = false) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 2 }}>
      {isMobile && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={onClose}>
            <CloseIcon sx={{ color: theme.palette.text.primary }} />
          </IconButton>
        </Box>
      )}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: 2,
          pb: 2,
          mb: 2,
          borderRadius: 2,
          backgroundColor: 'skyblue',
        }}
      >
        <Avatar
          variant="rounded"
          sx={{
            width: 64,
            height: 64,
            mb: 1,
            bgcolor: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            color: theme.palette.primary.main,
          }}
        >
          LOGO
        </Avatar>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ color: theme.palette.primary.contrastText }}
        >
          {orgName}
        </Typography>
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 2, pl: 2 }}>
        Workspace Management System
      </Typography>

      <List sx={{ mt: 2 }}>
        <ListItem
          button
          onClick={() => handleNavigate('')}
          sx={{
            px: 2,
            py: 0.5,
            mb: 1,
            borderRadius: 1,
            backgroundColor:
              location.pathname === `/${shortcode}/dashboard`
                ? theme.palette.warning.light
                : 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.05)',
              zIndex: 2001,
            },
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
              ? theme.palette.warning.light
              : 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.05)',
              zIndex: 2001,
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 'auto', mr: 1, color: 'inherit' }}>
            <WorkspacesIcon />
          </ListItemIcon>
          <ListItemText primary="Workspaces" />
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
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  backgroundColor: isActive(item.path)
                    ? theme.palette.warning.light
                    : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.05)',
                    zIndex: 2001,
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
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
            sx={{
              borderRadius: 1,
              mb: 1,
              backgroundColor: isActive(item.path)
                ? theme.palette.warning.light
                : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.05)',
                zIndex: 2001,
              },
            }}
          >
            <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>

      {/* Theme toggle + footer */}
      <Box sx={{ mt: 'auto', mb: 2 }}>
        <Tooltip
          title="Toggle theme"
          PopperProps={{ style: { zIndex: 2002 } }}
        >
          <IconSwitch
            checked={theme.palette.mode === 'dark'}
            onChange={colorMode.toggleColorMode}
            icon={<Brightness7Icon />}
            checkedIcon={<Brightness4Icon />}
          />
        </Tooltip>

        <Box
          sx={{
            borderTop: `1px solid ${theme.palette.divider}`,
            mt: 2,
            pt: 2,
          }}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2, mt: 2 }}>
          <Avatar sx={{ width: 50, height: 50, mr: 2 }}>E</Avatar>
          <Typography variant="h6" fontWeight="bold">
            Employee
          </Typography>
        </Box>
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
        {renderContent()}
      </Drawer>

      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        transitionDuration={300}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: theme.palette.background.paper,
            color: theme.palette.text.primary,
            zIndex: 2000,
          },
        }}
      >
        {renderContent(true)}
      </Drawer>
    </>
  );
};

export default Sidebar;
