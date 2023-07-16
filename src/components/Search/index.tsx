import { ChangeEvent, FC, FormEvent } from 'react';
import { Input, SearchButton, SearchForm } from './styled';
import { useDispatchTyped, useSelectorTyped } from '@utils/hooks/redux-hooks';
import { clearMovies, setFilter, setMoviesPage, setSearchTag, setSearchTitle, setTitle } from '@store/reducers/movie-slice';
import SearchIcon from '@assets/icons/search.svg';

export const Search: FC = () => {
  const { title } = useSelectorTyped((store) => store.movies);
  const dispatch = useDispatchTyped();

  function handlerOnChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch(setTitle(e.target.value));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    dispatch(setSearchTitle(title));
    dispatch(setMoviesPage(1));
    dispatch(clearMovies());
    dispatch(setSearchTag('ALL'));
    dispatch(setFilter('title'));
    e.preventDefault();
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
