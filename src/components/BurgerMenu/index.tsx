import { ThemeSwitcher } from '@components/ThemeSwitcher';
import { setBurgerMenu } from '@store/reducers/app-slice';
import { useDispatchTyped, useSelectorTyped } from '@utils/hooks/redux-hooks';
import { BurgerButton, BurgerLine, MenuContainer, MenuContent, MenuOption, Text } from './styled';
import { FC, MouseEvent, useEffect } from 'react';

export const Menu: FC = () => {
  const { isBurgerOpened, theme } = useSelectorTyped((store) => store.app);
  const dispatch = useDispatchTyped();

  function handlerOnClickButton() {
    dispatch(setBurgerMenu());
  }

  function handlerOnClickMenu(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  useEffect(() => {
    document.body.style.position = isBurgerOpened ? 'fixed' : 'static';
  }, [isBurgerOpened]);

  return (
    <MenuContainer onClick={handlerOnClickMenu}>
      <BurgerButton onClick={handlerOnClickButton}>
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
