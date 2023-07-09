import styled from 'styled-components';

export const NavElement = styled.nav`
  display: flex;
  height: 54px;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
`;

export const Nav = styled.div`
  border: 1px solid var(--border-color);
  border-left: none;
  border-right: none;
`;

export const AppContainer = styled.div`
  max-width: 1440px;
  padding: 0 16px;
  margin: 0 auto;
  overflow-x: hidden;
`;
