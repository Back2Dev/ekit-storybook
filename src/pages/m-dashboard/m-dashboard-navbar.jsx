import { Notifications, Search } from '@mui/icons-material';
import { AppBar, Badge, Button, IconButton, Toolbar } from '@mui/material';
import React from 'react';

const Navbar = () => {
  return (
    <AppBar
      position="static"
      top="0"
      sx={{
        backgroundColor: 'grey.main',
        maxHeight: '65px',
        minHeight: '65px',
        justifyContent: 'center'
      }}
    >
      <Toolbar>
        {/* Logo */}
        <Button
          variant="contained"
          sx={{
            borderRadius: '7px',
            minWidth: '0px',
            backgroundColor: 'grey.light',
            '&:hover': {
              backgroundColor: 'grey.light',
            },
            '&:active': {
              backgroundColor: 'grey.light',
            },
          }}
        >
          <img src="/map.webp" alt="Logo" style={{ maxHeight: '40px' }} />
        </Button>

        {/* Spacer */}
        <div style={{ flexGrow: 1 }} />

        {/* Search Icon Button */}
        <IconButton>
          <Button
            variant="contained"
            sx={{
              borderRadius: '7px',
              minWidth: '0px',
              p: '6px',
              color: 'primary.main',
              backgroundColor: 'grey.light',
              '&:hover': {
                backgroundColor: 'grey.light',
              },
              '&:active': {
                backgroundColor: 'grey.light',
              },
            }}
          >
            <Search />
          </Button>
        </IconButton>

        {/* Notifications Icon Button with Red Notification Number */}
        <IconButton>
          <Button
            variant="contained"
            sx={{
              borderRadius: '7px',
              minWidth: '0px',
              p: '6px',
              color: 'primary.main',
              backgroundColor: 'grey.light',
              '&:hover': {
                backgroundColor: 'grey.light',
              },
              '&:active': {
                backgroundColor: 'grey.light',
              },
            }}
          >
            <Badge badgeContent={3} color="error">
              <Notifications />
            </Badge>
          </Button>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
