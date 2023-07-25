import { FC, MouseEvent } from 'react';
import { Avatar, AvatarLoader, Content, ContentLoader, Description, MovieCardElement, Poster, PosterLoader, Text, Title } from './styled';
import { IMovie, MovieGenres } from '@constants/types';
import { useDispatchTyped } from '@utils/hooks/redux-hooks';
import { setModalMenu } from '@store/reducers/app-slice';
import { setMovieID } from '@store/reducers/movie-slice';
import NotFoundPlaceholder from '@assets/not-found.png';

interface IMovieCardProps {
  movieData: IMovie;
  isLoading: boolean;
}

export const MovieCard: FC<IMovieCardProps> = ({ movieData, isLoading }) => {
  const posterBaseURL = 'https://image.tmdb.org/t/p/w780';
  const { title, release_date, backdrop_path: posterURL } = movieData;
  const releaseDate = release_date && release_date.slice(0, 4);
  const poster = posterURL ? posterBaseURL + posterURL : NotFoundPlaceholder;
  const dispatch = useDispatchTyped();
  const movieGenres = getMovieGenres();

  async function handlerOnClick(e: MouseEvent<HTMLDivElement>) {
    dispatch(setModalMenu(true));
    dispatch(setMovieID(movieData.id));
    e.stopPropagation();
  }

  function getMovieGenres() {
    if (movieData.genre_ids) {
      return movieData.genre_ids.map((genreID) => MovieGenres[genreID].toLocaleLowerCase()).join(' • ');
    }
  }

  if (isLoading) {
    return (
      <MovieCardElement onClick={handlerOnClick} $isLoading={isLoading} data-testid='movie-card'>
        <PosterLoader>
          <AvatarLoader />
          <ContentLoader />
          <ContentLoader />
        </PosterLoader>
      </MovieCardElement>
    );
  }

  return (
    <MovieCardElement onClick={handlerOnClick} data-testid='movie-card'>
      <Poster src={poster} data-testid='movie-poster'></Poster>
      <Content>
        <Avatar src={poster} data-testid='movie-avatar' />
        <Description>
          <Title data-testid='movie-title'>{title}</Title>
          <Text data-testid='movie-text'>
            {releaseDate}, {movieGenres}
          </Text>
        </Description>
      </Content>
    </MovieCardElement>
  );
};
