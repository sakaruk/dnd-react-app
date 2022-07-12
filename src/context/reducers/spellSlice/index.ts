import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../../lib/store';

export interface SpellState {
  favouriteSpells: Array<string>;
  // Tried to use Set for consistency but the immer in the redux was not working causing problem
}

export interface FavouritePayload {
  index: string;
  currentState: 'active' | 'inactive';
}

const initialState: SpellState = {
  favouriteSpells: [],
};

export const spellSlice = createSlice({
  name: 'spell',
  initialState,
  reducers: {
    addRemoveFavouriteSpell: (state, action: PayloadAction<FavouritePayload>) => {
      if (action.payload.currentState === 'inactive') {
        state.favouriteSpells.push(action.payload.index);
      } else {
        state.favouriteSpells = state.favouriteSpells.filter(
          (spellIndex) => spellIndex !== action.payload.index
        );
      }
      /**
       * Storing the data in localStorage if available so we can see favourite even if we reload the page
       */
      if (localStorage) {
        localStorage.setItem('favSpell', JSON.stringify(state.favouriteSpells));
      }
    },
  },
});
/** Exporting the main reducer */
export default spellSlice.reducer;

/** Exporting the reducers actions */
export const { addRemoveFavouriteSpell } = spellSlice.actions;

/**
 * Spells List API Selectors
 */
export const getFavouriteSpells = (state: RootState) => state.spell.favouriteSpells;
