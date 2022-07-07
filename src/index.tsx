import React from 'react';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { Provider } from 'react-redux';

import { store } from './lib/store';
import theme from './lib/theme';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);

/**
 * Providers used:
 * React.StrictMode for strict mode in React development
 * Redux Provider to manage state
 * BrowserRouter to manage the routes in the browser
 * ThemeProvider to manager mui theme
 *
 * Components Rendered:
 * CssBaseline to normalize css
 * App to render the main App with and manage Routes
 */
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
