import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
  ListItemButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import useStyles from './styles';
const Sidebar = ({ setMobileOpen }) => {
  const logo =
    'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
  const classes = useStyles();
  const theme = useTheme();

  const demoCategories = [
    {
      label: 'Comedy',
      value: 'comedy',
    },
    {
      label: 'Action',
      value: 'action',
    },
    {
      label: 'Horror',
      value: 'horror',
    },
    {
      label: 'Animation',
      value: 'animation',
    },
  ];
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img className={classes.image} src={logo} alt="FilmpireLogo" />
      </Link>
      <Divider />

      <List>
        <ListSubheader>Categories</ListSubheader>
        {demoCategories.map(({ label, value }, index) => {
          return (
            <Link to="/" className={classes.links} key={value}>
              <ListItemButton onClick={() => {}} button>
                {/* <ListItemIcon>
                  <img src="" className={classes.genreImage} height={30} />
                </ListItemIcon> */}
                <ListItemText primary={label} />
              </ListItemButton>
            </Link>
          );
        })}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genre</ListSubheader>
        {demoCategories.map(({ label, value }, index) => {
          return (
            <Link to="/" className={classes.links} key={value}>
              <ListItemButton onClick={() => {}} button>
                {/* <ListItemIcon>
                  <img src="" className={classes.genreImage} height={30} />
                </ListItemIcon> */}
                <ListItemText primary={label} />
              </ListItemButton>
            </Link>
          );
        })}
      </List>
    </>
  );
};
export default Sidebar;
