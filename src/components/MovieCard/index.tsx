import { FC, MouseEvent } from 'react';
import { Avatar, Content, Description, MovieCardElement, Picture, Text, Title } from './styled';
import { IMovie, MovieGenres } from '@constants/types';
import { useDispatchTyped } from '@utils/hooks/redux-hooks';
import { setModalMenu } from '@store/reducers/app-slice';
import { setMovieID } from '@store/reducers/movie-slice';
import { SkeletonLoader } from '@components/Loader';
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
      return movieData.genre_ids.map((genreID) => MovieGenres[genreID].toLocaleLowerCase()).join(' ∘ ');
    }
  }

  if (isLoading) {
    return (
      <MovieCardElement $isLoading={isLoading}>
        <SkeletonLoader />
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
          <Text>
            {releaseDate} {movieGenres}
          </Text>
        </Description>
      </Content>
    </MovieCardElement>
  );
};
