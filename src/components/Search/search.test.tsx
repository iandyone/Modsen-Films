import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import { Search } from './';

describe('Search Component', () => {
  render(
    <Provider store={store}>
      <Search />
    </Provider>,
  );

  test('was rendered', () => {
    expect(screen.getByTestId('search-component')).toBeInTheDocument();
    expect(screen.getByTestId('search-button')).toBeInTheDocument();
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
  });
});
