import React from 'react';
import { Row, Col, Button } from 'antd';
import ProductCard from '../../../components/Client/ProductCard';
import styles from './index.module.scss';

const Favorites = ({ favorites }) => {
  return (
    <div className={styles.favorites}>
      <h2>Your Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <Row gutter={[16, 16]}>
          {favorites.map(product => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Favorites;
