import { SearchTags, Theme } from '@constants/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IConfigState {
  theme: Theme;
  activeTag: SearchTags;
}

const initialState: IConfigState = {
  theme: 'light',
  activeTag: SearchTags.ALL,
};

const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
    },
    setSearchTag(stage, action: PayloadAction<SearchTags>) {
      stage.activeTag = action.payload;
    },
  },
});

export default appConfigSlice.reducer;
export const { setTheme, setSearchTag } = appConfigSlice.actions;
