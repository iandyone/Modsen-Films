import { styled, css } from 'styled-components';
import '@styles/index.scss';

export const MovieCardElement = styled.div<{ $isLoading?: boolean }>`
  transition: var(--transition);

  &:hover {
    box-shadow: 0px 4px 20px var(--shadow-color);
    transform: scale(1.05);
    cursor: pointer;
    transition: var(--transition);
  }

  ${(props) =>
    props.$isLoading &&
    css`
      position: relative;
      top: -48px;
    `}// min-height: 284px;
`;

export const Picture = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  max-height: 186px;

  @media (max-width: 480px) {
    max-height: none;
  }
`;

export const Content = styled.div`
  padding: 12px 0px 24px;
  display: flex;
  column-gap: 12px;
`;

export const Avatar = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  flex: 0 0 36px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;

  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const Title = styled.h3`
  color: var(--text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  transition: var(--transition);
`;

export const Text = styled.p`
  font-size: 14px;
  color: var(--text-color);
  transition: var(--transition);
`;
