import { ThemeSwitcher } from '@components/ThemeSwitcher';
import { setBurgerMenu } from '@store/reducers/app-slice';
import { useDispatchTyped, useSelectorTyped } from '@utils/hooks/redux-hooks';
import { BurgerButton, BurgerLine, MenuContainer, MenuContent, MenuOption, Text } from './styled';
import { FC, useEffect } from 'react';

export const Menu: FC = () => {
  const { isBurgerOpened, theme } = useSelectorTyped((store) => store.app);
  const dispatch = useDispatchTyped();

  const handlerOnClick = () => {
    dispatch(setBurgerMenu());
  };

  useEffect(() => {
    document.body.style.overflowY = isBurgerOpened ? 'hidden' : 'auto';
  }, [isBurgerOpened]);

  return (
    <MenuContainer>
      <BurgerButton onClick={handlerOnClick}>
        <BurgerLine $isOpen={isBurgerOpened} />
        <BurgerLine $isOpen={isBurgerOpened} />
        <BurgerLine $isOpen={isBurgerOpened} />
      </BurgerButton>
      <MenuContent $isOpen={isBurgerOpened}>
        <MenuOption>
          <Text>Theme {theme === 'dark' ? 'Dark' : 'Light'}</Text>
          <ThemeSwitcher />
        </MenuOption>
      </MenuContent>
    </MenuContainer>
  );
};
