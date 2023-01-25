import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS } from '../../utils/api-endpoints';

// Define a service using a base URL and expected endpoints
export const launcherApi = createApi({
  reducerPath: 'launcherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ['Launcher'],

  endpoints: (builder) => ({
    getAllLauncher: builder.query({
      query: () => API_ENDPOINTS.LAUNCHER,
      providesTags: ['Launcher'],
    }),

    getSingleLauncher: builder.query({
      query: (id) => `${API_ENDPOINTS.LAUNCHER}/${id}`,
      providesTags: ['Launcher'],
    }),
  }),
});

export const { useGetAllLauncherQuery, useGetSingleLauncherQuery } = launcherApi;
