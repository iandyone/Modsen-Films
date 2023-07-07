import { styled } from 'styled-components';

export const Input = styled.input.attrs({
  placeholder: 'Search',
  type: 'text',
})`
  width: 100%;
  max-width: 570px;
  height: 38px;
  padding: 5px 15px;
  border: 1px solid var(--border-color);
  background: var(--input-bg);
  color: var(--text-color-main);

  &::-webkit-input-placeholder {
    color: var(--border-color);
  }
`;

export const SearchForm = styled.form`
  width: 100%;
  max-width: 640px;
  display: flex;
`;

export const SearchButton = styled.button.attrs({
  type: 'submit',
})`
  heith: 38px;
  width: 100%;
  max-width: 58px;
  border: 1px solid var(--border-color);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--input-bg);
`;
