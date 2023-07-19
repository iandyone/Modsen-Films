import { useDispatchTyped, useSelectorTyped } from '@utils/hooks/redux-hooks';
import { ChangeEvent, FC, FormEvent, MouseEvent } from 'react';
import { clearFilters, clearMovies, setFilter, setMovieID, setMoviesPage, setSearchTag, setSearchTitle, setTitle } from '@store/reducers/movie-slice';
import { Counter, ElasticSearch, Input, Movie, MovieData, Overview, Poster, SearchButton, SearchForm, Title } from './styled';
import { useFindMoviesByTitleQuery } from '@store/reducers/movie-api';
import { setModalMenu, setSearchMenu } from '@store/reducers/app-slice';
import { MagnifyingGlass } from 'react-loader-spinner';
import { useDebounce } from '@utils/hooks/useDebounce';
import SearchIcon from '@assets/icons/search.svg';
import DefaultPoster from '@assets/no-poster.png';

export const Search: FC = () => {
  const { title, filter } = useSelectorTyped((store) => store.movies);
  const dispatch = useDispatchTyped();
  const debouncedTitle = useDebounce(title);
  const posterBaseURL = 'https://image.tmdb.org/t/p/w92';

  const { isSearchOpened } = useSelectorTyped((store) => store.app);
  const { data, isFetching } = useFindMoviesByTitleQuery({ query: debouncedTitle, page: 1 }, { skip: debouncedTitle.length < 2 });
  const { searchCondition, counterCondition, fetchingCondition, moviesCondition } = getVisibilityConditions();

  function handlerOnChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    dispatch(setTitle(value));
    dispatch(setSearchMenu(value.length >= 2));
  }

  function handlerOnClickMovie(e: MouseEvent<HTMLLIElement>, ID: number) {
    dispatch(setSearchMenu(false));
    dispatch(setMovieID(ID));
    dispatch(setModalMenu(true));
    e.stopPropagation();
  }

  function handlerOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(setSearchMenu(false));

    if (!title) {
      if (filter !== 'default') dispatch(clearFilters());
      dispatch(setSearchTag('ALL'));
      dispatch(setFilter('default'));
      return;
    }

    dispatch(setSearchTitle(title));
    dispatch(setMoviesPage(1));
    dispatch(clearMovies());
    dispatch(setSearchTag('ALL'));
    dispatch(setFilter('title'));
    dispatch(setModalMenu(false));
  }

  function handlerOnFocus() {
    dispatch(setSearchMenu(true));
  }

  function getVisibilityConditions() {
    return {
      fetchingCondition: isFetching,
      counterCondition: data && !isFetching && data?.total_results !== 0,
      moviesCondition: data && !isFetching,
      searchCondition: debouncedTitle.length !== 0 && data?.total_results !== 0 && isSearchOpened,
    };
  }

  function handlerOnClickForm(e: MouseEvent<HTMLFormElement>) {
    e.stopPropagation();
  }

  return (
    <SearchForm onSubmit={handlerOnSubmit} onClick={handlerOnClickForm}>
      <Input value={title} onChange={handlerOnChange} onFocus={handlerOnFocus} />
      <SearchButton>
        <SearchIcon fill='var(--text-color)' />
      </SearchButton>
      <ElasticSearch $visible={searchCondition} $isLoading={isFetching}>
        {fetchingCondition && <MagnifyingGlass color='var(--orange)' glassColor='var(--bg-color)' />}

        {moviesCondition &&
          data.results.map((movie) => {
            const poster = movie.poster_path ? `${posterBaseURL}${movie.poster_path}` : DefaultPoster;
            const overview = movie.overview ? movie.overview : 'no description';

            return (
              <Movie onClick={(e: MouseEvent<HTMLLIElement>) => handlerOnClickMovie(e, movie.id)} key={movie.id}>
                <Poster src={poster} alt={movie.title} />
                <MovieData>
                  <Title>{movie.title}</Title>
                  <Overview>{overview}</Overview>
                </MovieData>
              </Movie>
            );
          })}
        {counterCondition && <Counter>Total movies: {data.total_results}</Counter>}
      </ElasticSearch>
    </SearchForm>
  );
};
