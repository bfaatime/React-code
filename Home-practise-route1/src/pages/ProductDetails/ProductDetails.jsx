import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';

const ProductDetails = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${productId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles['product-details']}>
      <div className={styles['product-details__image']}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={styles['product-details__info']}>
        <div className={styles['product-details__info__name']}>{product.name}</div>
        <div className={styles['product-details__info__description']}>{product.description}</div>
        <div className={styles['product-details__info__price']}>Price: ${product.price}</div>
      </div>
    </div>
  );
};

export default ProductDetails;