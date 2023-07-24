import { styled, css } from 'styled-components';

export const MovieCardElement = styled.div<{ $isLoading?: boolean }>`
  transition: var(--transition);

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
    transition: var(--transition);
    position: relative;
    padding-bottom: 84.25%;
    overflow: hidden;
    max-width: calc(16 / 9 * 100vh);

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

export const Poster = styled.img.attrs(({ src }) => ({
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
  column-gap: 14px;
`;

export const Avatar = styled.img.attrs((props) => ({
  src: props.src,
  alt: 'movie avatar',
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

export const PosterLoader = styled.div`
  max-height: 186px;
  height: 66%;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  background: var(--skeleton-main);
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    height: 60%;
  }

  @media (max-width: 1050px) {
    height: 55%;
  }

  @media (max-width: 992px) {
    height: 66%;
  }

  @media (max-width: 850px) {
    height: 61%;
  }

  @media (max-width: 850px) {
    height: 56%;
  }

  @media (max-width: 480px) {
    padding-bottom: 53.25%;
  }
`;

export const AvatarLoader = styled.div`
  width: 36px;
  height: 36px;
  position: absolute;
  bottom: -50px;
  border-radius: 50%;
  background: var(--skeleton-main);
`;

export const ContentLoader = styled.div`
  right: 0px;
  left: 48px;
  height: 14px;
  width: 100%;
  background: var(--skeleton-main);
  position: absolute;
  bottom: -30px;

  &:nth-child(2) {
    bottom: -52px;
  }
`;
