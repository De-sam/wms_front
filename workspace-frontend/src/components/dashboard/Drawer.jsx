import React, { useContext, useState } from 'react';
import {
  Avatar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import ColorModeContext from '../../context/ColorModeContext';

const drawerWidth = 300;

const Sidebar = ({ open, onClose }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const menuItems = [
    { label: 'Dashboard', icon: <DashboardIcon /> },
    { label: 'Workspaces', icon: <WorkspacesIcon /> },
    { label: 'Bookings', icon: <BookOnlineIcon /> },
    { label: 'Team Schedule', icon: <ScheduleIcon /> },
    { label: 'Settings', icon: <SettingsIcon /> },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  const handleToggleDarkMode = () => {
    colorMode.toggleColorMode();
  };

  // Glassmorphism styles for the permanent (desktop) drawer
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

  // Profile section to be rendered at bottom of the drawer
  const renderProfileSection = () => (
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

  // Drawer content for both desktop and mobile
  // The parameter "isMobile" will dictate whether the close button is rendered.
  const renderDrawerContent = (isMobile = false) => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        p: 2,
      }}
    >
      {/* Mobile header with close button */}
      {isMobile && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={onClose}>
            <CloseIcon sx={{ color: theme.palette.text.primary }} />
          </IconButton>
        </Box>
      )}
      <Box sx={{ pt: 2 }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ color: theme.palette.text.primary }}
        >
          WorkSpace
        </Typography>
      </Box>
      <Box sx={{ mt: 4, pl: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Workspace Management System
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <List>
          {menuItems.map((item, index) => {
            const isSelected = selectedIndex === index;
            return (
              <ListItem
                key={item.label}
                button
                onClick={() => handleListItemClick(index)}
                sx={{
                  px: 2,
                  py: 0.5,
                  mb: 1,
                  borderRadius: 1,
                  backgroundColor: isSelected
                    ? 'rgba(0,150,255,0.2)'
                    : 'transparent',
                  transform: isSelected ? 'translateX(10px)' : 'translateX(0)',
                  transition: 'background 0.3s ease, transform 0.3s ease',
                  '&:hover': {
                    backgroundColor: isSelected
                      ? 'rgba(0,150,255,0.3)'
                      : 'rgba(0,0,0,0.05)',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isSelected
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                    minWidth: 'auto',
                    mr: 1,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    color: isSelected
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                  }}
                />
              </ListItem>
            );
          })}
        </List>
      </Box>
      <Box sx={{ mt: 'auto' }}>
        {/* Dark mode toggle */}
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
          <Tooltip
            title={
              theme.palette.mode === 'dark'
                ? 'Turn on the light'
                : 'Turn off the light'
            }
            placement="top"
          >
            <IconButton
              onClick={handleToggleDarkMode}
              sx={{ color: theme.palette.text.primary }}
            >
              {theme.palette.mode === 'dark' ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Tooltip>
          <Typography variant="body2" sx={{ ml: 1, color: theme.palette.text.primary }}>
            {theme.palette.mode === 'dark' ? '' : ''}
          </Typography>
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
        {renderProfileSection()}
      </Box>
    </Box>
  );

  return (
    <>
      {/* Permanent Drawer for Desktop */}
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

      {/* Temporary Drawer for Mobile */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{
          keepMounted: true,
          BackdropProps: {
            // This sets the dimming effect for the area behind the drawer.
            style: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
          },
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            // Use a bright, opaque background for the sliding drawer
            background: theme.palette.background.paper,
            // Remove any blur or glass effects for mobile drawer
            backdropFilter: 'none',
          },
        }}
      >
        {renderDrawerContent(true)}
      </Drawer>
    </>
  );
};

export default Sidebar;
