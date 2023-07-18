import { FC } from 'react';
import { Avatar, Content, Description, MovieCardElement, Picture, Text, Title } from './styled';
import { IMovie } from '@constants/types';
import { useDispatchTyped } from '@utils/hooks/redux-hooks';
import { setModalMenu } from '@store/reducers/app-slice';
import { setMovieID } from '@store/reducers/movie-slice';
import NotFoundPlaceholder from '@assets/not-found.png';
import Loader from '@components/Loader';

interface IMovieCardProps {
  movieData: IMovie;
  isLoading: boolean;
}

export const MovieCard: FC<IMovieCardProps> = ({ movieData, isLoading }) => {
  const posterBaseURL = 'http://image.tmdb.org/t/p/w780';
  const { title, release_date, backdrop_path: posterURL } = movieData;
  const releaseDate = release_date && release_date.slice(0, 4);
  const poster = posterURL ? posterBaseURL + posterURL : NotFoundPlaceholder;
  const dispatch = useDispatchTyped();

  async function handlerOnClick() {
    dispatch(setModalMenu(true));
    dispatch(setMovieID(movieData.id));
  }

  if (isLoading) {
    return (
      <MovieCardElement $isLoading={isLoading}>
        <Loader />
      </MovieCardElement>
    );
  }

  return (
    <MovieCardElement onClick={handlerOnClick}>
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
