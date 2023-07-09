import { FC } from 'react';
import { Header } from '@components/Header';
import { Navbar } from '@components/Navbar';
import { useSelectorTyped } from '@hooks/redux-hooks';

export const App: FC = () => {
  const { theme } = useSelectorTyped((store) => store.app);

  return (
    <div className={`app ${theme}`}>
      <Header />
      <Navbar />
    </div>
  );
};
