import { FC } from 'react';
import { Button, Container, Text } from './styled';
import ErrorIcon from '@assets/icons/error.svg';

interface IErrorState {
  message: string;
  withReloadingButton?: boolean;
}

export const ErrorState: FC<IErrorState> = ({ message, withReloadingButton = false }) => {
  function handlerOnClick() {
    location.reload();
  }

  return (
    <Container>
      <ErrorIcon />
      <Text>{message}</Text>
      {withReloadingButton && <Button onClick={handlerOnClick}>Update</Button>}
    </Container>
  );
};
