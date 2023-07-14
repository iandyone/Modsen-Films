import { FC, MouseEvent } from 'react';
import { Button } from './styled';
import { ITagButton, TagButtonProps } from '@constants/types';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux-hooks';
import { clearFilters, setSearchTag } from '@store/reducers/movie-slice';

export const TagButton: FC<ITagButton> = ({ tag }) => {
  const { searchByTag } = useSelectorTyped((store) => store.movies);
  const isButtonActive = searchByTag === tag;
  const dispatch = useDispatchTyped();

  const buttonOptions: TagButtonProps = {
    $background: isButtonActive ? 'var(--tag-button-bg-active)' : 'var(--tag-button-bg)',
    $color: isButtonActive ? 'var(--tag-button-text-active)' : 'var(--tag-button-text)',
  };

  function handlerOnClick(e: MouseEvent<HTMLButtonElement>) {
    dispatch(clearFilters());

    if (tag !== 'ALL' && !isButtonActive) {
      dispatch(setSearchTag(tag));
    }

    e.preventDefault();
  }

  return (
    <Button $options={buttonOptions} onClick={handlerOnClick}>
      {tag.toLocaleLowerCase()}
    </Button>
  );
};
