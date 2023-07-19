import { FC } from 'react';
import { Button } from './styled';
import { ITagButton, TagButtonProps } from '@constants/types';
import { useDispatchTyped, useSelectorTyped } from '@hooks/redux-hooks';
import { clearFilters, setFilter, setSearchTag } from '@store/reducers/movie-slice';

export const TagButton: FC<ITagButton> = ({ tag }) => {
  const { searchByTag, filter } = useSelectorTyped((store) => store.movies);
  const isButtonActive = searchByTag === tag;
  const dispatch = useDispatchTyped();

  const buttonOptions: TagButtonProps = {
    $background: isButtonActive ? 'var(--tag-button-bg-active)' : 'var(--tag-button-bg)',
    $color: isButtonActive ? 'var(--tag-button-text-active)' : 'var(--tag-button-text)',
  };

  function handlerOnClick() {
    if (!isButtonActive || (tag === 'ALL' && filter !== 'default')) {
      dispatch(clearFilters());
      dispatch(setFilter(tag === 'ALL' ? 'default' : 'genre'));
      dispatch(setSearchTag(tag));
    }
  }

  return (
    <Button $options={buttonOptions} $isButtonActive={isButtonActive} onClick={handlerOnClick}>
      {tag.toLocaleLowerCase()}
    </Button>
  );
};
