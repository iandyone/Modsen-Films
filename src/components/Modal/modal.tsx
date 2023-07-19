import { FC, useEffect, useState } from 'react';
import { useDispatchTyped, useSelectorTyped } from '@utils/hooks/redux-hooks';
import { setModalMenu } from '@store/reducers/app-slice';
import { useGetVideoQuery } from '@store/reducers/movie-api';
import { VideoSource, VideoType } from '@constants/types';
import { CloseButton, Content, ModalElement, Text, Video } from './styled';
import { setMovieID } from '@store/reducers/movie-slice';
import { Spinner } from '@components/Search/styled';
import ButtonIcon from '@assets/icons/x-mark.svg';

const Modal: FC = () => {
  const { isModalOpened } = useSelectorTyped((store) => store.app);
  const { movieID } = useSelectorTyped((store) => store.movies);
  const { data, isFetching } = useGetVideoQuery({ movieID: movieID }, { skip: !movieID });
  const [traillerURL, setTraillerURL] = useState('');
  const dispatch = useDispatchTyped();

  function handlerOnClick() {
    setTraillerURL('');
    dispatch(setMovieID(0));
    dispatch(setModalMenu(false));
  }

  useEffect(() => {
    if (data) {
      const trailerBaseURL = 'https://www.youtube-nocookie.com/embed/';
      const trailler = data.results?.find((videoData) => videoData.type === VideoType.TRAILER && videoData.site === VideoSource.YOUTUBE);
      setTraillerURL(trailler?.key ? trailerBaseURL + trailler.key : '');
    }
  }, [data, movieID]);

  useEffect(() => {
    document.body.style.overflowY = isModalOpened ? 'hidden' : 'auto';
  }, [isModalOpened]);

  return (
    <ModalElement $isVisible={isModalOpened} onClick={handlerOnClick}>
      <Content $isVisible={isModalOpened}>
        {isFetching && <Spinner />}

        {traillerURL && !isFetching && <Video src={traillerURL} />}

        {!traillerURL && !isFetching && !data?.results.length && <Text>Trailer is not found</Text>}
        <CloseButton $isVisible={isModalOpened} onClick={handlerOnClick}>
          <ButtonIcon />
        </CloseButton>
      </Content>
    </ModalElement>
  );
};

export default Modal;
