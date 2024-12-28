import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.products}>
      {products.map(product => (
        <div key={product.id} className={styles['product-card']}>
          <div className={styles['product-card__image']}>
            <img src={product.image} alt={product.name} />
          </div>
          <div className={styles['product-card__info']}>
            <div className={styles['product-card__info__name']}>{product.name}</div>
            <div className={styles['product-card__info__price']}>${product.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;