import { TagButtonProps } from '@constants/types';
import { styled } from 'styled-components';

export const Button = styled.button<{ $options: TagButtonProps }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  border-radius: 15px;
  background: var(--white);
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
`;
