import { MovieCard } from '@components/MovieCard';
import { FC } from 'react';
import { AppContainer, Body, Button, MovieBarElement } from './styled';
import { useSelectorTyped } from '@utils/hooks/redux-hooks';

export const MovieBar: FC = () => {
  const { filmsPerPage } = useSelectorTyped((store) => store.app);
  const movies = new Array(filmsPerPage).fill(0);

  return (
    <MovieBarElement>
      <AppContainer>
        <Body>
          {movies.map((movie, index) => {
            return <MovieCard key={index} />;
          })}
        </Body>
        <Button>Show More</Button>
      </AppContainer>
    </MovieBarElement>
  );
};
