import { apiSlice } from '../../api/apiSlice';

const puppyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: () => '/players',
      transformResponse: (response) => response.data,
      providesTags: ['Players'],
    }),
    getPuppy: builder.query({
      query: (id) => `/puppies/${id}`,
      providesTags: (result, error, id) => [{ type: 'Puppy', id }],
    }),
    addPuppy: builder.mutation({
      query: (newPuppy) => ({
        url: '/puppies',
        method: 'POST',
        body: newPuppy,
      }),
      invalidatesTags: ['Puppy'],
    }),
    deletePuppy: builder.mutation({
      query: (id) => ({
        url: `/puppies/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Puppy', id }],
    }),
  }),
});

export const {
  useGetPlayersQuery,
  useGetPuppyQuery,
  useAddPuppyMutation,
  useDeletePuppyMutation,
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
