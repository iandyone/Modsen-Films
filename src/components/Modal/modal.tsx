import { FC, useEffect, useState } from 'react';
import { useDispatchTyped, useSelectorTyped } from '@utils/hooks/redux-hooks';
import { setModalMenu } from '@store/reducers/app-slice';
import { useGetVideoQuery } from '@store/reducers/movie-api';
import { VideoSource, VideoType } from '@constants/types';
import { MagnifyingGlass } from 'react-loader-spinner';
import { CloseButton, Content, ModalElement, Text, Video } from './styled';
import ButtonIcon from '@assets/icons/x-mark.svg';

const Modal: FC = () => {
  const { isModalOpened } = useSelectorTyped((store) => store.app);
  const { movieID } = useSelectorTyped((store) => store.movies);
  const { data, isFetching } = useGetVideoQuery({ movieID: movieID }, { skip: !movieID });
  const [traillerKey, setTraillerKey] = useState('');
  const dispatch = useDispatchTyped();

  function handlerOnClick() {
    dispatch(setModalMenu(false));
  }

  useEffect(() => {
    if (data) {
      const trailler = data.results?.find((videoData) => videoData.type === VideoType.TRAILER && videoData.site === VideoSource.YOUTUBE);
      setTraillerKey(trailler?.key ? trailler.key : '');
    }
  }, [data]);

  useEffect(() => {
    console.log(traillerKey);
  }, [traillerKey]);

  useEffect(() => {
    document.body.style.overflowY = isModalOpened ? 'hidden' : 'auto';
  }, [isModalOpened]);

  return (
    <ModalElement $isVisible={isModalOpened} onClick={handlerOnClick}>
      <Content $isVisible={isModalOpened}>
        {isFetching && <MagnifyingGlass color='var(--orange)' glassColor='var(--bg-color)' />}

        {!traillerKey && <Text>Trailer is not found</Text>}

        {traillerKey && !isFetching && <Video id={traillerKey} />}
        <CloseButton $isVisible={isModalOpened} onClick={handlerOnClick}>
          <ButtonIcon />
        </CloseButton>
      </Content>
    </ModalElement>
  );
};

export default Modal;
