import { FC } from 'react';
import { Container, HeaderBody, LogoElement, LogoText } from './styled';
import { Search } from '@components/Search';
import { ThemeSwitcher } from '@components/ThemeSwitcher';
import LogoIcon from '@assets/icons/logo.svg';

export const Header: FC = () => {
  return (
    <Container>
      <HeaderBody>
        <LogoElement>
          <LogoIcon />
          <LogoText>ModsenFilms</LogoText>
        </LogoElement>
        <Search />
        <ThemeSwitcher />
      </HeaderBody>
    </Container>
  );
};
