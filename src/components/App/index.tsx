import { FC } from 'react';
import { Header } from '@components/Header';
import { Navbar } from '@components/Navbar';

export const App: FC = () => {
  return (
    <>
      <div className={'app light'}>
        <Header />
        <Navbar/>
      </div>
    </>
  );
};
