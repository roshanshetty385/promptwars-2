import { render, screen, fireEvent } from '@testing-library/react';
import Pledge from './Pledge';
import { ApiProvider } from '../context/ApiContext';
import { expect, test } from 'vitest';

test('Pledge component handles user commitment', async () => {
  render(
    <ApiProvider>
      <Pledge />
    </ApiProvider>
  );
  
  const input = screen.getByPlaceholderText(/Enter your full name/i);
  fireEvent.change(input, { target: { value: 'Jane Doe' } });
  
  const btn = screen.getByRole('button', { name: /Submit Pledge/i });
  fireEvent.click(btn);
  
  expect(await screen.findByText(/Certificate of Commitment/i)).toBeInTheDocument();
  expect(screen.getByText(/Jane Doe/i)).toBeInTheDocument();
});
