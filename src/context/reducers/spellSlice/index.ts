import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../../types/redux-types';
import SpellType from '../../../types/spell-types';

export interface SpellState {
  spells: Array<SpellType.Single>;
  displaySpells: Array<SpellType.Single>;
  searchSpellQuery: string;
  currentSpell: SpellType.Detail | null;
  listStatus: 'idle' | 'loading' | 'failed';
  detailStatus: 'idle' | 'loading' | 'failed';
  favouriteSpells: Array<string>;
}

export interface FavouritePayload {
  index: string;
  currentState: 'active' | 'inactive';
}

const initialState: SpellState = {
  spells: [],
  displaySpells: [],
  searchSpellQuery: '',
  currentSpell: null,
  listStatus: 'loading',
  detailStatus: 'loading',
  favouriteSpells: [],
};

export const fetchList = createAsyncThunk('spells/fetchSpells', async () => {
  const returnData: Array<SpellType.Single> = [];
  return returnData;
});

export const fetchDetail = createAsyncThunk('spells/fetchDetail', async (index: string) => {
  const returnData: SpellType.Detail | null = index === 'aid' ? null : null;
  return returnData;
});

const getDisplaySpells = (searchQuery: string, spells: Array<SpellType.Single>) => {
  const filterRegex = new RegExp(`^${searchQuery}`, 'i');

  return spells.filter((singleSpell: SpellType.Single) => singleSpell.name.match(filterRegex));
};

export const spellSlice = createSlice({
  name: 'spell',
  initialState,
  reducers: {
    searchSpell: (state, action: PayloadAction<string>) => {
      const searchQuery: string = action.payload.trim();
      state.searchSpellQuery = searchQuery;

      state.displaySpells = getDisplaySpells(searchQuery, state.spells);
    },
    addRemoveFavouriteSpell: (state, action: PayloadAction<FavouritePayload>) => {
      if (action.payload.currentState === 'inactive') {
        state.favouriteSpells.push(action.payload.index);
      } else {
        state.favouriteSpells = state.favouriteSpells.filter(
          (spellIndex) => spellIndex !== action.payload.index
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchList.pending, (state) => {
        state.listStatus = 'loading';
      })
      .addCase(fetchList.fulfilled, (state, action) => {
        state.listStatus = 'idle';
        state.spells = action.payload;
        state.displaySpells = getDisplaySpells(state.searchSpellQuery, action.payload);
      })
      .addCase(fetchList.rejected, (state) => {
        state.listStatus = 'failed';
      })
      .addCase(fetchDetail.pending, (state) => {
        state.detailStatus = 'loading';
      })
      .addCase(fetchDetail.fulfilled, (state, action) => {
        state.detailStatus = 'idle';
        state.currentSpell = action.payload;
      })
      .addCase(fetchDetail.rejected, (state) => {
        state.detailStatus = 'failed';
      });
  },
});
/** Exporting the main reducer */
export default spellSlice.reducer;

/** Exporting the reducers actions */
export const { searchSpell, addRemoveFavouriteSpell } = spellSlice.actions;

/**
 * Spells List API Selectors
 */
export const getListStatus = (state: RootState) => state.spell.listStatus;
export const getSpells = (state: RootState) => state.spell.displaySpells;
export const getSearchSpellQuery = (state: RootState) => state.spell.searchSpellQuery;

/**
 * Spells API Selectors
 */
export const getDetailStatus = (state: RootState) => state.spell.detailStatus;
export const getCurrentSpells = (state: RootState) => state.spell.currentSpell;
