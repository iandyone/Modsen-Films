import { screen, render } from '@testing-library/react';
import { ThemeSwitcher } from '@components/ThemeSwitcher';
import { Provider } from 'react-redux';
import { store } from '@store/index';

describe('Theme swither', () => {
  test('is in the doc', () => {
    render(
      <Provider store={store}>
        <ThemeSwitcher />
      </Provider>,
    );
    expect(screen.getByTestId('theme')).toBeInTheDocument();
  });
});
