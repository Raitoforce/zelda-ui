import type { FunctionComponent } from 'react';
import './_Nav.scss';

interface NavProps {
  links?: { href: string; text: string }[];
}

const Nav: FunctionComponent<NavProps> = ({ links }) => {
  return (
    <nav className="nav" role="navigation">
      <ul className="nav__list" role="list">
        {links?.map((link) => (
          <li key={link.href} role="listitem">
            <a href={link.href} role="link" className="nav__link">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
