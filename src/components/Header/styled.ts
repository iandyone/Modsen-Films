import { styled } from 'styled-components';

export const AppContainer = styled.div`
  max-width: 1440px;
  padding: 0 16px;
  margin: 0 auto;
  overflow-x: hidden;
  width: 100%;

  @media (max-width: 600px) {
    padding: 16px 20px 0px;
  }
`;

export const Body = styled.div`
  height: 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 25px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    row-gap: 24px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
  min-width: 144px;

  &:hover {
    cursor: pointer;
  }
`;

export const Text = styled.h2`
  color: var(--text-color);
  font-family: Roboto;
  font-weight: bold;
  transition: var(--transition);
`;

export const Theme = styled.div`
  min-width: 144px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 992px) {
    min-width: auto;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
