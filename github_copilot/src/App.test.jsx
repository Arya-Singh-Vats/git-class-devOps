import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('creates a new goal', () => {
  render(<App />);

  const input = screen.getByPlaceholderText('Enter a new goal');
  const addButton = screen.getByText('Add');

  fireEvent.change(input, { target: { value: 'Test Goal' } });
  fireEvent.click(addButton);

  expect(screen.getByText('Test Goal')).toBeInTheDocument();
});