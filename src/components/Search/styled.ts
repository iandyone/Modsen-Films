import { styled, css } from 'styled-components';

export const Input = styled.input.attrs({
  placeholder: 'Search',
  type: 'text',
})`
  width: 100%;
  max-width: 570px;
  height: 38px;
  padding: 4px 14px;
  border: 1px solid var(--border-color);
  background: var(--input-bg);
  color: var(--text-color);
  transition: var(--transition);

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
  transition: var(--transition);

  &:active {
    transform: var(--button-pressed);
    transition: var(--transition);
  }
`;
export const ElasticSearch = styled.div<{ $visible: boolean }>`
  display: none;

  ${({ $visible }) =>
    $visible &&
    css`
      position: absolute;
      z-index: 90;
      top: 100%;
      left: 0;
      right: 0;
      max-width: 628px;

      max-height: 450px;
      background: var(--input-bg);
      padding-bottom: 14px;
      overflow: auto;

      display: flex;
      flex-direction: column;

      color: var(--text-color);
      font-size: var(--font-size-m);
      box-shadow: 0px 4px 12px var(--shadow-color);
      line-height: 18px;
      transition: var(--transition);
    `}
`;

export const Movie = styled.li`
  display: flex;
  column-gap: 30px;
  padding: 14px;
  transition: var(--transition);
  border-bottom: 1px solid var(--border-color);

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
`;
