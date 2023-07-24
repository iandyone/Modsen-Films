import styled from 'styled-components';

export const AppContainer = styled.div`
  max-width: 1440px;
  padding: 0 16px;
  margin: 0 auto;
  overflow-x: hidden;

  @media (max-width: 700px) {
    padding: 0 20px;
  }
`;

export const NavElement = styled.nav`
  display: flex;
  min-height: 54px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  padding: 12px 0px;

  @media (max-width: 600px) {
    padding: 20px 0px;
    justify-content: left;
  }
`;

export const Nav = styled.div`
  border: 1px solid var(--border-color);
  border-left: none;
  border-right: none;
  transition: var(--transition);

  @media (max-width: 600px) {
    border: none;
  }
`;
