import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Input, SearchButton, SearchForm } from './styled';
import SearchIcon from '@assets/icons/search.svg';

export const Search: FC = () => {
  const [value, setValue] = useState('');

  function handlerOnChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    alert(value);
    e.preventDefault();
  }

  return (
    <SearchForm onSubmit={onSubmit}>
      <Input value={value} onChange={handlerOnChange} />
      <SearchButton>
        <SearchIcon fill='var(--text-color-main)' />
      </SearchButton>
    </SearchForm>
  );
};
