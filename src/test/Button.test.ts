// src/components/__tests__/Button.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from '../Components';

describe('Button component', () => {
  it('renders the button with the correct label', () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = vi.fn(); // Create a mock function
    render(<Button label="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call the onClick handler when disabled', () => {
    const handleClick = vi.fn();
    render(<Button label="Click Me" onClick={handleClick} disabled />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
