import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Layout from './Layout';

describe('Layout Component', () => {
  it('should render correctly', () => {
    render(<Layout></Layout>);
  });

  it('should have a layout element', () => {
    render(<Layout></Layout>);
    const layout = screen.getByRole('layout');
    expect(layout).toBeInTheDocument();
  });

  it('should have a layout element with a className', () => {
    render(<Layout></Layout>);
    const layout = screen.getByRole('layout');
    expect(layout).toHaveClass('layout');
  });

  it('should have 2 components card inside', () => {
    render(<Layout></Layout>);
    const cards = screen.getAllByRole('card');
    expect(cards).toHaveLength(2);
  });

  it('should have 2 cards with a row as parent', () => {
    render(<Layout></Layout>);
    const cards = screen.getAllByRole('card');

    expect(cards).toHaveLength(2);

    cards.forEach((card) => {
      const row = card.parentElement;
      expect(row).toBeInTheDocument();
      expect(row).toHaveClass('layout__row');
    });
  });

  it('should have the first card with a Header inside', () => {
    render(<Layout></Layout>);
    const firstCard = screen.getAllByRole('card')[0];
    const heading = firstCard.querySelector('[role="heading"]') as HTMLElement;

    expect(heading).toBeInTheDocument();
    expect(firstCard).toContainElement(heading);
  });

  it('should have the first card with a Nav inside', () => {
    render(<Layout></Layout>);

    const firstCard = screen.getAllByRole('card')[0];
    const nav = firstCard.querySelector('[role="navigation"]') as HTMLElement;

    expect(nav).toBeInTheDocument();
    expect(firstCard).toContainElement(nav);
  });

  it('should have a footer as last element inside', () => {
    render(<Layout></Layout>);
    const footer = screen.getByRole('contentinfo');
    const layout = screen.getByRole('layout');

    expect(layout).toContainElement(footer);

    const lastElement = layout.lastElementChild;
    expect(lastElement).toBe(footer);
  });

  it('should have a second card with a router role inside', () => {
    render(<Layout></Layout>);
    const secondCard = screen.getAllByRole('card')[1];
    const router = secondCard.querySelector('[role="router"]') as HTMLElement;

    expect(secondCard).toContainElement(router);
  });

  it('should havea first card with a input search', () => {
    render(<Layout></Layout>);
    const firstCard = screen.getAllByRole('card')[0];
    const input = firstCard.querySelector(
      'input[role="search"]'
    ) as HTMLElement;

    expect(input).toBeInTheDocument();
    expect(firstCard).toContainElement(input);
  });

  it('should have a content row and a head row', () => {
    render(<Layout></Layout>);
    const headRow = screen.getByRole('head-row');
    const contentRow = screen.getByRole('content-row');

    expect(headRow).toBeInTheDocument();
    expect(contentRow).toBeInTheDocument();
  });

  it('should have a content row with className layout__row--full', () => {
    render(<Layout></Layout>);
    const contentRow = screen.getByRole('content-row');
    expect(contentRow).toHaveClass('layout__row--full');
  });
});
