import type { FunctionComponent } from 'react';
import './_Header.scss';

type Props = {
  title?: string;
};

const Header: FunctionComponent<Props> = ({ title = '' }) => {
  return (
    <>
      <img className="title-img" src="public/zelda-icon.png" alt="logo" />
      <h1 className="title" aria-level={1} role="heading">
        {title}
      </h1>
    </>
  );
};

export default Header;
