import type { FunctionComponent } from 'react';
import './_Card.scss';

interface CardProps {
  children?: React.ReactNode;
  padding?: string;
  className?: string;
}

const Card: FunctionComponent<CardProps> = ({
  children,
  padding = '1rem',
  className = '',
}) => {
  return (
    <section role="card" className={`card ${className}`} style={{ padding }}>
      {children}
    </section>
  );
};

export default Card;
