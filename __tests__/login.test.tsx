import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '@/app/login/page';

// Mock the useRouter hook
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Login component', () => {
  it('renders login form', () => {
    render(<Login />);
    
    // Check if the login form elements are rendered
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    
    // Check for the main sign-in button
    expect(screen.getByRole('button', { name: /^sign in$/i })).toBeInTheDocument();

    // Check for the Google sign-in button
    expect(screen.getByRole('button', { name: /sign in with google/i })).toBeInTheDocument();
  });
});
