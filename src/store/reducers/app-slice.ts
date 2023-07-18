import { Theme } from '@constants/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IConfigState {
  theme: Theme;
  filmsPerPage: number;
  isBurgerOpened: boolean;
  isModalOpened: boolean;
}

const initialState: IConfigState = {
  theme: 'light',
  filmsPerPage: 16,
  isBurgerOpened: false,
  isModalOpened: false,
};

const appSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
    },

    setBurgerMenu(state, action: PayloadAction<boolean>) {
      state.isBurgerOpened = action.payload ?? !state.isBurgerOpened;
    },

    setModalMenu(state, action: PayloadAction<boolean>) {
      state.isModalOpened = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { setTheme, setBurgerMenu, setModalMenu } = appSlice.actions;
