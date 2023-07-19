import { FC } from 'react';
import { Header } from '@components/Header';
import { Navbar } from '@components/Navbar';
import { Main } from './styled';
import { MovieBar } from '@components/MoviesBar';
import { Footer } from '@components/Footer';
import { Modal } from '@components/Modal';
import { setAllMenuClosed } from '@store/reducers/app-slice';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux-hooks';

export const App: FC = () => {
  const { theme } = useSelectorTyped((store) => store.app);
  const dispatch = useDispatchTyped();

  function handlerOnClick() {
    dispatch(setAllMenuClosed());
  }

  return (
    <div className={`app ${theme}`} onClick={handlerOnClick}>
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
