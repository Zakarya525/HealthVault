// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const appointmentApi = createApi({
  reducerPath: "appointmentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://psychedelic-wine-production.up.railway.app",
    prepareHeaders: (headers, { getState }) => {
      // Get the token from the Redux state
      const token = getState().auth.token;

      // If a token exists, add it to the request headers
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      // Return the modified headers
      return headers;
    },
  }),

  endpoints: (builder) => ({
    addAppointment: builder.mutation({
      query: (data) => ({
        url: "patient_user/create_new_appointment",
        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    getAppointments: builder.query({
      query: () => ({
        url: "patient_user/get_patient_all_appointment",
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddAppointmentMutation, useGetAppointmentsQuery } =
  appointmentApi;