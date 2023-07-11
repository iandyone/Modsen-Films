import { SocialMedia } from '@constants/types';
import { styled } from 'styled-components';

export const AppContainer = styled.div`
  max-width: 1440px;
  padding: 0 16px;
  margin: 0 auto;
  overflow-x: hidden;
  padding: 54px 44px 18px;

  @media (max-width: 992px) {
    padding: 40px 16px 16px;
  }

  @media (max-width: 700px) {
    padding: 40px 20px 20px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const FooterElement = styled.footer`
  border-top: 1px solid var(--border-color);
  transition: var(--transition);
`;

export const Content = styled.div`
  display: flex;
  column-gap: 25px;

  @media (max-width: 700px) {
    justify-content: space-between;
    width: 100%;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
  }

  @media (max-width: 340px) {
    align-items: flex-start;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Link = styled.a.attrs({
  href: SocialMedia.WEBSITE,
  target: '_blank',
})`
  color: var(--footer-text);
  font-size: 20px;
  font-weight: 500;
  transition: var(--transition);

  @media (max-width: 992px) {
    font-size: var(--font-size-l);
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-m);
    text-align: center;
  }
  @media (max-width: 340px) {
    text-align: start;
  }
`;

export const Links = styled.ul`
  display: flex;
  column-gap: 24px;
  height: 16px;
`;

export const Media = styled.a.attrs((props) => ({
  href: props.href,
  target: '_blank',
}))`
  display: inline-block;
  height: 100%;

  &:active {
    transform: var(--button-pressed);
    transition: var(--transition);
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    row-gap: 35px;
  }
`;

export const About = styled.p`
  color: var(--footer-company);
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  transition: var(--transition);

  @media (max-width: 992px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
