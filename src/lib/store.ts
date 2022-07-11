import { configureStore } from '@reduxjs/toolkit';
import spellReducer from '../context/reducers/spellSlice';

const store = configureStore({
  reducer: {
    spell: spellReducer,
  },
});

export default store;
