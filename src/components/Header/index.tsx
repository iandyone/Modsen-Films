import { FC } from 'react';
import { AppContainer, Body, Logo, Text, Theme } from './styled';
import { Search } from '@components/Search';
import { ThemeSwitcher } from '@components/ThemeSwitcher';
import LogoIcon from '@assets/icons/logo.svg';
import { Menu } from '@components/BurgerMenu';

export const Header: FC = () => {
  return (
    <AppContainer>
      <Body>
        <Logo>
          <LogoIcon />
          <Text>ModsenFilms</Text>
        </Logo>
        <Search />
        <Theme>
          <ThemeSwitcher />
        </Theme>
        <Menu />
      </Body>
    </AppContainer>
  );
};
