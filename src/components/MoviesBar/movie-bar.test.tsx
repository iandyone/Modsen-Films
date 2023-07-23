import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MovieBar } from '.';
import { store } from '@store/index';
import * as movieActions from '@reducers/movie-slice';

describe('Movie Bar module', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  jest.mock('@reducers/movie-api', () => ({
    useGetMoviesQuery: jest.fn(),
    useFindMoviesByTitleQuery: jest.fn(),
    useFindMoviesByGenreQuery: jest.fn(),
  }));

  test('should be rendered on the page', () => {
    render(
      <Provider store={store}>
        <MovieBar />
      </Provider>,
    );

    const movieCards = screen.getAllByTestId('movie-card');

    expect(screen.getByTestId('movies-bar')).toBeInTheDocument();
    expect(screen.getByTestId('show-more-button')).toBeInTheDocument();

    expect(movieCards.length).toBe(store.getState().app.filmsPerPage);
    movieCards.forEach((card) => {
      expect(card).toBeInTheDocument();
    });
  });

  test('should increase the movies current pages by clicking to the button', () => {
    render(
      <Provider store={store}>
        <MovieBar />
      </Provider>,
    );
    const setMoviePageAction = jest.spyOn(movieActions, 'setMoviesPage');
    const showMoreButton = screen.getByTestId('show-more-button');
    const currentMoviesMage = store.getState().movies.moviesPage;

    fireEvent.click(showMoreButton);
    expect(setMoviePageAction).toHaveBeenCalledWith(currentMoviesMage + 1);
  });

  test('should open modal by clicking on movie card', () => {
    render(
      <Provider store={store}>
        <MovieBar />
      </Provider>,
    );

    const movieCards = screen.getAllByTestId('movie-card');

    fireEvent.click(movieCards[0]);

    expect(store.getState().app.isModalOpened).toBe(true);
  });
});
