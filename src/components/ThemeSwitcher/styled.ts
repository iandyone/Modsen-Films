import { Theme } from '@constants/types';
import styled from 'styled-components';

export const Switcher = styled.div`
  width: 50px;
  height: 28px;
  background-color: var(--bg-color);
  border: 2px solid var(--main-color);
  border-radius: 28px;
  position: relative;
  transition(--transition);

  &:hover {
    cursor: pointer;
  }
`;

export const Toggler = styled.div<{ theme: Theme }>`
  width: 27px;
  height: 27px;
  border: 2px solid var(--main-color);
  border-radius: 50%;
  position: absolute;
  left: -2px;
  top: -1px;
  transform: translateX(${(props) => (props.theme === 'light' ? '0' : '24px')});
  transition: transform 0.2s ease;
`;
