import { axiosBaseQuery } from '@config/axios';
import { IMovieResponce, Languages, MovieGenres } from '@constants/types';
import { createApi } from '@reduxjs/toolkit/query/react';

export interface IFindMovieByTitleParams {
  query: string;
  page: number;
}

export interface IFindMovieByGenreParams {
  genre: number;
  page: number;
}

export interface IGetMovieParams {
  page: number;
  genre?: MovieGenres;
}

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: axiosBaseQuery,
  endpoints: (build) => ({
    getMovies: build.query<IMovieResponce, IGetMovieParams>({
      query: ({ page }) => ({
        // url: '/discover/movie',
        // url: '/movie/top_rated',
        url: '/movie/now_playing',
        method: 'GET',
        params: {
          page: page,
          language: Languages.ENGLISH,
        },
      }),
    }),
    findMoviesByTitle: build.query<IMovieResponce, IFindMovieByTitleParams>({
      query: ({ page, query }) => ({
        url: '/search/movie',
        method: 'GET',
        params: {
          page,
          query,
        },
      }),
    }),
    findMoviesByGenre: build.query<IMovieResponce, IFindMovieByGenreParams>({
      query: ({ page, genre }) => ({
        url: '/discover/movie',
        method: 'GET',
        params: {
          page,
          with_genres: genre,
        },
      }),
    }),
  }),
});

export const { useGetMoviesQuery, useFindMoviesByTitleQuery, useFindMoviesByGenreQuery } = movieApi;
