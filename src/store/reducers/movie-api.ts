import { axiosBaseQuery } from '@config/axios';
import { IBaseRequest, IMovieResponce, IVideoResponse, Languages,  MovieGenreTags } from '@constants/types';
import { createApi } from '@reduxjs/toolkit/query/react';

interface IFindMovieByTitleParams extends IBaseRequest {
  query: string;
}

interface IFindMovieByGenreParams extends IBaseRequest {
  genre: number;
}

interface IGetMovieParams extends IBaseRequest {
  genre?:  MovieGenreTags;
}

interface IGetVideoParams {
  movieID: number;
}

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

//https://api.themoviedb.org/3/movie/${movieID}/videos`);
