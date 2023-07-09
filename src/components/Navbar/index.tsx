import { TagButton } from '@components/TagButton';
import { FC } from 'react';
import { AppContainer, Nav, NavElement } from './styled';
import { SearchTags } from '@constants/types';

export const Navbar: FC = () => {
  return (
    <Nav>
      <AppContainer>
        <NavElement>
          {Object.values(SearchTags).map((tag) => (
            <TagButton key={tag} tag={tag} />
          ))}
        </NavElement>
      </AppContainer>
    </Nav>
  );
};
