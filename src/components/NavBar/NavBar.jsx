import React from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from '@mui/material';
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import useStyles from './styles';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)'); //checks for resolution
  const theme = useTheme();
  const isAuthenticated = true;
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: 'none' }}
              onClick={() => {}}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton
            color="inherit"
            sx={{ ml: 1 }}
            onClick={() => {
              {
              }
            }}
          >
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          {!isMobile && 'search....'}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit">
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                component={Link}
                to={'/profile/:id'}
                className={classes.linkButton}
                onClick={() => {}}
                color="inherit"
              >
                {isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                />
              </Button>
            )}
          </div>
          {isMobile && 'search....'}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
