import { IMovie, SearchTags } from '@constants/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IMovieSliceProps {
  moviesPage: number;
  activeTag: SearchTags;
  movies: IMovie[];
}

const initialState: IMovieSliceProps = {
  moviesPage: 1,
  activeTag: SearchTags.ALL,
  movies: [],
};

const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {
    setSearchTag(state, action: PayloadAction<SearchTags>) {
      state.activeTag = action.payload;
    },
    setMoviesPage(state, action: PayloadAction<number>) {
      state.moviesPage = action.payload;
    },
    addMovies(state, action: PayloadAction<IMovie[]>) {
      state.movies = [...state.movies, ...action.payload];
    },
  },
});

export default movieSlice.reducer;
export const { setSearchTag, setMoviesPage, addMovies } = movieSlice.actions;
