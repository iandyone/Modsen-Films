import { axiosBaseQuery } from '@config/axios';
import {
  IFindMovieByGenreParams,
  IFindMovieByTitleParams,
  IGetMovieParams,
  IGetVideoParams,
  IMovieResponce,
  IVideoResponse,
  Languages,
} from '@constants/types';
import { createApi } from '@reduxjs/toolkit/query/react';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: axiosBaseQuery,
  endpoints: (build) => ({
    getMovies: build.query<IMovieResponce, IGetMovieParams>({
      query: ({ page }) => ({
        url: '/discover/movie',
        method: 'GET',
        params: {
          page: page,
          language: Languages.ENGLISH,
          include_video: true,
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
          include_video: true,
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
          include_video: true,
        },
      }),
    }),
    getVideo: build.query<IVideoResponse, IGetVideoParams>({
      query: ({ movieID }) => ({
        url: `/movie/${movieID}/videos`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetMoviesQuery, useFindMoviesByTitleQuery, useFindMoviesByGenreQuery, useGetVideoQuery } = movieApi;
