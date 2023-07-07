import { FC, useState } from 'react';
import { Header } from '@components/Header';
import { Theme } from '@constants/types';

export const App: FC = () => {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <>
      <div className={`app ${theme}`}>
        <Header />;
      </div>
    </>
  );
};
