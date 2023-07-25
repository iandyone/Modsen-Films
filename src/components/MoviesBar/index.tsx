import { MovieCard } from '@components/MovieCard';
import { FC, useEffect, useState } from 'react';
import { AppContainer, Body, Button, MovieBarElement } from './styled';
import { useDispatchTyped, useSelectorTyped } from '@utils/hooks/redux-hooks';
import { MovieGenreTags } from '@constants/types';
import { useFindMoviesByGenreQuery, useFindMoviesByTitleQuery, useGetMoviesQuery } from '@store/reducers/movie-api';
import { addMovies, setMoviesPage } from '@store/reducers/movie-slice';
import { ErrorState } from '@components/ErrorState';

export const MovieBar: FC = () => {
  const { filmsPerPage } = useSelectorTyped((store) => store.app);
  const { moviesPage, movies, searchByTitle, searchByTag, filter } = useSelectorTyped((store) => store.movies);
  const { skipBase, skipTitle, skipGenre } = getFetchSkipConditions();
  const {
    data: moviesCatalog,
    isFetching: isFetchingCatalog,
    isSuccess: isSuccessCatalog,
    error,
  } = useGetMoviesQuery({ page: moviesPage }, { skip: skipBase });
  const {
    data: moviesByTitle,
    isFetching: isFetchingByTitle,
    isSuccess: isSuccessByTitle,
  } = useFindMoviesByTitleQuery({ page: moviesPage, query: searchByTitle }, { skip: skipTitle });
  const {
    data: moviesByGenre,
    isFetching: isFetchingByGenre,
    isSuccess: isSuccessByGenre,
  } = useFindMoviesByGenreQuery({ page: moviesPage, genre: MovieGenreTags[searchByTag] }, { skip: skipGenre });
  const [isNextPage, setIsNextPage] = useState(true);

  const dispatch = useDispatchTyped();
  const movieLoader = new Array(filmsPerPage).fill({});
  const isLoader = isFetchingCatalog || isFetchingByTitle || isFetchingByGenre;

  function handlerOnClick() {
    dispatch(setMoviesPage(moviesPage + 1));
  }

  function getFetchSkipConditions() {
    return {
      skipBase: !!searchByTitle || searchByTag !== 'ALL',
      skipTitle: !searchByTitle || searchByTag !== 'ALL',
      skipGenre: !!searchByTitle || searchByTag === 'ALL',
    };
  }

  function getDisplayedMovies() {
    if (isSuccessCatalog && filter === 'default') return moviesCatalog;
    if (isSuccessByTitle && filter === 'title') return moviesByTitle;
    if (isSuccessByGenre && filter === 'genre') return moviesByGenre;
  }

  useEffect(() => {
    const moviesData = getDisplayedMovies();

    if (moviesData) {
      dispatch(addMovies(moviesData.results));
      setIsNextPage(moviesPage + 1 <= moviesData.total_pages);
    }
    //eslint-disable-next-line
  }, [moviesByTitle, moviesByGenre, moviesCatalog, dispatch, filter]);

  return (
    <MovieBarElement data-testid='movies-bar'>
      <AppContainer>
        {error && error.code === 'ERR_NETWORK' && (
          <ErrorState message='Unable to load movies.Please try to turning VPN on and update the page' />
        )}

        {!error && movies.length === 0 && !isLoader && <ErrorState message='There is no movies' />}
        <Body>
          {movies.map((movie) => {
            return <MovieCard key={movie.id} isLoading={false} movieData={movie} />;
          })}

          {isLoader &&
            movieLoader.map((movie, index) => {
              return <MovieCard key={index} isLoading={isLoader} movieData={movie} />;
            })}
        </Body>
        <Button onClick={handlerOnClick} $isNextPage={isNextPage && movies.length !== 0} data-testid='show-more-button'>
          Show More
        </Button>
      </AppContainer>
    </MovieBarElement>
  );
};
