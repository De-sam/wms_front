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
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { amber } from '@mui/material/colors';

const drawerWidth = 240;

const SearchContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '56px',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.common.white,
    borderRadius: 8,
    border: `1px solid ${
      theme.palette.mode === 'dark'
        ? theme.palette.grey[700]
        : theme.palette.grey[400]
    }`,
    width: '100%',
    maxWidth: 650,
    margin: '0 auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '100%',
  height: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 4),
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.common.white
        : theme.palette.text.primary,
    '&::placeholder': {
      color: theme.palette.grey[500],
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
  const [showSearchInput, setShowSearchInput] = useState(false); // 🔄 toggle search input

  const handleMobileMenuOpen = (e) => setMobileMoreAnchorEl(e.currentTarget);
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const handleSearchClick = () => setShowSearchInput(!showSearchInput); // 🔁

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
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
    </Menu>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'transparent',
        color: theme.palette.text.primary,
        zIndex: theme.zIndex.drawer + 1,
        boxShadow: 'none',
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar sx={{ px: 2, height: 100, position: 'relative' }}>
        <Box sx={{ display: { xs: 'flex', sm: 'none' }, mr: 2 }}>
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Desktop Search */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1 }}>
          <SearchContainer>
            <SearchIcon sx={{ position: 'absolute', left: 16 }} />
            <StyledInputBase placeholder="Search..." />
          </SearchContainer>
        </Box>

        {/* Mobile Search */}
        <Box sx={{ display: { xs: 'flex', sm: 'none' }, flexGrow: 1 }}>
          {!showSearchInput ? (
            <IconButton onClick={handleSearchClick}>
              <SearchIcon />
            </IconButton>
          ) : (
            <Slide direction="down" in={showSearchInput} mountOnEnter unmountOnExit>
              <Box
                sx={{
                  flexGrow: 1,
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: '100%',
                  p: 1,
                  backgroundColor: theme.palette.background.default,
                  zIndex: theme.zIndex.appBar + 1,
                }}
              >
                <SearchContainer>
                  <StyledInputBase placeholder="Search…" autoFocus />
                </SearchContainer>
              </Box>
            </Slide>
          )}
        </Box>

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
