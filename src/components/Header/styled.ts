import { styled } from 'styled-components';

export const AppContainer = styled.div`
  max-width: 1440px;
  padding: 0 16px;
  margin: 0 auto;
  overflow-x: hidden;
`;

export const HeaderBody = styled.div`
  height: 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 25px;
`;

export const LogoElement = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
  min-width: 144px;
`;

export const LogoText = styled.p`
  color: var(--text-color);
  font-family: Roboto;
  font-weight: bold;
`;
