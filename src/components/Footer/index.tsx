import { FC } from 'react';
import FacebookIcon from '@assets/icons/facebook.svg';
import InstagramIcon from '@assets/icons/instagram.svg';
import LinkedinIcon from '@assets/icons/linkedin.svg';
import TwitterIcon from '@assets/icons/twitter.svg';
import { ISocialMedia, SocialMedia } from '@constants/types';
import { About, AppContainer, ContentColumn, FooterBody, FooterContent, FooterElement, FooterLinks, Link, Text } from './styled';

export const Footer: FC = () => {
  const footerLogos: ISocialMedia[] = [
    {
      name: 'facebook',
      url: SocialMedia.FACEBOOK,
      icon: FacebookIcon,
    },
    {
      name: 'twitter',
      url: SocialMedia.TWITTER,
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
        <FooterBody>
          <FooterContent>
            <ContentColumn>
              <Text>Terms Privacy Policy & Safety</Text>
              <Text>How YouTube works</Text>
              <Text>Test new features</Text>
            </ContentColumn>
            <ContentColumn>
              <Text>About Press Copyright</Text>
              <Text> Contact us Creators</Text>
              <Text> Advertise Developers</Text>
            </ContentColumn>
          </FooterContent>
          <FooterLinks>
            {Array.from(footerLogos).map((media) => (
              <li key={media.name}>
                <Link href={media.url}>
                  <media.icon fill={'var(--footer-svg)'} />
                </Link>
              </li>
            ))}
          </FooterLinks>
        </FooterBody>
        <About>2023 Modsen company</About>
      </AppContainer>
    </FooterElement>
  );
};
