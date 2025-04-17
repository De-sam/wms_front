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
  Typography
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { amber } from '@mui/material/colors';

const drawerWidth = 240;

// Theme-aware Search container with responsive positioning
const Search = styled('div')(({ theme }) => ({
  borderRadius: 8,
  border: `1px solid ${
    theme.palette.mode === 'dark'
      ? theme.palette.grey[700]
      : theme.palette.grey[400]
  }`,
  backgroundColor:
    theme.palette.mode === 'dark'
      ? theme.palette.grey[900]
      : theme.palette.common.white,
  height: '56px',
  transition: 'border 0.2s ease, background-color 0.2s ease',
  display: 'flex',
  alignItems: 'center',
  flexGrow: 1,
  position: 'relative',
  [theme.breakpoints.up('sm')]: {
    position: 'absolute',
    top: '55%',
    left: '38%',
    transform: 'translate(-50%, -50%)',
    flexGrow: 0,
    width: '100%',
    maxWidth: 650,
  },
  '&:focus-within': {
    border: `1px solid ${amber[500]}`,
  },
}));

// Icon wrapper adapts to theme
const SearchIconWrapper = styled('div')(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color:
    theme.palette.mode === 'dark'
      ? theme.palette.grey[400]
      : theme.palette.grey[600],
  transition: 'color 0.2s ease',
}));

// Input styling
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '100%',
  '& .MuiInputBase-input': {
    boxSizing: 'border-box',
    height: '100%',
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: 'color 0.2s ease',
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.common.white
        : theme.palette.text.primary,
    '&::placeholder': {
      color: theme.palette.grey[500],
      opacity: 1,
    },
  },
}));

const DashHead = ({ handleDrawerToggle }) => {
  const theme = useTheme();
  const iconColor =
    theme.palette.mode === 'dark'
      ? theme.palette.grey[300]
      : theme.palette.primary.main;
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const handleMobileMenuOpen = (event) => setMobileMoreAnchorEl(event.currentTarget);
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(mobileMoreAnchorEl)}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <ListItemIcon>
          <EmailOutlinedIcon fontSize="small" sx={{ color: iconColor }} />
        </ListItemIcon>
        <Typography>Messages</Typography>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <NotificationsNoneIcon fontSize="small" sx={{ color: iconColor }} />
        </ListItemIcon>
        <Typography>Notifications</Typography>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Avatar sx={{ bgcolor: amber[500], width: 32, height: 32, color: '#000' }}>
            XX
          </Avatar>
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
        {/* Drawer Toggle on mobile */}
        <Box sx={{ display: { xs: 'flex', sm: 'none' }, mr: 2 }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Search on all screens */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon sx={{ fontSize: 24 }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

        {/* Desktop icons & avatar */}
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
          <Avatar sx={{ bgcolor: amber[500], width: 52, height: 52, color: '#000' }}>XX</Avatar>
          <Typography sx={{ fontWeight: 700 }}>{'XX'}</Typography>
        </Box>

        {/* Mobile more menu */}
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
