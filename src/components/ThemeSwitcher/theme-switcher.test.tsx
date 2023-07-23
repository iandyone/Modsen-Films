import { screen, render, fireEvent } from '@testing-library/react';
import { ThemeSwitcher } from '@components/ThemeSwitcher';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import { Theme } from '@constants/types';
import * as hooks from '@utils/hooks/redux-hooks';
import * as actions from '@reducers/app-slice';
import appReducer, { setTheme } from '@reducers/app-slice';

describe('Theme swither', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test('should be rendered on the page', () => {
    render(
      <Provider store={store}>
        <div className="app light">
          <ThemeSwitcher />
        </div>
      </Provider>,
    );
    const switcher = screen.getByTestId('theme-switcher');
    const toggler = screen.getByTestId('theme-toggler');

    expect(switcher).toBeInTheDocument();
    expect(toggler).toBeInTheDocument();
  });

  test('should switch the app theme', () => {
    render(
      <Provider store={store}>
        <div className="app light">
          <ThemeSwitcher />
        </div>
      </Provider>,
    );

    const switcher = screen.getByTestId('theme-switcher');
    const toggler = screen.getByTestId('theme-toggler');
    const mockDispatch = jest.spyOn(hooks, 'useDispatchTyped');
    const mockAction = jest.spyOn(actions, 'setTheme');

    fireEvent.click(switcher);
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockAction).toHaveBeenCalledWith('dark');

    fireEvent.click(switcher);
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockAction).toHaveBeenCalledWith('light');

    fireEvent.click(switcher);
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockAction).toHaveBeenCalledWith('dark');

    fireEvent.click(toggler);
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockAction).toHaveBeenCalledWith('light');

    fireEvent.click(toggler);
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockAction).toHaveBeenCalledWith('dark');
  });

  test('should update the app state', () => {
    const initialState = {
      theme: 'light' as Theme,
      filmsPerPage: 16,
      isBurgerOpened: false,
      isModalOpened: false,
      isSearchOpened: false,
    };

    render(
      <Provider store={store}>
        <div className="app light">
          <ThemeSwitcher />
        </div>
      </Provider>,
    );

    const switcher = screen.getByTestId('theme-switcher');
    const toggler = screen.getByTestId('theme-toggler');
    const dispatch = jest.spyOn(hooks, 'useDispatchTyped');
    const actionDarkTheme = setTheme('dark');
    const actionLightTheme = setTheme('light');

    expect(appReducer(initialState, { type: '' }).theme).toEqual(initialState.theme);

    fireEvent.click(toggler);
    expect(dispatch).toHaveBeenCalled();
    expect(setTheme).toBeCalledWith('dark');
    expect(appReducer(initialState, actionDarkTheme).theme).toEqual('dark');

    fireEvent.click(switcher);
    expect(dispatch).toHaveBeenCalled();
    expect(setTheme).toBeCalledWith('light');
    expect(appReducer(initialState, actionLightTheme).theme).toEqual('light');
  });
});
