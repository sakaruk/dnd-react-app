import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import SpellType from '../../../types/spell-types';

export const spellsApi = createApi({
  reducerPath: 'spellApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.dnd5eapi.co/api' }),
  endpoints: (builder) => ({
    // The `getSpells` endpoint is a "query" operation that returns all spells
    getSpells: builder.query<SpellType.List, void>({
      // The URL for the request is '/spells'
      query: () => '/spells',
    }),
    getSpellDetail: builder.query<SpellType.Detail, string>({
      query: (index: string) => `/spells/${index}`,
    }),
  }),
});

export const { useGetSpellsQuery, useGetSpellDetailQuery } = spellsApi;
