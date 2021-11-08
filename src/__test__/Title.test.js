import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Title } from '../components/Title';

it('should display text of the title', () => {
  const { container } = render(
    <Title tag="h2" color="blue">
      React 34
    </Title>,
  );

  expect(screen.getByText('Hello React #React 34')).toBeInTheDocument();
  expect(container.querySelector('h2')).toBeInTheDocument();
});
