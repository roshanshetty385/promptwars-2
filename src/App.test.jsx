import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';
import { expect, test, vi } from 'vitest';

// Mock scrollIntoView
window.HTMLElement.prototype.scrollIntoView = vi.fn();

test('renders ElectionGuide Landing Page', () => {
  render(<App />);
  // Using getByText for the header title explicitly to avoid multiple matches with page text
  const titleElement = screen.getByRole('heading', { name: /Your Vote, Your Voice/i });
  expect(titleElement).toBeInTheDocument();
});

test('can open chat widget and receive greeting', async () => {
  render(<App />);
  
  // Find the toggle button
  const toggleBtn = screen.getByLabelText(/Toggle Chat/i);
  expect(toggleBtn).toBeInTheDocument();
  
  // Click to open chat
  act(() => {
    fireEvent.click(toggleBtn);
  });
  
  // Verify bot greeting appears
  const greeting = await screen.findByText(/Namaskar! I'm/i, {}, { timeout: 1500 });
  expect(greeting).toBeInTheDocument();
});

test('quiz component renders and interacts', async () => {
  render(<App />);
  const quizTitle = screen.getByRole('heading', { name: /Test Your Knowledge/i });
  expect(quizTitle).toBeInTheDocument();
  
  // Click first option of first question
  const firstOption = screen.getByText(/Voter Verified Paper Audit Trail/i);
  act(() => {
    fireEvent.click(firstOption);
  });
  
  // Verify explanation appears
  const explanation = await screen.findByText(/Explanation:/i, {}, { timeout: 1000 });
  expect(explanation).toBeInTheDocument();
});
