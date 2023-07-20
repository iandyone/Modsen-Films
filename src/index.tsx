import { App } from '@components/App';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from '@components/ErrorBoundary';
import '@styles/index.scss';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
);
