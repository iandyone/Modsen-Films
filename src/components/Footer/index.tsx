import { FC } from 'react';
import FacebookIcon from '@assets/icons/facebook.svg';
import InstagramIcon from '@assets/icons/instagram.svg';
import LinkedinIcon from '@assets/icons/linkedin.svg';
import TwitterIcon from '@assets/icons/twitter.svg';
import { ISocialMedia, SocialMedia } from '@constants/types';
import { About, AppContainer, Column, Body, Content, FooterElement, Link, Links, Media } from './styled';

export const Footer: FC = () => {
  const mediaData: ISocialMedia[] = [
    {
      name: 'facebook',
      url: SocialMedia.FACEBOOK,
      icon: FacebookIcon,
    },
    {
      name: 'twitter',
      url: SocialMedia.WEBSITE,
      icon: TwitterIcon,
    },
    {
      name: 'instagram',
      url: SocialMedia.INSTAGRAM,
      icon: InstagramIcon,
    },
    {
      name: 'linkedin',
      url: SocialMedia.LINKEDIN,
      icon: LinkedinIcon,
    },
  ];

  return (
    <FooterElement>
      <AppContainer>
        <Body>
          <Content>
            <Column>
              <Link data-testid='footer-link'>Terms Privacy Policy & Safety</Link>
              <Link data-testid='footer-link'>How YouTube works</Link>
              <Link data-testid='footer-link'>Test new features</Link>
            </Column>
            <Column>
              <Link data-testid='footer-link'>About Press Copyright</Link>
              <Link data-testid='footer-link'>Contact us Creators</Link>
              <Link data-testid='footer-link'>Advertise Developers</Link>
            </Column>
          </Content>
          <Links>
            {Array.from(mediaData).map((media) => (
              <li key={media.name}>
                <Media href={media.url}>
                  <media.icon fill={'var(--footer-svg)'} data-testid='footer-media' />
                </Media>
              </li>
            ))}
          </Links>
        </Body>
        <About data-testid='footer-about'>2023 Modsen company</About>
      </AppContainer>
    </FooterElement>
  );
};
