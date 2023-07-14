import { FC } from 'react';
import { Avatar, Content, Description, MovieCardElement, Picture, Text, Title } from './styled';
import { IMovie } from '@constants/types';
import NotFoundPlaceholder from '@assets/not-found.png';
import DoorDashFavorite from '@components/Loader';

interface IMovieCardProps {
  movieData: IMovie;
  isLoading: boolean;
}

export const MovieCard: FC<IMovieCardProps> = ({ movieData, isLoading }) => {
  const posterBaseURL = 'http://image.tmdb.org/t/p/w780';
  const { title, release_date, backdrop_path: posterURL } = movieData;
  const releaseDate = release_date && release_date.slice(0, 4);
  const poster = posterURL ? posterBaseURL + posterURL : NotFoundPlaceholder;

  if (isLoading) {
    return (
      <MovieCardElement $isLoading={isLoading}>
        <DoorDashFavorite />
      </MovieCardElement>
    );
  }

  return (
    <MovieCardElement>
      <Picture src={poster}></Picture>
      <Content>
        <Avatar src={poster} />
        <Description>
          <Title>{title}</Title>
          <Text>{releaseDate}</Text>
        </Description>
      </Content>
    </MovieCardElement>
  );
};
