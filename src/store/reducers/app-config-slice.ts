import { SearchTags, Theme } from '@constants/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IConfigState {
  theme: Theme;
  activeTag: SearchTags;
  filmsPerPage: number;
  isBurgerOpened: boolean;
}

const initialState: IConfigState = {
  theme: 'light',
  activeTag: SearchTags.ALL,
  filmsPerPage: 16,
  isBurgerOpened: false,
};

const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
    },
    setSearchTag(state, action: PayloadAction<SearchTags>) {
      state.activeTag = action.payload;
    },
    setBurgerMenu(state, action: PayloadAction<boolean>) {
      state.isBurgerOpened = action.payload ?? !state.isBurgerOpened;
    },
  },
});

export default appConfigSlice.reducer;
export const { setTheme, setSearchTag, setBurgerMenu } = appConfigSlice.actions;
