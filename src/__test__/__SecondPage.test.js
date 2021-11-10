import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '../store';
import { SecondPage } from '../pages/SecondPage';

it('should render SecondPage', () => {
  const { container } = render(
    <ReduxProvider store={store}>
      <SecondPage />
    </ReduxProvider>,
  );

  expect(screen.getByText('Second')).toBeInTheDocument();
  expect(container.querySelector('h1')).toBeInTheDocument();
  expect(container.querySelector('h3')).toBeInTheDocument();
});
