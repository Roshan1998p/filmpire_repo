import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { Actors, NavBar, MovieInformation, Profile, Movies } from './index.js';
import useStyles from './style';
const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          {/* Routes in this app don't need to worry about which URL prefix they are
          mounted at. They can just assume they are mounted at /. Then, if they
          are moved under a different basename later on, all routes and links will
          continue to work. */}
          <Route path="/movie/:id" element={<MovieInformation />}></Route>
          <Route exact path="/actors/:id" element={<Actors />}></Route>
          <Route path="/" element={<Movies />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
        </Routes>
      </main>
    </div>
  );
};
export default App;
