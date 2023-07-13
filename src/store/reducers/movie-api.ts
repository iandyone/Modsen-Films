import { IMovie, IMovieResponce, Languages, MovieGenres } from '@constants/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.themoviedb.org/3';
// ''https://api.themoviedb.org/3/discover/movie?'
// https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&append_to_response=credits

const API_KEY = 'a10b3394e18fff40e8bda125df9dfca0';

export interface IGetMovieParams {
  page: number;
  genre?: MovieGenres;
}

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (build) => ({
    getMovies: build.query<IMovieResponce, IGetMovieParams>({
      query: ({ page }) => ({
        url: '/discover/movie',
        // url: '/movie/now_playing',
        // url: '/movie/top_rated',
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTBiMzM5NGUxOGZmZjQwZThiZGExMjVkZjlkZmNhMCIsInN1YiI6IjY0YWJhYzg0NmEzNDQ4MDEwYjcxMDc1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2-9apDAnB9If9OEtvOWFYg5y0dlDK-pb-JbNb7a8mWQ',
        },
        params: {
          // append_to_response: 'credits',
          page: page,
          language: Languages.ENGLISH,
          api_key: API_KEY,
        },
      }),
    }),
  }),
});


export const { useGetMoviesQuery } = movieApi;
