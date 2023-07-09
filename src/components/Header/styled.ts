import { styled } from 'styled-components';

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
  color: var(--text-color-main);
  font-family: Roboto;
  font-weight: bold;
`;
