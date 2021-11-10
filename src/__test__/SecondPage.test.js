import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import { SecondPage } from '../pages/SecondPage';
import { store } from '../store';

it('should render Second Page', () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <SecondPage />
      </BrowserRouter>
    </Provider>,
  );

  expect(screen.getByText('Second')).toBeInTheDocument();
  expect(container.querySelector('h3')).toBeInTheDocument();
});
