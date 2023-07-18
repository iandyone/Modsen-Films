import { useDispatchTyped, useSelectorTyped } from '@utils/hooks/redux-hooks';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { clearFilters, clearMovies, setFilter, setMoviesPage, setSearchTag, setSearchTitle, setTitle } from '@store/reducers/movie-slice';
import { Counter, ElasticSearch, Input, Movie, MovieData, Overview, Poster, SearchButton, SearchForm, Title } from './styled';
import { useFindMoviesByTitleQuery } from '@store/reducers/movie-api';
import { useDebounce } from '@utils/hooks/useDebounce';
import { Loader } from '@components/App/styled';
import { MagnifyingGlass } from 'react-loader-spinner';
import SearchIcon from '@assets/icons/search.svg';
import DefaultPoster from '@assets/no-poster.png';

export const Search: FC = () => {
  const { title } = useSelectorTyped((store) => store.movies);
  const dispatch = useDispatchTyped();
  const debouncedTitle = useDebounce(title);
  const posterBaseURL = 'http://image.tmdb.org/t/p/w92';

  const [elasticSearchVisibility, setVisibility] = useState(false);
  const { filter } = useSelectorTyped((store) => store.movies);
  const { data, isFetching } = useFindMoviesByTitleQuery({ query: debouncedTitle, page: 1 });
  const { searchCondition, counterCondition, fetchingCondition, moviesCondition } = getVisibilityConditions();

  function handlerOnChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch(setTitle(e.target.value));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setVisibility(false);

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
  }

  function handlerOnFocus() {
    setVisibility(true);
  }

  function handlerOnBlur() {
    setVisibility(false);
  }

  function getVisibilityConditions() {
    return {
      fetchingCondition: isFetching,
      counterCondition: data && !isFetching && data.total_results !== 0,
      moviesCondition: data && !isFetching,
      searchCondition: elasticSearchVisibility && debouncedTitle.length !== 0 && data.total_results !== 0,
    };
  }

  return (
    <SearchForm onSubmit={onSubmit}>
      <Input value={title} onChange={handlerOnChange} onFocus={handlerOnFocus} onBlur={handlerOnBlur} />
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
              <Movie key={movie.id}>
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
