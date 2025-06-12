import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Nav from './Nav';

const listLinks: { href: string; text: string }[] = [
  { href: '#home', text: 'Home' },
  { href: '#about', text: 'About' },
  { href: '#contact', text: 'Contact' },
];

describe('Nav Component', () => {
  it('should have a nav element', () => {
    render(<Nav />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('should have a nav element with a className', () => {
    render(<Nav />);
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('nav');
  });

  it('should have a list element', () => {
    render(<Nav />);
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });

  it('should have a list element with a className', () => {
    render(<Nav />);
    const list = screen.getByRole('list');
    expect(list).toHaveClass('nav__list');
  });

  it('should have multiple list items with a role', () => {
    render(<Nav links={listLinks} />);

    const listItems = screen.getAllByRole('listitem');

    listItems.forEach((listItem) => {
      expect(listItem).toHaveAttribute('role', 'listitem');
    });
  });

  it('should have multiple links inside list items', () => {
    render(<Nav links={listLinks} />);

    const listItems = screen.getAllByRole('listitem');

    listItems.forEach((listItem) => {
      const link = listItem.querySelector('[role="link"]');
      expect(link).toBeInTheDocument();
    });
  });

  it('should have multiple links inside list items with a className', () => {
    render(<Nav links={listLinks} />);

    const listItems = screen.getAllByRole('listitem');

    listItems.forEach((listItem) => {
      const link = listItem.querySelector('[role="link"]');
      expect(link).toHaveClass('nav__link');
    });
  });

  it('should have a list of links', () => {
    render(<Nav links={listLinks} />);
    const list = screen.getAllByRole('link');
    expect(list).toHaveLength(listLinks.length);
  });

  it('should have not have a list of links if no links are provided', () => {
    render(<Nav />);
    const list = screen.queryAllByRole('link');
    expect(list).toHaveLength(0);
  });
});
