import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Employee Management System heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Employee Management System/i);
  expect(headingElement).toBeInTheDocument();
});
