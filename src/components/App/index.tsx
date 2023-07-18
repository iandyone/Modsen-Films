import { FC } from 'react';
import { Header } from '@components/Header';
import { Navbar } from '@components/Navbar';
import { useSelectorTyped } from '@hooks/redux-hooks';
import { Main } from './styled';
import { MovieBar } from '@components/MoviesBar';
import { Footer } from '@components/Footer';
import { Modal } from '@components/Modal';

export const App: FC = () => {
  const { theme } = useSelectorTyped((store) => store.app);

  return (
    <div className={`app ${theme}`}>
      <Header />
      <Navbar />
      <Main>
        <MovieBar />
      </Main>
      <Footer />
      <Modal />
    </div>
  );
};
