import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

import { UserEvent } from '@testing-library/user-event/dist/types/setup';

import { Provider } from 'react-redux';

import App from '../App';
import store from '../lib/store';

test('check all the navigations / header and pages', async () => {
  const user: UserEvent = userEvent.setup();
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    { wrapper: BrowserRouter }
  );

  // check if the heading is in the route
  expect(screen.getByText(/spell list/i)).toBeInTheDocument();

  // check if the search is in route
  expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();

  // Navigate to about page to check if it works
  const menuItems = screen.getByTestId('headerMenu');
  await user.click(within(menuItems).getByText(/about/i));
  expect(screen.getByText(/about the app/i)).toBeInTheDocument();
});

test('landing on a bad page', () => {
  const badRoute: string = '/some-bad-route';

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  );

  // verify navigation to "no match" route
  expect(screen.getByTestId('notFoundContainer')).toBeInTheDocument();
});
