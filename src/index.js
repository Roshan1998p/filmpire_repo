import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
