import { styled, css } from 'styled-components';
import '@styles/keyframes.scss';

export const Input = styled.input.attrs({
  placeholder: 'Search',
  type: 'text',
})`
  width: 100%;
  max-width: 640px;
  height: 38px;
  padding: 4px 14px;
  border: 1px solid var(--border-color);
  background: var(--input-bg);
  color: var(--text-color);
  transition: var(--transition);

  &:hover {
    border: 1px solid var(--text-color);
    transition: var(--transition);
  }

  &:focus {
    border: 1px solid var(--orange);
    transition: var(--transition);
  }

  &::-webkit-input-placeholder {
    color: var(--border-color);
  }

  @media (max-width: 992px) {
    max-width: auto;
  }
`;

export const SearchForm = styled.form`
  width: 100%;
  max-width: 640px;
  display: flex;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;

  &:focus {
    border: 1px solid var(--orange);
    transition: var(--transition);
  }
`;

export const SearchButton = styled.button.attrs({
  type: 'submit',
})<{ $isFocused: boolean }>`
  position: absolute;
  right: calc(0% + 1px);
  top: 2px;
  bottom: 2px;
  height: 34px;
  width: 100%;
  max-width: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--input-bg);
  transition: var(--transition);

  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 1px;
    height: 38px;
    background: var(--border-color);
    transition: var(--transition);

    ${({ $isFocused }) =>
    $isFocused &&
      css`
        background: var(--orange);
      `}
  }

  &:active {
    transform: var(--button-pressed);
    transition: var(--transition);
  }
`;
export const ElasticSearch = styled.ul<{ $visible: boolean; $isLoading: boolean }>`
  display: none;

  ${({ $visible }) =>
    $visible &&
    css`
      position: absolute;
      z-index: 90;
      top: 100%;
      left: 0;
      right: 0;
      max-width: 640px;
      max-height: 450px;
      background: var(--input-bg);
      padding: 14px 0px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      color: var(--text-color);
      font-size: var(--font-size-m);
      box-shadow: 0px 4px 12px var(--shadow-color);
      line-height: 18px;
      transition: var(--transition);
    `}

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      align-items: center;
    `}
`;

export const Movie = styled.li`
  display: flex;
  column-gap: 30px;
  padding: 14px;
  transition: var(--transition);
  border-bottom: 1px solid var(--border-color);
  transition: var(--transition);

  &:hover {
    box-shadow: 0px 4px 20px var(--shadow-color);
    cursor: pointer;
    transition: var(--transition);
  }
`;

export const Poster = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  max-width: 92px;
  max-height: 138px;

  @media (max-width: 700px) {
    max-height: 110px;
  }
`;

export const MovieData = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  @media (max-width: 700px) {
    row-gap: 6px;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
`;
export const Overview = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 6;
  overflow: hidden;
  -webkit-box-orient: vertical;

  @media (max-width: 700px) {
    -webkit-line-clamp: 5;
  }
`;

export const Counter = styled.p`
  font-style: italic;
  padding: 14px 14px 0px;
`;

export const Spinner = styled.div`
  border: 4px solid var(--orange);
  border-bottom: 4px solid transparent;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spinAnimation 1s linear infinite;
`;
