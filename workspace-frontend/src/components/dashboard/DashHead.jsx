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
  Slide
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const iconColor =
    theme.palette.mode === 'dark'
      ? theme.palette.grey[300]
      : theme.palette.primary.main;

  const handleMobileMenuOpen = (event) => setMobileMoreAnchorEl(event.currentTarget);
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);
  const toggleMobileSearch = () => setMobileSearchOpen((prev) => !prev);

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(mobileMoreAnchorEl)}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <ListItemIcon><EmailOutlinedIcon /></ListItemIcon>
        <Typography>Messages</Typography>
      </MenuItem>
      <MenuItem>
        <ListItemIcon><NotificationsNoneIcon /></ListItemIcon>
        <Typography>Notifications</Typography>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Avatar sx={{ bgcolor: amber[500] }}>XX</Avatar>
        </ListItemIcon>
        <Typography>Profile</Typography>
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
        {/* Drawer toggle and search icon grouped in mobile (no spacing) */}
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

        {/* Slide-in mobile search bar */}
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

        {/* Desktop Search Bar */}
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

        {/* Desktop action icons */}
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            position: 'absolute',
            top: '50%',
            right: 48,
            transform: 'translateY(-50%)',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <IconButton><EmailOutlinedIcon sx={{ color: iconColor }} /></IconButton>
          <IconButton><NotificationsNoneIcon sx={{ color: iconColor }} /></IconButton>
          <Avatar sx={{ bgcolor: amber[500], color: '#000' }}>XX</Avatar>
          <Typography sx={{ fontWeight: 700 }}>XX</Typography>
        </Box>

        {/* Mobile overflow menu icon */}
        <Box sx={{ display: { xs: 'flex', sm: 'none' }, ml: 'auto' }}>
          <IconButton onClick={handleMobileMenuOpen}>
            <MoreVertIcon sx={{ color: iconColor }} />
          </IconButton>
        </Box>
      </Toolbar>
      {renderMobileMenu}
    </AppBar>
  );
};

export default DashHead;
