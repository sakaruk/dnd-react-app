import { configureStore } from '@reduxjs/toolkit';
import spellReducer from '../context/reducers/spellSlice';
import { spellsApi } from '../context/reducers/spellSlice/spellsApi';

const store = configureStore({
  reducer: {
    [spellsApi.reducerPath]: spellsApi.reducer,
    spell: spellReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spellsApi.middleware),
});

export default store;
