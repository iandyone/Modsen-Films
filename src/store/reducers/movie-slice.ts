import { IFIlter, IGenre, IMovie } from '@constants/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IMovieSliceProps {
  movies: IMovie[];
  originals: IMovie[];
  moviesPage: number;
  searchByTag: IGenre;
  searchByTitle: string;
  title: string;
  filter: IFIlter;
}

const initialState: IMovieSliceProps = {
  movies: [],
  originals: [],
  moviesPage: 1,
  searchByTag: 'ALL',
  searchByTitle: '',
  title: '',
  filter: 'default',
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
      state.searchByTag = initialState.searchByTag;
      state.searchByTitle = initialState.searchByTitle;
      state.title = initialState.title;
      state.moviesPage = initialState.moviesPage;
      state.movies = initialState.movies;
    },
    setFilter(state, action: PayloadAction<IFIlter>) {
      state.filter = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const { setSearchTag, setMoviesPage, addMovies, setSearchTitle, setTitle, clearMovies, clearFilters, setFilter } = movieSlice.actions;
