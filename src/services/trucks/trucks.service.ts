import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Truck } from '@/types/trucks-api.type';

export const trucksSlice = createApi({
  reducerPath: 'trucks',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ['Trucks'],
  endpoints: (builder) => ({

    // trucks endpoint
    getTrucks: builder.query<Truck[], number>({
      query: (limit) => `/resource/rqzj-sfat.json?$limit=${limit}`,
      providesTags: ['Trucks']
    }),

    // single truck endpoint
    getTruck: builder.query<Truck[], number>({
      query: (id) => `/resource/rqzj-sfat.json?$limit=1&objectid=${id}`
    })
  })
});

export const {
  useGetTrucksQuery,
  useGetTruckQuery
} = trucksSlice;
