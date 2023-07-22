import { TagButton } from '@components/TagButton';
import { FC } from 'react';
import { AppContainer, Nav, NavElement } from './styled';
import { IGenre, MovieGenreTags } from '@constants/types';

export const Navbar: FC = () => {
  return (
    <Nav data-testid="navbar-element">
      <AppContainer>
        <NavElement>
          {Object.keys(MovieGenreTags)
            .filter((key) => Number.parseInt(key) !== +key)
            .map((tag) => (
              <TagButton key={tag} tag={tag as IGenre} />
            ))}
        </NavElement>
      </AppContainer>
    </Nav>
  );
};
