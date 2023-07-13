import { configureStore } from '@reduxjs/toolkit';
import appSlice from '@store/reducers/app-slice';
import { movieApi } from '@reducers/movie-api';
import movieSlice from './reducers/movie-slice';

export const store = configureStore({
  reducer: {
    app: appSlice,
    movies: movieSlice,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
