import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Card from './Card';

describe('Card Component', () => {
  it('should render correctly', () => {
    render(<Card />);
  });

  it('should have a card', () => {
    render(<Card />);
    const card = screen.getByRole('card');
    expect(card).toBeInTheDocument();
  });

  it('should have a card with a className', () => {
    render(<Card />);
    const card = screen.getByRole('card');
    expect(card).toHaveClass('card');
  });

  it('should have a children', () => {
    render(<Card>Children</Card>);
    const children = screen.getByText('Children');
    expect(children).toBeInTheDocument();
  });

  it('should have a padding as a prop', () => {
    const expectedPadding = '10px';
    render(<Card padding={expectedPadding}>Children</Card>);

    const card = screen.getByRole('card');
    expect(card).toHaveStyle(`padding: ${expectedPadding}`);
  });

  it('should have a default padding', () => {
    render(<Card>Children</Card>);

    const card = screen.getByRole('card');
    expect(card).toHaveStyle('padding: 1rem');
  });
});
