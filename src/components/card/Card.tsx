import type { FunctionComponent } from 'react';
import './_Card.scss';

interface CardProps {
  children?: React.ReactNode;
  padding?: string;
}

const Card: FunctionComponent<CardProps> = ({ children, padding = '1rem' }) => {
  return (
    <section role="card" className="card" style={{ padding }}>
      {children}
    </section>
  );
};

export default Card;
