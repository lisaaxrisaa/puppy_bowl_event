import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const COHORT_CODE = '2408-ftb-et-web-am';
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_CODE}/`;

// TODO: configure createApi to use API_URL as the base URL
// TODO: add "Puppy" as a tag type.
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ['Players'],
  endpoints: (builder) => ({
    getPuppies: builder.query({
      query: () => 'players',
      providesTags: ['Players'],
    }),
    addPlayer: builder.mutation({
      query: (newplayer) => ({
        url: 'players',
        method: 'POST',
        body: newplayer,
      }),
      invalidatesTags: ['Players'],
    }),
  }),
});

export const { useFetchBaseQuery, useAddPlayerMutation } = apiSlice;
