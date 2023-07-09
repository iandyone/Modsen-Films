import { FC, useState } from 'react';
import { Button } from './styled';
import { ITagButton, TagButtonProps } from '@constants/types';

export const TagButton: FC<ITagButton> = ({ buttonText }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const buttonOptions: TagButtonProps = {
    $background: isActive ? 'var(--tag-button-bg-active)' : 'var(--tag-button-bg)',
    $color: isActive ? 'var(--tag-button-text-active)' : 'var(--tag-button-text)',
  };

  return <Button $options={buttonOptions}>{buttonText}</Button>;
};
