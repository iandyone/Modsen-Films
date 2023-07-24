import { IFIlter, IGenre, IMovie, IMovieSliceProps } from '@constants/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: IMovieSliceProps = {
  movies: [],
  moviesPage: 1,
  searchByTag: 'ALL',
  searchByTitle: '',
  title: '',
  filter: 'default',
  movieID: 0,
};

const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {
    setMoviesPage(state, action: PayloadAction<number>) {
      state.moviesPage = action.payload;
    },
    setSearchTag(state, action: PayloadAction<IGenre>) {
      state.searchByTag = action.payload;
    },
    setSearchTitle(state, action: PayloadAction<string>) {
      state.searchByTitle = action.payload;
    },
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    addMovies(state, action: PayloadAction<IMovie[]>) {
      state.movies = [...state.movies, ...action.payload];
    },
    clearMovies(state) {
      state.movies = [];
    },
    clearFilters(state) {
      state.movies = initialState.movies;
      state.searchByTag = initialState.searchByTag;
      state.searchByTitle = initialState.searchByTitle;
      state.title = initialState.title;
      state.moviesPage = initialState.moviesPage;
    },
    setFilter(state, action: PayloadAction<IFIlter>) {
      state.filter = action.payload;
    },
    setMovieID(state, action: PayloadAction<number>) {
      state.movieID = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const { setSearchTag, setMoviesPage, addMovies, setSearchTitle, setTitle, clearMovies, clearFilters, setFilter, setMovieID } =
  movieSlice.actions;
