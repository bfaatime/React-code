import React from 'react';
import { Card } from 'antd';
import styles from './index.module.scss'; 

const { Meta } = Card;

const ProductCard = ({ product, isLong }) => {
  return (
    <Card
      hoverable
      className={isLong ? styles.longCard : styles.shortCard}  
      style={{ width: 240 }}
      cover={<img alt={product.title} src={product.image} />}
    >
      <Meta title={product.title} description={product.description} />
      <p className={styles.price}>Price: ${product.price}</p>
    </Card>
  );
};

export default ProductCard;
