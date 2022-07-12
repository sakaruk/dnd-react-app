import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import React from 'react';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { UserEvent } from '@testing-library/user-event/dist/types/setup';
import { BrowserRouter } from 'react-router-dom';

import renderWithProviders from '../lib/redux-test';
import SpellList from '../pages/Home/SpellList';
import { spellData } from '../mockData/spells';

/**
 * Making mock server to handle request
 */
const handlers = [
  rest.get('https://www.dnd5eapi.co/api/spells', (req, res, ctx) =>
    res(ctx.json(spellData), ctx.delay(150))
  ),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test('check if list is loaded and is gone to detail page', async () => {
  const user: UserEvent = userEvent.setup();

  renderWithProviders(
    <BrowserRouter>
      <SpellList searchData="" />
    </BrowserRouter>
  );

  expect(await screen.findByText(spellData.results[0].name)).toBeInTheDocument();

  await user.click(screen.getByText(spellData.results[0].name));

  // check if the heading is in the route
  expect(screen.getByText(spellData.results[0].name)).toBeInTheDocument();
});
