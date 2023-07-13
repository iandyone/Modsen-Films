import { MovieCard } from '@components/MovieCard';
import { FC, useEffect } from 'react';
import { AppContainer, Body, Button, MovieBarElement } from './styled';
import { useDispatchTyped, useSelectorTyped } from '@utils/hooks/redux-hooks';
import { IMovie } from '@constants/types';
import { useGetMoviesQuery } from '@store/reducers/movie-api';
import { addMovies, setMoviesPage } from '@store/reducers/movie-slice';

export const MovieBar: FC = () => {
  const { moviesPage, movies: currentMovies } = useSelectorTyped((store) => store.movies);
  const { filmsPerPage } = useSelectorTyped((store) => store.app);
  const { data, isFetching, isSuccess } = useGetMoviesQuery({ page: moviesPage });

  const dispatch = useDispatchTyped();
  const movieLoader = new Array(filmsPerPage).fill({});
  const movies: IMovie[] = data?.results ?? new Array(filmsPerPage).fill({});

  function handlerOnClick() {
    dispatch(setMoviesPage(moviesPage + 1));
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(addMovies(data.results));
      console.log(currentMovies);
    }
  }, [data, dispatch, movies]);

  return (
    <MovieBarElement>
      <AppContainer>
        <Body>
          {currentMovies.map((movie, index) => {
            return <MovieCard key={movie.title ?? index} isLoading={false} movieData={movie} />;
          })}
          {isFetching &&
            movieLoader.map((movie, index) => {
              return <MovieCard key={index} isLoading={isFetching} movieData={movie} />;
            })}
        </Body>
        <Button onClick={handlerOnClick}>Show More</Button>
      </AppContainer>
    </MovieBarElement>
  );
};
