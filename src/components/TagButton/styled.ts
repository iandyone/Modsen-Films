import { TagButtonProps } from '@constants/types';
import { styled, css } from 'styled-components';

export const Button = styled.button<{ $options: TagButtonProps; $isButtonActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 6px 15px;
  min-width: 52px;
  font-size: var(--font-size-s);
  color: ${(props) => props.$options.$color};
  background: ${(props) => props.$options.$background};
  transition: var(--transition);

  &:active {
    transform: var(--button-pressed);
    transition: var(--transition);
  }

  ${({ $isButtonActive }) =>
    !$isButtonActive &&
    css`
      &:hover {
        background: var(--button-hover-bg);
        transition: var(--transition);
      }
    `}
`;
