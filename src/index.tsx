import React from 'react';

import { createRoot, Root } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { Provider } from 'react-redux';

import { setupStore } from './lib/store';
import theme from './lib/theme';
import App from './App';

const container: HTMLElement = document.getElementById('root')!;
const root: Root = createRoot(container);

let initialFavourite: Array<string> = [];

/**
 * Getting data from localStorage if available
 */
if (localStorage) {
  const favSpell = localStorage.getItem('favSpell');
  if (favSpell) {
    try {
      initialFavourite = JSON.parse(favSpell);
    } catch (e) {
      console.error('Cannot parse localstoreg data', e);
    }
  }
}
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
    <Provider store={setupStore({ spell: { favouriteSpells: initialFavourite } })}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
