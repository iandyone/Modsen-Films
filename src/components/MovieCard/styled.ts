import { styled, css } from 'styled-components';
// import '@styles/keyframes.scss';

export const MovieCardElement = styled.div<{ $isLoading?: boolean }>`
  transition: var(--transition);
  padding: 0 4px;

  ${({ $isLoading }) =>
    !$isLoading &&
    css`
      &:hover {
        box-shadow: 0px 4px 20px var(--shadow-color);
        transform: scale(1.05);
        cursor: pointer;
        transition: var(--transition);
      }
    `}

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      position: relative;
      min-height: 200px;
      overflow: hidden;
      background-color: var(--skeleton-main);
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        background-image: var(--skeleton-shimer);
        animation: var(--shimer);

        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      
      }
    }
    `}
`;

export const Picture = styled.img.attrs(({ src }) => ({
  src: src,
  alt: 'poster',
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
  text-transform: capitalize;
  line-height: 130%;
`;

export const PictureLoader = styled.div`
  max-height: 285px;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 36%;
  top: 0;
  background: var(--gray);
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    bottom: 45%;
  }

  @media (max-width: 700px) {
    bottom: 35%;
  }
`;

export const AvatarLoader = styled.div`
  width: 36px;
  height: 36px;
  position: absolute;
  left: 4px;
  bottom: -50px;
  border-radius: 50%;
  background: var(--gray);
`;

export const ContentLoader = styled.div`
  right: 10px;
  height: 14px;
  width: 72%;
  background: var(--gray);
  position: absolute;
  bottom: -30px;

  &:nth-child(2) {
    bottom: -52px;
  }
`;
