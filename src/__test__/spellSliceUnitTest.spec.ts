import { setupStore } from '../lib/store';
import { addRemoveFavouriteSpell } from '../context/reducers/spellSlice';

const store = setupStore();

test('Add remove from favourite', () => {
  const testIndex = 'aid';
  let state = store.getState().spell;

  expect(state.favouriteSpells).toStrictEqual([]);

  store.dispatch(addRemoveFavouriteSpell({ index: testIndex, currentState: 'inactive' }));
  state = store.getState().spell;

  expect(state.favouriteSpells).toStrictEqual([testIndex]);

  store.dispatch(addRemoveFavouriteSpell({ index: testIndex, currentState: 'active' }));
  state = store.getState().spell;

  expect(state.favouriteSpells).toStrictEqual([]);
});
