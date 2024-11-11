import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counter-slice";
import { api } from "./api";
import wishlistSlice from "./api/wishlistSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    wishlistSlice: wishlistSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
