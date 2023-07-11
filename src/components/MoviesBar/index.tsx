import { MovieCard } from '@components/MovieCard';
import { FC } from 'react';
import { AppContainer, Body, Button, MovieBarElement } from './styled';

export const MovieBar: FC = () => {
  return (
    <MovieBarElement>
      <AppContainer>
        <Body>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </Body>
        <Button>Show More</Button>
      </AppContainer>
    </MovieBarElement>
  );
};
