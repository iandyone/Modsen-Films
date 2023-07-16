import { MovieCard } from '@components/MovieCard';
import { FC, useEffect } from 'react';
import { AppContainer, Body, Button, MovieBarElement } from './styled';
import { useDispatchTyped, useSelectorTyped } from '@utils/hooks/redux-hooks';
import { MovieGenres } from '@constants/types';
import { useFindMoviesByGenreQuery, useFindMoviesByTitleQuery, useGetMoviesQuery } from '@store/reducers/movie-api';
import { addMovies, setMoviesPage } from '@store/reducers/movie-slice';

export const MovieBar: FC = () => {
  const { moviesPage, movies: currentMovies, searchByTitle, searchByTag, filter } = useSelectorTyped((store) => store.movies);
  const { data: moviesCatalog, isFetching: isFetchingCatalog, isSuccess: isSuccessCatalog } = useGetMoviesQuery({ page: moviesPage }, { skip: !!searchByTitle || searchByTag !== 'ALL' });
  const { data: moviesByTitle, isFetching: isFetchingByTitle, isSuccess: isSuccessByTitle } = useFindMoviesByTitleQuery({ page: moviesPage, query: searchByTitle }, { skip: !searchByTitle || searchByTag !== 'ALL' });
  const { data: moviesByGenre, isFetching: isFetchingByGenre, isSuccess: isSuccessByGenre } = useFindMoviesByGenreQuery({ page: moviesPage, genre: MovieGenres[searchByTag] }, { skip: Boolean(searchByTitle) || searchByTag === 'ALL' });
  const { filmsPerPage } = useSelectorTyped((store) => store.app);

  const dispatch = useDispatchTyped();
  const movieLoader = new Array(filmsPerPage).fill({});
  const isLoader = isFetchingCatalog || isFetchingByTitle || isFetchingByGenre || !currentMovies.length;

  function handlerOnClick() {
    dispatch(setMoviesPage(moviesPage + 1));
  }

  useEffect(() => {
    if (isSuccessByGenre && filter === 'genre') {
      dispatch(addMovies(moviesByGenre.results));
      return;
    }

    if (isSuccessByTitle && filter === 'title') {
      dispatch(addMovies(moviesByTitle.results));
      return;
    }

    if (isSuccessCatalog && filter === 'default') {
      dispatch(addMovies(moviesCatalog.results));
      return;
    }
    //eslint-disable-next-line
  }, [moviesByTitle, moviesByGenre, moviesCatalog, dispatch, filter]);

  return (
    <MovieBarElement>
      <AppContainer>
        <Body>
          {currentMovies.map((movie, index) => {
            return <MovieCard key={movie.id ?? index} isLoading={false} movieData={movie} />;
          })}
          {isLoader &&
            movieLoader.map((movie, index) => {
              return <MovieCard key={index} isLoading={isLoader} movieData={movie} />;
            })}
        </Body>
        <Button onClick={handlerOnClick}>Show More</Button>
      </AppContainer>
    </MovieBarElement>
  );
};
