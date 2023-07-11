import { FC } from 'react';
import ErrorIcon from '@assets/icons/error.svg';
import { Button, Container, Text } from './styled';

export const ErrorPage: FC = () => {
  function handlerOnClick() {
    location.reload();
  }

  return (
    <Container>
      <ErrorIcon />
      <Text>Возникла непредвиденная ошибка во время работы приложения</Text>
      <Button onClick={handlerOnClick}>Обновить</Button>
    </Container>
  );
};
