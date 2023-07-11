import { styled } from 'styled-components';

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
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 332px));
  justify-content: center;
  column-gap: 20px;
  row-gap: 30px;
  margin-bottom: 38px;
`;

export const Button = styled.button`
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

  &:active {
    transform: var(--button-pressed);
    transition: var(--transition);
  }
`;
