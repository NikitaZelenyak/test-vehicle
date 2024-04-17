import { configureStore } from "@reduxjs/toolkit";

import { vehiclesApi } from "./CarsSlice";

export const store = configureStore({
  reducer: {
    [vehiclesApi.reducerPath]: vehiclesApi.reducer,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    vehiclesApi.middleware,
  ],
});
