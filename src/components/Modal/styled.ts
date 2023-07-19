import { styled, css } from 'styled-components';

export const ModalElement = styled.div<{ $isVisible: boolean }>`
  pointer-events: none;
  opacity: 0;
  transition: all 0.5s ease;
  height: 0;
  width: 0;
  height: 0;
  position: relative;
  z-index: 200;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
      position: fixed;
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 80%);
      pointer-events: auto;
      transition: background 0.5s ease;
    `}
`;

export const Content = styled.div<{ $isVisible: boolean }>`
  ${({ $isVisible }) =>
    $isVisible &&
    css`
      width: 70vw;
      height: 39.25vw;

      background: var(--bg-color);
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 992px) {
        width: 90vw;
        height: 50.25vw;
      }
    `}
`;

export const Video = styled.iframe.attrs<{ src: string }>(({ src }) => ({
  src: src,
  title: 'YouTube video player',
  allow: 'accelerometer; clipboard-write; encrypted-media; gyroscope; web-share',
  allowFullScreen: true,
  width: '80%',
  height: '80%',
}))`
  width: 100%;
  height: 100%;
`;

export const CloseButton = styled.button<{ $isVisible: boolean }>`
  pointer-events: none;
  border-radius: 50%;
  transition: all 0.5s ease;
  opacity: 0;
  display: none;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      position: absolute;
      display: block;
      opacity: 1;
      width: 48px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 5%;
      right: 5%;
      transition: var(--transition);
      pointer-events: auto;

      &:active {
        transform: var(--button-pressed);
        transition: var(--transition);
      }

      @media (max-width: 992px) {
        top: 2%;
        right: 2%;
      }
    `}
`;

export const Text = styled.h3`
  color: var(--text-color);
  font-size: 20px;
  font-weight: 400;
  line-height: 18px;
  transition: var(--transition);
`;
