import { configureStore } from '@reduxjs/toolkit';
import appConfigSlice from './reducers/app-config-slice';

export const store = configureStore({
  reducer: {
    app: appConfigSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
