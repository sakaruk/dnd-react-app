import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../../types/redux-types';

export interface SpellState {
  favouriteSpells: Array<string>;
  // Tried to use Set for consistency but the immer in the redux was not working causing problem
}

export interface FavouritePayload {
  index: string;
  currentState: 'active' | 'inactive';
}

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

const initialState: SpellState = {
  favouriteSpells: initialFavourite,
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
