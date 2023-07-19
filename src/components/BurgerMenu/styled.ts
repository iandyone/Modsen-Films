import styled, { css } from 'styled-components';

export const MenuContainer = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: block;
    position: absolute;
    top: 16px;
    right: 20px;
    height: 100%;
  }
`;

export const BurgerButton = styled.button`
  position: relative;
  z-index: 160;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const BurgerLine = styled.span<{ $isOpen: boolean }>`
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--text-color);
  transition: var(--transition);

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      &:nth-child(1) {
        transform: rotate(45deg) translate(5px, 6px);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -6px);
      }
    `}
`;

export const MenuContent = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  z-index: 150;
  top: 66px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--burger-bg);
  transform: translateX(100%);
  transition: var(--transition);
  overflow: hidden;
  padding: 100px 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: translateX(0%);
    `};
`;

export const MenuOption = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const Text = styled.span`
  color: var(--text-color);
  font-size: var(--font-size-l);
`;
