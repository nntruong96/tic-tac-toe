import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index';
import '@testing-library/jest-dom';
describe('Button component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-teal-400 text-navy-500');
    expect(button).toHaveClass('px-3 py-3 text-base');
  });

  it('renders with custom color', () => {
    render(<Button color="yellow">Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveClass('bg-yellow-400 text-navy-500');
  });

  it('renders with custom size', () => {
    render(<Button size="large">Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveClass('px-4 py-4 text-lg');
  });

  it('renders with custom className', () => {
    render(<Button className="custom-class">Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveClass('custom-class');
  });

  it('renders with all custom props', () => {
    render(
      <Button color="navy" size="small" className="custom-class">
        Click me
      </Button>
    );
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveClass('bg-navy-400 text-silver-400');
    expect(button).toHaveClass('px-2 py-2 text-sm');
    expect(button).toHaveClass('custom-class');
  });
});
