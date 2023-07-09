import { FC, useState } from 'react';
import { Container, Switcher, Toggler } from './styled';
import { Theme } from '@constants/types';

export const ThemeSwitcher: FC = () => {
  const [theme, setTheme] = useState<Theme>('light');

  function handlerOnClick() {
    const newTheme:Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.querySelector<HTMLDivElement>('.app').className = `app ${newTheme}`;
  }

  return (
    <Switcher>
      <Container onClick={handlerOnClick}>
        <Toggler theme={theme} />
      </Container>
    </Switcher>
  );
};
