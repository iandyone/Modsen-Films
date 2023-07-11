import { styled } from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  background: var(--bg-color);
  transition: (--transoton);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
`;

export const Text = styled.p`
  font-size: var(--font-size-l);
  color: var(--text-color);
  transition: var(--transition);
`;

export const Button = styled.button`
  color: var(--white);
  font-size: var(font-size-l);
  font-weight: bold;
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--orange);
  border-radius: 10px;
  transition: var(--transition);

  &:active {
    transform: var(--button-pressed);
    transition: var(--transition);
  }

  @media (max-width: 992px) {
    font-size: var(--font-size-l);
    height: 44px;
    width: 180px;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-m);
    height: 36px;
    width: 200px;
  }
`;