import { FC } from 'react';
import { Switcher, Toggler } from './styled';
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
    <Switcher onClick={handlerOnClick}>
      <Toggler theme={theme} />
    </Switcher>
  );
};
