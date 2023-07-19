import { Theme } from '@constants/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IConfigState {
  theme: Theme;
  filmsPerPage: number;
  isBurgerOpened: boolean;
  isModalOpened: boolean;
  isSearchOpened: boolean;
}

const initialState: IConfigState = {
  theme: 'light',
  filmsPerPage: 16,
  isBurgerOpened: false,
  isModalOpened: false,
  isSearchOpened: false,
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
    setSearchMenu(state, action: PayloadAction<boolean>) {
      state.isSearchOpened = action.payload;
    },
    setAllMenuClosed(state) {
      state.isBurgerOpened = false;
      state.isModalOpened = false;
      state.isSearchOpened = false;
    },
  },
});

export default appSlice.reducer;
export const { setTheme, setBurgerMenu, setModalMenu, setSearchMenu, setAllMenuClosed } = appSlice.actions;
