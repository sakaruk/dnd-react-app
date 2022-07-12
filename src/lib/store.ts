import { configureStore, combineReducers, PreloadedState } from '@reduxjs/toolkit';
import spellReducer from '../context/reducers/spellSlice';
import { spellsApi } from '../context/reducers/spellSlice/spellsApi';

const rootReducer = combineReducers({
  [spellsApi.reducerPath]: spellsApi.reducer,
  spell: spellReducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spellsApi.middleware),
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
