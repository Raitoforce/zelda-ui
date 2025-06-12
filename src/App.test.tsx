import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('should render correctly', () => {
    render(<App />);
  });

  it('should have a main layout with role layout', () => {
    render(<App />);
    const layout = screen.getByRole('layout');
    expect(layout).toBeInTheDocument();
  });
});
