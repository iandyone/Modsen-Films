import { styled, css } from 'styled-components';

export const MovieBarElement = styled.section`
  height: 100%;
`;

export const AppContainer = styled.div`
  max-width: 1440px;
  padding: 28px 16px 40px 16px;
  margin: 0 auto;
  overflow-x: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 700px) {
    padding: 28px 20px 40px 20px;
  }
  @media (max-width: 600px) {
    padding-top: 0px;
  }
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 332px));
  justify-content: center;
  column-gap: 10px;
  row-gap: 30px;
  margin-bottom: 38px;
  width: 100%;

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    margin-bottom: 20px;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button<{ $isNextPage: boolean }>`
  color: var(--input-color);
  font-size: 22px;
  font-weight: bold;
  width: 192px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--button-bg);
  border-radius: 10px;
  transition: var(--transition);

  &:hover {
    border-radius: 30px;
    transition: var(--transition);
  }

  ${({ $isNextPage }) =>
    !$isNextPage &&
    css`
      display: none;
    `}

  &:active {
    transform: var(--button-pressed);
    transition: var(--transition);
  }

  @media (max-width: 992px) {
    font-size: var(--font-size-m);
    height: 44px;
    width: 180px;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-m);
    height: 36px;
    width: 200px;
  }
`;
