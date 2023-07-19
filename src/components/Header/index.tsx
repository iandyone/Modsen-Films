import { FC } from 'react';
import { AppContainer, Body, Logo, Text, Theme } from './styled';
import { Search } from '@components/Search';
import { ThemeSwitcher } from '@components/ThemeSwitcher';
import { Menu } from '@components/BurgerMenu';
import { useDispatchTyped } from '@utils/hooks/redux-hooks';
import { clearFilters, setFilter } from '@store/reducers/movie-slice';
import LogoIcon from '@assets/icons/logo.svg';

export const Header: FC = () => {
  const dispatch = useDispatchTyped();

  function handlerOnClick() {
    dispatch(clearFilters());
    dispatch(setFilter('default'));
  }

  return (
    <AppContainer>
      <Body>
        <Logo onClick={handlerOnClick}>
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
