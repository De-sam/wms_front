import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  InputBase,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Typography,
  Slide,
  Divider,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import { amber } from '@mui/material/colors';

const drawerWidth = 240;

const SearchBar = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.background.paper,
  borderRadius: 8,
  padding: '0 8px',
  border: `1px solid ${theme.palette.divider}`,
  width: '100%',
  height: '48px',
  boxShadow: theme.shadows[1],
}));

const DashHead = ({ handleDrawerToggle }) => {
  const theme = useTheme();
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);

  const iconColor =
    theme.palette.mode === 'dark'
      ? theme.palette.grey[300]
      : theme.palette.primary.main;

  const toggleMobileSearch = () => setMobileSearchOpen((prev) => !prev);
  const handleProfileClick = (event) => setProfileAnchorEl(event.currentTarget);
  const handleProfileClose = () => setProfileAnchorEl(null);

  const renderProfileMenu = (
    <Menu
      anchorEl={profileAnchorEl}
      open={Boolean(profileAnchorEl)}
      onClose={handleProfileClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      PaperProps={{
        sx: {
          width: 220,
          boxShadow: theme.shadows[3],
        },
      }}
    >
      <MenuItem onClick={handleProfileClose}>
        <ListItemIcon>
          <EmailOutlinedIcon fontSize="small" />
        </ListItemIcon>
        Messages
      </MenuItem>

      <MenuItem onClick={handleProfileClose}>
        <ListItemIcon>
          <NotificationsNoneIcon fontSize="small" />
        </ListItemIcon>
        Notifications
      </MenuItem>

      <Divider sx={{ my: 0.5 }} />

      <MenuItem onClick={handleProfileClose}>
        <ListItemIcon>
          <PersonIcon fontSize="small" />
        </ListItemIcon>
        Profile
      </MenuItem>

      <MenuItem onClick={handleProfileClose}>
        <ListItemIcon>
          <SettingsIcon fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>

      <Divider sx={{ my: 0.5 }} />

      <MenuItem onClick={handleProfileClose}>
        <ListItemIcon>
          <LogoutIcon fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        top: 0,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: 'transparent',
        color: theme.palette.text.primary,
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ px: 2, height: 100, position: 'relative' }}>
        {/* Mobile: Drawer toggle + search */}
        <Box
          sx={{
            display: { xs: 'flex', sm: 'none' },
            alignItems: 'center',
            mr: 'auto',
          }}
        >
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>

          <IconButton onClick={toggleMobileSearch}>
            <SearchIcon />
          </IconButton>
        </Box>

        {/* Mobile Slide-in Search */}
        <Slide direction="left" in={mobileSearchOpen} mountOnEnter unmountOnExit>
          <Box
            sx={{
              display: { xs: 'flex', sm: 'none' },
              position: 'absolute',
              top: 12,
              right: 16,
              left: 16,
              zIndex: theme.zIndex.appBar + 1,
            }}
          >
            <SearchBar>
              <InputBase
                placeholder="Search…"
                sx={{ ml: 2, flex: 1 }}
                inputProps={{ 'aria-label': 'search' }}
              />
              <IconButton onClick={toggleMobileSearch}>
                <CloseIcon />
              </IconButton>
            </SearchBar>
          </Box>
        </Slide>

        {/* Desktop Search */}
        <Box
          sx={{
            display: { xs: 'none', sm: 'block' },
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            maxWidth: 650,
          }}
        >
          <SearchBar>
            <SearchIcon sx={{ color: theme.palette.grey[500], mr: 1 }} />
            <InputBase
              placeholder="Search…"
              sx={{ flex: 1 }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </SearchBar>
        </Box>

        {/* Avatar only */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            top: '50%',
            right: 0,
            transform: 'translateY(-50%)',
            pr: 1, // added space between avatar and edge
          }}
        >
          <IconButton onClick={handleProfileClick} sx={{ p: 0 }}>
            <Avatar sx={{ bgcolor: amber[500], color: '#000' }}>XX</Avatar>
          </IconButton>
        </Box>
      </Toolbar>

      {renderProfileMenu}
    </AppBar>
  );
};

export default DashHead;
