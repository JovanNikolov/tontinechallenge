import React from 'react';
import styles from './card.module.scss';

interface CardProps {
  id: string;
  title: string;
  price: number;
  image: string;
}

const Card: React.FC<CardProps> = ({ id, title, price, image }) => {
  return (
    <div className={styles.cardSection}>
      <p>Price: ${price}</p>
      <h3>{title}</h3>
      <img src={image} alt={title} width="200" height="150" />
    </div>
  );
};

export default Card;