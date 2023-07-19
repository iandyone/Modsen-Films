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
              <Link>Terms Privacy Policy & Safety</Link>
              <Link>How YouTube works</Link>
              <Link>Test new features</Link>
            </Column>
            <Column>
              <Link>About Press Copyright</Link>
              <Link>Contact us Creators</Link>
              <Link>Advertise Developers</Link>
            </Column>
          </Content>
          <Links>
            {Array.from(mediaData).map((media) => (
              <li key={media.name}>
                <Media href={media.url}>
                  <media.icon fill={'var(--footer-svg)'} />
                </Media>
              </li>
            ))}
          </Links>
        </Body>
        <About>2023 Modsen company</About>
      </AppContainer>
    </FooterElement>
  );
};
