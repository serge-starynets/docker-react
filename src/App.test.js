import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("check text", () => {
  render(<App />);
  const textElement = screen.getByText('Hello there!');
  expect(textElement).toBeInTheDocument();
});
