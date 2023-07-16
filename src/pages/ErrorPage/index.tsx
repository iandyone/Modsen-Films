import { FC } from 'react';
import ErrorIcon from '@assets/icons/error.svg';
import { Button, Container, Text } from './styled';

interface IErrorPage {
  message: string;
  withReloadingButton?: boolean;
}

export const ErrorPage: FC<IErrorPage> = ({ message, withReloadingButton = false }) => {
  function handlerOnClick() {
    location.reload();
  }

  return (
    <Container>
      <ErrorIcon />
      <Text>{message}</Text>
      {withReloadingButton && <Button onClick={handlerOnClick}>Обновить</Button>}
    </Container>
  );
};
