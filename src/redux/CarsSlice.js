import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const vehiclesApi = createApi({
  reducerPath: "vehiclesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://661ac75a65444945d04e7bb2.mockapi.io/",
  }),
  tagTypes: ["Vehicle"],
  endpoints: (builder) => ({
    getVehicles: builder.query({
      query: () => `/vehicle`,
      providesTags: ["Vehicle"],
    }),
    getVehiclesById: builder.query({
      query: (id) => `/vehicle/${id}`,
      providesTags: ["Vehicle"],
    }),
    addVehicle: builder.mutation({
      query: (value) => ({
        url: "/vehicle",
        method: "POST",
        body: value,
      }),
      invalidatesTags: ["Vehicle"],
    }),
    removeVehicle: builder.mutation({
      query: (id) => ({
        url: `/vehicle/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Vehicle"],
    }),
    updateVehicle: builder.mutation({
      query: (values) => ({
        url: `/vehicle/${values.id}`,
        method: "PUT",
        body: values,
      }),
      invalidatesTags: ["Vehicle"],
    }),
  }),
});

export const {
  useGetVehiclesQuery,
  useAddVehicleMutation,
  useRemoveVehicleMutation,
  useGetVehiclesByIdQuery,
  useUpdateVehicleMutation,
} = vehiclesApi;
