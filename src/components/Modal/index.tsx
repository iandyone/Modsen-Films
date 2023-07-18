import { FC, useEffect, useState } from 'react';
import { useDispatchTyped, useSelectorTyped } from '@utils/hooks/redux-hooks';
import { styled, css } from 'styled-components';
import { setModalMenu } from '@store/reducers/app-slice';
import { useGetVideoQuery } from '@store/reducers/movie-api';
import ButtonIcon from '@assets/icons/x-mark.svg';
import { VideoSource, VideoType } from '@constants/types';
import { MagnifyingGlass } from 'react-loader-spinner';

export const ModalElement = styled.article<{ $isVisible: boolean }>`
  pointer-events: none;
  opacity: 0;
  transition: all 0.5s ease;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
      position: fixed;
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 60%);
      pointer-events: auto;
      transition: all 0.5s ease;
    `}
`;

export const CloseButton = styled.button<{ $isVisible: boolean }>`
  pointer-events: none;
  border-radius: 50%;
  transition: all 0.5s ease;
  opacity: 0;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
      width: 48px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 32px;
      right: 32px;
      transition: all 0.5s ease;
    `}
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1000px;
  max-height: 500px;
  background: var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Video = styled.iframe.attrs<{ id: string }>((props) => ({
  src: `https://www.youtube-nocookie.com/embed/${props.id}`,
  title: 'YouTube video player',
  allow: 'accelerometer; clipboard-write; encrypted-media; gyroscope; web-share',
  allowFullScreen: true,
  width: '80%',
  height: '80%',
}))`
  width: 100%;
  height: 100%;
`;

export const Modal: FC = () => {
  const { isModalOpened } = useSelectorTyped((store) => store.app);
  const { movieID } = useSelectorTyped((store) => store.movies);
  const { data, isFetching } = useGetVideoQuery({ movieID: movieID }, { skip: !movieID });
  const dispatch = useDispatchTyped();
  const [traillerKey, setTraillerKey] = useState('');

  function handlerOnClick() {
    dispatch(setModalMenu(false));
  }

  useEffect(() => {
    if (data) {
      const trailler = data.results?.find((videoData) => videoData.type === VideoType.TRAILER && videoData.site === VideoSource.YOUTUBE);
      setTraillerKey(trailler.key ?? '');
    }
  }, [data]);

  return (
    <ModalElement $isVisible={isModalOpened} onClick={handlerOnClick}>
      <Content>
        {isFetching && <MagnifyingGlass color='var(--orange)' glassColor='var(--bg-color)' />}

        {traillerKey && !isFetching && <Video id={traillerKey} />}
      </Content>
      <CloseButton $isVisible={isModalOpened} onClick={handlerOnClick}>
        <ButtonIcon />
      </CloseButton>
    </ModalElement>
  );
};
