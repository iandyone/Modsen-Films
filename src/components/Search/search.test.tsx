import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Search } from '.';
import { store } from '@store/index';
import { IMovie, IMovieSliceProps } from '@constants/types';
import * as hooks from '@utils/hooks/redux-hooks';
import * as movieActions from '@store/reducers/movie-slice';
import movieReducer from '@reducers/movie-slice';

describe('Search module', () => {
  afterAll(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  const testMovieTitle = 'interstellar';
  const initialState: IMovieSliceProps = {
    movies: [] as IMovie[],
    moviesPage: 1,
    searchByTag: 'ALL',
    searchByTitle: '',
    title: '',
    filter: 'default',
    movieID: 0,
  };

  test('should be rendered on the page', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>,
    );

    const input = screen.getByTestId('search-input');

    expect(screen.getByTestId('search-component')).toBeInTheDocument();
    expect(screen.getByTestId('search-button')).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  test('should set movie title after user typing', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>,
    );

    const input = screen.getByTestId('search-input');
    const dispatch = jest.spyOn(hooks, 'useDispatchTyped');
    const setTitleAction = jest.spyOn(movieActions, 'setTitle');

    expect(movieReducer(initialState, { type: '' })).toEqual(initialState);

    fireEvent.change(input, { target: { value: testMovieTitle } });

    expect(input).toHaveValue(testMovieTitle);
    expect(screen.getByDisplayValue(testMovieTitle)).toBeInTheDocument();
    expect(dispatch).toHaveBeenCalled();
    expect(setTitleAction).toHaveBeenCalledWith(testMovieTitle);
    expect(movieReducer(initialState, movieActions.setTitle(testMovieTitle)).title).toEqual(testMovieTitle);
    expect(movieReducer(initialState, movieActions.setTitle(testMovieTitle)).searchByTitle).not.toEqual(testMovieTitle);
  });

  test('should set search title after submiting', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>,
    );

    const input = screen.getByTestId('search-input');
    const button = screen.getByTestId('search-button');
    const dispatch = jest.spyOn(hooks, 'useDispatchTyped');

    const setSearchTitleAction = jest.spyOn(movieActions, 'setSearchTitle');
    const setFilterAction = jest.spyOn(movieActions, 'setFilter');
    const setMoviePageAction = jest.spyOn(movieActions, 'setMoviesPage');

    fireEvent.change(input, { target: { value: testMovieTitle } });
    fireEvent.click(button);

    expect(dispatch).toHaveBeenCalled();
    expect(setSearchTitleAction).toHaveBeenCalledWith(testMovieTitle);
    expect(setFilterAction).toHaveBeenCalledWith('title');
    expect(setMoviePageAction).toHaveBeenCalledWith(initialState.moviesPage);

    // Проверка соответствия значения для запроса к API и текущего значения input
    expect(movieReducer(initialState, movieActions.setSearchTitle(testMovieTitle)).searchByTitle).toEqual(store.getState().movies.title);
  });

  test('should show the search menu if input value is not empty', async () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>,
    );

    const input = screen.getByTestId('search-input');
    const dispatch = jest.spyOn(hooks, 'useDispatchTyped');
    const debouseTimer = 500;

    fireEvent.change(input, { target: { value: testMovieTitle } });
    expect(dispatch).toHaveBeenCalled();

    await waitFor(() =>
      setTimeout(() => {
        expect(store.getState().app.isSearchOpened).toEqual(true);
      }, debouseTimer),
    );
  });

  test('should hide search menu if input value is empty', async () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>,
    );

    const input = screen.getByTestId('search-input');
    const debouseTimer = 0;

    fireEvent.change(input, { target: { value: '' } });

    await waitFor(() =>
      setTimeout(() => {
        expect(store.getState().app.isSearchOpened).toEqual(false);
      }, debouseTimer),
    );
  });
});
