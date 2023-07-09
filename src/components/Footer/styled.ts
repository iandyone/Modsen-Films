import { styled } from 'styled-components';

export const AppContainer = styled.div`
  max-width: 1440px;
  padding: 0 16px;
  margin: 0 auto;
  overflow-x: hidden;
  padding: 54px 44px 94px;
`;

export const FooterElement = styled.footer`
  border-top: 1px solid var(--border-color);
`;

export const FooterContent = styled.div`
  display: flex;
  column-gap: 25px;
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  color: var(--footer-text);
  font-size: 20px;
  font-weight: 500;
`;

export const FooterLinks = styled.ul`
  display: flex;
  column-gap: 24px;
  height: 16px;
`;

export const Link = styled.a.attrs((props) => ({
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

export const FooterBody = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
`;

export const About = styled.p`
  color: var(--footer-company);
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;
