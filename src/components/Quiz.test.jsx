import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Quiz from './Quiz';
import { expect, test } from 'vitest';

test('Quiz renders questions and handles answers', async () => {
  render(<Quiz />);
  
  expect(screen.getByText(/Test Your Knowledge/i)).toBeInTheDocument();
  
  const firstOption = screen.getByText(/Voter Verified Paper Audit Trail/i);
  fireEvent.click(firstOption);
  
  expect(await screen.findByText(/Explanation:/i)).toBeInTheDocument();
});
