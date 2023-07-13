import { FC, useCallback } from 'react';
import { Button } from './styled';
import { ITagButton, TagButtonProps } from '@constants/types';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux-hooks';
import { setSearchTag } from '@store/reducers/movie-slice';

export const TagButton: FC<ITagButton> = ({ tag }) => {
  const { activeTag } = useSelectorTyped((store) => store.movies);
  const isButtonActive = activeTag === tag;
  const dispatch = useDispatchTyped();

  const buttonOptions: TagButtonProps = {
    $background: isButtonActive ? 'var(--tag-button-bg-active)' : 'var(--tag-button-bg)',
    $color: isButtonActive ? 'var(--tag-button-text-active)' : 'var(--tag-button-text)',
  };

  const handlerOnClock = useCallback(() => {
    dispatch(setSearchTag(tag));
  }, [dispatch, tag]);

  return (
    <Button $options={buttonOptions} onClick={handlerOnClock}>
      {tag}
    </Button>
  );
};
