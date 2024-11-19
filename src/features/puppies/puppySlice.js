import { apiSlice } from '../../api/apiSlice';

const puppyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: () => '/players',
      transformResponse: (response) => response.data,
      providesTags: ['Players'],
    }),
    getPlayer: builder.query({
      query: (id) => `/players/${id}`,
      providesTags: (result, error, id) => [{ type: 'Players', id }],
    }),
    addPlayer: builder.mutation({
      query: (newPlayer) => ({
        url: '/players',
        method: 'POST',
        body: newPlayer,
      }),
      invalidatesTags: ['Players'],
    }),
    deletePlayer: builder.mutation({
      query: (id) => ({
        url: `/players/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Players', id }],
    }),
  }),
});

export const {
  useGetPlayersQuery,
  useGetPlayerQuery,
  useAddPlayerMutation,
  useDeletePlayerMutation,
} = puppyApi;

export default puppyApi;

/*
TODO: Define the following 4 endpoints:
  1. getPuppies (query)
  2. getPuppy (query)
  3. addPuppy (mutation)
  4. deletePuppy (mutation)

The query endpoints should provide the "Puppy" tag.
The mutation endpoints should invalidate the "Puppy" tag.

(Optional) TODO: Write `transformResponse` and `transformErrorResponse`
functions for each endpoint.
*/
