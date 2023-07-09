import { FC } from 'react';
import { Container, Switcher, Toggler } from './styled';
import { Theme } from '@constants/types';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux-hooks';
import { setTheme } from '@reducers/app-config-slice';

export const ThemeSwitcher: FC = () => {
  const { theme } = useSelectorTyped((store) => store.app);
  const dispatch = useDispatchTyped();

  function handlerOnClick() {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
  }

  return (
    <Switcher>
      <Container onClick={handlerOnClick}>
        <Toggler theme={theme} />
      </Container>
    </Switcher>
  );
};
