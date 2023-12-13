import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <main>
        <Routes>
          {/* Routes in this app don't need to worry about which URL prefix they are
          mounted at. They can just assume they are mounted at /. Then, if they
          are moved under a different basename later on, all routes and links will
          continue to work. */}
          <Route path="/Home" element={<h1>Hiisdfa sdfasdfasii</h1>}></Route>
          <Route path="/" element={<h1>Hiiii 2423 23234</h1>}></Route>
          <Route path="/" element={<h1>Hiii 42 ttti</h1>}></Route>
        </Routes>
      </main>
    </div>
  );
};
export default App;
