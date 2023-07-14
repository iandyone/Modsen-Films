import { TagButton } from '@components/TagButton';
import { FC } from 'react';
import { AppContainer, Nav, NavElement } from './styled';
import { IGenre, MovieGenres } from '@constants/types';

export const Navbar: FC = () => {
  return (
    <Nav>
      <AppContainer>
        <NavElement>
          {Object.keys(MovieGenres)
            .filter((key) => Number.parseInt(key) !== +key)
            .map((tag) => (
              <TagButton key={tag} tag={tag as IGenre} />
            ))}
        </NavElement>
      </AppContainer>
    </Nav>
  );
};
