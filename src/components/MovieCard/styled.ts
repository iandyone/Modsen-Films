import { styled } from 'styled-components';

export const MovieCardElement = styled.div`
  // border: 1px solid red;
  min-height: 284px;
`;

export const Picture = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  max-height: 186px;
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
`;

export const Text = styled.p`
  font-size: 14px;
  color: var(--text-color)
`;