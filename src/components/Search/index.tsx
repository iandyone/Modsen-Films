import { ChangeEvent, FC, FormEvent } from 'react';
import { Input, SearchButton, SearchForm } from './styled';
import { useDispatchTyped, useSelectorTyped } from '@utils/hooks/redux-hooks';
import { clearFilters, clearMovies, setFilter, setMoviesPage, setSearchTag, setSearchTitle, setTitle } from '@store/reducers/movie-slice';
import SearchIcon from '@assets/icons/search.svg';

export const Search: FC = () => {
  const { title } = useSelectorTyped((store) => store.movies);
  const dispatch = useDispatchTyped();

  function handlerOnChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch(setTitle(e.target.value));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!title) {
      dispatch(clearFilters());
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

  return (
    <SearchForm onSubmit={onSubmit}>
      <Input value={title} onChange={handlerOnChange} />
      <SearchButton>
        <SearchIcon fill='var(--text-color)' />
      </SearchButton>
    </SearchForm>
  );
};
