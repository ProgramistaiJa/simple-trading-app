import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Signup from '@/app/signup/page';

// Mock the useRouter hook
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Signup component', () => {
  it('renders signup form', () => {
    render(<Signup />);
    
    // Check if the signup form elements are rendered
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
  });

  it('shows an error if passwords do not match', async () => {
    render(<Signup />);

    // Fill out the form with mismatched passwords
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/^password$/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText(/confirm password/i), { target: { value: 'password456' } });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /sign up/i }));

    // Check if the error message is displayed
    await waitFor(() => {
      expect(screen.getByText('Passwords do not match')).toBeInTheDocument();
    });
  });
});
