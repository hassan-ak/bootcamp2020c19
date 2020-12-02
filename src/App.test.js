import { render, screen } from '@testing-library/react';
import App from './App';

test('Header / Title', () => {
  render(<App />);
  const linkElement = screen.getByText(/First React Application with TDD./i);
  expect(linkElement).toBeInTheDocument();
});

test('Hello', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World!/i);
  expect(linkElement).toBeInTheDocument();
});

test('Name', () => {
  render(<App />);
  const linkElement = screen.getByText(/My name is/i);
  expect(linkElement).toBeInTheDocument();
});


