import { FC } from 'react';
import { Avatar, Content, Description, MovieCardElement, Picture, Text, Title } from './styled';

export const MovieCard: FC = () => {
  return (
    <MovieCardElement>
      <Picture src='https://www.imgonline.com.ua/examples/bee-on-daisy.jpg'></Picture>
      <Content>
        <Avatar src='https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg' />
        <Description>
          <Title>TITLE</Title>
          <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, reprehenderit!</Text>
        </Description>
      </Content>
    </MovieCardElement>
  );
};
