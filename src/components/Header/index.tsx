import { FC } from 'react';
import { AppContainer, Body, Logo, Text, Theme } from './styled';
import { Search } from '@components/Search';
import { ThemeSwitcher } from '@components/ThemeSwitcher';
import { Menu } from '@components/BurgerMenu';
import { useDispatchTyped, useSelectorTyped } from '@utils/hooks/redux-hooks';
import { clearFilters, setFilter, setSearchTag, setSearchTitle, setTitle } from '@store/reducers/movie-slice';
import LogoIcon from '@assets/icons/logo.svg';

export const Header: FC = () => {
  const dispatch = useDispatchTyped();
  const { filter } = useSelectorTyped((store) => store.movies);

  function handlerOnClick() {
    if (filter !== 'default') {
      dispatch(clearFilters());
    }
    dispatch(setFilter('default'));
    dispatch(setSearchTag('ALL'));
    dispatch(setTitle(''));
    dispatch(setSearchTitle(''));
  }

  return (
    <AppContainer>
      <Body>
        <Logo onClick={handlerOnClick}>
          <LogoIcon />
          <Text data-testid='logo-text'>ModsenFilms</Text>
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
