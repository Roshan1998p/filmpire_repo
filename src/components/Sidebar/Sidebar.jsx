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
import { useGetGenresQuery } from '../../app/services/TMDB';
import genreIcons from '../../assets/genres';
const logo =
  'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const Sidebar = ({ setMobileOpen }) => {
  const { data, isFetching } = useGetGenresQuery();

  console.log(data);

  const classes = useStyles();
  const theme = useTheme();

  const demoCategories = [
    {
      label: 'Popular',
      value: 'comedy',
    },
    {
      label: 'Top Rated',
      value: 'action',
    },
    {
      label: 'Upcoming',
      value: 'horror',
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
                <ListItemIcon>
                  <img
                    src={genreIcons?.[label.toLowerCase()]}
                    className={classes.genreImage}
                    height={30}
                  />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </Link>
          );
        })}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genre</ListSubheader>
        {isFetching ? (
          <Box display="flex" alignItems="center" justifyContent="center">
            <CircularProgress size="4rem" />
          </Box>
        ) : (
          data.genres.map(({ name, id }, index) => {
            return (
              <Link to="/" className={classes.links} key={id}>
                <ListItemButton onClick={() => {}} button>
                  <ListItemIcon>
                    <img
                      src={genreIcons?.[name.toLowerCase()]}
                      className={classes.genreImage}
                      height={30}
                    />
                  </ListItemIcon>
                  <ListItemText primary={name} />
                </ListItemButton>
              </Link>
            );
          })
        )}
      </List>
    </>
  );
};
export default Sidebar;
