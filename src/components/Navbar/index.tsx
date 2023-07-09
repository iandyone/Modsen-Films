import { AppContainer } from '@components/Styled components/AppContainer';
import { TagButton } from '@components/TagButton';
import { FC } from 'react';
import { Nav, NavElement } from './styled';

export const Navbar: FC = () => {
  return (
    <Nav>
      <AppContainer>
        <NavElement>
          <TagButton buttonText='all' />
          <TagButton buttonText='action' />
          <TagButton buttonText='drama' />
          <TagButton buttonText='crime' />
          <TagButton buttonText='romantic' />
          <TagButton buttonText='horror' />
          <TagButton buttonText='documentary' />
        </NavElement>
      </AppContainer>
    </Nav>
  );
};
