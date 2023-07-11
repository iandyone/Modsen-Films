import { configureStore } from '@reduxjs/toolkit';
import appConfigSlice from '@reducers/app-config-slice';
import { movieApi } from '@reducers/movie-api';

export const store = configureStore({
  reducer: {
    app: appConfigSlice,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
