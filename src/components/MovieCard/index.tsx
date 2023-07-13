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
  const { title, release_date, backdrop_path: posterURL } = movieData;
  const posterBaseURL = 'http://image.tmdb.org/t/p/w780';
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
        <Avatar src='https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg' />
        <Description>
          <Title>{title}</Title>
          <Text>{releaseDate}</Text>
        </Description>
      </Content>
    </MovieCardElement>
  );
};
