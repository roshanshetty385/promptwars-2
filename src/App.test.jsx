import { render, screen } from '@testing-library/react';
import App from './App';
import { expect, test } from 'vitest';

test('App smoke test', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Your Vote/i);
});
