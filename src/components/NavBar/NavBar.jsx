import React, { useEffect, useState } from 'react';
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
import { Search, Sidebar } from '..';
import { createSessionId, fetchToken, moviesApi } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, userSelector } from '../features/auth';
const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)'); //if width > 600px => isMobile == false
  const { isAuthenticated, user } = useSelector(userSelector);
  console.log(user);
  const theme = useTheme();
  const token = localStorage.getItem('request_token');
  const sessionIdFromLocalStorage = localStorage.getItem('session_id');

  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionIdFromLocalStorage}`
          );
          dispatch(setUser(userData));
        } else {
          const sessionId = await createSessionId();
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionId}`
          );
          dispatch(setUser(userData));
        }
      }
    };

    logInUser();
  }, [token]);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: 'none' }}
              onClick={() => {
                setMobileOpen((prev) => !prev);
              }}
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

          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button onClick={fetchToken} color="inherit">
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                component={Link}
                to={`/profile/${user?.id}`}
                className={classes.linkButton}
                onClick={() => {}}
                color="inherit"
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                />
              </Button>
            )}
          </div>
          {isMobile && <Search />}
        </Toolbar>
      </AppBar>

      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              className={classes.drawerBackground}
              classes={{ paper: classes.drawerPaper }} //override existing clases
              ModalProps={{ keepMounted: true }}
              onClick={() => {
                setMobileOpen((prev) => !prev);
              }}
            >
              <Sidebar setMobileOpen={setMobileOpen}></Sidebar>
            </Drawer>
          ) : (
            <Drawer
              variant="permanent"
              open
              className={classes.drawerBackground}
              classes={{ paper: classes.drawerPaper }} //override existing clases
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen}></Sidebar>
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default NavBar;
