import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Header from './Header';

describe('Header Component', () => {
  it('should render correctly', () => {
    render(<Header />);
  });

  it('should have a title', () => {
    render(<Header />);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
  });

  it('should have a prop with the title as parameter', () => {
    const expectedTitle = 'Header';
    render(<Header title={expectedTitle} />);

    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveTextContent(expectedTitle);
  });

  it('should have a prop a default title', () => {
    const { getByRole } = render(<Header />);
    const title = getByRole('heading', { level: 1 });
    expect(title).toHaveTextContent('');
  });

  /* accessibility */

  it('should have aria-level 1', () => {
    render(<Header />);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveAttribute('aria-level', '1');
  });

  it('should have role heading', () => {
    render(<Header />);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveAttribute('role', 'heading');
  });

  /* BEM class*/

  it('should have class header__title', () => {
    render(<Header />);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveClass('title');
  });

  /* Content */

  it('should hava a img with a className', () => {
    render(<Header />);
    const img = screen.getByRole('img');
    expect(img).toHaveClass('title-img');
  });
});
