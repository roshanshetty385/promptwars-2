import { render, screen, fireEvent, act } from '@testing-library/react';
import ChatWidget from './ChatWidget';
import { ApiProvider } from '../context/ApiContext';
import { expect, test, vi } from 'vitest';

test('ChatWidget opens and displays greeting', async () => {
  render(
    <ApiProvider>
      <ChatWidget />
    </ApiProvider>
  );
  
  const toggleBtn = screen.getByRole('button', { name: /Toggle Chat/i });
  fireEvent.click(toggleBtn);
  
  expect(await screen.findByText(/Namaskar! I'm/i, {}, { timeout: 3000 })).toBeInTheDocument();
});

test('ChatWidget handles user input and AI response', async () => {
  sessionStorage.setItem('GOOGLE_API_KEY', 'fake_key');
  render(
    <ApiProvider>
      <ChatWidget />
    </ApiProvider>
  );
  
  fireEvent.click(screen.getByRole('button', { name: /Toggle Chat/i }));
  
  const chatInput = await screen.findByLabelText(/Chat input/i);
  fireEvent.change(chatInput, { target: { value: 'Hi' } });
  fireEvent.click(screen.getByLabelText(/Send message/i));
  
  expect(await screen.findByText(/Mock AI Response/i, {}, { timeout: 3000 })).toBeInTheDocument();
});
