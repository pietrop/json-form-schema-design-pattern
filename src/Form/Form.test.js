import { render, screen } from '@testing-library/react';
import Form from './index';

// TODO: add a test for `Form`?
test.skip('renders learn react link', () => {
  render(<Form />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
