import { FC } from 'react';
import { HeaderBody, LogoElement, LogoText } from './styled';
import { Search } from '@components/Search';
import { ThemeSwitcher } from '@components/ThemeSwitcher';
import LogoIcon from '@assets/icons/logo.svg';
import { AppContainer } from '@components/Styled components/AppContainer';

export const Header: FC = () => {
  return (
    <AppContainer>
      <HeaderBody>
        <LogoElement>
          <LogoIcon />
          <LogoText>ModsenFilms</LogoText>
        </LogoElement>
        <Search />
        <ThemeSwitcher />
      </HeaderBody>
    </AppContainer>
  );
};
