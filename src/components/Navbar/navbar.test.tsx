import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Navbar } from '.';
import { store } from '@store/index';
import { IFIlter, MovieGenreTags, MovieGenres } from '@constants/types';
import * as hooks from '@utils/hooks/redux-hooks';
import * as movieActions from '@store/reducers/movie-slice';

describe('Navbar module', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should be rendered on the page', () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>,
    );

    const tagButons = screen.getAllByTestId('genre-button');

    expect(screen.getByTestId('navbar-element')).toBeInTheDocument();
    expect(tagButons.length).toBe(Object.keys(MovieGenreTags).length / 2);

    tagButons.forEach((button) => expect(button).toBeInTheDocument());
  });

  test('should set filter type and movie genre search tag', () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>,
    );

    const dispatch = jest.spyOn(hooks, 'useDispatchTyped');
    const setFilterAction = jest.spyOn(movieActions, 'setFilter');
    const setSearchTagAction = jest.spyOn(movieActions, 'setSearchTag');
    const genreFilter: IFIlter = 'genre';

    fireEvent.click(screen.getByText(MovieGenreTags[MovieGenreTags.ACTION].toLowerCase()));

    expect(dispatch).toHaveBeenCalled();
    expect(setSearchTagAction).toHaveBeenCalledWith(MovieGenres[MovieGenres.ACTION]);
    expect(store.getState().movies.searchByTag).toBe(MovieGenres[MovieGenres.ACTION]);
    expect(setFilterAction).toHaveBeenCalledWith(genreFilter);

    fireEvent.click(screen.getByText(MovieGenreTags[MovieGenreTags.HORROR].toLowerCase()));

    expect(dispatch).toHaveBeenCalled();
    expect(setSearchTagAction).toHaveBeenCalledWith(MovieGenres[MovieGenres.HORROR]);
    expect(store.getState().movies.searchByTag).toBe(MovieGenres[MovieGenres.HORROR]);
    expect(setFilterAction).toHaveBeenCalledWith(genreFilter);

    fireEvent.click(screen.getByText(MovieGenreTags[MovieGenreTags.DOCUMENTARY].toLowerCase()));

    expect(dispatch).toHaveBeenCalled();
    expect(setSearchTagAction).toHaveBeenCalledWith(MovieGenres[MovieGenres.DOCUMENTARY]);
    expect(store.getState().movies.searchByTag).toBe(MovieGenres[MovieGenres.DOCUMENTARY]);
    expect(setFilterAction).toHaveBeenCalledWith(genreFilter);

    expect(store.getState().movies.filter).toBe(genreFilter);
  });

  test('should reset filters by clicking on "all" tag button', () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>,
    );

    const setFilterAction = jest.spyOn(movieActions, 'setFilter');
    const setSearchTagAction = jest.spyOn(movieActions, 'setSearchTag');
    const genreFilter: IFIlter = 'genre';
    const defaultFilter: IFIlter = 'default';

    fireEvent.click(screen.getByText(MovieGenreTags[MovieGenreTags.ACTION].toLowerCase()));
    expect(setFilterAction).toHaveBeenCalledWith(genreFilter);

    fireEvent.click(screen.getByText(MovieGenreTags[MovieGenreTags.ALL].toLowerCase()));

    expect(setSearchTagAction).toHaveBeenCalledWith(MovieGenres[MovieGenres.ALL]);
    expect(setFilterAction).toHaveBeenCalledWith(defaultFilter);
    expect(store.getState().movies.filter).toBe(defaultFilter);
  });
});
