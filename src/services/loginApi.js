// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const loginApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: " https://psychedelic-wine-production.up.railway.app ",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (values) => ({
        url: "auth/login",
        method: "POST",
        body: values,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation } = loginApi;
